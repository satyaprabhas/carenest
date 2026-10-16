const express = require('express');
const cors = require('cors');
const multer = require('multer');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 8080;

// Enable CORS and JSON parsing
app.use(cors());
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: true, limit: '50mb' }));

// Ensure required directories exist
const DATA_DIR = path.join(__dirname, 'data');
const UPLOADS_DIR = path.join(__dirname, 'uploads');
const DB_FILE = path.join(DATA_DIR, 'db.json');

if (!fs.existsSync(DATA_DIR)) {
  fs.mkdirSync(DATA_DIR, { recursive: true });
}
if (!fs.existsSync(UPLOADS_DIR)) {
  fs.mkdirSync(UPLOADS_DIR, { recursive: true });
}

// Default initial database state
const DEFAULT_DB = {
  users: [
    {
      id: 1,
      email: 'santhosh@carenest.org',
      password: 'password123',
      name: 'Dr. Santhosh Kumar',
      initials: 'SK',
      role: 'Patient #CN-88421'
    }
  ],
  documents: [
    { id: 1, name: 'Discharge_Summary_Oct2026.pdf', cat: 'Discharge Summary', date: '2026-10-12', size: '245 KB', type: 'pdf', artKey: 'discharge', desc: 'City General Hospital inpatient admission & foot ulcer debridement summary.', fileUrl: null },
    { id: 2, name: 'Blood_Test_Report_Sep2026.pdf', cat: 'Lab Report', date: '2026-09-28', size: '180 KB', type: 'pdf', artKey: 'lab', desc: 'HbA1c (7.8%), Fasting Blood Glucose & Complete Lipid Panel.', fileUrl: null },
    { id: 3, name: 'Prescription_Dr_Sharma.jpg', cat: 'Prescription', date: '2026-10-12', size: '520 KB', type: 'img', artKey: 'prescription', desc: 'Diabetic foot medications, Piperacillin and Metformin prescription.', fileUrl: null },
    { id: 4, name: 'Foot_Xray_Report.pdf', cat: 'Scan/X-Ray', date: '2026-10-06', size: '1.2 MB', type: 'pdf', artKey: 'scan', desc: 'Right foot radiograph - No osteomyelitis or bone fracture identified.', fileUrl: null },
    { id: 5, name: 'Medical_Certificate_Leave.pdf', cat: 'Medical Certificate', date: '2026-10-12', size: '95 KB', type: 'pdf', artKey: 'cert', desc: 'Doctor sanctioned 2 weeks rest with leg elevation.', fileUrl: null },
    { id: 6, name: 'Insurance_Claim_Form.pdf', cat: 'Insurance Document', date: '2026-10-13', size: '320 KB', type: 'pdf', artKey: 'insurance', desc: 'Cashless hospital reimbursement claim with itemized billing.', fileUrl: null }
  ],
  reminders: [
    { id: 1, name: 'Pantoprazole 40mg', time: '07:30', slot: 'Morning', food: '30 mins Before Breakfast', dose: '1 Capsule', photoUrl: null },
    { id: 2, name: 'Metformin 500mg', time: '08:30', slot: 'Morning', food: 'With Breakfast', dose: '1 Tablet', photoUrl: null },
    { id: 3, name: 'Clopidogrel 75mg', time: '13:30', slot: 'Afternoon', food: 'After Lunch', dose: '1 Tablet', photoUrl: null },
    { id: 4, name: 'Atorvastatin 20mg', time: '21:00', slot: 'Night', food: 'After Dinner', dose: '1 Tablet', photoUrl: null }
  ],
  dietLogs: []
};

function readDb() {
  try {
    if (!fs.existsSync(DB_FILE)) {
      fs.writeFileSync(DB_FILE, JSON.stringify(DEFAULT_DB, null, 2));
      return DEFAULT_DB;
    }
    const data = fs.readFileSync(DB_FILE, 'utf8');
    return JSON.parse(data);
  } catch (err) {
    console.error('Error reading db:', err);
    return DEFAULT_DB;
  }
}

function writeDb(data) {
  try {
    fs.writeFileSync(DB_FILE, JSON.stringify(data, null, 2));
    return true;
  } catch (err) {
    console.error('Error writing db:', err);
    return false;
  }
}

// Multer Storage Configuration
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, UPLOADS_DIR);
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
    const ext = path.extname(file.originalname);
    cb(null, 'file-' + uniqueSuffix + ext);
  }
});
const upload = multer({
  storage: storage,
  limits: { fileSize: 25 * 1024 * 1024 } // 25 MB max file size
});

// Serve uploaded files statically
app.use('/uploads', express.static(UPLOADS_DIR));

// ==========================================
// REST API ROUTES
// ==========================================

// Health check endpoint for Render
app.get('/api/health', (req, res) => {
  res.json({
    status: 'ok',
    uptime: process.uptime(),
    timestamp: new Date().toISOString(),
    service: 'CareNest Unified Full-Stack Platform'
  });
});

// 1. Auth: Register
app.post('/api/auth/register', (req, res) => {
  const { name, email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ error: 'Email and password are required' });
  }

  const db = readDb();
  const existing = db.users.find(u => u.email.toLowerCase() === email.toLowerCase());
  if (existing) {
    return res.status(409).json({ error: 'An account with this email already exists' });
  }

  const parts = (name || email).trim().split(/\s+/);
  const initials = parts.length > 1
    ? (parts[0][0] + parts[parts.length - 1][0]).toUpperCase()
    : parts[0].slice(0, 2).toUpperCase();

  const newUser = {
    id: Date.now(),
    email: email.trim(),
    password, // For production use bcrypt
    name: name || email.split('@')[0],
    initials,
    role: `Patient #CN-${Math.floor(10000 + Math.random() * 90000)}`
  };

  db.users.push(newUser);
  writeDb(db);

  res.status(201).json({
    message: 'Registration successful',
    user: { id: newUser.id, name: newUser.name, email: newUser.email, initials: newUser.initials, role: newUser.role }
  });
});

// 2. Auth: Login
app.post('/api/auth/login', (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ error: 'Email and password are required' });
  }

  const db = readDb();
  const user = db.users.find(u => u.email.toLowerCase() === email.toLowerCase().trim() && u.password === password);

  if (!user) {
    return res.status(401).json({ error: 'Invalid email or password' });
  }

  res.json({
    message: 'Login successful',
    user: { id: user.id, name: user.name, email: user.email, initials: user.initials, role: user.role }
  });
});

// 3. Document Vault: Get all documents
app.get('/api/documents', (req, res) => {
  const db = readDb();
  res.json(db.documents);
});

// 4. Document Vault: Upload new file
app.post('/api/documents/upload', upload.single('document'), (req, res) => {
  const file = req.file;
  const { name, category, description } = req.body;

  if (!file) {
    return res.status(400).json({ error: 'No file uploaded' });
  }

  const db = readDb();
  const docName = name || file.originalname;
  const isPdf = file.originalname.toLowerCase().endsWith('.pdf') || file.mimetype.includes('pdf');

  const newDoc = {
    id: Date.now(),
    name: docName,
    cat: category || 'General Medical',
    date: new Date().toISOString().split('T')[0],
    size: Math.round(file.size / 1024) + ' KB',
    type: isPdf ? 'pdf' : 'img',
    artKey: isPdf ? 'lab' : 'prescription',
    desc: description || 'Uploaded via CareNest Medical Vault.',
    fileUrl: `/uploads/${file.filename}`
  };

  db.documents.unshift(newDoc);
  writeDb(db);

  res.status(201).json({
    message: 'File successfully stored in CareNest backend vault',
    document: newDoc
  });
});

// 5. Document Vault: Delete document
app.delete('/api/documents/:id', (req, res) => {
  const docId = parseInt(req.params.id, 10);
  const db = readDb();
  const index = db.documents.findIndex(d => d.id === docId);

  if (index === -1) {
    return res.status(404).json({ error: 'Document not found' });
  }

  const [deleted] = db.documents.splice(index, 1);
  if (deleted.fileUrl) {
    const filePath = path.join(__dirname, deleted.fileUrl);
    if (fs.existsSync(filePath)) {
      try { fs.unlinkSync(filePath); } catch (e) {}
    }
  }

  writeDb(db);
  res.json({ message: 'Document deleted successfully', id: docId });
});

// 6. Reminders: Get all reminders
app.get('/api/reminders', (req, res) => {
  const db = readDb();
  res.json(db.reminders);
});

// 7. Reminders: Add new reminder (supports tablet photo upload)
app.post('/api/reminders', upload.single('tabletPhoto'), (req, res) => {
  const { name, time, slot, food, dose } = req.body;
  if (!name || !time) {
    return res.status(400).json({ error: 'Medicine name and time are required' });
  }

  const db = readDb();
  const photoUrl = req.file ? `/uploads/${req.file.filename}` : null;

  const newReminder = {
    id: Date.now(),
    name,
    time,
    slot: slot || 'Morning',
    food: food || 'After meals',
    dose: dose || '1 Tablet',
    photoUrl
  };

  db.reminders.push(newReminder);
  writeDb(db);

  res.status(201).json({
    message: 'Reminder added successfully',
    reminder: newReminder
  });
});

// 8. Reminders: Delete reminder
app.delete('/api/reminders/:id', (req, res) => {
  const reminderId = parseInt(req.params.id, 10);
  const db = readDb();
  const index = db.reminders.findIndex(r => r.id === reminderId);

  if (index === -1) {
    return res.status(404).json({ error: 'Reminder not found' });
  }

  db.reminders.splice(index, 1);
  writeDb(db);
  res.json({ message: 'Reminder deleted successfully', id: reminderId });
});

// 9. Diet: Get history
app.get('/api/diet/history', (req, res) => {
  const db = readDb();
  res.json(db.dietLogs);
});

// 10. Diet: Save daily log
app.post('/api/diet/log', (req, res) => {
  const logData = req.body;
  const db = readDb();

  const newLog = {
    id: Date.now(),
    date: logData.date || new Date().toISOString().split('T')[0],
    timestamp: new Date().toLocaleTimeString(),
    waterGlasses: logData.waterGlasses || 0,
    eatenMeals: logData.eatenMeals || [],
    hungerLevel: logData.hungerLevel || 'satisfied',
    calories: logData.calories || 0
  };

  db.dietLogs.push(newLog);
  writeDb(db);

  res.status(201).json({
    message: 'Diet log saved to backend database',
    log: newLog
  });
});

// ==========================================
// SERVE FRONTEND STATIC FILES
// ==========================================
app.use(express.static(__dirname));

// Send index.html for root path
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Start Express Server
app.listen(PORT, () => {
  console.log(`===============================================`);
  console.log(`🏥 CareNest Full-Stack Server Running!`);
  console.log(`🌐 Local URL: http://localhost:${PORT}`);
  console.log(`📁 Uploads Directory: ${UPLOADS_DIR}`);
  console.log(`💾 Database: ${DB_FILE}`);
  console.log(`===============================================`);
});
