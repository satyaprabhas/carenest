# CareNest 🏥✨
> **Your Intelligent Personal Healthcare & Recovery Companion**

CareNest is a modern, responsive, and privacy-first digital healthcare platform designed to streamline patient discharge recovery, medicine affordability, disease-specific nutrition, and daily medication adherence.

---

## 🌟 Key Features & Portals

### 1. 📋 Discharge Summary Assistant (`discharge.html`)
- **Vertical Master-Detail Navigation**: Seamlessly navigate across 7 post-discharge clinical modules.
- **Medicine Schedule**: Chronological medication guide with food timing warnings and clinical purposes.
- **Wound Care Instructions**: Step-by-step sterile dressing protocols with visual alert badges.
- **Can I Eat This? - Food Safety Finder**: Live interactive search for permitted, restricted, and prohibited foods.
- **Warning Signs & Emergency Hub**: Red-flag symptoms and 24/7 emergency hotline directory.
- **1-Click Printable Care Sheet**: Dedicated high-contrast printer-friendly recovery document.

### 2. 💊 Generic Medicine Finder (`medicine-finder.html`)
- **Bioequivalent Drug Matching**: Search by brand name or active salt to find WHO-GMP and Jan Aushadhi generic equivalents.
- **Cost Savings Calculator**: Live monthly and annual savings metrics (up to 80% price reduction).
- **Search-Driven Exploration**: Clean initial interface with quick-action chips (*Metformin*, *Pan 40*, *Atorvastatin*, *Dolo 650*).
- **Simulated OCR Scanner**: Visual camera demo simulating optical strip recognition and salt detection.

### 3. 🥗 Disease-Based Food Advice (`food-advice.html`)
- **8 Chronic Health Conditions**: Type 2 Diabetes, Hypertension, CKD, High Cholesterol, Heart Disease, Fatty Liver, Thyroid, and GERD.
- **3-Tier Food Categorization**: Recommended (🟢), Limit (🟡), and Strictly Avoid (🔴) lists.
- **Simplified 3-Card Dual Condition Consensus**: Compares any two health issues simultaneously and provides clear clinical priority rules.

### 4. 🍽️ Personalized Daily Diet Planner (`diet-planner.html`)
- **Nutritional Profiling**: Input age, height, weight, activity level, and medical conditions to calculate daily calorie & macro targets.
- **5 Daily Meal Slots**: Breakfast, Mid-Morning Snack, Lunch, Evening Snack, Dinner with SVG meal graphics.
- **Equal-Nutrient Food Swapper**: Swap any disliked meal item with a nutritionally equivalent alternative.
- **End-of-Day Nutrient & Deficiency Tracker**: Full vitamin & mineral absorption analysis and clinical deficiency alerts.
- **Adaptive Satiety & Hunger Feedback**: Automatic next-day plan calibration (+175 to +300 kcal high-satiety foods) based on daily hunger assessment.

### 5. ⏰ Medicine Reminder & Alarm Hub (`reminders.html`)
- **Custom Dose Management**: Add medications with exact times, tablet photo previews, dosage, and food instructions.
- **Live Interactive Demo Alarm**: Visual and audio alarm simulation with Snooze (5 min) and "Mark Taken" buttons.
- **Real-Time Adherence Logging**: Visual streak tracker and weekly compliance rates.

### 6. 📁 Secure Medical Document Vault (`document-vault.html`)
- Encrypted local storage simulation for prescriptions, lab reports, discharge cards, and insurance claims.

---

## 🚀 Free Hosting on Render

CareNest is built as a fast, zero-dependency static web application, which can be hosted **100% free forever** on **[Render](https://render.com/)**:

### Quick Deployment Steps:
1. Go to **[dashboard.render.com](https://dashboard.render.com/)** and sign in with GitHub.
2. Click **New +** and select **Static Site**.
3. Connect your repository: `satyaprabhas/carenest`.
4. Configure the settings:
   - **Name**: `carenest`
   - **Branch**: `main`
   - **Build Command**: *(leave empty)*
   - **Publish Directory**: `./` (or `.`)
5. Click **Create Static Site**.
6. Render will automatically deploy your site and provide a free live URL (e.g., `https://carenest.onrender.com`).

---

## 💻 Running Locally

CareNest has no heavy dependencies and runs directly in any modern browser:

```bash
# Clone the repository
git clone https://github.com/satyaprabhas/carenest.git
cd carenest

# Run using any static HTTP server (Python 3)
python -m http.server 8080
```
Open `http://localhost:8080/index.html` in your browser.

---

## 🛡️ License & Medical Disclaimer
All clinical translations, diet suggestions, and bioequivalent drug data are curated for health literacy and post-discharge navigation. Always adhere strictly to your attending physician's guidance.
