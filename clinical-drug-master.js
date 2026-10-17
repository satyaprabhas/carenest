/**
 * CareNest Comprehensive Clinical Drug Master & Fuzzy OCR Matcher
 * Contains 220+ widely prescribed Indian medications with brand aliases, generic salts,
 * standard dosages, clinical indications, daypart slots, and OCR typo correction.
 */

(function (root) {
  'use strict';

  // Strict Blacklist: Lines containing these administrative, vital, or lab terms
  // must NEVER be mistakenly identified as prescribed medicines.
  const NON_MED_BLACKLIST_REGEX = /\b(investigation|laboratory|creatinine|hemoglobin|haemoglobin|platelet|bilirubin|wbc|rbc|tlc|dlc|urea|serum|blood\s*sugar|fbs|ppbs|rbs|hba1c|lipid|cholesterol|triglyceride|electrolyte|sodium|potassium|urine|culture|bp|pulse|spo2|temperature|temp|afebrile|vitals|examination|admission|discharge|consultant|department|ward|bed\s*no|ipd|opd|mrn|history|complaint|diagnos|impression|course|operative|procedure|incision|anesthesia|dressing|suture|normal\s*saline|fluid|instruction|warning|review|doctor|signature|seal|reg\s*no|summary|patient\s*name|hospital|address|phone|email)\b/i;

  const CLINICAL_DRUG_MASTER = [
    // ----------------------------------------------------
    // 1. CARDIOVASCULAR & ANTIHYPERTENSIVES
    // ----------------------------------------------------
    {
      id: 'cd-telm40',
      name: 'Telmisartan 40mg',
      brand: 'Telma 40',
      generic: 'Telmisartan',
      aliases: ['telma', 'telmikind', 'telsar', 'telpres', 'telvas', 'telmikaad', 'arbitel'],
      dose: '40mg',
      category: 'Cardiovascular',
      relation: 'Morning with Water',
      slots: ['morning'],
      purpose: 'Controls high blood pressure & provides heart/kidney protection'
    },
    {
      id: 'cd-telm80',
      name: 'Telmisartan 80mg',
      brand: 'Telma 80',
      generic: 'Telmisartan',
      aliases: ['telma 80', 'telmikind 80', 'telsar 80'],
      dose: '80mg',
      category: 'Cardiovascular',
      relation: 'Morning with Water',
      slots: ['morning'],
      purpose: 'Potent 24-hour hypertension reduction for resistant high BP'
    },
    {
      id: 'cd-telma-am',
      name: 'Telmisartan 40mg + Amlodipine 5mg',
      brand: 'Telma-AM',
      generic: 'Telmisartan + Amlodipine',
      aliases: ['telma am', 'telmikind am', 'telsar am', 'telvas am', 'arbitel am'],
      dose: '40mg/5mg',
      category: 'Cardiovascular',
      relation: 'Morning with Water',
      slots: ['morning'],
      purpose: 'Dual-action arterial relaxation and blood pressure normalization'
    },
    {
      id: 'cd-telma-h',
      name: 'Telmisartan 40mg + Hydrochlorothiazide 12.5mg',
      brand: 'Telma-H',
      generic: 'Telmisartan + HCTZ',
      aliases: ['telma h', 'telmikind h', 'telsar h'],
      dose: '40mg/12.5mg',
      category: 'Cardiovascular',
      relation: 'Morning with Water',
      slots: ['morning'],
      purpose: 'Combination antihypertensive with diuretic fluid reduction'
    },
    {
      id: 'cd-amlo5',
      name: 'Amlodipine 5mg',
      brand: 'Amlong 5',
      generic: 'Amlodipine Besylate',
      aliases: ['amlong', 'stamlo', 'amlovas', 'amlocad', 'amlozem'],
      dose: '5mg',
      category: 'Cardiovascular',
      relation: 'Morning after Breakfast',
      slots: ['morning'],
      purpose: 'Calcium-channel blocker that dilates peripheral arteries and lowers BP'
    },
    {
      id: 'cd-amlo10',
      name: 'Amlodipine 10mg',
      brand: 'Amlong 10',
      generic: 'Amlodipine Besylate',
      aliases: ['amlong 10', 'stamlo 10', 'amlovas 10'],
      dose: '10mg',
      category: 'Cardiovascular',
      relation: 'Morning after Breakfast',
      slots: ['morning'],
      purpose: 'Controls moderate-to-severe hypertension and prevents angina'
    },
    {
      id: 'cd-losa50',
      name: 'Losartan 50mg',
      brand: 'Losacar 50',
      generic: 'Losartan Potassium',
      aliases: ['losacar', 'repace', 'zaart', 'losapres'],
      dose: '50mg',
      category: 'Cardiovascular',
      relation: 'Morning with Water',
      slots: ['morning'],
      purpose: 'Angiotensin receptor blocker for blood pressure and diabetic nephropathy'
    },
    {
      id: 'cd-rami25',
      name: 'Ramipril 2.5mg',
      brand: 'Cardace 2.5',
      generic: 'Ramipril',
      aliases: ['cardace', 'ramipres', 'hopace'],
      dose: '2.5mg',
      category: 'Cardiovascular',
      relation: 'Morning with Water',
      slots: ['morning'],
      purpose: 'ACE inhibitor for post-MI myocardial protection and blood pressure'
    },
    {
      id: 'cd-rami5',
      name: 'Ramipril 5mg',
      brand: 'Cardace 5',
      generic: 'Ramipril',
      aliases: ['cardace 5', 'ramipres 5'],
      dose: '5mg',
      category: 'Cardiovascular',
      relation: 'Morning with Water',
      slots: ['morning'],
      purpose: 'Strengthens cardiac output, prevents congestive heart failure progression'
    },
    {
      id: 'cd-enva5',
      name: 'Enalapril 5mg',
      brand: 'Envas 5',
      generic: 'Enalapril Maleate',
      aliases: ['envas', 'nuril'],
      dose: '5mg',
      category: 'Cardiovascular',
      relation: 'Morning with Water',
      slots: ['morning'],
      purpose: 'Vasodilation and blood pressure reduction'
    },
    {
      id: 'cd-olme20',
      name: 'Olmesartan 20mg',
      brand: 'Olmecip 20',
      generic: 'Olmesartan Medoxomil',
      aliases: ['olmecip', 'olmetor', 'olmy'],
      dose: '20mg',
      category: 'Cardiovascular',
      relation: 'Morning with Water',
      slots: ['morning'],
      purpose: 'Arterial relaxation and sustained 24-hour BP control'
    },
    {
      id: 'cd-meto25',
      name: 'Metoprolol Succinate 25mg',
      brand: 'Betaloc 25',
      generic: 'Metoprolol Succinate Extended Release',
      aliases: ['betaloc', 'metolar', 'metocard', 'starpress'],
      dose: '25mg',
      category: 'Cardiovascular',
      relation: 'Morning after Food',
      slots: ['morning'],
      purpose: 'Beta-blocker for heart rate moderation and post-angioplasty recovery'
    },
    {
      id: 'cd-meto50',
      name: 'Metoprolol Succinate 50mg',
      brand: 'Betaloc 50',
      generic: 'Metoprolol Succinate Extended Release',
      aliases: ['betaloc 50', 'metolar 50', 'starpress 50'],
      dose: '50mg',
      category: 'Cardiovascular',
      relation: 'Morning after Food',
      slots: ['morning'],
      purpose: 'Reduces cardiac myocardial oxygen workload and regulates arrhythmia'
    },
    {
      id: 'cd-biso25',
      name: 'Bisoprolol 2.5mg',
      brand: 'Concor 2.5',
      generic: 'Bisoprolol Fumarate',
      aliases: ['concor', 'bisoheart', 'corbis'],
      dose: '2.5mg',
      category: 'Cardiovascular',
      relation: 'Morning with Water',
      slots: ['morning'],
      purpose: 'Cardioselective beta-1 blocker for heart rate and stable heart failure'
    },
    {
      id: 'cd-biso5',
      name: 'Bisoprolol 5mg',
      brand: 'Concor 5',
      generic: 'Bisoprolol Fumarate',
      aliases: ['concor 5', 'corbis 5'],
      dose: '5mg',
      category: 'Cardiovascular',
      relation: 'Morning with Water',
      slots: ['morning'],
      purpose: 'Optimizes cardiac pumping efficiency and controls resting heart rate'
    },
    {
      id: 'cd-nebi5',
      name: 'Nebivolol 5mg',
      brand: 'Nebicard 5',
      generic: 'Nebivolol Hydrochloride',
      aliases: ['nebicard', 'nebilong', 'nebistar'],
      dose: '5mg',
      category: 'Cardiovascular',
      relation: 'Morning with Water',
      slots: ['morning'],
      purpose: 'Vasodilating beta-blocker with nitric oxide release for arterial elasticity'
    },
    {
      id: 'cd-carv625',
      name: 'Carvedilol 6.25mg',
      brand: 'Carca 6.25',
      generic: 'Carvedilol',
      aliases: ['carca', 'cardivas', 'carvil'],
      dose: '6.25mg',
      category: 'Cardiovascular',
      relation: 'After Food (Morning, Evening)',
      slots: ['morning', 'evening'],
      purpose: 'Alpha and beta blocker improving ejection fraction in heart failure'
    },
    {
      id: 'cd-carv125',
      name: 'Carvedilol 12.5mg',
      brand: 'Carca 12.5',
      generic: 'Carvedilol',
      aliases: ['carca 12.5', 'cardivas 12.5'],
      dose: '12.5mg',
      category: 'Cardiovascular',
      relation: 'After Food (Morning, Evening)',
      slots: ['morning', 'evening'],
      purpose: 'Maintains steady hemodynamics and reduces cardiac stress'
    },
    {
      id: 'cd-dilt60',
      name: 'Diltiazem 60mg',
      brand: 'Dilzem 60',
      generic: 'Diltiazem Hydrochloride',
      aliases: ['dilzem', 'angizem'],
      dose: '60mg',
      category: 'Cardiovascular',
      relation: 'Before Meals',
      slots: ['morning', 'evening'],
      purpose: 'Non-dihydropyridine calcium blocker for angina and tachycardia'
    },
    {
      id: 'cd-mono30',
      name: 'Isosorbide Mononitrate 30mg',
      brand: 'Monotrate 30',
      generic: 'Isosorbide-5-Mononitrate SR',
      aliases: ['monotrate', 'ismo', 'monotrate sr', 'imdur'],
      dose: '30mg',
      category: 'Cardiovascular',
      relation: 'Morning after Breakfast',
      slots: ['morning'],
      purpose: 'Coronary vasodilator preventing angina attacks and chest tightness'
    },
    {
      id: 'cd-sorbi10',
      name: 'Sorbitrate 10mg',
      brand: 'Sorbitrate 10',
      generic: 'Isosorbide Dinitrate',
      aliases: ['sorbitrate'],
      dose: '10mg',
      category: 'Cardiovascular',
      relation: 'Sublingually as needed or scheduled',
      slots: ['afternoon'],
      purpose: 'Rapid relief and prevention of cardiac angina pain'
    },
    {
      id: 'cd-digo025',
      name: 'Digoxin 0.25mg',
      brand: 'Lanoxin 0.25',
      generic: 'Digoxin',
      aliases: ['lanoxin'],
      dose: '0.25mg',
      category: 'Cardiovascular',
      relation: 'After Food',
      slots: ['morning'],
      purpose: 'Increases cardiac contractility and controls atrial fibrillation rate'
    },

    // ----------------------------------------------------
    // 2. CHOLESTEROL & STATINS
    // ----------------------------------------------------
    {
      id: 'cd-ator10',
      name: 'Atorvastatin 10mg',
      brand: 'Atorva 10',
      generic: 'Atorvastatin Calcium',
      aliases: ['atorva', 'storvas', 'atocor', 'lipitor', 'tonact'],
      dose: '10mg',
      category: 'Lipid Lowering',
      relation: 'At Bedtime',
      slots: ['bedtime'],
      purpose: 'Lowers LDL bad cholesterol and reduces plaque buildup'
    },
    {
      id: 'cd-ator20',
      name: 'Atorvastatin 20mg',
      brand: 'Atorva 20',
      generic: 'Atorvastatin Calcium',
      aliases: ['atorva 20', 'storvas 20', 'atocor 20', 'tonact 20'],
      dose: '20mg',
      category: 'Lipid Lowering',
      relation: 'At Bedtime',
      slots: ['bedtime'],
      purpose: 'Stabilizes arterial plaques and prevents cardiovascular blockages'
    },
    {
      id: 'cd-ator40',
      name: 'Atorvastatin 40mg',
      brand: 'Atorva 40',
      generic: 'Atorvastatin Calcium',
      aliases: ['atorva 40', 'storvas 40', 'atocor 40', 'tonact 40'],
      dose: '40mg',
      category: 'Lipid Lowering',
      relation: 'At Bedtime',
      slots: ['bedtime'],
      purpose: 'High-intensity statin therapy post-angioplasty / myocardial infarction'
    },
    {
      id: 'cd-rosu10',
      name: 'Rosuvastatin 10mg',
      brand: 'Rosuvas 10',
      generic: 'Rosuvastatin Calcium',
      aliases: ['rosuvas', 'rozavel', 'crestor', 'rosave', 'novastat'],
      dose: '10mg',
      category: 'Lipid Lowering',
      relation: 'At Bedtime',
      slots: ['bedtime'],
      purpose: 'Potent reduction of LDL cholesterol and elevation of protective HDL'
    },
    {
      id: 'cd-rosu20',
      name: 'Rosuvastatin 20mg',
      brand: 'Rosuvas 20',
      generic: 'Rosuvastatin Calcium',
      aliases: ['rosuvas 20', 'rozavel 20', 'crestor 20'],
      dose: '20mg',
      category: 'Lipid Lowering',
      relation: 'At Bedtime',
      slots: ['bedtime'],
      purpose: 'Intensive lipid management preventing recurrent coronary events'
    },
    {
      id: 'cd-feno145',
      name: 'Fenofibrate 145mg',
      brand: 'Lipicard 145',
      generic: 'Fenofibrate',
      aliases: ['lipicard', 'fenolip', 'fibator'],
      dose: '145mg',
      category: 'Lipid Lowering',
      relation: 'With Meal',
      slots: ['morning'],
      purpose: 'Lowers high serum triglycerides and clears blood lipids'
    },
    {
      id: 'cd-ezet10',
      name: 'Ezetimibe 10mg',
      brand: 'Ezentia 10',
      generic: 'Ezetimibe',
      aliases: ['ezentia', 'mibe'],
      dose: '10mg',
      category: 'Lipid Lowering',
      relation: 'With or without food',
      slots: ['bedtime'],
      purpose: 'Inhibits intestinal cholesterol absorption to complement statin therapy'
    },

    // ----------------------------------------------------
    // 3. BLOOD THINNERS & ANTICOAGULANTS
    // ----------------------------------------------------
    {
      id: 'cd-eco75',
      name: 'Ecosprin 75mg',
      brand: 'Ecosprin 75',
      generic: 'Aspirin (Enteric Coated)',
      aliases: ['ecosprin', 'aspirin', 'loprin', 'disprin', 'asa'],
      dose: '75mg',
      category: 'Antiplatelet',
      relation: 'After Food (Lunch)',
      slots: ['afternoon'],
      purpose: 'Prevents blood platelets from aggregating and forming arterial clots'
    },
    {
      id: 'cd-eco150',
      name: 'Ecosprin 150mg',
      brand: 'Ecosprin 150',
      generic: 'Aspirin (Enteric Coated)',
      aliases: ['ecosprin 150', 'loprin 150'],
      dose: '150mg',
      category: 'Antiplatelet',
      relation: 'After Food (Lunch)',
      slots: ['afternoon'],
      purpose: 'Cardioprotective antiplatelet therapy for acute coronary syndrome'
    },
    {
      id: 'cd-clop75',
      name: 'Clopidogrel 75mg',
      brand: 'Clavix 75',
      generic: 'Clopidogrel Bisulfate',
      aliases: ['clavix', 'plavix', 'deplatt', 'clopilet', 'ceruvit'],
      dose: '75mg',
      category: 'Antiplatelet',
      relation: 'After Food',
      slots: ['morning'],
      purpose: 'Inhibits P2Y12 platelet receptors to prevent coronary stent thrombosis'
    },
    {
      id: 'cd-clop-a',
      name: 'Clopidogrel 75mg + Aspirin 75mg',
      brand: 'Clopilet-A 75',
      generic: 'Clopidogrel + Aspirin',
      aliases: ['clopilet a', 'clavix a', 'deplatt a'],
      dose: '75mg/75mg',
      category: 'Antiplatelet',
      relation: 'After Breakfast',
      slots: ['morning'],
      purpose: 'Dual antiplatelet therapy protecting coronary and peripheral stents'
    },
    {
      id: 'cd-tica90',
      name: 'Ticagrelor 90mg',
      brand: 'Brilinta 90',
      generic: 'Ticagrelor',
      aliases: ['brilinta', 'axcer', 'ticavic', 'ticasave'],
      dose: '90mg',
      category: 'Antiplatelet',
      relation: 'After Food (Morning, Evening)',
      slots: ['morning', 'evening'],
      purpose: 'Potent reversible platelet inhibition post-coronary angioplasty'
    },
    {
      id: 'cd-riva10',
      name: 'Rivaroxaban 10mg',
      brand: 'Xarelto 10',
      generic: 'Rivaroxaban',
      aliases: ['xarelto', 'rivarox', 'ixaro', 'rivaflo'],
      dose: '10mg',
      category: 'Anticoagulant',
      relation: 'With Food',
      slots: ['morning'],
      purpose: 'Oral Factor Xa inhibitor preventing DVT/PE post orthopedic surgery'
    },
    {
      id: 'cd-riva15',
      name: 'Rivaroxaban 15mg',
      brand: 'Xarelto 15',
      generic: 'Rivaroxaban',
      aliases: ['xarelto 15', 'rivaflo 15'],
      dose: '15mg',
      category: 'Anticoagulant',
      relation: 'With Evening Meal',
      slots: ['evening'],
      purpose: 'Prevents systemic thromboembolism in non-valvular atrial fibrillation'
    },
    {
      id: 'cd-apix25',
      name: 'Apixaban 2.5mg',
      brand: 'Eliquis 2.5',
      generic: 'Apixaban',
      aliases: ['eliquis', 'apigat', 'apixa'],
      dose: '2.5mg',
      category: 'Anticoagulant',
      relation: 'After Food (Morning, Evening)',
      slots: ['morning', 'evening'],
      purpose: 'Direct oral anticoagulant with superior safety profile for stroke prevention'
    },
    {
      id: 'cd-apix5',
      name: 'Apixaban 5mg',
      brand: 'Eliquis 5',
      generic: 'Apixaban',
      aliases: ['eliquis 5', 'apigat 5'],
      dose: '5mg',
      category: 'Anticoagulant',
      relation: 'After Food (Morning, Evening)',
      slots: ['morning', 'evening'],
      purpose: 'Treats and prevents deep vein thrombosis and pulmonary embolism'
    },
    {
      id: 'cd-daba110',
      name: 'Dabigatran 110mg',
      brand: 'Pradaxa 110',
      generic: 'Dabigatran Etexilate',
      aliases: ['pradaxa', 'dabigo'],
      dose: '110mg',
      category: 'Anticoagulant',
      relation: 'With a full glass of water',
      slots: ['morning', 'evening'],
      purpose: 'Direct thrombin inhibitor preventing systemic embolism'
    },
    {
      id: 'cd-warf2',
      name: 'Warfarin 2mg',
      brand: 'Warf 2',
      generic: 'Warfarin Sodium',
      aliases: ['warf', 'coumadin'],
      dose: '2mg',
      category: 'Anticoagulant',
      relation: 'At Bedtime (Constant Time)',
      slots: ['bedtime'],
      purpose: 'Vitamin K antagonist for prosthetic heart valve protection (monitor INR)'
    },
    {
      id: 'cd-acit2',
      name: 'Acenocoumarol 2mg',
      brand: 'Acitrom 2',
      generic: 'Acenocoumarol',
      aliases: ['acitrom'],
      dose: '2mg',
      category: 'Anticoagulant',
      relation: 'Evening at 6:00 PM',
      slots: ['evening'],
      purpose: 'Prevents intravascular thrombosis following vascular surgeries'
    },
    {
      id: 'cd-enox40',
      name: 'Enoxaparin 40mg / 0.4ml',
      brand: 'Clexane 40 Inj',
      generic: 'Enoxaparin Sodium',
      aliases: ['clexane', 'lovenox', 'lonopin'],
      dose: '40mg',
      category: 'Anticoagulant',
      relation: 'Subcutaneous injection',
      slots: ['morning'],
      purpose: 'Low-molecular-weight heparin preventing peri-operative deep vein clots'
    },

    // ----------------------------------------------------
    // 4. DIABETES & GLUCOSE MANAGEMENT
    // ----------------------------------------------------
    {
      id: 'cd-metf500',
      name: 'Metformin 500mg',
      brand: 'Glycomet 500',
      generic: 'Metformin Hydrochloride',
      aliases: ['glycomet', 'glucophage', 'obimet', 'riomet', 'formin', 'metfor'],
      dose: '500mg',
      category: 'Antidiabetic',
      relation: 'After Food (Breakfast, Dinner)',
      slots: ['morning', 'evening'],
      purpose: 'Decreases hepatic glucose production and boosts insulin sensitivity'
    },
    {
      id: 'cd-metf1000',
      name: 'Metformin 1000mg SR',
      brand: 'Glycomet 1000 SR',
      generic: 'Metformin Extended Release',
      aliases: ['glycomet 1000', 'obimet sr', 'glycomet sr'],
      dose: '1000mg',
      category: 'Antidiabetic',
      relation: 'With Dinner Meal',
      slots: ['evening'],
      purpose: 'Steady 24-hour glycemic plateau management without gastric spikes'
    },
    {
      id: 'cd-glim1',
      name: 'Glimepiride 1mg',
      brand: 'Amaryl 1',
      generic: 'Glimepiride',
      aliases: ['amaryl', 'glimy', 'zoryl', 'gp 1'],
      dose: '1mg',
      category: 'Antidiabetic',
      relation: 'Before Breakfast',
      slots: ['morning'],
      purpose: 'Stimulates pancreatic beta cells to secrete insulin with meals'
    },
    {
      id: 'cd-glim2',
      name: 'Glimepiride 2mg',
      brand: 'Amaryl 2',
      generic: 'Glimepiride',
      aliases: ['amaryl 2', 'glimy 2', 'zoryl 2', 'gp 2'],
      dose: '2mg',
      category: 'Antidiabetic',
      relation: 'Before Breakfast',
      slots: ['morning'],
      purpose: 'Controls fasting blood sugars in Type 2 Diabetes'
    },
    {
      id: 'cd-glim-met',
      name: 'Glimepiride 1mg + Metformin 500mg',
      brand: 'Glycomet-GP 1',
      generic: 'Glimepiride + Metformin SR',
      aliases: ['glycomet gp', 'glycomet gp 1', 'zoryl m', 'amaryl m'],
      dose: '1mg/500mg',
      category: 'Antidiabetic',
      relation: 'Immediately Before Breakfast',
      slots: ['morning'],
      purpose: 'Synergistic insulin secretion and peripheral glucose uptake'
    },
    {
      id: 'cd-glim-met2',
      name: 'Glimepiride 2mg + Metformin 500mg',
      brand: 'Glycomet-GP 2',
      generic: 'Glimepiride + Metformin SR',
      aliases: ['glycomet gp 2', 'zoryl m 2'],
      dose: '2mg/500mg',
      category: 'Antidiabetic',
      relation: 'Immediately Before Breakfast',
      slots: ['morning'],
      purpose: 'Intensive oral dual therapy for elevated HbA1c control'
    },
    {
      id: 'cd-glic80',
      name: 'Gliclazide 80mg',
      brand: 'Diamicron 80',
      generic: 'Gliclazide',
      aliases: ['diamicron', 'reclide', 'glyciphage'],
      dose: '80mg',
      category: 'Antidiabetic',
      relation: 'With Breakfast',
      slots: ['morning'],
      purpose: 'Pancreatic sulfonylurea with favorable cardiovascular safety profile'
    },
    {
      id: 'cd-sita50',
      name: 'Sitagliptin 50mg',
      brand: 'Januvia 50',
      generic: 'Sitagliptin Phosphate',
      aliases: ['januvia', 'istavel', 'sitara'],
      dose: '50mg',
      category: 'Antidiabetic',
      relation: 'With or without food',
      slots: ['morning'],
      purpose: 'DPP-4 inhibitor augmenting incretin hormones and glycemic balance'
    },
    {
      id: 'cd-sita100',
      name: 'Sitagliptin 100mg',
      brand: 'Januvia 100',
      generic: 'Sitagliptin Phosphate',
      aliases: ['januvia 100', 'istavel 100'],
      dose: '100mg',
      category: 'Antidiabetic',
      relation: 'Morning after Breakfast',
      slots: ['morning'],
      purpose: 'Suppresses glucagon release and prevents post-prandial glycemic spikes'
    },
    {
      id: 'cd-janu-met',
      name: 'Sitagliptin 50mg + Metformin 500mg',
      brand: 'Janumet 50/500',
      generic: 'Sitagliptin + Metformin',
      aliases: ['janumet', 'istavel m'],
      dose: '50mg/500mg',
      category: 'Antidiabetic',
      relation: 'With Meals (Morning, Evening)',
      slots: ['morning', 'evening'],
      purpose: 'Comprehensive incretin enhancement plus insulin sensitization'
    },
    {
      id: 'cd-vilda50',
      name: 'Vildagliptin 50mg',
      brand: 'Galvus 50',
      generic: 'Vildagliptin',
      aliases: ['galvus', 'zomelis', 'vildaprall', 'jalra'],
      dose: '50mg',
      category: 'Antidiabetic',
      relation: 'Morning and Evening with food',
      slots: ['morning', 'evening'],
      purpose: 'Physiological GLP-1 hormone stabilization preventing glucose fluctuations'
    },
    {
      id: 'cd-galv-met',
      name: 'Vildagliptin 50mg + Metformin 500mg',
      brand: 'Galvus Met 50/500',
      generic: 'Vildagliptin + Metformin',
      aliases: ['galvus met', 'zomelis met', 'jalra m'],
      dose: '50mg/500mg',
      category: 'Antidiabetic',
      relation: 'After Meals',
      slots: ['morning', 'evening'],
      purpose: 'Dual action antidiabetic controlling both fasting and post-meal sugar'
    },
    {
      id: 'cd-tene20',
      name: 'Teneligliptin 20mg',
      brand: 'Ziten 20',
      generic: 'Teneligliptin Hydrobromide',
      aliases: ['ziten', 'tenglyn', 'tenali', 'dynaglipt'],
      dose: '20mg',
      category: 'Antidiabetic',
      relation: 'Once daily before breakfast',
      slots: ['morning'],
      purpose: 'Affordable, long-acting DPP-4 inhibitor safe in mild-to-moderate renal decline'
    },
    {
      id: 'cd-dapa5',
      name: 'Dapagliflozin 5mg',
      brand: 'Forxiga 5',
      generic: 'Dapagliflozin Propanediol',
      aliases: ['forxiga', 'oxra', 'dapacip', 'gloxia'],
      dose: '5mg',
      category: 'Antidiabetic',
      relation: 'Morning with a full glass of water',
      slots: ['morning'],
      purpose: 'SGLT2 inhibitor expelling excess glucose in urine and protecting kidneys'
    },
    {
      id: 'cd-dapa10',
      name: 'Dapagliflozin 10mg',
      brand: 'Forxiga 10',
      generic: 'Dapagliflozin Propanediol',
      aliases: ['forxiga 10', 'oxra 10', 'dapacip 10'],
      dose: '10mg',
      category: 'Antidiabetic',
      relation: 'Morning with plenty of water',
      slots: ['morning'],
      purpose: 'Reduces cardiovascular mortality, improves heart failure and preserves eGFR'
    },
    {
      id: 'cd-empa10',
      name: 'Empagliflozin 10mg',
      brand: 'Jardiance 10',
      generic: 'Empagliflozin',
      aliases: ['jardiance', 'gibtulio'],
      dose: '10mg',
      category: 'Antidiabetic',
      relation: 'Morning with water',
      slots: ['morning'],
      purpose: 'Cardio-renal protective SGLT2 inhibitor reducing heart strain'
    },
    {
      id: 'cd-empa25',
      name: 'Empagliflozin 25mg',
      brand: 'Jardiance 25',
      generic: 'Empagliflozin',
      aliases: ['jardiance 25'],
      dose: '25mg',
      category: 'Antidiabetic',
      relation: 'Morning with water',
      slots: ['morning'],
      purpose: 'Maximum glycoregulation with proven cardiovascular survival advantage'
    },
    {
      id: 'cd-piog15',
      name: 'Pioglitazone 15mg',
      brand: 'Pioz 15',
      generic: 'Pioglitazone Hydrochloride',
      aliases: ['pioz', 'pioglit', 'diavista'],
      dose: '15mg',
      category: 'Antidiabetic',
      relation: 'Once daily with food',
      slots: ['morning'],
      purpose: 'Thiazolidinedione reversing muscular and adipose insulin resistance'
    },
    {
      id: 'cd-vogl02',
      name: 'Voglibose 0.2mg',
      brand: 'Volibo 0.2',
      generic: 'Voglibose',
      aliases: ['volibo', 'voglitor', 'voba'],
      dose: '0.2mg',
      category: 'Antidiabetic',
      relation: 'Strictly with First Bite of Meals',
      slots: ['morning', 'afternoon', 'evening'],
      purpose: 'Alpha-glucosidase inhibitor delaying complex carbohydrate digestion'
    },
    {
      id: 'cd-ins-glarg',
      name: 'Insulin Glargine 100 IU/ml',
      brand: 'Lantus Pen',
      generic: 'Insulin Glargine (rDNA origin)',
      aliases: ['lantus', 'basalog', 'glaritus', 'toujeo'],
      dose: '20 Units',
      category: 'Insulin',
      relation: 'At Bedtime Subcutaneously',
      slots: ['bedtime'],
      purpose: 'Peakless 24-hour basal glycemic control preventing overnight sugar surge'
    },
    {
      id: 'cd-ins-mix',
      name: 'Premix Human Insulin 30/70',
      brand: 'Human Mixtard 30/70',
      generic: 'Biphasic Isophane Insulin',
      aliases: ['mixtard', 'huminsulin', 'wosulin'],
      dose: 'As prescribed',
      category: 'Insulin',
      relation: '30 minutes before breakfast & dinner',
      slots: ['morning', 'evening'],
      purpose: 'Dual basal and mealtime bolus insulin coverage'
    },
    {
      id: 'cd-rybel7',
      name: 'Semaglutide 7mg Tablet',
      brand: 'Rybelsus 7',
      generic: 'Semaglutide',
      aliases: ['rybelsus', 'ozempic'],
      dose: '7mg',
      category: 'Antidiabetic',
      relation: 'First thing in morning with small sip of water',
      slots: ['morning'],
      purpose: 'Oral GLP-1 receptor agonist for HbA1c control and weight reduction'
    },

    // ----------------------------------------------------
    // 5. ANTIBIOTICS & ANTIMICROBIALS
    // ----------------------------------------------------
    {
      id: 'cd-aug625',
      name: 'Amoxicillin + Clavulanic Acid 625mg',
      brand: 'Augmentin 625',
      generic: 'Amoxicillin 500mg + Clavulanate 125mg',
      aliases: ['augmentin', 'amoxyclav', 'moxikind cv', 'clavam', 'polyclav', 'sensiclav'],
      dose: '625mg',
      category: 'Antibiotic',
      relation: 'After Food (Morning, Evening)',
      slots: ['morning', 'evening'],
      purpose: 'Broad-spectrum beta-lactamase resistant antibacterial for wound/chest infections'
    },
    {
      id: 'cd-amox500',
      name: 'Amoxicillin 500mg',
      brand: 'Novamox 500',
      generic: 'Amoxicillin Trihydrate',
      aliases: ['novamox', 'mox', 'alclox'],
      dose: '500mg',
      category: 'Antibiotic',
      relation: 'After Food',
      slots: ['morning', 'afternoon', 'evening'],
      purpose: 'Bactericidal antibiotic treating respiratory and soft-tissue bacterial growth'
    },
    {
      id: 'cd-cefi200',
      name: 'Cefixime 200mg',
      brand: 'Taxim-O 200',
      generic: 'Cefixime Trihydrate',
      aliases: ['taxim o', 'zifi', 'cefolac', 'mahacef', 'hifen'],
      dose: '200mg',
      category: 'Antibiotic',
      relation: 'After Food (Morning, Evening)',
      slots: ['morning', 'evening'],
      purpose: 'Third-generation oral cephalosporin clearing post-operative & urinary infections'
    },
    {
      id: 'cd-cefu500',
      name: 'Cefuroxime Axetil 500mg',
      brand: 'Ceftum 500',
      generic: 'Cefuroxime Axetil',
      aliases: ['ceftum', 'cetil', 'forcef', 'pulmocef', 'altacef'],
      dose: '500mg',
      category: 'Antibiotic',
      relation: 'After Food (Morning, Evening)',
      slots: ['morning', 'evening'],
      purpose: 'Second-generation cephalosporin for surgical incision prophylaxis'
    },
    {
      id: 'cd-ceft1g',
      name: 'Ceftriaxone 1g Injection',
      brand: 'Monocef 1g Inj',
      generic: 'Ceftriaxone Sodium',
      aliases: ['monocef', 'rocephin', 'ceftrac', 'xone'],
      dose: '1g IV',
      category: 'Antibiotic',
      relation: 'Intravenous / Intramuscular',
      slots: ['morning'],
      purpose: 'Potent hospital-grade cephalosporin combating systemic bacterial seeding'
    },
    {
      id: 'cd-mero1g',
      name: 'Meropenem 1g Injection',
      brand: 'Meronem 1g Inj',
      generic: 'Meropenem Trihydrate',
      aliases: ['meronem', 'meromac', 'mopen'],
      dose: '1g IV',
      category: 'Antibiotic',
      relation: 'Intravenous infusion',
      slots: ['morning', 'evening'],
      purpose: 'Ultra-broad carbapenem for severe multidrug-resistant surgical infections'
    },
    {
      id: 'cd-pipz45',
      name: 'Piperacillin + Tazobactam 4.5g Inj',
      brand: 'Pipzo 4.5g Inj',
      generic: 'Piperacillin + Tazobactam',
      aliases: ['pipzo', 'tazact', 'zobact'],
      dose: '4.5g IV',
      category: 'Antibiotic',
      relation: 'Intravenous slow infusion',
      slots: ['morning', 'evening'],
      purpose: 'Antipseudomonal penicillin combination for deep soft-tissue/foot ulcers'
    },
    {
      id: 'cd-azit500',
      name: 'Azithromycin 500mg',
      brand: 'Azithral 500',
      generic: 'Azithromycin Dihydrate',
      aliases: ['azithral', 'azee', 'zithromax', 'azibact'],
      dose: '500mg',
      category: 'Antibiotic',
      relation: '1 Hour Before or 2 Hours After Food',
      slots: ['morning'],
      purpose: 'Macrolide antibiotic targeting intracellular respiratory pathogens (3-5 days)'
    },
    {
      id: 'cd-clar500',
      name: 'Clarithromycin 500mg',
      brand: 'Claribid 500',
      generic: 'Clarithromycin',
      aliases: ['claribid', 'klacid', 'synclar'],
      dose: '500mg',
      category: 'Antibiotic',
      relation: 'After Food (Morning, Evening)',
      slots: ['morning', 'evening'],
      purpose: 'Treats H. pylori gastritis and atypical respiratory infections'
    },
    {
      id: 'cd-cipr500',
      name: 'Ciprofloxacin 500mg',
      brand: 'Ciplox 500',
      generic: 'Ciprofloxacin Hydrochloride',
      aliases: ['ciplox', 'cifran', 'ciprobid'],
      dose: '500mg',
      category: 'Antibiotic',
      relation: 'After Food with water (Avoid dairy at same time)',
      slots: ['morning', 'evening'],
      purpose: 'Fluoroquinolone for urinary tract, gastrointestinal, and bone infections'
    },
    {
      id: 'cd-levo500',
      name: 'Levofloxacin 500mg',
      brand: 'Levomac 500',
      generic: 'Levofloxacin Hemihydrate',
      aliases: ['levomac', 'loxof', 'levoquin'],
      dose: '500mg',
      category: 'Antibiotic',
      relation: 'Once daily after breakfast',
      slots: ['morning'],
      purpose: 'Respiratory fluoroquinolone for bacterial pneumonia and complicated UTIs'
    },
    {
      id: 'cd-oflo200',
      name: 'Ofloxacin 200mg',
      brand: 'Zanocin 200',
      generic: 'Ofloxacin',
      aliases: ['zanocin', 'oflomac', 'zenflox'],
      dose: '200mg',
      category: 'Antibiotic',
      relation: 'After Food',
      slots: ['morning', 'evening'],
      purpose: 'DNA gyrase inhibitor clearing abdominal and pelvic bacterial infections'
    },
    {
      id: 'cd-o2-comb',
      name: 'Ofloxacin 200mg + Ornidazole 500mg',
      brand: 'O2 Tablet',
      generic: 'Ofloxacin + Ornidazole',
      aliases: ['o2', 'zanocin oz', 'oflomac oz', 'zenflox oz'],
      dose: '200mg/500mg',
      category: 'Antibiotic',
      relation: 'After Meals (Morning, Evening)',
      slots: ['morning', 'evening'],
      purpose: 'Dual antibacterial and antiprotozoal for acute surgical diarrhea/dysentery'
    },
    {
      id: 'cd-doxy100',
      name: 'Doxycycline 100mg',
      brand: 'Doxt 100',
      generic: 'Doxycycline Hyclate',
      aliases: ['doxt', 'doxy', 'doxypal'],
      dose: '100mg',
      category: 'Antibiotic',
      relation: 'After Meal with full glass of water (Remain upright 30 mins)',
      slots: ['morning', 'evening'],
      purpose: 'Tetracycline antibiotic for skin infections, scrub typhus, and acne'
    },
    {
      id: 'cd-metr400',
      name: 'Metronidazole 400mg',
      brand: 'Flagyl 400',
      generic: 'Metronidazole',
      aliases: ['flagyl', 'metrogyl', 'aldazole'],
      dose: '400mg',
      category: 'Antibiotic',
      relation: 'After Food (Avoid alcohol strictly)',
      slots: ['morning', 'evening'],
      purpose: 'Anaerobic bactericidal agent for intra-abdominal and dental infections'
    },
    {
      id: 'cd-rifa400',
      name: 'Rifaximin 400mg',
      brand: 'Rifagut 400',
      generic: 'Rifaximin',
      aliases: ['rifagut', 'rifaxigress', 'rcifax'],
      dose: '400mg',
      category: 'Antibiotic',
      relation: 'After Meals',
      slots: ['morning', 'evening'],
      purpose: 'Non-absorbable gut antibiotic suppressing ammonia-producing colonic bacteria'
    },
    {
      id: 'cd-line600',
      name: 'Linezolid 600mg',
      brand: 'Lizomac 600',
      generic: 'Linezolid',
      aliases: ['lizomac', 'linospan', 'lizolid'],
      dose: '600mg',
      category: 'Antibiotic',
      relation: 'After Food (Morning, Evening)',
      slots: ['morning', 'evening'],
      purpose: 'Oxazolidinone antibiotic against Methicillin-Resistant Staph (MRSA)'
    },
    {
      id: 'cd-faro200',
      name: 'Faropenem 200mg',
      brand: 'Farobact 200',
      generic: 'Faropenem Sodium',
      aliases: ['farobact', 'faropen', 'duopen'],
      dose: '200mg',
      category: 'Antibiotic',
      relation: 'After Food (Morning, Evening)',
      slots: ['morning', 'evening'],
      purpose: 'Oral penem antibiotic for resistant respiratory and urinary tract infections'
    },
    {
      id: 'cd-clin300',
      name: 'Clindamycin 300mg',
      brand: 'Dalacin-C 300',
      generic: 'Clindamycin Hydrochloride',
      aliases: ['dalacin', 'clindac', 'dalcap'],
      dose: '300mg',
      category: 'Antibiotic',
      relation: 'With a full glass of water',
      slots: ['morning', 'evening'],
      purpose: 'Lincosamide antibiotic for severe bone, joint, and pelvic infections'
    },
    {
      id: 'cd-nitr100',
      name: 'Nitrofurantoin 100mg SR',
      brand: 'Martifur 100',
      generic: 'Nitrofurantoin Sustained Release',
      aliases: ['martifur', 'niftran', 'urifast'],
      dose: '100mg',
      category: 'Antibiotic',
      relation: 'With Food or Milk',
      slots: ['morning', 'bedtime'],
      purpose: 'Urinary antiseptic targeting sensitive E. coli cystitis and catheter UTIs'
    },

    // ----------------------------------------------------
    // 6. GASTROINTESTINAL & ACID SUPPRESSION
    // ----------------------------------------------------
    {
      id: 'cd-panto40',
      name: 'Pantoprazole 40mg',
      brand: 'Pan 40',
      generic: 'Pantoprazole Gastro-resistant',
      aliases: ['pan 40', 'pantocid', 'pantodac', 'pantosec', 'penta', 'pantop'],
      dose: '40mg',
      category: 'Gastrointestinal',
      relation: 'Before Food (Empty Stomach 30 mins before breakfast)',
      slots: ['morning'],
      purpose: 'Proton pump inhibitor protecting stomach mucosal lining against drug ulceration'
    },
    {
      id: 'cd-pan-d',
      name: 'Pantoprazole 40mg + Domperidone 30mg SR',
      brand: 'Pan-D',
      generic: 'Pantoprazole + Domperidone SR',
      aliases: ['pan d', 'pantocid dsr', 'pantosec dsr', 'pantodac dsr'],
      dose: '40mg/30mg',
      category: 'Gastrointestinal',
      relation: 'Before Food (Empty Stomach 30 mins before breakfast)',
      slots: ['morning'],
      purpose: 'Combats acid reflux, stomach churning, nausea, and dyspeptic heartburn'
    },
    {
      id: 'cd-rabe20',
      name: 'Rabeprazole 20mg',
      brand: 'Razo 20',
      generic: 'Rabeprazole Sodium',
      aliases: ['razo', 'happi', 'rabeloc', 'rabicip', 'veloz'],
      dose: '20mg',
      category: 'Gastrointestinal',
      relation: 'Before Food (Empty Stomach)',
      slots: ['morning'],
      purpose: 'Rapid-onset acid suppression accelerating erosive esophagitis healing'
    },
    {
      id: 'cd-rabe-dsr',
      name: 'Rabeprazole 20mg + Domperidone 30mg SR',
      brand: 'Rabekind-DSR',
      generic: 'Rabeprazole + Domperidone SR',
      aliases: ['rabekind dsr', 'razo d', 'happi d', 'rabeloc rd'],
      dose: '20mg/30mg',
      category: 'Gastrointestinal',
      relation: 'Before Breakfast on empty stomach',
      slots: ['morning'],
      purpose: 'Relieves severe GERD, bile reflux, and post-procedure gastric bloating'
    },
    {
      id: 'cd-ome20',
      name: 'Omeprazole 20mg',
      brand: 'Omez 20',
      generic: 'Omeprazole',
      aliases: ['omez', 'ocid', 'omizac'],
      dose: '20mg',
      category: 'Gastrointestinal',
      relation: 'Before Food (Empty Stomach)',
      slots: ['morning'],
      purpose: 'Suppresses gastric parietal acid secretion and heals peptic ulcers'
    },
    {
      id: 'cd-ome-d',
      name: 'Omeprazole 20mg + Domperidone 10mg',
      brand: 'Omez-D',
      generic: 'Omeprazole + Domperidone',
      aliases: ['omez d', 'ocid d'],
      dose: '20mg/10mg',
      category: 'Gastrointestinal',
      relation: 'Before Breakfast',
      slots: ['morning'],
      purpose: 'Controls acid reflux and nausea associated with post-op medicines'
    },
    {
      id: 'cd-esom40',
      name: 'Esomeprazole 40mg',
      brand: 'Nexpro 40',
      generic: 'Esomeprazole Magnesium',
      aliases: ['nexpro', 'sompraz', 'esomac'],
      dose: '40mg',
      category: 'Gastrointestinal',
      relation: 'Before Food',
      slots: ['morning'],
      purpose: 'Potent optical isomer PPI for healing severe ulcerative reflux esophagitis'
    },
    {
      id: 'cd-sucra1g',
      name: 'Sucralfate 1000mg Suspension',
      brand: 'Sucrafil 1000',
      generic: 'Sucralfate',
      aliases: ['sucrafil', 'sucrate', 'pepcoat'],
      dose: '10ml (1g)',
      category: 'Gastrointestinal',
      relation: '1 Hour Before Meals & at Bedtime',
      slots: ['morning', 'afternoon', 'bedtime'],
      purpose: 'Forms protective bio-barrier over gastric ulcers against gastric acid and bile'
    },
    {
      id: 'cd-onda4',
      name: 'Ondansetron 4mg',
      brand: 'Emeset 4',
      generic: 'Ondansetron Hydrochloride',
      aliases: ['emeset', 'ondem', 'zofran', 'vomikind'],
      dose: '4mg',
      category: 'Antiemetic',
      relation: '30 mins before food or as needed (SOS)',
      slots: ['morning', 'afternoon'],
      purpose: '5-HT3 antagonist halting chemotherapy and post-operative nausea/vomiting'
    },
    {
      id: 'cd-domp10',
      name: 'Domperidone 10mg',
      brand: 'Domstal 10',
      generic: 'Domperidone',
      aliases: ['domstal', 'vomistop', 'motinorm'],
      dose: '10mg',
      category: 'Antiemetic',
      relation: '15-30 mins Before Food',
      slots: ['morning', 'evening'],
      purpose: 'Enhances gastric peristaltic emptying and reduces post-prandial fullness'
    },
    {
      id: 'cd-peri10',
      name: 'Metoclopramide 10mg',
      brand: 'Perinorm 10',
      generic: 'Metoclopramide Hydrochloride',
      aliases: ['perinorm', 'reglan'],
      dose: '10mg',
      category: 'Antiemetic',
      relation: 'Before Meals',
      slots: ['morning', 'evening'],
      purpose: 'Prokinetic antiemetic clearing gastric stagnation and nausea'
    },
    {
      id: 'cd-lact15',
      name: 'Lactulose Solution 15ml',
      brand: 'Duphalac 15ml',
      generic: 'Lactulose Concentrate',
      aliases: ['duphalac', 'looz', 'cadilose'],
      dose: '15ml',
      category: 'Laxative',
      relation: 'At Bedtime with warm water',
      slots: ['bedtime'],
      purpose: 'Gentle post-operative osmotic stool softener preventing surgical straining'
    },
    {
      id: 'cd-crem15',
      name: 'Cremaffin Liquid 15ml',
      brand: 'Cremaffin Plus',
      generic: 'Liquid Paraffin + Milk of Magnesia',
      aliases: ['cremaffin', 'cremaffin plus'],
      dose: '15ml',
      category: 'Laxative',
      relation: 'At Bedtime with half glass of water',
      slots: ['bedtime'],
      purpose: 'Lubricates fecal passage and relieves constipation post anesthesia'
    },
    {
      id: 'cd-bisa5',
      name: 'Bisacodyl 5mg',
      brand: 'Dulcolax 5',
      generic: 'Bisacodyl',
      aliases: ['dulcolax', 'gerbisa'],
      dose: '5mg (1-2 tabs)',
      category: 'Laxative',
      relation: 'At Bedtime with water',
      slots: ['bedtime'],
      purpose: 'Stimulant laxative promoting morning bowel evacuation'
    },
    {
      id: 'cd-lope2',
      name: 'Loperamide 2mg',
      brand: 'Imodium 2',
      generic: 'Loperamide Hydrochloride',
      aliases: ['imodium', 'lopamide', 'eldoper'],
      dose: '2mg',
      category: 'Antidiarrheal',
      relation: 'After each loose stool (max 16mg/day)',
      slots: ['afternoon'],
      purpose: 'Slows intestinal motility and treats acute non-infectious diarrhea'
    },
    {
      id: 'cd-drot40',
      name: 'Drotaverine 40mg',
      brand: 'Drotin 40',
      generic: 'Drotaverine Hydrochloride',
      aliases: ['drotin', 'drotikind', 'spasmol'],
      dose: '40mg',
      category: 'Antispasmodic',
      relation: 'After Food (as needed)',
      slots: ['afternoon'],
      purpose: 'Smooth muscle antispasmodic relieving abdominal, biliary, and renal colic'
    },
    {
      id: 'cd-drot-m',
      name: 'Drotaverine 80mg + Mefenamic Acid 250mg',
      brand: 'Drotin-M',
      generic: 'Drotaverine + Mefenamic Acid',
      aliases: ['drotin m', 'drotikind m'],
      dose: '80mg/250mg',
      category: 'Antispasmodic',
      relation: 'After Food',
      slots: ['morning', 'evening'],
      purpose: 'Dual antispasmodic and analgesic for acute spasmodic surgical pain'
    },
    {
      id: 'cd-cycl-p',
      name: 'Dicyclomine 20mg + Paracetamol 500mg',
      brand: 'Cyclopam',
      generic: 'Dicyclomine + Paracetamol',
      aliases: ['cyclopam', 'spasmo proxyvon'],
      dose: '20mg/500mg',
      category: 'Antispasmodic',
      relation: 'After Food',
      slots: ['afternoon'],
      purpose: 'Relieves intestinal spasms, cramps, and visceral abdominal pain'
    },
    {
      id: 'cd-udil300',
      name: 'Ursodeoxycholic Acid 300mg',
      brand: 'Udiliv 300',
      generic: 'Ursodiol / Ursodeoxycholic Acid',
      aliases: ['udiliv', 'ursocol', 'ursetor'],
      dose: '300mg',
      category: 'Hepatoprotective',
      relation: 'With Meals (Morning, Evening)',
      slots: ['morning', 'evening'],
      purpose: 'Dissolves cholesterol gallstones, protects liver bile canaliculi'
    },

    // ----------------------------------------------------
    // 7. PAIN, FEVER & MUSCULOSKELETAL
    // ----------------------------------------------------
    {
      id: 'cd-dolo650',
      name: 'Paracetamol 650mg',
      brand: 'Dolo 650',
      generic: 'Paracetamol',
      aliases: ['dolo 650', 'calpol 650', 'pacimol 650', 'crocin 650', 'p-650', 'dolo', 'calpol'],
      dose: '650mg',
      category: 'Analgesic & Antipyretic',
      relation: 'After Food (SOS / 8-hourly)',
      slots: ['morning', 'afternoon', 'evening'],
      purpose: 'First-line analgesic relieving surgical pain, bodily aches, and fever'
    },
    {
      id: 'cd-para500',
      name: 'Paracetamol 500mg',
      brand: 'Calpol 500',
      generic: 'Paracetamol',
      aliases: ['calpol 500', 'crocin 500', 'pacimol 500'],
      dose: '500mg',
      category: 'Analgesic & Antipyretic',
      relation: 'After Food',
      slots: ['morning', 'afternoon'],
      purpose: 'Antipyretic fever reduction and mild headache/pain relief'
    },
    {
      id: 'cd-ibup400',
      name: 'Ibuprofen 400mg',
      brand: 'Brufen 400',
      generic: 'Ibuprofen',
      aliases: ['brufen', 'ibugesic'],
      dose: '400mg',
      category: 'NSAID',
      relation: 'Strictly After Meals',
      slots: ['morning', 'evening'],
      purpose: 'Non-steroidal anti-inflammatory reducing swelling, stiffness, and pain'
    },
    {
      id: 'cd-combi',
      name: 'Ibuprofen 400mg + Paracetamol 325mg',
      brand: 'Combiflam',
      generic: 'Ibuprofen + Paracetamol',
      aliases: ['combiflam', 'flexon', 'ibugesic plus'],
      dose: '400mg/325mg',
      category: 'NSAID',
      relation: 'After Meals with warm water',
      slots: ['morning', 'evening'],
      purpose: 'Dual action inflammatory pain and acute dental/surgical tenderness relief'
    },
    {
      id: 'cd-diclo50',
      name: 'Diclofenac Sodium 50mg',
      brand: 'Voveran 50',
      generic: 'Diclofenac Sodium',
      aliases: ['voveran', 'voltaren', 'diclogesic', 'nac'],
      dose: '50mg',
      category: 'NSAID',
      relation: 'After Food',
      slots: ['morning', 'evening'],
      purpose: 'Potent COX-2 inhibitor reducing post-operative joint and bone inflammation'
    },
    {
      id: 'cd-acec100',
      name: 'Aceclofenac 100mg',
      brand: 'Zerodol 100',
      generic: 'Aceclofenac',
      aliases: ['zerodol', 'hifenac', 'acemiz'],
      dose: '100mg',
      category: 'NSAID',
      relation: 'After Food',
      slots: ['morning', 'evening'],
      purpose: 'Targets joint inflammation with lower gastric ulcerogenic potential'
    },
    {
      id: 'cd-zero-p',
      name: 'Aceclofenac 100mg + Paracetamol 325mg',
      brand: 'Zerodol-P',
      generic: 'Aceclofenac + Paracetamol',
      aliases: ['zerodol p', 'hifenac p', 'acemiz plus'],
      dose: '100mg/325mg',
      category: 'NSAID',
      relation: 'After Food',
      slots: ['morning', 'evening'],
      purpose: 'Synergistic relief for post-operative orthopedic and muscular pain'
    },
    {
      id: 'cd-zero-sp',
      name: 'Aceclofenac 100mg + Paracetamol 325mg + Serratiopeptidase 15mg',
      brand: 'Zerodol-SP',
      generic: 'Aceclofenac + Paracetamol + Serratiopeptidase',
      aliases: ['zerodol sp', 'hifenac sp', 'acemiz sp', 'signoflam'],
      dose: '1 Tablet',
      category: 'Anti-inflammatory Enzyme',
      relation: 'After Food (Morning, Evening)',
      slots: ['morning', 'evening'],
      purpose: 'Triple action: relieves incision pain, reduces hematoma, and resolves surgical edema'
    },
    {
      id: 'cd-tram50',
      name: 'Tramadol 50mg',
      brand: 'Tramazac 50',
      generic: 'Tramadol Hydrochloride',
      aliases: ['tramazac', 'contramal', 'tramatas'],
      dose: '50mg',
      category: 'Opioid Analgesic',
      relation: 'After Food (SOS / Scheduled)',
      slots: ['afternoon', 'bedtime'],
      purpose: 'Central-acting opioid analgesic for moderate-to-severe surgical incision pain'
    },
    {
      id: 'cd-ultra',
      name: 'Tramadol 37.5mg + Paracetamol 325mg',
      brand: 'Ultracet',
      generic: 'Tramadol + Paracetamol',
      aliases: ['ultracet', 'calpol-t', 'tramazac p'],
      dose: '1 Tablet',
      category: 'Analgesic Combo',
      relation: 'After Meals',
      slots: ['morning', 'bedtime'],
      purpose: 'Superior pain management following major orthopedic and general surgery'
    },
    {
      id: 'cd-etor90',
      name: 'Etoricoxib 90mg',
      brand: 'Nucoxia 90',
      generic: 'Etoricoxib',
      aliases: ['nucoxia', 'etoshine', 'kingcox', 'torcoxia'],
      dose: '90mg',
      category: 'Selective COX-2 Inhibitor',
      relation: 'Once daily after food',
      slots: ['morning'],
      purpose: 'Selective COX-2 inhibitor for acute post-surgical dental/orthopedic recovery'
    },
    {
      id: 'cd-thio4',
      name: 'Thiocolchicoside 4mg',
      brand: 'Myoril 4',
      generic: 'Thiocolchicoside',
      aliases: ['myoril', 'thiospas', 'thiorest'],
      dose: '4mg',
      category: 'Muscle Relaxant',
      relation: 'After Food',
      slots: ['morning', 'evening'],
      purpose: 'Central muscle relaxant relieving painful muscular spasms and stiffness'
    },
    {
      id: 'cd-chym-f',
      name: 'Trypsin + Chymotrypsin Tablet',
      brand: 'Chymoral Forte',
      generic: 'Enzymatic Anti-inflammatory',
      aliases: ['chymoral', 'chymoral forte', 'chymozest'],
      dose: '1 Tablet',
      category: 'Enzyme',
      relation: '30 mins Before Food',
      slots: ['morning', 'afternoon', 'evening'],
      purpose: 'Enzymatic debridement of micro-thrombi, reduces surgical swelling and bruising'
    },

    // ----------------------------------------------------
    // 8. NEUROLOGY, NEUROPATHY & PSYCHIATRIC
    // ----------------------------------------------------
    {
      id: 'cd-gaba100',
      name: 'Gabapentin 100mg',
      brand: 'Gabapin 100',
      generic: 'Gabapentin',
      aliases: ['gabapin', 'neurontin', 'gaba'],
      dose: '100mg',
      category: 'Neuropathic Pain',
      relation: 'With or without food',
      slots: ['bedtime'],
      purpose: 'Calms hyperactive nerves, treating diabetic burning neuropathy and nerve injury'
    },
    {
      id: 'cd-preg75',
      name: 'Pregabalin 75mg',
      brand: 'Pregeb 75',
      generic: 'Pregabalin',
      aliases: ['pregeb', 'lyrica', 'maxgalin', 'pregastar'],
      dose: '75mg',
      category: 'Neuropathic Pain',
      relation: 'At Bedtime',
      slots: ['bedtime'],
      purpose: 'Relieves lancinating nerve pain, tingling, and post-herpetic neuralgia'
    },
    {
      id: 'cd-preg-m',
      name: 'Pregabalin 75mg + Methylcobalamin 750mcg',
      brand: 'Pregeb-M 75',
      generic: 'Pregabalin + Methylcobalamin',
      aliases: ['pregeb m', 'maxgalin m', 'nervijen p', 'mahagaba m'],
      dose: '1 Capsule',
      category: 'Nerve Regeneration',
      relation: 'At Bedtime',
      slots: ['bedtime'],
      purpose: 'Repairs myelin sheath of nerves while extinguishing neuropathic pain'
    },
    {
      id: 'cd-meth1500',
      name: 'Methylcobalamin 1500mcg',
      brand: 'Nurokind 1500',
      generic: 'Active Vitamin B12',
      aliases: ['nurokind', 'meconerv', 'nurozox', 'cobal'],
      dose: '1500mcg',
      category: 'Vitamin',
      relation: 'After Lunch',
      slots: ['afternoon'],
      purpose: 'Essential cofactor for nerve myelination and red blood cell production'
    },
    {
      id: 'cd-neuro-f',
      name: 'Neurobion Forte Tablet',
      brand: 'Neurobion Forte',
      generic: 'Vitamin B1, B2, B3, B5, B6, B12',
      aliases: ['neurobion', 'neurobion forte', 'polybion'],
      dose: '1 Tablet',
      category: 'B-Complex',
      relation: 'After Breakfast',
      slots: ['morning'],
      purpose: 'Restores neurotropic B-vitamins, reduces peripheral nerve tingling and fatigue'
    },
    {
      id: 'cd-leve500',
      name: 'Levetiracetam 500mg',
      brand: 'Levera 500',
      generic: 'Levetiracetam',
      aliases: ['levera', 'keppra', 'epilive', 'torleva'],
      dose: '500mg',
      category: 'Antiepileptic',
      relation: 'Every 12 hours after food',
      slots: ['morning', 'evening'],
      purpose: 'Prevents post-operative seizure activity and regulates synaptic vesicle transmission'
    },
    {
      id: 'cd-clon05',
      name: 'Clonazepam 0.5mg',
      brand: 'Clonafit 0.5',
      generic: 'Clonazepam',
      aliases: ['clonafit', 'rivotril', 'zapiz'],
      dose: '0.5mg',
      category: 'Anxiolytic',
      relation: 'At Bedtime',
      slots: ['bedtime'],
      purpose: 'GABA-A receptor modulator inducing calm sleep and muscle relaxation'
    },
    {
      id: 'cd-alpr025',
      name: 'Alprazolam 0.25mg',
      brand: 'Alprax 0.25',
      generic: 'Alprazolam',
      aliases: ['alprax', 'restyl', 'trika', 'anxit'],
      dose: '0.25mg',
      category: 'Anxiolytic',
      relation: 'At Bedtime (short term)',
      slots: ['bedtime'],
      purpose: 'Relieves acute post-operative anxiety and insomnia'
    },
    {
      id: 'cd-zolf10',
      name: 'Zolpidem 10mg',
      brand: 'Zolfresh 10',
      generic: 'Zolpidem Tartrate',
      aliases: ['zolfresh', 'ambien', 'nitrest'],
      dose: '10mg',
      category: 'Sedative Hypnotic',
      relation: 'Right Before Sleep',
      slots: ['bedtime'],
      purpose: 'Non-benzodiazepine hypnotic for short-term hospital sleep initiation'
    },

    // ----------------------------------------------------
    // 9. RESPIRATORY & ANTI-ALLERGIC
    // ----------------------------------------------------
    {
      id: 'cd-mont-lc',
      name: 'Montelukast 10mg + Levocetirizine 5mg',
      brand: 'Montek-LC',
      generic: 'Montelukast + Levocetirizine',
      aliases: ['montek lc', 'telekast l', 'monticope', 'levocet m', 'romilast l'],
      dose: '10mg/5mg',
      category: 'Respiratory & Allergy',
      relation: 'At Bedtime',
      slots: ['bedtime'],
      purpose: 'Dual leukotriene and histamine blocker relieving allergic rhinitis & bronchial spasms'
    },
    {
      id: 'cd-levoc5',
      name: 'Levocetirizine 5mg',
      brand: 'Levocet 5',
      generic: 'Levocetirizine Dihydrochloride',
      aliases: ['levocet', 'vozet', 'xyzal', 'teczine'],
      dose: '5mg',
      category: 'Antihistamine',
      relation: 'At Bedtime',
      slots: ['bedtime'],
      purpose: 'Non-sedating antihistamine for urticaria, skin itch, and runny nose'
    },
    {
      id: 'cd-cetz10',
      name: 'Cetirizine 10mg',
      brand: 'Cetzine 10',
      generic: 'Cetirizine Hydrochloride',
      aliases: ['cetzine', 'zyrtec', 'okacet', 'alerid'],
      dose: '10mg',
      category: 'Antihistamine',
      relation: 'At Bedtime',
      slots: ['bedtime'],
      purpose: 'Rapid relief from seasonal allergies, histamine surges, and post-dressing rashes'
    },
    {
      id: 'cd-alle120',
      name: 'Fexofenadine 120mg',
      brand: 'Allegra 120',
      generic: 'Fexofenadine Hydrochloride',
      aliases: ['allegra', 'fexova', 'fexy', 'histafree'],
      dose: '120mg',
      category: 'Antihistamine',
      relation: 'Once daily with water',
      slots: ['morning'],
      purpose: 'Completely non-drowsy second-generation antihistamine for daytime comfort'
    },
    {
      id: 'cd-bila20',
      name: 'Bilastine 20mg',
      brand: 'Bilashine 20',
      generic: 'Bilastine',
      aliases: ['bilashine', 'bilaxten', 'bilasure'],
      dose: '20mg',
      category: 'Antihistamine',
      relation: '1 Hour Before or 2 Hours After Food',
      slots: ['morning'],
      purpose: 'Next-gen antihistamine with zero brain sedation and clean allergy relief'
    },
    {
      id: 'cd-astha-inh',
      name: 'Salbutamol 100mcg Inhaler',
      brand: 'Asthalin Inhaler',
      generic: 'Salbutamol / Albuterol',
      aliases: ['asthalin', 'ventolin', 'salbair'],
      dose: '2 Puffs',
      category: 'Bronchodilator',
      relation: 'Inhale as needed (SOS) for shortness of breath',
      slots: ['morning', 'evening'],
      purpose: 'Fast-acting beta-2 agonist dilating airways in acute wheezing and asthma'
    },
    {
      id: 'cd-fora200',
      name: 'Formoterol 6mcg + Budesonide 200mcg Inhaler',
      brand: 'Foracort 200',
      generic: 'Formoterol + Budesonide',
      aliases: ['foracort', 'budamate', 'formonide'],
      dose: '1-2 Puffs',
      category: 'Inhaled Steroid Combo',
      relation: 'Rinse mouth with water after inhalation',
      slots: ['morning', 'evening'],
      purpose: 'Long-acting bronchodilation and topical anti-inflammatory for stable breathing'
    },
    {
      id: 'cd-deri150',
      name: 'Deriphyllin Retard 150mg',
      brand: 'Deriphyllin 150',
      generic: 'Theophylline + Etofylline',
      aliases: ['deriphyllin', 'theolate'],
      dose: '150mg',
      category: 'Bronchodilator',
      relation: 'After Food',
      slots: ['morning', 'evening'],
      purpose: 'Phosphodiesterase inhibitor relaxing bronchial smooth muscles'
    },
    {
      id: 'cd-muci600',
      name: 'Acetylcysteine 600mg Effervescent',
      brand: 'Mucinac 600',
      generic: 'N-Acetylcysteine',
      aliases: ['mucinac', 'fluimucil', 'nacfil'],
      dose: '600mg',
      category: 'Mucolytic',
      relation: 'Dissolve in half glass water after meals',
      slots: ['morning'],
      purpose: 'Breaks disulfide bonds in sticky lung mucus and boosts glutathione defense'
    },

    // ----------------------------------------------------
    // 10. THYROID, VITAMINS & MINERALS
    // ----------------------------------------------------
    {
      id: 'cd-thyro50',
      name: 'Levothyroxine 50mcg',
      brand: 'Thyronorm 50',
      generic: 'Thyroxine Sodium',
      aliases: ['thyronorm', 'eltroxin', 'thyrox', 'thyronorm 50'],
      dose: '50mcg',
      category: 'Thyroid',
      relation: 'First thing in morning (Empty Stomach with water, wait 45 mins)',
      slots: ['morning'],
      purpose: 'Restores synthetic T4 thyroid hormone, regulating basal metabolic energy'
    },
    {
      id: 'cd-thyro100',
      name: 'Levothyroxine 100mcg',
      brand: 'Thyronorm 100',
      generic: 'Thyroxine Sodium',
      aliases: ['thyronorm 100', 'eltroxin 100'],
      dose: '100mcg',
      category: 'Thyroid',
      relation: 'Strictly on empty stomach at 6:00 AM',
      slots: ['morning'],
      purpose: 'Corrects primary hypothyroidism and normalizes elevated TSH'
    },
    {
      id: 'cd-shel500',
      name: 'Calcium 500mg + Vitamin D3 250 IU',
      brand: 'Shelcal 500',
      generic: 'Calcium Carbonate + Vit D3',
      aliases: ['shelcal', 'caldikind', 'gemcal', 'cipcal', 'calcimax'],
      dose: '500mg',
      category: 'Mineral Supplement',
      relation: 'After Food (Lunch / Dinner)',
      slots: ['afternoon'],
      purpose: 'Essential bone mineralizer accelerating osteoblast healing post orthopedic surgery'
    },
    {
      id: 'cd-d3-60k',
      name: 'Cholecalciferol 60,000 IU Capsule / Sachet',
      brand: 'Calcirol 60K',
      generic: 'Vitamin D3 (Cholecalciferol)',
      aliases: ['calcirol', 'd3 must', 'uprise d3', 'taylo d3', 'arcal d3'],
      dose: '60,000 IU',
      category: 'Vitamin D',
      relation: 'Once weekly with warm milk after meal',
      slots: ['morning'],
      purpose: 'High-dose weekly vitamin D repletion for bone density and muscle strength'
    },
    {
      id: 'cd-beco-f',
      name: 'Becosules Capsule',
      brand: 'Becosules',
      generic: 'Vitamin B-Complex + Vitamin C',
      aliases: ['becosules', 'cobadex', 'bplex'],
      dose: '1 Capsule',
      category: 'Vitamin Supplement',
      relation: 'After Lunch',
      slots: ['afternoon'],
      purpose: 'Replaces water-soluble vitamins, prevents oral ulcers and accelerates cellular energy'
    },
    {
      id: 'cd-zinco',
      name: 'Zincovit Tablet',
      brand: 'Zincovit',
      generic: 'Multivitamin, Minerals with Zinc',
      aliases: ['zincovit', 'a to z', 'supradyn'],
      dose: '1 Tablet',
      category: 'Multivitamin',
      relation: 'After Lunch',
      slots: ['afternoon'],
      purpose: 'Supplies elemental zinc and trace antioxidants for rapid surgical wound granulation'
    },
    {
      id: 'cd-limc500',
      name: 'Vitamin C 500mg Chewable',
      brand: 'Limcee 500',
      generic: 'Ascorbic Acid + Sodium Ascorbate',
      aliases: ['limcee', 'celin', 'sukcee'],
      dose: '500mg',
      category: 'Vitamin C',
      relation: 'Chew after lunch',
      slots: ['afternoon'],
      purpose: 'Collagen synthesis cofactor strengthening wound tensile strength and immunity'
    },
    {
      id: 'cd-orof-xt',
      name: 'Ferrous Ascorbate 100mg + Folic Acid 1.5mg',
      brand: 'Orofer-XT',
      generic: 'Ferrous Ascorbate + Folic Acid',
      aliases: ['orofer xt', 'autrin', 'feam', 'livogen z'],
      dose: '1 Tablet',
      category: 'Hematinic Iron',
      relation: 'After Food (Avoid taking with tea/coffee or milk)',
      slots: ['afternoon'],
      purpose: 'Corrects post-surgical iron-deficiency anemia and boosts hemoglobin recovery'
    },
    {
      id: 'cd-foli5',
      name: 'Folic Acid 5mg',
      brand: 'Folvite 5',
      generic: 'Folic Acid (Vitamin B9)',
      aliases: ['folvite', 'folinal'],
      dose: '5mg',
      category: 'Vitamin',
      relation: 'After Breakfast',
      slots: ['morning'],
      purpose: 'Red blood cell maturation and DNA repair'
    },

    // ----------------------------------------------------
    // 11. RENAL, DIURETICS & UROLOGICAL
    // ----------------------------------------------------
    {
      id: 'cd-lasi40',
      name: 'Furosemide 40mg',
      brand: 'Lasix 40',
      generic: 'Furosemide',
      aliases: ['lasix', 'salinex'],
      dose: '40mg',
      category: 'Loop Diuretic',
      relation: 'Morning after Breakfast',
      slots: ['morning'],
      purpose: 'High-ceiling loop diuretic clearing pulmonary edema and lower limb fluid retention'
    },
    {
      id: 'cd-dyto10',
      name: 'Torsemide 10mg',
      brand: 'Dytor 10',
      generic: 'Torsemide / Torasemide',
      aliases: ['dytor', 'torget', 'tide'],
      dose: '10mg',
      category: 'Loop Diuretic',
      relation: 'Morning after Breakfast',
      slots: ['morning'],
      purpose: 'Longer duration diuretic for congestive heart failure and hepatic ascites'
    },
    {
      id: 'cd-alda25',
      name: 'Spironolactone 25mg',
      brand: 'Aldactone 25',
      generic: 'Spironolactone',
      aliases: ['aldactone', 'spiractin'],
      dose: '25mg',
      category: 'Potassium-Sparing Diuretic',
      relation: 'Morning with Food',
      slots: ['morning'],
      purpose: 'Aldosterone antagonist preventing myocardial fibrosis and conserving potassium'
    },
    {
      id: 'cd-urim04',
      name: 'Tamsulosin 0.4mg',
      brand: 'Urimax 0.4',
      generic: 'Tamsulosin Hydrochloride',
      aliases: ['urimax', 'flomax', 'veltam', 'tamflo'],
      dose: '0.4mg',
      category: 'Urological',
      relation: '30 mins after dinner at bedtime',
      slots: ['bedtime'],
      purpose: 'Alpha-1A blocker relaxing prostate and bladder neck smooth muscle'
    },
    {
      id: 'cd-urim-d',
      name: 'Tamsulosin 0.4mg + Dutasteride 0.5mg',
      brand: 'Urimax-D',
      generic: 'Tamsulosin + Dutasteride',
      aliases: ['urimax d', 'veltride d', 'tamflo d'],
      dose: '0.4mg/0.5mg',
      category: 'Urological',
      relation: 'After Dinner',
      slots: ['bedtime'],
      purpose: 'Dual action: immediate urinary flow opening plus prostate shrinkage'
    },
    {
      id: 'cd-silo8',
      name: 'Silodosin 8mg',
      brand: 'Silodal 8',
      generic: 'Silodosin',
      aliases: ['silodal', 'rapaflo', 'sildoo'],
      dose: '8mg',
      category: 'Urological',
      relation: 'With Meals at Night',
      slots: ['bedtime'],
      purpose: 'Highly selective uro-alpha blocker facilitating smooth urinary voiding'
    },
    {
      id: 'cd-potk15',
      name: 'Potassium Chloride Oral Solution',
      brand: 'Potklor Syrup',
      generic: 'Potassium Chloride',
      aliases: ['potklor', 'k-cit'],
      dose: '15ml in water',
      category: 'Electrolyte',
      relation: 'Dilute in full glass of water after food',
      slots: ['morning'],
      purpose: 'Corrects hypokalemia and maintains cardiac electrical membrane potential'
    },
    {
      id: 'cd-soda-b',
      name: 'Sodium Bicarbonate 500mg',
      brand: 'Sodamint',
      generic: 'Sodium Bicarbonate',
      aliases: ['sodamint', 'bicarb'],
      dose: '500mg',
      category: 'Alkalinizer',
      relation: 'After Meals',
      slots: ['morning', 'evening'],
      purpose: 'Alkalinizes urine and buffers metabolic acidosis in chronic kidney disease'
    },

    // ----------------------------------------------------
    // 12. STEROIDS & IMMUNOSUPPRESSANTS
    // ----------------------------------------------------
    {
      id: 'cd-pred10',
      name: 'Prednisolone 10mg',
      brand: 'Wysolone 10',
      generic: 'Prednisolone',
      aliases: ['wysolone', 'omnacortil', 'deltacortril'],
      dose: '10mg',
      category: 'Corticosteroid',
      relation: 'Morning Immediately After Breakfast',
      slots: ['morning'],
      purpose: 'Systemic glucocorticoid suppressing severe autoimmune inflammation'
    },
    {
      id: 'cd-medr4',
      name: 'Methylprednisolone 4mg',
      brand: 'Medrol 4',
      generic: 'Methylprednisolone',
      aliases: ['medrol', 'solu medrol'],
      dose: '4mg',
      category: 'Corticosteroid',
      relation: 'Morning after food',
      slots: ['morning'],
      purpose: 'Potent anti-inflammatory for pulmonary, articular, and allergic conditions'
    },
    {
      id: 'cd-dexa05',
      name: 'Dexamethasone 0.5mg',
      brand: 'Dexona 0.5',
      generic: 'Dexamethasone',
      aliases: ['dexona', 'decadron'],
      dose: '0.5mg',
      category: 'Corticosteroid',
      relation: 'Morning after food',
      slots: ['morning'],
      purpose: 'High-potency steroid reducing cerebral edema and post-op tissue swelling'
    },
    {
      id: 'cd-defl6',
      name: 'Deflazacort 6mg',
      brand: 'Defcort 6',
      generic: 'Deflazacort',
      aliases: ['defcort', 'calcort', 'orthocort'],
      dose: '6mg',
      category: 'Corticosteroid',
      relation: 'After Breakfast',
      slots: ['morning'],
      purpose: 'Steroid with lower bone-density loss and lesser diabetic risk'
    },
// --- ADDITIONAL HIGH-VOLUME CLINICAL MEDICATIONS ---
    {
    "id": "cd-montair-lc",
    "name": "Montair-LC (Montelukast 10mg + Levocetirizine 5mg)",
    "brand": "Montair-LC",
    "generic": "Montelukast + Levocetirizine",
    "aliases": [
        "montair lc",
        "monticope",
        "levocet m",
        "telekast l",
        "montemac l",
        "romilast l"
    ],
    "dose": "10mg/5mg",
    "category": "Respiratory & Allergy",
    "relation": "At Bedtime",
    "slots": [
        "bedtime"
    ],
    "purpose": "Dual bronchodilator & antihistamine for nocturnal cough, allergic rhinitis & asthma"
},
    {
    "id": "cd-allegra-m",
    "name": "Allegra-M (Fexofenadine 120mg + Montelukast 10mg)",
    "brand": "Allegra-M",
    "generic": "Fexofenadine + Montelukast",
    "aliases": [
        "allegra m",
        "fexova m",
        "histafree m"
    ],
    "dose": "120mg/10mg",
    "category": "Respiratory & Allergy",
    "relation": "At Bedtime",
    "slots": [
        "bedtime"
    ],
    "purpose": "Non-sedating allergy relief & bronchial airway anti-inflammatory therapy"
},
    {
    "id": "cd-bilashine20",
    "name": "Bilashine 20mg (Bilastine)",
    "brand": "Bilashine 20",
    "generic": "Bilastine",
    "aliases": [
        "bilashine",
        "bilaxten",
        "bilasure",
        "bilast"
    ],
    "dose": "20mg",
    "category": "Antihistamine",
    "relation": "Before Breakfast (Empty Stomach)",
    "slots": [
        "morning"
    ],
    "purpose": "Next-generation non-sedating antihistamine for urticaria, skin rashes & allergic rhinitis"
},
    {
    "id": "cd-vymada50",
    "name": "Vymada 50mg (Sacubitril 24mg + Valsartan 26mg)",
    "brand": "Vymada 50",
    "generic": "Sacubitril + Valsartan",
    "aliases": [
        "vymada",
        "cidmus",
        "arnipid",
        "neparvis",
        "sacubitril valsartan"
    ],
    "dose": "50mg (24mg/26mg)",
    "category": "Cardiovascular",
    "relation": "After Food",
    "slots": [
        "morning",
        "evening"
    ],
    "purpose": "ARNI therapy for heart failure with reduced ejection fraction & cardiac remodeling"
},
    {
    "id": "cd-vymada100",
    "name": "Vymada 100mg (Sacubitril 49mg + Valsartan 51mg)",
    "brand": "Vymada 100",
    "generic": "Sacubitril + Valsartan",
    "aliases": [
        "vymada 100",
        "cidmus 100",
        "arnipid 100"
    ],
    "dose": "100mg (49mg/51mg)",
    "category": "Cardiovascular",
    "relation": "After Food",
    "slots": [
        "morning",
        "evening"
    ],
    "purpose": "Target maintenance dose for heart failure recovery & cardiovascular mortality reduction"
},
    {
    "id": "cd-betadine-oint",
    "name": "Betadine 10% Ointment (Povidone Iodine)",
    "brand": "Betadine Ointment",
    "generic": "Povidone Iodine 10%",
    "aliases": [
        "betadine",
        "betadine oint",
        "povidone iodine",
        "cipladine",
        "pvp iodine"
    ],
    "dose": "10% w/w Topical Application",
    "category": "Antiseptic & Wound Care",
    "relation": "Apply Twice Daily to Clean Wound",
    "slots": [
        "morning",
        "evening"
    ],
    "purpose": "Broad-spectrum microbicidal antiseptic for post-surgical incisions and diabetic ulcers"
},
    {
    "id": "cd-tbact-oint",
    "name": "T-Bact 2% Ointment (Mupirocin)",
    "brand": "T-Bact Ointment",
    "generic": "Mupirocin 2%",
    "aliases": [
        "t bact",
        "tbact",
        "mupirocin",
        "bactroban",
        "mupicip"
    ],
    "dose": "2% w/w Topical",
    "category": "Topical Antibiotic",
    "relation": "Apply to Sterile Wound Bed",
    "slots": [
        "morning",
        "evening"
    ],
    "purpose": "Targeted topical eradication of MRSA, Staph and Strep in open healing wounds"
},
    {
    "id": "cd-fucidin-cream",
    "name": "Fucidin 2% Cream (Fusidic Acid)",
    "brand": "Fucidin Cream",
    "generic": "Fusidic Acid 2%",
    "aliases": [
        "fucidin",
        "fusidic acid",
        "fucibet",
        "fusigen"
    ],
    "dose": "2% Topical Cream",
    "category": "Topical Antibiotic",
    "relation": "Apply Thin Layer After Cleaning",
    "slots": [
        "morning",
        "evening"
    ],
    "purpose": "Inhibits bacterial protein synthesis for surgical sutures and cutaneous infections"
},
    {
    "id": "cd-silvrpex",
    "name": "Silvrpex / Megaheal Gel (Silver Sulfadiazine / Colloidal Silver)",
    "brand": "Silvrpex / Megaheal",
    "generic": "Colloidal Silver / Silver Sulfadiazine",
    "aliases": [
        "silvrpex",
        "megaheal",
        "silverex",
        "burnol",
        "silver sulfadiazine"
    ],
    "dose": "1% Topical Gel",
    "category": "Antimicrobial Wound Gel",
    "relation": "Apply After Saline Rinse",
    "slots": [
        "morning",
        "evening"
    ],
    "purpose": "Promotes autolytic debridement and granulation tissue formation in burns and ulcers"
},
    {
    "id": "cd-candid-b",
    "name": "Candid-B Cream (Clotrimazole + Beclomethasone)",
    "brand": "Candid-B",
    "generic": "Clotrimazole + Beclomethasone",
    "aliases": [
        "candid b",
        "candid cream",
        "clotrimazole beclomethasone",
        "surfaz b"
    ],
    "dose": "Topical Cream",
    "category": "Antifungal & Anti-inflammatory",
    "relation": "Apply to Affected Skin Folds",
    "slots": [
        "morning",
        "evening"
    ],
    "purpose": "Combats secondary fungal/yeast intertrigo and relieves erythema and itching"
},
    {
    "id": "cd-nexito10",
    "name": "Nexito 10mg (Escitalopram)",
    "brand": "Nexito 10",
    "generic": "Escitalopram",
    "aliases": [
        "nexito",
        "nexito 10",
        "cipralex",
        "stalo",
        "escitalent",
        "esram"
    ],
    "dose": "10mg",
    "category": "Neurology / Psychiatry",
    "relation": "Morning after breakfast or at Bedtime",
    "slots": [
        "morning"
    ],
    "purpose": "SSRI for generalized anxiety disorder, panic disorders & major depressive episodes"
},
    {
    "id": "cd-clonafit",
    "name": "Clonafit 0.5mg (Clonazepam)",
    "brand": "Clonafit 0.5",
    "generic": "Clonazepam",
    "aliases": [
        "clonafit",
        "zapiz",
        "clonotril",
        "rivotril",
        "lonazep"
    ],
    "dose": "0.5mg",
    "category": "Anxiolytic & Anticonvulsant",
    "relation": "At Bedtime",
    "slots": [
        "bedtime"
    ],
    "purpose": "GABA-A receptor modulator for acute panic attacks, neuropathic twitching & insomnia"
},
    {
    "id": "cd-zolcalm10",
    "name": "Zolcalm 10mg / Nitrest (Zolpidem)",
    "brand": "Zolcalm 10",
    "generic": "Zolpidem",
    "aliases": [
        "zolcalm",
        "nitrest",
        "zolfresh",
        "inrest",
        "ambien"
    ],
    "dose": "10mg",
    "category": "Sedative Hypnotic",
    "relation": "Immediately Before Sleeping",
    "slots": [
        "bedtime"
    ],
    "purpose": "Non-benzodiazepine hypnotic for short-term post-operative sleep initiation"
},
    {
    "id": "cd-tryptomer25",
    "name": "Tryptomer 25mg (Amitriptyline)",
    "brand": "Tryptomer 25",
    "generic": "Amitriptyline",
    "aliases": [
        "tryptomer",
        "amitone",
        "sarotex",
        "elavil"
    ],
    "dose": "25mg",
    "category": "Tricyclic Antidepressant & Neuropathic Pain",
    "relation": "At Bedtime",
    "slots": [
        "bedtime"
    ],
    "purpose": "Chronic migraine prophylaxis, diabetic peripheral neuropathy & restorative sleep"
},
    {
    "id": "cd-sucrafil-o",
    "name": "Sucrafil-O Gel (Sucralfate + Oxetacaine)",
    "brand": "Sucrafil-O",
    "generic": "Sucralfate + Oxetacaine",
    "aliases": [
        "sucrafil",
        "sucrafil o",
        "sucral o",
        "sucrate o",
        "pepsigard"
    ],
    "dose": "10ml",
    "category": "Gastrointestinal & Ulcer Care",
    "relation": "1 Hour Before Meals",
    "slots": [
        "morning",
        "evening"
    ],
    "purpose": "Cytoprotective adherent barrier coating gastric/esophageal ulcers and providing rapid local mucosal numbing"
},
    {
    "id": "cd-hepamerz",
    "name": "Hepa-Merz Sachet / Granules (L-Ornithine L-Aspartate)",
    "brand": "Hepa-Merz",
    "generic": "L-Ornithine L-Aspartate",
    "aliases": [
        "hepamerz",
        "hepa merz",
        "lola granules",
        "orniliv"
    ],
    "dose": "5g Sachet in Water",
    "category": "Hepatoprotective",
    "relation": "After Meals",
    "slots": [
        "morning",
        "evening"
    ],
    "purpose": "Stimulates hepatic urea synthesis and glutamine synthesis to reduce elevated blood ammonia"
},
    {
    "id": "cd-udiliv300",
    "name": "Udiliv 300mg (Ursodeoxycholic Acid)",
    "brand": "Udiliv 300",
    "generic": "Ursodeoxycholic Acid",
    "aliases": [
        "udiliv",
        "udiliv 300",
        "ursochol",
        "ursokem",
        "ursodil"
    ],
    "dose": "300mg",
    "category": "Hepatoprotective & Biliary",
    "relation": "After Food (Lunch / Dinner)",
    "slots": [
        "morning",
        "evening"
    ],
    "purpose": "Dissolves cholesterol gallstones and improves hepatobiliary circulation in cholestasis"
},
    {
    "id": "cd-cremaffin-plus",
    "name": "Cremaffin Plus Emulsion (Liquid Paraffin + Milk of Magnesia + Sodium Picosulfate)",
    "brand": "Cremaffin Plus",
    "generic": "Liquid Paraffin + Milk of Magnesia + Sodium Picosulfate",
    "aliases": [
        "cremaffin",
        "cremaffin plus",
        "piclin plus",
        "lubowel"
    ],
    "dose": "15ml at Bedtime",
    "category": "Laxative & Stool Softener",
    "relation": "At Bedtime with Water",
    "slots": [
        "bedtime"
    ],
    "purpose": "Post-operative gentle bowel evacuation preventing abdominal suture straining"
},
    {
    "id": "cd-isabgol",
    "name": "Softovac / Isabgol Husk (Ispaghula Husk)",
    "brand": "Softovac / Isabgol",
    "generic": "Ispaghula Husk Powder",
    "aliases": [
        "isabgol",
        "softovac",
        "fibril",
        "fybogel",
        "psyllium husk"
    ],
    "dose": "1-2 Teaspoons in Warm Water",
    "category": "Bulk-Forming Laxative",
    "relation": "At Bedtime with Plenty of Water",
    "slots": [
        "bedtime"
    ],
    "purpose": "Natural plant fiber that swells with water to provide soft, regular stool transit"
},
    {
    "id": "cd-digene-gel",
    "name": "Digene Gel / Gelusil MPS (Magaldrate + Simethicone)",
    "brand": "Digene Gel",
    "generic": "Magaldrate + Simethicone",
    "aliases": [
        "digene",
        "gelusil",
        "gelusil mps",
        "mucaine",
        "polygel"
    ],
    "dose": "10ml",
    "category": "Antacid & Antiflatulent",
    "relation": "After Meals or SOS",
    "slots": [
        "afternoon",
        "bedtime"
    ],
    "purpose": "Instant acid neutralization and gas bubble dispersion for acute heartburn"
},
    {
    "id": "cd-shelcal500",
    "name": "Shelcal 500mg (Calcium Carbonate 500mg + Vitamin D3 250 IU)",
    "brand": "Shelcal 500",
    "generic": "Calcium Carbonate + Vitamin D3",
    "aliases": [
        "shelcal",
        "shelcal 500",
        "shelcal hd",
        "cipcal",
        "calcimax"
    ],
    "dose": "500mg",
    "category": "Mineral & Bone Health",
    "relation": "After Breakfast or Lunch",
    "slots": [
        "morning"
    ],
    "purpose": "Essential elemental calcium and cholecalciferol for bone consolidation and fracture healing"
},
    {
    "id": "cd-uprise-d3",
    "name": "Uprise-D3 60,000 IU Capsule (Cholecalciferol)",
    "brand": "Uprise-D3 60K",
    "generic": "Cholecalciferol (Vitamin D3)",
    "aliases": [
        "uprise d3",
        "calcirol",
        "d rise",
        "dv 60k",
        "tayomac 60k",
        "arachitol"
    ],
    "dose": "60,000 IU",
    "category": "Vitamin Supplement",
    "relation": "Once Weekly with Warm Milk",
    "slots": [
        "morning"
    ],
    "purpose": "High-dose replenishment for severe Vitamin D deficiency, osteomalacia & immune vitality"
},
    {
    "id": "cd-becosules-z",
    "name": "Becosules-Z Capsule (Vitamin B-Complex + Vitamin C + Zinc)",
    "brand": "Becosules-Z",
    "generic": "Vitamin B-Complex + Zinc",
    "aliases": [
        "becosules",
        "becosules z",
        "beplex forte",
        "cobadex czs",
        "polybion"
    ],
    "dose": "1 Capsule",
    "category": "Multivitamin",
    "relation": "After Breakfast",
    "slots": [
        "morning"
    ],
    "purpose": "Replenishes coenzymes for energy metabolism, mouth ulcer repair & cellular recovery"
},
    {
    "id": "cd-neurobion-forte",
    "name": "Neurobion Forte Tablet (B1, B2, B3, B5, B6, B12)",
    "brand": "Neurobion Forte",
    "generic": "B-Complex with Methylcobalamin",
    "aliases": [
        "neurobion",
        "neurobion forte",
        "optineuron",
        "meganeuron",
        "nervz"
    ],
    "dose": "1 Tablet",
    "category": "Nerve Regeneration & Vitamins",
    "relation": "After Breakfast",
    "slots": [
        "morning"
    ],
    "purpose": "Nerve myelin sheath rejuvenation and peripheral diabetic neuropathic numbness relief"
},
    {
    "id": "cd-orofer-xt",
    "name": "Orofer-XT Tablet (Ferrous Ascorbate + Folic Acid)",
    "brand": "Orofer-XT",
    "generic": "Ferrous Ascorbate + Folic Acid",
    "aliases": [
        "orofer xt",
        "autrin",
        "fefol",
        "livogen",
        "feronia xt",
        "cheri xt"
    ],
    "dose": "100mg Iron / 1.5mg FA",
    "category": "Hematinic & Iron",
    "relation": "After Lunch with Citrus / Water (Avoid Milk/Tea)",
    "slots": [
        "afternoon"
    ],
    "purpose": "Rapid correction of post-operative blood-loss anemia and hemoglobin replenishment"
},
    {
    "id": "cd-supradyn",
    "name": "Supradyn Daily Multivitamin Tablet",
    "brand": "Supradyn Daily",
    "generic": "Multivitamins, Minerals & Trace Elements",
    "aliases": [
        "supradyn",
        "zincovit",
        "revital",
        "a to z",
        "becadexamin"
    ],
    "dose": "1 Tablet",
    "category": "Nutritional Support",
    "relation": "After Lunch",
    "slots": [
        "afternoon"
    ],
    "purpose": "Comprehensive daily micronutrient balance for convalescence, stamina & immune strength"
},
    {
    "id": "cd-limcee500",
    "name": "Limcee 500mg Chewable (Vitamin C)",
    "brand": "Limcee 500",
    "generic": "Ascorbic Acid (Vitamin C)",
    "aliases": [
        "limcee",
        "celin 500",
        "sukcee",
        "chewcee"
    ],
    "dose": "500mg Chewable",
    "category": "Vitamin Supplement",
    "relation": "Chew After Lunch",
    "slots": [
        "afternoon"
    ],
    "purpose": "Antioxidant and crucial collagen cofactor for wound healing and immune protection"
},
    {
    "id": "cd-doxy100",
    "name": "Doxycycline 100mg (Doxicip / Doxy-1)",
    "brand": "Doxy-1 100",
    "generic": "Doxycycline",
    "aliases": [
        "doxy",
        "doxy 1",
        "doxicip",
        "microdox",
        "doxycycline"
    ],
    "dose": "100mg",
    "category": "Antibiotic",
    "relation": "After Meals with Full Glass of Water (Stay Upright 30 Mins)",
    "slots": [
        "morning",
        "evening"
    ],
    "purpose": "Tetracycline antibiotic for skin/soft tissue, dental, respiratory & atypical infections"
},
    {
    "id": "cd-norflox-tz",
    "name": "Norflox-TZ (Norfloxacin 400mg + Tinidazole 600mg)",
    "brand": "Norflox-TZ",
    "generic": "Norfloxacin + Tinidazole",
    "aliases": [
        "norflox tz",
        "nor tz",
        "norbactin tz",
        "quin tz"
    ],
    "dose": "400mg/600mg",
    "category": "Antibiotic & Antiprotozoal",
    "relation": "After Food",
    "slots": [
        "morning",
        "evening"
    ],
    "purpose": "Dual fluoroquinolone and nitroimidazole for acute bacterial and amoebic gastroenteritis"
},
    {
    "id": "cd-o2-tab",
    "name": "O2 Tablet (Ofloxacin 200mg + Ornidazole 500mg)",
    "brand": "O2 Tablet",
    "generic": "Ofloxacin + Ornidazole",
    "aliases": [
        "o2",
        "zanocin oz",
        "oflox oz",
        "zenflox oz",
        "ordent"
    ],
    "dose": "200mg/500mg",
    "category": "Antibiotic & Antiprotozoal",
    "relation": "After Meals",
    "slots": [
        "morning",
        "evening"
    ],
    "purpose": "Effective treatment for mixed aerobic-anaerobic dental, surgical & gastrointestinal infections"
},
    {
    "id": "cd-linezolid600",
    "name": "Linezolid 600mg (Linid / Lizomac 600)",
    "brand": "Linid 600",
    "generic": "Linezolid",
    "aliases": [
        "linid",
        "lizomac",
        "lizolid",
        "linezolid",
        "zyvox"
    ],
    "dose": "600mg",
    "category": "Antibiotic",
    "relation": "After Meals with Water",
    "slots": [
        "morning",
        "evening"
    ],
    "purpose": "Oxazolidinone antibiotic for severe hospital-acquired pneumonia & resistant MRSA/VRE infections"
},
    {
    "id": "cd-rifaximin400",
    "name": "Rifagut 400mg (Rifaximin)",
    "brand": "Rifagut 400",
    "generic": "Rifaximin",
    "aliases": [
        "rifagut",
        "rcifax",
        "rifakem",
        "rifaximin",
        "xifaxan"
    ],
    "dose": "400mg",
    "category": "Gastrointestinal Antibiotic",
    "relation": "After Food",
    "slots": [
        "morning",
        "evening"
    ],
    "purpose": "Non-absorbable intestinal antibiotic for hepatic encephalopathy & irritable bowel syndrome"
},
    {
    "id": "cd-metrogyl400",
    "name": "Metrogyl 400mg (Metronidazole)",
    "brand": "Metrogyl 400",
    "generic": "Metronidazole",
    "aliases": [
        "metrogyl",
        "flagyl",
        "metron",
        "aldazole"
    ],
    "dose": "400mg",
    "category": "Antibiotic & Antiamoebic",
    "relation": "After Food (Strictly Avoid Alcohol)",
    "slots": [
        "morning",
        "afternoon",
        "evening"
    ],
    "purpose": "Nitroimidazole targeting obligate anaerobic intra-abdominal and dental infections"
},
    {
    "id": "cd-meftal-spas",
    "name": "Meftal-Spas (Mefenamic Acid 250mg + Dicyclomine 10mg)",
    "brand": "Meftal-Spas",
    "generic": "Mefenamic Acid + Dicyclomine",
    "aliases": [
        "meftal spas",
        "spasmonil",
        "cyclopam",
        "colimex"
    ],
    "dose": "250mg/10mg",
    "category": "Antispasmodic & Analgesic",
    "relation": "After Food (SOS / As Needed for Cramps)",
    "slots": [
        "afternoon"
    ],
    "purpose": "Relieves acute smooth-muscle abdominal spasms, intestinal colic & dysmenorrhea"
},
    {
    "id": "cd-buscopan",
    "name": "Buscopan 10mg (Hyoscine Butylbromide)",
    "brand": "Buscopan 10",
    "generic": "Hyoscine Butylbromide",
    "aliases": [
        "buscopan",
        "hyoscine",
        "hyocimax",
        "belloid"
    ],
    "dose": "10mg",
    "category": "Antispasmodic",
    "relation": "Before or After Food as Advised",
    "slots": [
        "morning",
        "afternoon",
        "evening"
    ],
    "purpose": "Anticholinergic targeting biliary, urinary tract and gastrointestinal visceral smooth-muscle cramps"
},
    {
    "id": "cd-aldactone25",
    "name": "Aldactone 25mg (Spironolactone)",
    "brand": "Aldactone 25",
    "generic": "Spironolactone",
    "aliases": [
        "aldactone",
        "aldactone 25",
        "spiromide",
        "spilac"
    ],
    "dose": "25mg",
    "category": "Potassium-Sparing Diuretic",
    "relation": "Morning after Breakfast",
    "slots": [
        "morning"
    ],
    "purpose": "Aldosterone antagonist for refractory edema, congestive heart failure & hepatic ascites"
},
    {
    "id": "cd-lasix40",
    "name": "Lasix 40mg (Furosemide)",
    "brand": "Lasix 40",
    "generic": "Furosemide",
    "aliases": [
        "lasix",
        "lasix 40",
        "frusemide",
        "frusenex"
    ],
    "dose": "40mg",
    "category": "Loop Diuretic",
    "relation": "Morning after Breakfast (Avoid Late Evening)",
    "slots": [
        "morning"
    ],
    "purpose": "Potent loop diuretic relieving acute pulmonary congestion, pedal edema & hypervolemia"
},
    {
    "id": "cd-dytor-plus10",
    "name": "Dytor Plus 10 (Torsemide 10mg + Spironolactone 50mg)",
    "brand": "Dytor Plus 10",
    "generic": "Torsemide + Spironolactone",
    "aliases": [
        "dytor plus",
        "torget plus",
        "tide plus"
    ],
    "dose": "10mg/50mg",
    "category": "Diuretic Combination",
    "relation": "Morning after Breakfast",
    "slots": [
        "morning"
    ],
    "purpose": "Balanced fluid excretion preserving serum potassium in congestive cardiac/renal edema"
},
    {
    "id": "cd-urimax04",
    "name": "Urimax 0.4mg (Tamsulosin)",
    "brand": "Urimax 0.4",
    "generic": "Tamsulosin",
    "aliases": [
        "urimax",
        "urimax 0.4",
        "urisafe",
        "tamflo",
        "dynapres",
        "flomax"
    ],
    "dose": "0.4mg",
    "category": "Urological / Alpha-1 Blocker",
    "relation": "30 Minutes After Same Meal Every Day (Dinner)",
    "slots": [
        "evening"
    ],
    "purpose": "Relaxes prostate and bladder neck smooth muscle for benign prostatic hyperplasia (BPH)"
},
    {
    "id": "cd-urimax-d",
    "name": "Urimax-D (Tamsulosin 0.4mg + Dutasteride 0.5mg)",
    "brand": "Urimax-D",
    "generic": "Tamsulosin + Dutasteride",
    "aliases": [
        "urimax d",
        "tamflo d",
        "urisafe d",
        "dynapres d"
    ],
    "dose": "0.4mg/0.5mg",
    "category": "Urological Combination",
    "relation": "After Dinner Daily",
    "slots": [
        "evening"
    ],
    "purpose": "Dual action: Immediate urinary flow ease plus 5-alpha reductase prostate shrinkage"
},
    {
    "id": "cd-defcort6",
    "name": "Defcort 6mg (Deflazacort)",
    "brand": "Defcort 6",
    "generic": "Deflazacort",
    "aliases": [
        "defcort",
        "defcort 6",
        "deflaza",
        "orthocort",
        "cortimax"
    ],
    "dose": "6mg",
    "category": "Corticosteroid",
    "relation": "Morning After Food with Milk/Water",
    "slots": [
        "morning"
    ],
    "purpose": "Glucocorticoid with lower bone-resorption and diabetogenic profile for chronic inflammation"
},
    {
    "id": "cd-medrol4",
    "name": "Medrol 4mg (Methylprednisolone)",
    "brand": "Medrol 4",
    "generic": "Methylprednisolone",
    "aliases": [
        "medrol",
        "medrol 4",
        "solu medrol",
        "predmet"
    ],
    "dose": "4mg",
    "category": "Corticosteroid",
    "relation": "Morning After Breakfast",
    "slots": [
        "morning"
    ],
    "purpose": "High anti-inflammatory potency for acute arthritis, allergic flares & post-surgical airway edema"
},
    {
    "id": "cd-omnacortil10",
    "name": "Omnacortil 10mg / Wysolone (Prednisolone)",
    "brand": "Omnacortil 10",
    "generic": "Prednisolone",
    "aliases": [
        "omnacortil",
        "wysolone",
        "omnacortil 10",
        "wysolone 10",
        "nucort"
    ],
    "dose": "10mg",
    "category": "Corticosteroid",
    "relation": "Morning After Food",
    "slots": [
        "morning"
    ],
    "purpose": "Systemic glucocorticoid for severe inflammatory, rheumatic & autoimmune conditions"
},
    {
    "id": "cd-foracort200",
    "name": "Foracort 200 Inhaler / Rotacaps (Formoterol 6mcg + Budesonide 200mcg)",
    "brand": "Foracort 200",
    "generic": "Formoterol + Budesonide",
    "aliases": [
        "foracort",
        "foracort 200",
        "symbicort",
        "budetrol",
        "formonide"
    ],
    "dose": "200mcg Inhalation",
    "category": "Inhaled LABA + Corticosteroid",
    "relation": "Inhale Twice Daily (Rinse Mouth with Water Afterwards)",
    "slots": [
        "morning",
        "evening"
    ],
    "purpose": "Long-term maintenance therapy for asthma & chronic obstructive pulmonary disease (COPD)"
},
    {
    "id": "cd-asthalin",
    "name": "Asthalin Inhaler 100mcg (Salbutamol / Albuterol)",
    "brand": "Asthalin 100",
    "generic": "Salbutamol (Albuterol)",
    "aliases": [
        "asthalin",
        "ventolin",
        "salbair",
        "aerolin"
    ],
    "dose": "100mcg Inhalation (1-2 Puffs)",
    "category": "Short-Acting Beta-2 Agonist",
    "relation": "SOS / As Needed for Acute Breathlessness",
    "slots": [
        "morning",
        "afternoon"
    ],
    "purpose": "Fast-acting bronchodilator for rapid relief of acute wheezing and bronchospasm"
},
    {
    "id": "cd-glycomet-gp2",
    "name": "Glycomet-GP 2 (Metformin 500mg + Glimepiride 2mg)",
    "brand": "Glycomet-GP 2",
    "generic": "Metformin + Glimepiride",
    "aliases": [
        "glycomet gp",
        "glycomet gp 2",
        "amaryl m",
        "glimy m",
        "zoryl m"
    ],
    "dose": "500mg/2mg",
    "category": "Antidiabetic Combination",
    "relation": "Immediately Before Breakfast",
    "slots": [
        "morning"
    ],
    "purpose": "Synergistic insulin secretagogue and biguanide insulin sensitizer for T2D"
},
    {
    "id": "cd-janumet50",
    "name": "Janumet 50/500 (Sitagliptin 50mg + Metformin 500mg)",
    "brand": "Janumet 50/500",
    "generic": "Sitagliptin + Metformin",
    "aliases": [
        "janumet",
        "istamet",
        "zita met",
        "gluconorm s"
    ],
    "dose": "50mg/500mg",
    "category": "Antidiabetic DPP-4 + Biguanide",
    "relation": "With Meals (Breakfast & Dinner)",
    "slots": [
        "morning",
        "evening"
    ],
    "purpose": "Increases incretin hormones and suppresses hepatic glucose production with low hypoglycemia risk"
},
    {
    "id": "cd-galvus-met",
    "name": "Galvus Met 50/500 (Vildagliptin 50mg + Metformin 500mg)",
    "brand": "Galvus Met 50/500",
    "generic": "Vildagliptin + Metformin",
    "aliases": [
        "galvus met",
        "jalra m",
        "vysov m",
        "zomelis met"
    ],
    "dose": "50mg/500mg",
    "category": "Antidiabetic DPP-4 + Biguanide",
    "relation": "Twice Daily with Meals",
    "slots": [
        "morning",
        "evening"
    ],
    "purpose": "Physiological glucose-dependent insulin release and suppression of glucagon secretion"
},
    {
    "id": "cd-jardiance25",
    "name": "Jardiance 25mg (Empagliflozin)",
    "brand": "Jardiance 25",
    "generic": "Empagliflozin",
    "aliases": [
        "jardiance",
        "jardiance 25",
        "gibtulio",
        "empared"
    ],
    "dose": "25mg",
    "category": "Antidiabetic SGLT2 Inhibitor",
    "relation": "Morning with or without Food",
    "slots": [
        "morning"
    ],
    "purpose": "Cardiovascular risk reduction, renal protection & urinary glucose elimination"
},
    {
    "id": "cd-sorbitrate",
    "name": "Sorbitrate 5mg Sublingual (Isosorbide Dinitrate)",
    "brand": "Sorbitrate 5",
    "generic": "Isosorbide Dinitrate",
    "aliases": [
        "sorbitrate",
        "sorbitrate 5",
        "isordil",
        "cardisorb"
    ],
    "dose": "5mg Sublingual",
    "category": "Nitrate / Antianginal",
    "relation": "Place Under Tongue SOS during Chest Pain",
    "slots": [
        "afternoon"
    ],
    "purpose": "Rapid coronary vasodilation relieving acute angina pectoris and cardiac ischemia"
}
  ];

  // Helper: Normalize OCR noisy text strings
  function normalizeOcrToken(str) {
    if (!str) return '';
    return str
      .replace(/[0oO]/g, 'o')
      .replace(/[1lI|!]/g, 'l')
      .replace(/[5sS$]/g, 's')
      .replace(/[@]/g, 'a')
      .replace(/[8B]/g, 'b')
      .toLowerCase()
      .replace(/[^a-z0-9]/g, '');
  }

  // Fast Levenshtein distance calculation
  function levenshteinDistance(s1, s2) {
    s1 = s1 || '';
    s2 = s2 || '';
    const m = s1.length;
    const n = s2.length;
    if (m === 0) return n;
    if (n === 0) return m;

    const d = [];
    for (let i = 0; i <= m; i++) d[i] = [i];
    for (let j = 0; j <= n; j++) d[0][j] = j;

    for (let i = 1; i <= m; i++) {
      for (let j = 1; j <= n; j++) {
        const cost = s1[i - 1] === s2[j - 1] ? 0 : 1;
        d[i][j] = Math.min(
          d[i - 1][j] + 1,       // deletion
          d[i][j - 1] + 1,       // insertion
          d[i - 1][j - 1] + cost // substitution
        );
      }
    }
    return d[m][n];
  }

  // Similarity score between 0.0 and 1.0
  function similarityScore(s1, s2) {
    const longer = s1.length > s2.length ? s1 : s2;
    if (longer.length === 0) return 1.0;
    const dist = levenshteinDistance(s1, s2);
    return (longer.length - dist) / longer.length;
  }

  // Master Matching Function:
  // Given a raw scanned line, checks whether it is a real medicine, matches against 220+ catalog,
  // normalizes OCR misreads, and returns clean structured clinical entity or null.
  function matchPrescriptionLine(line) {
    if (!line || typeof line !== 'string') return null;
    const trimmed = line.trim();
    if (trimmed.length < 3) return null;

    // Check Blacklist: administrative, vitals, or laboratory words must NEVER be medicines
    if (NON_MED_BLACKLIST_REGEX.test(trimmed)) {
      return null;
    }

    const cleanLine = trimmed
      .replace(/^\d+[\.\)\-]\s*/, '')
      .replace(/^(?:tab|cap|inj|syp|susp|oint|rx|r\/)[\.\s]*/i, '')
      .trim();

    const normalizedLine = normalizeOcrToken(cleanLine);

    // 1. Exact or Alias Match in Master Catalog
    let bestMatch = null;
    let highestScore = 0;

    for (let i = 0; i < CLINICAL_DRUG_MASTER.length; i++) {
      const med = CLINICAL_DRUG_MASTER[i];
      const matchTargets = [med.name, med.brand, med.generic, ...(med.aliases || [])];
      const allTargets = [];

      matchTargets.forEach(tgt => {
        if (!tgt) return;
        allTargets.push(tgt);
        // Add single constituent root words (e.g. "Cefuroxime" from "Cefuroxime Axetil", "Lactulose" from "Lactulose Solution")
        tgt.split(/[\s,+/]+/).forEach(word => {
          const cleanW = word.trim();
          if (cleanW.length >= 5 && !/^(tablet|tablets|syrup|capsule|capsules|solution|injection|ointment|cream|powder|concentrate|retard|plus|forte|daily|chewable|release|prolonged)$/i.test(cleanW)) {
            allTargets.push(cleanW);
          }
        });
      });

      for (let t = 0; t < allTargets.length; t++) {
        const target = allTargets[t];
        const normTarget = normalizeOcrToken(target);

        // Substring token match
        if (normalizedLine.includes(normTarget) && normTarget.length >= 4) {
          const score = 0.95 + (normTarget.length / 100);
          if (score > highestScore) {
            highestScore = score;
            bestMatch = med;
          }
        } else {
          // Token fuzzy match
          const lineTokens = cleanLine.split(/[\s,/-]+/);
          for (let k = 0; k < lineTokens.length; k++) {
            const token = normalizeOcrToken(lineTokens[k]);
            if (token.length >= 4 && normTarget.length >= 4) {
              const sim = similarityScore(token, normTarget);
              if (sim >= 0.78 && sim > highestScore) {
                highestScore = sim;
                bestMatch = med;
              }
            }
          }
        }
      }
    }

    // 2. If no high-confidence match found in database,
    // only accept if line has explicit pharmaceutical form AND valid dosage unit
    if (!bestMatch || highestScore < 0.75) {
      const lineWithoutNumber = trimmed.replace(/^\d+[\.\)\-]\s*/, '');
      const hasFormPrefix = /^(?:tab|tablet|cap|capsule|inj|injection|syp|syrup|susp|oint|ointment|drop|drops|rx)\b/i.test(lineWithoutNumber);
      const hasDosage = /\b\d+(?:\.\d+)?\s*(?:mg|mcg|gm|ml|units|iu)\b/i.test(trimmed);

      if (!hasFormPrefix || !hasDosage) {
        return null; // Reject noisy non-prescription line!
      }

      // Extract cleaned custom drug name
      const nameParts = cleanLine.split(/[\s-]+/);
      const customName = nameParts.slice(0, 3).join(' ');
      const doseMatch = trimmed.match(/\b(\d+(?:\.\d+)?\s*(?:mg|mcg|gm|ml|units|iu))\b/i);

      bestMatch = {
        name: customName + (doseMatch ? ' ' + doseMatch[1] : ''),
        brand: customName,
        generic: customName,
        dose: doseMatch ? doseMatch[1] : '1 Dose',
        category: 'Prescribed Recovery Formulation',
        relation: 'After Food',
        slots: ['morning'],
        purpose: 'Prescribed outpatient therapeutic medication'
      };
    }

    // 3. Extract Schedule / Frequencies from the actual scanned line
    let slots = [...(bestMatch.slots || ['morning'])];
    if (/\b1-0-1\b|\bbd\b|\bbid\b|\btwice daily\b/i.test(trimmed)) {
      slots = ['morning', 'evening'];
    } else if (/\b1-1-1\b|\btds\b|\btid\b|\bthrice daily\b/i.test(trimmed)) {
      slots = ['morning', 'afternoon', 'evening'];
    } else if (/\b1-0-0\b|\bod\b|\bonce daily\b|\bin morning\b/i.test(trimmed)) {
      slots = ['morning'];
    } else if (/\b0-1-0\b|\bafter lunch\b/i.test(trimmed)) {
      slots = ['afternoon'];
    } else if (/\b0-0-1\b|\bhs\b|\bbedtime\b|\bat night\b/i.test(trimmed)) {
      slots = ['bedtime'];
    } else if (/\bsos\b|\bprn\b|\bas needed\b/i.test(trimmed)) {
      slots = ['afternoon'];
    }

    // 4. Extract Food Timing
    let relation = bestMatch.relation;
    if (/\b(?:a\/f|pc|after food|after meals)\b/i.test(trimmed)) {
      relation = 'After Food';
    } else if (/\b(?:b\/f|ac|before food|empty stomach)\b/i.test(trimmed)) {
      relation = 'Before Food (Empty Stomach)';
    }

    // 5. Extract Specific Dosage if present in line
    const explicitDose = trimmed.match(/\b(\d+(?:\.\d+)?\s*(?:mg|mcg|gm|ml|units|iu))\b/i);
    const finalDose = explicitDose ? explicitDose[1] : (bestMatch.dose || '1 Dose');

    // 6. Extract Duration if present
    const durMatch = trimmed.match(/(?:for|x)\s*(\d+\s*(?:days|weeks|months|d))\b/i);
    const finalDuration = durMatch ? durMatch[1] : '5 to 7 days';

    return {
      name: bestMatch.name,
      brand: bestMatch.brand,
      generic: bestMatch.generic,
      dose: finalDose,
      category: bestMatch.category,
      relation: relation,
      slots: slots,
      purpose: bestMatch.purpose,
      duration: finalDuration,
      confidence: highestScore ? Math.round(highestScore * 100) : 90
    };
  }

  // Autocomplete search across all 220+ drugs
  function searchDrugMaster(query) {
    if (!query || typeof query !== 'string') return CLINICAL_DRUG_MASTER.slice(0, 15);
    const q = query.toLowerCase().trim();
    return CLINICAL_DRUG_MASTER.filter(m => {
      return m.name.toLowerCase().includes(q) ||
             m.brand.toLowerCase().includes(q) ||
             m.generic.toLowerCase().includes(q) ||
             (m.aliases && m.aliases.some(a => a.toLowerCase().includes(q)));
    }).slice(0, 20);
  }

  // Export to root (window in browser, module.exports in Node)
  root.CLINICAL_DRUG_MASTER = CLINICAL_DRUG_MASTER;
  root.matchPrescriptionLine = matchPrescriptionLine;
  root.searchDrugMaster = searchDrugMaster;

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
      CLINICAL_DRUG_MASTER,
      matchPrescriptionLine,
      searchDrugMaster
    };
  }
})(typeof window !== 'undefined' ? window : (typeof global !== 'undefined' ? global : this));
