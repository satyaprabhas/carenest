const express = require('express');
const cors = require('cors');
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 8080;
const MONGODB_URI = process.env.MONGODB_URI || '';

// Enable CORS for Render Static Site frontend and JSON parsing
app.use(cors({
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));
app.options('*', cors());
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

// Default initial database state with complete standard prescriptions
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
    {
      id: 1,
      name: 'Pantoprazole',
      dose: '40mg Tablet',
      time: '07:30 AM',
      slot: 'morning',
      meal: 'Before Food (30 mins before breakfast)',
      notes: 'Gastric acid suppression & stomach protection',
      photo: null,
      isCustomPhoto: false,
      status: 'taken'
    },
    {
      id: 2,
      name: 'Metformin',
      dose: '500mg Tablet',
      time: '08:30 AM',
      slot: 'morning',
      meal: 'After Food (Breakfast)',
      notes: 'Type 2 Diabetes glucose management',
      photo: null,
      isCustomPhoto: false,
      status: 'pending'
    },
    {
      id: 3,
      name: 'Clopidogrel',
      dose: '75mg Coated Pill',
      time: '08:30 AM',
      slot: 'morning',
      meal: 'After Food',
      notes: 'Cardiovascular antiplatelet blood thinner',
      photo: null,
      isCustomPhoto: false,
      status: 'pending'
    },
    {
      id: 4,
      name: 'Multivitamin',
      dose: '1 Capsule',
      time: '01:30 PM',
      slot: 'afternoon',
      meal: 'After Food (Lunch)',
      notes: 'Zinc, B-Complex & essential daily micro-nutrients',
      photo: null,
      isCustomPhoto: false,
      status: 'pending'
    },
    {
      id: 5,
      name: 'Metformin (Evening)',
      dose: '500mg Tablet',
      time: '08:30 PM',
      slot: 'evening',
      meal: 'After Food (Dinner)',
      notes: 'Evening post-prandial glycemic control',
      photo: null,
      isCustomPhoto: false,
      status: 'pending'
    },
    {
      id: 6,
      name: 'Insulin Glargine',
      dose: '20 Units (Pen)',
      time: '10:00 PM',
      slot: 'night',
      meal: 'At Bedtime',
      notes: 'Long-acting basal insulin subcutaneous injection',
      photo: null,
      isCustomPhoto: false,
      status: 'pending'
    }
  ],
  dietLogs: []
};

// ==========================================
// MONGODB ATLAS CLUSTER (100% FREE PERSISTENCE)
// ==========================================
let isMongoConnected = false;

// 1. Reminder Schema
const reminderSchema = new mongoose.Schema({
  id: { type: Number, required: true, unique: true },
  name: { type: String, required: true },
  dose: { type: String, default: '1 Tablet' },
  time: { type: String, required: true },
  slot: { type: String, default: 'morning' },
  meal: { type: String, default: 'After Food' },
  notes: { type: String, default: '' },
  photo: { type: String, default: null },
  isCustomPhoto: { type: Boolean, default: false },
  status: { type: String, default: 'pending' },
  updatedAt: { type: Date, default: Date.now }
});
const ReminderModel = mongoose.model('Reminder', reminderSchema);

// 2. DietLog Schema
const dietLogSchema = new mongoose.Schema({
  id: { type: Number, required: true, unique: true },
  date: { type: String, required: true },
  timestamp: { type: String, default: '' },
  waterGlasses: { type: Number, default: 0 },
  eatenMeals: [String],
  hungerLevel: { type: String, default: 'satisfied' },
  calories: { type: Number, default: 0 },
  createdAt: { type: Date, default: Date.now }
});
const DietLogModel = mongoose.model('DietLog', dietLogSchema);

// 3. Document Vault Schema
const documentSchema = new mongoose.Schema({
  id: { type: Number, required: true, unique: true },
  name: { type: String, required: true },
  cat: { type: String, default: 'General Medical' },
  date: { type: String, required: true },
  size: { type: String, default: '' },
  type: { type: String, default: 'pdf' },
  artKey: { type: String, default: 'lab' },
  desc: { type: String, default: '' },
  fileUrl: { type: String, default: null },
  createdAt: { type: Date, default: Date.now }
});
const DocumentModel = mongoose.model('Document', documentSchema);

// 4. User Account Schema
const userSchema = new mongoose.Schema({
  id: { type: Number, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  name: { type: String, required: true },
  initials: { type: String, default: 'SK' },
  role: { type: String, default: 'Patient' },
  createdAt: { type: Date, default: Date.now }
});
const UserModel = mongoose.model('User', userSchema);

// Attempt MongoDB Connection if MONGODB_URI is provided
if (MONGODB_URI) {
  mongoose.connect(MONGODB_URI)
    .then(async () => {
      isMongoConnected = true;
      console.log('☁️  Connected to MongoDB Atlas Free Cloud Database!');

      try {
        const remCount = await ReminderModel.countDocuments();
        if (remCount === 0) {
          await ReminderModel.insertMany(DEFAULT_DB.reminders);
          console.log('🌱 Seeded standard prescriptions to MongoDB Atlas');
        }
        const docCount = await DocumentModel.countDocuments();
        if (docCount === 0) {
          await DocumentModel.insertMany(DEFAULT_DB.documents);
          console.log('🌱 Seeded standard medical documents to MongoDB Atlas');
        }
        const userCount = await UserModel.countDocuments();
        if (userCount === 0) {
          await UserModel.insertMany(DEFAULT_DB.users);
          console.log('🌱 Seeded default user account to MongoDB Atlas');
        }
      } catch (seedErr) {
        console.warn('MongoDB seeding notice:', seedErr.message);
      }
    })
    .catch(err => {
      console.warn('⚠️  MongoDB Atlas connection error, using local data/db.json fallback:', err.message);
      isMongoConnected = false;
    });
} else {
  console.log('ℹ️  MONGODB_URI not detected in environment. Running in local fallback mode (data/db.json).');
}

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

// Cloud Sync & Health Status
app.get('/api/health', (req, res) => {
  res.json({
    status: 'ok',
    uptime: process.uptime(),
    timestamp: new Date().toISOString(),
    service: 'CareNest Unified Multi-Device Health Cloud',
    storageMode: isMongoConnected ? 'MongoDB Atlas (Persistent Cloud)' : 'Local File System (data/db.json)',
    isCloudSynced: isMongoConnected
  });
});

app.get('/api/sync/status', async (req, res) => {
  let remindersCount = 0;
  if (isMongoConnected) {
    try { remindersCount = await ReminderModel.countDocuments(); } catch(e) {}
  } else {
    remindersCount = (readDb().reminders || []).length;
  }
  res.json({
    connected: isMongoConnected,
    mode: isMongoConnected ? 'mongodb_atlas' : 'local_storage',
    remindersCount,
    lastSync: new Date().toISOString()
  });
});

// 1. Auth: Register
app.post('/api/auth/register', async (req, res) => {
  try {
    const { name, email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ error: 'Email and password are required' });
    }

    const trimmedEmail = email.trim().toLowerCase();
    const parts = (name || email).trim().split(/\s+/);
    const initials = parts.length > 1
      ? (parts[0][0] + parts[parts.length - 1][0]).toUpperCase()
      : parts[0].slice(0, 2).toUpperCase();

    const newUser = {
      id: Date.now(),
      email: trimmedEmail,
      password,
      name: name || email.split('@')[0],
      initials,
      role: `Patient #CN-${Math.floor(10000 + Math.random() * 90000)}`
    };

    if (isMongoConnected) {
      const existing = await UserModel.findOne({ email: trimmedEmail });
      if (existing) {
        return res.status(409).json({ error: 'An account with this email already exists' });
      }
      await UserModel.create(newUser);
    }

    const db = readDb();
    const localExisting = db.users.find(u => u.email.toLowerCase() === trimmedEmail);
    if (localExisting && !isMongoConnected) {
      return res.status(409).json({ error: 'An account with this email already exists' });
    }
    db.users.push(newUser);
    writeDb(db);

    res.status(201).json({
      message: 'Registration successful',
      user: { id: newUser.id, name: newUser.name, email: newUser.email, initials: newUser.initials, role: newUser.role }
    });
  } catch (err) {
    console.error('Register error:', err);
    res.status(500).json({ error: 'Registration failed' });
  }
});

// 2. Auth: Login
app.post('/api/auth/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ error: 'Email and password are required' });
    }

    const trimmedEmail = email.trim().toLowerCase();

    if (isMongoConnected) {
      const user = await UserModel.findOne({ email: trimmedEmail, password });
      if (user) {
        return res.json({
          message: 'Login successful',
          user: { id: user.id, name: user.name, email: user.email, initials: user.initials, role: user.role }
        });
      }
    }

    const db = readDb();
    const user = db.users.find(u => u.email.toLowerCase() === trimmedEmail && u.password === password);

    if (!user) {
      return res.status(401).json({ error: 'Invalid email or password' });
    }

    res.json({
      message: 'Login successful',
      user: { id: user.id, name: user.name, email: user.email, initials: user.initials, role: user.role }
    });
  } catch (err) {
    console.error('Login error:', err);
    res.status(500).json({ error: 'Login failed' });
  }
});

// 3. Document Vault: Get all documents
app.get('/api/documents', async (req, res) => {
  try {
    if (isMongoConnected) {
      const docs = await DocumentModel.find().sort({ id: -1 }).lean();
      return res.json(docs);
    }
  } catch (err) {
    console.error('Mongo docs read error:', err.message);
  }
  const db = readDb();
  res.json(db.documents || []);
});

// 4. Document Vault: Upload new file
app.post('/api/documents/upload', upload.single('document'), async (req, res) => {
  try {
    const file = req.file;
    const { name, category, description } = req.body;

    if (!file) {
      return res.status(400).json({ error: 'No file uploaded' });
    }

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

    if (isMongoConnected) {
      await DocumentModel.create(newDoc);
    }

    const db = readDb();
    db.documents = db.documents || [];
    db.documents.unshift(newDoc);
    writeDb(db);

    res.status(201).json({
      message: 'File successfully stored in CareNest backend vault',
      document: newDoc
    });
  } catch (err) {
    console.error('Document upload error:', err);
    res.status(500).json({ error: 'Failed to upload document' });
  }
});

// 5. Document Vault: Delete document
app.delete('/api/documents/:id', async (req, res) => {
  try {
    const docId = parseInt(req.params.id, 10);

    if (isMongoConnected) {
      await DocumentModel.deleteOne({ id: docId });
    }

    const db = readDb();
    const index = (db.documents || []).findIndex(d => d.id === docId);

    if (index !== -1) {
      const [deleted] = db.documents.splice(index, 1);
      if (deleted && deleted.fileUrl) {
        const filePath = path.join(__dirname, deleted.fileUrl);
        if (fs.existsSync(filePath)) {
          try { fs.unlinkSync(filePath); } catch (e) {}
        }
      }
      writeDb(db);
    }

    res.json({ message: 'Document deleted successfully', id: docId });
  } catch (err) {
    console.error('Delete doc error:', err);
    res.status(500).json({ error: 'Failed to delete document' });
  }
});

// 6. Reminders: Get all reminders (Cross-Device Sync)
app.get('/api/reminders', async (req, res) => {
  try {
    if (isMongoConnected) {
      const reminders = await ReminderModel.find().sort({ id: 1 }).lean();
      return res.json(reminders);
    }
  } catch (err) {
    console.error('MongoDB reminders read error:', err.message);
  }
  const db = readDb();
  res.json(db.reminders || []);
});

// 7. Reminders: Add/Upsert reminder (supports JSON body or multipart tablet photo upload)
app.post('/api/reminders', upload.single('tabletPhoto'), async (req, res) => {
  try {
    const { id, name, time, slot, food, meal, dose, notes, photo, isCustomPhoto, status } = req.body;
    if (!name || !time) {
      return res.status(400).json({ error: 'Medicine name and time are required' });
    }

    const photoUrl = req.file ? `/uploads/${req.file.filename}` : (photo || null);
    const reminderId = id ? Number(id) : Date.now();

    const newReminder = {
      id: reminderId,
      name,
      dose: dose || '1 Tablet',
      time,
      slot: (slot || 'morning').toLowerCase(),
      meal: meal || food || 'After Food',
      notes: notes || 'Prescribed medication',
      photo: photoUrl,
      isCustomPhoto: isCustomPhoto === true || isCustomPhoto === 'true',
      status: status || 'pending',
      updatedAt: new Date()
    };

    if (isMongoConnected) {
      await ReminderModel.findOneAndUpdate(
        { id: reminderId },
        newReminder,
        { upsert: true, new: true }
      );
    }

    const db = readDb();
    db.reminders = db.reminders || [];
    const existingIdx = db.reminders.findIndex(r => r.id === reminderId);
    if (existingIdx !== -1) {
      db.reminders[existingIdx] = newReminder;
    } else {
      db.reminders.push(newReminder);
    }
    writeDb(db);

    res.status(201).json({
      message: 'Reminder saved successfully',
      reminder: newReminder
    });
  } catch (err) {
    console.error('Error saving reminder:', err);
    res.status(500).json({ error: 'Failed to save reminder' });
  }
});

// 8. Reminders: Update reminder status or properties (e.g. taken/pending/skipped)
app.put('/api/reminders/:id', async (req, res) => {
  try {
    const reminderId = Number(req.params.id);
    const updates = req.body;

    if (isMongoConnected) {
      await ReminderModel.findOneAndUpdate(
        { id: reminderId },
        { ...updates, updatedAt: new Date() }
      );
    }

    const db = readDb();
    const index = (db.reminders || []).findIndex(r => r.id === reminderId);
    if (index !== -1) {
      db.reminders[index] = { ...db.reminders[index], ...updates };
      writeDb(db);
      return res.json({ message: 'Reminder updated', reminder: db.reminders[index] });
    }

    if (isMongoConnected) {
      return res.json({ message: 'Reminder updated in cloud database' });
    }

    res.status(404).json({ error: 'Reminder not found' });
  } catch (err) {
    console.error('Error updating reminder:', err);
    res.status(500).json({ error: 'Failed to update reminder' });
  }
});

// 9. Reminders: Delete reminder
app.delete('/api/reminders/:id', async (req, res) => {
  try {
    const reminderId = Number(req.params.id);

    if (isMongoConnected) {
      await ReminderModel.deleteOne({ id: reminderId });
    }

    const db = readDb();
    db.reminders = (db.reminders || []).filter(r => r.id !== reminderId);
    writeDb(db);

    res.json({ message: 'Reminder deleted successfully', id: reminderId });
  } catch (err) {
    console.error('Error deleting reminder:', err);
    res.status(500).json({ error: 'Failed to delete reminder' });
  }
});

// 10. Diet: Get history
app.get('/api/diet/history', async (req, res) => {
  try {
    if (isMongoConnected) {
      const logs = await DietLogModel.find().sort({ id: -1 }).lean();
      return res.json(logs);
    }
  } catch (err) {
    console.error('MongoDB diet read error:', err.message);
  }
  const db = readDb();
  res.json(db.dietLogs || []);
});

// 11. Diet: Save daily log
app.post('/api/diet/log', async (req, res) => {
  try {
    const logData = req.body;
    const newLog = {
      id: Date.now(),
      date: logData.date || new Date().toISOString().split('T')[0],
      timestamp: logData.timestamp || new Date().toLocaleTimeString(),
      waterGlasses: Number(logData.waterGlasses) || 0,
      eatenMeals: Array.isArray(logData.eatenMeals) ? logData.eatenMeals : [],
      hungerLevel: logData.hungerLevel || 'satisfied',
      calories: Number(logData.calories) || 0,
      createdAt: new Date()
    };

    if (isMongoConnected) {
      await DietLogModel.create(newLog);
    }

    const db = readDb();
    db.dietLogs = db.dietLogs || [];
    db.dietLogs.unshift(newLog);
    writeDb(db);

    res.status(201).json({
      message: 'Diet log saved to database',
      log: newLog
    });
  } catch (err) {
    console.error('Error saving diet log:', err);
    res.status(500).json({ error: 'Failed to save diet log' });
  }
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
