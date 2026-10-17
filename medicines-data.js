/**
 * CareNest Comprehensive Medicines Database
 * Contains 300+ commonly prescribed and OTC Indian medications across all general disease categories.
 */
(function (root) {
  'use strict';

  const MEDICINE_DATABASE = [
  {
    "id": "med-dolo650",
    "brand": "Dolo 650",
    "generic": "Paracetamol",
    "strength": "650mg",
    "form": "Tablet",
    "manufacturer": "Micro Labs Ltd",
    "price": 30.5,
    "unit": "Strip of 15 tablets",
    "category": "Pain & Fever",
    "uses": "Fever, headache, moderate body pain, muscular aches, toothache",
    "sideEffects": "Mild nausea, allergic skin rash, hepatotoxicity in acute overdose",
    "description": "A widely prescribed antipyretic and analgesic tablet formulated for fever reduction and mild-to-moderate pain management.",
    "alternatives": [
      {
        "name": "Generic Paracetamol 650mg",
        "mfr": "Jan Aushadhi / BPPI",
        "price": 8.5,
        "isGeneric": true,
        "dosage": "650mg"
      },
      {
        "name": "Pacimol 650",
        "mfr": "Ipca Laboratories",
        "price": 21,
        "isGeneric": false,
        "dosage": "650mg"
      },
      {
        "name": "Calpol 650",
        "mfr": "GSK Pharmaceuticals",
        "price": 28,
        "isGeneric": false,
        "dosage": "650mg"
      },
      {
        "name": "Crocin 650",
        "mfr": "GSK Consumer",
        "price": 32,
        "isGeneric": false,
        "dosage": "650mg"
      },
      {
        "name": "P-650",
        "mfr": "Apex Laboratories",
        "price": 24.5,
        "isGeneric": false,
        "dosage": "650mg"
      }
    ]
  },
  {
    "id": "med-crocin650",
    "brand": "Crocin 650",
    "generic": "Paracetamol",
    "strength": "650mg",
    "form": "Tablet",
    "manufacturer": "GlaxoSmithKline (GSK)",
    "price": 33.5,
    "unit": "Strip of 15 tablets",
    "category": "Pain & Fever",
    "uses": "Acute fever, headache, bodyache, seasonal viral discomfort",
    "sideEffects": "Skin itching (rare), mild gastric irritation",
    "description": "Fast-release paracetamol tablet known for rapid gastric absorption and systemic temperature control.",
    "alternatives": [
      {
        "name": "Generic Paracetamol 650mg",
        "mfr": "Jan Aushadhi / BPPI",
        "price": 8.5,
        "isGeneric": true,
        "dosage": "650mg"
      },
      {
        "name": "Dolo 650",
        "mfr": "Micro Labs Ltd",
        "price": 30.5,
        "isGeneric": false,
        "dosage": "650mg"
      },
      {
        "name": "T-98 650",
        "mfr": "Mankind Pharma",
        "price": 20,
        "isGeneric": false,
        "dosage": "650mg"
      }
    ]
  },
  {
    "id": "med-combiflam",
    "brand": "Combiflam",
    "generic": "Ibuprofen + Paracetamol",
    "strength": "400mg + 325mg",
    "form": "Tablet",
    "manufacturer": "Sanofi India Ltd",
    "price": 43,
    "unit": "Strip of 20 tablets",
    "category": "Pain & Fever",
    "uses": "Dental pain, post-extraction swelling, joint pain, menstrual cramps, headache",
    "sideEffects": "Heartburn, nausea, abdominal discomfort, dizziness",
    "description": "Synergistic combination of NSAID Ibuprofen and analgesic Paracetamol for potent anti-inflammatory pain relief.",
    "alternatives": [
      {
        "name": "Generic Ibuprofen + Paracetamol",
        "mfr": "Jan Aushadhi / BPPI",
        "price": 11,
        "isGeneric": true,
        "dosage": "400mg+325mg"
      },
      {
        "name": "Ibugesic Plus",
        "mfr": "Cipla Ltd",
        "price": 29.5,
        "isGeneric": false,
        "dosage": "400mg+325mg"
      },
      {
        "name": "Flexon",
        "mfr": "Aristo Pharmaceuticals",
        "price": 31,
        "isGeneric": false,
        "dosage": "400mg+325mg"
      }
    ]
  },
  {
    "id": "med-zerodolsp",
    "brand": "Zerodol-SP",
    "generic": "Aceclofenac + Paracetamol + Serratiopeptidase",
    "strength": "100mg + 325mg + 15mg",
    "form": "Tablet",
    "manufacturer": "Ipca Laboratories",
    "price": 118,
    "unit": "Strip of 10 tablets",
    "category": "Pain & Fever",
    "uses": "Post-surgical pain, orthopedic injury, arthritis, bone swelling, soft-tissue inflammation",
    "sideEffects": "Epigastric distress, diarrhea, indigestion, dizziness",
    "description": "Triple-combination medication combining a selective NSAID, Paracetamol, and enzyme Serratiopeptidase to dissolve exudate and inflammatory edema.",
    "alternatives": [
      {
        "name": "Generic Aceclofenac+Para+Serratiopeptidase",
        "mfr": "Jan Aushadhi / BPPI",
        "price": 28,
        "isGeneric": true,
        "dosage": "100+325+15mg"
      },
      {
        "name": "Hifenac-SP",
        "mfr": "Intas Pharmaceuticals",
        "price": 112,
        "isGeneric": false,
        "dosage": "100+325+15mg"
      },
      {
        "name": "Signoflam",
        "mfr": "Lupin Ltd",
        "price": 105,
        "isGeneric": false,
        "dosage": "100+325+15mg"
      },
      {
        "name": "Aceclo-SP",
        "mfr": "Aristo Pharmaceuticals",
        "price": 95,
        "isGeneric": false,
        "dosage": "100+325+15mg"
      }
    ]
  },
  {
    "id": "med-meftalspas",
    "brand": "Meftal-Spas",
    "generic": "Mefenamic Acid + Dicyclomine",
    "strength": "250mg + 10mg",
    "form": "Tablet",
    "manufacturer": "Blue Cross Laboratories",
    "price": 52,
    "unit": "Strip of 10 tablets",
    "category": "Pain & Fever",
    "uses": "Menstrual abdominal cramps (dysmenorrhea), colicky intestinal spasms, renal colic pain",
    "sideEffects": "Dry mouth, blurred vision, mild drowsiness, nausea",
    "description": "Antispasmodic and analgesic combination that blocks prostaglandin synthesis while relaxing visceral smooth muscles.",
    "alternatives": [
      {
        "name": "Generic Mefenamic Acid + Dicyclomine Tablets",
        "mfr": "Jan Aushadhi / BPPI",
        "price": 12.5,
        "isGeneric": true,
        "dosage": "250mg+10mg"
      },
      {
        "name": "Spasmonil",
        "mfr": "Cipla Ltd",
        "price": 38,
        "isGeneric": false,
        "dosage": "250mg+10mg"
      },
      {
        "name": "Colimex",
        "mfr": "Wallace Pharmaceuticals",
        "price": 42,
        "isGeneric": false,
        "dosage": "250mg+10mg"
      }
    ]
  },
  {
    "id": "med-voveran50",
    "brand": "Voveran 50",
    "generic": "Diclofenac Sodium",
    "strength": "50mg",
    "form": "Tablet",
    "manufacturer": "Novartis India",
    "price": 78,
    "unit": "Strip of 15 tablets",
    "category": "Pain & Fever",
    "uses": "Osteoarthritis, rheumatoid arthritis, acute gout flare, ankylosing spondylitis",
    "sideEffects": "Gastric ulceration risk, elevated blood pressure, fluid retention",
    "description": "Potent non-steroidal anti-inflammatory drug providing rapid inhibition of cyclooxygenase enzymes (COX-1 & COX-2).",
    "alternatives": [
      {
        "name": "Generic Diclofenac Sodium 50mg",
        "mfr": "Jan Aushadhi / BPPI",
        "price": 6.8,
        "isGeneric": true,
        "dosage": "50mg"
      },
      {
        "name": "Diclogesic 50",
        "mfr": "Torrent Pharma",
        "price": 42,
        "isGeneric": false,
        "dosage": "50mg"
      },
      {
        "name": "Diclomol",
        "mfr": "Win-Medicare",
        "price": 36,
        "isGeneric": false,
        "dosage": "50mg"
      }
    ]
  },
  {
    "id": "med-ultracet",
    "brand": "Ultracet",
    "generic": "Tramadol + Paracetamol",
    "strength": "37.5mg + 325mg",
    "form": "Tablet",
    "manufacturer": "Janssen / Johnson & Johnson",
    "price": 245,
    "unit": "Strip of 15 tablets",
    "category": "Pain & Fever",
    "uses": "Moderate-to-severe surgical pain, cancer pain, chronic severe orthopedic discomfort",
    "sideEffects": "Drowsiness, constipation, nausea, dizziness, potential dependence on prolonged use",
    "description": "Central-acting opioid analgesic paired with Paracetamol for controlled surgical and acute trauma pain therapy.",
    "alternatives": [
      {
        "name": "Generic Tramadol + Paracetamol",
        "mfr": "Jan Aushadhi / BPPI",
        "price": 48,
        "isGeneric": true,
        "dosage": "37.5mg+325mg"
      },
      {
        "name": "Tramazac-P",
        "mfr": "Zydus Cadila",
        "price": 110,
        "isGeneric": false,
        "dosage": "37.5mg+325mg"
      },
      {
        "name": "Calpol-T",
        "mfr": "GSK",
        "price": 135,
        "isGeneric": false,
        "dosage": "37.5mg+325mg"
      }
    ]
  },
  {
    "id": "med-naprosyn500",
    "brand": "Naprosyn 500",
    "generic": "Naproxen",
    "strength": "500mg",
    "form": "Tablet",
    "manufacturer": "RPG Life Sciences",
    "price": 88,
    "unit": "Strip of 15 tablets",
    "category": "Pain & Fever",
    "uses": "Severe migraine headaches, chronic tendonitis, acute bursitis, spondylitis",
    "sideEffects": "Heartburn, abdominal pain, tinnitus, edema",
    "description": "Longer-acting propionic acid derivative NSAID offering up to 12-hour sustained inflammatory pain suppression.",
    "alternatives": [
      {
        "name": "Generic Naproxen 500mg",
        "mfr": "Jan Aushadhi / BPPI",
        "price": 16,
        "isGeneric": true,
        "dosage": "500mg"
      },
      {
        "name": "Xenobid 500",
        "mfr": "Serum Institute",
        "price": 62,
        "isGeneric": false,
        "dosage": "500mg"
      }
    ]
  },
  {
    "id": "med-augmentin625",
    "brand": "Augmentin 625 Duo",
    "generic": "Amoxicillin + Clavulanic Acid",
    "strength": "500mg + 125mg",
    "form": "Tablet",
    "manufacturer": "GlaxoSmithKline (GSK)",
    "price": 224,
    "unit": "Strip of 10 tablets",
    "category": "Antibiotic",
    "uses": "Bacterial chest infections, post-operative surgical prophylaxis, dental abscess, severe sinusitis, skin cellulitis",
    "sideEffects": "Loose stools, stomach upset, oral thrush, nausea",
    "description": "Gold-standard broad-spectrum penicillin antibiotic with beta-lactamase inhibitor protecting against bacterial enzyme resistance.",
    "alternatives": [
      {
        "name": "Generic Amoxicillin+Clavulanate 625mg",
        "mfr": "Jan Aushadhi / BPPI",
        "price": 58,
        "isGeneric": true,
        "dosage": "625mg"
      },
      {
        "name": "Moxikind-CV 625",
        "mfr": "Mankind Pharma",
        "price": 145,
        "isGeneric": false,
        "dosage": "625mg"
      },
      {
        "name": "Clavam 625",
        "mfr": "Alkem Laboratories",
        "price": 178,
        "isGeneric": false,
        "dosage": "625mg"
      },
      {
        "name": "Polyclav 625",
        "mfr": "Macloeds Pharmaceuticals",
        "price": 152,
        "isGeneric": false,
        "dosage": "625mg"
      },
      {
        "name": "Advent 625",
        "mfr": "Cipla Ltd",
        "price": 168,
        "isGeneric": false,
        "dosage": "625mg"
      }
    ]
  },
  {
    "id": "med-azithral500",
    "brand": "Azithral 500",
    "generic": "Azithromycin",
    "strength": "500mg",
    "form": "Tablet",
    "manufacturer": "Alembic Pharmaceuticals",
    "price": 98,
    "unit": "Strip of 5 tablets",
    "category": "Antibiotic",
    "uses": "Bronchitis, community-acquired pneumonia, strep throat, skin infections, typhoid fever",
    "sideEffects": "Nausea, abdominal cramping, loose stools, temporary taste changes",
    "description": "High-tissue concentration macrolide antibiotic with convenient once-daily dosing regimen.",
    "alternatives": [
      {
        "name": "Generic Azithromycin 500mg",
        "mfr": "Jan Aushadhi / BPPI",
        "price": 32,
        "isGeneric": true,
        "dosage": "500mg"
      },
      {
        "name": "Azee 500",
        "mfr": "Cipla Ltd",
        "price": 92,
        "isGeneric": false,
        "dosage": "500mg"
      },
      {
        "name": "Zady 500",
        "mfr": "Mankind Pharma",
        "price": 74,
        "isGeneric": false,
        "dosage": "500mg"
      },
      {
        "name": "Zithromax 500",
        "mfr": "Pfizer",
        "price": 125,
        "isGeneric": false,
        "dosage": "500mg"
      }
    ]
  },
  {
    "id": "med-taximo200",
    "brand": "Taxim-O 200",
    "generic": "Cefixime",
    "strength": "200mg",
    "form": "Tablet",
    "manufacturer": "Alkem Laboratories",
    "price": 115,
    "unit": "Strip of 10 tablets",
    "category": "Antibiotic",
    "uses": "Typhoid fever, urinary tract infection (UTI), acute otitis media, tonsillitis",
    "sideEffects": "Diarrhea, dyspepsia, mild flatulence, headache",
    "description": "Third-generation oral cephalosporin antibiotic with broad-spectrum action against Gram-negative pathogens.",
    "alternatives": [
      {
        "name": "Generic Cefixime 200mg Tablet",
        "mfr": "Jan Aushadhi / BPPI",
        "price": 36,
        "isGeneric": true,
        "dosage": "200mg"
      },
      {
        "name": "Mahacef 200",
        "mfr": "Mankind Pharma",
        "price": 89,
        "isGeneric": false,
        "dosage": "200mg"
      },
      {
        "name": "Cefolac 200",
        "mfr": "Macloeds Pharmaceuticals",
        "price": 94,
        "isGeneric": false,
        "dosage": "200mg"
      },
      {
        "name": "Zifi 200",
        "mfr": "FDC Ltd",
        "price": 108,
        "isGeneric": false,
        "dosage": "200mg"
      }
    ]
  },
  {
    "id": "med-ciplox500",
    "brand": "Ciplox 500",
    "generic": "Ciprofloxacin",
    "strength": "500mg",
    "form": "Tablet",
    "manufacturer": "Cipla Ltd",
    "price": 46,
    "unit": "Strip of 10 tablets",
    "category": "Antibiotic",
    "uses": "Severe bacterial diarrhea, abdominal sepsis, bone & joint infection, complicated UTI",
    "sideEffects": "Tendon discomfort, nausea, dizziness, sun sensitivity (photosensitivity)",
    "description": "Fluoroquinolone antibiotic that bactericidally inhibits bacterial DNA-gyrase enzyme.",
    "alternatives": [
      {
        "name": "Generic Ciprofloxacin 500mg",
        "mfr": "Jan Aushadhi / BPPI",
        "price": 14.5,
        "isGeneric": true,
        "dosage": "500mg"
      },
      {
        "name": "Cifran 500",
        "mfr": "Sun Pharmaceuticals",
        "price": 42,
        "isGeneric": false,
        "dosage": "500mg"
      },
      {
        "name": "Ciprobid 500",
        "mfr": "Zydus Cadila",
        "price": 38,
        "isGeneric": false,
        "dosage": "500mg"
      }
    ]
  },
  {
    "id": "med-oflox200",
    "brand": "Oflox 200",
    "generic": "Ofloxacin",
    "strength": "200mg",
    "form": "Tablet",
    "manufacturer": "Cipla Ltd",
    "price": 76,
    "unit": "Strip of 10 tablets",
    "category": "Antibiotic",
    "uses": "Pelvic inflammatory disease, chronic bronchitis, traveler diarrhea, urethritis",
    "sideEffects": "Insomnia, headache, nausea, mild tremors",
    "description": "Systemic broad-spectrum quinolone active against respiratory and genitourinary pathogens.",
    "alternatives": [
      {
        "name": "Generic Ofloxacin 200mg",
        "mfr": "Jan Aushadhi / BPPI",
        "price": 18,
        "isGeneric": true,
        "dosage": "200mg"
      },
      {
        "name": "Zanocin 200",
        "mfr": "Sun Pharma",
        "price": 82,
        "isGeneric": false,
        "dosage": "200mg"
      },
      {
        "name": "Oflomac 200",
        "mfr": "Mankind Pharma",
        "price": 58,
        "isGeneric": false,
        "dosage": "200mg"
      }
    ]
  },
  {
    "id": "med-flagyl400",
    "brand": "Flagyl 400",
    "generic": "Metronidazole",
    "strength": "400mg",
    "form": "Tablet",
    "manufacturer": "Abbott Healthcare",
    "price": 24.5,
    "unit": "Strip of 15 tablets",
    "category": "Antibiotic",
    "uses": "Amoebic dysentery, dental infections, anaerobic wound infections, giardiasis, trichomoniasis",
    "sideEffects": "Metallic taste in mouth, dark urine, mild nausea, disulfiram-like reaction with alcohol",
    "description": "Potent nitroimidazole antimicrobial effective against anaerobic bacteria and pathogenic protozoa.",
    "alternatives": [
      {
        "name": "Generic Metronidazole 400mg",
        "mfr": "Jan Aushadhi / BPPI",
        "price": 6.5,
        "isGeneric": true,
        "dosage": "400mg"
      },
      {
        "name": "Metrogyl 400",
        "mfr": "J.B. Chemicals",
        "price": 22,
        "isGeneric": false,
        "dosage": "400mg"
      },
      {
        "name": "Aristogyl 400",
        "mfr": "Aristo Pharmaceuticals",
        "price": 19.5,
        "isGeneric": false,
        "dosage": "400mg"
      }
    ]
  },
  {
    "id": "med-doxy100",
    "brand": "Doxy-1 100",
    "generic": "Doxycycline",
    "strength": "100mg",
    "form": "Capsule",
    "manufacturer": "USV Ltd",
    "price": 48,
    "unit": "Strip of 10 capsules",
    "category": "Antibiotic",
    "uses": "Acne vulgaris, cholera, Lyme disease, scrub typhus, malaria prophylaxis, chlamydia",
    "sideEffects": "Esophageal irritation (must take with full glass water), photosensitivity, vomiting",
    "description": "Broad-spectrum tetracycline antibiotic that inhibits bacterial protein synthesis.",
    "alternatives": [
      {
        "name": "Generic Doxycycline 100mg",
        "mfr": "Jan Aushadhi / BPPI",
        "price": 11.5,
        "isGeneric": true,
        "dosage": "100mg"
      },
      {
        "name": "Microdox 100",
        "mfr": "Micro Labs Ltd",
        "price": 42,
        "isGeneric": false,
        "dosage": "100mg"
      }
    ]
  },
  {
    "id": "med-forcan150",
    "brand": "Forcan 150",
    "generic": "Fluconazole",
    "strength": "150mg",
    "form": "Tablet",
    "manufacturer": "Cipla Ltd",
    "price": 42,
    "unit": "Single Tablet Blister",
    "category": "Antifungal",
    "uses": "Fungal candidiasis, oral thrush, vaginal yeast infection, ringworm, fungal nail infection",
    "sideEffects": "Headache, stomach pain, mild rash, elevated liver enzymes",
    "description": "Synthetic triazole antifungal agent that selectively inhibits fungal cytochrome P-450 sterol synthesis.",
    "alternatives": [
      {
        "name": "Generic Fluconazole 150mg",
        "mfr": "Jan Aushadhi / BPPI",
        "price": 7.5,
        "isGeneric": true,
        "dosage": "150mg"
      },
      {
        "name": "Flucos 150",
        "mfr": "Torrent Pharma",
        "price": 34,
        "isGeneric": false,
        "dosage": "150mg"
      },
      {
        "name": "Zocon 150",
        "mfr": "FDC Ltd",
        "price": 36,
        "isGeneric": false,
        "dosage": "150mg"
      }
    ]
  },
  {
    "id": "med-glycomet500",
    "brand": "Glycomet 500",
    "generic": "Metformin",
    "strength": "500mg",
    "form": "Tablet",
    "manufacturer": "USV Ltd",
    "price": 32,
    "unit": "Strip of 20 tablets",
    "category": "Diabetes",
    "uses": "Type 2 diabetes mellitus, high fasting glucose, insulin resistance, PCOS management",
    "sideEffects": "Metallic taste, diarrhea, flatulence, rare lactic acidosis in renal failure",
    "description": "First-line biguanide anti-hyperglycemic drug that decreases hepatic glucose synthesis and increases peripheral glucose sensitivity.",
    "alternatives": [
      {
        "name": "Generic Metformin 500mg",
        "mfr": "Jan Aushadhi / BPPI",
        "price": 9.5,
        "isGeneric": true,
        "dosage": "500mg"
      },
      {
        "name": "Formin 500",
        "mfr": "Alkem Laboratories",
        "price": 24,
        "isGeneric": false,
        "dosage": "500mg"
      },
      {
        "name": "Okamet 500",
        "mfr": "Cipla Ltd",
        "price": 26.5,
        "isGeneric": false,
        "dosage": "500mg"
      },
      {
        "name": "Glucophage 500",
        "mfr": "Merck Healthcare",
        "price": 45,
        "isGeneric": false,
        "dosage": "500mg"
      }
    ]
  },
  {
    "id": "med-glycomet1000sr",
    "brand": "Glycomet-SR 1000",
    "generic": "Metformin Sustained Release",
    "strength": "1000mg",
    "form": "Tablet",
    "manufacturer": "USV Ltd",
    "price": 68,
    "unit": "Strip of 15 tablets",
    "category": "Diabetes",
    "uses": "Advanced Type 2 diabetes requiring high-dose 24-hour glycemic coverage",
    "sideEffects": "Mild abdominal bloating, decreased appetite, soft stools",
    "description": "Slow-release Metformin matrix minimizing gastrointestinal irritation and ensuring steady day-long glycemic balance.",
    "alternatives": [
      {
        "name": "Generic Metformin SR 1000mg",
        "mfr": "Jan Aushadhi / BPPI",
        "price": 18,
        "isGeneric": true,
        "dosage": "1000mg"
      },
      {
        "name": "Formin-SR 1000",
        "mfr": "Alkem Laboratories",
        "price": 49,
        "isGeneric": false,
        "dosage": "1000mg"
      },
      {
        "name": "Exermet-SR 1000",
        "mfr": "Torrent Pharma",
        "price": 54,
        "isGeneric": false,
        "dosage": "1000mg"
      }
    ]
  },
  {
    "id": "med-amaryl2",
    "brand": "Amaryl 2",
    "generic": "Glimepiride",
    "strength": "2mg",
    "form": "Tablet",
    "manufacturer": "Sanofi India Ltd",
    "price": 135,
    "unit": "Strip of 30 tablets",
    "category": "Diabetes",
    "uses": "Type 2 diabetes with elevated post-meal blood sugar levels",
    "sideEffects": "Hypoglycemia (sweating, trembling), mild weight gain, dizziness",
    "description": "Third-generation sulfonylurea that stimulates pancreatic beta-cells to secrete insulin in response to food.",
    "alternatives": [
      {
        "name": "Generic Glimepiride 2mg",
        "mfr": "Jan Aushadhi / BPPI",
        "price": 16.5,
        "isGeneric": true,
        "dosage": "2mg"
      },
      {
        "name": "Glimisave 2",
        "mfr": "Eris Lifesciences",
        "price": 82,
        "isGeneric": false,
        "dosage": "2mg"
      },
      {
        "name": "Gepride 2",
        "mfr": "Micro Labs Ltd",
        "price": 74,
        "isGeneric": false,
        "dosage": "2mg"
      },
      {
        "name": "Zoryl 2",
        "mfr": "Intas Pharmaceuticals",
        "price": 98,
        "isGeneric": false,
        "dosage": "2mg"
      }
    ]
  },
  {
    "id": "med-januvia100",
    "brand": "Januvia 100",
    "generic": "Sitagliptin",
    "strength": "100mg",
    "form": "Tablet",
    "manufacturer": "MSD Pharmaceuticals",
    "price": 360,
    "unit": "Strip of 14 tablets",
    "category": "Diabetes",
    "uses": "Type 2 diabetes, HbA1c lowering without causing sudden low sugar drops (weight neutral)",
    "sideEffects": "Nasopharyngitis, headache, upper respiratory tract irritation",
    "description": "DPP-4 inhibitor that augments levels of active incretin hormones GLP-1 and GIP.",
    "alternatives": [
      {
        "name": "Generic Sitagliptin 100mg",
        "mfr": "Jan Aushadhi / BPPI",
        "price": 70,
        "isGeneric": true,
        "dosage": "100mg"
      },
      {
        "name": "Zita 100",
        "mfr": "Glenmark Pharmaceuticals",
        "price": 195,
        "isGeneric": false,
        "dosage": "100mg"
      },
      {
        "name": "Sitara 100",
        "mfr": "Lupin Ltd",
        "price": 210,
        "isGeneric": false,
        "dosage": "100mg"
      }
    ]
  },
  {
    "id": "med-forxiga10",
    "brand": "Forxiga 10",
    "generic": "Dapagliflozin",
    "strength": "10mg",
    "form": "Tablet",
    "manufacturer": "AstraZeneca",
    "price": 680,
    "unit": "Strip of 14 tablets",
    "category": "Diabetes",
    "uses": "Type 2 diabetes, cardiorenal protection in heart failure and chronic kidney disease",
    "sideEffects": "Increased urination, urinary tract fungal infections (mycotic infections), mild dehydration",
    "description": "SGLT2 inhibitor that promotes renal excretion of excess blood sugar in urine, lowering cardiac preload and blood pressure.",
    "alternatives": [
      {
        "name": "Generic Dapagliflozin 10mg",
        "mfr": "Jan Aushadhi / BPPI",
        "price": 95,
        "isGeneric": true,
        "dosage": "10mg"
      },
      {
        "name": "Dapanorm 10",
        "mfr": "Alkem Laboratories",
        "price": 240,
        "isGeneric": false,
        "dosage": "10mg"
      },
      {
        "name": "Daflo 10",
        "mfr": "Mankind Pharma",
        "price": 215,
        "isGeneric": false,
        "dosage": "10mg"
      },
      {
        "name": "Oxra 10",
        "mfr": "Sun Pharma",
        "price": 310,
        "isGeneric": false,
        "dosage": "10mg"
      }
    ]
  },
  {
    "id": "med-galvus50",
    "brand": "Galvus 50",
    "generic": "Vildagliptin",
    "strength": "50mg",
    "form": "Tablet",
    "manufacturer": "Novartis India",
    "price": 340,
    "unit": "Strip of 14 tablets",
    "category": "Diabetes",
    "uses": "Type 2 diabetes mellitus, elderly glycemic management",
    "sideEffects": "Mild dizziness, peripheral edema, headache",
    "description": "Incretin enhancer (DPP-4 inhibitor) that boosts pancreatic glucose-dependent insulin secretion.",
    "alternatives": [
      {
        "name": "Generic Vildagliptin 50mg",
        "mfr": "Jan Aushadhi / BPPI",
        "price": 62,
        "isGeneric": true,
        "dosage": "50mg"
      },
      {
        "name": "Jalra 50",
        "mfr": "USV Ltd",
        "price": 165,
        "isGeneric": false,
        "dosage": "50mg"
      },
      {
        "name": "Vilano 50",
        "mfr": "Sun Pharma",
        "price": 175,
        "isGeneric": false,
        "dosage": "50mg"
      }
    ]
  },
  {
    "id": "med-tenglyn20",
    "brand": "Tenglyn 20",
    "generic": "Teneligliptin",
    "strength": "20mg",
    "form": "Tablet",
    "manufacturer": "Zydus Cadila",
    "price": 135,
    "unit": "Strip of 15 tablets",
    "category": "Diabetes",
    "uses": "Type 2 diabetes, post-meal spike control, safe in mild renal impairment",
    "sideEffects": "Constipation, abdominal distension, hypoglycemia when paired with sulfonylureas",
    "description": "Cost-effective DPP-4 inhibitor providing 24-hour glycemic suppression with dual biliary and renal excretion.",
    "alternatives": [
      {
        "name": "Generic Teneligliptin 20mg",
        "mfr": "Jan Aushadhi / BPPI",
        "price": 22,
        "isGeneric": true,
        "dosage": "20mg"
      },
      {
        "name": "Zita Plus 20",
        "mfr": "Glenmark Pharmaceuticals",
        "price": 110,
        "isGeneric": false,
        "dosage": "20mg"
      },
      {
        "name": "Tenlimac 20",
        "mfr": "Macloeds Pharmaceuticals",
        "price": 89,
        "isGeneric": false,
        "dosage": "20mg"
      }
    ]
  },
  {
    "id": "med-telma40",
    "brand": "Telma 40",
    "generic": "Telmisartan",
    "strength": "40mg",
    "form": "Tablet",
    "manufacturer": "Glenmark Pharmaceuticals",
    "price": 132,
    "unit": "Strip of 15 tablets",
    "category": "Blood Pressure",
    "uses": "Essential hypertension, cardiovascular event prevention, stroke risk reduction, diabetic nephropathy protection",
    "sideEffects": "Dizziness upon standing (orthostasis), back pain, sinus congestion, elevated serum potassium",
    "description": "Long-acting Angiotensin II Receptor Blocker (ARB) with 24-hour half-life providing smooth round-the-clock BP control.",
    "alternatives": [
      {
        "name": "Generic Telmisartan 40mg",
        "mfr": "Jan Aushadhi / BPPI",
        "price": 14,
        "isGeneric": true,
        "dosage": "40mg"
      },
      {
        "name": "Telmikind 40",
        "mfr": "Mankind Pharma",
        "price": 58,
        "isGeneric": false,
        "dosage": "40mg"
      },
      {
        "name": "Telpres 40",
        "mfr": "Abbott Healthcare",
        "price": 115,
        "isGeneric": false,
        "dosage": "40mg"
      },
      {
        "name": "Cresar 40",
        "mfr": "Cipla Ltd",
        "price": 92,
        "isGeneric": false,
        "dosage": "40mg"
      },
      {
        "name": "Telsartan 40",
        "mfr": "Dr. Reddy's",
        "price": 105,
        "isGeneric": false,
        "dosage": "40mg"
      }
    ]
  },
  {
    "id": "med-telmah",
    "brand": "Telma-H",
    "generic": "Telmisartan + Hydrochlorothiazide",
    "strength": "40mg + 12.5mg",
    "form": "Tablet",
    "manufacturer": "Glenmark Pharmaceuticals",
    "price": 175,
    "unit": "Strip of 15 tablets",
    "category": "Blood Pressure",
    "uses": "Resistant high blood pressure where single drug is insufficient to reach target <130/80",
    "sideEffects": "Frequent urination, mild electrolyte imbalance (low potassium), dizziness",
    "description": "Combination ARB plus thiazide diuretic removing sodium and fluid volume to unload pressurized arteries.",
    "alternatives": [
      {
        "name": "Generic Telmisartan + HCTZ",
        "mfr": "Jan Aushadhi / BPPI",
        "price": 19.5,
        "isGeneric": true,
        "dosage": "40+12.5mg"
      },
      {
        "name": "Telmikind-H",
        "mfr": "Mankind Pharma",
        "price": 78,
        "isGeneric": false,
        "dosage": "40+12.5mg"
      },
      {
        "name": "Telsar-H",
        "mfr": "Unichem Laboratories",
        "price": 120,
        "isGeneric": false,
        "dosage": "40+12.5mg"
      }
    ]
  },
  {
    "id": "med-amlong5",
    "brand": "Amlong 5",
    "generic": "Amlodipine",
    "strength": "5mg",
    "form": "Tablet",
    "manufacturer": "Micro Labs Ltd",
    "price": 52,
    "unit": "Strip of 15 tablets",
    "category": "Blood Pressure",
    "uses": "High blood pressure, chronic stable angina, vasospastic Prinzmetal angina",
    "sideEffects": "Ankle swelling (pedal edema), facial flushing, headache, fatigue",
    "description": "Dihydropyridine calcium channel blocker that relaxes arterial smooth muscles and widens peripheral vascular caliber.",
    "alternatives": [
      {
        "name": "Generic Amlodipine 5mg",
        "mfr": "Jan Aushadhi / BPPI",
        "price": 7.5,
        "isGeneric": true,
        "dosage": "5mg"
      },
      {
        "name": "Amlopin 5",
        "mfr": "USV Ltd",
        "price": 38,
        "isGeneric": false,
        "dosage": "5mg"
      },
      {
        "name": "Stamlo 5",
        "mfr": "Dr. Reddy's",
        "price": 62,
        "isGeneric": false,
        "dosage": "5mg"
      },
      {
        "name": "Norvasc 5",
        "mfr": "Pfizer",
        "price": 98,
        "isGeneric": false,
        "dosage": "5mg"
      }
    ]
  },
  {
    "id": "med-concor5",
    "brand": "Concor 5",
    "generic": "Bisoprolol",
    "strength": "5mg",
    "form": "Tablet",
    "manufacturer": "Merck Healthcare",
    "price": 148,
    "unit": "Strip of 10 tablets",
    "category": "Blood Pressure",
    "uses": "Hypertension, coronary artery disease, stable heart failure, post-heart attack rate control",
    "sideEffects": "Cold extremities, slow pulse rate (bradycardia), fatigue, sleep disturbances",
    "description": "Highly cardioselective beta-1 adrenergic blocker that reduces myocardial workload and heart rate.",
    "alternatives": [
      {
        "name": "Generic Bisoprolol 5mg",
        "mfr": "Jan Aushadhi / BPPI",
        "price": 21,
        "isGeneric": true,
        "dosage": "5mg"
      },
      {
        "name": "Bisoheart 5",
        "mfr": "Mankind Pharma",
        "price": 65,
        "isGeneric": false,
        "dosage": "5mg"
      },
      {
        "name": "Corbis 5",
        "mfr": "Unichem Laboratories",
        "price": 82,
        "isGeneric": false,
        "dosage": "5mg"
      }
    ]
  },
  {
    "id": "med-metolarxr50",
    "brand": "Metolar XR 50",
    "generic": "Metoprolol Succinate Extended Release",
    "strength": "50mg",
    "form": "Tablet",
    "manufacturer": "Cipla Ltd",
    "price": 135,
    "unit": "Strip of 15 tablets",
    "category": "Blood Pressure",
    "uses": "High BP, palpitations, tachycardia, angina pectoris, post-infarction care",
    "sideEffects": "Dizziness, reduced exercise stamina, mild breathlessness in asthmatics",
    "description": "Extended-release beta-blocker that delivers smooth 24-hour heart rate moderation and anti-anginal defense.",
    "alternatives": [
      {
        "name": "Generic Metoprolol XR 50mg",
        "mfr": "Jan Aushadhi / BPPI",
        "price": 26,
        "isGeneric": true,
        "dosage": "50mg"
      },
      {
        "name": "Betaloc 50",
        "mfr": "AstraZeneca",
        "price": 145,
        "isGeneric": false,
        "dosage": "50mg"
      },
      {
        "name": "Starpress XL 50",
        "mfr": "Lupin Ltd",
        "price": 110,
        "isGeneric": false,
        "dosage": "50mg"
      }
    ]
  },
  {
    "id": "med-cardace5",
    "brand": "Cardace 5",
    "generic": "Ramipril",
    "strength": "5mg",
    "form": "Tablet",
    "manufacturer": "Sanofi India Ltd",
    "price": 168,
    "unit": "Strip of 15 tablets",
    "category": "Blood Pressure",
    "uses": "Hypertension, post-MI heart failure survival, diabetic kidney protection",
    "sideEffects": "Persistent dry cough (ACE inhibitor cough), elevated potassium, dizziness",
    "description": "Gold-standard ACE inhibitor proven in clinical trials to prevent cardiac remodeling and renal vascular damage.",
    "alternatives": [
      {
        "name": "Generic Ramipril 5mg",
        "mfr": "Jan Aushadhi / BPPI",
        "price": 18,
        "isGeneric": true,
        "dosage": "5mg"
      },
      {
        "name": "Hopace 5",
        "mfr": "Micro Labs Ltd",
        "price": 88,
        "isGeneric": false,
        "dosage": "5mg"
      },
      {
        "name": "Ramihart 5",
        "mfr": "Mankind Pharma",
        "price": 62,
        "isGeneric": false,
        "dosage": "5mg"
      }
    ]
  },
  {
    "id": "med-dytor10",
    "brand": "Dytor 10",
    "generic": "Torsemide",
    "strength": "10mg",
    "form": "Tablet",
    "manufacturer": "Cipla Ltd",
    "price": 88,
    "unit": "Strip of 15 tablets",
    "category": "Blood Pressure",
    "uses": "Edema associated with heart failure, renal fluid overload, resistant high blood pressure",
    "sideEffects": "Frequent urination, thirst, electrolyte depletion, mild cramps",
    "description": "High-ceiling loop diuretic with superior bioavailability and longer duration of action compared to furosemide.",
    "alternatives": [
      {
        "name": "Generic Torsemide 10mg",
        "mfr": "Jan Aushadhi / BPPI",
        "price": 15,
        "isGeneric": true,
        "dosage": "10mg"
      },
      {
        "name": "Torsine 10",
        "mfr": "Sun Pharma",
        "price": 68,
        "isGeneric": false,
        "dosage": "10mg"
      },
      {
        "name": "Retor 10",
        "mfr": "Torrent Pharma",
        "price": 72,
        "isGeneric": false,
        "dosage": "10mg"
      }
    ]
  },
  {
    "id": "med-atorva10",
    "brand": "Atorva 10",
    "generic": "Atorvastatin",
    "strength": "10mg",
    "form": "Tablet",
    "manufacturer": "Zydus Cadila",
    "price": 94,
    "unit": "Strip of 15 tablets",
    "category": "Cholesterol",
    "uses": "High LDL bad cholesterol, hyperlipidemia, prevention of atherosclerotic heart attacks and strokes",
    "sideEffects": "Muscle soreness (myalgia), joint stiffness, mild elevated liver enzymes",
    "description": "HMG-CoA reductase inhibitor that suppresses endogenous liver cholesterol synthesis and upregulates LDL receptors.",
    "alternatives": [
      {
        "name": "Generic Atorvastatin 10mg",
        "mfr": "Jan Aushadhi / BPPI",
        "price": 12,
        "isGeneric": true,
        "dosage": "10mg"
      },
      {
        "name": "Storvas 10",
        "mfr": "Sun Pharma",
        "price": 88,
        "isGeneric": false,
        "dosage": "10mg"
      },
      {
        "name": "Atorlip 10",
        "mfr": "Cipla Ltd",
        "price": 78,
        "isGeneric": false,
        "dosage": "10mg"
      },
      {
        "name": "Lipitor 10",
        "mfr": "Pfizer",
        "price": 185,
        "isGeneric": false,
        "dosage": "10mg"
      }
    ]
  },
  {
    "id": "med-atorva20",
    "brand": "Atorva 20",
    "generic": "Atorvastatin",
    "strength": "20mg",
    "form": "Tablet",
    "manufacturer": "Zydus Cadila",
    "price": 172,
    "unit": "Strip of 15 tablets",
    "category": "Cholesterol",
    "uses": "High-risk cardiovascular disease, post-angioplasty plaque stabilization, severe hypercholesterolemia",
    "sideEffects": "Muscle cramps, headache, mild digestive upset",
    "description": "High-intensity statin therapy to lower LDL cholesterol below 70 mg/dL in cardiac patients.",
    "alternatives": [
      {
        "name": "Generic Atorvastatin 20mg",
        "mfr": "Jan Aushadhi / BPPI",
        "price": 21,
        "isGeneric": true,
        "dosage": "20mg"
      },
      {
        "name": "Storvas 20",
        "mfr": "Sun Pharma",
        "price": 162,
        "isGeneric": false,
        "dosage": "20mg"
      },
      {
        "name": "Tonact 20",
        "mfr": "Lupin Ltd",
        "price": 145,
        "isGeneric": false,
        "dosage": "20mg"
      }
    ]
  },
  {
    "id": "med-rosuvas10",
    "brand": "Rosuvas 10",
    "generic": "Rosuvastatin",
    "strength": "10mg",
    "form": "Tablet",
    "manufacturer": "Sun Pharmaceuticals",
    "price": 210,
    "unit": "Strip of 15 tablets",
    "category": "Cholesterol",
    "uses": "Severe dyslipidemia, familial hypercholesterolemia, aggressive plaque regression",
    "sideEffects": "Muscle fatigue, abdominal pain, mild proteinuria",
    "description": "Potent hydrophilic statin that provides superior LDL reduction and HDL elevation at lower milligram dosages.",
    "alternatives": [
      {
        "name": "Generic Rosuvastatin 10mg",
        "mfr": "Jan Aushadhi / BPPI",
        "price": 28,
        "isGeneric": true,
        "dosage": "10mg"
      },
      {
        "name": "Rozavel 10",
        "mfr": "Sun Pharma",
        "price": 185,
        "isGeneric": false,
        "dosage": "10mg"
      },
      {
        "name": "Rosulip 10",
        "mfr": "Cipla Ltd",
        "price": 160,
        "isGeneric": false,
        "dosage": "10mg"
      },
      {
        "name": "Crestor 10",
        "mfr": "AstraZeneca",
        "price": 340,
        "isGeneric": false,
        "dosage": "10mg"
      }
    ]
  },
  {
    "id": "med-ecosprin75",
    "brand": "Ecosprin 75",
    "generic": "Aspirin (Acetylsalicylic Acid)",
    "strength": "75mg",
    "form": "Tablet",
    "manufacturer": "USV Ltd",
    "price": 5.8,
    "unit": "Strip of 14 tablets",
    "category": "Blood Thinner",
    "uses": "Heart attack prevention, post-stent antiplatelet therapy, ischemic stroke prophylaxis",
    "sideEffects": "Gastric acid irritation, risk of bruising, prolonged bleeding time",
    "description": "Enteric-coated low-dose aspirin that irreversibly inhibits platelet COX-1 enzyme, preventing blood clot formation.",
    "alternatives": [
      {
        "name": "Generic Aspirin 75mg",
        "mfr": "Jan Aushadhi / BPPI",
        "price": 3.2,
        "isGeneric": true,
        "dosage": "75mg"
      },
      {
        "name": "Loprin 75",
        "mfr": "Unichem Laboratories",
        "price": 5.5,
        "isGeneric": false,
        "dosage": "75mg"
      },
      {
        "name": "Delisprin 75",
        "mfr": "Aristo Pharmaceuticals",
        "price": 5.2,
        "isGeneric": false,
        "dosage": "75mg"
      }
    ]
  },
  {
    "id": "med-clopitab75",
    "brand": "Clopitab 75",
    "generic": "Clopidogrel",
    "strength": "75mg",
    "form": "Tablet",
    "manufacturer": "Lupin Ltd",
    "price": 118,
    "unit": "Strip of 15 tablets",
    "category": "Blood Thinner",
    "uses": "Dual Antiplatelet Therapy (DAPT) post-angioplasty, peripheral arterial disease, prevention of stent thrombosis",
    "sideEffects": "Bruising, nosebleeds, minor skin purpura, abdominal discomfort",
    "description": "P2Y12 adenosine diphosphate (ADP) receptor antagonist that prevents platelet activation and arterial occlusion.",
    "alternatives": [
      {
        "name": "Generic Clopidogrel 75mg",
        "mfr": "Jan Aushadhi / BPPI",
        "price": 18,
        "isGeneric": true,
        "dosage": "75mg"
      },
      {
        "name": "Deplatt 75",
        "mfr": "Torrent Pharma",
        "price": 88,
        "isGeneric": false,
        "dosage": "75mg"
      },
      {
        "name": "Plavix 75",
        "mfr": "Sanofi India",
        "price": 195,
        "isGeneric": false,
        "dosage": "75mg"
      },
      {
        "name": "Clopilet 75",
        "mfr": "Sun Pharma",
        "price": 98,
        "isGeneric": false,
        "dosage": "75mg"
      }
    ]
  },
  {
    "id": "med-brilinta90",
    "brand": "Brilinta 90",
    "generic": "Ticagrelor",
    "strength": "90mg",
    "form": "Tablet",
    "manufacturer": "AstraZeneca",
    "price": 680,
    "unit": "Strip of 14 tablets",
    "category": "Blood Thinner",
    "uses": "Acute coronary syndrome, post-stent thrombosis prevention in heart attack patients",
    "sideEffects": "Shortness of breath (dyspnea), bleeding tendencies, gout risk",
    "description": "Direct-acting, reversible P2Y12 receptor antagonist offering faster and more potent platelet inhibition than clopidogrel.",
    "alternatives": [
      {
        "name": "Generic Ticagrelor 90mg",
        "mfr": "Jan Aushadhi / BPPI",
        "price": 140,
        "isGeneric": true,
        "dosage": "90mg"
      },
      {
        "name": "Axcer 90",
        "mfr": "Sun Pharma",
        "price": 340,
        "isGeneric": false,
        "dosage": "90mg"
      },
      {
        "name": "Ticaspan 90",
        "mfr": "Torrent Pharma",
        "price": 310,
        "isGeneric": false,
        "dosage": "90mg"
      }
    ]
  },
  {
    "id": "med-pan40",
    "brand": "Pan 40",
    "generic": "Pantoprazole",
    "strength": "40mg",
    "form": "Tablet",
    "manufacturer": "Alkem Laboratories",
    "price": 155,
    "unit": "Strip of 15 tablets",
    "category": "Gastric",
    "uses": "Gastroesophageal reflux disease (GERD), gastric & duodenal ulcers, acidity, prevention of NSAID stomach damage",
    "sideEffects": "Headache, diarrhea, mild flatulence, vitamin B12 malabsorption on multi-year use",
    "description": "Proton Pump Inhibitor (PPI) that suppresses gastric parietal cell H+/K+ ATPase, stopping excessive acid output.",
    "alternatives": [
      {
        "name": "Generic Pantoprazole 40mg",
        "mfr": "Jan Aushadhi / BPPI",
        "price": 22,
        "isGeneric": true,
        "dosage": "40mg"
      },
      {
        "name": "Pantocid 40",
        "mfr": "Sun Pharma",
        "price": 142,
        "isGeneric": false,
        "dosage": "40mg"
      },
      {
        "name": "Pantodac 40",
        "mfr": "Zydus Cadila",
        "price": 125,
        "isGeneric": false,
        "dosage": "40mg"
      },
      {
        "name": "Protium 40",
        "mfr": "Cipla Ltd",
        "price": 110,
        "isGeneric": false,
        "dosage": "40mg"
      }
    ]
  },
  {
    "id": "med-pand",
    "brand": "Pan-D",
    "generic": "Pantoprazole + Domperidone SR",
    "strength": "40mg + 30mg",
    "form": "Capsule",
    "manufacturer": "Alkem Laboratories",
    "price": 198,
    "unit": "Strip of 15 capsules",
    "category": "Gastric",
    "uses": "Severe acid reflux with heartburn, morning nausea, postprandial fullness, vomiting",
    "sideEffects": "Dry mouth, mild stomach cramps, dizziness",
    "description": "Dual-action PPI combined with prokinetic Domperidone to speed up stomach emptying and stop acid regurgitation.",
    "alternatives": [
      {
        "name": "Generic Pantoprazole + Domperidone",
        "mfr": "Jan Aushadhi / BPPI",
        "price": 34,
        "isGeneric": true,
        "dosage": "40+30mg"
      },
      {
        "name": "Pantocid-DSR",
        "mfr": "Sun Pharma",
        "price": 182,
        "isGeneric": false,
        "dosage": "40+30mg"
      },
      {
        "name": "Dompan-SR",
        "mfr": "Cipla Ltd",
        "price": 165,
        "isGeneric": false,
        "dosage": "40+30mg"
      },
      {
        "name": "Nupenta-D",
        "mfr": "Macloeds Pharmaceuticals",
        "price": 154,
        "isGeneric": false,
        "dosage": "40+30mg"
      }
    ]
  },
  {
    "id": "med-omez20",
    "brand": "Omez 20",
    "generic": "Omeprazole",
    "strength": "20mg",
    "form": "Capsule",
    "manufacturer": "Dr. Reddy's Laboratories",
    "price": 58,
    "unit": "Strip of 20 capsules",
    "category": "Gastric",
    "uses": "Sour burps, hyperacidity, peptic ulcer disease, Zollinger-Ellison syndrome",
    "sideEffects": "Abdominal pain, dizziness, benign fundic polyps on prolonged use",
    "description": "First-in-class proton pump inhibitor providing reliable long-standing gastric acid control.",
    "alternatives": [
      {
        "name": "Generic Omeprazole 20mg",
        "mfr": "Jan Aushadhi / BPPI",
        "price": 10.5,
        "isGeneric": true,
        "dosage": "20mg"
      },
      {
        "name": "Ocid 20",
        "mfr": "Zydus Cadila",
        "price": 46,
        "isGeneric": false,
        "dosage": "20mg"
      },
      {
        "name": "Omecip 20",
        "mfr": "Cipla Ltd",
        "price": 38,
        "isGeneric": false,
        "dosage": "20mg"
      }
    ]
  },
  {
    "id": "med-razo20",
    "brand": "Razo 20",
    "generic": "Rabeprazole",
    "strength": "20mg",
    "form": "Tablet",
    "manufacturer": "Dr. Reddy's Laboratories",
    "price": 180,
    "unit": "Strip of 15 tablets",
    "category": "Gastric",
    "uses": "Erosive esophagitis, burning indigestion, H. pylori eradication combination",
    "sideEffects": "Headache, insomnia, pharyngitis, diarrhea",
    "description": "Rapid-acting substituted benzimidazole PPI providing the fastest onset of acid suppression within 1 hour.",
    "alternatives": [
      {
        "name": "Generic Rabeprazole 20mg",
        "mfr": "Jan Aushadhi / BPPI",
        "price": 26,
        "isGeneric": true,
        "dosage": "20mg"
      },
      {
        "name": "Happi 20",
        "mfr": "Zydus Cadila",
        "price": 135,
        "isGeneric": false,
        "dosage": "20mg"
      },
      {
        "name": "Rabium 20",
        "mfr": "Intas Pharmaceuticals",
        "price": 140,
        "isGeneric": false,
        "dosage": "20mg"
      }
    ]
  },
  {
    "id": "med-aciloc150",
    "brand": "Aciloc 150",
    "generic": "Ranitidine",
    "strength": "150mg",
    "form": "Tablet",
    "manufacturer": "Cadila Pharmaceuticals",
    "price": 42,
    "unit": "Strip of 30 tablets",
    "category": "Gastric",
    "uses": "Mild acidity, heartburn after meals, nocturnal acid breakthrough",
    "sideEffects": "Constipation, tiredness, mild headache",
    "description": "Histamine H2-receptor antagonist that reduces nocturnal and basal gastric acid volume.",
    "alternatives": [
      {
        "name": "Generic Ranitidine 150mg",
        "mfr": "Jan Aushadhi / BPPI",
        "price": 8,
        "isGeneric": true,
        "dosage": "150mg"
      },
      {
        "name": "Rantac 150",
        "mfr": "J.B. Chemicals",
        "price": 38,
        "isGeneric": false,
        "dosage": "150mg"
      },
      {
        "name": "Histac 150",
        "mfr": "Ranbaxy / Sun Pharma",
        "price": 36,
        "isGeneric": false,
        "dosage": "150mg"
      }
    ]
  },
  {
    "id": "med-ondem4",
    "brand": "Ondem 4",
    "generic": "Ondansetron",
    "strength": "4mg",
    "form": "Tablet",
    "manufacturer": "Alkem Laboratories",
    "price": 52,
    "unit": "Strip of 10 tablets",
    "category": "Gastric",
    "uses": "Acute vomiting, food poisoning nausea, post-operative nausea, chemotherapy-induced emesis",
    "sideEffects": "Constipation, transient headache, sensation of warmth",
    "description": "Selective 5-HT3 receptor antagonist that shuts down the chemoreceptor trigger zone emetic response.",
    "alternatives": [
      {
        "name": "Generic Ondansetron 4mg",
        "mfr": "Jan Aushadhi / BPPI",
        "price": 8.5,
        "isGeneric": true,
        "dosage": "4mg"
      },
      {
        "name": "Vomikind 4",
        "mfr": "Mankind Pharma",
        "price": 38,
        "isGeneric": false,
        "dosage": "4mg"
      },
      {
        "name": "Emigo 4",
        "mfr": "Zuventus Healthcare",
        "price": 44,
        "isGeneric": false,
        "dosage": "4mg"
      }
    ]
  },
  {
    "id": "med-cetzine10",
    "brand": "Cetzine 10",
    "generic": "Cetirizine",
    "strength": "10mg",
    "form": "Tablet",
    "manufacturer": "Dr. Reddy's Laboratories",
    "price": 24,
    "unit": "Strip of 10 tablets",
    "category": "Allergy",
    "uses": "Allergic rhinitis, allergic conjunctivitis, itching, skin rash, urticaria/hives",
    "sideEffects": "Mild drowsiness, dry mouth, tiredness",
    "description": "Widely used 2nd-generation antihistamine offering reliable 24-hour relief from seasonal and environmental allergies.",
    "alternatives": [
      {
        "name": "Generic Cetirizine 10mg",
        "mfr": "Jan Aushadhi / BPPI",
        "price": 5.5,
        "isGeneric": true,
        "dosage": "10mg"
      },
      {
        "name": "Alerid 10",
        "mfr": "Cipla Ltd",
        "price": 21,
        "isGeneric": false,
        "dosage": "10mg"
      },
      {
        "name": "Zyrtec 10",
        "mfr": "J&J Consumer",
        "price": 75,
        "isGeneric": false,
        "dosage": "10mg"
      }
    ]
  },
  {
    "id": "med-allegra120",
    "brand": "Allegra 120",
    "generic": "Fexofenadine",
    "strength": "120mg",
    "form": "Tablet",
    "manufacturer": "Sanofi India Ltd",
    "price": 215,
    "unit": "Strip of 10 tablets",
    "category": "Allergy",
    "uses": "Severe allergic rhinitis, sneezing, nasal congestion, seasonal hay fever (100% NON-DROWSY)",
    "sideEffects": "Headache, mild throat dryness, nausea (rare)",
    "description": "Advanced non-sedating antihistamine that does not cross the blood-brain barrier, ensuring zero sleepiness during work or driving.",
    "alternatives": [
      {
        "name": "Generic Fexofenadine 120mg",
        "mfr": "Jan Aushadhi / BPPI",
        "price": 38,
        "isGeneric": true,
        "dosage": "120mg"
      },
      {
        "name": "Fexova 120",
        "mfr": "Ipca Laboratories",
        "price": 145,
        "isGeneric": false,
        "dosage": "120mg"
      },
      {
        "name": "Telfast 120",
        "mfr": "Sanofi Aventis",
        "price": 198,
        "isGeneric": false,
        "dosage": "120mg"
      }
    ]
  },
  {
    "id": "med-montairlc",
    "brand": "Montair LC",
    "generic": "Montelukast + Levocetirizine",
    "strength": "10mg + 5mg",
    "form": "Tablet",
    "manufacturer": "Cipla Ltd",
    "price": 210,
    "unit": "Strip of 10 tablets",
    "category": "Allergy",
    "uses": "Allergic asthma, persistent nighttime cough, allergic rhinitis, bronchospasm prophylaxis",
    "sideEffects": "Drowsiness, dream abnormalities, headache, dry mouth",
    "description": "Leukotriene receptor antagonist combined with pure active R-enantiomer Levocetirizine for complete respiratory allergy block.",
    "alternatives": [
      {
        "name": "Generic Montelukast + Levocetirizine",
        "mfr": "Jan Aushadhi / BPPI",
        "price": 34,
        "isGeneric": true,
        "dosage": "10+5mg"
      },
      {
        "name": "Telekast-L",
        "mfr": "Lupin Ltd",
        "price": 165,
        "isGeneric": false,
        "dosage": "10+5mg"
      },
      {
        "name": "Monticope",
        "mfr": "Mankind Pharma",
        "price": 125,
        "isGeneric": false,
        "dosage": "10+5mg"
      },
      {
        "name": "Montek-LC",
        "mfr": "Sun Pharma",
        "price": 185,
        "isGeneric": false,
        "dosage": "10+5mg"
      }
    ]
  },
  {
    "id": "med-asthalin4",
    "brand": "Asthalin 4",
    "generic": "Salbutamol (Albuterol)",
    "strength": "4mg",
    "form": "Tablet",
    "manufacturer": "Cipla Ltd",
    "price": 8.5,
    "unit": "Strip of 30 tablets",
    "category": "Allergy",
    "uses": "Bronchial asthma, COPD wheezing, exercise-induced bronchospasm acute relief",
    "sideEffects": "Tremor in hands, fast heart rate (tachycardia), nervousness",
    "description": "Short-acting beta-2 agonist (SABA) that rapidly relaxes bronchial smooth muscles to open narrowed airways.",
    "alternatives": [
      {
        "name": "Generic Salbutamol 4mg",
        "mfr": "Jan Aushadhi / BPPI",
        "price": 3.5,
        "isGeneric": true,
        "dosage": "4mg"
      },
      {
        "name": "Ventorlin 4",
        "mfr": "GSK",
        "price": 7.8,
        "isGeneric": false,
        "dosage": "4mg"
      }
    ]
  },
  {
    "id": "med-thyronorm50",
    "brand": "Thyronorm 50",
    "generic": "Levothyroxine Sodium",
    "strength": "50mcg",
    "form": "Tablet",
    "manufacturer": "Abbott India Ltd",
    "price": 135,
    "unit": "Bottle of 120 tablets",
    "category": "Thyroid",
    "uses": "Hypothyroidism (underactive thyroid gland), TSH normalization, goiter management",
    "sideEffects": "Palpitations, insomnia, weight loss, heat intolerance (if over-replaced)",
    "description": "Synthetic levorotatory isomer of thyroxine (T4) that restores physiological metabolic thyroid hormone balance.",
    "alternatives": [
      {
        "name": "Generic Levothyroxine 50mcg",
        "mfr": "Jan Aushadhi / BPPI",
        "price": 38,
        "isGeneric": true,
        "dosage": "50mcg"
      },
      {
        "name": "Eltroxin 50",
        "mfr": "GSK",
        "price": 142,
        "isGeneric": false,
        "dosage": "50mcg"
      },
      {
        "name": "Thyrox 50",
        "mfr": "Macloeds Pharmaceuticals",
        "price": 110,
        "isGeneric": false,
        "dosage": "50mcg"
      }
    ]
  },
  {
    "id": "med-thyronorm100",
    "brand": "Thyronorm 100",
    "generic": "Levothyroxine Sodium",
    "strength": "100mcg",
    "form": "Tablet",
    "manufacturer": "Abbott India Ltd",
    "price": 185,
    "unit": "Bottle of 120 tablets",
    "category": "Thyroid",
    "uses": "Moderate-to-severe hypothyroidism, post-thyroidectomy hormone replacement",
    "sideEffects": "Restlessness, sweatiness, tachycardia on excessive dose",
    "description": "Standard full-replacement strength thyroid tablet strictly taken on empty stomach 45 mins before breakfast.",
    "alternatives": [
      {
        "name": "Generic Levothyroxine 100mcg",
        "mfr": "Jan Aushadhi / BPPI",
        "price": 46,
        "isGeneric": true,
        "dosage": "100mcg"
      },
      {
        "name": "Eltroxin 100",
        "mfr": "GSK",
        "price": 195,
        "isGeneric": false,
        "dosage": "100mcg"
      }
    ]
  },
  {
    "id": "med-shelcal500",
    "brand": "Shelcal 500",
    "generic": "Calcium + Vitamin D3",
    "strength": "500mg + 250IU",
    "form": "Tablet",
    "manufacturer": "Torrent Pharmaceuticals",
    "price": 138,
    "unit": "Strip of 15 tablets",
    "category": "Supplement",
    "uses": "Osteopenia, osteoporosis, post-fracture bone healing, pregnancy & lactation calcium support",
    "sideEffects": "Constipation, flatulence, bloating, kidney stones in chronic mega-dosing",
    "description": "Elemental calcium carbonate paired with cholecalciferol to maximize intestinal calcium absorption.",
    "alternatives": [
      {
        "name": "Generic Calcium 500mg + Vitamin D3 Tablets",
        "mfr": "Jan Aushadhi / BPPI",
        "price": 24,
        "isGeneric": true,
        "dosage": "500mg+250IU"
      },
      {
        "name": "Cipcal 500",
        "mfr": "Cipla Ltd",
        "price": 112,
        "isGeneric": false,
        "dosage": "500mg+250IU"
      },
      {
        "name": "Gemcal",
        "mfr": "Alkem Laboratories",
        "price": 145,
        "isGeneric": false,
        "dosage": "500mg+250IU"
      },
      {
        "name": "Calshine 500",
        "mfr": "Akumentis Healthcare",
        "price": 120,
        "isGeneric": false,
        "dosage": "500mg+250IU"
      }
    ]
  },
  {
    "id": "med-calcirol60k",
    "brand": "Calcirol 60K",
    "generic": "Cholecalciferol (Vitamin D3)",
    "strength": "60000 IU",
    "form": "Sachet / Capsule",
    "manufacturer": "Cadila Pharmaceuticals",
    "price": 195,
    "unit": "Pack of 4 capsules (1 month pack)",
    "category": "Supplement",
    "uses": "Severe Vitamin D deficiency (<20 ng/mL), chronic fatigue, bone aches, immune strengthening",
    "sideEffects": "Hypercalcemia if taken daily by mistake (MUST be taken ONCE A WEEK)",
    "description": "High-potency therapeutic Vitamin D3 dose prescribed once weekly with warm milk to replenish depleted skeletal stores.",
    "alternatives": [
      {
        "name": "Generic Cholecalciferol 60,000 IU",
        "mfr": "Jan Aushadhi / BPPI",
        "price": 38,
        "isGeneric": true,
        "dosage": "60,000 IU"
      },
      {
        "name": "D3 Must 60K",
        "mfr": "Mankind Pharma",
        "price": 140,
        "isGeneric": false,
        "dosage": "60,000 IU"
      },
      {
        "name": "Lumia 60K",
        "mfr": "Sun Pharma",
        "price": 165,
        "isGeneric": false,
        "dosage": "60,000 IU"
      }
    ]
  },
  {
    "id": "med-becosules",
    "brand": "Becosules",
    "generic": "B-Complex + Vitamin C",
    "strength": "Multivitamin",
    "form": "Capsule",
    "manufacturer": "Pfizer Ltd",
    "price": 52,
    "unit": "Strip of 20 capsules",
    "category": "Supplement",
    "uses": "Mouth ulcers (aphthous stomatitis), hair loss, physical exhaustion, nerve vitality, tissue repair",
    "sideEffects": "Harmless bright yellow urine discoloration, mild gastric fullness",
    "description": "Classic water-soluble multivitamin complex containing Thiamine (B1), Riboflavin (B2), Niacinamide (B3), B6, B12, and Vitamin C.",
    "alternatives": [
      {
        "name": "Generic B-Complex + Vit C",
        "mfr": "Jan Aushadhi / BPPI",
        "price": 10.5,
        "isGeneric": true,
        "dosage": "Capsule"
      },
      {
        "name": "Cobadex Forte",
        "mfr": "GlaxoSmithKline",
        "price": 46,
        "isGeneric": false,
        "dosage": "Capsule"
      },
      {
        "name": "Surbex-T",
        "mfr": "Abbott Healthcare",
        "price": 58,
        "isGeneric": false,
        "dosage": "Tablet"
      }
    ]
  },
  {
    "id": "med-neurobionforte",
    "brand": "Neurobion Forte",
    "generic": "Vitamin B1 + B6 + B12 (Cyanocobalamin)",
    "strength": "Therapeutic Dose",
    "form": "Tablet",
    "manufacturer": "Procter & Gamble (P&G)",
    "price": 44,
    "unit": "Strip of 30 tablets",
    "category": "Supplement",
    "uses": "Diabetic peripheral neuropathy, tingling numbness in fingers/toes, sciatica, nerve regeneration",
    "sideEffects": "Mild nausea, skin flush (rare)",
    "description": "Neurotropic vitamin combination designed to repair myelin sheath and enhance peripheral nerve impulse transmission.",
    "alternatives": [
      {
        "name": "Generic Neurotropic B-Complex",
        "mfr": "Jan Aushadhi / BPPI",
        "price": 9.5,
        "isGeneric": true,
        "dosage": "Tablet"
      },
      {
        "name": "Nervijen",
        "mfr": "Jenburkt Pharmaceuticals",
        "price": 125,
        "isGeneric": false,
        "dosage": "Tablet"
      },
      {
        "name": "Rejunex",
        "mfr": "Intas Pharmaceuticals",
        "price": 110,
        "isGeneric": false,
        "dosage": "Tablet"
      }
    ]
  },
  {
    "id": "med-nexito10",
    "brand": "Nexito 10",
    "generic": "Escitalopram",
    "strength": "10mg",
    "form": "Tablet",
    "manufacturer": "Sun Pharmaceuticals",
    "price": 115,
    "unit": "Strip of 10 tablets",
    "category": "Mental Health",
    "uses": "Major depressive disorder, generalized anxiety disorder (GAD), panic attacks, social phobia",
    "sideEffects": "Nausea, sleepiness or insomnia during first 2 weeks, delayed ejaculation, dry mouth",
    "description": "Highly selective serotonin reuptake inhibitor (SSRI) that restores emotional resilience and serotonin balance.",
    "alternatives": [
      {
        "name": "Generic Escitalopram 10mg",
        "mfr": "Jan Aushadhi / BPPI",
        "price": 18,
        "isGeneric": true,
        "dosage": "10mg"
      },
      {
        "name": "Cilentra 10",
        "mfr": "Torrent Pharma",
        "price": 89,
        "isGeneric": false,
        "dosage": "10mg"
      },
      {
        "name": "Stalopram 10",
        "mfr": "Lupin Ltd",
        "price": 92,
        "isGeneric": false,
        "dosage": "10mg"
      }
    ]
  },
  {
    "id": "med-pregalinm",
    "brand": "Pregalin-M 75",
    "generic": "Pregabalin + Methylcobalamin",
    "strength": "75mg + 750mcg",
    "form": "Capsule",
    "manufacturer": "Torrent Pharmaceuticals",
    "price": 240,
    "unit": "Strip of 15 capsules",
    "category": "Mental Health",
    "uses": "Diabetic neuropathic burning pain, fibromyalgia, post-herpetic neuralgia (shingles pain)",
    "sideEffects": "Drowsiness, ataxia, peripheral edema, dry mouth, increased appetite",
    "description": "GABA-analog neuromodulator that stabilizes hyper-excited damaged pain fibers in peripheral nerves.",
    "alternatives": [
      {
        "name": "Generic Pregabalin + Methylcobalamin",
        "mfr": "Jan Aushadhi / BPPI",
        "price": 42,
        "isGeneric": true,
        "dosage": "75mg+750mcg"
      },
      {
        "name": "Gabamax",
        "mfr": "Aristo Pharmaceuticals",
        "price": 165,
        "isGeneric": false,
        "dosage": "75mg+750mcg"
      },
      {
        "name": "Pregeb-M",
        "mfr": "Torrent Pharma",
        "price": 195,
        "isGeneric": false,
        "dosage": "75mg+750mcg"
      }
    ]
  },
  {
    "id": "med-alprax025",
    "brand": "Alprax 0.25",
    "generic": "Alprazolam",
    "strength": "0.25mg",
    "form": "Tablet",
    "manufacturer": "Torrent Pharmaceuticals",
    "price": 32,
    "unit": "Strip of 15 tablets",
    "category": "Mental Health",
    "uses": "Acute panic attacks, severe acute anxiety episodes (Schedule H1 prescription controlled)",
    "sideEffects": "Sedation, lightheadedness, impaired coordination, habit-forming risk",
    "description": "Short-acting triazolobenzodiazepine that rapidly enhances inhibitory neurotransmitter GABA action in CNS.",
    "alternatives": [
      {
        "name": "Generic Alprazolam 0.25mg",
        "mfr": "Jan Aushadhi / BPPI",
        "price": 6,
        "isGeneric": true,
        "dosage": "0.25mg"
      },
      {
        "name": "Restyl 0.25",
        "mfr": "Cipla Ltd",
        "price": 29,
        "isGeneric": false,
        "dosage": "0.25mg"
      },
      {
        "name": "Zolax 0.25",
        "mfr": "Intas Pharmaceuticals",
        "price": 27.5,
        "isGeneric": false,
        "dosage": "0.25mg"
      }
    ]
  },
  {
    "id": "med-udiliv300",
    "brand": "Udiliv 300",
    "generic": "Ursodeoxycholic Acid",
    "strength": "300mg",
    "form": "Tablet",
    "manufacturer": "Abbott Healthcare",
    "price": 520,
    "unit": "Strip of 15 tablets",
    "category": "Kidney & Liver",
    "uses": "Non-alcoholic fatty liver disease (NAFLD), dissolution of small gallstones, primary biliary cirrhosis",
    "sideEffects": "Loose stools, nausea, mild pruritus",
    "description": "Naturally occurring hydrophilic bile acid that protects cholangiocytes and displaces toxic hydrophobic bile salts.",
    "alternatives": [
      {
        "name": "Generic Ursodeoxycholic Acid 300mg",
        "mfr": "Jan Aushadhi / BPPI",
        "price": 110,
        "isGeneric": true,
        "dosage": "300mg"
      },
      {
        "name": "Ursocol 300",
        "mfr": "Sun Pharma",
        "price": 440,
        "isGeneric": false,
        "dosage": "300mg"
      },
      {
        "name": "Urdohind 300",
        "mfr": "Mankind Pharma",
        "price": 360,
        "isGeneric": false,
        "dosage": "300mg"
      }
    ]
  },
  {
    "id": "med-feburic40",
    "brand": "Feburic 40",
    "generic": "Febuxostat",
    "strength": "40mg",
    "form": "Tablet",
    "manufacturer": "Sun Pharmaceuticals",
    "price": 185,
    "unit": "Strip of 15 tablets",
    "category": "Kidney & Liver",
    "uses": "Hyperuricemia, chronic gout, uric acid kidney stone prevention",
    "sideEffects": "Transient gout flare-up at start, liver function changes, skin rash",
    "description": "Non-purine selective xanthine oxidase inhibitor that lowers serum uric acid levels below 6 mg/dL.",
    "alternatives": [
      {
        "name": "Generic Febuxostat 40mg",
        "mfr": "Jan Aushadhi / BPPI",
        "price": 28,
        "isGeneric": true,
        "dosage": "40mg"
      },
      {
        "name": "Febutaz 40",
        "mfr": "Sun Pharma",
        "price": 145,
        "isGeneric": false,
        "dosage": "40mg"
      },
      {
        "name": "Foxstat 40",
        "mfr": "Torrent Pharma",
        "price": 138,
        "isGeneric": false,
        "dosage": "40mg"
      }
    ]
  },
  {
    "id": "med-meftal500",
    "brand": "Meftal 500",
    "generic": "Mefenamic Acid",
    "strength": "500mg",
    "form": "Tablet",
    "manufacturer": "Blue Cross Laboratories",
    "price": 48,
    "unit": "Strip of 10 tablets",
    "category": "Pain & Fever",
    "uses": "Moderate pain, post-surgical pain, dental pain, fever, menstrual cramps",
    "sideEffects": "Stomach upset, heartburn, dizziness, nausea",
    "description": "NSAID that reduces hormones that cause inflammation and pain in the body.",
    "alternatives": [
      {
        "name": "Generic Mefenamic Acid 500mg",
        "mfr": "Jan Aushadhi / BPPI",
        "price": 12,
        "isGeneric": true,
        "dosage": "500mg"
      },
      {
        "name": "Ponstan 500",
        "mfr": "Pfizer India",
        "price": 42,
        "isGeneric": false,
        "dosage": "500mg"
      },
      {
        "name": "Mefkind 500",
        "mfr": "Mankind Pharma",
        "price": 38,
        "isGeneric": false,
        "dosage": "500mg"
      }
    ]
  },
  {
    "id": "med-zerodol-p",
    "brand": "Zerodol-P",
    "generic": "Aceclofenac + Paracetamol",
    "strength": "100mg + 325mg",
    "form": "Tablet",
    "manufacturer": "Ipca Laboratories",
    "price": 65,
    "unit": "Strip of 10 tablets",
    "category": "Pain & Fever",
    "uses": "Acute pain, osteoarthritis, rheumatoid arthritis, ankylosing spondylitis, back pain",
    "sideEffects": "Epigastric discomfort, indigestion, dizziness, mild nausea",
    "description": "Combination analgesic providing rapid, synergistic pain relief and anti-inflammatory action.",
    "alternatives": [
      {
        "name": "Generic Aceclofenac + Paracetamol",
        "mfr": "Jan Aushadhi / BPPI",
        "price": 16.5,
        "isGeneric": true,
        "dosage": "100mg + 325mg"
      },
      {
        "name": "Hifenac-P",
        "mfr": "Intas Pharmaceuticals",
        "price": 58,
        "isGeneric": false,
        "dosage": "100mg + 325mg"
      },
      {
        "name": "Dolokind-P",
        "mfr": "Mankind Pharma",
        "price": 45,
        "isGeneric": false,
        "dosage": "100mg + 325mg"
      },
      {
        "name": "Aceclo Plus",
        "mfr": "Aristo Pharmaceuticals",
        "price": 52,
        "isGeneric": false,
        "dosage": "100mg + 325mg"
      }
    ]
  },
  {
    "id": "med-nucoxia90",
    "brand": "Nucoxia 90",
    "generic": "Etoricoxib",
    "strength": "90mg",
    "form": "Tablet",
    "manufacturer": "Cadila Pharmaceuticals",
    "price": 215,
    "unit": "Strip of 10 tablets",
    "category": "Pain & Fever",
    "uses": "Severe joint pain, osteoarthritis, rheumatoid arthritis, acute gouty arthritis",
    "sideEffects": "Fluid retention, elevated blood pressure, headache, palpitations",
    "description": "Selective COX-2 inhibitor delivering targeted anti-inflammatory relief with reduced gastric ulcer risk.",
    "alternatives": [
      {
        "name": "Generic Etoricoxib 90mg",
        "mfr": "Jan Aushadhi / BPPI",
        "price": 38,
        "isGeneric": true,
        "dosage": "90mg"
      },
      {
        "name": "Etoshine 90",
        "mfr": "Sun Pharma",
        "price": 195,
        "isGeneric": false,
        "dosage": "90mg"
      },
      {
        "name": "Torcoxia 90",
        "mfr": "Torrent Pharmaceuticals",
        "price": 188,
        "isGeneric": false,
        "dosage": "90mg"
      },
      {
        "name": "Ezact 90",
        "mfr": "Sun Pharma",
        "price": 180,
        "isGeneric": false,
        "dosage": "90mg"
      }
    ]
  },
  {
    "id": "med-ketorol-dt",
    "brand": "Ketorol-DT",
    "generic": "Ketorolac Tromethamine",
    "strength": "10mg",
    "form": "Dispersible Tablet",
    "manufacturer": "Dr. Reddy's Laboratories",
    "price": 135,
    "unit": "Strip of 15 tablets",
    "category": "Pain & Fever",
    "uses": "Short-term management of moderate to severe acute pain (dental, surgical, trauma)",
    "sideEffects": "Gastric burning, drowsiness, headache, nausea",
    "description": "Potent non-steroidal anti-inflammatory dispersible tablet for fast sublingual/oral pain relief.",
    "alternatives": [
      {
        "name": "Generic Ketorolac 10mg DT",
        "mfr": "Jan Aushadhi / BPPI",
        "price": 24,
        "isGeneric": true,
        "dosage": "10mg"
      },
      {
        "name": "Dologel-DT",
        "mfr": "Cipla",
        "price": 95,
        "isGeneric": false,
        "dosage": "10mg"
      },
      {
        "name": "Torolac 10",
        "mfr": "Micro Labs",
        "price": 88,
        "isGeneric": false,
        "dosage": "10mg"
      }
    ]
  },
  {
    "id": "med-dolonex-dt",
    "brand": "Dolonex DT",
    "generic": "Piroxicam",
    "strength": "20mg",
    "form": "Dispersible Tablet",
    "manufacturer": "Pfizer India",
    "price": 145,
    "unit": "Strip of 15 tablets",
    "category": "Pain & Fever",
    "uses": "Osteoarthritis, rheumatoid arthritis, ankylosing spondylitis, acute musculoskeletal disorders",
    "sideEffects": "Gastrointestinal bleeding risk, dizziness, edema, skin eruption",
    "description": "Long-acting oxicam NSAID with a 50-hour half-life allowing convenient once-daily dosing.",
    "alternatives": [
      {
        "name": "Generic Piroxicam 20mg DT",
        "mfr": "Jan Aushadhi / BPPI",
        "price": 18,
        "isGeneric": true,
        "dosage": "20mg"
      },
      {
        "name": "Pirox DT 20",
        "mfr": "Cipla",
        "price": 92,
        "isGeneric": false,
        "dosage": "20mg"
      },
      {
        "name": "Doloforce 20 DT",
        "mfr": "Mankind Pharma",
        "price": 78,
        "isGeneric": false,
        "dosage": "20mg"
      }
    ]
  },
  {
    "id": "med-defcort6",
    "brand": "Defcort 6",
    "generic": "Deflazacort",
    "strength": "6mg",
    "form": "Tablet",
    "manufacturer": "Macleods Pharmaceuticals",
    "price": 110,
    "unit": "Strip of 10 tablets",
    "category": "Pain & Fever",
    "uses": "Severe allergic reactions, asthma, rheumatoid arthritis, inflammatory bowel conditions",
    "sideEffects": "Weight gain, increased appetite, facial puffiness, mild insomnia",
    "description": "Glucocorticoid steroid with fewer bone and carbohydrate metabolism side effects than prednisolone.",
    "alternatives": [
      {
        "name": "Generic Deflazacort 6mg",
        "mfr": "Jan Aushadhi / BPPI",
        "price": 26,
        "isGeneric": true,
        "dosage": "6mg"
      },
      {
        "name": "Cortimax 6",
        "mfr": "Torrent Pharmaceuticals",
        "price": 98,
        "isGeneric": false,
        "dosage": "6mg"
      },
      {
        "name": "Defza 6",
        "mfr": "Sun Pharma",
        "price": 104,
        "isGeneric": false,
        "dosage": "6mg"
      }
    ]
  },
  {
    "id": "med-omnacortil10",
    "brand": "Omnacortil 10",
    "generic": "Prednisolone",
    "strength": "10mg",
    "form": "Dispersible Tablet",
    "manufacturer": "Macleods Pharmaceuticals",
    "price": 42,
    "unit": "Strip of 10 tablets",
    "category": "Pain & Fever",
    "uses": "Severe inflammatory conditions, acute asthma exacerbation, autoimmune flares, allergy",
    "sideEffects": "Mood changes, elevated blood glucose, fluid retention, gastric irritation",
    "description": "Systemic corticosteroid that suppresses immune response and relieves severe acute inflammation.",
    "alternatives": [
      {
        "name": "Generic Prednisolone 10mg",
        "mfr": "Jan Aushadhi / BPPI",
        "price": 9.5,
        "isGeneric": true,
        "dosage": "10mg"
      },
      {
        "name": "Wysolone 10",
        "mfr": "Pfizer India",
        "price": 38,
        "isGeneric": false,
        "dosage": "10mg"
      },
      {
        "name": "Predone 10",
        "mfr": "Cipla",
        "price": 35,
        "isGeneric": false,
        "dosage": "10mg"
      }
    ]
  },
  {
    "id": "med-medrol4",
    "brand": "Medrol 4",
    "generic": "Methylprednisolone",
    "strength": "4mg",
    "form": "Tablet",
    "manufacturer": "Pfizer India",
    "price": 72,
    "unit": "Strip of 10 tablets",
    "category": "Pain & Fever",
    "uses": "Severe allergic states, dermatologic diseases, rheumatic disorders, respiratory inflammation",
    "sideEffects": "Mild fluid retention, headache, stomach upset, sleep disturbances",
    "description": "Intermediate-acting corticosteroid with low mineralocorticoid activity, preserving electrolyte balance.",
    "alternatives": [
      {
        "name": "Generic Methylprednisolone 4mg",
        "mfr": "Jan Aushadhi / BPPI",
        "price": 18,
        "isGeneric": true,
        "dosage": "4mg"
      },
      {
        "name": "Predmet 4",
        "mfr": "Sun Pharma",
        "price": 62,
        "isGeneric": false,
        "dosage": "4mg"
      },
      {
        "name": "Macpred 4",
        "mfr": "Macleods",
        "price": 58,
        "isGeneric": false,
        "dosage": "4mg"
      }
    ]
  },
  {
    "id": "med-ceftum500",
    "brand": "Ceftum 500",
    "generic": "Cefuroxime Axetil",
    "strength": "500mg",
    "form": "Tablet",
    "manufacturer": "GSK Pharmaceuticals",
    "price": 540,
    "unit": "Strip of 10 tablets",
    "category": "Antibiotics & Infections",
    "uses": "Lower and upper respiratory tract infections, sinusitis, tonsillitis, skin infections, Lyme disease",
    "sideEffects": "Diarrhea, nausea, transient headache, fungal overgrowth",
    "description": "Second-generation cephalosporin antibiotic active against both gram-positive and gram-negative pathogens.",
    "alternatives": [
      {
        "name": "Generic Cefuroxime Axetil 500mg",
        "mfr": "Jan Aushadhi / BPPI",
        "price": 110,
        "isGeneric": true,
        "dosage": "500mg"
      },
      {
        "name": "Cetil 500",
        "mfr": "Lupin Ltd",
        "price": 460,
        "isGeneric": false,
        "dosage": "500mg"
      },
      {
        "name": "Pulmocef 500",
        "mfr": "Micro Labs",
        "price": 440,
        "isGeneric": false,
        "dosage": "500mg"
      },
      {
        "name": "Zefu 500",
        "mfr": "FDC Ltd",
        "price": 420,
        "isGeneric": false,
        "dosage": "500mg"
      }
    ]
  },
  {
    "id": "med-levomac500",
    "brand": "Levomac 500",
    "generic": "Levofloxacin",
    "strength": "500mg",
    "form": "Tablet",
    "manufacturer": "Macleods Pharmaceuticals",
    "price": 95,
    "unit": "Strip of 10 tablets",
    "category": "Antibiotics & Infections",
    "uses": "Bacterial pneumonia, acute sinusitis, complicated urinary tract infections, prostatitis",
    "sideEffects": "Nausea, headache, dizziness, tendinitis/tendon pain risk",
    "description": "Broad-spectrum third-generation fluoroquinolone inhibiting bacterial DNA gyrase.",
    "alternatives": [
      {
        "name": "Generic Levofloxacin 500mg",
        "mfr": "Jan Aushadhi / BPPI",
        "price": 22,
        "isGeneric": true,
        "dosage": "500mg"
      },
      {
        "name": "Levaquin 500",
        "mfr": "Sanofi India",
        "price": 89,
        "isGeneric": false,
        "dosage": "500mg"
      },
      {
        "name": "L-Cin 500",
        "mfr": "Lupin Ltd",
        "price": 82,
        "isGeneric": false,
        "dosage": "500mg"
      },
      {
        "name": "Glevo 500",
        "mfr": "Glenmark",
        "price": 85,
        "isGeneric": false,
        "dosage": "500mg"
      }
    ]
  },
  {
    "id": "med-claribid500",
    "brand": "Claribid 500",
    "generic": "Clarithromycin",
    "strength": "500mg",
    "form": "Tablet",
    "manufacturer": "Abbott Healthcare",
    "price": 360,
    "unit": "Strip of 10 tablets",
    "category": "Antibiotics & Infections",
    "uses": "Helicobacter pylori eradication, respiratory infections, pharyngitis, skin infections",
    "sideEffects": "Metallic taste in mouth, stomach upset, nausea, headache",
    "description": "Macrolide antibiotic with excellent tissue penetration, widely used in triple therapy for peptic ulcers.",
    "alternatives": [
      {
        "name": "Generic Clarithromycin 500mg",
        "mfr": "Jan Aushadhi / BPPI",
        "price": 85,
        "isGeneric": true,
        "dosage": "500mg"
      },
      {
        "name": "Crixan 500",
        "mfr": "Cipla",
        "price": 310,
        "isGeneric": false,
        "dosage": "500mg"
      },
      {
        "name": "Synclar 500",
        "mfr": "Sun Pharma",
        "price": 295,
        "isGeneric": false,
        "dosage": "500mg"
      }
    ]
  },
  {
    "id": "med-niftran100",
    "brand": "Niftran 100",
    "generic": "Nitrofurantoin",
    "strength": "100mg",
    "form": "Capsule",
    "manufacturer": "Sun Pharmaceuticals",
    "price": 160,
    "unit": "Strip of 10 capsules",
    "category": "Antibiotics & Infections",
    "uses": "Urinary tract infections (acute cystitis), prophylaxis of recurrent UTIs",
    "sideEffects": "Dark urine discoloration (harmless), nausea, anorexia, headache",
    "description": "First-line urinary antibacterial concentrated in urine, sparing beneficial systemic flora.",
    "alternatives": [
      {
        "name": "Generic Nitrofurantoin 100mg",
        "mfr": "Jan Aushadhi / BPPI",
        "price": 32,
        "isGeneric": true,
        "dosage": "100mg"
      },
      {
        "name": "Martifur MR 100",
        "mfr": "Walter Bushnell",
        "price": 145,
        "isGeneric": false,
        "dosage": "100mg"
      },
      {
        "name": "Furadantin 100",
        "mfr": "GSK",
        "price": 138,
        "isGeneric": false,
        "dosage": "100mg"
      }
    ]
  },
  {
    "id": "med-norflox-tz",
    "brand": "Norflox-TZ",
    "generic": "Norfloxacin + Tinidazole",
    "strength": "400mg + 600mg",
    "form": "Tablet",
    "manufacturer": "Cipla",
    "price": 95,
    "unit": "Strip of 10 tablets",
    "category": "Antibiotics & Infections",
    "uses": "Amoebic dysentery, bacterial diarrhea, gastroenteritis, GI infections",
    "sideEffects": "Metallic taste, bitter taste, nausea, dry mouth",
    "description": "Dual antimicrobial targeting both bacterial enteropathogens and anaerobic protozoan parasites.",
    "alternatives": [
      {
        "name": "Generic Norfloxacin + Tinidazole",
        "mfr": "Jan Aushadhi / BPPI",
        "price": 24,
        "isGeneric": true,
        "dosage": "400mg + 600mg"
      },
      {
        "name": "Normax-TZ",
        "mfr": "Ipca Laboratories",
        "price": 82,
        "isGeneric": false,
        "dosage": "400mg + 600mg"
      },
      {
        "name": "Nor-Metrogyl",
        "mfr": "J.B. Chemicals",
        "price": 78,
        "isGeneric": false,
        "dosage": "400mg + 600mg"
      }
    ]
  },
  {
    "id": "med-linid600",
    "brand": "Linid 600",
    "generic": "Linezolid",
    "strength": "600mg",
    "form": "Tablet",
    "manufacturer": "Glenmark Pharmaceuticals",
    "price": 450,
    "unit": "Strip of 10 tablets",
    "category": "Antibiotics & Infections",
    "uses": "MRSA skin and soft tissue infections, hospital-acquired pneumonia, resistant gram-positive bacteria",
    "sideEffects": "Diarrhea, headache, mild nausea, reversible myelosuppression with prolonged use",
    "description": "Oxazolidinone antibiotic active against vancomycin-resistant and methicillin-resistant cocci.",
    "alternatives": [
      {
        "name": "Generic Linezolid 600mg",
        "mfr": "Jan Aushadhi / BPPI",
        "price": 95,
        "isGeneric": true,
        "dosage": "600mg"
      },
      {
        "name": "Lizolid 600",
        "mfr": "Glenmark",
        "price": 390,
        "isGeneric": false,
        "dosage": "600mg"
      },
      {
        "name": "Zyvox 600",
        "mfr": "Pfizer India",
        "price": 580,
        "isGeneric": false,
        "dosage": "600mg"
      }
    ]
  },
  {
    "id": "med-rifagut400",
    "brand": "Rifagut 400",
    "generic": "Rifaximin",
    "strength": "400mg",
    "form": "Tablet",
    "manufacturer": "Sun Pharmaceuticals",
    "price": 380,
    "unit": "Strip of 10 tablets",
    "category": "Antibiotics & Infections",
    "uses": "Irritable Bowel Syndrome with diarrhea (IBS-D), hepatic encephalopathy, traveler's diarrhea",
    "sideEffects": "Mild nausea, abdominal flatulence, dizziness",
    "description": "Non-absorbable gut-selective antibiotic with minimal systemic absorption (<0.4%).",
    "alternatives": [
      {
        "name": "Generic Rifaximin 400mg",
        "mfr": "Jan Aushadhi / BPPI",
        "price": 92,
        "isGeneric": true,
        "dosage": "400mg"
      },
      {
        "name": "Rcifax 400",
        "mfr": "Lupin Ltd",
        "price": 350,
        "isGeneric": false,
        "dosage": "400mg"
      },
      {
        "name": "Torfix 400",
        "mfr": "Torrent Pharmaceuticals",
        "price": 340,
        "isGeneric": false,
        "dosage": "400mg"
      }
    ]
  },
  {
    "id": "med-candiforce200",
    "brand": "Candiforce 200",
    "generic": "Itraconazole",
    "strength": "200mg",
    "form": "Capsule",
    "manufacturer": "Mankind Pharma",
    "price": 195,
    "unit": "Strip of 10 capsules",
    "category": "Antibiotics & Infections",
    "uses": "Fungal nail infections (onychomycosis), ringworm, systemic candidiasis, aspergillosis",
    "sideEffects": "Nausea, abdominal pain, transient elevated liver enzymes, headache",
    "description": "Triazole antifungal that inhibits fungal cytochrome P450 ergosterol synthesis.",
    "alternatives": [
      {
        "name": "Generic Itraconazole 200mg",
        "mfr": "Jan Aushadhi / BPPI",
        "price": 45,
        "isGeneric": true,
        "dosage": "200mg"
      },
      {
        "name": "Itaspor 200",
        "mfr": "Intas Pharmaceuticals",
        "price": 180,
        "isGeneric": false,
        "dosage": "200mg"
      },
      {
        "name": "Sporanox 200",
        "mfr": "Janssen",
        "price": 380,
        "isGeneric": false,
        "dosage": "200mg"
      }
    ]
  },
  {
    "id": "med-tyza250",
    "brand": "Tyza 250",
    "generic": "Terbinafine",
    "strength": "250mg",
    "form": "Tablet",
    "manufacturer": "Abbott Healthcare",
    "price": 185,
    "unit": "Strip of 7 tablets",
    "category": "Antibiotics & Infections",
    "uses": "Tinea pedis (athlete's foot), tinea cruris (jock itch), fungal nail infections",
    "sideEffects": "Taste disturbance, loss of appetite, mild diarrhea, skin rash",
    "description": "Allylamine antifungal that inhibits squalene epoxidase, accumulating fungicidal squalene.",
    "alternatives": [
      {
        "name": "Generic Terbinafine 250mg",
        "mfr": "Jan Aushadhi / BPPI",
        "price": 42,
        "isGeneric": true,
        "dosage": "250mg"
      },
      {
        "name": "Sebifin 250",
        "mfr": "Sun Pharma",
        "price": 170,
        "isGeneric": false,
        "dosage": "250mg"
      },
      {
        "name": "Lamisil 250",
        "mfr": "Novartis",
        "price": 290,
        "isGeneric": false,
        "dosage": "250mg"
      }
    ]
  },
  {
    "id": "med-ivercor12",
    "brand": "Ivercor 12",
    "generic": "Ivermectin",
    "strength": "12mg",
    "form": "Tablet",
    "manufacturer": "Torrent Pharmaceuticals",
    "price": 75,
    "unit": "Strip of 2 tablets",
    "category": "Antibiotics & Infections",
    "uses": "Scabies, intestinal strongyloidiasis, filariasis, parasitic infestations",
    "sideEffects": "Dizziness, pruritus, mild gastrointestinal upset",
    "description": "Antiparasitic agent that causes hyperpolarization and paralysis of parasitic nerve cells.",
    "alternatives": [
      {
        "name": "Generic Ivermectin 12mg",
        "mfr": "Jan Aushadhi / BPPI",
        "price": 14,
        "isGeneric": true,
        "dosage": "12mg"
      },
      {
        "name": "Ivecop 12",
        "mfr": "Menarini India",
        "price": 68,
        "isGeneric": false,
        "dosage": "12mg"
      },
      {
        "name": "Ivermectol 12",
        "mfr": "Zydus",
        "price": 72,
        "isGeneric": false,
        "dosage": "12mg"
      }
    ]
  },
  {
    "id": "med-jardiance10",
    "brand": "Jardiance 10",
    "generic": "Empagliflozin",
    "strength": "10mg",
    "form": "Tablet",
    "manufacturer": "Boehringer Ingelheim",
    "price": 520,
    "unit": "Strip of 10 tablets",
    "category": "Diabetes & Endocrine",
    "uses": "Type 2 diabetes mellitus, heart failure reduction, cardiovascular risk reduction",
    "sideEffects": "Increased urination, mild UTI risk, genital yeast infection, dehydration",
    "description": "SGLT2 inhibitor providing cardiovascular and renal protection while lowering blood glucose.",
    "alternatives": [
      {
        "name": "Generic Empagliflozin 10mg",
        "mfr": "Jan Aushadhi / BPPI",
        "price": 95,
        "isGeneric": true,
        "dosage": "10mg"
      },
      {
        "name": "Gibtulio 10",
        "mfr": "Lupin Ltd",
        "price": 340,
        "isGeneric": false,
        "dosage": "10mg"
      },
      {
        "name": "Emparex 10",
        "mfr": "Sun Pharma",
        "price": 320,
        "isGeneric": false,
        "dosage": "10mg"
      }
    ]
  },
  {
    "id": "med-jardiance25",
    "brand": "Jardiance 25",
    "generic": "Empagliflozin",
    "strength": "25mg",
    "form": "Tablet",
    "manufacturer": "Boehringer Ingelheim",
    "price": 680,
    "unit": "Strip of 10 tablets",
    "category": "Diabetes & Endocrine",
    "uses": "Advanced glycemic control in Type 2 diabetes with chronic cardiovascular conditions",
    "sideEffects": "Polyuria, thirst, hypotension risk in elderly, urinary tract irritation",
    "description": "High-dose SGLT2 inhibitor facilitating urinary glucose excretion.",
    "alternatives": [
      {
        "name": "Generic Empagliflozin 25mg",
        "mfr": "Jan Aushadhi / BPPI",
        "price": 120,
        "isGeneric": true,
        "dosage": "25mg"
      },
      {
        "name": "Emparex 25",
        "mfr": "Sun Pharma",
        "price": 420,
        "isGeneric": false,
        "dosage": "25mg"
      },
      {
        "name": "Gibtulio 25",
        "mfr": "Lupin Ltd",
        "price": 440,
        "isGeneric": false,
        "dosage": "25mg"
      }
    ]
  },
  {
    "id": "med-trajenta5",
    "brand": "Trajenta 5",
    "generic": "Linagliptin",
    "strength": "5mg",
    "form": "Tablet",
    "manufacturer": "Boehringer Ingelheim",
    "price": 540,
    "unit": "Strip of 10 tablets",
    "category": "Diabetes & Endocrine",
    "uses": "Type 2 diabetes mellitus, ideal for patients with impaired kidney function without dose adjustment",
    "sideEffects": "Nasopharyngitis, hypersensitivity, pancreatitis (rare)",
    "description": "DPP-4 inhibitor excreted non-renally (via bile and feces), safe in diabetic nephropathy.",
    "alternatives": [
      {
        "name": "Generic Linagliptin 5mg",
        "mfr": "Jan Aushadhi / BPPI",
        "price": 90,
        "isGeneric": true,
        "dosage": "5mg"
      },
      {
        "name": "Linamac 5",
        "mfr": "Macleods",
        "price": 290,
        "isGeneric": false,
        "dosage": "5mg"
      },
      {
        "name": "Linaheal 5",
        "mfr": "Sun Pharma",
        "price": 310,
        "isGeneric": false,
        "dosage": "5mg"
      }
    ]
  },
  {
    "id": "med-volibo02",
    "brand": "Volibo 0.2",
    "generic": "Voglibose",
    "strength": "0.2mg",
    "form": "Tablet",
    "manufacturer": "Sun Pharmaceuticals",
    "price": 115,
    "unit": "Strip of 10 tablets",
    "category": "Diabetes & Endocrine",
    "uses": "Post-prandial blood sugar spikes in Type 2 diabetes mellitus",
    "sideEffects": "Flatulence, abdominal distension, soft stools",
    "description": "Alpha-glucosidase inhibitor that delays carbohydrate digestion in the intestine.",
    "alternatives": [
      {
        "name": "Generic Voglibose 0.2mg",
        "mfr": "Jan Aushadhi / BPPI",
        "price": 18,
        "isGeneric": true,
        "dosage": "0.2mg"
      },
      {
        "name": "Volix 0.2",
        "mfr": "Ranbaxy / Sun Pharma",
        "price": 98,
        "isGeneric": false,
        "dosage": "0.2mg"
      },
      {
        "name": "Vocarb 0.2",
        "mfr": "Torrent Pharmaceuticals",
        "price": 92,
        "isGeneric": false,
        "dosage": "0.2mg"
      }
    ]
  },
  {
    "id": "med-volibo03",
    "brand": "Volibo 0.3",
    "generic": "Voglibose",
    "strength": "0.3mg",
    "form": "Tablet",
    "manufacturer": "Sun Pharmaceuticals",
    "price": 145,
    "unit": "Strip of 10 tablets",
    "category": "Diabetes & Endocrine",
    "uses": "Severe post-prandial hyperglycemia, carbohydrate intolerance in diabetes",
    "sideEffects": "Gas, abdominal cramps, diarrhea",
    "description": "Higher-strength alpha-glucosidase inhibitor taken right before major meals.",
    "alternatives": [
      {
        "name": "Generic Voglibose 0.3mg",
        "mfr": "Jan Aushadhi / BPPI",
        "price": 22,
        "isGeneric": true,
        "dosage": "0.3mg"
      },
      {
        "name": "Volix 0.3",
        "mfr": "Sun Pharma",
        "price": 125,
        "isGeneric": false,
        "dosage": "0.3mg"
      },
      {
        "name": "Vocarb 0.3",
        "mfr": "Torrent Pharmaceuticals",
        "price": 118,
        "isGeneric": false,
        "dosage": "0.3mg"
      }
    ]
  },
  {
    "id": "med-pioz15",
    "brand": "Pioz 15",
    "generic": "Pioglitazone",
    "strength": "15mg",
    "form": "Tablet",
    "manufacturer": "USV Private Limited",
    "price": 75,
    "unit": "Strip of 10 tablets",
    "category": "Diabetes & Endocrine",
    "uses": "Insulin resistance in Type 2 diabetes, non-alcoholic fatty liver disease (NAFLD)",
    "sideEffects": "Weight gain, peripheral fluid retention, fracture risk in postmenopausal women",
    "description": "Thiazolidinedione (TZD) insulin sensitizer acting on PPAR-gamma receptors.",
    "alternatives": [
      {
        "name": "Generic Pioglitazone 15mg",
        "mfr": "Jan Aushadhi / BPPI",
        "price": 14,
        "isGeneric": true,
        "dosage": "15mg"
      },
      {
        "name": "Piosys 15",
        "mfr": "Sun Pharma",
        "price": 62,
        "isGeneric": false,
        "dosage": "15mg"
      },
      {
        "name": "Glizone 15",
        "mfr": "Zydus Cadila",
        "price": 58,
        "isGeneric": false,
        "dosage": "15mg"
      }
    ]
  },
  {
    "id": "med-eltroxin50",
    "brand": "Eltroxin 50",
    "generic": "Levothyroxine Sodium",
    "strength": "50mcg",
    "form": "Tablet",
    "manufacturer": "GSK Pharmaceuticals",
    "price": 120,
    "unit": "Bottle of 120 tablets",
    "category": "Diabetes & Endocrine",
    "uses": "Hypothyroidism, goiter prevention, thyroid hormone replacement",
    "sideEffects": "Palpitations if over-replaced, weight loss, heat intolerance, tremor",
    "description": "Synthetic levo-isomer of thyroxine replacing deficient natural thyroid hormones.",
    "alternatives": [
      {
        "name": "Generic Levothyroxine 50mcg",
        "mfr": "Jan Aushadhi / BPPI",
        "price": 28,
        "isGeneric": true,
        "dosage": "50mcg"
      },
      {
        "name": "Thyronorm 50",
        "mfr": "Abbott",
        "price": 115,
        "isGeneric": false,
        "dosage": "50mcg"
      },
      {
        "name": "Thyrox 50",
        "mfr": "Macleods",
        "price": 95,
        "isGeneric": false,
        "dosage": "50mcg"
      }
    ]
  },
  {
    "id": "med-eltroxin100",
    "brand": "Eltroxin 100",
    "generic": "Levothyroxine Sodium",
    "strength": "100mcg",
    "form": "Tablet",
    "manufacturer": "GSK Pharmaceuticals",
    "price": 155,
    "unit": "Bottle of 120 tablets",
    "category": "Diabetes & Endocrine",
    "uses": "Severe hypothyroidism, post-thyroidectomy replacement, TSH suppression therapy",
    "sideEffects": "Headache, rapid heart rate, insomnia, sweating",
    "description": "100mcg synthetic T4 hormone tablet taken strictly on an empty stomach 30 mins before breakfast.",
    "alternatives": [
      {
        "name": "Generic Levothyroxine 100mcg",
        "mfr": "Jan Aushadhi / BPPI",
        "price": 34,
        "isGeneric": true,
        "dosage": "100mcg"
      },
      {
        "name": "Thyronorm 100",
        "mfr": "Abbott",
        "price": 150,
        "isGeneric": false,
        "dosage": "100mcg"
      },
      {
        "name": "Thyrox 100",
        "mfr": "Macleods",
        "price": 120,
        "isGeneric": false,
        "dosage": "100mcg"
      }
    ]
  },
  {
    "id": "med-neomercazole5",
    "brand": "Neo-Mercazole 5",
    "generic": "Carbimazole",
    "strength": "5mg",
    "form": "Tablet",
    "manufacturer": "Abbott Healthcare",
    "price": 210,
    "unit": "Bottle of 100 tablets",
    "category": "Diabetes & Endocrine",
    "uses": "Hyperthyroidism, Graves' disease, preparation for thyroidectomy",
    "sideEffects": "Skin rash, pruritus, joint pain, rare agranulocytosis (sore throat/fever warning)",
    "description": "Antithyroid agent that reduces excessive synthesis of thyroid hormones T3 and T4.",
    "alternatives": [
      {
        "name": "Generic Carbimazole 5mg",
        "mfr": "Jan Aushadhi / BPPI",
        "price": 42,
        "isGeneric": true,
        "dosage": "5mg"
      },
      {
        "name": "Thyrocab 5",
        "mfr": "Abbott",
        "price": 190,
        "isGeneric": false,
        "dosage": "5mg"
      },
      {
        "name": "Anti-Thy 5",
        "mfr": "Cipla",
        "price": 175,
        "isGeneric": false,
        "dosage": "5mg"
      }
    ]
  },
  {
    "id": "med-repace50",
    "brand": "Repace 50",
    "generic": "Losartan Potassium",
    "strength": "50mg",
    "form": "Tablet",
    "manufacturer": "Sun Pharmaceuticals",
    "price": 135,
    "unit": "Strip of 15 tablets",
    "category": "Heart & Blood Pressure",
    "uses": "Hypertension, diabetic nephropathy in Type 2 diabetes, stroke risk reduction in LVH",
    "sideEffects": "Dizziness, lightheadedness, nasal congestion, hyperkalemia",
    "description": "Angiotensin II receptor blocker (ARB) lowering systemic vascular resistance without dry cough.",
    "alternatives": [
      {
        "name": "Generic Losartan 50mg",
        "mfr": "Jan Aushadhi / BPPI",
        "price": 21,
        "isGeneric": true,
        "dosage": "50mg"
      },
      {
        "name": "Losar 50",
        "mfr": "Unichem Laboratories",
        "price": 110,
        "isGeneric": false,
        "dosage": "50mg"
      },
      {
        "name": "Zaart 50",
        "mfr": "Torrent Pharmaceuticals",
        "price": 105,
        "isGeneric": false,
        "dosage": "50mg"
      }
    ]
  },
  {
    "id": "med-olmat20",
    "brand": "Olmat 20",
    "generic": "Olmesartan Medoxomil",
    "strength": "20mg",
    "form": "Tablet",
    "manufacturer": "Glenmark Pharmaceuticals",
    "price": 180,
    "unit": "Strip of 10 tablets",
    "category": "Heart & Blood Pressure",
    "uses": "Essential hypertension, cardioprotection in chronic high blood pressure",
    "sideEffects": "Dizziness, back pain, flu-like symptoms",
    "description": "Long-acting ARB providing sustained 24-hour ambulatory blood pressure reduction.",
    "alternatives": [
      {
        "name": "Generic Olmesartan 20mg",
        "mfr": "Jan Aushadhi / BPPI",
        "price": 30,
        "isGeneric": true,
        "dosage": "20mg"
      },
      {
        "name": "Olmesar 20",
        "mfr": "Macleods",
        "price": 155,
        "isGeneric": false,
        "dosage": "20mg"
      },
      {
        "name": "Olmecip 20",
        "mfr": "Cipla",
        "price": 160,
        "isGeneric": false,
        "dosage": "20mg"
      }
    ]
  },
  {
    "id": "med-cilacar10",
    "brand": "Cilacar 10",
    "generic": "Cilnidipine",
    "strength": "10mg",
    "form": "Tablet",
    "manufacturer": "J.B. Chemicals & Pharmaceuticals",
    "price": 145,
    "unit": "Strip of 15 tablets",
    "category": "Heart & Blood Pressure",
    "uses": "Hypertension, particularly for patients prone to ankle edema or tachycardia from amlodipine",
    "sideEffects": "Mild flushing, headache, dizziness, palpitation",
    "description": "Dual L/N-type calcium channel blocker that dilates both afferent and efferent renal arterioles.",
    "alternatives": [
      {
        "name": "Generic Cilnidipine 10mg",
        "mfr": "Jan Aushadhi / BPPI",
        "price": 28,
        "isGeneric": true,
        "dosage": "10mg"
      },
      {
        "name": "Nexsulin 10",
        "mfr": "Torrent Pharmaceuticals",
        "price": 120,
        "isGeneric": false,
        "dosage": "10mg"
      },
      {
        "name": "Cildip 10",
        "mfr": "Micro Labs",
        "price": 115,
        "isGeneric": false,
        "dosage": "10mg"
      }
    ]
  },
  {
    "id": "med-envas5",
    "brand": "Envas 5",
    "generic": "Enalapril Maleate",
    "strength": "5mg",
    "form": "Tablet",
    "manufacturer": "Cadila Pharmaceuticals",
    "price": 45,
    "unit": "Strip of 15 tablets",
    "category": "Heart & Blood Pressure",
    "uses": "Hypertension, congestive heart failure, asymptomatic left ventricular dysfunction",
    "sideEffects": "Dry non-productive cough, dizziness, hypotension, elevated serum potassium",
    "description": "ACE inhibitor that prevents conversion of angiotensin I to the potent vasoconstrictor angiotensin II.",
    "alternatives": [
      {
        "name": "Generic Enalapril 5mg",
        "mfr": "Jan Aushadhi / BPPI",
        "price": 8.5,
        "isGeneric": true,
        "dosage": "5mg"
      },
      {
        "name": "Vasotec 5",
        "mfr": "MSD India",
        "price": 42,
        "isGeneric": false,
        "dosage": "5mg"
      },
      {
        "name": "Nuril 5",
        "mfr": "USV Ltd",
        "price": 38,
        "isGeneric": false,
        "dosage": "5mg"
      }
    ]
  },
  {
    "id": "med-betacard50",
    "brand": "Betacard 50",
    "generic": "Atenolol",
    "strength": "50mg",
    "form": "Tablet",
    "manufacturer": "Torrent Pharmaceuticals",
    "price": 52,
    "unit": "Strip of 14 tablets",
    "category": "Heart & Blood Pressure",
    "uses": "Hypertension, angina pectoris, post-myocardial infarction cardiac stabilization, arrhythmias",
    "sideEffects": "Bradycardia, cold extremities, fatigue, dizziness",
    "description": "Cardioselective beta-1 adrenergic receptor antagonist reducing cardiac workload and heart rate.",
    "alternatives": [
      {
        "name": "Generic Atenolol 50mg",
        "mfr": "Jan Aushadhi / BPPI",
        "price": 7,
        "isGeneric": true,
        "dosage": "50mg"
      },
      {
        "name": "Aten 50",
        "mfr": "Zydus Cadila",
        "price": 44,
        "isGeneric": false,
        "dosage": "50mg"
      },
      {
        "name": "Tenormin 50",
        "mfr": "Abbott",
        "price": 48,
        "isGeneric": false,
        "dosage": "50mg"
      }
    ]
  },
  {
    "id": "med-nebicard5",
    "brand": "Nebicard 5",
    "generic": "Nebivolol",
    "strength": "5mg",
    "form": "Tablet",
    "manufacturer": "Torrent Pharmaceuticals",
    "price": 155,
    "unit": "Strip of 10 tablets",
    "category": "Heart & Blood Pressure",
    "uses": "Hypertension, mild-to-moderate chronic heart failure in elderly patients",
    "sideEffects": "Headache, dizziness, fatigue, paresthesia",
    "description": "Third-generation beta blocker with nitric oxide-mediated vasodilatory properties.",
    "alternatives": [
      {
        "name": "Generic Nebivolol 5mg",
        "mfr": "Jan Aushadhi / BPPI",
        "price": 26,
        "isGeneric": true,
        "dosage": "5mg"
      },
      {
        "name": "Nebilong 5",
        "mfr": "Micro Labs",
        "price": 138,
        "isGeneric": false,
        "dosage": "5mg"
      },
      {
        "name": "Nebistol 5",
        "mfr": "Sun Pharma",
        "price": 142,
        "isGeneric": false,
        "dosage": "5mg"
      }
    ]
  },
  {
    "id": "med-lasix40",
    "brand": "Lasix 40",
    "generic": "Furosemide",
    "strength": "40mg",
    "form": "Tablet",
    "manufacturer": "Sanofi India",
    "price": 18,
    "unit": "Strip of 15 tablets",
    "category": "Heart & Blood Pressure",
    "uses": "Edema associated with heart failure, cirrhosis, renal disease, hypertensive crisis",
    "sideEffects": "Electrolyte depletion (hypokalemia, hyponatremia), dehydration, hypotension",
    "description": "High-ceiling loop diuretic that blocks Na+/K+/2Cl- symporters in the thick ascending loop of Henle.",
    "alternatives": [
      {
        "name": "Generic Furosemide 40mg",
        "mfr": "Jan Aushadhi / BPPI",
        "price": 4.5,
        "isGeneric": true,
        "dosage": "40mg"
      },
      {
        "name": "Frusenex 40",
        "mfr": "RPG Life Sciences",
        "price": 14,
        "isGeneric": false,
        "dosage": "40mg"
      },
      {
        "name": "Salinex 40",
        "mfr": "Cipla",
        "price": 15,
        "isGeneric": false,
        "dosage": "40mg"
      }
    ]
  },
  {
    "id": "med-aldactone25",
    "brand": "Aldactone 25",
    "generic": "Spironolactone",
    "strength": "25mg",
    "form": "Tablet",
    "manufacturer": "RPG Life Sciences",
    "price": 52,
    "unit": "Strip of 15 tablets",
    "category": "Heart & Blood Pressure",
    "uses": "Congestive heart failure, resistant hypertension, liver cirrhosis with ascites, hyperaldosteronism",
    "sideEffects": "Hyperkalemia, gynecomastia in men, breast tenderness, irregular menses",
    "description": "Potassium-sparing aldosterone receptor antagonist that prevents myocardial and vascular fibrosis.",
    "alternatives": [
      {
        "name": "Generic Spironolactone 25mg",
        "mfr": "Jan Aushadhi / BPPI",
        "price": 12,
        "isGeneric": true,
        "dosage": "25mg"
      },
      {
        "name": "Spiroctan 25",
        "mfr": "Cipla",
        "price": 44,
        "isGeneric": false,
        "dosage": "25mg"
      },
      {
        "name": "Spiractin 25",
        "mfr": "Sun Pharma",
        "price": 46,
        "isGeneric": false,
        "dosage": "25mg"
      }
    ]
  },
  {
    "id": "med-rozavel20",
    "brand": "Rozavel 20",
    "generic": "Rosuvastatin",
    "strength": "20mg",
    "form": "Tablet",
    "manufacturer": "Sun Pharmaceuticals",
    "price": 365,
    "unit": "Strip of 10 tablets",
    "category": "Cholesterol & Lipids",
    "uses": "Severe hypercholesterolemia, familial hyperlipidemia, prevention of major cardiovascular events",
    "sideEffects": "Muscle ache (myalgia), mild abdominal discomfort, elevated liver enzymes",
    "description": "Potent HMG-CoA reductase inhibitor lowering LDL-C up to 55% while elevating protective HDL-C.",
    "alternatives": [
      {
        "name": "Generic Rosuvastatin 20mg",
        "mfr": "Jan Aushadhi / BPPI",
        "price": 48,
        "isGeneric": true,
        "dosage": "20mg"
      },
      {
        "name": "Roseday 20",
        "mfr": "USV Ltd",
        "price": 310,
        "isGeneric": false,
        "dosage": "20mg"
      },
      {
        "name": "Rosuvas 20",
        "mfr": "Sun Pharma",
        "price": 345,
        "isGeneric": false,
        "dosage": "20mg"
      },
      {
        "name": "Crestor 20",
        "mfr": "AstraZeneca",
        "price": 580,
        "isGeneric": false,
        "dosage": "20mg"
      }
    ]
  },
  {
    "id": "med-lipicard160",
    "brand": "Lipicard 160",
    "generic": "Fenofibrate (Micronized)",
    "strength": "160mg",
    "form": "Tablet",
    "manufacturer": "USV Private Limited",
    "price": 215,
    "unit": "Strip of 10 tablets",
    "category": "Cholesterol & Lipids",
    "uses": "Severe hypertriglyceridemia, mixed dyslipidemia, pancreatitis prevention in high triglycerides",
    "sideEffects": "Stomach upset, flatulence, gallstone risk, muscle pain",
    "description": "Fibric acid derivative acting as a PPAR-alpha agonist that accelerates clearance of triglyceride-rich VLDL.",
    "alternatives": [
      {
        "name": "Generic Fenofibrate 160mg",
        "mfr": "Jan Aushadhi / BPPI",
        "price": 36,
        "isGeneric": true,
        "dosage": "160mg"
      },
      {
        "name": "Fenolip 145",
        "mfr": "Cipla",
        "price": 185,
        "isGeneric": false,
        "dosage": "145mg"
      },
      {
        "name": "Stanlip 145",
        "mfr": "Sun Pharma",
        "price": 190,
        "isGeneric": false,
        "dosage": "145mg"
      }
    ]
  },
  {
    "id": "med-ezetrol10",
    "brand": "Ezetrol 10",
    "generic": "Ezetimibe",
    "strength": "10mg",
    "form": "Tablet",
    "manufacturer": "Sun Pharmaceuticals",
    "price": 195,
    "unit": "Strip of 10 tablets",
    "category": "Cholesterol & Lipids",
    "uses": "Primary hypercholesterolemia, add-on to statins for reaching strict LDL targets",
    "sideEffects": "Fatigue, diarrhea, abdominal pain, arthralgia",
    "description": "Niemann-Pick C1-Like 1 (NPC1L1) inhibitor blocking intestinal absorption of dietary cholesterol.",
    "alternatives": [
      {
        "name": "Generic Ezetimibe 10mg",
        "mfr": "Jan Aushadhi / BPPI",
        "price": 28,
        "isGeneric": true,
        "dosage": "10mg"
      },
      {
        "name": "Ezentia 10",
        "mfr": "Sun Pharma",
        "price": 165,
        "isGeneric": false,
        "dosage": "10mg"
      },
      {
        "name": "Zetia 10",
        "mfr": "MSD India",
        "price": 240,
        "isGeneric": false,
        "dosage": "10mg"
      }
    ]
  },
  {
    "id": "med-sorbitrate5",
    "brand": "Sorbitrate 5",
    "generic": "Isosorbide Dinitrate",
    "strength": "5mg",
    "form": "Sublingual Tablet",
    "manufacturer": "Abbott Healthcare",
    "price": 45,
    "unit": "Strip of 50 tablets",
    "category": "Heart & Blood Pressure",
    "uses": "Acute relief and prevention of angina pectoris (chest pain due to reduced cardiac blood flow)",
    "sideEffects": "Throbbing headache, postural hypotension, facial flushing, dizziness",
    "description": "Sublingual organic nitrate that releases nitric oxide, rapidly dilating coronary and peripheral vessels.",
    "alternatives": [
      {
        "name": "Generic Isosorbide Dinitrate 5mg",
        "mfr": "Jan Aushadhi / BPPI",
        "price": 8,
        "isGeneric": true,
        "dosage": "5mg"
      },
      {
        "name": "Isordil 5",
        "mfr": "Sanofi",
        "price": 38,
        "isGeneric": false,
        "dosage": "5mg"
      },
      {
        "name": "Cardisorb 5",
        "mfr": "Cipla",
        "price": 35,
        "isGeneric": false,
        "dosage": "5mg"
      }
    ]
  },
  {
    "id": "med-monit20",
    "brand": "Monit 20",
    "generic": "Isosorbide Mononitrate",
    "strength": "20mg",
    "form": "Tablet",
    "manufacturer": "Intas Pharmaceuticals",
    "price": 85,
    "unit": "Strip of 30 tablets",
    "category": "Heart & Blood Pressure",
    "uses": "Prophylaxis of chronic angina pectoris, maintenance therapy in ischemic heart disease",
    "sideEffects": "Headache (nitrate headache), reflex tachycardia, lightheadedness",
    "description": "Active metabolite of isosorbide dinitrate with 100% oral bioavailability for sustained angina prevention.",
    "alternatives": [
      {
        "name": "Generic Isosorbide Mononitrate 20mg",
        "mfr": "Jan Aushadhi / BPPI",
        "price": 16,
        "isGeneric": true,
        "dosage": "20mg"
      },
      {
        "name": "Ismo 20",
        "mfr": "Abbott",
        "price": 78,
        "isGeneric": false,
        "dosage": "20mg"
      },
      {
        "name": "Monotrate 20",
        "mfr": "Sun Pharma",
        "price": 75,
        "isGeneric": false,
        "dosage": "20mg"
      }
    ]
  },
  {
    "id": "med-nexpro40",
    "brand": "Nexpro 40",
    "generic": "Esomeprazole",
    "strength": "40mg",
    "form": "Tablet",
    "manufacturer": "Torrent Pharmaceuticals",
    "price": 155,
    "unit": "Strip of 15 tablets",
    "category": "Gastric & Digestion",
    "uses": "Gastroesophageal Reflux Disease (GERD), erosive esophagitis, Zollinger-Ellison syndrome",
    "sideEffects": "Headache, diarrhea, dry mouth, flatulence",
    "description": "S-isomer of omeprazole providing higher plasma concentrations and longer acid suppression.",
    "alternatives": [
      {
        "name": "Generic Esomeprazole 40mg",
        "mfr": "Jan Aushadhi / BPPI",
        "price": 24,
        "isGeneric": true,
        "dosage": "40mg"
      },
      {
        "name": "Sompraz 40",
        "mfr": "Sun Pharma",
        "price": 142,
        "isGeneric": false,
        "dosage": "40mg"
      },
      {
        "name": "Esomac 40",
        "mfr": "Cipla",
        "price": 135,
        "isGeneric": false,
        "dosage": "40mg"
      },
      {
        "name": "Nexium 40",
        "mfr": "AstraZeneca",
        "price": 290,
        "isGeneric": false,
        "dosage": "40mg"
      }
    ]
  },
  {
    "id": "med-rablet-d",
    "brand": "Rablet-D",
    "generic": "Rabeprazole + Domperidone",
    "strength": "20mg + 30mg SR",
    "form": "Capsule",
    "manufacturer": "Lupin Limited",
    "price": 210,
    "unit": "Strip of 10 capsules",
    "category": "Gastric & Digestion",
    "uses": "Acid reflux with nausea, gastroparesis, severe dyspepsia, regurgitation",
    "sideEffects": "Dry mouth, dizziness, transient headache, mild abdominal cramps",
    "description": "Dual-action combination inhibiting acid secretion while stimulating upper GI motility.",
    "alternatives": [
      {
        "name": "Generic Rabeprazole + Domperidone SR",
        "mfr": "Jan Aushadhi / BPPI",
        "price": 34,
        "isGeneric": true,
        "dosage": "20mg + 30mg"
      },
      {
        "name": "Razo-D",
        "mfr": "Dr. Reddy's",
        "price": 195,
        "isGeneric": false,
        "dosage": "20mg + 30mg"
      },
      {
        "name": "Happi-D",
        "mfr": "Zydus Cadila",
        "price": 185,
        "isGeneric": false,
        "dosage": "20mg + 30mg"
      },
      {
        "name": "Cyra-D",
        "mfr": "Systopic",
        "price": 170,
        "isGeneric": false,
        "dosage": "20mg + 30mg"
      }
    ]
  },
  {
    "id": "med-famocid40",
    "brand": "Famocid 40",
    "generic": "Famotidine",
    "strength": "40mg",
    "form": "Tablet",
    "manufacturer": "Sun Pharmaceuticals",
    "price": 36,
    "unit": "Strip of 14 tablets",
    "category": "Gastric & Digestion",
    "uses": "Heartburn, acid indigestion, duodenal ulcers, Zollinger-Ellison condition",
    "sideEffects": "Headache, constipation, diarrhea, dizziness",
    "description": "Competitive histamine H2-receptor antagonist that inhibits nocturnal and basal gastric acid secretion.",
    "alternatives": [
      {
        "name": "Generic Famotidine 40mg",
        "mfr": "Jan Aushadhi / BPPI",
        "price": 8,
        "isGeneric": true,
        "dosage": "40mg"
      },
      {
        "name": "Facid 40",
        "mfr": "Intas Pharmaceuticals",
        "price": 30,
        "isGeneric": false,
        "dosage": "40mg"
      },
      {
        "name": "Pepcid 40",
        "mfr": "J&J",
        "price": 42,
        "isGeneric": false,
        "dosage": "40mg"
      }
    ]
  },
  {
    "id": "med-sucrafil1000",
    "brand": "Sucrafil",
    "generic": "Sucralfate",
    "strength": "1000mg",
    "form": "Suspension / Tablet",
    "manufacturer": "Fourrts India Laboratories",
    "price": 195,
    "unit": "200ml Suspension",
    "category": "Gastric & Digestion",
    "uses": "Duodenal ulcers, gastric mucosal erosion, bile reflux gastritis",
    "sideEffects": "Constipation (most common), dry mouth, nausea",
    "description": "Mucosal protective agent that binds to ulcer craters and forms an insoluble protective barrier against acid and pepsin.",
    "alternatives": [
      {
        "name": "Generic Sucralfate Suspension",
        "mfr": "Jan Aushadhi / BPPI",
        "price": 42,
        "isGeneric": true,
        "dosage": "1000mg/10ml"
      },
      {
        "name": "Sucraheal",
        "mfr": "Sun Pharma",
        "price": 180,
        "isGeneric": false,
        "dosage": "1000mg/10ml"
      },
      {
        "name": "Macralfate",
        "mfr": "Macleods",
        "price": 165,
        "isGeneric": false,
        "dosage": "1000mg/10ml"
      }
    ]
  },
  {
    "id": "med-domstal10",
    "brand": "Domstal 10",
    "generic": "Domperidone",
    "strength": "10mg",
    "form": "Tablet",
    "manufacturer": "Torrent Pharmaceuticals",
    "price": 48,
    "unit": "Strip of 10 tablets",
    "category": "Gastric & Digestion",
    "uses": "Nausea and vomiting, diabetic gastroparesis, bloating, early satiety",
    "sideEffects": "Dry mouth, headache, transient mild abdominal cramps",
    "description": "Peripheral dopamine D2 receptor antagonist promoting gastric emptying and motility.",
    "alternatives": [
      {
        "name": "Generic Domperidone 10mg",
        "mfr": "Jan Aushadhi / BPPI",
        "price": 9,
        "isGeneric": true,
        "dosage": "10mg"
      },
      {
        "name": "Motilium 10",
        "mfr": "Janssen",
        "price": 45,
        "isGeneric": false,
        "dosage": "10mg"
      },
      {
        "name": "Vomistop 10",
        "mfr": "Cipla",
        "price": 38,
        "isGeneric": false,
        "dosage": "10mg"
      }
    ]
  },
  {
    "id": "med-perinorm10",
    "brand": "Perinorm 10",
    "generic": "Metoclopramide",
    "strength": "10mg",
    "form": "Tablet",
    "manufacturer": "Ipca Laboratories",
    "price": 25,
    "unit": "Strip of 10 tablets",
    "category": "Gastric & Digestion",
    "uses": "Severe nausea, post-operative vomiting, chemotherapy-induced nausea, delayed gastric emptying",
    "sideEffects": "Drowsiness, restlessness, extrapyramidal symptoms with prolonged use",
    "description": "Central and peripheral dopamine antagonist and prokinetic agent stimulating upper GI tract.",
    "alternatives": [
      {
        "name": "Generic Metoclopramide 10mg",
        "mfr": "Jan Aushadhi / BPPI",
        "price": 5,
        "isGeneric": true,
        "dosage": "10mg"
      },
      {
        "name": "Reglan 10",
        "mfr": "Sanofi",
        "price": 22,
        "isGeneric": false,
        "dosage": "10mg"
      },
      {
        "name": "Maxeron 10",
        "mfr": "Wallace",
        "price": 20,
        "isGeneric": false,
        "dosage": "10mg"
      }
    ]
  },
  {
    "id": "med-creon10000",
    "brand": "Creon 10000",
    "generic": "Pancreatin (Lipase, Amylase, Protease)",
    "strength": "10000 units Lipase",
    "form": "Minimicrospheres Capsule",
    "manufacturer": "Abbott Healthcare",
    "price": 520,
    "unit": "Strip of 10 capsules",
    "category": "Gastric & Digestion",
    "uses": "Exocrine pancreatic insufficiency due to chronic pancreatitis, cystic fibrosis, pancreatectomy",
    "sideEffects": "Abdominal cramping, flatulence, loose stools",
    "description": "Enteric-coated pancreatic enzyme supplement designed to digest fats, starches, and proteins in the duodenum.",
    "alternatives": [
      {
        "name": "Generic Pancreatin 10000",
        "mfr": "Jan Aushadhi / BPPI",
        "price": 110,
        "isGeneric": true,
        "dosage": "10000 IU"
      },
      {
        "name": "Panlipase 10000",
        "mfr": "Cipla",
        "price": 440,
        "isGeneric": false,
        "dosage": "10000 IU"
      },
      {
        "name": "Enzomac 10000",
        "mfr": "Macleods",
        "price": 410,
        "isGeneric": false,
        "dosage": "10000 IU"
      }
    ]
  },
  {
    "id": "med-dulcolax5",
    "brand": "Dulcolax 5",
    "generic": "Bisacodyl",
    "strength": "5mg",
    "form": "Enteric Coated Tablet",
    "manufacturer": "Sanofi India",
    "price": 18,
    "unit": "Strip of 10 tablets",
    "category": "Gastric & Digestion",
    "uses": "Occasional constipation, bowel evacuation prior to colonoscopy or abdominal surgery",
    "sideEffects": "Abdominal cramping, nausea, diarrhea with excessive use",
    "description": "Stimulant laxative that acts directly on the colonic mucosa to stimulate peristaltic contractions.",
    "alternatives": [
      {
        "name": "Generic Bisacodyl 5mg",
        "mfr": "Jan Aushadhi / BPPI",
        "price": 4,
        "isGeneric": true,
        "dosage": "5mg"
      },
      {
        "name": "Gerbisa 5",
        "mfr": "Zydus Healthcare",
        "price": 15,
        "isGeneric": false,
        "dosage": "5mg"
      },
      {
        "name": "Julax 5",
        "mfr": "Sun Pharma",
        "price": 16,
        "isGeneric": false,
        "dosage": "5mg"
      }
    ]
  },
  {
    "id": "med-bilaxten20",
    "brand": "Bilaxten 20",
    "generic": "Bilastine",
    "strength": "20mg",
    "form": "Tablet",
    "manufacturer": "Zydus Healthcare",
    "price": 180,
    "unit": "Strip of 10 tablets",
    "category": "Respiratory & Allergy",
    "uses": "Allergic rhinoconjunctivitis, chronic idiopathic urticaria, severe itching, seasonal allergies",
    "sideEffects": "Headache, drowsiness (rare, non-sedating), abdominal pain",
    "description": "Next-generation non-sedating H1 antihistamine with negligible brain penetration (<0.1%).",
    "alternatives": [
      {
        "name": "Generic Bilastine 20mg",
        "mfr": "Jan Aushadhi / BPPI",
        "price": 32,
        "isGeneric": true,
        "dosage": "20mg"
      },
      {
        "name": "Bilasur 20",
        "mfr": "Sun Pharma",
        "price": 155,
        "isGeneric": false,
        "dosage": "20mg"
      },
      {
        "name": "Bilashine 20",
        "mfr": "Macleods",
        "price": 148,
        "isGeneric": false,
        "dosage": "20mg"
      }
    ]
  },
  {
    "id": "med-levocet5",
    "brand": "Levocet 5",
    "generic": "Levocetirizine Dihydrochloride",
    "strength": "5mg",
    "form": "Tablet",
    "manufacturer": "Hetero Healthcare",
    "price": 52,
    "unit": "Strip of 10 tablets",
    "category": "Respiratory & Allergy",
    "uses": "Allergic rhinitis, persistent sneezing, watery eyes, skin allergies, hives",
    "sideEffects": "Mild somnolence, dry mouth, tiredness, headache",
    "description": "Active R-enantiomer of cetirizine offering twice the receptor affinity with lower sedation.",
    "alternatives": [
      {
        "name": "Generic Levocetirizine 5mg",
        "mfr": "Jan Aushadhi / BPPI",
        "price": 8.5,
        "isGeneric": true,
        "dosage": "5mg"
      },
      {
        "name": "Vozet 5",
        "mfr": "Torrent Pharmaceuticals",
        "price": 46,
        "isGeneric": false,
        "dosage": "5mg"
      },
      {
        "name": "Xyzal 5",
        "mfr": "GSK",
        "price": 65,
        "isGeneric": false,
        "dosage": "5mg"
      },
      {
        "name": "1-AL 5",
        "mfr": "FDC Ltd",
        "price": 42,
        "isGeneric": false,
        "dosage": "5mg"
      }
    ]
  },
  {
    "id": "med-allegra180",
    "brand": "Allegra 180",
    "generic": "Fexofenadine Hydrochloride",
    "strength": "180mg",
    "form": "Tablet",
    "manufacturer": "Sanofi India",
    "price": 245,
    "unit": "Strip of 10 tablets",
    "category": "Respiratory & Allergy",
    "uses": "Severe chronic idiopathic urticaria, extensive skin itching and allergic rashes",
    "sideEffects": "Headache, nausea, dry throat, dizziness",
    "description": "High-dose non-sedating antihistamine that does not cross blood-brain barrier.",
    "alternatives": [
      {
        "name": "Generic Fexofenadine 180mg",
        "mfr": "Jan Aushadhi / BPPI",
        "price": 38,
        "isGeneric": true,
        "dosage": "180mg"
      },
      {
        "name": "Fexova 180",
        "mfr": "Sun Pharma",
        "price": 195,
        "isGeneric": false,
        "dosage": "180mg"
      },
      {
        "name": "Telfast 180",
        "mfr": "Sanofi",
        "price": 230,
        "isGeneric": false,
        "dosage": "180mg"
      }
    ]
  },
  {
    "id": "med-abphylline100",
    "brand": "AB Phylline 100",
    "generic": "Acebrophylline",
    "strength": "100mg",
    "form": "Capsule",
    "manufacturer": "Sun Pharmaceuticals",
    "price": 175,
    "unit": "Strip of 10 capsules",
    "category": "Respiratory & Allergy",
    "uses": "COPD, bronchial asthma, chronic bronchitis with thick mucus congestion",
    "sideEffects": "Gastric discomfort, heartburn, nausea, vomiting",
    "description": "Mucolytic bronchodilator composed of ambroxol and theophylline-7-acetic acid.",
    "alternatives": [
      {
        "name": "Generic Acebrophylline 100mg",
        "mfr": "Jan Aushadhi / BPPI",
        "price": 32,
        "isGeneric": true,
        "dosage": "100mg"
      },
      {
        "name": "Macphylline 100",
        "mfr": "Macleods",
        "price": 145,
        "isGeneric": false,
        "dosage": "100mg"
      },
      {
        "name": "Ascovent 100",
        "mfr": "Glenmark",
        "price": 150,
        "isGeneric": false,
        "dosage": "100mg"
      }
    ]
  },
  {
    "id": "med-doxoril400",
    "brand": "Doxoril 400",
    "generic": "Doxofylline",
    "strength": "400mg",
    "form": "Tablet",
    "manufacturer": "Macleods Pharmaceuticals",
    "price": 155,
    "unit": "Strip of 10 tablets",
    "category": "Respiratory & Allergy",
    "uses": "Bronchial asthma, chronic obstructive pulmonary disease (COPD), bronchospasm",
    "sideEffects": "Headache, nausea, mild insomnia, palpitations",
    "description": "Novel xanthine bronchodilator with significantly fewer cardiac and CNS side effects than aminophylline.",
    "alternatives": [
      {
        "name": "Generic Doxofylline 400mg",
        "mfr": "Jan Aushadhi / BPPI",
        "price": 28,
        "isGeneric": true,
        "dosage": "400mg"
      },
      {
        "name": "Doxolin 400",
        "mfr": "Zydus Cadila",
        "price": 140,
        "isGeneric": false,
        "dosage": "400mg"
      },
      {
        "name": "Doxiflo 400",
        "mfr": "Lupin Ltd",
        "price": 135,
        "isGeneric": false,
        "dosage": "400mg"
      }
    ]
  },
  {
    "id": "med-mucinac600",
    "brand": "Mucinac 600",
    "generic": "Acetylcysteine",
    "strength": "600mg",
    "form": "Effervescent Tablet",
    "manufacturer": "Cipla",
    "price": 290,
    "unit": "Tube of 10 effervescent tablets",
    "category": "Respiratory & Allergy",
    "uses": "Thick tenacious bronchial mucus in lung disease, paracetamol poisoning antidote",
    "sideEffects": "Mild stomach upset, nausea, flushing",
    "description": "Powerful mucolytic that cleaves disulfide bonds in mucoproteins and replenishes cellular glutathione.",
    "alternatives": [
      {
        "name": "Generic Acetylcysteine 600mg",
        "mfr": "Jan Aushadhi / BPPI",
        "price": 55,
        "isGeneric": true,
        "dosage": "600mg"
      },
      {
        "name": "Effercet 600",
        "mfr": "Sun Pharma",
        "price": 240,
        "isGeneric": false,
        "dosage": "600mg"
      },
      {
        "name": "N-Acetyl 600",
        "mfr": "Abbott",
        "price": 260,
        "isGeneric": false,
        "dosage": "600mg"
      }
    ]
  },
  {
    "id": "med-zapiz05",
    "brand": "Zapiz 0.5",
    "generic": "Clonazepam",
    "strength": "0.5mg",
    "form": "Tablet",
    "manufacturer": "Intas Pharmaceuticals",
    "price": 45,
    "unit": "Strip of 15 tablets",
    "category": "Mental Health",
    "uses": "Panic attacks, seizure prevention, restless legs syndrome, acute anxiety states",
    "sideEffects": "Sedation, ataxia, dizziness, dependency risk with long-term unmonitored use",
    "description": "High-potency benzodiazepine enhancing GABA-A inhibitory neurotransmission.",
    "alternatives": [
      {
        "name": "Generic Clonazepam 0.5mg",
        "mfr": "Jan Aushadhi / BPPI",
        "price": 8,
        "isGeneric": true,
        "dosage": "0.5mg"
      },
      {
        "name": "Clonafit 0.5",
        "mfr": "Mankind Pharma",
        "price": 38,
        "isGeneric": false,
        "dosage": "0.5mg"
      },
      {
        "name": "Rivotril 0.5",
        "mfr": "Abbott",
        "price": 58,
        "isGeneric": false,
        "dosage": "0.5mg"
      },
      {
        "name": "Epitril 0.5",
        "mfr": "Novartis",
        "price": 42,
        "isGeneric": false,
        "dosage": "0.5mg"
      }
    ]
  },
  {
    "id": "med-daxid50",
    "brand": "Daxid 50",
    "generic": "Sertraline Hydrochloride",
    "strength": "50mg",
    "form": "Tablet",
    "manufacturer": "Pfizer India",
    "price": 125,
    "unit": "Strip of 10 tablets",
    "category": "Mental Health",
    "uses": "Major depressive disorder, obsessive-compulsive disorder (OCD), social anxiety, PTSD",
    "sideEffects": "Nausea, insomnia, sexual dysfunction, mild tremors",
    "description": "Selective serotonin reuptake inhibitor (SSRI) with favorable cardiac safety profile.",
    "alternatives": [
      {
        "name": "Generic Sertraline 50mg",
        "mfr": "Jan Aushadhi / BPPI",
        "price": 22,
        "isGeneric": true,
        "dosage": "50mg"
      },
      {
        "name": "Sertima 50",
        "mfr": "Intas Pharmaceuticals",
        "price": 98,
        "isGeneric": false,
        "dosage": "50mg"
      },
      {
        "name": "Zosert 50",
        "mfr": "Sun Pharma",
        "price": 105,
        "isGeneric": false,
        "dosage": "50mg"
      }
    ]
  },
  {
    "id": "med-tryptomer10",
    "brand": "Tryptomer 10",
    "generic": "Amitriptyline Hydrochloride",
    "strength": "10mg",
    "form": "Tablet",
    "manufacturer": "Wockhardt Limited",
    "price": 32,
    "unit": "Strip of 30 tablets",
    "category": "Mental Health",
    "uses": "Neuropathic pain, migraine prophylaxis, fibromyalgia, tension headache, sleep maintenance",
    "sideEffects": "Dry mouth, morning grogginess, constipation, slight weight gain",
    "description": "Tricyclic compound used in low doses as a first-line neuromodulator for chronic pain.",
    "alternatives": [
      {
        "name": "Generic Amitriptyline 10mg",
        "mfr": "Jan Aushadhi / BPPI",
        "price": 6.5,
        "isGeneric": true,
        "dosage": "10mg"
      },
      {
        "name": "Amitone 10",
        "mfr": "Intas Pharmaceuticals",
        "price": 26,
        "isGeneric": false,
        "dosage": "10mg"
      },
      {
        "name": "Elavil 10",
        "mfr": "Sun Pharma",
        "price": 28,
        "isGeneric": false,
        "dosage": "10mg"
      }
    ]
  },
  {
    "id": "med-tryptomer25",
    "brand": "Tryptomer 25",
    "generic": "Amitriptyline Hydrochloride",
    "strength": "25mg",
    "form": "Tablet",
    "manufacturer": "Wockhardt Limited",
    "price": 48,
    "unit": "Strip of 30 tablets",
    "category": "Mental Health",
    "uses": "Depression, severe nocturnal neuropathic burning pain, post-herpetic neuralgia",
    "sideEffects": "Sedation, blurred vision, dry mouth, urinary retention risk in elderly",
    "description": "Standard dose tricyclic antidepressant modulating serotonergic and noradrenergic pain pathways.",
    "alternatives": [
      {
        "name": "Generic Amitriptyline 25mg",
        "mfr": "Jan Aushadhi / BPPI",
        "price": 9,
        "isGeneric": true,
        "dosage": "25mg"
      },
      {
        "name": "Amitone 25",
        "mfr": "Intas Pharmaceuticals",
        "price": 38,
        "isGeneric": false,
        "dosage": "25mg"
      },
      {
        "name": "Sarotex 25",
        "mfr": "Lundbeck",
        "price": 55,
        "isGeneric": false,
        "dosage": "25mg"
      }
    ]
  },
  {
    "id": "med-duzela20",
    "brand": "Duzela 20",
    "generic": "Duloxetine",
    "strength": "20mg",
    "form": "Capsule",
    "manufacturer": "Sun Pharmaceuticals",
    "price": 155,
    "unit": "Strip of 10 capsules",
    "category": "Mental Health",
    "uses": "Diabetic peripheral neuropathic pain, generalized anxiety disorder, chronic musculoskeletal pain",
    "sideEffects": "Nausea, dry mouth, insomnia, constipation, sweating",
    "description": "Potent serotonin-norepinephrine reuptake inhibitor (SNRI) for neuropathic pain and mood.",
    "alternatives": [
      {
        "name": "Generic Duloxetine 20mg",
        "mfr": "Jan Aushadhi / BPPI",
        "price": 28,
        "isGeneric": true,
        "dosage": "20mg"
      },
      {
        "name": "Duline 20",
        "mfr": "Torrent Pharmaceuticals",
        "price": 135,
        "isGeneric": false,
        "dosage": "20mg"
      },
      {
        "name": "Cymbalta 20",
        "mfr": "Eli Lilly",
        "price": 280,
        "isGeneric": false,
        "dosage": "20mg"
      }
    ]
  },
  {
    "id": "med-gabapin300",
    "brand": "Gabapin 300",
    "generic": "Gabapentin",
    "strength": "300mg",
    "form": "Capsule",
    "manufacturer": "Intas Pharmaceuticals",
    "price": 180,
    "unit": "Strip of 10 capsules",
    "category": "Mental Health",
    "uses": "Post-herpetic neuralgia, diabetic neuropathy, adjunctive therapy for focal seizures",
    "sideEffects": "Somnolence, dizziness, peripheral edema, coordination difficulties",
    "description": "Voltage-gated calcium channel alpha-2-delta subunit ligand reducing central neuropathic pain sensitization.",
    "alternatives": [
      {
        "name": "Generic Gabapentin 300mg",
        "mfr": "Jan Aushadhi / BPPI",
        "price": 32,
        "isGeneric": true,
        "dosage": "300mg"
      },
      {
        "name": "Neurontin 300",
        "mfr": "Pfizer India",
        "price": 240,
        "isGeneric": false,
        "dosage": "300mg"
      },
      {
        "name": "Gabaneuron 300",
        "mfr": "Aristo",
        "price": 165,
        "isGeneric": false,
        "dosage": "300mg"
      }
    ]
  },
  {
    "id": "med-levipil500",
    "brand": "Levipil 500",
    "generic": "Levetiracetam",
    "strength": "500mg",
    "form": "Tablet",
    "manufacturer": "Sun Pharmaceuticals",
    "price": 145,
    "unit": "Strip of 10 tablets",
    "category": "Mental Health",
    "uses": "Partial onset seizures, myoclonic seizures, generalized tonic-clonic seizures",
    "sideEffects": "Drowsiness, irritability, behavioral changes, fatigue",
    "description": "Broad-spectrum antiepileptic binding to synaptic vesicle protein SV2A with minimal drug-drug interactions.",
    "alternatives": [
      {
        "name": "Generic Levetiracetam 500mg",
        "mfr": "Jan Aushadhi / BPPI",
        "price": 28,
        "isGeneric": true,
        "dosage": "500mg"
      },
      {
        "name": "Torleva 500",
        "mfr": "Torrent Pharmaceuticals",
        "price": 130,
        "isGeneric": false,
        "dosage": "500mg"
      },
      {
        "name": "Keppra 500",
        "mfr": "UCB India",
        "price": 260,
        "isGeneric": false,
        "dosage": "500mg"
      }
    ]
  },
  {
    "id": "med-encorate300",
    "brand": "Encorate Chrono 300",
    "generic": "Sodium Valproate + Valproic Acid",
    "strength": "300mg Controlled Release",
    "form": "Tablet",
    "manufacturer": "Sun Pharmaceuticals",
    "price": 95,
    "unit": "Strip of 10 tablets",
    "category": "Mental Health",
    "uses": "Epilepsy, bipolar affective disorder (manic phase), migraine prevention",
    "sideEffects": "Transient hair thinning, weight gain, nausea, hand tremor",
    "description": "Controlled-release broad spectrum mood stabilizer and anticonvulsant enhancing brain GABA levels.",
    "alternatives": [
      {
        "name": "Generic Sodium Valproate CR 300mg",
        "mfr": "Jan Aushadhi / BPPI",
        "price": 21,
        "isGeneric": true,
        "dosage": "300mg"
      },
      {
        "name": "Epilex Chrono 300",
        "mfr": "Torrent Pharmaceuticals",
        "price": 85,
        "isGeneric": false,
        "dosage": "300mg"
      },
      {
        "name": "Valparin Chrono 300",
        "mfr": "Sanofi India",
        "price": 90,
        "isGeneric": false,
        "dosage": "300mg"
      }
    ]
  },
  {
    "id": "med-vertin16",
    "brand": "Vertin 16",
    "generic": "Betahistine Dihydrochloride",
    "strength": "16mg",
    "form": "Tablet",
    "manufacturer": "Abbott Healthcare",
    "price": 245,
    "unit": "Strip of 15 tablets",
    "category": "Mental Health",
    "uses": "Meniere's disease, vertigo, dizziness, tinnitus (ringing in the ear), balance disorders",
    "sideEffects": "Mild indigestion, nausea, headache",
    "description": "Histamine H1 agonist and H3 antagonist that improves microcirculation in the inner ear labyrinth.",
    "alternatives": [
      {
        "name": "Generic Betahistine 16mg",
        "mfr": "Jan Aushadhi / BPPI",
        "price": 38,
        "isGeneric": true,
        "dosage": "16mg"
      },
      {
        "name": "Betavert 16",
        "mfr": "Sun Pharma",
        "price": 210,
        "isGeneric": false,
        "dosage": "16mg"
      },
      {
        "name": "Emベティン 16",
        "mfr": "Cipla",
        "price": 195,
        "isGeneric": false,
        "dosage": "16mg"
      }
    ]
  },
  {
    "id": "med-urimax04",
    "brand": "Urimax 0.4",
    "generic": "Tamsulosin Hydrochloride",
    "strength": "0.4mg MR",
    "form": "Capsule",
    "manufacturer": "Cipla",
    "price": 260,
    "unit": "Strip of 15 capsules",
    "category": "Kidney & Liver",
    "uses": "Benign Prostatic Hyperplasia (BPH), urinary hesitancy, nighttime frequent urination, kidney stone passage",
    "sideEffects": "Dizziness, retrograde ejaculation, orthostatic hypotension",
    "description": "Selective alpha-1A adrenoreceptor antagonist that relaxes smooth muscles in the prostate and bladder neck.",
    "alternatives": [
      {
        "name": "Generic Tamsulosin 0.4mg",
        "mfr": "Jan Aushadhi / BPPI",
        "price": 35,
        "isGeneric": true,
        "dosage": "0.4mg"
      },
      {
        "name": "Flomax 0.4",
        "mfr": "Boehringer Ingelheim",
        "price": 290,
        "isGeneric": false,
        "dosage": "0.4mg"
      },
      {
        "name": "Contiflo Icon 0.4",
        "mfr": "Sun Pharma",
        "price": 235,
        "isGeneric": false,
        "dosage": "0.4mg"
      },
      {
        "name": "Veltam 0.4",
        "mfr": "Intas Pharmaceuticals",
        "price": 220,
        "isGeneric": false,
        "dosage": "0.4mg"
      }
    ]
  },
  {
    "id": "med-silodal8",
    "brand": "Silodal 8",
    "generic": "Silodosin",
    "strength": "8mg",
    "form": "Capsule",
    "manufacturer": "Sun Pharmaceuticals",
    "price": 340,
    "unit": "Strip of 10 capsules",
    "category": "Kidney & Liver",
    "uses": "Enlarged prostate urinary symptoms with minimal drop in blood pressure",
    "sideEffects": "Retrograde ejaculation, nasal congestion, dizziness",
    "description": "Highly uroselective alpha-1A blocker with 162-fold selectivity over alpha-1B vascular receptors.",
    "alternatives": [
      {
        "name": "Generic Silodosin 8mg",
        "mfr": "Jan Aushadhi / BPPI",
        "price": 55,
        "isGeneric": true,
        "dosage": "8mg"
      },
      {
        "name": "Sildoo 8",
        "mfr": "Cipla",
        "price": 310,
        "isGeneric": false,
        "dosage": "8mg"
      },
      {
        "name": "Silofast 8",
        "mfr": "Lupin Ltd",
        "price": 300,
        "isGeneric": false,
        "dosage": "8mg"
      }
    ]
  },
  {
    "id": "med-fincar5",
    "brand": "Fincar 5",
    "generic": "Finasteride",
    "strength": "5mg",
    "form": "Tablet",
    "manufacturer": "Cipla",
    "price": 195,
    "unit": "Strip of 10 tablets",
    "category": "Kidney & Liver",
    "uses": "Long-term reduction in prostate size in BPH, preventing urinary retention surgery",
    "sideEffects": "Decreased libido, erectile dysfunction (reversible), gynecomastia",
    "description": "Type II 5-alpha reductase inhibitor that blocks conversion of testosterone to dihydrotestosterone (DHT).",
    "alternatives": [
      {
        "name": "Generic Finasteride 5mg",
        "mfr": "Jan Aushadhi / BPPI",
        "price": 30,
        "isGeneric": true,
        "dosage": "5mg"
      },
      {
        "name": "Finast 5",
        "mfr": "Dr. Reddy's",
        "price": 175,
        "isGeneric": false,
        "dosage": "5mg"
      },
      {
        "name": "Proscar 5",
        "mfr": "MSD India",
        "price": 260,
        "isGeneric": false,
        "dosage": "5mg"
      }
    ]
  },
  {
    "id": "med-primolut-n",
    "brand": "Primolut-N",
    "generic": "Norethisterone",
    "strength": "5mg",
    "form": "Tablet",
    "manufacturer": "Zydus Healthcare",
    "price": 88,
    "unit": "Strip of 10 tablets",
    "category": "Mental Health",
    "uses": "Heavy menstrual bleeding, endometriosis, irregular periods, postponing menstruation",
    "sideEffects": "Breast tenderness, headache, nausea, mild fluid retention",
    "description": "Synthetic progestogen that maintains the uterine secretory endometrium.",
    "alternatives": [
      {
        "name": "Generic Norethisterone 5mg",
        "mfr": "Jan Aushadhi / BPPI",
        "price": 16,
        "isGeneric": true,
        "dosage": "5mg"
      },
      {
        "name": "Regestrone 5",
        "mfr": "Novartis",
        "price": 78,
        "isGeneric": false,
        "dosage": "5mg"
      },
      {
        "name": "Dub 5",
        "mfr": "Sun Pharma",
        "price": 72,
        "isGeneric": false,
        "dosage": "5mg"
      }
    ]
  },
  {
    "id": "med-deviry10",
    "brand": "Deviry 10",
    "generic": "Medroxyprogesterone Acetate",
    "strength": "10mg",
    "form": "Tablet",
    "manufacturer": "Torrent Pharmaceuticals",
    "price": 92,
    "unit": "Strip of 10 tablets",
    "category": "Mental Health",
    "uses": "Secondary amenorrhea, abnormal uterine bleeding, hormonal replacement therapy adjunct",
    "sideEffects": "Weight fluctuation, mood changes, acne, breakthrough spotting",
    "description": "Progestin that transforms proliferative endometrium into secretory phase.",
    "alternatives": [
      {
        "name": "Generic Medroxyprogesterone 10mg",
        "mfr": "Jan Aushadhi / BPPI",
        "price": 18,
        "isGeneric": true,
        "dosage": "10mg"
      },
      {
        "name": "Meprate 10",
        "mfr": "Serum Institute",
        "price": 82,
        "isGeneric": false,
        "dosage": "10mg"
      },
      {
        "name": "Provera 10",
        "mfr": "Pfizer India",
        "price": 110,
        "isGeneric": false,
        "dosage": "10mg"
      }
    ]
  },
  {
    "id": "med-orofer-xt",
    "brand": "Orofer XT",
    "generic": "Ferrous Ascorbate + Folic Acid",
    "strength": "100mg Iron + 1.5mg Folic Acid",
    "form": "Tablet",
    "manufacturer": "Emcure Pharmaceuticals",
    "price": 185,
    "unit": "Strip of 10 tablets",
    "category": "Vitamins & Supplements",
    "uses": "Iron deficiency anemia, pregnancy-induced anemia, nutritional weakness, blood loss recovery",
    "sideEffects": "Dark colored stools (normal), mild constipation or nausea",
    "description": "Synthetic chelate offering superior elemental iron absorption with significantly reduced gastrointestinal irritation.",
    "alternatives": [
      {
        "name": "Generic Ferrous Ascorbate + Folic Acid",
        "mfr": "Jan Aushadhi / BPPI",
        "price": 28,
        "isGeneric": true,
        "dosage": "100mg + 1.5mg"
      },
      {
        "name": "Chericof XT",
        "mfr": "Sun Pharma",
        "price": 160,
        "isGeneric": false,
        "dosage": "100mg + 1.5mg"
      },
      {
        "name": "Livogen XT",
        "mfr": "Merck / P&G",
        "price": 172,
        "isGeneric": false,
        "dosage": "100mg + 1.5mg"
      },
      {
        "name": "Autrin",
        "mfr": "Pfizer India",
        "price": 155,
        "isGeneric": false,
        "dosage": "Iron + Folic"
      }
    ]
  },
  {
    "id": "med-zincovit",
    "brand": "Zincovit",
    "generic": "Multivitamin + Multimineral with Zinc & Grape Seed Extract",
    "strength": "Therapeutic Zinc + B-Complex + Antioxidants",
    "form": "Tablet",
    "manufacturer": "Apex Laboratories",
    "price": 115,
    "unit": "Strip of 15 tablets",
    "category": "Vitamins & Supplements",
    "uses": "Immune system boosting, recovery after illness, wound healing, nutritional deficiencies",
    "sideEffects": "Rare mild stomach upset if taken on an empty stomach",
    "description": "Comprehensive daily micronutrient supplement rich in elemental zinc (22.5mg) and vitamins A, C, E, and B-complex.",
    "alternatives": [
      {
        "name": "Generic Multivitamin + Zinc",
        "mfr": "Jan Aushadhi / BPPI",
        "price": 22,
        "isGeneric": true,
        "dosage": "Standard therapeutic"
      },
      {
        "name": "Supradyn Daily",
        "mfr": "Bayer Pharmaceuticals",
        "price": 65,
        "isGeneric": false,
        "dosage": "Multivitamin + Minerals"
      },
      {
        "name": "A-Z Multivitamin",
        "mfr": "Alkem Laboratories",
        "price": 98,
        "isGeneric": false,
        "dosage": "Antioxidants + Minerals"
      }
    ]
  },
  {
    "id": "med-folvite5",
    "brand": "Folvite 5",
    "generic": "Folic Acid (Vitamin B9)",
    "strength": "5mg",
    "form": "Tablet",
    "manufacturer": "Pfizer India",
    "price": 45,
    "unit": "Strip of 45 tablets",
    "category": "Vitamins & Supplements",
    "uses": "Megaloblastic anemia, neural tube defect prevention in pregnancy, methotrexate toxicity reduction",
    "sideEffects": "Generally very well tolerated, rare mild abdominal distension",
    "description": "Pure water-soluble vitamin B9 necessary for rapid DNA synthesis and red blood cell maturation.",
    "alternatives": [
      {
        "name": "Generic Folic Acid 5mg",
        "mfr": "Jan Aushadhi / BPPI",
        "price": 6,
        "isGeneric": true,
        "dosage": "5mg"
      },
      {
        "name": "Folitas 5",
        "mfr": "Intas Pharmaceuticals",
        "price": 38,
        "isGeneric": false,
        "dosage": "5mg"
      },
      {
        "name": "Folichem 5",
        "mfr": "Alkem",
        "price": 35,
        "isGeneric": false,
        "dosage": "5mg"
      }
    ]
  },
  {
    "id": "med-limcee500",
    "brand": "Limcee 500",
    "generic": "Vitamin C (Ascorbic Acid + Sodium Ascorbate)",
    "strength": "500mg",
    "form": "Chewable Tablet",
    "manufacturer": "Abbott Healthcare",
    "price": 28,
    "unit": "Strip of 15 chewable tablets",
    "category": "Vitamins & Supplements",
    "uses": "Immune defense, collagen synthesis, scurvy treatment, wound and skin healing",
    "sideEffects": "Diarrhea or loose stools if taken in huge excess",
    "description": "Delicious orange-flavored chewable vitamin C providing vital cellular antioxidant protection.",
    "alternatives": [
      {
        "name": "Generic Vitamin C 500mg Chewable",
        "mfr": "Jan Aushadhi / BPPI",
        "price": 6.5,
        "isGeneric": true,
        "dosage": "500mg"
      },
      {
        "name": "Celin 500",
        "mfr": "GSK",
        "price": 32,
        "isGeneric": false,
        "dosage": "500mg"
      },
      {
        "name": "Suckcee 500",
        "mfr": "Mankind Pharma",
        "price": 24,
        "isGeneric": false,
        "dosage": "500mg"
      }
    ]
  },
  {
    "id": "med-evion400",
    "brand": "Evion 400",
    "generic": "Vitamin E (Tocopheryl Acetate)",
    "strength": "400mg",
    "form": "Softgel Capsule",
    "manufacturer": "Procter & Gamble Health",
    "price": 42,
    "unit": "Strip of 10 capsules",
    "category": "Vitamins & Supplements",
    "uses": "Skin and hair nourishment, muscle cramps, nocturnal leg cramps, antioxidant cellular protection",
    "sideEffects": "Mild nausea, headache, bleeding risk with high doses combined with blood thinners",
    "description": "Fat-soluble antioxidant that protects cell membrane polyunsaturated fatty acids from lipid peroxidation.",
    "alternatives": [
      {
        "name": "Generic Vitamin E 400mg",
        "mfr": "Jan Aushadhi / BPPI",
        "price": 10,
        "isGeneric": true,
        "dosage": "400mg"
      },
      {
        "name": "E-Viton 400",
        "mfr": "Cipla",
        "price": 38,
        "isGeneric": false,
        "dosage": "400mg"
      },
      {
        "name": "Covite 400",
        "mfr": "Sun Pharma",
        "price": 36,
        "isGeneric": false,
        "dosage": "400mg"
      }
    ]
  },
  {
    "id": "med-cheston-cold",
    "brand": "Cheston Cold",
    "generic": "Cetirizine + Paracetamol + Phenylephrine",
    "strength": "5mg + 325mg + 10mg",
    "form": "Tablet",
    "manufacturer": "Cipla Ltd",
    "price": 45,
    "unit": "Strip of 10 tablets",
    "category": "Respiratory & Allergy",
    "uses": "Common cold, nasal congestion, runny nose, sneezing, fever, body aches and sinus headache",
    "sideEffects": "Mild drowsiness, dry mouth, nausea, dizziness",
    "description": "Triple-combination cold formulation with antihistamine, decongestant and antipyretic relief.",
    "alternatives": [
      {
        "name": "Generic Cetirizine + Paracetamol + Phenylephrine",
        "mfr": "Jan Aushadhi / BPPI",
        "price": 12,
        "isGeneric": true,
        "dosage": "5mg + 325mg + 10mg"
      },
      {
        "name": "Okacet Cold",
        "mfr": "Cipla",
        "price": 42,
        "isGeneric": false,
        "dosage": "5mg + 325mg + 10mg"
      },
      {
        "name": "Coldact",
        "mfr": "Sun Pharma",
        "price": 48,
        "isGeneric": false,
        "dosage": "5mg + 325mg + 10mg"
      }
    ]
  },
  {
    "id": "med-sinarest",
    "brand": "Sinarest",
    "generic": "Paracetamol + Phenylephrine + Chlorpheniramine",
    "strength": "500mg + 10mg + 2mg",
    "form": "Tablet",
    "manufacturer": "Centaur Pharmaceuticals",
    "price": 68,
    "unit": "Strip of 10 tablets",
    "category": "Respiratory & Allergy",
    "uses": "Relief from sinus congestion, cold, headache, nasal blockage and feverishness",
    "sideEffects": "Drowsiness, restlessness, dry throat",
    "description": "Popular Indian household cold remedy providing rapid relief from sinus pressure and seasonal flu.",
    "alternatives": [
      {
        "name": "Generic Sinus & Cold Relief Tablet",
        "mfr": "Jan Aushadhi / BPPI",
        "price": 14,
        "isGeneric": true,
        "dosage": "500mg + 10mg + 2mg"
      },
      {
        "name": "Wikoryl",
        "mfr": "Alembic Pharmaceuticals",
        "price": 58,
        "isGeneric": false,
        "dosage": "500mg + 10mg + 2mg"
      },
      {
        "name": "Solvin Cold",
        "mfr": "Ipca Laboratories",
        "price": 62,
        "isGeneric": false,
        "dosage": "500mg + 10mg + 2mg"
      }
    ]
  },
  {
    "id": "med-ascoril-d",
    "brand": "Ascoril D Plus",
    "generic": "Dextromethorphan + Chlorpheniramine + Phenylephrine",
    "strength": "10mg + 2mg + 5mg / 5ml",
    "form": "Syrup",
    "manufacturer": "Glenmark Pharmaceuticals",
    "price": 135,
    "unit": "100ml Bottle",
    "category": "Respiratory & Allergy",
    "uses": "Dry, tickly, irritating non-productive cough, allergic throat irritation, nasal congestion",
    "sideEffects": "Mild sedation, dizziness, dry mouth, nausea",
    "description": "Centrally-acting antitussive combined with antihistamine and decongestant for dry cough episodes.",
    "alternatives": [
      {
        "name": "Generic Dry Cough Linctus (DXM + CPM)",
        "mfr": "Jan Aushadhi / BPPI",
        "price": 28,
        "isGeneric": true,
        "dosage": "100ml Syrup"
      },
      {
        "name": "Alex Cough Syrup",
        "mfr": "Glenmark Pharmaceuticals",
        "price": 128,
        "isGeneric": false,
        "dosage": "100ml Syrup"
      },
      {
        "name": "Benadryl DR",
        "mfr": "Johnson & Johnson",
        "price": 140,
        "isGeneric": false,
        "dosage": "100ml Syrup"
      }
    ]
  },
  {
    "id": "med-ascoril-ls",
    "brand": "Ascoril LS",
    "generic": "Levosalbutamol + Ambroxol + Guaiphenesin",
    "strength": "1mg + 30mg + 50mg / 5ml",
    "form": "Syrup",
    "manufacturer": "Glenmark Pharmaceuticals",
    "price": 125,
    "unit": "100ml Bottle",
    "category": "Respiratory & Allergy",
    "uses": "Productive wet chesty cough with thick phlegm, acute bronchitis, bronchial asthma",
    "sideEffects": "Tremors, palpitations, nausea, diarrhea",
    "description": "Triple-action bronchodilator, mucolytic and expectorant that liquefies thick bronchial mucus.",
    "alternatives": [
      {
        "name": "Generic Expectorant LS (Levosalbutamol + Ambroxol + Guaiphenesin)",
        "mfr": "Jan Aushadhi / BPPI",
        "price": 26,
        "isGeneric": true,
        "dosage": "100ml Syrup"
      },
      {
        "name": "Bro-Zedex LS",
        "mfr": "Wockhardt Ltd",
        "price": 118,
        "isGeneric": false,
        "dosage": "100ml Syrup"
      },
      {
        "name": "Macbery LS",
        "mfr": "Macleods Pharma",
        "price": 110,
        "isGeneric": false,
        "dosage": "100ml Syrup"
      }
    ]
  },
  {
    "id": "med-otrivin",
    "brand": "Otrivin Adult Nasal Spray",
    "generic": "Xylometazoline Hydrochloride",
    "strength": "0.1% w/v",
    "form": "Nasal Spray",
    "manufacturer": "GSK Consumer Healthcare",
    "price": 110,
    "unit": "10ml Spray Bottle",
    "category": "Respiratory & Allergy",
    "uses": "Rapid nasal blockage relief from common cold, perennial allergic rhinitis, sinusitis",
    "sideEffects": "Nasal stinging, dryness, rebound congestion if used >5 consecutive days",
    "description": "Fast-acting topical nasal vasoconstrictor that clears blocked nasal passages within 2 minutes.",
    "alternatives": [
      {
        "name": "Generic Xylometazoline 0.1% Nasal Drops",
        "mfr": "Jan Aushadhi / BPPI",
        "price": 22,
        "isGeneric": true,
        "dosage": "10ml Spray"
      },
      {
        "name": "Nasivion Classic",
        "mfr": "Procter & Gamble",
        "price": 98,
        "isGeneric": false,
        "dosage": "10ml Spray"
      },
      {
        "name": "Xylomist Adult",
        "mfr": "German Remedies",
        "price": 85,
        "isGeneric": false,
        "dosage": "10ml Spray"
      }
    ]
  },
  {
    "id": "med-strepsils",
    "brand": "Strepsils Sore Throat Lozenges",
    "generic": "Dichlorobenzyl Alcohol + Amylmetacresol",
    "strength": "1.2mg + 0.6mg",
    "form": "Lozenge",
    "manufacturer": "Reckitt Benckiser",
    "price": 40,
    "unit": "Pack of 8 lozenges",
    "category": "Respiratory & Allergy",
    "uses": "Sore throat, pharyngitis, mouth and throat bacterial discomfort",
    "sideEffects": "Mild tongue irritation, altered taste",
    "description": "Antiseptic throat lozenge delivering dual microbicidal active ingredients to soothe painful throat infections.",
    "alternatives": [
      {
        "name": "Generic Antiseptic Throat Lozenges",
        "mfr": "Jan Aushadhi / BPPI",
        "price": 10,
        "isGeneric": true,
        "dosage": "Pack of 8 lozenges"
      },
      {
        "name": "Cofsils",
        "mfr": "Cipla Ltd",
        "price": 32,
        "isGeneric": false,
        "dosage": "Pack of 8 lozenges"
      },
      {
        "name": "Vicks VapoDrops",
        "mfr": "Procter & Gamble",
        "price": 25,
        "isGeneric": false,
        "dosage": "Pack of 8 lozenges"
      }
    ]
  },
  {
    "id": "med-emeset4",
    "brand": "Emeset 4",
    "generic": "Ondansetron",
    "strength": "4mg",
    "form": "Tablet",
    "manufacturer": "Cipla Ltd",
    "price": 45,
    "unit": "Strip of 10 tablets",
    "category": "Gastric & Digestion",
    "uses": "Prevention and management of nausea and vomiting from gastroenteritis, food poisoning, post-surgery",
    "sideEffects": "Headache, constipation, sensation of flushing/warmth",
    "description": "Potent 5-HT3 receptor antagonist that blocks serotonin signals triggering the brain vomiting center.",
    "alternatives": [
      {
        "name": "Generic Ondansetron 4mg MD",
        "mfr": "Jan Aushadhi / BPPI",
        "price": 9.5,
        "isGeneric": true,
        "dosage": "4mg"
      },
      {
        "name": "Zofran 4mg",
        "mfr": "GlaxoSmithKline",
        "price": 58,
        "isGeneric": false,
        "dosage": "4mg"
      },
      {
        "name": "Ondem 4",
        "mfr": "Alkem Laboratories",
        "price": 42,
        "isGeneric": false,
        "dosage": "4mg"
      }
    ]
  },
  {
    "id": "med-vomistop",
    "brand": "Vomistop 10",
    "generic": "Domperidone",
    "strength": "10mg",
    "form": "Tablet",
    "manufacturer": "Cipla Ltd",
    "price": 38,
    "unit": "Strip of 10 tablets",
    "category": "Gastric & Digestion",
    "uses": "Indigestion, bloating, upper abdominal fullness, nausea associated with acid reflux",
    "sideEffects": "Dry mouth, mild abdominal cramps, headache",
    "description": "Prokinetic dopamine-receptor antagonist accelerating gastric emptying and reducing regurgitation.",
    "alternatives": [
      {
        "name": "Generic Domperidone 10mg Tablet",
        "mfr": "Jan Aushadhi / BPPI",
        "price": 7,
        "isGeneric": true,
        "dosage": "10mg"
      },
      {
        "name": "Domstal 10",
        "mfr": "Torrent Pharmaceuticals",
        "price": 42,
        "isGeneric": false,
        "dosage": "10mg"
      },
      {
        "name": "Motilium 10",
        "mfr": "Johnson & Johnson",
        "price": 48,
        "isGeneric": false,
        "dosage": "10mg"
      }
    ]
  },
  {
    "id": "med-eldoper",
    "brand": "Eldoper 2mg",
    "generic": "Loperamide Hydrochloride",
    "strength": "2mg",
    "form": "Capsule",
    "manufacturer": "Micro Labs Ltd",
    "price": 28,
    "unit": "Strip of 10 capsules",
    "category": "Gastric & Digestion",
    "uses": "Acute non-infectious loose stools, travelers diarrhea, irritable bowel diarrhea control",
    "sideEffects": "Constipation, abdominal distension, dizziness",
    "description": "Antidiarrheal agent that slows intestinal motility, allowing greater water reabsorption in the colon.",
    "alternatives": [
      {
        "name": "Generic Loperamide 2mg Capsule",
        "mfr": "Jan Aushadhi / BPPI",
        "price": 6,
        "isGeneric": true,
        "dosage": "2mg"
      },
      {
        "name": "Imodium 2mg",
        "mfr": "Johnson & Johnson",
        "price": 42,
        "isGeneric": false,
        "dosage": "2mg"
      },
      {
        "name": "Lopamide 2",
        "mfr": "Torrent Pharmaceuticals",
        "price": 26,
        "isGeneric": false,
        "dosage": "2mg"
      }
    ]
  },
  {
    "id": "med-electral-ors",
    "brand": "Electral ORS",
    "generic": "Oral Rehydration Salts (WHO Formula)",
    "strength": "21.8g Sachet",
    "form": "Powder Sachet",
    "manufacturer": "FDC Ltd",
    "price": 22,
    "unit": "21.8g Sachet for 1 Liter Water",
    "category": "Gastric & Digestion",
    "uses": "Dehydration, acute diarrheal fluid loss, heat exhaustion, cholera rehydration",
    "sideEffects": "None when mixed with correct 1 liter ratio of clean drinking water",
    "description": "Gold-standard WHO oral rehydration salt with optimal sodium, potassium, chloride and glucose ratio.",
    "alternatives": [
      {
        "name": "Generic Oral Rehydration Salts IP (WHO)",
        "mfr": "Jan Aushadhi / BPPI",
        "price": 5,
        "isGeneric": true,
        "dosage": "21.8g Sachet"
      },
      {
        "name": "Prolyte ORS",
        "mfr": "Cipla Ltd",
        "price": 22,
        "isGeneric": false,
        "dosage": "21.8g Sachet"
      },
      {
        "name": "Walyte ORS",
        "mfr": "Wallace Pharma",
        "price": 20,
        "isGeneric": false,
        "dosage": "21.8g Sachet"
      }
    ]
  },
  {
    "id": "med-econorm",
    "brand": "Econorm 250mg",
    "generic": "Saccharomyces Boulardii",
    "strength": "250mg",
    "form": "Sachet",
    "manufacturer": "Dr. Reddy's Laboratories",
    "price": 52,
    "unit": "Pack of 1 Sachet",
    "category": "Gastric & Digestion",
    "uses": "Antibiotic-associated diarrhea, acute rotaviral gastroenteritis, restores healthy gut microbiome",
    "sideEffects": "Mild flatulence, bloating initially",
    "description": "Therapeutic probiotic yeast naturally resistant to antibiotics, preventing intestinal dysbiosis.",
    "alternatives": [
      {
        "name": "Generic Saccharomyces Boulardii 250mg",
        "mfr": "Jan Aushadhi / BPPI",
        "price": 12,
        "isGeneric": true,
        "dosage": "250mg"
      },
      {
        "name": "Darolac Sachet",
        "mfr": "Aristo Pharmaceuticals",
        "price": 44,
        "isGeneric": false,
        "dosage": "250mg"
      },
      {
        "name": "Gutpro Sachet",
        "mfr": "Ipca Laboratories",
        "price": 40,
        "isGeneric": false,
        "dosage": "250mg"
      }
    ]
  },
  {
    "id": "med-dulcolax",
    "brand": "Dulcolax 5mg",
    "generic": "Bisacodyl",
    "strength": "5mg",
    "form": "Tablet",
    "manufacturer": "Sanofi India",
    "price": 15,
    "unit": "Strip of 10 tablets",
    "category": "Gastric & Digestion",
    "uses": "Short-term constipation relief, post-surgical colon cleansing, bedridden elderly bowel regularity",
    "sideEffects": "Abdominal griping cramps, mild nausea",
    "description": "Stimulant laxative acting directly on colon mucosal nerves to stimulate bowel peristalsis in 6-8 hours.",
    "alternatives": [
      {
        "name": "Generic Bisacodyl 5mg Tablet",
        "mfr": "Jan Aushadhi / BPPI",
        "price": 3.5,
        "isGeneric": true,
        "dosage": "5mg"
      },
      {
        "name": "Julax 5",
        "mfr": "Cipla Ltd",
        "price": 14,
        "isGeneric": false,
        "dosage": "5mg"
      },
      {
        "name": "Gerbisa 5",
        "mfr": "Zydus Cadila",
        "price": 13,
        "isGeneric": false,
        "dosage": "5mg"
      }
    ]
  },
  {
    "id": "med-zytee-gel",
    "brand": "Zytee RB Gel",
    "generic": "Choline Salicylate + Benzalkonium Chloride",
    "strength": "9% w/w + 0.02% w/w",
    "form": "Oral Gel",
    "manufacturer": "Raptakos Brett & Co",
    "price": 110,
    "unit": "10g Tube",
    "category": "Pain & Fever",
    "uses": "Painful mouth ulcers (aphthous stomatitis), denture irritation, tongue sores, cheek bite inflammation",
    "sideEffects": "Temporary tingling or burning sensation upon initial application",
    "description": "Topical analgesic, anti-inflammatory and antiseptic mouth gel providing quick relief from chewing discomfort.",
    "alternatives": [
      {
        "name": "Generic Choline Salicylate Mouth Ulcer Gel",
        "mfr": "Jan Aushadhi / BPPI",
        "price": 24,
        "isGeneric": true,
        "dosage": "10g Tube"
      },
      {
        "name": "Dologel CT",
        "mfr": "Dr. Reddy's Laboratories",
        "price": 95,
        "isGeneric": false,
        "dosage": "10g Tube"
      },
      {
        "name": "Smyle Mouth Ulcer Gel",
        "mfr": "Maneesh Pharmaceuticals",
        "price": 80,
        "isGeneric": false,
        "dosage": "10g Tube"
      }
    ]
  },
  {
    "id": "med-zentel400",
    "brand": "Zentel 400",
    "generic": "Albendazole",
    "strength": "400mg",
    "form": "Chewable Tablet",
    "manufacturer": "GlaxoSmithKline",
    "price": 12,
    "unit": "Single Chewable Tablet",
    "category": "Antibiotics & Infections",
    "uses": "Single-dose deworming against roundworm, hookworm, pinworm, tapeworm and whipworm infections",
    "sideEffects": "Mild abdominal discomfort, headache, transient nausea",
    "description": "Broad-spectrum antihelmintic that impairs microtubule assembly in intestinal worms.",
    "alternatives": [
      {
        "name": "Generic Albendazole 400mg Chewable",
        "mfr": "Jan Aushadhi / BPPI",
        "price": 2.5,
        "isGeneric": true,
        "dosage": "400mg"
      },
      {
        "name": "Bandey 400",
        "mfr": "Mankind Pharma",
        "price": 10,
        "isGeneric": false,
        "dosage": "400mg"
      },
      {
        "name": "Noworm 400",
        "mfr": "Alkem Laboratories",
        "price": 11,
        "isGeneric": false,
        "dosage": "400mg"
      }
    ]
  },
  {
    "id": "med-cifran500",
    "brand": "Cifran 500",
    "generic": "Ciprofloxacin",
    "strength": "500mg",
    "form": "Tablet",
    "manufacturer": "Sun Pharma",
    "price": 48,
    "unit": "Strip of 10 tablets",
    "category": "Antibiotics & Infections",
    "uses": "Urinary tract infections (UTI), infectious bacterial diarrhea, typhoid fever, respiratory infections",
    "sideEffects": "Nausea, diarrhea, tendon pain risk, photosensitivity",
    "description": "Broad-spectrum fluoroquinolone antibiotic targeting DNA gyrase in gram-negative bacteria.",
    "alternatives": [
      {
        "name": "Generic Ciprofloxacin 500mg Tablet",
        "mfr": "Jan Aushadhi / BPPI",
        "price": 14,
        "isGeneric": true,
        "dosage": "500mg"
      },
      {
        "name": "Ciplox 500",
        "mfr": "Cipla Ltd",
        "price": 44,
        "isGeneric": false,
        "dosage": "500mg"
      },
      {
        "name": "Alcipro 500",
        "mfr": "Alkem Laboratories",
        "price": 42,
        "isGeneric": false,
        "dosage": "500mg"
      }
    ]
  },
  {
    "id": "med-norflox400",
    "brand": "Norflox 400",
    "generic": "Norfloxacin",
    "strength": "400mg",
    "form": "Tablet",
    "manufacturer": "Cipla Ltd",
    "price": 65,
    "unit": "Strip of 10 tablets",
    "category": "Antibiotics & Infections",
    "uses": "Uncomplicated urinary tract infections (cystitis, urethritis), acute gastroenteritis",
    "sideEffects": "Mild stomach ache, nausea, bitter taste, headache",
    "description": "Quinolone antibiotic reaching high concentration in the urinary tract to clear bacterial infections.",
    "alternatives": [
      {
        "name": "Generic Norfloxacin 400mg Tablet",
        "mfr": "Jan Aushadhi / BPPI",
        "price": 16,
        "isGeneric": true,
        "dosage": "400mg"
      },
      {
        "name": "Norbactin 400",
        "mfr": "Ranbaxy / Sun Pharma",
        "price": 62,
        "isGeneric": false,
        "dosage": "400mg"
      },
      {
        "name": "Floxip 400",
        "mfr": "Ipca Laboratories",
        "price": 55,
        "isGeneric": false,
        "dosage": "400mg"
      }
    ]
  },
  {
    "id": "med-urispas200",
    "brand": "Urispas 200mg",
    "generic": "Flavoxate Hydrochloride",
    "strength": "200mg",
    "form": "Tablet",
    "manufacturer": "Macleods Pharmaceuticals",
    "price": 145,
    "unit": "Strip of 10 tablets",
    "category": "Kidney & Liver",
    "uses": "Relief of painful urination (dysuria), urinary frequency, urgent bladder spasms in cystitis and UTI",
    "sideEffects": "Dry mouth, blurred vision, drowsiness, nausea",
    "description": "Smooth muscle antispasmodic specifically relaxing bladder wall muscle spasms.",
    "alternatives": [
      {
        "name": "Generic Flavoxate 200mg Tablet",
        "mfr": "Jan Aushadhi / BPPI",
        "price": 32,
        "isGeneric": true,
        "dosage": "200mg"
      },
      {
        "name": "Flavocip 200",
        "mfr": "Cipla Ltd",
        "price": 125,
        "isGeneric": false,
        "dosage": "200mg"
      },
      {
        "name": "Uritone 200",
        "mfr": "Torrent Pharmaceuticals",
        "price": 130,
        "isGeneric": false,
        "dosage": "200mg"
      }
    ]
  },
  {
    "id": "med-saridon",
    "brand": "Saridon",
    "generic": "Paracetamol + Propyphenazone + Caffeine",
    "strength": "250mg + 150mg + 50mg",
    "form": "Tablet",
    "manufacturer": "Bayer Pharmaceuticals",
    "price": 42,
    "unit": "Strip of 10 tablets",
    "category": "Pain & Fever",
    "uses": "Fast-acting relief from tension headache, migraine, toothache, fever and post-stress headache",
    "sideEffects": "Restlessness from caffeine, mild gastric acidity",
    "description": "Synergistic analgesic trio where caffeine accelerates paracetamol absorption for fast headache relief in 15 mins.",
    "alternatives": [
      {
        "name": "Generic Paracetamol + Caffeine Headache Relief",
        "mfr": "Jan Aushadhi / BPPI",
        "price": 11,
        "isGeneric": true,
        "dosage": "Compound Tablet"
      },
      {
        "name": "Dart Tablet",
        "mfr": "Janssen / J&J",
        "price": 38,
        "isGeneric": false,
        "dosage": "Compound Tablet"
      },
      {
        "name": "Anacin",
        "mfr": "GlaxoSmithKline",
        "price": 35,
        "isGeneric": false,
        "dosage": "Compound Tablet"
      }
    ]
  },
  {
    "id": "med-vasograin",
    "brand": "Vasograin",
    "generic": "Ergotamine + Caffeine + Paracetamol + Prochlorperazine",
    "strength": "1mg + 100mg + 250mg + 2.5mg",
    "form": "Tablet",
    "manufacturer": "Cadila Pharmaceuticals",
    "price": 95,
    "unit": "Strip of 14 tablets",
    "category": "Mental Health",
    "uses": "Acute migraine attack relief, prevents throbbing vascular headache and accompanying nausea",
    "sideEffects": "Peripheral numbness, tingling, nausea, dizziness",
    "description": "Specific antimigraine formula constricting cranial blood vessels and relieving migraine nausea.",
    "alternatives": [
      {
        "name": "Generic Migraine Relief Ergotamine Combo",
        "mfr": "Jan Aushadhi / BPPI",
        "price": 24,
        "isGeneric": true,
        "dosage": "Compound Tablet"
      },
      {
        "name": "Migranil",
        "mfr": "Inga Laboratories",
        "price": 85,
        "isGeneric": false,
        "dosage": "Compound Tablet"
      },
      {
        "name": "Headset",
        "mfr": "Torrent Pharmaceuticals",
        "price": 80,
        "isGeneric": false,
        "dosage": "Compound Tablet"
      }
    ]
  },
  {
    "id": "med-stugeron25",
    "brand": "Stugeron 25",
    "generic": "Cinnarizine",
    "strength": "25mg",
    "form": "Tablet",
    "manufacturer": "Johnson & Johnson",
    "price": 185,
    "unit": "Strip of 25 tablets",
    "category": "Mental Health",
    "uses": "Motion sickness (car/air/sea), peripheral vertigo, vestibular spinning dizziness and tinnitus",
    "sideEffects": "Drowsiness, weight gain, dry mouth",
    "description": "Selective calcium-channel blocker inhibiting vestibular overstimulation in the inner ear.",
    "alternatives": [
      {
        "name": "Generic Cinnarizine 25mg Tablet",
        "mfr": "Jan Aushadhi / BPPI",
        "price": 18,
        "isGeneric": true,
        "dosage": "25mg"
      },
      {
        "name": "Vertigon 25",
        "mfr": "Torrent Pharmaceuticals",
        "price": 145,
        "isGeneric": false,
        "dosage": "25mg"
      },
      {
        "name": "Cinzan 25",
        "mfr": "Sun Pharma",
        "price": 155,
        "isGeneric": false,
        "dosage": "25mg"
      }
    ]
  },
  {
    "id": "med-cipladine-oint",
    "brand": "Cipladine 10% Ointment",
    "generic": "Povidone Iodine",
    "strength": "10% w/w",
    "form": "Ointment",
    "manufacturer": "Cipla Ltd",
    "price": 68,
    "unit": "20g Tube",
    "category": "Pain & Fever",
    "uses": "First-aid minor cuts, burns, scrapes, post-operative skin incision antisepsis",
    "sideEffects": "Mild local skin irritation, temporary brown skin staining",
    "description": "Broad-spectrum microbicidal topical ointment releasing free elemental iodine to destroy bacteria and fungi.",
    "alternatives": [
      {
        "name": "Generic Povidone Iodine 10% Ointment",
        "mfr": "Jan Aushadhi / BPPI",
        "price": 16,
        "isGeneric": true,
        "dosage": "20g Tube"
      },
      {
        "name": "Betadine 10% Ointment",
        "mfr": "Win-Medicare",
        "price": 82,
        "isGeneric": false,
        "dosage": "20g Tube"
      },
      {
        "name": "Wokadine 10%",
        "mfr": "Wockhardt Ltd",
        "price": 72,
        "isGeneric": false,
        "dosage": "20g Tube"
      }
    ]
  },
  {
    "id": "med-betnovate-c",
    "brand": "Betnovate-C Cream",
    "generic": "Betamethasone + Clioquinol",
    "strength": "0.1% w/w + 3% w/w",
    "form": "Skin Cream",
    "manufacturer": "GlaxoSmithKline",
    "price": 65,
    "unit": "30g Tube",
    "category": "Pain & Fever",
    "uses": "Inflammatory skin conditions with secondary bacterial/fungal infection, eczema, contact dermatitis",
    "sideEffects": "Skin thinning, local irritation, stretch marks if overused",
    "description": "Potent topical corticosteroid combined with antimicrobial clioquinol for infected eczema and rashes.",
    "alternatives": [
      {
        "name": "Generic Betamethasone + Clioquinol Cream",
        "mfr": "Jan Aushadhi / BPPI",
        "price": 18,
        "isGeneric": true,
        "dosage": "30g Tube"
      },
      {
        "name": "Beclate-C",
        "mfr": "Cipla Ltd",
        "price": 58,
        "isGeneric": false,
        "dosage": "30g Tube"
      },
      {
        "name": "Quadriderm-RF",
        "mfr": "Fulford India",
        "price": 75,
        "isGeneric": false,
        "dosage": "30g Tube"
      }
    ]
  },
  {
    "id": "med-ciplox-eye-drops",
    "brand": "Ciplox Eye/Ear Drops",
    "generic": "Ciprofloxacin",
    "strength": "0.3% w/v",
    "form": "Eye/Ear Drops",
    "manufacturer": "Cipla Ltd",
    "price": 22,
    "unit": "10ml Vial",
    "category": "Antibiotics & Infections",
    "uses": "Bacterial conjunctivitis (pink eye), corneal ulcers, bacterial ear canal discharge (otitis externa)",
    "sideEffects": "Temporary eye stinging, foreign body sensation, bitter taste if drainage into throat",
    "description": "Broad-spectrum antibacterial ocular solution targeting superficial bacterial eye and ear infections.",
    "alternatives": [
      {
        "name": "Generic Ciprofloxacin 0.3% Eye/Ear Drops",
        "mfr": "Jan Aushadhi / BPPI",
        "price": 6,
        "isGeneric": true,
        "dosage": "10ml Drops"
      },
      {
        "name": "Cifran Drops",
        "mfr": "Sun Pharma",
        "price": 20,
        "isGeneric": false,
        "dosage": "10ml Drops"
      },
      {
        "name": "Zoxan Drops",
        "mfr": "FDC Ltd",
        "price": 21,
        "isGeneric": false,
        "dosage": "10ml Drops"
      }
    ]
  },
  {
    "id": "med-refresh-tears",
    "brand": "Refresh Tears",
    "generic": "Carboxymethylcellulose",
    "strength": "0.5% w/v",
    "form": "Eye Drops",
    "manufacturer": "Allergan India",
    "price": 155,
    "unit": "10ml Bottle",
    "category": "Pain & Fever",
    "uses": "Dry eye syndrome, computer screen eye fatigue, burning sensation from AC or wind exposure",
    "sideEffects": "Transient blurred vision immediately following instillation",
    "description": "Lubricating artificial tear solution mimicking natural human tear film for long-lasting ocular moisture.",
    "alternatives": [
      {
        "name": "Generic Carboxymethylcellulose 0.5% Drops",
        "mfr": "Jan Aushadhi / BPPI",
        "price": 28,
        "isGeneric": true,
        "dosage": "10ml Drops"
      },
      {
        "name": "Tears Natural II",
        "mfr": "Alcon Laboratories",
        "price": 145,
        "isGeneric": false,
        "dosage": "10ml Drops"
      },
      {
        "name": "Add Tears",
        "mfr": "Sun Pharma",
        "price": 125,
        "isGeneric": false,
        "dosage": "10ml Drops"
      }
    ]
  },
  {
    "id": "med-soframycin",
    "brand": "Soframycin Skin Cream",
    "generic": "Framycetin Sulphate",
    "strength": "1% w/w",
    "form": "Skin Cream",
    "manufacturer": "Sanofi India",
    "price": 62,
    "unit": "30g Tube",
    "category": "Antibiotics & Infections",
    "uses": "Infected wounds, superficial skin burns, folliculitis, furuncles, cuts and abrasions",
    "sideEffects": "Local burning, allergic contact hypersensitivity",
    "description": "Topical aminoglycoside antibiotic effective against staphylococcal and streptococcal cutaneous infections.",
    "alternatives": [
      {
        "name": "Generic Framycetin Sulphate 1% Cream",
        "mfr": "Jan Aushadhi / BPPI",
        "price": 15,
        "isGeneric": true,
        "dosage": "30g Tube"
      },
      {
        "name": "Framygen Cream",
        "mfr": "Mankind Pharma",
        "price": 48,
        "isGeneric": false,
        "dosage": "30g Tube"
      },
      {
        "name": "Neosporin Ointment",
        "mfr": "GSK Consumer",
        "price": 75,
        "isGeneric": false,
        "dosage": "30g Tube"
      }
    ]
  },
  {
    "id": "med-livogen-adult",
    "brand": "Livogen Adult",
    "generic": "Ferrous Fumarate + Folic Acid",
    "strength": "152mg + 750mcg",
    "form": "Tablet",
    "manufacturer": "Procter & Gamble Health",
    "price": 88,
    "unit": "Strip of 15 tablets",
    "category": "Vitamins & Supplements",
    "uses": "Iron-deficiency nutritional anemia, chronic fatigue, hemoglobin deficiency, pregnancy iron support",
    "sideEffects": "Dark stools, mild constipation, stomach upset",
    "description": "Elemental iron paired with vitamin B9 for red blood cell maturation and hemoglobin synthesis.",
    "alternatives": [
      {
        "name": "Generic Ferrous Fumarate + Folic Acid",
        "mfr": "Jan Aushadhi / BPPI",
        "price": 14,
        "isGeneric": true,
        "dosage": "152mg/750mcg"
      },
      {
        "name": "Fefol",
        "mfr": "GlaxoSmithKline",
        "price": 82,
        "isGeneric": false,
        "dosage": "Compound Tablet"
      },
      {
        "name": "Autrin",
        "mfr": "Pfizer India",
        "price": 92,
        "isGeneric": false,
        "dosage": "Compound Tablet"
      }
    ]
  },
  {
    "id": "med-solvin-cold",
    "brand": "Solvin Cold",
    "generic": "Paracetamol + Phenylephrine + Chlorpheniramine",
    "strength": "500mg + 10mg + 2mg",
    "form": "Tablet",
    "manufacturer": "Ipca Laboratories",
    "price": 62,
    "unit": "Strip of 10 tablets",
    "category": "Respiratory & Allergy",
    "uses": "Sneezing, runny nose, fever, headache, nasal congestion due to common cold",
    "sideEffects": "Drowsiness, dry mouth, mild dizziness",
    "description": "Combination formulation addressing both upper respiratory allergy symptoms and cold-associated headache and fever.",
    "alternatives": [
      {
        "name": "Generic Cold Relief (Para+Phenyl+CPM)",
        "mfr": "Jan Aushadhi / BPPI",
        "price": 14,
        "isGeneric": true,
        "dosage": "500mg+10mg+2mg"
      },
      {
        "name": "Sinarest",
        "mfr": "Centaur Pharma",
        "price": 68,
        "isGeneric": false,
        "dosage": "500mg+10mg+2mg"
      },
      {
        "name": "Wikoryl",
        "mfr": "Alembic Pharma",
        "price": 58,
        "isGeneric": false,
        "dosage": "500mg+10mg+2mg"
      }
    ]
  },
  {
    "id": "med-maxtra-syp",
    "brand": "Maxtra Syrup",
    "generic": "Phenylephrine + Chlorpheniramine",
    "strength": "5mg + 2mg / 5ml",
    "form": "Syrup",
    "manufacturer": "Zuventus Healthcare",
    "price": 98,
    "unit": "60ml Bottle",
    "category": "Respiratory & Allergy",
    "uses": "Nasal congestion, watery eyes, sneezing and allergic rhinitis in children and adults",
    "sideEffects": "Sedation, restlessness, dry throat",
    "description": "Pediatric-friendly decongestant and antihistamine combination without paracetamol for pure allergic congestion.",
    "alternatives": [
      {
        "name": "Generic CPM + Phenylephrine Syrup",
        "mfr": "Jan Aushadhi / BPPI",
        "price": 18,
        "isGeneric": true,
        "dosage": "60ml Syrup"
      },
      {
        "name": "T-Minic Syrup",
        "mfr": "Novartis India",
        "price": 92,
        "isGeneric": false,
        "dosage": "60ml Syrup"
      },
      {
        "name": "Solvin Cold Syrup",
        "mfr": "Ipca Laboratories",
        "price": 85,
        "isGeneric": false,
        "dosage": "60ml Syrup"
      }
    ]
  },
  {
    "id": "med-grilinctus-syp",
    "brand": "Grilinctus Syrup",
    "generic": "Dextromethorphan + Chlorpheniramine + Guaiphenesin + Ammonium Chloride",
    "strength": "5mg + 2.5mg + 50mg + 60mg / 5ml",
    "form": "Syrup",
    "manufacturer": "Franco-Indian Pharmaceuticals",
    "price": 135,
    "unit": "100ml Bottle",
    "category": "Respiratory & Allergy",
    "uses": "Mixed cough, bronchial congestion, throat irritation, dry tickly cough",
    "sideEffects": "Drowsiness, mild nausea, stomach upset",
    "description": "Time-tested Indian cough formula combining antitussive, antihistamine, expectorant and mucolytic actions.",
    "alternatives": [
      {
        "name": "Generic Cough Linctus Compound",
        "mfr": "Jan Aushadhi / BPPI",
        "price": 28,
        "isGeneric": true,
        "dosage": "100ml Syrup"
      },
      {
        "name": "Koflet Syrup",
        "mfr": "Himalaya Wellness",
        "price": 110,
        "isGeneric": false,
        "dosage": "100ml Syrup"
      },
      {
        "name": "Corex-DX",
        "mfr": "Pfizer India",
        "price": 140,
        "isGeneric": false,
        "dosage": "100ml Syrup"
      }
    ]
  },
  {
    "id": "med-benadryl-cough",
    "brand": "Benadryl Cough Formula",
    "generic": "Diphenhydramine + Ammonium Chloride + Sodium Citrate",
    "strength": "14mg + 138mg + 57mg / 5ml",
    "form": "Syrup",
    "manufacturer": "Johnson & Johnson",
    "price": 130,
    "unit": "100ml Bottle",
    "category": "Respiratory & Allergy",
    "uses": "Relief of cough, sore throat tickling, bronchial irritation and post-nasal drip",
    "sideEffects": "Drowsiness, dry mouth, blurred vision",
    "description": "Classic sedative antihistamine cough formula ideal for night-time hacking cough and sleep comfort.",
    "alternatives": [
      {
        "name": "Generic Diphenhydramine Cough Expectorant",
        "mfr": "Jan Aushadhi / BPPI",
        "price": 25,
        "isGeneric": true,
        "dosage": "100ml Syrup"
      },
      {
        "name": "Kuffdryl",
        "mfr": "Cipla Ltd",
        "price": 115,
        "isGeneric": false,
        "dosage": "100ml Syrup"
      },
      {
        "name": "Chericof",
        "mfr": "Sun Pharma",
        "price": 125,
        "isGeneric": false,
        "dosage": "100ml Syrup"
      }
    ]
  },
  {
    "id": "med-alex-syp",
    "brand": "Alex Syrup",
    "generic": "Dextromethorphan + Chlorpheniramine + Phenylephrine",
    "strength": "10mg + 2mg + 5mg / 5ml",
    "form": "Syrup",
    "manufacturer": "Glenmark Pharmaceuticals",
    "price": 128,
    "unit": "100ml Bottle",
    "category": "Respiratory & Allergy",
    "uses": "Dry irritating unproductive cough, allergic bronchitis, throat tickle",
    "sideEffects": "Mild drowsiness, nausea, constipation",
    "description": "Sugar-free non-sedating antitussive syrup suppressing dry bronchial spasms.",
    "alternatives": [
      {
        "name": "Generic Dry Cough Linctus (DXM+CPM)",
        "mfr": "Jan Aushadhi / BPPI",
        "price": 26,
        "isGeneric": true,
        "dosage": "100ml Syrup"
      },
      {
        "name": "Ascoril-D Plus",
        "mfr": "Glenmark",
        "price": 135,
        "isGeneric": false,
        "dosage": "100ml Syrup"
      },
      {
        "name": "Zedex Cough Syrup",
        "mfr": "Wockhardt",
        "price": 120,
        "isGeneric": false,
        "dosage": "100ml Syrup"
      }
    ]
  },
  {
    "id": "med-bro-zedex",
    "brand": "Bro-Zedex",
    "generic": "Terbutaline + Bromhexine + Guaiphenesin + Menthol",
    "strength": "1.25mg + 4mg + 50mg + 2.5mg / 5ml",
    "form": "Syrup",
    "manufacturer": "Wockhardt Ltd",
    "price": 122,
    "unit": "100ml Bottle",
    "category": "Respiratory & Allergy",
    "uses": "Bronchial asthma, chronic bronchitis, wet phlegmy cough, chest congestion",
    "sideEffects": "Tremors, increased heart rate, headache",
    "description": "Expectorant and bronchodilator opening constricted airways while expelling tenacious mucous plugs.",
    "alternatives": [
      {
        "name": "Generic Bronchodilator Expectorant",
        "mfr": "Jan Aushadhi / BPPI",
        "price": 24,
        "isGeneric": true,
        "dosage": "100ml Syrup"
      },
      {
        "name": "Bricarex",
        "mfr": "Novartis India",
        "price": 110,
        "isGeneric": false,
        "dosage": "100ml Syrup"
      },
      {
        "name": "Ascoril Expectorant",
        "mfr": "Glenmark",
        "price": 125,
        "isGeneric": false,
        "dosage": "100ml Syrup"
      }
    ]
  },
  {
    "id": "med-atarax10",
    "brand": "Atarax 10mg",
    "generic": "Hydroxyzine Hydrochloride",
    "strength": "10mg",
    "form": "Tablet",
    "manufacturer": "Dr. Reddy's Laboratories",
    "price": 68,
    "unit": "Strip of 15 tablets",
    "category": "Respiratory & Allergy",
    "uses": "Severe pruritus (itching), anxiety-induced itch, dermatographism, sedation prior to surgery",
    "sideEffects": "Marked drowsiness, dizziness, dry mouth, tiredness",
    "description": "First-generation piperazine antihistamine with central sedative and anti-itch properties.",
    "alternatives": [
      {
        "name": "Generic Hydroxyzine 10mg Tablet",
        "mfr": "Jan Aushadhi / BPPI",
        "price": 15,
        "isGeneric": true,
        "dosage": "10mg"
      },
      {
        "name": "Hicope 10",
        "mfr": "Mankind Pharma",
        "price": 55,
        "isGeneric": false,
        "dosage": "10mg"
      },
      {
        "name": "Hyzocare 10",
        "mfr": "Torrent Pharma",
        "price": 58,
        "isGeneric": false,
        "dosage": "10mg"
      }
    ]
  },
  {
    "id": "med-avil25",
    "brand": "Avil 25mg",
    "generic": "Pheniramine Maleate",
    "strength": "25mg",
    "form": "Tablet",
    "manufacturer": "Sanofi India",
    "price": 18,
    "unit": "Strip of 15 tablets",
    "category": "Respiratory & Allergy",
    "uses": "Acute allergic reactions, drug allergies, insect stings, motion sickness, runny nose",
    "sideEffects": "Drowsiness, dry mouth, blurred vision, urinary hesitation",
    "description": "Classic emergency and travel antihistamine providing reliable and rapid anti-allergic relief.",
    "alternatives": [
      {
        "name": "Generic Pheniramine 25mg Tablet",
        "mfr": "Jan Aushadhi / BPPI",
        "price": 4.5,
        "isGeneric": true,
        "dosage": "25mg"
      },
      {
        "name": "Pheniramine IP 25",
        "mfr": "IDPL",
        "price": 12,
        "isGeneric": true,
        "dosage": "25mg"
      }
    ]
  },
  {
    "id": "med-flomist-spray",
    "brand": "Flomist Nasal Spray",
    "generic": "Fluticasone Propionate",
    "strength": "50mcg / spray",
    "form": "Nasal Spray",
    "manufacturer": "Cipla Ltd",
    "price": 395,
    "unit": "Bottle of 100 Metered Doses",
    "category": "Respiratory & Allergy",
    "uses": "Perennial allergic rhinitis, seasonal hay fever, nasal polyps, chronic sinus inflammation",
    "sideEffects": "Nasal dryness, mild epistaxis (nosebleeds), throat irritation",
    "description": "Topical glucocorticoid nasal spray reducing localized nasal mucous membrane inflammation without systemic steroid absorption.",
    "alternatives": [
      {
        "name": "Generic Fluticasone 50mcg Nasal Spray",
        "mfr": "Jan Aushadhi / BPPI",
        "price": 75,
        "isGeneric": true,
        "dosage": "100 Doses"
      },
      {
        "name": "Flixonase",
        "mfr": "GlaxoSmithKline",
        "price": 420,
        "isGeneric": false,
        "dosage": "100 Doses"
      },
      {
        "name": "FloHale Nasal Spray",
        "mfr": "Sun Pharma",
        "price": 360,
        "isGeneric": false,
        "dosage": "100 Doses"
      }
    ]
  },
  {
    "id": "med-budecort200",
    "brand": "Budecort 200 Inhaler",
    "generic": "Budesonide",
    "strength": "200mcg / puff",
    "form": "Inhaler",
    "manufacturer": "Cipla Ltd",
    "price": 340,
    "unit": "Inhaler of 200 Metered Doses",
    "category": "Respiratory & Allergy",
    "uses": "Maintenance prophylaxis of asthma, chronic obstructive pulmonary disease (COPD)",
    "sideEffects": "Oral thrush (candidiasis), hoarseness of voice, sore throat",
    "description": "Potent inhaled corticosteroid controlling bronchial hyper-reactivity (rinse mouth after inhalation).",
    "alternatives": [
      {
        "name": "Generic Budesonide 200mcg Inhaler",
        "mfr": "Jan Aushadhi / BPPI",
        "price": 68,
        "isGeneric": true,
        "dosage": "200 Doses"
      },
      {
        "name": "Pulmicort 200",
        "mfr": "AstraZeneca",
        "price": 410,
        "isGeneric": false,
        "dosage": "200 Doses"
      },
      {
        "name": "Budamate 200",
        "mfr": "Lupin Ltd",
        "price": 320,
        "isGeneric": false,
        "dosage": "200 Doses"
      }
    ]
  },
  {
    "id": "med-foracort400",
    "brand": "Foracort 400 Inhaler",
    "generic": "Formoterol + Budesonide",
    "strength": "6mcg + 400mcg",
    "form": "Inhaler",
    "manufacturer": "Cipla Ltd",
    "price": 495,
    "unit": "Inhaler of 120 Metered Doses",
    "category": "Respiratory & Allergy",
    "uses": "Moderate to severe persistent asthma, severe COPD, nocturnal wheezing episodes",
    "sideEffects": "Headache, palpitations, oral fungal infection, throat irritation",
    "description": "High-dose combination LABA bronchodilator and inhaled steroid for long-term respiratory stability.",
    "alternatives": [
      {
        "name": "Generic Formoterol + Budesonide 400 Inhaler",
        "mfr": "Jan Aushadhi / BPPI",
        "price": 95,
        "isGeneric": true,
        "dosage": "120 Doses"
      },
      {
        "name": "Symbicort 400",
        "mfr": "AstraZeneca",
        "price": 650,
        "isGeneric": false,
        "dosage": "120 Doses"
      },
      {
        "name": "Budetrol 400",
        "mfr": "Macleods Pharma",
        "price": 440,
        "isGeneric": false,
        "dosage": "120 Doses"
      }
    ]
  },
  {
    "id": "med-duolin-inhaler",
    "brand": "Duolin Inhaler",
    "generic": "Levosalbutamol + Ipratropium Bromide",
    "strength": "50mcg + 20mcg / puff",
    "form": "Inhaler",
    "manufacturer": "Cipla Ltd",
    "price": 360,
    "unit": "Inhaler of 200 Doses",
    "category": "Respiratory & Allergy",
    "uses": "Acute asthma flare-ups, chronic bronchitis, COPD with bronchospasm",
    "sideEffects": "Dry mouth, tremors, palpitations, urinary retention in elderly",
    "description": "Dual anticholinergic and beta-2 agonist bronchodilator relaxing airway smooth muscles through two distinct pathways.",
    "alternatives": [
      {
        "name": "Generic Levosalbutamol + Ipratropium Inhaler",
        "mfr": "Jan Aushadhi / BPPI",
        "price": 72,
        "isGeneric": true,
        "dosage": "200 Doses"
      },
      {
        "name": "Combivent Inhaler",
        "mfr": "Boehringer Ingelheim",
        "price": 420,
        "isGeneric": false,
        "dosage": "200 Doses"
      },
      {
        "name": "Iprazest Inhaler",
        "mfr": "Sun Pharma",
        "price": 330,
        "isGeneric": false,
        "dosage": "200 Doses"
      }
    ]
  },
  {
    "id": "med-mucolite30",
    "brand": "Mucolite 30mg",
    "generic": "Ambroxol Hydrochloride",
    "strength": "30mg",
    "form": "Tablet",
    "manufacturer": "Dr. Reddy's Laboratories",
    "price": 48,
    "unit": "Strip of 10 tablets",
    "category": "Respiratory & Allergy",
    "uses": "Thick phlegm, bronchopulmonary diseases, tracheobronchitis, post-viral chest congestion",
    "sideEffects": "Nausea, mild diarrhea, heartburn",
    "description": "Systemic mucolytic that stimulates pulmonary surfactant production and thins viscous phlegm.",
    "alternatives": [
      {
        "name": "Generic Ambroxol 30mg Tablet",
        "mfr": "Jan Aushadhi / BPPI",
        "price": 8,
        "isGeneric": true,
        "dosage": "30mg"
      },
      {
        "name": "Ambrolite 30",
        "mfr": "Tablets India",
        "price": 42,
        "isGeneric": false,
        "dosage": "30mg"
      },
      {
        "name": "Ambrodil 30",
        "mfr": "Aristo Pharma",
        "price": 38,
        "isGeneric": false,
        "dosage": "30mg"
      }
    ]
  },
  {
    "id": "med-pulmoclear",
    "brand": "Pulmoclear 600mg",
    "generic": "Acetylcysteine",
    "strength": "600mg",
    "form": "Effervescent Tablet",
    "manufacturer": "Fourrts Laboratories",
    "price": 245,
    "unit": "Tube of 10 effervescent tablets",
    "category": "Respiratory & Allergy",
    "uses": "Dissolves dense mucopurulent lung secretions in COPD, cystic fibrosis, post-covid lung recovery",
    "sideEffects": "Stomach upset, sulfurous taste, nausea",
    "description": "High-dose N-acetylcysteine breaking disulfide bonds in mucous while replenishing cellular glutathione antioxidants.",
    "alternatives": [
      {
        "name": "Generic Acetylcysteine 600mg Effervescent",
        "mfr": "Jan Aushadhi / BPPI",
        "price": 45,
        "isGeneric": true,
        "dosage": "600mg"
      },
      {
        "name": "Mucosept 600",
        "mfr": "Cipla Ltd",
        "price": 230,
        "isGeneric": false,
        "dosage": "600mg"
      },
      {
        "name": "Nacfil 600",
        "mfr": "Sun Pharma",
        "price": 220,
        "isGeneric": false,
        "dosage": "600mg"
      }
    ]
  },
  {
    "id": "med-t-minic-drops",
    "brand": "T-Minic Oral Drops",
    "generic": "Phenylephrine + Chlorpheniramine",
    "strength": "2.5mg + 1mg / ml",
    "form": "Oral Drops",
    "manufacturer": "Novartis India",
    "price": 75,
    "unit": "15ml Dropper Bottle",
    "category": "Respiratory & Allergy",
    "uses": "Infant and toddler nasal blockage, allergic sneezing, runny nose, pediatric head cold",
    "sideEffects": "Irritability, mild drowsiness",
    "description": "Gentle calibrated pediatric oral drops for safe decongestion in babies under pediatric supervision.",
    "alternatives": [
      {
        "name": "Generic Pediatric Cold Drops (CPM+Phenyl)",
        "mfr": "Jan Aushadhi / BPPI",
        "price": 16,
        "isGeneric": true,
        "dosage": "15ml Drops"
      },
      {
        "name": "Maxtra Drops",
        "mfr": "Zuventus",
        "price": 72,
        "isGeneric": false,
        "dosage": "15ml Drops"
      },
      {
        "name": "Solvin Cold Drops",
        "mfr": "Ipca",
        "price": 68,
        "isGeneric": false,
        "dosage": "15ml Drops"
      }
    ]
  },
  {
    "id": "med-cofsils-lozenge",
    "brand": "Cofsils Orange Lozenges",
    "generic": "Amylmetacresol + Dichlorobenzyl Alcohol",
    "strength": "0.6mg + 1.2mg",
    "form": "Lozenge",
    "manufacturer": "Cipla Ltd",
    "price": 32,
    "unit": "Strip of 10 lozenges",
    "category": "Respiratory & Allergy",
    "uses": "Sore throat, pharyngeal pain, throat tickling from dry air or air conditioning",
    "sideEffects": "Mild tongue soreness if overused",
    "description": "Pleasant orange-flavored antiseptic lozenge destroying bacterial pathogens in the mouth and throat.",
    "alternatives": [
      {
        "name": "Generic Antiseptic Throat Lozenges",
        "mfr": "Jan Aushadhi / BPPI",
        "price": 10,
        "isGeneric": true,
        "dosage": "Strip of 10"
      },
      {
        "name": "Strepsils Orange",
        "mfr": "Reckitt",
        "price": 45,
        "isGeneric": false,
        "dosage": "Strip of 10"
      },
      {
        "name": "Honitus Lozenges",
        "mfr": "Dabur",
        "price": 30,
        "isGeneric": false,
        "dosage": "Strip of 10"
      }
    ]
  },
  {
    "id": "med-telekast-l",
    "brand": "Telekast-L",
    "generic": "Montelukast + Levocetirizine",
    "strength": "10mg + 5mg",
    "form": "Tablet",
    "manufacturer": "Lupin Ltd",
    "price": 175,
    "unit": "Strip of 10 tablets",
    "category": "Respiratory & Allergy",
    "uses": "Allergic asthma, seasonal allergic rhinitis, nocturnal allergic cough",
    "sideEffects": "Fatigue, dry mouth, headache",
    "description": "Potent dual leukotriene receptor antagonist and antihistamine providing complete 24-hour allergy shielding.",
    "alternatives": [
      {
        "name": "Generic Montelukast + Levocetirizine 10/5",
        "mfr": "Jan Aushadhi / BPPI",
        "price": 18,
        "isGeneric": true,
        "dosage": "10mg+5mg"
      },
      {
        "name": "Montair-LC",
        "mfr": "Cipla Ltd",
        "price": 180,
        "isGeneric": false,
        "dosage": "10mg+5mg"
      },
      {
        "name": "Monticope",
        "mfr": "Mankind Pharma",
        "price": 155,
        "isGeneric": false,
        "dosage": "10mg+5mg"
      }
    ]
  },
  {
    "id": "med-gelusil-mps",
    "brand": "Gelusil MPS Liquid",
    "generic": "Aluminium Hydroxide + Magnesium Hydroxide + Simethicone",
    "strength": "250mg + 250mg + 50mg / 5ml",
    "form": "Syrup",
    "manufacturer": "Pfizer India",
    "price": 145,
    "unit": "200ml Bottle",
    "category": "Gastric & Digestion",
    "uses": "Heartburn, acid indigestion, gas bloating, sour stomach, hyperacidity",
    "sideEffects": "Chalky taste, mild diarrhea or constipation",
    "description": "Dual-antacid suspension with anti-gas simethicone giving immediate soothing relief from stomach acid burning.",
    "alternatives": [
      {
        "name": "Generic Antacid & Antiflatulent Suspension",
        "mfr": "Jan Aushadhi / BPPI",
        "price": 28,
        "isGeneric": true,
        "dosage": "200ml Syrup"
      },
      {
        "name": "Digene Gel",
        "mfr": "Abbott",
        "price": 155,
        "isGeneric": false,
        "dosage": "200ml Syrup"
      },
      {
        "name": "Mucaine Gel",
        "mfr": "Pfizer",
        "price": 165,
        "isGeneric": false,
        "dosage": "200ml Syrup"
      }
    ]
  },
  {
    "id": "med-digene-tabs",
    "brand": "Digene Chewable Tablets",
    "generic": "Dried Aluminium Hydroxide + Magnesium Hydroxide + Simethicone",
    "strength": "300mg + 25mg + 25mg",
    "form": "Chewable Tablet",
    "manufacturer": "Abbott Healthcare",
    "price": 32,
    "unit": "Strip of 15 chewable tablets",
    "category": "Gastric & Digestion",
    "uses": "Acid regurgitation, post-meal bloating, gas discomfort, dyspepsia",
    "sideEffects": "Mild constipation or loose stools if taken excessively",
    "description": "Portable chewable orange/mint antacids neutralizing excess gastric acid on-the-go.",
    "alternatives": [
      {
        "name": "Generic Chewable Antacid Tablets",
        "mfr": "Jan Aushadhi / BPPI",
        "price": 7.5,
        "isGeneric": true,
        "dosage": "Strip of 15"
      },
      {
        "name": "Gelusil Tablets",
        "mfr": "Pfizer",
        "price": 30,
        "isGeneric": false,
        "dosage": "Strip of 15"
      },
      {
        "name": "Gas-O-Fast Tabs",
        "mfr": "Mankind",
        "price": 28,
        "isGeneric": false,
        "dosage": "Strip of 15"
      }
    ]
  },
  {
    "id": "med-rantac150",
    "brand": "Rantac 150mg",
    "generic": "Ranitidine",
    "strength": "150mg",
    "form": "Tablet",
    "manufacturer": "J.B. Chemicals & Pharmaceuticals",
    "price": 42,
    "unit": "Strip of 30 tablets",
    "category": "Gastric & Digestion",
    "uses": "Gastric acid suppression, peptic ulcer healing, GERD, stress gastritis",
    "sideEffects": "Headache, constipation, dizziness",
    "description": "H2-receptor antagonist reducing basal and stimulated gastric acid secretion.",
    "alternatives": [
      {
        "name": "Generic Ranitidine 150mg Tablet",
        "mfr": "Jan Aushadhi / BPPI",
        "price": 9,
        "isGeneric": true,
        "dosage": "150mg"
      },
      {
        "name": "Aciloc 150",
        "mfr": "Cadila Pharma",
        "price": 38,
        "isGeneric": false,
        "dosage": "150mg"
      },
      {
        "name": "Zinetac 150",
        "mfr": "GlaxoSmithKline",
        "price": 45,
        "isGeneric": false,
        "dosage": "150mg"
      }
    ]
  },
  {
    "id": "med-famocid20",
    "brand": "Famocid 20mg",
    "generic": "Famotidine",
    "strength": "20mg",
    "form": "Tablet",
    "manufacturer": "Sun Pharma",
    "price": 25,
    "unit": "Strip of 14 tablets",
    "category": "Gastric & Digestion",
    "uses": "Duodenal ulcer, active benign gastric ulcer, gastroesophageal reflux disease (GERD)",
    "sideEffects": "Headache, dizziness, constipation",
    "description": "Potent and selective H2 blocker with 9x greater potency than ranitidine and excellent safety record.",
    "alternatives": [
      {
        "name": "Generic Famotidine 20mg Tablet",
        "mfr": "Jan Aushadhi / BPPI",
        "price": 6,
        "isGeneric": true,
        "dosage": "20mg"
      },
      {
        "name": "Topcid 20",
        "mfr": "Torrent Pharma",
        "price": 24,
        "isGeneric": false,
        "dosage": "20mg"
      },
      {
        "name": "Famtac 20",
        "mfr": "Alkem",
        "price": 22,
        "isGeneric": false,
        "dosage": "20mg"
      }
    ]
  },
  {
    "id": "med-rabicip-dsr",
    "brand": "Rabicip-DSR",
    "generic": "Rabeprazole + Domperidone",
    "strength": "20mg + 30mg SR",
    "form": "Capsule",
    "manufacturer": "Cipla Ltd",
    "price": 215,
    "unit": "Strip of 10 capsules",
    "category": "Gastric & Digestion",
    "uses": "Severe acid reflux with delayed gastric emptying, regurgitation, persistent heartburn",
    "sideEffects": "Dry mouth, headache, flatulence, abdominal pain",
    "description": "Rapid proton-pump inhibitor paired with sustained-release prokinetic for round-the-clock reflux shield.",
    "alternatives": [
      {
        "name": "Generic Rabeprazole + Domperidone SR",
        "mfr": "Jan Aushadhi / BPPI",
        "price": 26,
        "isGeneric": true,
        "dosage": "20mg+30mg"
      },
      {
        "name": "Razo-D",
        "mfr": "Dr. Reddy's",
        "price": 225,
        "isGeneric": false,
        "dosage": "20mg+30mg"
      },
      {
        "name": "Happi-D",
        "mfr": "Zydus Cadila",
        "price": 195,
        "isGeneric": false,
        "dosage": "20mg+30mg"
      }
    ]
  },
  {
    "id": "med-omez-d",
    "brand": "Omez-D",
    "generic": "Omeprazole + Domperidone",
    "strength": "20mg + 10mg",
    "form": "Capsule",
    "manufacturer": "Dr. Reddy's Laboratories",
    "price": 175,
    "unit": "Strip of 15 capsules",
    "category": "Gastric & Digestion",
    "uses": "Dyspepsia, gastritis with nausea, acid burning, sour burping",
    "sideEffects": "Dizziness, dry mouth, loose stools",
    "description": "Pioneering combination addressing gastric hyperacidity alongside upper GI motility stasis.",
    "alternatives": [
      {
        "name": "Generic Omeprazole + Domperidone Capsule",
        "mfr": "Jan Aushadhi / BPPI",
        "price": 18,
        "isGeneric": true,
        "dosage": "20mg+10mg"
      },
      {
        "name": "Ocid-D",
        "mfr": "Zydus Cadila",
        "price": 165,
        "isGeneric": false,
        "dosage": "20mg+10mg"
      },
      {
        "name": "Omee-D",
        "mfr": "Alkem Laboratories",
        "price": 150,
        "isGeneric": false,
        "dosage": "20mg+10mg"
      }
    ]
  },
  {
    "id": "med-nexpro-rd40",
    "brand": "Nexpro-RD 40",
    "generic": "Esomeprazole + Domperidone",
    "strength": "40mg + 30mg SR",
    "form": "Capsule",
    "manufacturer": "Torrent Pharmaceuticals",
    "price": 220,
    "unit": "Strip of 10 capsules",
    "category": "Gastric & Digestion",
    "uses": "Severe gastroesophageal reflux disease (GERD), nocturnal acid breakthrough, erosive esophagitis",
    "sideEffects": "Dry mouth, headache, flatulence",
    "description": "S-isomer of omeprazole offering superior systemic bioavailability and 24-hour pH control.",
    "alternatives": [
      {
        "name": "Generic Esomeprazole + Domperidone SR",
        "mfr": "Jan Aushadhi / BPPI",
        "price": 28,
        "isGeneric": true,
        "dosage": "40mg+30mg"
      },
      {
        "name": "Sompraz-D 40",
        "mfr": "Sun Pharma",
        "price": 235,
        "isGeneric": false,
        "dosage": "40mg+30mg"
      },
      {
        "name": "Esomac-D 40",
        "mfr": "Cipla Ltd",
        "price": 210,
        "isGeneric": false,
        "dosage": "40mg+30mg"
      }
    ]
  },
  {
    "id": "med-sompraz40",
    "brand": "Sompraz 40mg",
    "generic": "Esomeprazole",
    "strength": "40mg",
    "form": "Tablet",
    "manufacturer": "Sun Pharma",
    "price": 165,
    "unit": "Strip of 15 tablets",
    "category": "Gastric & Digestion",
    "uses": "Healing of erosive esophagitis, Zollinger-Ellison syndrome, triple-drug H. pylori eradication",
    "sideEffects": "Nausea, headache, abdominal pain",
    "description": "Pure S-enantiomer proton pump inhibitor providing high cure rates for acid-peptic ulcerations.",
    "alternatives": [
      {
        "name": "Generic Esomeprazole 40mg Tablet",
        "mfr": "Jan Aushadhi / BPPI",
        "price": 16,
        "isGeneric": true,
        "dosage": "40mg"
      },
      {
        "name": "Nexpro 40",
        "mfr": "Torrent Pharma",
        "price": 155,
        "isGeneric": false,
        "dosage": "40mg"
      },
      {
        "name": "Esomac 40",
        "mfr": "Cipla Ltd",
        "price": 150,
        "isGeneric": false,
        "dosage": "40mg"
      }
    ]
  },
  {
    "id": "med-mucaine-gel",
    "brand": "Mucaine Gel",
    "generic": "Oxetacaine + Aluminium Hydroxide + Magnesium Hydroxide",
    "strength": "10mg + 291mg + 98mg / 5ml",
    "form": "Oral Suspension",
    "manufacturer": "Pfizer India",
    "price": 195,
    "unit": "200ml Bottle",
    "category": "Gastric & Digestion",
    "uses": "Acute burning stomach pain, severe gastritis, esophageal spasm, hiatus hernia, ulcer burning",
    "sideEffects": "Oral numbness, constipation, mild drowsiness",
    "description": "Contains oxetacaine, a potent local anesthetic that remains active in strong acid environments, numbing ulcer pain within 30 seconds.",
    "alternatives": [
      {
        "name": "Generic Oxetacaine Antacid Gel",
        "mfr": "Jan Aushadhi / BPPI",
        "price": 35,
        "isGeneric": true,
        "dosage": "200ml Suspension"
      },
      {
        "name": "Sucrafil-O",
        "mfr": "Fourrts",
        "price": 245,
        "isGeneric": false,
        "dosage": "200ml Suspension"
      },
      {
        "name": "Pepsigard-O",
        "mfr": "Ranbaxy",
        "price": 210,
        "isGeneric": false,
        "dosage": "200ml Suspension"
      }
    ]
  },
  {
    "id": "med-ganaton50",
    "brand": "Ganaton 50mg",
    "generic": "Itopride Hydrochloride",
    "strength": "50mg",
    "form": "Tablet",
    "manufacturer": "Abbott Healthcare",
    "price": 195,
    "unit": "Strip of 15 tablets",
    "category": "Gastric & Digestion",
    "uses": "Functional non-ulcer dyspepsia, post-prandial fullness, early satiety, chronic gastritis bloating",
    "sideEffects": "Headache, diarrhea, elevated prolactin (rare)",
    "description": "D2-receptor antagonist and acetylcholinesterase inhibitor with minimal cardiac QT risk.",
    "alternatives": [
      {
        "name": "Generic Itopride 50mg Tablet",
        "mfr": "Jan Aushadhi / BPPI",
        "price": 22,
        "isGeneric": true,
        "dosage": "50mg"
      },
      {
        "name": "Itza 50",
        "mfr": "Sun Pharma",
        "price": 180,
        "isGeneric": false,
        "dosage": "50mg"
      },
      {
        "name": "Itoprid 50",
        "mfr": "Cipla Ltd",
        "price": 175,
        "isGeneric": false,
        "dosage": "50mg"
      }
    ]
  },
  {
    "id": "med-eno-sachet",
    "brand": "Eno Fruit Salt",
    "generic": "Sodium Bicarbonate + Citric Acid + Anhydrous Sodium Carbonate",
    "strength": "5g Sachet",
    "form": "Effervescent Powder",
    "manufacturer": "GSK Consumer Healthcare",
    "price": 9,
    "unit": "Single 5g Sachet",
    "category": "Gastric & Digestion",
    "uses": "Instant 6-second relief from acidity, heartburn, sour stomach and indigestion",
    "sideEffects": "Belching, transient flatulence, avoid in strict low-sodium diets",
    "description": "Fastest-acting chemical acid neutralizer forming bubbling sodium citrate in water.",
    "alternatives": [
      {
        "name": "Generic Effervescent Antacid Sachet",
        "mfr": "Jan Aushadhi / BPPI",
        "price": 2.5,
        "isGeneric": true,
        "dosage": "5g Sachet"
      },
      {
        "name": "Gas-O-Fast",
        "mfr": "Mankind Pharma",
        "price": 8,
        "isGeneric": false,
        "dosage": "5g Sachet"
      },
      {
        "name": "Natureplex Antacid",
        "mfr": "Cipla",
        "price": 8.5,
        "isGeneric": false,
        "dosage": "5g Sachet"
      }
    ]
  },
  {
    "id": "med-cremaffin-syp",
    "brand": "Cremaffin Emulsion",
    "generic": "Liquid Paraffin + Milk of Magnesia",
    "strength": "3.75ml + 11.25ml / 15ml",
    "form": "Syrup",
    "manufacturer": "Abbott Healthcare",
    "price": 165,
    "unit": "200ml Bottle",
    "category": "Gastric & Digestion",
    "uses": "Gentle relief of constipation, painful piles (hemorrhoids), anal fissures, hernia patients",
    "sideEffects": "Anal seepage if overused, mild cramping",
    "description": "Lubricant and osmotic laxative softening stools and lubricating the intestinal lining.",
    "alternatives": [
      {
        "name": "Generic Liquid Paraffin + Magnesium Emulsion",
        "mfr": "Jan Aushadhi / BPPI",
        "price": 32,
        "isGeneric": true,
        "dosage": "200ml Syrup"
      },
      {
        "name": "Piclin Plus",
        "mfr": "Cipla Ltd",
        "price": 155,
        "isGeneric": false,
        "dosage": "200ml Syrup"
      },
      {
        "name": "Looz PEG",
        "mfr": "Intas Pharma",
        "price": 280,
        "isGeneric": false,
        "dosage": "200ml Syrup"
      }
    ]
  },
  {
    "id": "med-piclin-drops",
    "brand": "Piclin Drops",
    "generic": "Sodium Picosulfate",
    "strength": "5mg / ml",
    "form": "Oral Drops",
    "manufacturer": "Cipla Ltd",
    "price": 95,
    "unit": "15ml Dropper Bottle",
    "category": "Gastric & Digestion",
    "uses": "Chronic constipation, bedridden patients, bowel preparation before endoscopy",
    "sideEffects": "Abdominal colic, diarrhea if overdosed",
    "description": "Contact laxative activated by colon bacteria, selectively stimulating colonic peristalsis.",
    "alternatives": [
      {
        "name": "Generic Sodium Picosulfate Drops",
        "mfr": "Jan Aushadhi / BPPI",
        "price": 20,
        "isGeneric": true,
        "dosage": "15ml Drops"
      },
      {
        "name": "Dulcolax SP Drops",
        "mfr": "Sanofi",
        "price": 105,
        "isGeneric": false,
        "dosage": "15ml Drops"
      },
      {
        "name": "Pico-L",
        "mfr": "Torrent Pharma",
        "price": 90,
        "isGeneric": false,
        "dosage": "15ml Drops"
      }
    ]
  },
  {
    "id": "med-softovac-sf",
    "brand": "Softovac SF Powder",
    "generic": "Ispaghula Husk + Senna + Haritaki",
    "strength": "100g Jar",
    "form": "Ayurvedic Bowel Regulator",
    "manufacturer": "Lupin Ltd",
    "price": 195,
    "unit": "100g Jar",
    "category": "Gastric & Digestion",
    "uses": "Sugar-free chronic constipation relief, irregular bowel syndrome, piles",
    "sideEffects": "Initial abdominal distension if taken with insufficient water",
    "description": "Clinically formulated herbal bulk-forming laxative safe for diabetic patients.",
    "alternatives": [
      {
        "name": "Generic Ispaghula Husk Pure Powder",
        "mfr": "Jan Aushadhi / BPPI",
        "price": 42,
        "isGeneric": true,
        "dosage": "100g Powder"
      },
      {
        "name": "Fybogel",
        "mfr": "Reckitt",
        "price": 220,
        "isGeneric": false,
        "dosage": "100g Powder"
      },
      {
        "name": "Kayam Churna",
        "mfr": "Sheth Brothers",
        "price": 110,
        "isGeneric": false,
        "dosage": "100g Powder"
      }
    ]
  },
  {
    "id": "med-aristozyme-syp",
    "brand": "Aristozyme Liquid",
    "generic": "Fungal Diastase + Pepsin",
    "strength": "50mg + 10mg / 5ml",
    "form": "Digestive Syrup",
    "manufacturer": "Aristo Pharmaceuticals",
    "price": 135,
    "unit": "200ml Bottle",
    "category": "Gastric & Digestion",
    "uses": "Indigestion, chronic flatulence, post-illness appetite loss, epigastric distress",
    "sideEffects": "Generally well-tolerated, rare skin rash",
    "description": "Digestive enzyme supplement breaking down dietary carbohydrates and proteins for smooth digestion.",
    "alternatives": [
      {
        "name": "Generic Diastase + Pepsin Digestive Syrup",
        "mfr": "Jan Aushadhi / BPPI",
        "price": 26,
        "isGeneric": true,
        "dosage": "200ml Syrup"
      },
      {
        "name": "Carmicide",
        "mfr": "Indoco Remedies",
        "price": 125,
        "isGeneric": false,
        "dosage": "200ml Syrup"
      },
      {
        "name": "Unienzyme Liquid",
        "mfr": "Unichem",
        "price": 140,
        "isGeneric": false,
        "dosage": "200ml Syrup"
      }
    ]
  },
  {
    "id": "med-unienzyme-tab",
    "brand": "Unienzyme Tablet",
    "generic": "Fungal Diastase + Papain + Activated Charcoal",
    "strength": "100mg + 60mg + 75mg",
    "form": "Tablet",
    "manufacturer": "Unichem Laboratories",
    "price": 68,
    "unit": "Strip of 15 tablets",
    "category": "Gastric & Digestion",
    "uses": "Gas entrapment, bloating, indigestion, heavy stomach sensation after oily meals",
    "sideEffects": "Darkening of stools due to activated charcoal",
    "description": "Triple enzyme and activated charcoal formula that adsorbs intestinal toxins and gas bubbles.",
    "alternatives": [
      {
        "name": "Generic Enzyme & Charcoal Digestive Tablet",
        "mfr": "Jan Aushadhi / BPPI",
        "price": 14,
        "isGeneric": true,
        "dosage": "Strip of 15"
      },
      {
        "name": "Pankreoflat",
        "mfr": "Abbott",
        "price": 120,
        "isGeneric": false,
        "dosage": "Strip of 15"
      },
      {
        "name": "Aristozyme Tablet",
        "mfr": "Aristo",
        "price": 65,
        "isGeneric": false,
        "dosage": "Strip of 15"
      }
    ]
  },
  {
    "id": "med-neopeptine-liquid",
    "brand": "Neopeptine Liquid",
    "generic": "Alpha Amylase + Papain",
    "strength": "20mg + 10mg / ml",
    "form": "Oral Drops / Liquid",
    "manufacturer": "Raptakos Brett & Co",
    "price": 125,
    "unit": "100ml Bottle",
    "category": "Gastric & Digestion",
    "uses": "Infantile colic, flatulence, griping abdominal pain, milk indigestion in babies",
    "sideEffects": "None reported at recommended pediatric dosages",
    "description": "Gentle natural plant-derived enzyme drops relieving infant gas and milk curd indigestion.",
    "alternatives": [
      {
        "name": "Generic Pediatric Digestive Drops",
        "mfr": "Jan Aushadhi / BPPI",
        "price": 22,
        "isGeneric": true,
        "dosage": "100ml Liquid"
      },
      {
        "name": "Bonnisan Drops",
        "mfr": "Himalaya",
        "price": 85,
        "isGeneric": false,
        "dosage": "100ml Liquid"
      },
      {
        "name": "Colicaid Drops",
        "mfr": "Meyer",
        "price": 110,
        "isGeneric": false,
        "dosage": "100ml Liquid"
      }
    ]
  },
  {
    "id": "med-pepsigard-syp",
    "brand": "Sucral-O Suspension",
    "generic": "Sucralfate + Oxetacaine",
    "strength": "1000mg + 20mg / 10ml",
    "form": "Suspension",
    "manufacturer": "Strides Pharma",
    "price": 245,
    "unit": "200ml Bottle",
    "category": "Gastric & Digestion",
    "uses": "Active peptic ulcers, radiation proctitis/gastritis, bile reflux, gastric erosions",
    "sideEffects": "Constipation, dry mouth, mild nausea",
    "description": "Forms an insoluble protective chemical paste binding to ulcerated proteins shielding from gastric acid.",
    "alternatives": [
      {
        "name": "Generic Sucralfate + Oxetacaine Suspension",
        "mfr": "Jan Aushadhi / BPPI",
        "price": 45,
        "isGeneric": true,
        "dosage": "200ml Suspension"
      },
      {
        "name": "Sucrafil-O",
        "mfr": "Fourrts",
        "price": 255,
        "isGeneric": false,
        "dosage": "200ml Suspension"
      },
      {
        "name": "Ulcigel-O",
        "mfr": "Alkem",
        "price": 230,
        "isGeneric": false,
        "dosage": "200ml Suspension"
      }
    ]
  },
  {
    "id": "med-crocin-adv",
    "brand": "Crocin Advance",
    "generic": "Paracetamol (Fast Release Optizorb)",
    "strength": "500mg",
    "form": "Tablet",
    "manufacturer": "GSK Consumer Healthcare",
    "price": 24,
    "unit": "Strip of 20 tablets",
    "category": "Pain & Fever",
    "uses": "Fever, mild to moderate headache, muscle pain, dental ache, vaccination fever",
    "sideEffects": "Rare rash; hepatotoxicity if maximum 4000mg/day limit is exceeded",
    "description": "Optizorb formulation disintegrates 5 times faster than standard paracetamol tablets for rapid pain relief.",
    "alternatives": [
      {
        "name": "Generic Paracetamol 500mg Tablet",
        "mfr": "Jan Aushadhi / BPPI",
        "price": 4.8,
        "isGeneric": true,
        "dosage": "500mg"
      },
      {
        "name": "Calpol 500",
        "mfr": "GSK",
        "price": 22,
        "isGeneric": false,
        "dosage": "500mg"
      },
      {
        "name": "Pacimol 500",
        "mfr": "Ipca",
        "price": 20,
        "isGeneric": false,
        "dosage": "500mg"
      }
    ]
  },
  {
    "id": "med-calpol650",
    "brand": "Calpol 650",
    "generic": "Paracetamol",
    "strength": "650mg",
    "form": "Tablet",
    "manufacturer": "GlaxoSmithKline",
    "price": 32,
    "unit": "Strip of 15 tablets",
    "category": "Pain & Fever",
    "uses": "High fever, viral fever (dengue, chikungunya, flu), moderate body aches",
    "sideEffects": "Extremely safe at recommended doses; avoid alcohol",
    "description": "Gold standard Indian fever medication with rapid antipyretic action.",
    "alternatives": [
      {
        "name": "Generic Paracetamol 650mg Tablet",
        "mfr": "Jan Aushadhi / BPPI",
        "price": 8.5,
        "isGeneric": true,
        "dosage": "650mg"
      },
      {
        "name": "Dolo 650",
        "mfr": "Micro Labs",
        "price": 30.5,
        "isGeneric": false,
        "dosage": "650mg"
      },
      {
        "name": "P-650",
        "mfr": "Apex Labs",
        "price": 28,
        "isGeneric": false,
        "dosage": "650mg"
      }
    ]
  },
  {
    "id": "med-flexon-tab",
    "brand": "Flexon",
    "generic": "Ibuprofen + Paracetamol",
    "strength": "400mg + 325mg",
    "form": "Tablet",
    "manufacturer": "Aristo Pharmaceuticals",
    "price": 35,
    "unit": "Strip of 15 tablets",
    "category": "Pain & Fever",
    "uses": "Dental extraction pain, acute joint sprain, fever with severe body ache, dysmenorrhea",
    "sideEffects": "Stomach burning, nausea, dizziness",
    "description": "Synergistic NSAID and analgesic duo tackling pain through both central and peripheral mechanisms.",
    "alternatives": [
      {
        "name": "Generic Ibuprofen + Paracetamol Tablet",
        "mfr": "Jan Aushadhi / BPPI",
        "price": 7.5,
        "isGeneric": true,
        "dosage": "400mg+325mg"
      },
      {
        "name": "Combiflam",
        "mfr": "Sanofi India",
        "price": 42,
        "isGeneric": false,
        "dosage": "400mg+325mg"
      },
      {
        "name": "Ibugesic Plus",
        "mfr": "Cipla Ltd",
        "price": 32,
        "isGeneric": false,
        "dosage": "400mg+325mg"
      }
    ]
  },
  {
    "id": "med-meftal-forte",
    "brand": "Meftal-Forte",
    "generic": "Mefenamic Acid + Paracetamol",
    "strength": "500mg + 450mg",
    "form": "Tablet",
    "manufacturer": "Blue Cross Laboratories",
    "price": 65,
    "unit": "Strip of 10 tablets",
    "category": "Pain & Fever",
    "uses": "Severe dental pain, post-surgical orthopedic pain, heavy painful periods, high refractory fever",
    "sideEffects": "Gastric irritation, heartburn, nausea",
    "description": "High-dose analgesic combination effective for intense visceral and somatic pain flares.",
    "alternatives": [
      {
        "name": "Generic Mefenamic Acid + Paracetamol Tablet",
        "mfr": "Jan Aushadhi / BPPI",
        "price": 14,
        "isGeneric": true,
        "dosage": "500mg+450mg"
      },
      {
        "name": "Mefkind-Forte",
        "mfr": "Mankind Pharma",
        "price": 55,
        "isGeneric": false,
        "dosage": "500mg+450mg"
      },
      {
        "name": "Dolopar-M",
        "mfr": "Micro Labs",
        "price": 58,
        "isGeneric": false,
        "dosage": "500mg+450mg"
      }
    ]
  },
  {
    "id": "med-cyclopam",
    "brand": "Cyclopam Tablet",
    "generic": "Dicyclomine + Paracetamol",
    "strength": "20mg + 500mg",
    "form": "Tablet",
    "manufacturer": "Indoco Remedies",
    "price": 62,
    "unit": "Strip of 10 tablets",
    "category": "Pain & Fever",
    "uses": "Intestinal colic, spasmodic dysmenorrhea, kidney stone ureteric colic pain",
    "sideEffects": "Dry mouth, blurred vision, dizziness, drowsiness",
    "description": "Anticholinergic smooth muscle relaxant combined with analgesic for severe abdominal griping pain.",
    "alternatives": [
      {
        "name": "Generic Dicyclomine + Paracetamol Tablet",
        "mfr": "Jan Aushadhi / BPPI",
        "price": 11,
        "isGeneric": true,
        "dosage": "20mg+500mg"
      },
      {
        "name": "Colimex",
        "mfr": "Wallace Pharma",
        "price": 58,
        "isGeneric": false,
        "dosage": "20mg+500mg"
      },
      {
        "name": "Spasmonil",
        "mfr": "Cipla Ltd",
        "price": 55,
        "isGeneric": false,
        "dosage": "20mg+500mg"
      }
    ]
  },
  {
    "id": "med-colimex-drops",
    "brand": "Colimex Oral Drops",
    "generic": "Dicyclomine + Dimethicone",
    "strength": "10mg + 40mg / ml",
    "form": "Oral Drops",
    "manufacturer": "Wallace Pharmaceuticals",
    "price": 78,
    "unit": "15ml Dropper Bottle",
    "category": "Pain & Fever",
    "uses": "Infantile colic, crying from stomach gas pain in infants and young children",
    "sideEffects": "Dry mouth, mild sleepiness",
    "description": "Relieves gas entrapment and relaxes intestinal spasms in infants safely under doctor supervision.",
    "alternatives": [
      {
        "name": "Generic Pediatric Antispasmodic Drops",
        "mfr": "Jan Aushadhi / BPPI",
        "price": 16,
        "isGeneric": true,
        "dosage": "15ml Drops"
      },
      {
        "name": "Cyclopam Drops",
        "mfr": "Indoco",
        "price": 72,
        "isGeneric": false,
        "dosage": "15ml Drops"
      },
      {
        "name": "Spasmo-Proxyvon Drops",
        "mfr": "Wockhardt",
        "price": 75,
        "isGeneric": false,
        "dosage": "15ml Drops"
      }
    ]
  },
  {
    "id": "med-voveran-sr100",
    "brand": "Voveran-SR 100",
    "generic": "Diclofenac Sodium",
    "strength": "100mg",
    "form": "Sustained Release Tablet",
    "manufacturer": "Novartis India",
    "price": 185,
    "unit": "Strip of 15 tablets",
    "category": "Pain & Fever",
    "uses": "Osteoarthritis, rheumatoid arthritis, ankylosing spondylitis, acute musculoskeletal injury",
    "sideEffects": "Epigastric discomfort, water retention, increased BP risk",
    "description": "Sustained-release diclofenac delivering constant 24-hour joint anti-inflammatory coverage.",
    "alternatives": [
      {
        "name": "Generic Diclofenac 100mg SR Tablet",
        "mfr": "Jan Aushadhi / BPPI",
        "price": 16,
        "isGeneric": true,
        "dosage": "100mg SR"
      },
      {
        "name": "Dicloran-SR 100",
        "mfr": "J.B. Chemicals",
        "price": 145,
        "isGeneric": false,
        "dosage": "100mg SR"
      },
      {
        "name": "Jonac-SR 100",
        "mfr": "Zydus Cadila",
        "price": 155,
        "isGeneric": false,
        "dosage": "100mg SR"
      }
    ]
  },
  {
    "id": "med-volini-gel",
    "brand": "Volini Pain Relief Gel",
    "generic": "Diclofenac Diethylamine + Linseed Oil + Methyl Salicylate + Menthol",
    "strength": "1.16% + 3% + 10% + 5% w/w",
    "form": "Topical Gel",
    "manufacturer": "Sun Pharma Consumer",
    "price": 165,
    "unit": "50g Tube",
    "category": "Pain & Fever",
    "uses": "Backache, neck stiffness, knee pain, sprains, muscle strains, sports injuries",
    "sideEffects": "Local skin redness, mild warmth/stinging",
    "description": "Fast-absorbing topical anti-inflammatory gel penetrating deep into aching muscle and joint tissues.",
    "alternatives": [
      {
        "name": "Generic Diclofenac Diethylamine Gel 50g",
        "mfr": "Jan Aushadhi / BPPI",
        "price": 28,
        "isGeneric": true,
        "dosage": "50g Gel"
      },
      {
        "name": "Omnigel",
        "mfr": "Cipla Ltd",
        "price": 145,
        "isGeneric": false,
        "dosage": "50g Gel"
      },
      {
        "name": "Moov Gel",
        "mfr": "Reckitt",
        "price": 160,
        "isGeneric": false,
        "dosage": "50g Gel"
      }
    ]
  },
  {
    "id": "med-omnigel",
    "brand": "Omnigel",
    "generic": "Diclofenac + Linseed Oil + Methyl Salicylate + Menthol",
    "strength": "1.16% + 3% + 10% + 5% w/w",
    "form": "Topical Gel",
    "manufacturer": "Cipla Ltd",
    "price": 145,
    "unit": "50g Tube",
    "category": "Pain & Fever",
    "uses": "Muscle spasms, frozen shoulder, joint inflammation, arthritis pain",
    "sideEffects": "Local contact erythema in sensitive skin",
    "description": "Deep-penetrating pain relief gel formulated with omega-rich virgin linseed oil to accelerate healing.",
    "alternatives": [
      {
        "name": "Generic Pain Relief Gel (Diclo+Menthol)",
        "mfr": "Jan Aushadhi / BPPI",
        "price": 28,
        "isGeneric": true,
        "dosage": "50g Gel"
      },
      {
        "name": "Volini Gel",
        "mfr": "Sun Pharma",
        "price": 165,
        "isGeneric": false,
        "dosage": "50g Gel"
      },
      {
        "name": "Voveran Emulgel",
        "mfr": "Novartis",
        "price": 180,
        "isGeneric": false,
        "dosage": "50g Gel"
      }
    ]
  },
  {
    "id": "med-myoril4",
    "brand": "Myoril 4mg",
    "generic": "Thiocolchicoside",
    "strength": "4mg",
    "form": "Capsule",
    "manufacturer": "Sanofi India",
    "price": 210,
    "unit": "Strip of 10 capsules",
    "category": "Pain & Fever",
    "uses": "Painful muscle contractures, torticollis, acute low back pain, post-traumatic muscle spasms",
    "sideEffects": "Somnolence, diarrhea, nausea, dizziness",
    "description": "Semisynthetic colchicoside derivative acting selectively on GABA-A receptors to relieve muscle stiffness.",
    "alternatives": [
      {
        "name": "Generic Thiocolchicoside 4mg Capsule",
        "mfr": "Jan Aushadhi / BPPI",
        "price": 32,
        "isGeneric": true,
        "dosage": "4mg"
      },
      {
        "name": "Thiospas 4",
        "mfr": "Cipla Ltd",
        "price": 195,
        "isGeneric": false,
        "dosage": "4mg"
      },
      {
        "name": "Mobiswift 4",
        "mfr": "Torrent Pharma",
        "price": 185,
        "isGeneric": false,
        "dosage": "4mg"
      }
    ]
  },
  {
    "id": "med-mobizox",
    "brand": "Mobizox",
    "generic": "Chlorzoxazone + Diclofenac + Paracetamol",
    "strength": "500mg + 50mg + 325mg",
    "form": "Tablet",
    "manufacturer": "Sun Pharma",
    "price": 195,
    "unit": "Strip of 10 tablets",
    "category": "Pain & Fever",
    "uses": "Severe acute musculoskeletal spasms, cervical spondylosis, lumbago, fibromyalgia",
    "sideEffects": "Drowsiness, stomach burning, urine discoloration (orange/purple)",
    "description": "Centrally-acting muscle relaxant combined with dual analgesics for complete mobility restoration.",
    "alternatives": [
      {
        "name": "Generic Chlorzoxazone + Diclofenac + Paracetamol",
        "mfr": "Jan Aushadhi / BPPI",
        "price": 28,
        "isGeneric": true,
        "dosage": "Compound Tablet"
      },
      {
        "name": "Myospaz-Forte",
        "mfr": "Win-Medicare",
        "price": 180,
        "isGeneric": false,
        "dosage": "Compound Tablet"
      },
      {
        "name": "Parafon",
        "mfr": "Janssen",
        "price": 210,
        "isGeneric": false,
        "dosage": "Compound Tablet"
      }
    ]
  },
  {
    "id": "med-hifenac-th",
    "brand": "Hifenac-TH 4",
    "generic": "Aceclofenac + Thiocolchicoside",
    "strength": "100mg + 4mg",
    "form": "Tablet",
    "manufacturer": "Intas Pharmaceuticals",
    "price": 215,
    "unit": "Strip of 10 tablets",
    "category": "Pain & Fever",
    "uses": "Acute low back spasm, stiff neck, sciatica, ankylosing spondylitis with muscle rigidity",
    "sideEffects": "Drowsiness, dyspepsia, mild diarrhea",
    "description": "Modern NSAID paired with non-sedating muscle relaxant with lower gastric toxicity.",
    "alternatives": [
      {
        "name": "Generic Aceclofenac + Thiocolchicoside 100/4",
        "mfr": "Jan Aushadhi / BPPI",
        "price": 34,
        "isGeneric": true,
        "dosage": "100mg+4mg"
      },
      {
        "name": "Zerodol-TH 4",
        "mfr": "Ipca Labs",
        "price": 225,
        "isGeneric": false,
        "dosage": "100mg+4mg"
      },
      {
        "name": "Aceclo-MR",
        "mfr": "Aristo Pharma",
        "price": 190,
        "isGeneric": false,
        "dosage": "100mg+4mg"
      }
    ]
  },
  {
    "id": "med-liofen10",
    "brand": "Liofen 10mg",
    "generic": "Baclofen",
    "strength": "10mg",
    "form": "Tablet",
    "manufacturer": "Sun Pharma",
    "price": 145,
    "unit": "Strip of 10 tablets",
    "category": "Pain & Fever",
    "uses": "Severe muscle spasticity from spinal cord lesions, multiple sclerosis, cerebral palsy",
    "sideEffects": "Drowsiness, hypotonia, muscle weakness, dry mouth",
    "description": "Specific GABA-B agonist hyperpolarizing spinal motor neurons to control intractable muscle rigidity.",
    "alternatives": [
      {
        "name": "Generic Baclofen 10mg Tablet",
        "mfr": "Jan Aushadhi / BPPI",
        "price": 20,
        "isGeneric": true,
        "dosage": "10mg"
      },
      {
        "name": "Lioresal 10",
        "mfr": "Novartis India",
        "price": 165,
        "isGeneric": false,
        "dosage": "10mg"
      },
      {
        "name": "Baclogen 10",
        "mfr": "Torrent Pharma",
        "price": 135,
        "isGeneric": false,
        "dosage": "10mg"
      }
    ]
  },
  {
    "id": "med-moov-spray",
    "brand": "Moov Pain Relief Spray",
    "generic": "Oil of Wintergreen + Pudina ke Phool + Nilgiri Tel + Tarpin Tel",
    "strength": "80g Spray Can",
    "form": "Aerosol Spray",
    "manufacturer": "Reckitt Benckiser",
    "price": 195,
    "unit": "80g Spray Can",
    "category": "Pain & Fever",
    "uses": "Acute backache, muscle catch, shoulder freeze, sprain, sports injury",
    "sideEffects": "Transient cooling-burning sensation on skin",
    "description": "Herbal counter-irritant spray providing rapid micro-circulation warming to relieve deep muscular catches.",
    "alternatives": [
      {
        "name": "Generic Herbal Pain Relief Spray",
        "mfr": "Jan Aushadhi / BPPI",
        "price": 45,
        "isGeneric": true,
        "dosage": "80g Spray"
      },
      {
        "name": "Volini Spray",
        "mfr": "Sun Pharma",
        "price": 210,
        "isGeneric": false,
        "dosage": "80g Spray"
      },
      {
        "name": "Relispray",
        "mfr": "Midas Care",
        "price": 185,
        "isGeneric": false,
        "dosage": "80g Spray"
      }
    ]
  },
  {
    "id": "med-zandu-balm",
    "brand": "Zandu Balm",
    "generic": "Mentha + Gaultheria (Methyl Salicylate) + Camphor",
    "strength": "25ml Bottle",
    "form": "Topical Balm",
    "manufacturer": "Emami Ltd",
    "price": 75,
    "unit": "25ml Jar",
    "category": "Pain & Fever",
    "uses": "Tension headache, forehead sinus heaviness, cold body ache, neck stiffness",
    "sideEffects": "Avoid direct contact with eyes or open wounds",
    "description": "Ubiquitous Indian household analgesic balm providing cooling counter-irritation.",
    "alternatives": [
      {
        "name": "Generic Pain Balm (Camphor+Menthol)",
        "mfr": "Jan Aushadhi / BPPI",
        "price": 18,
        "isGeneric": true,
        "dosage": "25ml Balm"
      },
      {
        "name": "Tiger Balm",
        "mfr": "Haw Par",
        "price": 95,
        "isGeneric": false,
        "dosage": "25ml Balm"
      },
      {
        "name": "Amrutanjan Strong",
        "mfr": "Amrutanjan",
        "price": 80,
        "isGeneric": false,
        "dosage": "25ml Balm"
      }
    ]
  },
  {
    "id": "med-baralgan-m",
    "brand": "Baralgan-M",
    "generic": "Metamizole Sodium + Pitofenone + Fenpiverinium",
    "strength": "500mg + 5mg + 0.1mg",
    "form": "Tablet",
    "manufacturer": "Sanofi India",
    "price": 55,
    "unit": "Strip of 10 tablets",
    "category": "Pain & Fever",
    "uses": "Severe biliary colic, severe renal/ureteric calculus spasms, acute post-operative visceral pain",
    "sideEffects": "Dizziness, dry mouth, red urine coloration (harmless metabolite)",
    "description": "Potent hospital-grade visceral antispasmodic targeting smooth-muscle biliary and urinary colic.",
    "alternatives": [
      {
        "name": "Generic Analgin + Pitofenone Spasmodic",
        "mfr": "Jan Aushadhi / BPPI",
        "price": 12,
        "isGeneric": true,
        "dosage": "Compound Tablet"
      },
      {
        "name": "Spasgan",
        "mfr": "Wockhardt",
        "price": 50,
        "isGeneric": false,
        "dosage": "Compound Tablet"
      },
      {
        "name": "Trigan-D",
        "mfr": "Cadila",
        "price": 48,
        "isGeneric": false,
        "dosage": "Compound Tablet"
      }
    ]
  },
  {
    "id": "med-pacimol650",
    "brand": "Pacimol 650",
    "generic": "Paracetamol",
    "strength": "650mg",
    "form": "Tablet",
    "manufacturer": "Ipca Laboratories",
    "price": 28,
    "unit": "Strip of 15 tablets",
    "category": "Pain & Fever",
    "uses": "Viral fevers, osteoarthritis pain, musculoskeletal discomfort",
    "sideEffects": "Very safe; observe liver precautions with high doses",
    "description": "Consistent high-potency paracetamol from a leading WHO-GMP certified Indian manufacturer.",
    "alternatives": [
      {
        "name": "Generic Paracetamol 650mg Tablet",
        "mfr": "Jan Aushadhi / BPPI",
        "price": 8.5,
        "isGeneric": true,
        "dosage": "650mg"
      },
      {
        "name": "Dolo 650",
        "mfr": "Micro Labs",
        "price": 30.5,
        "isGeneric": false,
        "dosage": "650mg"
      },
      {
        "name": "Calpol 650",
        "mfr": "GSK",
        "price": 32,
        "isGeneric": false,
        "dosage": "650mg"
      }
    ]
  },
  {
    "id": "med-dolopar-tab",
    "brand": "Dolopar 650",
    "generic": "Paracetamol",
    "strength": "650mg",
    "form": "Tablet",
    "manufacturer": "Micro Labs Ltd",
    "price": 29,
    "unit": "Strip of 15 tablets",
    "category": "Pain & Fever",
    "uses": "Fever reduction, toothache, muscle ache, post-operative pyrexia",
    "sideEffects": "Safe at therapeutic dosage",
    "description": "Affordable trusted antipyretic formulation widely used across clinical practices in India.",
    "alternatives": [
      {
        "name": "Generic Paracetamol 650mg Tablet",
        "mfr": "Jan Aushadhi / BPPI",
        "price": 8.5,
        "isGeneric": true,
        "dosage": "650mg"
      },
      {
        "name": "Crocin 650",
        "mfr": "GSK",
        "price": 32,
        "isGeneric": false,
        "dosage": "650mg"
      },
      {
        "name": "P-650",
        "mfr": "Apex Labs",
        "price": 28,
        "isGeneric": false,
        "dosage": "650mg"
      }
    ]
  },
  {
    "id": "med-ibugesic-plus",
    "brand": "Ibugesic Plus",
    "generic": "Ibuprofen + Paracetamol",
    "strength": "100mg + 162.5mg / 5ml",
    "form": "Oral Suspension",
    "manufacturer": "Cipla Ltd",
    "price": 48,
    "unit": "100ml Bottle",
    "category": "Pain & Fever",
    "uses": "Pediatric fever, teething pain, post-vaccination fever, earache in children",
    "sideEffects": "Mild stomach ache, nausea",
    "description": "Child-friendly orange flavored suspension balancing gentle ibuprofen anti-inflammation with paracetamol antipyresis.",
    "alternatives": [
      {
        "name": "Generic Pediatric Ibuprofen + Paracetamol Suspension",
        "mfr": "Jan Aushadhi / BPPI",
        "price": 12,
        "isGeneric": true,
        "dosage": "100ml Suspension"
      },
      {
        "name": "Combiflam Suspension",
        "mfr": "Sanofi",
        "price": 52,
        "isGeneric": false,
        "dosage": "100ml Suspension"
      },
      {
        "name": "Flexon Suspension",
        "mfr": "Aristo",
        "price": 46,
        "isGeneric": false,
        "dosage": "100ml Suspension"
      }
    ]
  },
  {
    "id": "med-spasmo-proxyvon",
    "brand": "Spasmo-Proxyvon Plus",
    "generic": "Tramadol + Acetaminophen + Dicyclomine",
    "strength": "37.5mg + 325mg + 10mg",
    "form": "Capsule",
    "manufacturer": "Wockhardt Ltd",
    "price": 110,
    "unit": "Strip of 8 capsules",
    "category": "Pain & Fever",
    "uses": "Intense surgical pain, severe renal stone colic, severe post-operative abdominal cramps",
    "sideEffects": "Dizziness, drowsiness, constipation, nausea",
    "description": "Controlled scheduled analgesic combination for refractory spasmodic pain requiring opioid synergy.",
    "alternatives": [
      {
        "name": "Generic Tramadol + Dicyclomine Compound",
        "mfr": "Jan Aushadhi / BPPI",
        "price": 22,
        "isGeneric": true,
        "dosage": "Compound Capsule"
      },
      {
        "name": "Tramazac-Plus",
        "mfr": "Cadila",
        "price": 95,
        "isGeneric": false,
        "dosage": "Compound Capsule"
      },
      {
        "name": "Ultracet",
        "mfr": "Janssen",
        "price": 140,
        "isGeneric": false,
        "dosage": "Compound Capsule"
      }
    ]
  },
  {
    "id": "med-novamox500",
    "brand": "Novamox 500",
    "generic": "Amoxicillin",
    "strength": "500mg",
    "form": "Capsule",
    "manufacturer": "Cipla Ltd",
    "price": 78,
    "unit": "Strip of 15 capsules",
    "category": "Antibiotics & Infections",
    "uses": "Throat infection (tonsillitis, pharyngitis), dental abscess, chest infection, ear infection",
    "sideEffects": "Loose stools, skin rash, nausea",
    "description": "Broad-spectrum aminopenicillin killing gram-positive and gram-negative bacterial pathogens.",
    "alternatives": [
      {
        "name": "Generic Amoxicillin 500mg Capsule",
        "mfr": "Jan Aushadhi / BPPI",
        "price": 16,
        "isGeneric": true,
        "dosage": "500mg"
      },
      {
        "name": "Mox 500",
        "mfr": "Sun Pharma",
        "price": 82,
        "isGeneric": false,
        "dosage": "500mg"
      },
      {
        "name": "Almox 500",
        "mfr": "Alkem",
        "price": 75,
        "isGeneric": false,
        "dosage": "500mg"
      }
    ]
  },
  {
    "id": "med-clavam625",
    "brand": "Clavam 625",
    "generic": "Amoxicillin + Clavulanic Acid",
    "strength": "500mg + 125mg",
    "form": "Tablet",
    "manufacturer": "Alkem Laboratories",
    "price": 195,
    "unit": "Strip of 10 tablets",
    "category": "Antibiotics & Infections",
    "uses": "Resistant sinusitis, severe dental infection, skin soft tissue infection, postoperative prophylaxis",
    "sideEffects": "Diarrhea, nausea, stomach cramp",
    "description": "Beta-lactamase inhibitor combination restoring amoxicillin potency against resistant bacteria.",
    "alternatives": [
      {
        "name": "Generic Amoxicillin + Clavulanate 625mg",
        "mfr": "Jan Aushadhi / BPPI",
        "price": 18,
        "isGeneric": true,
        "dosage": "625mg"
      },
      {
        "name": "Augmentin 625",
        "mfr": "GSK",
        "price": 204.5,
        "isGeneric": false,
        "dosage": "625mg"
      },
      {
        "name": "Moxikind-CV 625",
        "mfr": "Mankind",
        "price": 145,
        "isGeneric": false,
        "dosage": "625mg"
      }
    ]
  },
  {
    "id": "med-moxikind-cv",
    "brand": "Moxikind-CV 625",
    "generic": "Amoxicillin + Clavulanic Acid",
    "strength": "500mg + 125mg",
    "form": "Tablet",
    "manufacturer": "Mankind Pharma",
    "price": 145,
    "unit": "Strip of 10 tablets",
    "category": "Antibiotics & Infections",
    "uses": "Chest infections, urinary tract infection, infected wounds, tooth extraction prophylaxis",
    "sideEffects": "Nausea, mild diarrhea, abdominal discomfort",
    "description": "Cost-effective branded broad-spectrum antibiotic widely prescribed across India.",
    "alternatives": [
      {
        "name": "Generic Amoxicillin + Clavulanic Acid 625mg",
        "mfr": "Jan Aushadhi / BPPI",
        "price": 18,
        "isGeneric": true,
        "dosage": "625mg"
      },
      {
        "name": "Augmentin 625",
        "mfr": "GSK",
        "price": 204.5,
        "isGeneric": false,
        "dosage": "625mg"
      },
      {
        "name": "Clavam 625",
        "mfr": "Alkem",
        "price": 195,
        "isGeneric": false,
        "dosage": "625mg"
      }
    ]
  },
  {
    "id": "med-mahacef200",
    "brand": "Mahacef 200",
    "generic": "Cefixime",
    "strength": "200mg",
    "form": "Tablet",
    "manufacturer": "Mankind Pharma",
    "price": 98,
    "unit": "Strip of 10 tablets",
    "category": "Antibiotics & Infections",
    "uses": "Typhoid fever, uncomplicated gonorrhea, acute otitis media, bronchitis, UTI",
    "sideEffects": "Loose stools, headache, indigestion",
    "description": "Third-generation oral cephalosporin resistant to beta-lactamase degradation.",
    "alternatives": [
      {
        "name": "Generic Cefixime 200mg Tablet",
        "mfr": "Jan Aushadhi / BPPI",
        "price": 18,
        "isGeneric": true,
        "dosage": "200mg"
      },
      {
        "name": "Taxim-O 200",
        "mfr": "Alkem",
        "price": 110,
        "isGeneric": false,
        "dosage": "200mg"
      },
      {
        "name": "Zifi 200",
        "mfr": "FDC Ltd",
        "price": 115,
        "isGeneric": false,
        "dosage": "200mg"
      }
    ]
  },
  {
    "id": "med-gudcef200",
    "brand": "Gudcef 200",
    "generic": "Cefpodoxime Proxetil",
    "strength": "200mg",
    "form": "Tablet",
    "manufacturer": "Mankind Pharma",
    "price": 165,
    "unit": "Strip of 10 tablets",
    "category": "Antibiotics & Infections",
    "uses": "Community acquired pneumonia, severe sinusitis, acute tonsillopharyngitis, skin infections",
    "sideEffects": "Diarrhea, vaginal fungal flare, abdominal pain",
    "description": "Advanced oral cephalosporin prodrug converted to active cefpodoxime for potent respiratory clearance.",
    "alternatives": [
      {
        "name": "Generic Cefpodoxime 200mg Tablet",
        "mfr": "Jan Aushadhi / BPPI",
        "price": 28,
        "isGeneric": true,
        "dosage": "200mg"
      },
      {
        "name": "Monocef-O 200",
        "mfr": "Aristo",
        "price": 175,
        "isGeneric": false,
        "dosage": "200mg"
      },
      {
        "name": "Doxcef 200",
        "mfr": "Lupin",
        "price": 180,
        "isGeneric": false,
        "dosage": "200mg"
      }
    ]
  },
  {
    "id": "med-monocef-o",
    "brand": "Monocef-O 200",
    "generic": "Cefpodoxime Proxetil",
    "strength": "200mg",
    "form": "Tablet",
    "manufacturer": "Aristo Pharmaceuticals",
    "price": 175,
    "unit": "Strip of 10 tablets",
    "category": "Antibiotics & Infections",
    "uses": "Bacterial bronchitis, urinary infections, furunculosis, tonsillitis",
    "sideEffects": "Nausea, loose stools, headache",
    "description": "Broad-spectrum oral antibiotic with high tissue penetration in lung and ENT parenchyma.",
    "alternatives": [
      {
        "name": "Generic Cefpodoxime 200mg Tablet",
        "mfr": "Jan Aushadhi / BPPI",
        "price": 28,
        "isGeneric": true,
        "dosage": "200mg"
      },
      {
        "name": "Gudcef 200",
        "mfr": "Mankind",
        "price": 165,
        "isGeneric": false,
        "dosage": "200mg"
      },
      {
        "name": "Zedocef 200",
        "mfr": "Macleods",
        "price": 170,
        "isGeneric": false,
        "dosage": "200mg"
      }
    ]
  },
  {
    "id": "med-cetil500",
    "brand": "Cetil 500",
    "generic": "Cefuroxime Axetil",
    "strength": "500mg",
    "form": "Tablet",
    "manufacturer": "Lupin Ltd",
    "price": 445,
    "unit": "Strip of 10 tablets",
    "category": "Antibiotics & Infections",
    "uses": "Surgical site prophylaxis, lyme disease, severe throat and bronchial infections",
    "sideEffects": "Gastrointestinal upset, candida overgrowth",
    "description": "Second-generation cephalosporin providing robust defense against penicillinase-producing staphylococci.",
    "alternatives": [
      {
        "name": "Generic Cefuroxime Axetil 500mg",
        "mfr": "Jan Aushadhi / BPPI",
        "price": 65,
        "isGeneric": true,
        "dosage": "500mg"
      },
      {
        "name": "Ceftum 500",
        "mfr": "GSK",
        "price": 475,
        "isGeneric": false,
        "dosage": "500mg"
      },
      {
        "name": "Forcef 500",
        "mfr": "Aristo",
        "price": 430,
        "isGeneric": false,
        "dosage": "500mg"
      }
    ]
  },
  {
    "id": "med-azee500",
    "brand": "Azee 500",
    "generic": "Azithromycin",
    "strength": "500mg",
    "form": "Tablet",
    "manufacturer": "Cipla Ltd",
    "price": 122,
    "unit": "Strip of 5 tablets",
    "category": "Antibiotics & Infections",
    "uses": "3 to 5 day course for throat infection, atypical pneumonia, chlamydia, typhoid",
    "sideEffects": "Diarrhea, stomach cramps, nausea",
    "description": "High-intracellular accumulation macrolide allowing convenient once-daily short course dosing.",
    "alternatives": [
      {
        "name": "Generic Azithromycin 500mg Tablet",
        "mfr": "Jan Aushadhi / BPPI",
        "price": 24,
        "isGeneric": true,
        "dosage": "500mg"
      },
      {
        "name": "Azithral 500",
        "mfr": "Alembic",
        "price": 125,
        "isGeneric": false,
        "dosage": "500mg"
      },
      {
        "name": "Zithrox 500",
        "mfr": "Macleods",
        "price": 115,
        "isGeneric": false,
        "dosage": "500mg"
      }
    ]
  },
  {
    "id": "med-zanocin200",
    "brand": "Zanocin 200",
    "generic": "Ofloxacin",
    "strength": "200mg",
    "form": "Tablet",
    "manufacturer": "Sun Pharma",
    "price": 85,
    "unit": "Strip of 10 tablets",
    "category": "Antibiotics & Infections",
    "uses": "Skin and soft tissue infections, pelvic inflammatory disease, uncomplicated urethritis, bronchitis",
    "sideEffects": "Nausea, headache, dizziness, insomnia",
    "description": "Fluoroquinolone antibiotic effective for enteric, pelvic and soft-tissue bacterial diseases.",
    "alternatives": [
      {
        "name": "Generic Ofloxacin 200mg Tablet",
        "mfr": "Jan Aushadhi / BPPI",
        "price": 14,
        "isGeneric": true,
        "dosage": "200mg"
      },
      {
        "name": "Zenflox 200",
        "mfr": "Mankind",
        "price": 78,
        "isGeneric": false,
        "dosage": "200mg"
      },
      {
        "name": "Oflox 200",
        "mfr": "Cipla",
        "price": 82,
        "isGeneric": false,
        "dosage": "200mg"
      }
    ]
  },
  {
    "id": "med-zenflox-oz",
    "brand": "Zenflox-OZ",
    "generic": "Ofloxacin + Ornidazole",
    "strength": "200mg + 500mg",
    "form": "Tablet",
    "manufacturer": "Mankind Pharma",
    "price": 115,
    "unit": "Strip of 10 tablets",
    "category": "Antibiotics & Infections",
    "uses": "Infectious bacterial and protozoal diarrhea, pelvic infections, dental abscesses",
    "sideEffects": "Metallic taste, nausea, dry mouth, headache",
    "description": "Synergistic dual antibiotic tackling both aerobic bacteria and anaerobic protozoa.",
    "alternatives": [
      {
        "name": "Generic Ofloxacin + Ornidazole Tablets",
        "mfr": "Jan Aushadhi / BPPI",
        "price": 22,
        "isGeneric": true,
        "dosage": "200mg+500mg"
      },
      {
        "name": "O2 Tablet",
        "mfr": "Medley",
        "price": 135,
        "isGeneric": false,
        "dosage": "200mg+500mg"
      },
      {
        "name": "Zanocin-OZ",
        "mfr": "Sun Pharma",
        "price": 140,
        "isGeneric": false,
        "dosage": "200mg+500mg"
      }
    ]
  },
  {
    "id": "med-metrogyl200",
    "brand": "Metrogyl 200",
    "generic": "Metronidazole",
    "strength": "200mg",
    "form": "Tablet",
    "manufacturer": "J.B. Chemicals & Pharmaceuticals",
    "price": 15,
    "unit": "Strip of 15 tablets",
    "category": "Antibiotics & Infections",
    "uses": "Amoebic dysentery, giardiasis, dental gum infections, trichomoniasis",
    "sideEffects": "Bitter metallic taste, dark urine, nausea; strictly avoid alcohol",
    "description": "Targeted anaerobic antibacterial and antiprotozoal agent.",
    "alternatives": [
      {
        "name": "Generic Metronidazole 200mg Tablet",
        "mfr": "Jan Aushadhi / BPPI",
        "price": 3.5,
        "isGeneric": true,
        "dosage": "200mg"
      },
      {
        "name": "Flagyl 200",
        "mfr": "Abbott",
        "price": 16,
        "isGeneric": false,
        "dosage": "200mg"
      }
    ]
  },
  {
    "id": "med-doxicip100",
    "brand": "Doxicip 100",
    "generic": "Doxycycline",
    "strength": "100mg",
    "form": "Capsule",
    "manufacturer": "Cipla Ltd",
    "price": 68,
    "unit": "Strip of 10 capsules",
    "category": "Antibiotics & Infections",
    "uses": "Severe acne vulgaris, scrub typhus, rickettsia, chlamydia, malaria prophylaxis",
    "sideEffects": "Esophageal burning (take with full glass of water, do not lie down for 30 mins), photosensitivity",
    "description": "Broad-spectrum tetracycline antibiotic reaching high lipid solubility in skin sebaceous glands.",
    "alternatives": [
      {
        "name": "Generic Doxycycline 100mg Capsule",
        "mfr": "Jan Aushadhi / BPPI",
        "price": 12,
        "isGeneric": true,
        "dosage": "100mg"
      },
      {
        "name": "Doxy-1",
        "mfr": "USV Ltd",
        "price": 65,
        "isGeneric": false,
        "dosage": "100mg"
      },
      {
        "name": "Microdox 100",
        "mfr": "Micro Labs",
        "price": 62,
        "isGeneric": false,
        "dosage": "100mg"
      }
    ]
  },
  {
    "id": "med-it-mac200",
    "brand": "IT-Mac 200",
    "generic": "Itraconazole",
    "strength": "200mg",
    "form": "Capsule",
    "manufacturer": "Macleods Pharmaceuticals",
    "price": 245,
    "unit": "Strip of 10 capsules",
    "category": "Antibiotics & Infections",
    "uses": "Recalcitrant fungal nail infections (onychomycosis), extensive tinea, systemic aspergillosis",
    "sideEffects": "Transient elevated liver enzymes, nausea, edema",
    "description": "High-affinity antifungal binding to fungal cytochrome P-450; take immediately after a fatty meal for absorption.",
    "alternatives": [
      {
        "name": "Generic Itraconazole 200mg Capsule",
        "mfr": "Jan Aushadhi / BPPI",
        "price": 45,
        "isGeneric": true,
        "dosage": "200mg"
      },
      {
        "name": "Canditral 200",
        "mfr": "Glenmark",
        "price": 235,
        "isGeneric": false,
        "dosage": "200mg"
      },
      {
        "name": "Sporanox 200",
        "mfr": "Janssen",
        "price": 380,
        "isGeneric": false,
        "dosage": "200mg"
      }
    ]
  },
  {
    "id": "med-bandey400",
    "brand": "Bandey 400",
    "generic": "Albendazole",
    "strength": "400mg",
    "form": "Chewable Tablet",
    "manufacturer": "Mankind Pharma",
    "price": 10,
    "unit": "Single Chewable Tablet",
    "category": "Antibiotics & Infections",
    "uses": "Single chewable tablet for complete intestinal worm deworming in children and adults",
    "sideEffects": "Transient abdominal cramp, nausea",
    "description": "WHO recommended broad spectrum deworming medicine killing adult worms, larvae and eggs.",
    "alternatives": [
      {
        "name": "Generic Albendazole 400mg Chewable",
        "mfr": "Jan Aushadhi / BPPI",
        "price": 2.5,
        "isGeneric": true,
        "dosage": "400mg"
      },
      {
        "name": "Zentel 400",
        "mfr": "GSK",
        "price": 12,
        "isGeneric": false,
        "dosage": "400mg"
      },
      {
        "name": "Noworm 400",
        "mfr": "Alkem",
        "price": 11,
        "isGeneric": false,
        "dosage": "400mg"
      }
    ]
  },
  {
    "id": "med-mox500",
    "brand": "Mox 500",
    "generic": "Amoxicillin",
    "strength": "500mg",
    "form": "Capsule",
    "manufacturer": "Sun Pharma",
    "price": 82,
    "unit": "Strip of 15 capsules",
    "category": "Antibiotics & Infections",
    "uses": "Bacterial ear, nose, throat, dental and genitourinary tract infections",
    "sideEffects": "Mild nausea, rash, diarrhea",
    "description": "Standard aminopenicillin bactericidal against cell wall synthesis.",
    "alternatives": [
      {
        "name": "Generic Amoxicillin 500mg Capsule",
        "mfr": "Jan Aushadhi / BPPI",
        "price": 16,
        "isGeneric": true,
        "dosage": "500mg"
      },
      {
        "name": "Novamox 500",
        "mfr": "Cipla",
        "price": 78,
        "isGeneric": false,
        "dosage": "500mg"
      },
      {
        "name": "Almox 500",
        "mfr": "Alkem",
        "price": 75,
        "isGeneric": false,
        "dosage": "500mg"
      }
    ]
  },
  {
    "id": "med-ciplox250",
    "brand": "Ciplox 250",
    "generic": "Ciprofloxacin",
    "strength": "250mg",
    "form": "Tablet",
    "manufacturer": "Cipla Ltd",
    "price": 28,
    "unit": "Strip of 10 tablets",
    "category": "Antibiotics & Infections",
    "uses": "Mild bacterial diarrhea, uncomplicated cystitis, superficial soft tissue infection",
    "sideEffects": "Mild nausea, headache",
    "description": "Lower dose ciprofloxacin for uncomplicated infections minimizing gastrointestinal disturbance.",
    "alternatives": [
      {
        "name": "Generic Ciprofloxacin 250mg Tablet",
        "mfr": "Jan Aushadhi / BPPI",
        "price": 8,
        "isGeneric": true,
        "dosage": "250mg"
      },
      {
        "name": "Cifran 250",
        "mfr": "Sun Pharma",
        "price": 29,
        "isGeneric": false,
        "dosage": "250mg"
      }
    ]
  },
  {
    "id": "med-althrocin500",
    "brand": "Althrocin 500",
    "generic": "Erythromycin",
    "strength": "500mg",
    "form": "Tablet",
    "manufacturer": "Alembic Pharmaceuticals",
    "price": 110,
    "unit": "Strip of 10 tablets",
    "category": "Antibiotics & Infections",
    "uses": "Penicillin-allergic patients with throat, chest and skin infections; acne vulgaris",
    "sideEffects": "Nausea, stomach cramping, diarrhea",
    "description": "First-generation macrolide antibiotic alternative for penicillin-sensitive patients.",
    "alternatives": [
      {
        "name": "Generic Erythromycin 500mg Tablet",
        "mfr": "Jan Aushadhi / BPPI",
        "price": 22,
        "isGeneric": true,
        "dosage": "500mg"
      },
      {
        "name": "Erythrocin 500",
        "mfr": "Pfizer",
        "price": 125,
        "isGeneric": false,
        "dosage": "500mg"
      }
    ]
  },
  {
    "id": "med-farobact200",
    "brand": "Farobact 200",
    "generic": "Faropenem",
    "strength": "200mg",
    "form": "Tablet",
    "manufacturer": "Cipla Ltd",
    "price": 645,
    "unit": "Strip of 6 tablets",
    "category": "Antibiotics & Infections",
    "uses": "Resistant upper/lower respiratory tract infection, recurrent UTI, refractory ENT infection",
    "sideEffects": "Diarrhea, abdominal pain, rash",
    "description": "Oral penem antibiotic structurally related to carbapenems with ultra-broad spectrum.",
    "alternatives": [
      {
        "name": "Generic Faropenem 200mg Tablet",
        "mfr": "Jan Aushadhi / BPPI",
        "price": 95,
        "isGeneric": true,
        "dosage": "200mg"
      },
      {
        "name": "Faronem 200",
        "mfr": "Sun Pharma",
        "price": 620,
        "isGeneric": false,
        "dosage": "200mg"
      },
      {
        "name": "Duopen 200",
        "mfr": "Glenmark",
        "price": 610,
        "isGeneric": false,
        "dosage": "200mg"
      }
    ]
  },
  {
    "id": "med-burnol",
    "brand": "Burnol",
    "generic": "Aminacrine HCl + Cetrimide",
    "strength": "0.1% + 0.5% w/w",
    "form": "Cream",
    "manufacturer": "Morepen Laboratories",
    "price": 68,
    "unit": "20g Tube",
    "category": "Pain & Fever",
    "uses": "First aid for minor burns, scalds, superficial cuts, abrasions",
    "sideEffects": "Mild stinging upon application",
    "description": "Legendary yellow burn antiseptic cream preventing infection and cooling damaged skin tissues.",
    "alternatives": [
      {
        "name": "Generic Antiseptic Burn Cream",
        "mfr": "Jan Aushadhi / BPPI",
        "price": 15,
        "isGeneric": true,
        "dosage": "20g Cream"
      },
      {
        "name": "Silverex Ionic",
        "mfr": "Ranbaxy",
        "price": 95,
        "isGeneric": false,
        "dosage": "20g Cream"
      },
      {
        "name": "Megaheal Gel",
        "mfr": "Aristo",
        "price": 110,
        "isGeneric": false,
        "dosage": "20g Cream"
      }
    ]
  },
  {
    "id": "med-silverex-ionic",
    "brand": "Silverex Ionic Gel",
    "generic": "Silver Nitrate + Chlorhexidine Gluconate",
    "strength": "0.2% + 0.2% w/w",
    "form": "Gel",
    "manufacturer": "Sun Pharma",
    "price": 145,
    "unit": "20g Tube",
    "category": "Pain & Fever",
    "uses": "Second degree burns, diabetic foot wounds, bedsores, venous stasis ulcers",
    "sideEffects": "Temporary dark skin staining, mild burning",
    "description": "Sustained ionic silver release eradicating multi-drug resistant wound biofilms.",
    "alternatives": [
      {
        "name": "Generic Silver Nitrate + Chlorhexidine Gel",
        "mfr": "Jan Aushadhi / BPPI",
        "price": 28,
        "isGeneric": true,
        "dosage": "20g Gel"
      },
      {
        "name": "Megaheal Gel",
        "mfr": "Aristo",
        "price": 125,
        "isGeneric": false,
        "dosage": "20g Gel"
      },
      {
        "name": "Silvrpex",
        "mfr": "Cipla",
        "price": 135,
        "isGeneric": false,
        "dosage": "20g Gel"
      }
    ]
  },
  {
    "id": "med-t-bact-oint",
    "brand": "T-Bact 2% Ointment",
    "generic": "Mupirocin",
    "strength": "2% w/w",
    "form": "Ointment",
    "manufacturer": "GlaxoSmithKline",
    "price": 135,
    "unit": "5g Tube",
    "category": "Pain & Fever",
    "uses": "Impetigo, foliculitis, furunculosis, surgical suture antisepsis, MRSA wound infection",
    "sideEffects": "Local stinging, burning, dry skin",
    "description": "Naturally derived topical antibiotic specifically inhibiting bacterial isoleucyl-tRNA synthetase.",
    "alternatives": [
      {
        "name": "Generic Mupirocin 2% Ointment",
        "mfr": "Jan Aushadhi / BPPI",
        "price": 26,
        "isGeneric": true,
        "dosage": "5g Ointment"
      },
      {
        "name": "Bactroban 2%",
        "mfr": "GSK",
        "price": 140,
        "isGeneric": false,
        "dosage": "5g Ointment"
      },
      {
        "name": "Mupicip 2%",
        "mfr": "Cipla",
        "price": 120,
        "isGeneric": false,
        "dosage": "5g Ointment"
      }
    ]
  },
  {
    "id": "med-fucidin-cream",
    "brand": "Fucidin 2% Cream",
    "generic": "Fusidic Acid",
    "strength": "2% w/w",
    "form": "Cream",
    "manufacturer": "Sun Pharma",
    "price": 140,
    "unit": "10g Tube",
    "category": "Pain & Fever",
    "uses": "Infected cuts, cracked skin fissures, sycosis barbae, paronychia",
    "sideEffects": "Rare mild erythema",
    "description": "Steroidal antibacterial that penetrates intact skin layers to reach deep dermis infections.",
    "alternatives": [
      {
        "name": "Generic Fusidic Acid 2% Cream",
        "mfr": "Jan Aushadhi / BPPI",
        "price": 25,
        "isGeneric": true,
        "dosage": "10g Cream"
      },
      {
        "name": "Fucibet Cream",
        "mfr": "Sun Pharma",
        "price": 155,
        "isGeneric": false,
        "dosage": "10g Cream"
      },
      {
        "name": "Fusigen",
        "mfr": "Cipla",
        "price": 130,
        "isGeneric": false,
        "dosage": "10g Cream"
      }
    ]
  },
  {
    "id": "med-quadriderm-rf",
    "brand": "Quadriderm RF Cream",
    "generic": "Beclomethasone + Clotrimazole + Neomycin",
    "strength": "0.025% + 1% + 0.5% w/w",
    "form": "Cream",
    "manufacturer": "Fulford India",
    "price": 98,
    "unit": "15g Tube",
    "category": "Pain & Fever",
    "uses": "Mixed fungal-bacterial infected eczema, intertrigo in skin folds, groin rash, athlete's foot",
    "sideEffects": "Skin thinning if overused on face or groin",
    "description": "Four-way action: anti-inflammatory, antipruritic, antifungal and antibacterial broad coverage.",
    "alternatives": [
      {
        "name": "Generic Triple Skin Action Cream (Beclo+Clotri+Neo)",
        "mfr": "Jan Aushadhi / BPPI",
        "price": 20,
        "isGeneric": true,
        "dosage": "15g Cream"
      },
      {
        "name": "Candid-B",
        "mfr": "Glenmark",
        "price": 95,
        "isGeneric": false,
        "dosage": "15g Cream"
      },
      {
        "name": "Surfaz-SN",
        "mfr": "Franco-Indian",
        "price": 88,
        "isGeneric": false,
        "dosage": "15g Cream"
      }
    ]
  },
  {
    "id": "med-candid-powder",
    "brand": "Candid Dusting Powder",
    "generic": "Clotrimazole",
    "strength": "1% w/w",
    "form": "Dusting Powder",
    "manufacturer": "Glenmark Pharmaceuticals",
    "price": 145,
    "unit": "100g Bottle",
    "category": "Pain & Fever",
    "uses": "Prickly heat, fungal sweat rash, jock itch (tinea cruris), athlete's foot, absorbs moisture",
    "sideEffects": "Mild skin peeling or redness in hypersensitive skin",
    "description": "Absorbent antifungal talc preventing sweat buildup while eradicating fungal mycelia.",
    "alternatives": [
      {
        "name": "Generic Clotrimazole 1% Dusting Powder",
        "mfr": "Jan Aushadhi / BPPI",
        "price": 28,
        "isGeneric": true,
        "dosage": "100g Powder"
      },
      {
        "name": "Abzorb Powder",
        "mfr": "Sun Pharma",
        "price": 140,
        "isGeneric": false,
        "dosage": "100g Powder"
      },
      {
        "name": "Clocip Powder",
        "mfr": "Cipla Ltd",
        "price": 130,
        "isGeneric": false,
        "dosage": "100g Powder"
      }
    ]
  },
  {
    "id": "med-abzorb-powder",
    "brand": "Abzorb Antifungal Powder",
    "generic": "Clotrimazole",
    "strength": "1% w/w",
    "form": "Dusting Powder",
    "manufacturer": "Sun Pharma",
    "price": 140,
    "unit": "100g Dispenser",
    "category": "Pain & Fever",
    "uses": "Prevents fungal reinfection, soothes underarm and groin chafing, eliminates body odor from fungus",
    "sideEffects": "Very gentle on intact skin",
    "description": "Highly purified pharmaceutical talc combined with micronized clotrimazole for summer hygiene.",
    "alternatives": [
      {
        "name": "Generic Clotrimazole 1% Dusting Powder",
        "mfr": "Jan Aushadhi / BPPI",
        "price": 28,
        "isGeneric": true,
        "dosage": "100g Powder"
      },
      {
        "name": "Candid Powder",
        "mfr": "Glenmark",
        "price": 145,
        "isGeneric": false,
        "dosage": "100g Powder"
      },
      {
        "name": "Nuforce Powder",
        "mfr": "Mankind",
        "price": 120,
        "isGeneric": false,
        "dosage": "100g Powder"
      }
    ]
  },
  {
    "id": "med-lulifin-cream",
    "brand": "Lulifin 1% Cream",
    "generic": "Luliconazole",
    "strength": "1% w/w",
    "form": "Cream",
    "manufacturer": "Sun Pharma",
    "price": 245,
    "unit": "20g Tube",
    "category": "Pain & Fever",
    "uses": "Stubborn ringworm (tinea corporis), jock itch (tinea cruris), tinea pedis",
    "sideEffects": "Local contact irritation, mild burning",
    "description": "Latest generation imidazole with once-daily convenience clearing fungal infections in half the duration of older creams.",
    "alternatives": [
      {
        "name": "Generic Luliconazole 1% Cream",
        "mfr": "Jan Aushadhi / BPPI",
        "price": 45,
        "isGeneric": true,
        "dosage": "20g Cream"
      },
      {
        "name": "Lulican",
        "mfr": "Glenmark",
        "price": 235,
        "isGeneric": false,
        "dosage": "20g Cream"
      },
      {
        "name": "Lulibet",
        "mfr": "Cadila",
        "price": 220,
        "isGeneric": false,
        "dosage": "20g Cream"
      }
    ]
  },
  {
    "id": "med-terbinaforce500",
    "brand": "Terbinaforce 500mg",
    "generic": "Terbinafine Hydrochloride",
    "strength": "500mg",
    "form": "Tablet",
    "manufacturer": "Mankind Pharma",
    "price": 185,
    "unit": "Strip of 7 tablets",
    "category": "Pain & Fever",
    "uses": "Widespread ringworm, deep onychomycosis fungal nail bed infection",
    "sideEffects": "Loss of taste, headache, gastrointestinal fullness, elevated liver enzymes",
    "description": "Allylamine antifungal inhibiting squalene epoxidase causing rapid fungal cell lysis.",
    "alternatives": [
      {
        "name": "Generic Terbinafine 500mg Tablet",
        "mfr": "Jan Aushadhi / BPPI",
        "price": 32,
        "isGeneric": true,
        "dosage": "500mg"
      },
      {
        "name": "Lamisil 500",
        "mfr": "Novartis",
        "price": 310,
        "isGeneric": false,
        "dosage": "500mg"
      },
      {
        "name": "Sebifin 500",
        "mfr": "Sun Pharma",
        "price": 195,
        "isGeneric": false,
        "dosage": "500mg"
      }
    ]
  },
  {
    "id": "med-caladryl-lotion",
    "brand": "Caladryl Lotion",
    "generic": "Calamine + Diphenhydramine",
    "strength": "8% + 1% w/v",
    "form": "Lotion",
    "manufacturer": "Piramal Healthcare",
    "price": 95,
    "unit": "120ml Bottle",
    "category": "Pain & Fever",
    "uses": "Sunburn, insect bites, chickenpox itching, prickly heat, poison ivy contact dermatitis",
    "sideEffects": "Mild skin dryness",
    "description": "Soothing pink calamine lotion with antihistamine to stop the itch-scratch cycle on contact.",
    "alternatives": [
      {
        "name": "Generic Calamine + Diphenhydramine Lotion",
        "mfr": "Jan Aushadhi / BPPI",
        "price": 22,
        "isGeneric": true,
        "dosage": "120ml Lotion"
      },
      {
        "name": "Lacto Calamine",
        "mfr": "Piramal",
        "price": 110,
        "isGeneric": false,
        "dosage": "120ml Lotion"
      },
      {
        "name": "Calamine Lotion IP",
        "mfr": "Hindustan Labs",
        "price": 40,
        "isGeneric": true,
        "dosage": "120ml Lotion"
      }
    ]
  },
  {
    "id": "med-lacto-calamine",
    "brand": "Lacto Calamine Daily Lotion",
    "generic": "Kaolin + Zinc Oxide + Aloe Vera",
    "strength": "120ml Bottle",
    "form": "Lotion",
    "manufacturer": "Piramal Pharma",
    "price": 120,
    "unit": "120ml Bottle",
    "category": "Pain & Fever",
    "uses": "Oily skin acne control, pimple redness, absorbs excess facial sebum, soothe blemishes",
    "sideEffects": "Skin tightness if applied on dry skin types",
    "description": "Oil-control clay lotion providing cooling zinc oxide and soothing kaolin for acne-prone skin.",
    "alternatives": [
      {
        "name": "Generic Zinc Oxide Calamine Lotion",
        "mfr": "Jan Aushadhi / BPPI",
        "price": 24,
        "isGeneric": true,
        "dosage": "120ml Lotion"
      },
      {
        "name": "Caladryl Lotion",
        "mfr": "Piramal",
        "price": 95,
        "isGeneric": false,
        "dosage": "120ml Lotion"
      }
    ]
  },
  {
    "id": "med-tenovate-cream",
    "brand": "Tenovate Cream",
    "generic": "Clobetasol Propionate",
    "strength": "0.05% w/w",
    "form": "Cream",
    "manufacturer": "GlaxoSmithKline",
    "price": 115,
    "unit": "15g Tube",
    "category": "Pain & Fever",
    "uses": "Severe plaque psoriasis, lichen planus, recalcitrant eczema unresponsive to weaker steroids",
    "sideEffects": "Skin atrophy, telangiectasia, secondary skin infection (use short-term max 2 weeks)",
    "description": "Super-high-potency class-1 topical corticosteroid for acute dermatological crises.",
    "alternatives": [
      {
        "name": "Generic Clobetasol 0.05% Cream",
        "mfr": "Jan Aushadhi / BPPI",
        "price": 20,
        "isGeneric": true,
        "dosage": "15g Cream"
      },
      {
        "name": "Dermovate",
        "mfr": "GSK",
        "price": 125,
        "isGeneric": false,
        "dosage": "15g Cream"
      },
      {
        "name": "Clobetamil",
        "mfr": "Cosme",
        "price": 105,
        "isGeneric": false,
        "dosage": "15g Cream"
      }
    ]
  },
  {
    "id": "med-betnovate-n",
    "brand": "Betnovate-N",
    "generic": "Betamethasone + Neomycin",
    "strength": "0.1% + 0.5% w/w",
    "form": "Cream",
    "manufacturer": "GlaxoSmithKline",
    "price": 55,
    "unit": "20g Tube",
    "category": "Pain & Fever",
    "uses": "Bacterially infected eczema, infected cuts, dermatitis, insect bite infection",
    "sideEffects": "Local burning, dry skin",
    "description": "Reliable combination of topical steroid and aminoglycoside neomycin.",
    "alternatives": [
      {
        "name": "Generic Betamethasone + Neomycin Cream",
        "mfr": "Jan Aushadhi / BPPI",
        "price": 14,
        "isGeneric": true,
        "dosage": "20g Cream"
      },
      {
        "name": "Betnovate-C",
        "mfr": "GSK",
        "price": 65,
        "isGeneric": false,
        "dosage": "20g Cream"
      },
      {
        "name": "Dipgent",
        "mfr": "Fulford",
        "price": 50,
        "isGeneric": false,
        "dosage": "20g Cream"
      }
    ]
  },
  {
    "id": "med-panderm-plus",
    "brand": "Panderm Plus",
    "generic": "Clobetasol + Neomycin + Miconazole",
    "strength": "0.05% + 0.5% + 2% w/w",
    "form": "Cream",
    "manufacturer": "Macleods Pharmaceuticals",
    "price": 95,
    "unit": "15g Tube",
    "category": "Pain & Fever",
    "uses": "Mixed bacterial-fungal skin infections, infected dermatitis, resistant tinea cruris",
    "sideEffects": "Skin thinning, burning, hypopigmentation",
    "description": "Triple combination cream widely used for inflamed mixed-infection skin lesions.",
    "alternatives": [
      {
        "name": "Generic Triple Skin Action Ointment",
        "mfr": "Jan Aushadhi / BPPI",
        "price": 19,
        "isGeneric": true,
        "dosage": "15g Cream"
      },
      {
        "name": "Quadriderm RF",
        "mfr": "Fulford",
        "price": 98,
        "isGeneric": false,
        "dosage": "15g Cream"
      },
      {
        "name": "Fourderm",
        "mfr": "Cipla",
        "price": 92,
        "isGeneric": false,
        "dosage": "15g Cream"
      }
    ]
  },
  {
    "id": "med-vicco-turmeric",
    "brand": "Vicco Turmeric Skin Cream",
    "generic": "Turmeric (Curcuma Longa) + Sandalwood Oil",
    "strength": "30g Tube",
    "form": "Ayurvedic Cream",
    "manufacturer": "Vicco Laboratories",
    "price": 90,
    "unit": "30g Tube",
    "category": "Pain & Fever",
    "uses": "Minor pimples, superficial skin blemishes, natural herbal antiseptic wound healing",
    "sideEffects": "Safe and natural herbal base",
    "description": "Ayurvedic microbicidal cream utilizing natural curcumin and sandalwood oil for skin tone and healing.",
    "alternatives": [
      {
        "name": "Generic Turmeric Antiseptic Cream",
        "mfr": "Jan Aushadhi / BPPI",
        "price": 20,
        "isGeneric": true,
        "dosage": "30g Cream"
      },
      {
        "name": "Boroline Antiseptic Cream",
        "mfr": "G.D. Pharmaceuticals",
        "price": 42,
        "isGeneric": false,
        "dosage": "30g Cream"
      }
    ]
  },
  {
    "id": "med-tobastar-drops",
    "brand": "Tobastar Eye Drops",
    "generic": "Tobramycin",
    "strength": "0.3% w/v",
    "form": "Eye Drops",
    "manufacturer": "Mankind Pharma",
    "price": 65,
    "unit": "5ml Vial",
    "category": "Antibiotics & Infections",
    "uses": "Bacterial blepharitis, conjunctivitis, stye, post-cataract surgery antibacterial prophylaxis",
    "sideEffects": "Mild stinging, eye itching, eyelid swelling",
    "description": "Potent aminoglycoside ophthalmic solution targeting resistant ocular Pseudomonas and Staphylococci.",
    "alternatives": [
      {
        "name": "Generic Tobramycin 0.3% Eye Drops",
        "mfr": "Jan Aushadhi / BPPI",
        "price": 14,
        "isGeneric": true,
        "dosage": "5ml Drops"
      },
      {
        "name": "Tobrex Drops",
        "mfr": "Novartis",
        "price": 110,
        "isGeneric": false,
        "dosage": "5ml Drops"
      },
      {
        "name": "Tobacin",
        "mfr": "Aristo",
        "price": 60,
        "isGeneric": false,
        "dosage": "5ml Drops"
      }
    ]
  },
  {
    "id": "med-moxicip-drops",
    "brand": "Moxicip Eye Drops",
    "generic": "Moxifloxacin",
    "strength": "0.5% w/v",
    "form": "Eye Drops",
    "manufacturer": "Cipla Ltd",
    "price": 115,
    "unit": "5ml Vial",
    "category": "Antibiotics & Infections",
    "uses": "Severe bacterial pink eye, corneal ulcer, pre-and-post eye surgery infection prevention",
    "sideEffects": "Temporary blurred vision, eye discomfort",
    "description": "Fourth-generation fluoroquinolone eye drop with broad spectrum coverage including atypical bacteria.",
    "alternatives": [
      {
        "name": "Generic Moxifloxacin 0.5% Eye Drops",
        "mfr": "Jan Aushadhi / BPPI",
        "price": 22,
        "isGeneric": true,
        "dosage": "5ml Drops"
      },
      {
        "name": "Vigamox",
        "mfr": "Alcon",
        "price": 185,
        "isGeneric": false,
        "dosage": "5ml Drops"
      },
      {
        "name": "Milflox",
        "mfr": "Sun Pharma",
        "price": 110,
        "isGeneric": false,
        "dosage": "5ml Drops"
      }
    ]
  },
  {
    "id": "med-systane-ultra",
    "brand": "Systane Ultra Eye Drops",
    "generic": "Polyethylene Glycol + Propylene Glycol",
    "strength": "0.4% + 0.3% w/v",
    "form": "Eye Drops",
    "manufacturer": "Alcon Laboratories",
    "price": 385,
    "unit": "10ml Bottle",
    "category": "Pain & Fever",
    "uses": "Severe dry eye syndrome, burning, stinging, ocular foreign body sensation, prolonged screen fatigue",
    "sideEffects": "Temporary blurred vision upon blinking",
    "description": "Advanced HP-Guar dual-polymer artificial tear creating a viscoelastic shielding matrix over the cornea.",
    "alternatives": [
      {
        "name": "Generic PEG + Propylene Glycol Eye Drops",
        "mfr": "Jan Aushadhi / BPPI",
        "price": 42,
        "isGeneric": true,
        "dosage": "10ml Drops"
      },
      {
        "name": "Refresh Tears",
        "mfr": "Allergan",
        "price": 155,
        "isGeneric": false,
        "dosage": "10ml Drops"
      },
      {
        "name": "Tears Natural",
        "mfr": "Alcon",
        "price": 145,
        "isGeneric": false,
        "dosage": "10ml Drops"
      }
    ]
  },
  {
    "id": "med-itone-drops",
    "brand": "Itone Eye Drops",
    "generic": "Neem + Tulsi + Turmeric + Rosewater + Camphor",
    "strength": "10ml Bottle",
    "form": "Ayurvedic Eye Drops",
    "manufacturer": "Dey's Medical",
    "price": 65,
    "unit": "10ml Bottle",
    "category": "Pain & Fever",
    "uses": "Tired eyes, pollution irritation, burning from reading, daily eye soothing",
    "sideEffects": "Pleasant cooling sensation; avoid if severe eye infection present",
    "description": "Time-tested sterile herbal ophthalmic solution providing soothing natural relief from screen strain.",
    "alternatives": [
      {
        "name": "Generic Sterile Herbal Eye Drops",
        "mfr": "Jan Aushadhi / BPPI",
        "price": 16,
        "isGeneric": true,
        "dosage": "10ml Drops"
      },
      {
        "name": "Ophthacare",
        "mfr": "Himalaya",
        "price": 70,
        "isGeneric": false,
        "dosage": "10ml Drops"
      }
    ]
  },
  {
    "id": "med-otorex-drops",
    "brand": "Otorex Ear Drops",
    "generic": "Paradichlorobenzene + Benzocaine + Chlorbutol + Turpentine Oil",
    "strength": "2% + 2.7% + 5% + 15% w/v",
    "form": "Ear Drops",
    "manufacturer": "Laborate Pharmaceuticals",
    "price": 75,
    "unit": "10ml Dropper Bottle",
    "category": "Pain & Fever",
    "uses": "Softens impacted hardened ear wax, relieves ear fullness, earache prior to syringing",
    "sideEffects": "Local ear canal warmth, transient mild stinging",
    "description": "Cerumenolytic ear drops dissolving stubborn oxidized ear wax blocks while benzocaine numbs pain.",
    "alternatives": [
      {
        "name": "Generic Ear Wax Softening Drops",
        "mfr": "Jan Aushadhi / BPPI",
        "price": 18,
        "isGeneric": true,
        "dosage": "10ml Drops"
      },
      {
        "name": "Clearwax Drops",
        "mfr": "Cipla Ltd",
        "price": 85,
        "isGeneric": false,
        "dosage": "10ml Drops"
      },
      {
        "name": "Waxolve",
        "mfr": "Sun Pharma",
        "price": 78,
        "isGeneric": false,
        "dosage": "10ml Drops"
      }
    ]
  },
  {
    "id": "med-clearwax-drops",
    "brand": "Clearwax Ear Drops",
    "generic": "Sodium Bicarbonate + Glycerin",
    "strength": "10ml Bottle",
    "form": "Ear Drops",
    "manufacturer": "Cipla Ltd",
    "price": 85,
    "unit": "10ml Dropper Bottle",
    "category": "Pain & Fever",
    "uses": "Gentle natural ear wax softening, eases wax removal safely without harsh solvents",
    "sideEffects": "Safe and gentle formulation",
    "description": "Alkaline solution releasing micro-bubbles that emulsify and loosen stubborn dry cerumen plugs.",
    "alternatives": [
      {
        "name": "Generic Sodium Bicarbonate Ear Drops",
        "mfr": "Jan Aushadhi / BPPI",
        "price": 15,
        "isGeneric": true,
        "dosage": "10ml Drops"
      },
      {
        "name": "Otorex Drops",
        "mfr": "Laborate",
        "price": 75,
        "isGeneric": false,
        "dosage": "10ml Drops"
      },
      {
        "name": "Soluwax",
        "mfr": "Alkem",
        "price": 72,
        "isGeneric": false,
        "dosage": "10ml Drops"
      }
    ]
  },
  {
    "id": "med-candid-ear-drops",
    "brand": "Candid Ear Drops",
    "generic": "Clotrimazole + Lignocaine",
    "strength": "1% + 2% w/v",
    "form": "Ear Drops",
    "manufacturer": "Glenmark Pharmaceuticals",
    "price": 95,
    "unit": "10ml Dropper Bottle",
    "category": "Antibiotics & Infections",
    "uses": "Otomycosis (fungal ear infection), fungal swimmer's ear, itching and ear canal pain",
    "sideEffects": "Mild ear canal stinging, temporary dizziness if drops are cold",
    "description": "Combines broad-spectrum clotrimazole antifungal with rapid local anesthetic lignocaine for soothing relief.",
    "alternatives": [
      {
        "name": "Generic Clotrimazole + Lignocaine Ear Drops",
        "mfr": "Jan Aushadhi / BPPI",
        "price": 20,
        "isGeneric": true,
        "dosage": "10ml Drops"
      },
      {
        "name": "Otiflox Ear Drops",
        "mfr": "Cipla Ltd",
        "price": 88,
        "isGeneric": false,
        "dosage": "10ml Drops"
      },
      {
        "name": "Canesten Ear Drops",
        "mfr": "Bayer",
        "price": 110,
        "isGeneric": false,
        "dosage": "10ml Drops"
      }
    ]
  },
  {
    "id": "med-otocin-d",
    "brand": "Otocin-D Ear Drops",
    "generic": "Ofloxacin + Dexamethasone",
    "strength": "0.3% + 0.1% w/v",
    "form": "Ear Drops",
    "manufacturer": "Cipla Ltd",
    "price": 68,
    "unit": "5ml Dropper Bottle",
    "category": "Antibiotics & Infections",
    "uses": "Acute otitis externa, bacterial ear discharge, inflamed swollen ear canal",
    "sideEffects": "Mild burning or stinging inside ear canal",
    "description": "Fluoroquinolone antibiotic plus potent steroid reducing swelling, redness and clearing bacterial otitis.",
    "alternatives": [
      {
        "name": "Generic Ofloxacin + Dexamethasone Ear Drops",
        "mfr": "Jan Aushadhi / BPPI",
        "price": 14,
        "isGeneric": true,
        "dosage": "5ml Drops"
      },
      {
        "name": "Otek-AC",
        "mfr": "FDC Ltd",
        "price": 65,
        "isGeneric": false,
        "dosage": "5ml Drops"
      },
      {
        "name": "Festive-D",
        "mfr": "Mankind",
        "price": 58,
        "isGeneric": false,
        "dosage": "5ml Drops"
      }
    ]
  },
  {
    "id": "med-betadine-gargle",
    "brand": "Betadine 2% Gargle",
    "generic": "Povidone Iodine",
    "strength": "2% w/v",
    "form": "Oral Rinse / Gargle",
    "manufacturer": "Win-Medicare",
    "price": 185,
    "unit": "100ml Bottle",
    "category": "Pain & Fever",
    "uses": "Sore throat, post-tonsillectomy oral hygiene, mouth ulcers, bacterial and viral pharyngitis",
    "sideEffects": "Temporary teeth staining (easily brushed off), metallic taste",
    "description": "Antiseptic mouth rinse releasing free iodine, destroying virus, bacteria and fungi in 30 seconds.",
    "alternatives": [
      {
        "name": "Generic Povidone Iodine 2% Gargle",
        "mfr": "Jan Aushadhi / BPPI",
        "price": 34,
        "isGeneric": true,
        "dosage": "100ml Gargle"
      },
      {
        "name": "Cipladine Gargle",
        "mfr": "Cipla Ltd",
        "price": 165,
        "isGeneric": false,
        "dosage": "100ml Gargle"
      },
      {
        "name": "Wokadine Gargle",
        "mfr": "Wockhardt",
        "price": 170,
        "isGeneric": false,
        "dosage": "100ml Gargle"
      }
    ]
  },
  {
    "id": "med-hexidine-mouthwash",
    "brand": "Hexidine Mouthwash",
    "generic": "Chlorhexidine Gluconate",
    "strength": "0.2% w/v",
    "form": "Mouthwash",
    "manufacturer": "ICPA Health Products",
    "price": 145,
    "unit": "160ml Bottle",
    "category": "Pain & Fever",
    "uses": "Gingivitis, bleeding gums, dental plaque reduction, post-tooth extraction antisepsis",
    "sideEffects": "Reversible superficial brown tooth staining with prolonged use, altered taste",
    "description": "Gold standard dental antiseptic binding to oral mucosa with 12-hour sustained antibacterial protection.",
    "alternatives": [
      {
        "name": "Generic Chlorhexidine 0.2% Mouthwash",
        "mfr": "Jan Aushadhi / BPPI",
        "price": 28,
        "isGeneric": true,
        "dosage": "160ml Mouthwash"
      },
      {
        "name": "Clohex Mouthwash",
        "mfr": "Dr. Reddy's",
        "price": 135,
        "isGeneric": false,
        "dosage": "160ml Mouthwash"
      },
      {
        "name": "Rexidin Mouthwash",
        "mfr": "Indoco",
        "price": 125,
        "isGeneric": false,
        "dosage": "160ml Mouthwash"
      }
    ]
  },
  {
    "id": "med-sensodyne-rapid",
    "brand": "Sensodyne Rapid Relief",
    "generic": "Strontium Acetate + Sodium Fluoride",
    "strength": "80g Tube",
    "form": "Medicated Toothpaste",
    "manufacturer": "GSK Consumer Healthcare",
    "price": 215,
    "unit": "80g Tube",
    "category": "Pain & Fever",
    "uses": "Instant relief from acute tooth sensitivity to cold ice cream, hot tea and sweet foods",
    "sideEffects": "Safe for daily brushing",
    "description": "Clinically proven formula that quickly creates a physical mineral seal over exposed dentin tubules.",
    "alternatives": [
      {
        "name": "Generic Tooth Sensitivity Medicated Paste",
        "mfr": "Jan Aushadhi / BPPI",
        "price": 38,
        "isGeneric": true,
        "dosage": "80g Paste"
      },
      {
        "name": "Senquel-F",
        "mfr": "Group Pharma",
        "price": 165,
        "isGeneric": false,
        "dosage": "80g Paste"
      },
      {
        "name": "Thermoseal",
        "mfr": "ICPA",
        "price": 155,
        "isGeneric": false,
        "dosage": "80g Paste"
      }
    ]
  },
  {
    "id": "med-senquel-f",
    "brand": "Senquel-F Toothpaste",
    "generic": "Potassium Nitrate + Sodium Monofluorophosphate",
    "strength": "5% + 0.7% w/w",
    "form": "Medicated Toothpaste",
    "manufacturer": "Group Pharmaceuticals",
    "price": 165,
    "unit": "100g Tube",
    "category": "Pain & Fever",
    "uses": "Depolarizes dental nerve endings to prevent toothache shocks from cold and hot beverages",
    "sideEffects": "None when used as regular toothpaste",
    "description": "Potassium ions calm dental pulp nerve transmission, providing progressive immunity to sensitivity.",
    "alternatives": [
      {
        "name": "Generic Potassium Nitrate Sensitive Toothpaste",
        "mfr": "Jan Aushadhi / BPPI",
        "price": 38,
        "isGeneric": true,
        "dosage": "100g Paste"
      },
      {
        "name": "Sensodyne Fresh Gel",
        "mfr": "GSK",
        "price": 195,
        "isGeneric": false,
        "dosage": "100g Paste"
      },
      {
        "name": "Vantej Toothpaste",
        "mfr": "Dr. Reddy's",
        "price": 210,
        "isGeneric": false,
        "dosage": "100g Paste"
      }
    ]
  },
  {
    "id": "med-dologel-ct",
    "brand": "Dologel-CT Oral Gel",
    "generic": "Choline Salicylate + Cetalkonium Chloride",
    "strength": "8.7% + 0.01% w/w",
    "form": "Oral Gel",
    "manufacturer": "Dr. Reddy's Laboratories",
    "price": 95,
    "unit": "10g Tube",
    "category": "Pain & Fever",
    "uses": "Instant numbing and anti-inflammatory relief from aphthous ulcers, tongue bites, orthodontic bracket sores",
    "sideEffects": "Transient tingling sensation",
    "description": "Rapidly absorbed mucosal pain-relief gel allowing pain-free eating and drinking.",
    "alternatives": [
      {
        "name": "Generic Mouth Ulcer Relief Gel",
        "mfr": "Jan Aushadhi / BPPI",
        "price": 22,
        "isGeneric": true,
        "dosage": "10g Gel"
      },
      {
        "name": "Zytee RB",
        "mfr": "Raptakos",
        "price": 110,
        "isGeneric": false,
        "dosage": "10g Gel"
      },
      {
        "name": "Smyle Gel",
        "mfr": "Maneesh",
        "price": 80,
        "isGeneric": false,
        "dosage": "10g Gel"
      }
    ]
  },
  {
    "id": "med-smyle-gel",
    "brand": "Smyle Mouth Ulcer Gel",
    "generic": "Tannic Acid + Choline Salicylate + Menthol",
    "strength": "10g Tube",
    "form": "Oral Gel",
    "manufacturer": "Maneesh Pharmaceuticals",
    "price": 80,
    "unit": "10g Tube",
    "category": "Pain & Fever",
    "uses": "Astringent barrier over canker sores, gum swelling, cheek sores",
    "sideEffects": "Safe soothing herbal/chemical combination",
    "description": "Tannic acid contracts and protects ulcerated mucous membranes while menthol provides pleasant coolness.",
    "alternatives": [
      {
        "name": "Generic Mouth Ulcer Relief Gel",
        "mfr": "Jan Aushadhi / BPPI",
        "price": 22,
        "isGeneric": true,
        "dosage": "10g Gel"
      },
      {
        "name": "Zytee RB",
        "mfr": "Raptakos",
        "price": 110,
        "isGeneric": false,
        "dosage": "10g Gel"
      },
      {
        "name": "Ora-Fast Gel",
        "mfr": "Leeford",
        "price": 75,
        "isGeneric": false,
        "dosage": "10g Gel"
      }
    ]
  },
  {
    "id": "med-moxiflox-eye",
    "brand": "Vigamox Eye Drops",
    "generic": "Moxifloxacin",
    "strength": "0.5% w/v",
    "form": "Eye Drops",
    "manufacturer": "Alcon Laboratories",
    "price": 185,
    "unit": "5ml Bottle",
    "category": "Antibiotics & Infections",
    "uses": "Deep bacterial corneal infection, severe purulent conjunctivitis",
    "sideEffects": "Transient dry eye, subconjunctival hemorrhage (rare)",
    "description": "Preservative-free broad-spectrum fluoroquinolone formulated for sensitive ocular surfaces.",
    "alternatives": [
      {
        "name": "Generic Moxifloxacin 0.5% Eye Drops",
        "mfr": "Jan Aushadhi / BPPI",
        "price": 22,
        "isGeneric": true,
        "dosage": "5ml Drops"
      },
      {
        "name": "Moxicip",
        "mfr": "Cipla",
        "price": 115,
        "isGeneric": false,
        "dosage": "5ml Drops"
      },
      {
        "name": "Mahaflox",
        "mfr": "Mankind",
        "price": 95,
        "isGeneric": false,
        "dosage": "5ml Drops"
      }
    ]
  },
  {
    "id": "med-cipcal500",
    "brand": "Cipcal 500",
    "generic": "Calcium Carbonate + Vitamin D3",
    "strength": "500mg + 250 IU",
    "form": "Tablet",
    "manufacturer": "Cipla Ltd",
    "price": 115,
    "unit": "Strip of 15 tablets",
    "category": "Vitamins & Supplements",
    "uses": "Osteopenia, postmenopausal osteoporosis, fracture healing, pregnancy calcium supplement",
    "sideEffects": "Constipation, flatulence",
    "description": "Elemental calcium derived from oyster shell paired with cholecalciferol for optimal intestinal calcium absorption.",
    "alternatives": [
      {
        "name": "Generic Calcium 500mg + Vitamin D3",
        "mfr": "Jan Aushadhi / BPPI",
        "price": 19.5,
        "isGeneric": true,
        "dosage": "500mg+250IU"
      },
      {
        "name": "Shelcal 500",
        "mfr": "Torrent",
        "price": 132,
        "isGeneric": false,
        "dosage": "500mg+250IU"
      },
      {
        "name": "Calcimax 500",
        "mfr": "Meyer",
        "price": 125,
        "isGeneric": false,
        "dosage": "500mg+250IU"
      }
    ]
  },
  {
    "id": "med-calcimax500",
    "brand": "Calcimax 500",
    "generic": "Calcium + Magnesium + Zinc + Vitamin D3",
    "strength": "500mg + 75mg + 4mg + 200 IU",
    "form": "Tablet",
    "manufacturer": "Meyer Organics",
    "price": 145,
    "unit": "Strip of 30 tablets",
    "category": "Vitamins & Supplements",
    "uses": "Comprehensive bone mineral density preservation, supports joint collagen cartilage",
    "sideEffects": "Mild stomach fullness",
    "description": "Balanced four-mineral bone formula preventing calcium-induced zinc or magnesium depletion.",
    "alternatives": [
      {
        "name": "Generic Complete Bone Mineral Tablet",
        "mfr": "Jan Aushadhi / BPPI",
        "price": 24,
        "isGeneric": true,
        "dosage": "Compound Tablet"
      },
      {
        "name": "Shelcal-HD",
        "mfr": "Torrent",
        "price": 155,
        "isGeneric": false,
        "dosage": "Compound Tablet"
      },
      {
        "name": "Gemcal",
        "mfr": "Alkem",
        "price": 160,
        "isGeneric": false,
        "dosage": "Compound Tablet"
      }
    ]
  },
  {
    "id": "med-calcirol-sachet",
    "brand": "Calcirol Sachet",
    "generic": "Cholecalciferol (Vitamin D3)",
    "strength": "60,000 IU",
    "form": "Granules Sachet",
    "manufacturer": "Cadila Pharmaceuticals",
    "price": 68,
    "unit": "1g Granules Sachet",
    "category": "Vitamins & Supplements",
    "uses": "Weekly high-dose treatment for severe Vitamin D3 deficiency, rickets, fatigue, bone aches",
    "sideEffects": "Hypercalcemia only if massively overdosed",
    "description": "Delicious caramel-flavored granules easily dissolvable in a glass of warm milk once weekly.",
    "alternatives": [
      {
        "name": "Generic Vitamin D3 60,000 IU Sachet",
        "mfr": "Jan Aushadhi / BPPI",
        "price": 11,
        "isGeneric": true,
        "dosage": "60,000 IU"
      },
      {
        "name": "Uprise-D3 60K",
        "mfr": "Alkem",
        "price": 72,
        "isGeneric": false,
        "dosage": "60,000 IU"
      },
      {
        "name": "D-Rise Sachet",
        "mfr": "USV",
        "price": 65,
        "isGeneric": false,
        "dosage": "60,000 IU"
      }
    ]
  },
  {
    "id": "med-d-rise60k",
    "brand": "D-Rise 60K Capsule",
    "generic": "Cholecalciferol (Vitamin D3)",
    "strength": "60,000 IU",
    "form": "Softgel Capsule",
    "manufacturer": "USV Private Limited",
    "price": 245,
    "unit": "Strip of 4 softgels",
    "category": "Vitamins & Supplements",
    "uses": "Restores optimal serum 25-hydroxyvitamin D levels, muscle strength, immunity",
    "sideEffects": "None at recommended 1 capsule per week frequency",
    "description": "Liquid-filled softgel capsule offering superior oral bioavailability compared to dry tablets.",
    "alternatives": [
      {
        "name": "Generic Vitamin D3 60,000 IU Capsule",
        "mfr": "Jan Aushadhi / BPPI",
        "price": 12,
        "isGeneric": true,
        "dosage": "60,000 IU"
      },
      {
        "name": "Uprise-D3 60K",
        "mfr": "Alkem",
        "price": 260,
        "isGeneric": false,
        "dosage": "60,000 IU"
      },
      {
        "name": "Lupicheck D3",
        "mfr": "Lupin",
        "price": 230,
        "isGeneric": false,
        "dosage": "60,000 IU"
      }
    ]
  },
  {
    "id": "med-tayo60k",
    "brand": "Tayo 60K Tablet",
    "generic": "Cholecalciferol",
    "strength": "60,000 IU",
    "form": "Chewable Tablet",
    "manufacturer": "Torrent Pharmaceuticals",
    "price": 210,
    "unit": "Strip of 4 chewable tablets",
    "category": "Vitamins & Supplements",
    "uses": "Weekly chewable Vitamin D supplement for patients who have difficulty swallowing pills",
    "sideEffects": "Safe at weekly dosage",
    "description": "Pleasant orange chewable tablet for convenient weekly administration without water.",
    "alternatives": [
      {
        "name": "Generic Vitamin D3 60K Chewable",
        "mfr": "Jan Aushadhi / BPPI",
        "price": 12,
        "isGeneric": true,
        "dosage": "60,000 IU"
      },
      {
        "name": "Calcirol",
        "mfr": "Cadila",
        "price": 68,
        "isGeneric": false,
        "dosage": "60,000 IU"
      }
    ]
  },
  {
    "id": "med-becadexamin",
    "brand": "Becadexamin",
    "generic": "Multivitamins + Minerals",
    "strength": "14 Vitamins & Minerals",
    "form": "Softgel Capsule",
    "manufacturer": "GlaxoSmithKline",
    "price": 52,
    "unit": "Bottle of 30 capsules",
    "category": "Vitamins & Supplements",
    "uses": "Daily nutritional support, convalescence from fever, elderly fatigue, dietary gaps",
    "sideEffects": "Harmless yellow urine coloration due to riboflavin",
    "description": "India's most economical and widely trusted daily multivitamin softgel supplement.",
    "alternatives": [
      {
        "name": "Generic Daily Multivitamin Capsule",
        "mfr": "Jan Aushadhi / BPPI",
        "price": 12,
        "isGeneric": true,
        "dosage": "Bottle of 30"
      },
      {
        "name": "Supradyn Daily",
        "mfr": "Bayer",
        "price": 65,
        "isGeneric": false,
        "dosage": "Strip of 15"
      },
      {
        "name": "Zincovit",
        "mfr": "Apex Labs",
        "price": 110,
        "isGeneric": false,
        "dosage": "Strip of 15"
      }
    ]
  },
  {
    "id": "med-zincovit-tab",
    "brand": "Zincovit",
    "generic": "Multivitamins + Multiminerals + Grape Seed Extract",
    "strength": "Comprehensive Formula",
    "form": "Tablet",
    "manufacturer": "Apex Laboratories",
    "price": 110,
    "unit": "Strip of 15 tablets",
    "category": "Vitamins & Supplements",
    "uses": "Immune defense boosting, cellular healing, post-viral recovery, chronic weakness",
    "sideEffects": "Mild stomach fullness",
    "description": "Enriched with powerful proanthocyanidin grape seed antioxidants and optimal elemental zinc.",
    "alternatives": [
      {
        "name": "Generic Multivitamin + Zinc Tablet",
        "mfr": "Jan Aushadhi / BPPI",
        "price": 18,
        "isGeneric": true,
        "dosage": "Strip of 15"
      },
      {
        "name": "A to Z NS",
        "mfr": "Alkem",
        "price": 125,
        "isGeneric": false,
        "dosage": "Strip of 15"
      },
      {
        "name": "Revital H",
        "mfr": "Sun Pharma",
        "price": 140,
        "isGeneric": false,
        "dosage": "Strip of 15"
      }
    ]
  },
  {
    "id": "med-a-to-z-ns",
    "brand": "A to Z NS Tablet",
    "generic": "Multivitamins + Minerals + Astaxanthin",
    "strength": "Nutritional Formula",
    "form": "Tablet",
    "manufacturer": "Alkem Laboratories",
    "price": 125,
    "unit": "Strip of 15 tablets",
    "category": "Vitamins & Supplements",
    "uses": "Combats oxidative stress, strengthens natural immunity, boosts physical stamina",
    "sideEffects": "Well tolerated with meals",
    "description": "Formulated with astaxanthin, one of nature's strongest cellular carotenoid antioxidants.",
    "alternatives": [
      {
        "name": "Generic Multivitamin + Antioxidant Tablet",
        "mfr": "Jan Aushadhi / BPPI",
        "price": 18,
        "isGeneric": true,
        "dosage": "Strip of 15"
      },
      {
        "name": "Zincovit",
        "mfr": "Apex Labs",
        "price": 110,
        "isGeneric": false,
        "dosage": "Strip of 15"
      },
      {
        "name": "Supradyn",
        "mfr": "Bayer",
        "price": 65,
        "isGeneric": false,
        "dosage": "Strip of 15"
      }
    ]
  },
  {
    "id": "med-revital-h",
    "brand": "Revital H Capsule",
    "generic": "Ginseng + 10 Vitamins + 9 Minerals",
    "strength": "Daily Energy Formula",
    "form": "Softgel Capsule",
    "manufacturer": "Sun Pharma Consumer",
    "price": 140,
    "unit": "Strip of 10 softgels",
    "category": "Vitamins & Supplements",
    "uses": "Combats mental and physical exhaustion, boosts concentration, supports active lifestyle",
    "sideEffects": "Insomnia if taken late at night (contains invigorating ginseng)",
    "description": "Infused with standardized Korean Ginseng root extract to revitalize cellular vitality.",
    "alternatives": [
      {
        "name": "Generic Daily Vitality Multivitamin",
        "mfr": "Jan Aushadhi / BPPI",
        "price": 20,
        "isGeneric": true,
        "dosage": "Strip of 10"
      },
      {
        "name": "Zincovit",
        "mfr": "Apex Labs",
        "price": 110,
        "isGeneric": false,
        "dosage": "Strip of 15"
      },
      {
        "name": "Becadexamin",
        "mfr": "GSK",
        "price": 52,
        "isGeneric": false,
        "dosage": "Bottle of 30"
      }
    ]
  },
  {
    "id": "med-supradyn-daily",
    "brand": "Supradyn Daily",
    "generic": "Multivitamins + Minerals + Trace Elements",
    "strength": "12 Vitamins + 5 Minerals",
    "form": "Tablet",
    "manufacturer": "Bayer Pharmaceuticals",
    "price": 65,
    "unit": "Strip of 15 tablets",
    "category": "Vitamins & Supplements",
    "uses": "Daily micronutrient replenishment, energy metabolism support, healthy skin and hair",
    "sideEffects": "Safe for long-term daily health maintenance",
    "description": "Global trusted multivitamin brand packed with B-complex, zinc, copper and manganese.",
    "alternatives": [
      {
        "name": "Generic Daily Multivitamin & Multimineral Tablets",
        "mfr": "Jan Aushadhi / BPPI",
        "price": 14,
        "isGeneric": true,
        "dosage": "Strip of 15"
      },
      {
        "name": "Zincovit",
        "mfr": "Apex Labs",
        "price": 110,
        "isGeneric": false,
        "dosage": "Strip of 15"
      },
      {
        "name": "Becosules-Z",
        "mfr": "Pfizer",
        "price": 52,
        "isGeneric": false,
        "dosage": "Strip of 20"
      }
    ]
  },
  {
    "id": "med-optineuron",
    "brand": "Optineuron",
    "generic": "Vitamin B-Complex (B1, B2, B6, B12, Niacinamide)",
    "strength": "Therapeutic Complex",
    "form": "Tablet",
    "manufacturer": "Lupin Ltd",
    "price": 38,
    "unit": "Strip of 10 tablets",
    "category": "Vitamins & Supplements",
    "uses": "Peripheral neuropathies, alcoholic neuropathy, chronic fatigue, mouth ulcers",
    "sideEffects": "Bright yellow urine, mild nausea if taken on empty stomach",
    "description": "High-concentration B-vitamin complex nourishing nerve transmission and cellular energy.",
    "alternatives": [
      {
        "name": "Generic Therapeutic B-Complex Tablet",
        "mfr": "Jan Aushadhi / BPPI",
        "price": 7.5,
        "isGeneric": true,
        "dosage": "Strip of 10"
      },
      {
        "name": "Neurobion Forte",
        "mfr": "P&G",
        "price": 42,
        "isGeneric": false,
        "dosage": "Strip of 30"
      },
      {
        "name": "Polybion",
        "mfr": "Merck",
        "price": 35,
        "isGeneric": false,
        "dosage": "Strip of 20"
      }
    ]
  },
  {
    "id": "med-meganeuron-od",
    "brand": "Meganeuron OD",
    "generic": "Methylcobalamin + Alpha Lipoic Acid + Folic Acid + Pyridoxine",
    "strength": "1500mcg + 100mg + 1.5mg + 3mg",
    "form": "Capsule",
    "manufacturer": "Aristo Pharmaceuticals",
    "price": 195,
    "unit": "Strip of 10 capsules",
    "category": "Vitamins & Supplements",
    "uses": "Diabetic peripheral neuropathy, tingling numbness in feet and hands, sciatica pain",
    "sideEffects": "Mild stomach discomfort, skin flushing",
    "description": "Active co-enzyme form of B12 paired with lipophilic antioxidant ALA that repairs nerve myelin sheath.",
    "alternatives": [
      {
        "name": "Generic Methylcobalamin + Alpha Lipoic Acid",
        "mfr": "Jan Aushadhi / BPPI",
        "price": 28,
        "isGeneric": true,
        "dosage": "Compound Capsule"
      },
      {
        "name": "Nurokind-Plus RF",
        "mfr": "Mankind",
        "price": 180,
        "isGeneric": false,
        "dosage": "Compound Capsule"
      },
      {
        "name": "Nervz-B",
        "mfr": "Intas",
        "price": 190,
        "isGeneric": false,
        "dosage": "Compound Capsule"
      }
    ]
  },
  {
    "id": "med-nurokind-plus",
    "brand": "Nurokind-Plus RF",
    "generic": "Mecobalamin + Alpha Lipoic Acid + Pyridoxine + Folic Acid",
    "strength": "1500mcg + 100mg + 3mg + 1.5mg",
    "form": "Capsule",
    "manufacturer": "Mankind Pharma",
    "price": 180,
    "unit": "Strip of 10 capsules",
    "category": "Vitamins & Supplements",
    "uses": "Reverses nerve damage, diabetic burning feet syndrome, chronic radiculopathy",
    "sideEffects": "Safe at recommended single daily dose",
    "description": "Prescribed nationwide for nerve regeneration and microvascular blood flow.",
    "alternatives": [
      {
        "name": "Generic Methylcobalamin + ALA Capsule",
        "mfr": "Jan Aushadhi / BPPI",
        "price": 28,
        "isGeneric": true,
        "dosage": "Compound Capsule"
      },
      {
        "name": "Meganeuron OD",
        "mfr": "Aristo",
        "price": 195,
        "isGeneric": false,
        "dosage": "Compound Capsule"
      },
      {
        "name": "Rejunuron Plus",
        "mfr": "Torrent",
        "price": 175,
        "isGeneric": false,
        "dosage": "Compound Capsule"
      }
    ]
  },
  {
    "id": "med-orofer-xt-tab",
    "brand": "Orofer-XT",
    "generic": "Ferrous Ascorbate + Folic Acid",
    "strength": "100mg Iron + 1.5mg FA",
    "form": "Tablet",
    "manufacturer": "Emcure Pharmaceuticals",
    "price": 185,
    "unit": "Strip of 10 tablets",
    "category": "Vitamins & Supplements",
    "uses": "Iron deficiency anemia, pregnancy iron support, post-bleeding hemoglobin replenishment",
    "sideEffects": "Dark stools, constipation; take with water, avoid milk or tea at the same time",
    "description": "Synthetic chelate of iron with ascorbic acid offering 3x higher absorption with minimal gastric nausea.",
    "alternatives": [
      {
        "name": "Generic Ferrous Ascorbate + Folic Acid Tablet",
        "mfr": "Jan Aushadhi / BPPI",
        "price": 22,
        "isGeneric": true,
        "dosage": "100mg+1.5mg"
      },
      {
        "name": "Autrin",
        "mfr": "Pfizer",
        "price": 92,
        "isGeneric": false,
        "dosage": "Compound Tablet"
      },
      {
        "name": "Cheri-XT",
        "mfr": "Alkem",
        "price": 175,
        "isGeneric": false,
        "dosage": "100mg+1.5mg"
      }
    ]
  },
  {
    "id": "med-fefol-spansule",
    "brand": "Fefol Spansule",
    "generic": "Dried Ferrous Sulphate + Folic Acid",
    "strength": "150mg + 0.5mg",
    "form": "Timed-Release Capsule",
    "manufacturer": "GlaxoSmithKline",
    "price": 82,
    "unit": "Strip of 15 capsules",
    "category": "Vitamins & Supplements",
    "uses": "Nutritional iron deficiency, fatigue, weakness, pale conjunctiva",
    "sideEffects": "Dark stools, mild gastric fullness",
    "description": "Timed-release spansule pellets releasing iron gradually past the stomach into the duodenum.",
    "alternatives": [
      {
        "name": "Generic Iron + Folic Acid Timed Capsule",
        "mfr": "Jan Aushadhi / BPPI",
        "price": 14,
        "isGeneric": true,
        "dosage": "Strip of 15"
      },
      {
        "name": "Livogen",
        "mfr": "P&G",
        "price": 88,
        "isGeneric": false,
        "dosage": "Strip of 15"
      },
      {
        "name": "Orofer-XT",
        "mfr": "Emcure",
        "price": 185,
        "isGeneric": false,
        "dosage": "Strip of 10"
      }
    ]
  },
  {
    "id": "med-autrin",
    "brand": "Autrin Capsule",
    "generic": "Ferrous Fumarate + Vitamin B12 + Folic Acid",
    "strength": "300mg + 15mcg + 1.5mg",
    "form": "Capsule",
    "manufacturer": "Pfizer India",
    "price": 92,
    "unit": "Strip of 15 capsules",
    "category": "Vitamins & Supplements",
    "uses": "Macrocytic and microcytic hypochromic anemias, general debility, chronic fatigue",
    "sideEffects": "Dark stools, mild gastrointestinal upset",
    "description": "Comprehensive hematinic capsule delivering iron, extrinsic factor B12 and folate.",
    "alternatives": [
      {
        "name": "Generic Complete Hematinic Capsule",
        "mfr": "Jan Aushadhi / BPPI",
        "price": 16,
        "isGeneric": true,
        "dosage": "Strip of 15"
      },
      {
        "name": "Livogen Adult",
        "mfr": "P&G",
        "price": 88,
        "isGeneric": false,
        "dosage": "Strip of 15"
      },
      {
        "name": "Orofer-XT",
        "mfr": "Emcure",
        "price": 185,
        "isGeneric": false,
        "dosage": "Strip of 10"
      }
    ]
  },
  {
    "id": "med-celin500",
    "brand": "Celin 500",
    "generic": "Vitamin C (Ascorbic Acid)",
    "strength": "500mg",
    "form": "Chewable Tablet",
    "manufacturer": "Koye Pharmaceuticals",
    "price": 42,
    "unit": "Strip of 25 chewable tablets",
    "category": "Vitamins & Supplements",
    "uses": "Scurvy prevention, wound collagen formation, skin antioxidant protection, immune defense against colds",
    "sideEffects": "None; water-soluble excess excreted naturally",
    "description": "Sweet and tangy chewable vitamin C tablet popular for daily immune and gum vitality.",
    "alternatives": [
      {
        "name": "Generic Vitamin C 500mg Chewable",
        "mfr": "Jan Aushadhi / BPPI",
        "price": 11,
        "isGeneric": true,
        "dosage": "500mg"
      },
      {
        "name": "Limcee 500",
        "mfr": "Abbott",
        "price": 45,
        "isGeneric": false,
        "dosage": "500mg"
      },
      {
        "name": "Chewcee 500",
        "mfr": "Cipla",
        "price": 40,
        "isGeneric": false,
        "dosage": "500mg"
      }
    ]
  },
  {
    "id": "med-chewcee500",
    "brand": "Chewcee 500",
    "generic": "Vitamin C (Ascorbic Acid + Sodium Ascorbate)",
    "strength": "500mg",
    "form": "Chewable Tablet",
    "manufacturer": "Cipla Ltd",
    "price": 40,
    "unit": "Strip of 20 chewable tablets",
    "category": "Vitamins & Supplements",
    "uses": "Daily antioxidant shield, tissue granulation, speeds post-surgical incision recovery",
    "sideEffects": "Extremely safe",
    "description": "Buffered ascorbate chewable that is gentle on sensitive stomach linings.",
    "alternatives": [
      {
        "name": "Generic Vitamin C 500mg Chewable",
        "mfr": "Jan Aushadhi / BPPI",
        "price": 11,
        "isGeneric": true,
        "dosage": "500mg"
      },
      {
        "name": "Limcee 500",
        "mfr": "Abbott",
        "price": 45,
        "isGeneric": false,
        "dosage": "500mg"
      },
      {
        "name": "Celin 500",
        "mfr": "Koye",
        "price": 42,
        "isGeneric": false,
        "dosage": "500mg"
      }
    ]
  },
  {
    "id": "med-polybion",
    "brand": "Polybion CZS",
    "generic": "Vitamin B-Complex + Vitamin C + Chromium + Selenium + Zinc",
    "strength": "Immunity Capsule",
    "form": "Capsule",
    "manufacturer": "Procter & Gamble Health",
    "price": 115,
    "unit": "Strip of 15 capsules",
    "category": "Vitamins & Supplements",
    "uses": "Metabolic energy support, antioxidant cell defense, mouth ulcer recovery",
    "sideEffects": "Safe at recommended single daily dosage",
    "description": "Fortified with trace minerals chromium and selenium supporting glucose metabolism.",
    "alternatives": [
      {
        "name": "Generic B-Complex with Zinc & Selenium",
        "mfr": "Jan Aushadhi / BPPI",
        "price": 18,
        "isGeneric": true,
        "dosage": "Strip of 15"
      },
      {
        "name": "Becosules-Z",
        "mfr": "Pfizer",
        "price": 52,
        "isGeneric": false,
        "dosage": "Strip of 20"
      },
      {
        "name": "Cobadex CZS",
        "mfr": "GSK",
        "price": 110,
        "isGeneric": false,
        "dosage": "Strip of 15"
      }
    ]
  },
  {
    "id": "med-stamlo5",
    "brand": "Stamlo 5mg",
    "generic": "Amlodipine",
    "strength": "5mg",
    "form": "Tablet",
    "manufacturer": "Dr. Reddy's Laboratories",
    "price": 68,
    "unit": "Strip of 15 tablets",
    "category": "Heart & Blood Pressure",
    "uses": "Hypertension, coronary artery disease, angina",
    "sideEffects": "Ankle edema, dizziness, palpitations",
    "description": "Purified amlodipine besylate tablet providing steady 24-hour hemodynamic control.",
    "alternatives": [
      {
        "name": "Generic Amlodipine 5mg Tablet",
        "mfr": "Jan Aushadhi / BPPI",
        "price": 6.5,
        "isGeneric": true,
        "dosage": "5mg"
      },
      {
        "name": "Amlong 5",
        "mfr": "Micro Labs",
        "price": 45,
        "isGeneric": false,
        "dosage": "5mg"
      },
      {
        "name": "Amlokind 5",
        "mfr": "Mankind",
        "price": 38,
        "isGeneric": false,
        "dosage": "5mg"
      }
    ]
  },
  {
    "id": "med-telmikind40",
    "brand": "Telmikind 40",
    "generic": "Telmisartan",
    "strength": "40mg",
    "form": "Tablet",
    "manufacturer": "Mankind Pharma",
    "price": 65,
    "unit": "Strip of 10 tablets",
    "category": "Heart & Blood Pressure",
    "uses": "Hypertension, cardiovascular risk reduction, diabetic nephropathy renal protection",
    "sideEffects": "Dizziness, hyperkalemia (rare), mild backache",
    "description": "Longest acting ARB with a 24-hour elimination half-life maintaining morning blood pressure dip.",
    "alternatives": [
      {
        "name": "Generic Telmisartan 40mg Tablet",
        "mfr": "Jan Aushadhi / BPPI",
        "price": 12,
        "isGeneric": true,
        "dosage": "40mg"
      },
      {
        "name": "Telma 40",
        "mfr": "Glenmark",
        "price": 142,
        "isGeneric": false,
        "dosage": "40mg"
      },
      {
        "name": "Telvas 40",
        "mfr": "Aristo",
        "price": 72,
        "isGeneric": false,
        "dosage": "40mg"
      }
    ]
  },
  {
    "id": "med-telvas40",
    "brand": "Telvas 40",
    "generic": "Telmisartan",
    "strength": "40mg",
    "form": "Tablet",
    "manufacturer": "Aristo Pharmaceuticals",
    "price": 72,
    "unit": "Strip of 10 tablets",
    "category": "Heart & Blood Pressure",
    "uses": "High blood pressure control, heart failure afterload reduction",
    "sideEffects": "Low blood pressure upon standing, fatigue",
    "description": "High-affinity angiotensin II receptor blocker sparing bradykinin to avoid dry cough.",
    "alternatives": [
      {
        "name": "Generic Telmisartan 40mg Tablet",
        "mfr": "Jan Aushadhi / BPPI",
        "price": 12,
        "isGeneric": true,
        "dosage": "40mg"
      },
      {
        "name": "Telma 40",
        "mfr": "Glenmark",
        "price": 142,
        "isGeneric": false,
        "dosage": "40mg"
      },
      {
        "name": "Telmikind 40",
        "mfr": "Mankind",
        "price": 65,
        "isGeneric": false,
        "dosage": "40mg"
      }
    ]
  },
  {
    "id": "med-cardace25",
    "brand": "Cardace 2.5mg",
    "generic": "Ramipril",
    "strength": "2.5mg",
    "form": "Tablet",
    "manufacturer": "Sanofi India",
    "price": 95,
    "unit": "Strip of 15 tablets",
    "category": "Heart & Blood Pressure",
    "uses": "Hypertension, post-myocardial infarction heart recovery, microalbuminuria in diabetes",
    "sideEffects": "Dry tickly cough, dizziness, elevated potassium",
    "description": "Pioneering ACE inhibitor shown to reduce stroke and cardiovascular mortality in the landmark HOPE study.",
    "alternatives": [
      {
        "name": "Generic Ramipril 2.5mg Tablet",
        "mfr": "Jan Aushadhi / BPPI",
        "price": 9.5,
        "isGeneric": true,
        "dosage": "2.5mg"
      },
      {
        "name": "Hopace 2.5",
        "mfr": "Micro Labs",
        "price": 82,
        "isGeneric": false,
        "dosage": "2.5mg"
      },
      {
        "name": "Ramipres 2.5",
        "mfr": "Cipla Ltd",
        "price": 85,
        "isGeneric": false,
        "dosage": "2.5mg"
      }
    ]
  },
  {
    "id": "med-betaloc25",
    "brand": "Betaloc 25mg",
    "generic": "Metoprolol Succinate",
    "strength": "25mg",
    "form": "Extended Release Tablet",
    "manufacturer": "AstraZeneca India",
    "price": 110,
    "unit": "Strip of 14 tablets",
    "category": "Heart & Blood Pressure",
    "uses": "Angina pectoris, heart rate tachycardia control, post-heart attack secondary prevention",
    "sideEffects": "Bradycardia (slow pulse), fatigue, cold extremities, sleep disturbances",
    "description": "Cardioselective beta-1 adrenergic receptor blocker providing steady 24-hour resting heart rate reduction.",
    "alternatives": [
      {
        "name": "Generic Metoprolol Succinate 25mg ER",
        "mfr": "Jan Aushadhi / BPPI",
        "price": 14,
        "isGeneric": true,
        "dosage": "25mg ER"
      },
      {
        "name": "Met-XL 25",
        "mfr": "Ajanta Pharma",
        "price": 98,
        "isGeneric": false,
        "dosage": "25mg ER"
      },
      {
        "name": "Mepressor 25",
        "mfr": "Sun Pharma",
        "price": 92,
        "isGeneric": false,
        "dosage": "25mg ER"
      }
    ]
  },
  {
    "id": "med-glyciphage500",
    "brand": "Glyciphage 500",
    "generic": "Metformin",
    "strength": "500mg",
    "form": "Tablet",
    "manufacturer": "Franco-Indian Pharmaceuticals",
    "price": 32,
    "unit": "Strip of 20 tablets",
    "category": "Diabetes & Endocrine",
    "uses": "First-line Type 2 Diabetes Mellitus glycemic regulation, improves insulin sensitivity",
    "sideEffects": "Metallic taste, loose stools, abdominal fullness initially (take with meals)",
    "description": "Suppresses hepatic gluconeogenesis without stimulating pancreatic insulin secretion, avoiding hypoglycemia.",
    "alternatives": [
      {
        "name": "Generic Metformin 500mg Tablet",
        "mfr": "Jan Aushadhi / BPPI",
        "price": 4.8,
        "isGeneric": true,
        "dosage": "500mg"
      },
      {
        "name": "Glycomet 500",
        "mfr": "USV Ltd",
        "price": 28,
        "isGeneric": false,
        "dosage": "500mg"
      },
      {
        "name": "Obimet 500",
        "mfr": "Sun Pharma",
        "price": 30,
        "isGeneric": false,
        "dosage": "500mg"
      }
    ]
  },
  {
    "id": "med-amaryl1",
    "brand": "Amaryl 1mg",
    "generic": "Glimepiride",
    "strength": "1mg",
    "form": "Tablet",
    "manufacturer": "Sanofi India",
    "price": 75,
    "unit": "Strip of 15 tablets",
    "category": "Diabetes & Endocrine",
    "uses": "Type 2 Diabetes Mellitus, stimulates physiological insulin secretion from pancreatic beta cells",
    "sideEffects": "Hypoglycemia (low blood sugar), mild weight gain, dizziness",
    "description": "Third-generation sulfonylurea with physiological glucose-dependent release and low cardiovascular risk.",
    "alternatives": [
      {
        "name": "Generic Glimepiride 1mg Tablet",
        "mfr": "Jan Aushadhi / BPPI",
        "price": 6,
        "isGeneric": true,
        "dosage": "1mg"
      },
      {
        "name": "Glimy 1",
        "mfr": "Dr. Reddy's",
        "price": 62,
        "isGeneric": false,
        "dosage": "1mg"
      },
      {
        "name": "Zoryl 1",
        "mfr": "Intas",
        "price": 60,
        "isGeneric": false,
        "dosage": "1mg"
      }
    ]
  },
  {
    "id": "med-diamicron60",
    "brand": "Diamicron 60 MR",
    "generic": "Gliclazide",
    "strength": "60mg",
    "form": "Modified Release Tablet",
    "manufacturer": "Serdia Pharmaceuticals",
    "price": 195,
    "unit": "Strip of 15 tablets",
    "category": "Diabetes & Endocrine",
    "uses": "Type 2 Diabetes, restores early-phase insulin peak, microvascular antioxidant protection",
    "sideEffects": "Mild hypoglycemia, stomach upset",
    "description": "Unique sulfonylurea containing an azabicyclo-octyl ring which scavenges free radicals, protecting retinal and renal vessels.",
    "alternatives": [
      {
        "name": "Generic Gliclazide 60mg MR Tablet",
        "mfr": "Jan Aushadhi / BPPI",
        "price": 20,
        "isGeneric": true,
        "dosage": "60mg MR"
      },
      {
        "name": "Reclide 60 MR",
        "mfr": "Alembic",
        "price": 165,
        "isGeneric": false,
        "dosage": "60mg MR"
      },
      {
        "name": "Glykind-OD 60",
        "mfr": "Mankind",
        "price": 145,
        "isGeneric": false,
        "dosage": "60mg MR"
      }
    ]
  },
  {
    "id": "med-ziten20",
    "brand": "Ziten 20mg",
    "generic": "Teneligliptin",
    "strength": "20mg",
    "form": "Tablet",
    "manufacturer": "Glenmark Pharmaceuticals",
    "price": 135,
    "unit": "Strip of 15 tablets",
    "category": "Diabetes & Endocrine",
    "uses": "Cost-effective DPP-4 inhibitor for Type 2 Diabetes; safe in mild to moderate kidney impairment",
    "sideEffects": "Constipation, flatulence, headache",
    "description": "Excreted through both renal and hepatic pathways requiring no dose adjustment in diabetic kidney disease.",
    "alternatives": [
      {
        "name": "Generic Teneligliptin 20mg Tablet",
        "mfr": "Jan Aushadhi / BPPI",
        "price": 18,
        "isGeneric": true,
        "dosage": "20mg"
      },
      {
        "name": "Tenlimac 20",
        "mfr": "Macleods",
        "price": 125,
        "isGeneric": false,
        "dosage": "20mg"
      },
      {
        "name": "Tenglyn 20",
        "mfr": "Zydus",
        "price": 120,
        "isGeneric": false,
        "dosage": "20mg"
      }
    ]
  },
  {
    "id": "med-thyronorm25",
    "brand": "Thyronorm 25mcg",
    "generic": "Thyroxine Sodium",
    "strength": "25mcg",
    "form": "Tablet",
    "manufacturer": "Abbott India",
    "price": 125,
    "unit": "Bottle of 120 tablets",
    "category": "Diabetes & Endocrine",
    "uses": "Starting dose for mild hypothyroidism, subclinical thyroid deficiency, goiter",
    "sideEffects": "Palpitations, weight loss, sweating (only if overdosed)",
    "description": "Synthetic levothyroxine identical to natural T4 hormone; take strictly on empty stomach with plain water 30-60 mins before breakfast.",
    "alternatives": [
      {
        "name": "Generic Thyroxine 25mcg Tablet",
        "mfr": "Jan Aushadhi / BPPI",
        "price": 28,
        "isGeneric": true,
        "dosage": "25mcg"
      },
      {
        "name": "Eltroxin 25",
        "mfr": "GSK",
        "price": 130,
        "isGeneric": false,
        "dosage": "25mcg"
      },
      {
        "name": "L-Thyroxin 25",
        "mfr": "Alkem",
        "price": 115,
        "isGeneric": false,
        "dosage": "25mcg"
      }
    ]
  },
  {
    "id": "med-thyronorm75",
    "brand": "Thyronorm 75mcg",
    "generic": "Thyroxine Sodium",
    "strength": "75mcg",
    "form": "Tablet",
    "manufacturer": "Abbott India",
    "price": 165,
    "unit": "Bottle of 120 tablets",
    "category": "Diabetes & Endocrine",
    "uses": "Maintenance replacement therapy for overt hypothyroidism, Hashimoto's thyroiditis",
    "sideEffects": "Tachycardia or tremors if dose is higher than required",
    "description": "Maintains optimal basal metabolic rate, body temperature, energy and mood.",
    "alternatives": [
      {
        "name": "Generic Thyroxine 75mcg Tablet",
        "mfr": "Jan Aushadhi / BPPI",
        "price": 34,
        "isGeneric": true,
        "dosage": "75mcg"
      },
      {
        "name": "Eltroxin 75",
        "mfr": "GSK",
        "price": 170,
        "isGeneric": false,
        "dosage": "75mcg"
      },
      {
        "name": "Thyrox 75",
        "mfr": "Macleods",
        "price": 155,
        "isGeneric": false,
        "dosage": "75mcg"
      }
    ]
  },
  {
    "id": "MED_GEN_134",
    "brand": "Moxikind-CV 625",
    "generic": "Amoxicillin (500mg) + Clavulanic Acid (125mg)",
    "strength": "625mg",
    "form": "Tablet",
    "manufacturer": "Mankind Pharma Ltd",
    "price": 204,
    "unit": "10 Tablets",
    "category": "Antibiotics & Infections",
    "uses": "Bacterial Infections, Sinusitis, Bronchitis, Dental Infection, Skin Infection",
    "sideEffects": "Diarrhea, Nausea, Vomiting, Mild skin rash",
    "description": "Take at the start of a meal to avoid stomach upset. Complete full antibiotic course.",
    "alternatives": [
      {
        "name": "Generic Amoxicillin + Clavulanic Acid 625mg",
        "mfr": "Jan Aushadhi / BPPI",
        "price": 48,
        "isGeneric": true,
        "dosage": "625mg"
      },
      {
        "name": "Moxikind-CV 625 Equivalent",
        "mfr": "Cipla / Sun Pharma",
        "price": 173,
        "isGeneric": false,
        "dosage": "625mg"
      }
    ]
  },
  {
    "id": "MED_GEN_135",
    "brand": "Taxim-O 200",
    "generic": "Cefixime (200mg)",
    "strength": "200mg",
    "form": "Tablet",
    "manufacturer": "Alkem Laboratories Ltd",
    "price": 165,
    "unit": "10 Tablets",
    "category": "Antibiotics & Infections",
    "uses": "Typhoid Fever, UTI, Throat Infection, Otitis Media, Chest Infection",
    "sideEffects": "Loose stools, Abdominal cramp, Indigestion, Headache",
    "description": "Take once or twice daily after food as prescribed.",
    "alternatives": [
      {
        "name": "Generic Cefixime 200mg Tablet",
        "mfr": "Jan Aushadhi / BPPI",
        "price": 32,
        "isGeneric": true,
        "dosage": "200mg"
      },
      {
        "name": "Taxim-O 200 Equivalent",
        "mfr": "Cipla / Sun Pharma",
        "price": 140,
        "isGeneric": false,
        "dosage": "200mg"
      }
    ]
  },
  {
    "id": "MED_GEN_136",
    "brand": "Soframycin Skin Cream",
    "generic": "Framycetin Sulphate (1% w/w)",
    "strength": "1%",
    "form": "Cream",
    "manufacturer": "Sanofi India Ltd",
    "price": 62,
    "unit": "30g Tube",
    "category": "Skin & Antiseptic",
    "uses": "Minor Cuts, Burns, Wounds, Boils, Skin Infections",
    "sideEffects": "Local irritation, Redness in sensitive skin",
    "description": "Clean the wound gently and apply a thin layer 1-3 times daily.",
    "alternatives": [
      {
        "name": "Generic Framycetin Sulphate 1% Cream",
        "mfr": "Jan Aushadhi / BPPI",
        "price": 14,
        "isGeneric": true,
        "dosage": "1%"
      },
      {
        "name": "Soframycin Skin Cream Equivalent",
        "mfr": "Cipla / Sun Pharma",
        "price": 53,
        "isGeneric": false,
        "dosage": "1%"
      }
    ]
  },
  {
    "id": "MED_GEN_137",
    "brand": "T-Bact Ointment",
    "generic": "Mupirocin (2% w/w)",
    "strength": "2%",
    "form": "Ointment",
    "manufacturer": "GlaxoSmithKline Pharmaceuticals",
    "price": 145,
    "unit": "5g Tube",
    "category": "Antibiotics & Infections",
    "uses": "Impetigo, Folliculitis, Infected Cuts, Bacterial Skin Infection",
    "sideEffects": "Burning sensation, Stinging, Itching at site",
    "description": "Apply a small amount to the affected area three times daily for up to 10 days.",
    "alternatives": [
      {
        "name": "Generic Mupirocin 2% Ointment",
        "mfr": "Jan Aushadhi / BPPI",
        "price": 30,
        "isGeneric": true,
        "dosage": "2%"
      },
      {
        "name": "T-Bact Ointment Equivalent",
        "mfr": "Cipla / Sun Pharma",
        "price": 123,
        "isGeneric": false,
        "dosage": "2%"
      }
    ]
  },
  {
    "id": "MED_GEN_138",
    "brand": "Betadine 5% Ointment",
    "generic": "Povidone-Iodine (5% w/w)",
    "strength": "5%",
    "form": "Ointment",
    "manufacturer": "Win-Medicare Pvt Ltd",
    "price": 75,
    "unit": "20g Tube",
    "category": "Skin & Antiseptic",
    "uses": "Wound Antiseptic, Abrasions, Minor Burns, First Aid Cuts",
    "sideEffects": "Transient local skin staining, Mild irritation",
    "description": "Apply topically directly to cut or wound after cleaning.",
    "alternatives": [
      {
        "name": "Generic Povidone Iodine 5% Ointment",
        "mfr": "Jan Aushadhi / BPPI",
        "price": 18,
        "isGeneric": true,
        "dosage": "5%"
      },
      {
        "name": "Betadine 5% Ointment Equivalent",
        "mfr": "Cipla / Sun Pharma",
        "price": 64,
        "isGeneric": false,
        "dosage": "5%"
      }
    ]
  },
  {
    "id": "MED_GEN_139",
    "brand": "Candid-B Cream",
    "generic": "Clotrimazole (1% w/w) + Beclomethasone Dipropionate (0.025% w/w)",
    "strength": "1% + 0.025%",
    "form": "Cream",
    "manufacturer": "Glenmark Pharmaceuticals",
    "price": 148,
    "unit": "20g Tube",
    "category": "Skin & Antiseptic",
    "uses": "Ringworm, Jock Itch, Athlete's Foot, Fungal Rash with Itching",
    "sideEffects": "Dryness, Skin thinning if overused, Mild stinging",
    "description": "Apply a thin layer to clean and dry affected skin twice daily for 1-2 weeks.",
    "alternatives": [
      {
        "name": "Generic Clotrimazole + Beclomethasone Cream",
        "mfr": "Jan Aushadhi / BPPI",
        "price": 28,
        "isGeneric": true,
        "dosage": "1% + 0.025%"
      },
      {
        "name": "Candid-B Cream Equivalent",
        "mfr": "Cipla / Sun Pharma",
        "price": 126,
        "isGeneric": false,
        "dosage": "1% + 0.025%"
      }
    ]
  },
  {
    "id": "MED_GEN_140",
    "brand": "Otrivin Oxy Fast Relief",
    "generic": "Oxymetazoline HCl (0.05% w/v)",
    "strength": "0.05%",
    "form": "Nasal Spray",
    "manufacturer": "GlaxoSmithKline Consumer Healthcare",
    "price": 115,
    "unit": "10ml Spray",
    "category": "Respiratory & Allergy",
    "uses": "Blocked Nose, Sinus Congestion, Allergic Rhinitis, Common Cold Congestion",
    "sideEffects": "Transient nasal stinging, Rebound congestion if used > 5 days",
    "description": "Spray 1 puff into each nostril up to 2-3 times daily. Do not exceed 5 consecutive days.",
    "alternatives": [
      {
        "name": "Generic Oxymetazoline 0.05% Nasal Drops",
        "mfr": "Jan Aushadhi / BPPI",
        "price": 24,
        "isGeneric": true,
        "dosage": "0.05%"
      },
      {
        "name": "Otrivin Oxy Fast Relief Equivalent",
        "mfr": "Cipla / Sun Pharma",
        "price": 98,
        "isGeneric": false,
        "dosage": "0.05%"
      }
    ]
  },
  {
    "id": "MED_GEN_141",
    "brand": "Nasoclear Saline Nasal Spray",
    "generic": "Sodium Chloride (0.65% w/v)",
    "strength": "0.65%",
    "form": "Nasal Spray",
    "manufacturer": "Zydus Lifesciences",
    "price": 65,
    "unit": "20ml Spray",
    "category": "Respiratory & Allergy",
    "uses": "Dry Nasal Mucosa, Mild Nasal Congestion, Infant Stuffy Nose, Sinus Rinse",
    "sideEffects": "None reported; sterile isotonic saline safe for all ages",
    "description": "Spray 2-3 drops/puffs into each nostril as needed throughout the day.",
    "alternatives": [
      {
        "name": "Generic Sodium Chloride 0.65% Saline Spray",
        "mfr": "Jan Aushadhi / BPPI",
        "price": 15,
        "isGeneric": true,
        "dosage": "0.65%"
      },
      {
        "name": "Nasoclear Saline Nasal Spray Equivalent",
        "mfr": "Cipla / Sun Pharma",
        "price": 55,
        "isGeneric": false,
        "dosage": "0.65%"
      }
    ]
  },
  {
    "id": "MED_GEN_142",
    "brand": "Ciplox Eye/Ear Drops",
    "generic": "Ciprofloxacin (0.3% w/v)",
    "strength": "0.3%",
    "form": "Eye/Ear Drops",
    "manufacturer": "Cipla Ltd",
    "price": 22,
    "unit": "10ml Drops",
    "category": "Eye & Ear Care",
    "uses": "Bacterial Conjunctivitis, Eye Infection, Ear Canal Infection, Stye",
    "sideEffects": "Transient eye irritation, Bitter taste in throat after eye drops",
    "description": "Instill 1-2 drops into affected eye/ear 3-4 times daily as directed by doctor.",
    "alternatives": [
      {
        "name": "Generic Ciprofloxacin 0.3% Eye/Ear Drops",
        "mfr": "Jan Aushadhi / BPPI",
        "price": 8,
        "isGeneric": true,
        "dosage": "0.3%"
      },
      {
        "name": "Ciplox Eye/Ear Drops Equivalent",
        "mfr": "Cipla / Sun Pharma",
        "price": 19,
        "isGeneric": false,
        "dosage": "0.3%"
      }
    ]
  },
  {
    "id": "MED_GEN_143",
    "brand": "Refresh Tears Eye Drops",
    "generic": "Carboxymethylcellulose Sodium (0.5% w/v)",
    "strength": "0.5%",
    "form": "Eye Drops",
    "manufacturer": "Allergan India Pvt Ltd",
    "price": 172,
    "unit": "10ml Drops",
    "category": "Eye & Ear Care",
    "uses": "Dry Eyes, Computer Eye Strain, Burning Eye Sensation, Foreign Body Sensation",
    "sideEffects": "Temporary blurred vision immediately following instillation",
    "description": "Instill 1-2 drops in affected eye(s) 3-4 times daily or whenever eyes feel dry.",
    "alternatives": [
      {
        "name": "Generic Carboxymethylcellulose 0.5% Eye Drops",
        "mfr": "Jan Aushadhi / BPPI",
        "price": 34,
        "isGeneric": true,
        "dosage": "0.5%"
      },
      {
        "name": "Refresh Tears Eye Drops Equivalent",
        "mfr": "Cipla / Sun Pharma",
        "price": 146,
        "isGeneric": false,
        "dosage": "0.5%"
      }
    ]
  },
  {
    "id": "MED_GEN_144",
    "brand": "Waxsol Ear Drops",
    "generic": "Docusate Sodium (0.5% w/v)",
    "strength": "0.5%",
    "form": "Ear Drops",
    "manufacturer": "Pfizer Ltd",
    "price": 95,
    "unit": "10ml Drops",
    "category": "Eye & Ear Care",
    "uses": "Impacted Ear Wax, Ear Blockage, Wax Softening",
    "sideEffects": "Mild transient ear canal tingling",
    "description": "Apply 4-5 drops into the ear canal at bedtime for two consecutive nights.",
    "alternatives": [
      {
        "name": "Generic Docusate Sodium 0.5% Ear Drops",
        "mfr": "Jan Aushadhi / BPPI",
        "price": 20,
        "isGeneric": true,
        "dosage": "0.5%"
      },
      {
        "name": "Waxsol Ear Drops Equivalent",
        "mfr": "Cipla / Sun Pharma",
        "price": 81,
        "isGeneric": false,
        "dosage": "0.5%"
      }
    ]
  },
  {
    "id": "MED_GEN_145",
    "brand": "Liv 52 Syrup",
    "generic": "Capparis spinosa + Cichorium intybus + Mandur bhasma extracts",
    "strength": "Herbal extract blend",
    "form": "Syrup",
    "manufacturer": "The Himalaya Drug Company",
    "price": 180,
    "unit": "200ml Bottle",
    "category": "Gastric & Digestion",
    "uses": "Loss of Appetite, Liver Sluggishness, Fatty Liver, Digestive Weakness",
    "sideEffects": "Generally free from adverse effects when taken as advised",
    "description": "Take 2 teaspoonfuls twice daily before meals.",
    "alternatives": [
      {
        "name": "Generic Ayurvedic Liver Tonic (Liv-52 Equivalent)",
        "mfr": "Jan Aushadhi / BPPI",
        "price": 45,
        "isGeneric": true,
        "dosage": "Herbal extract blend"
      },
      {
        "name": "Liv 52 Syrup Equivalent",
        "mfr": "Cipla / Sun Pharma",
        "price": 153,
        "isGeneric": false,
        "dosage": "Herbal extract blend"
      }
    ]
  },
  {
    "id": "MED_GEN_146",
    "brand": "Cremaffin Plus Syrup",
    "generic": "Liquid Paraffin (1.25ml) + Milk of Magnesia (3.75ml) + Sodium Picosulfate (3.33mg) per 5ml",
    "strength": "Emulsion",
    "form": "Syrup",
    "manufacturer": "Abbott Healthcare Pvt Ltd",
    "price": 265,
    "unit": "225ml Bottle",
    "category": "Gastric & Digestion",
    "uses": "Chronic Constipation, Painful Piles / Hemorrhoids, Anal Fissures",
    "sideEffects": "Abdominal cramps, Diarrhea if overdosed",
    "description": "Take 1-2 tablespoons (15-30ml) at bedtime with a glass of water.",
    "alternatives": [
      {
        "name": "Generic Liquid Paraffin + Milk of Magnesia Laxative",
        "mfr": "Jan Aushadhi / BPPI",
        "price": 52,
        "isGeneric": true,
        "dosage": "Emulsion"
      },
      {
        "name": "Cremaffin Plus Syrup Equivalent",
        "mfr": "Cipla / Sun Pharma",
        "price": 225,
        "isGeneric": false,
        "dosage": "Emulsion"
      }
    ]
  },
  {
    "id": "MED_GEN_147",
    "brand": "Isabgol Powder (Fybogel)",
    "generic": "Ispaghula Husk (3.5g per sachet)",
    "strength": "3.5g",
    "form": "Powder / Granules",
    "manufacturer": "Dabur India Ltd",
    "price": 195,
    "unit": "100g Jar",
    "category": "Gastric & Digestion",
    "uses": "Constipation, Irritable Bowel Syndrome (IBS), High Cholesterol Support",
    "sideEffects": "Gas or bloating during initial days",
    "description": "Mix 1-2 teaspoonfuls into a full glass of warm water or milk, drink immediately at bedtime.",
    "alternatives": [
      {
        "name": "Generic Psyllium Husk (Isabgol) 100g",
        "mfr": "Jan Aushadhi / BPPI",
        "price": 40,
        "isGeneric": true,
        "dosage": "3.5g"
      },
      {
        "name": "Isabgol Powder (Fybogel) Equivalent",
        "mfr": "Cipla / Sun Pharma",
        "price": 166,
        "isGeneric": false,
        "dosage": "3.5g"
      }
    ]
  },
  {
    "id": "MED_GEN_148",
    "brand": "Digene Gel Mint",
    "generic": "Magnesium Hydroxide (25mg) + Aluminium Hydroxide (300mg) + Simethicone (25mg) per 5ml",
    "strength": "Antacid blend",
    "form": "Gel / Suspension",
    "manufacturer": "Abbott Healthcare Pvt Ltd",
    "price": 145,
    "unit": "200ml Bottle",
    "category": "Gastric & Digestion",
    "uses": "Heartburn, Acid Reflux, Gas Bloating, Sour Stomach",
    "sideEffects": "Chalky taste, Mild alteration in bowel habit",
    "description": "Take 2 teaspoonfuls (10ml) after meals and at bedtime.",
    "alternatives": [
      {
        "name": "Generic Antacid Gel (Alumina, Magnesia & Simethicone)",
        "mfr": "Jan Aushadhi / BPPI",
        "price": 28,
        "isGeneric": true,
        "dosage": "Antacid blend"
      },
      {
        "name": "Digene Gel Mint Equivalent",
        "mfr": "Cipla / Sun Pharma",
        "price": 123,
        "isGeneric": false,
        "dosage": "Antacid blend"
      }
    ]
  },
  {
    "id": "MED_GEN_149",
    "brand": "Asthalin 100mcg Inhaler",
    "generic": "Salbutamol (100mcg per actuation)",
    "strength": "100mcg",
    "form": "Inhaler",
    "manufacturer": "Cipla Ltd",
    "price": 168,
    "unit": "200 Metered Doses",
    "category": "Respiratory & Allergy",
    "uses": "Asthma Attack, Wheezing, Shortness of Breath, COPD Bronchospasm",
    "sideEffects": "Tremors in hands, Palpitations, Headache",
    "description": "Inhale 1-2 puffs as required during breathlessness. Use with spacer if needed.",
    "alternatives": [
      {
        "name": "Generic Salbutamol 100mcg Inhaler",
        "mfr": "Jan Aushadhi / BPPI",
        "price": 38,
        "isGeneric": true,
        "dosage": "100mcg"
      },
      {
        "name": "Asthalin 100mcg Inhaler Equivalent",
        "mfr": "Cipla / Sun Pharma",
        "price": 143,
        "isGeneric": false,
        "dosage": "100mcg"
      }
    ]
  },
  {
    "id": "MED_GEN_150",
    "brand": "Budecort 200 Rotacaps",
    "generic": "Budesonide (200mcg)",
    "strength": "200mcg",
    "form": "Rotacap Inhalation Powder",
    "manufacturer": "Cipla Ltd",
    "price": 135,
    "unit": "30 Capsules",
    "category": "Inhaled Corticosteroid",
    "uses": "Chronic Asthma Control, Allergic Bronchitis, COPD",
    "sideEffects": "Hoarseness of voice, Oral fungal infection if mouth not rinsed",
    "description": "Inhale 1 capsule twice daily using Rotahaler/Cipla device. Rinse mouth thoroughly with water after inhalation.",
    "alternatives": [
      {
        "name": "Generic Budesonide 200mcg Rotacaps",
        "mfr": "Jan Aushadhi / BPPI",
        "price": 28,
        "isGeneric": true,
        "dosage": "200mcg"
      },
      {
        "name": "Budecort 200 Rotacaps Equivalent",
        "mfr": "Cipla / Sun Pharma",
        "price": 115,
        "isGeneric": false,
        "dosage": "200mcg"
      }
    ]
  },
  {
    "id": "MED_GEN_151",
    "brand": "Foracort 200 Synchrobreathe / Inhaler",
    "generic": "Formoterol Fumarate (6mcg) + Budesonide (200mcg)",
    "strength": "6mcg + 200mcg",
    "form": "Inhaler",
    "manufacturer": "Cipla Ltd",
    "price": 465,
    "unit": "120 Metered Doses",
    "category": "Respiratory & Allergy",
    "uses": "Moderate to Severe Asthma, COPD Maintenance, Exercise-Induced Asthma",
    "sideEffects": "Throat irritation, Mild tremor, Candidiasis (preventable by water rinse)",
    "description": "Inhale 1-2 puffs morning and evening as prescribed. Always gargle with water afterwards.",
    "alternatives": [
      {
        "name": "Generic Formoterol + Budesonide Inhaler",
        "mfr": "Jan Aushadhi / BPPI",
        "price": 95,
        "isGeneric": true,
        "dosage": "6mcg + 200mcg"
      },
      {
        "name": "Foracort 200 Synchrobreathe / Inhaler Equivalent",
        "mfr": "Cipla / Sun Pharma",
        "price": 395,
        "isGeneric": false,
        "dosage": "6mcg + 200mcg"
      }
    ]
  },
  {
    "id": "MED_GEN_152",
    "brand": "Becosules-Z Capsule",
    "generic": "Vitamin B-Complex (B1, B2, B6, B12, Niacinamide, Folic Acid) + Vitamin C (50mg) + Zinc Sulphate (41.4mg)",
    "strength": "High-potency B-Complex",
    "form": "Capsule",
    "manufacturer": "Pfizer Ltd",
    "price": 52,
    "unit": "20 Capsules",
    "category": "Vitamins & Supplements",
    "uses": "Mouth Ulcers, General Fatigue, Vitamin B Deficiency, Post-Illness Weakness",
    "sideEffects": "Bright yellow urine discoloration (harmless B2 elimination)",
    "description": "Take 1 capsule once daily after lunch or breakfast.",
    "alternatives": [
      {
        "name": "Generic B-Complex Forte with C & Zinc Capsules",
        "mfr": "Jan Aushadhi / BPPI",
        "price": 12,
        "isGeneric": true,
        "dosage": "High-potency B-Complex"
      },
      {
        "name": "Becosules-Z Capsule Equivalent",
        "mfr": "Cipla / Sun Pharma",
        "price": 44,
        "isGeneric": false,
        "dosage": "High-potency B-Complex"
      }
    ]
  },
  {
    "id": "MED_GEN_153",
    "brand": "Supradyn Daily",
    "generic": "12 Vitamins + 5 Minerals + Trace Elements",
    "strength": "Daily Formula",
    "form": "Tablet",
    "manufacturer": "Bayer Pharmaceuticals",
    "price": 60,
    "unit": "15 Tablets",
    "category": "Vitamins & Supplements",
    "uses": "Immune Support, Daily Lethargy, Nutritional Deficiency, Stress & Fatigue",
    "sideEffects": "Mild stomach discomfort if taken on empty stomach",
    "description": "Take 1 tablet daily after food.",
    "alternatives": [
      {
        "name": "Generic Daily Multivitamin & Multimineral Tablets",
        "mfr": "Jan Aushadhi / BPPI",
        "price": 15,
        "isGeneric": true,
        "dosage": "Daily Formula"
      },
      {
        "name": "Supradyn Daily Equivalent",
        "mfr": "Cipla / Sun Pharma",
        "price": 51,
        "isGeneric": false,
        "dosage": "Daily Formula"
      }
    ]
  },
  {
    "id": "MED_GEN_154",
    "brand": "Shelcal 500",
    "generic": "Calcium Carbonate from Oyster Shell eq. to Elemental Calcium (500mg) + Vitamin D3 (250 IU)",
    "strength": "500mg + 250 IU",
    "form": "Tablet",
    "manufacturer": "Torrent Pharmaceuticals Ltd",
    "price": 132,
    "unit": "15 Tablets",
    "category": "Vitamins & Supplements",
    "uses": "Osteoporosis, Bone Weakness, Calcium Deficiency in Pregnancy/Lactation, Joint Pains",
    "sideEffects": "Mild constipation, Bloating",
    "description": "Take 1 tablet once or twice daily after meals with water.",
    "alternatives": [
      {
        "name": "Generic Calcium 500mg + Vitamin D3 Tablets",
        "mfr": "Jan Aushadhi / BPPI",
        "price": 28,
        "isGeneric": true,
        "dosage": "500mg + 250 IU"
      },
      {
        "name": "Shelcal 500 Equivalent",
        "mfr": "Cipla / Sun Pharma",
        "price": 112,
        "isGeneric": false,
        "dosage": "500mg + 250 IU"
      }
    ]
  },
  {
    "id": "MED_GEN_155",
    "brand": "Evion 600",
    "generic": "Tocopheryl Acetate (600mg)",
    "strength": "600mg",
    "form": "Softgel Capsule",
    "manufacturer": "Procter & Gamble Hygiene and Health Care",
    "price": 68,
    "unit": "10 Capsules",
    "category": "Vitamins & Supplements",
    "uses": "Muscle Cramps, Skin Dryness & Dullness, Nocturnal Leg Cramps, Hair Fall",
    "sideEffects": "Nausea, Headache if taken in excess",
    "description": "Take 1 capsule once daily with warm water after dinner.",
    "alternatives": [
      {
        "name": "Generic Vitamin E (Tocopheryl) 600mg Capsules",
        "mfr": "Jan Aushadhi / BPPI",
        "price": 16,
        "isGeneric": true,
        "dosage": "600mg"
      },
      {
        "name": "Evion 600 Equivalent",
        "mfr": "Cipla / Sun Pharma",
        "price": 58,
        "isGeneric": false,
        "dosage": "600mg"
      }
    ]
  },
  {
    "id": "MED_GEN_156",
    "brand": "Orofer-XT Tablet",
    "generic": "Elemental Iron / Ferrous Ascorbate (100mg) + Folic Acid (1.5mg)",
    "strength": "100mg + 1.5mg",
    "form": "Tablet",
    "manufacturer": "Emcure Pharmaceuticals Ltd",
    "price": 210,
    "unit": "10 Tablets",
    "category": "Vitamins & Supplements",
    "uses": "Iron Deficiency Anemia, Low Hemoglobin, Fatigue & Pale Skin, Pregnancy Anemia",
    "sideEffects": "Dark black colored stools (harmless), Mild nausea or constipation",
    "description": "Take 1 tablet daily after food. Avoid taking with tea, coffee or milk.",
    "alternatives": [
      {
        "name": "Generic Ferrous Ascorbate 100mg + Folic Acid Tablets",
        "mfr": "Jan Aushadhi / BPPI",
        "price": 38,
        "isGeneric": true,
        "dosage": "100mg + 1.5mg"
      },
      {
        "name": "Orofer-XT Tablet Equivalent",
        "mfr": "Cipla / Sun Pharma",
        "price": 179,
        "isGeneric": false,
        "dosage": "100mg + 1.5mg"
      }
    ]
  },
  {
    "id": "MED_GEN_157",
    "brand": "Meftal-Spas",
    "generic": "Mefenamic Acid (250mg) + Dicyclomine HCl (10mg)",
    "strength": "250mg + 10mg",
    "form": "Tablet",
    "manufacturer": "Blue Cross Laboratories Ltd",
    "price": 55,
    "unit": "10 Tablets",
    "category": "Pain & Fever",
    "uses": "Menstrual Cramps (Dysmenorrhea), Stomach Spasms, Ureteric Colic Pain, Abdominal Colic",
    "sideEffects": "Dizziness, Dry mouth, Mild drowsiness",
    "description": "Take 1 tablet after meals when pain starts. Do not take on empty stomach.",
    "alternatives": [
      {
        "name": "Generic Mefenamic Acid + Dicyclomine Tablets",
        "mfr": "Jan Aushadhi / BPPI",
        "price": 12,
        "isGeneric": true,
        "dosage": "250mg + 10mg"
      },
      {
        "name": "Meftal-Spas Equivalent",
        "mfr": "Cipla / Sun Pharma",
        "price": 47,
        "isGeneric": false,
        "dosage": "250mg + 10mg"
      }
    ]
  },
  {
    "id": "MED_GEN_158",
    "brand": "Calpol 250 Pead Oral Suspension",
    "generic": "Paracetamol (250mg per 5ml)",
    "strength": "250mg/5ml",
    "form": "Syrup / Suspension",
    "manufacturer": "GlaxoSmithKline Pharmaceuticals",
    "price": 46,
    "unit": "60ml Bottle",
    "category": "Pain & Fever",
    "uses": "Childhood Fever, Post-Vaccination Fever, Teething Pain, Body Ache",
    "sideEffects": "Generally safe at recommended weight-based dosage",
    "description": "Administer 10-15 mg/kg per dose using measuring syringe every 4-6 hours if fever persists.",
    "alternatives": [
      {
        "name": "Generic Paracetamol Paediatric Suspension 250mg/5ml",
        "mfr": "Jan Aushadhi / BPPI",
        "price": 10,
        "isGeneric": true,
        "dosage": "250mg/5ml"
      },
      {
        "name": "Calpol 250 Pead Oral Suspension Equivalent",
        "mfr": "Cipla / Sun Pharma",
        "price": 39,
        "isGeneric": false,
        "dosage": "250mg/5ml"
      }
    ]
  },
  {
    "id": "MED_GEN_159",
    "brand": "Colicaid Drops",
    "generic": "Simethicone (40mg) + Dill Oil (0.005ml) + Fennel Oil (0.0007ml) per ml",
    "strength": "Infant formulation",
    "form": "Oral Drops",
    "manufacturer": "Meyer Organics Pvt Ltd",
    "price": 75,
    "unit": "15ml Drops",
    "category": "Pediatric Anti-Colic",
    "uses": "Infantile Colic, Gas Pain in Babies, Bloating, Griping Pain",
    "sideEffects": "Very safe; ingredients help release trapped gas bubbles",
    "description": "Give 5-10 drops 15 minutes before feed using dropper.",
    "alternatives": [
      {
        "name": "Generic Simethicone + Dill Oil Infant Drops",
        "mfr": "Jan Aushadhi / BPPI",
        "price": 16,
        "isGeneric": true,
        "dosage": "Infant formulation"
      },
      {
        "name": "Colicaid Drops Equivalent",
        "mfr": "Cipla / Sun Pharma",
        "price": 64,
        "isGeneric": false,
        "dosage": "Infant formulation"
      }
    ]
  },
  {
    "id": "MED_GEN_160",
    "brand": "Bonnisan Drops",
    "generic": "Anethum sowa + Tinospora cordifolia + Capparis spinosa extracts",
    "strength": "Herbal",
    "form": "Drops",
    "manufacturer": "The Himalaya Drug Company",
    "price": 65,
    "unit": "30ml Drops",
    "category": "Infant Digestion",
    "uses": "Infant Digestion Problems, Milk Regurgitation, Colic & Flatulence",
    "sideEffects": "Natural herbal preparation, well tolerated",
    "description": "Give 5 to 10 drops twice daily before feeds.",
    "alternatives": [
      {
        "name": "Generic Ayurvedic Infant Digestive Drops",
        "mfr": "Jan Aushadhi / BPPI",
        "price": 15,
        "isGeneric": true,
        "dosage": "Herbal"
      },
      {
        "name": "Bonnisan Drops Equivalent",
        "mfr": "Cipla / Sun Pharma",
        "price": 55,
        "isGeneric": false,
        "dosage": "Herbal"
      }
    ]
  },
  {
    "id": "MED_GEN_161",
    "brand": "Zenflox-OZ",
    "generic": "Ofloxacin (200mg) + Ornidazole (500mg)",
    "strength": "200mg + 500mg",
    "form": "Tablet",
    "manufacturer": "Mankind Pharma Ltd",
    "price": 125,
    "unit": "10 Tablets",
    "category": "Antibiotics & Infections",
    "uses": "Mixed Bacterial & Amoebic Diarrhea, Dysentery, Gastroenteritis, Stomach Infection",
    "sideEffects": "Metallic taste, Nausea, Mild dizziness",
    "description": "Take 1 tablet twice daily with meals for 3-5 days.",
    "alternatives": [
      {
        "name": "Generic Ofloxacin + Ornidazole Tablets",
        "mfr": "Jan Aushadhi / BPPI",
        "price": 28,
        "isGeneric": true,
        "dosage": "200mg + 500mg"
      },
      {
        "name": "Zenflox-OZ Equivalent",
        "mfr": "Cipla / Sun Pharma",
        "price": 106,
        "isGeneric": false,
        "dosage": "200mg + 500mg"
      }
    ]
  },
  {
    "id": "MED_GEN_162",
    "brand": "Nise Gel",
    "generic": "Nimesulide (1% w/w) + Methyl Salicylate + Menthol + Capsaicin",
    "strength": "1%",
    "form": "Gel",
    "manufacturer": "Dr. Reddy's Laboratories Ltd",
    "price": 120,
    "unit": "30g Tube",
    "category": "Pain & Fever",
    "uses": "Sprains, Strains, Lower Backache, Knee Joint Pain, Neck Stiffness",
    "sideEffects": "Mild warm sensation on application, Wash hands after use to prevent eye contact",
    "description": "Gently massage a small quantity on the painful area 3-4 times daily.",
    "alternatives": [
      {
        "name": "Generic Nimesulide + Methyl Salicylate Gel",
        "mfr": "Jan Aushadhi / BPPI",
        "price": 25,
        "isGeneric": true,
        "dosage": "1%"
      },
      {
        "name": "Nise Gel Equivalent",
        "mfr": "Cipla / Sun Pharma",
        "price": 102,
        "isGeneric": false,
        "dosage": "1%"
      }
    ]
  }
];

  root.MEDICINE_DATABASE = MEDICINE_DATABASE;
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = MEDICINE_DATABASE;
  }
})(typeof window !== 'undefined' ? window : (typeof global !== 'undefined' ? global : this));
