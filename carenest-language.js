/**
 * CareNest Universal Native Multilingual Translation Engine
 * 100% Self-Contained, No Google Translate, No External APIs, Offline Ready
 * Supports: English (en), Hindi / हिन्दी (hi), Telugu / తెలుగు (te)
 */

(function () {
  const STORAGE_KEY = 'carenest_language';
  const SUPPORTED_LANGS = ['en', 'hi', 'te'];

  // Master Dictionaries (Sorted by phrase length descending for flawless compound matching)
  const SORTED_HI = [
  [
    "Never miss a dose. Track medications by exact administration times, preview verified tablet photos, and test the realistic audible alarm with pill visuals.",
    "कभी भी खुराक न भूलें। दवाइयों को सटीक समय पर ट्रैक करें, टैबलेट की तस्वीर देखें और अलार्म की जांच करें।"
  ],
  [
    "Enter your details to generate a clinically customized daily Indian meal routine with balanced macros and kitchen remedies.",
    "संतुलित पोषण और घरेलू नुस्खों के साथ अनुकूलित दैनिक भारतीय भोजन दिनचर्या तैयार करने के लिए अपना विवरण दर्ज करें।"
  ],
  [
    "Based on your profile, here is your customized 5-meal schedule for today. Click 'Swap Dish' if you want an alternative:",
    "आपकी प्रोफ़ाइल के आधार पर, आज के लिए आपका 5-भोजन कार्यक्रम यहां है। विकल्प के लिए 'व्यंजन बदलें' पर क्लिक करें:"
  ],
  [
    "Upload discharge papers or doctor prescriptions to extract dosing tables, dietary restrictions, and red flags.",
    "दवा सारणी, आहार प्रतिबंध और चेतावनी संकेत निकालने के लिए डिस्चार्ज पर्चियां अपलोड करें।"
  ],
  [
    "Search branded medicines to discover approved, bio-equivalent generic alternatives at up to 80% lower cost.",
    "80% तक कम कीमत पर स्वीकृत जेनेरिक विकल्प खोजने के लिए ब्रांडेड दवाएं खोजें।"
  ],
  [
    "Personalized Indian home meals (Idli, Poha, Khichdi, Phulka) matched to your specific health conditions.",
    "आपकी स्वास्थ्य स्थिति के अनुसार व्यक्तिगत भारतीय घरेलू भोजन (इडली, पोहा, खिचड़ी, फुल्का)।"
  ],
  [
    "Search any branded medication to discover identical generic alternatives and save up to 80% on costs.",
    "समान जेनेरिक विकल्प खोजने और 80% तक बचत करने के लिए कोई भी ब्रांडेड दवा खोजें।"
  ],
  [
    "Store prescriptions, lab reports, ECGs, and scans safely with encrypted offline and cloud access.",
    "पर्चे, लैब रिपोर्ट, ईसीजी और स्कैन को सुरक्षित एन्क्रिप्टेड रूप में सहेजें।"
  ],
  [
    "Direct contact with verified cardiologists, nephrologists, and 24x7 emergency helpline numbers.",
    "सत्यापित डॉक्टरों और 24x7 आपातकालीन हेल्पलाइन नंबरों से सीधा संपर्क।"
  ],
  [
    "Never miss a scheduled dose. Visual pill alarms, audio alerts, and food timing instructions.",
    "कभी भी खुराक न भूलें। फोटो अलार्म, ध्वनि अलर्ट और भोजन समय निर्देश।"
  ],
  [
    "Summary of consumed meals, nutrient coverage, and kitchen remedies for any missing vitamins:",
    "खाए गए भोजन, पोषक तत्वों की स्थिति और छूटे हुए विटामिनों के लिए घरेलू उपाय:"
  ],
  [
    "2 phulkas (no oil) + 1 katori moong dal + 1 katori bhindi + 1 small katori dahi",
    "2 बिना तेल के फुल्के + 1 कटोरी मूंग दाल + 1 कटोरी भिंडी + दही"
  ],
  [
    "Select all that apply to tailor foods specifically for your health safety:",
    "अपनी स्वास्थ्य सुरक्षा के अनुसार भोजन तैयार करने के लिए सभी लागू विकल्पों का चयन करें:"
  ],
  [
    "2 Soft Whole Wheat Phulkas + Yellow Moong Dal + Bhindi Sabzi + Fresh Curd",
    "2 नरम फुल्के + पीली मूंग दाल + भिंडी मसाला + ताजा दही"
  ],
  [
    "2 gluten-free millet rotis with cooling bottle gourd dal & fresh beetroot",
    "2 gluten-free millet rotis with cooling bottle gourd dal & fresh beetroot"
  ],
  [
    "2 phulkas with 100g tender chicken in onion-tomato-ginger gravy + salad",
    "2 phulkas with 100g tender chicken in onion-tomato-ginger gravy + salad"
  ],
  [
    "Steamed Rice + Palak Dal (Spinach Lentils) + Carrot Beans Sabzi + Curd",
    "सादे चावल + पालक दाल + गाजर बीन्स सब्जी + दही"
  ],
  [
    "Spiced Buttermilk (Chaas / Majjiga) with Roasted Jeera & Curry Leaves",
    "मसाला छाछ (भुना जीरा और कढ़ी पत्ते के साथ)"
  ],
  [
    "1 medium bowl rice + generous palak dal + steamed carrot beans + dahi",
    "1 कटोरी चावल + पालक दाल + गाजर बीन्स सब्जी + दही"
  ],
  [
    "2 Phulkas + Low-Fat Paneer Bhurji + Toor Dal + Sliced Cucumber Salad",
    "2 फुल्के + पनीर भुर्जी + तुअर दाल + खीरा सलाद"
  ],
  [
    "1 bowl steamed rice with 1 piece fish in light curry + cabbage sabzi",
    "1 bowl steamed rice with 1 piece fish in light curry + cabbage sabzi"
  ],
  [
    "1 soft phulka with generous light moong soup & crunchy roasted papad",
    "1 soft phulka with generous light moong soup & crunchy roasted papad"
  ],
  [
    "1 Soft Phulka + Large Bowl of Yellow Moong Dal Soup + Roasted Papad",
    "1 नरम फुल्का + मूंग दाल सूप की बड़ी कटोरी + भुना पापड़"
  ],
  [
    "1 fish fillet lightly spiced with turmeric & pepper + 1 roti & soup",
    "1 fish fillet lightly spiced with turmeric & pepper + 1 roti & soup"
  ],
  [
    "Steamed White Rice + Mild Yellow Moong Dal + Sautéed Gourd (Lauki)",
    "सफेद चावल + हल्की मूंग दाल + लौकी की सब्जी"
  ],
  [
    "2 eggs scrambled with onions, tomatoes & green coriander + 2 rotis",
    "2 eggs scrambled with onions, tomatoes & green coriander + 2 rotis"
  ],
  [
    "2 Soft Phulkas + Home-Style Chicken Curry (Low Oil) + Green Salad",
    "2 नरम फुल्के + घर की चिकन करी (कम तेल) + हरा सलाद"
  ],
  [
    "2 Boiled Egg Curry + 2 Whole Wheat Phulkas + Cucumber Onion Salad",
    "2 उबले अंडे की करी + 2 गेहूं के फुल्के + खीरा प्याज सलाद"
  ],
  [
    "2 rotis with 75g crumbled paneer tossed with tomatoes & fresh dal",
    "2 रोटियां + 75g पनीर भुर्जी + ताजा दाल"
  ],
  [
    "2 Jowar / Bajra Rotis + Lauki (Gourd) Chana Dal + Beetroot Salad",
    "2 ज्वार / बाजरा रोटियां + लौकी चना दाल + चुकंदर सलाद"
  ],
  [
    "Vegetable Dalia (Broken Wheat Khichdi) with Carrots, Peas & Curd",
    "सब्जी दलिया खिचड़ी (गाजर, मटर और ताजा दही)"
  ],
  [
    "1 medium bowl tempered with mustard seeds, curry leaves & ginger",
    "1 कटोरी उपमा (राई, कढ़ी पत्ता और अदरक तड़का)"
  ],
  [
    "1 bowl warm comforting khichdi tempered with cumin & 1 bowl curd",
    "1 bowl warm comforting khichdi tempered with cumin & 1 bowl curd"
  ],
  [
    "Soft Steamed Idlis (3 pcs) + Vegetable Sambar + Coconut Chutney",
    "नरम भाप वाली इडली (3 पीस) + सांभर + नारियल चटनी"
  ],
  [
    "2 Boiled Eggs with Black Pepper & 2 Whole Wheat Phulkas / Toast",
    "2 उबले अंडे (काली मिर्च के साथ) + 2 गेहूं के फुल्के"
  ],
  [
    "Light Steamed Fish (100g) + 1 Soft Phulka + Warm Moong Dal Soup",
    "भाप में पकी मछली (100g) + 1 फुल्का + मूंग दाल सूप"
  ],
  [
    "Controlled protein, regulated potassium & strict sodium balance",
    "नियंत्रित प्रोटीन, संतुलित पोटेशियम और सीमित सोडियम"
  ],
  [
    "Fresh Methi (Fenugreek) Thepla / Rotis (2 pcs) with Fresh Curd",
    "मेथी थेपला / रोटी (2 पीस) + ताजा दही"
  ],
  [
    "Steamed Rice + Home-Style Fish Curry + Cabbage Poriyal / Sabzi",
    "उबले चावल + घर की फिश करी + पत्तागोभी सब्जी"
  ],
  [
    "Boiled Sprouted Moong Chaat with Cucumber, Onion & Fresh Lemon",
    "अंकुरित मूंग चाट (खीरा, प्याज और ताजा नींबू)"
  ],
  [
    "Spiced chicken breast cooked on tawa with 1 roti & clear broth",
    "Spiced chicken breast cooked on tawa with 1 roti & clear broth"
  ],
  [
    "DASH dietary principles with low sodium & potassium rich foods",
    "कम नमक और पोटेशियम युक्त खाद्य पदार्थों के साथ बीपी नियंत्रण"
  ],
  [
    "2 Soft Phulkas + Home-style Palak Paneer (Low Oil) + Warm Dal",
    "2 नरम फुल्के + पालक पनीर (कम तेल) + गर्म दाल"
  ],
  [
    "1 medium plate with green peas, onions, peanuts & lemon juice",
    "1 प्लेट पोहा (मटर, प्याज, मूंगफली और नींबू के साथ)"
  ],
  [
    "2 golden crepes made from soaked moong dal with green chutney",
    "2 मूंग दाल चीले + हरी चटनी"
  ],
  [
    "2 soft whole wheat methi rotis with 1 small katori fresh dahi",
    "2 नरम मेथी रोटियां + 1 छोटी कटोरी ताजा दही"
  ],
  [
    "1 cup steamed sprouts with chopped tomatoes, cucumber & lemon",
    "1 cup steamed sprouts with chopped tomatoes, cucumber & lemon"
  ],
  [
    "2 slices whole grain bread with fresh cucumber, tomato & mint",
    "2 slices whole grain bread with fresh cucumber, tomato & mint"
  ],
  [
    "Handful of Soaked Almonds (6 pcs Badam) & 2 Walnuts (Akhrot)",
    "भीगे बादाम (6 पीस) और 2 अखरोट"
  ],
  [
    "Whole Wheat Cucumber-Tomato Sandwich with Green Mint Chutney",
    "होल व्हीट खीरा-टमाटर सैंडविच (हरी पुदीना चटनी)"
  ],
  [
    "Soft Yellow Moong Dal Khichdi + 1 tsp Pure Ghee + Fresh Curd",
    "मूंग दाल खिचड़ी + 1 चम्मच शुद्ध घी + ताजा दही"
  ],
  [
    "Tawa Grilled Chicken (100g) + 1 Phulka + Warm Clear Veg Soup",
    "तवा ग्रिल्ड चिकन (100g) + 1 फुल्का + वेज क्लीयर सूप"
  ],
  [
    "1 bowl soft rice with light moong dal and bottle gourd sabzi",
    "1 bowl soft rice with light moong dal and bottle gourd sabzi"
  ],
  [
    "Yellow Moong Dal Chilla (2 pcs) with Mint Coriander Chutney",
    "मूंग दाल चीला (2 पीस) + पुदीना धनिया चटनी"
  ],
  [
    "Ragi (Finger Millet) Dosa (2 pcs) with Tomato Onion Chutney",
    "रागी डोसा (2 पीस) + टमाटर प्याज की चटनी"
  ],
  [
    "3 medium steamed idlis with 1 bowl sambar & 1 spoon chutney",
    "3 मध्यम इडली + 1 कटोरी सांभर + 1 चम्मच चटनी"
  ],
  [
    "1 bowl wholesome cracked wheat with vegetables & small curd",
    "1 bowl wholesome cracked wheat with vegetables & small curd"
  ],
  [
    "Crispy Roasted Makhana (Foxnuts) with Turmeric & Rock Salt",
    "कुरकुरे भुने मखाने (हल्दी और सेंधा नमक के साथ)"
  ],
  [
    "Roasted Bengal Gram (Bhuna Chana) + Hot Adrak (Ginger) Tea",
    "भुना चना + अदरक वाली गर्म चाय"
  ],
  [
    "2 Soft Phulkas + Lauki (Bottle Gourd) Dal + Cucumber Salad",
    "2 नरम फुल्के + लौकी दाल + खीरा सलाद"
  ],
  [
    "Small bowl of roasted chana with hot ginger tea (no sugar)",
    "Small bowl of roasted chana with hot ginger tea (no sugar)"
  ],
  [
    "Low glycemic index foods to prevent post-meal sugar spikes",
    "भोजन के बाद शुगर के स्तर को नियंत्रित रखने वाले खाद्य पदार्थ"
  ],
  [
    "Vegetable Poha with Roasted Peanuts, Curry Leaves & Lemon",
    "सब्जी पोहा (मूंगफली, कढ़ी पत्ता और नींबू के साथ)"
  ],
  [
    "2 warm phulkas with gentle bottle gourd dal & fresh salad",
    "2 warm phulkas with gentle bottle gourd dal & fresh salad"
  ],
  [
    "I felt completely satisfied and energetic (Maintain plan)",
    "मैं पूरी तरह संतुष्ट और ऊर्जावान महसूस कर रहा था (योजना जारी रखें)"
  ],
  [
    "Masala Egg Bhurji (2 Eggs) with 2 Soft Whole Wheat Rotis",
    "मसाला एग भुर्जी (2 अंडे) + 2 नरम गेहूं की रोटियां"
  ],
  [
    "2 whole eggs sprinkled with roasted jeera & black pepper",
    "2 पूरे अंडे (भुना जीरा और काली मिर्च छिड़का हुआ)"
  ],
  [
    "1 full bowl roasted with a drop of ghee & pinch of haldi",
    "1 full bowl roasted with a drop of ghee & pinch of haldi"
  ],
  [
    "Zero trans-fats, high soluble fiber, and heart-safe fats",
    "शून्य ट्रांस-फैट, उच्च घुलनशील फाइबर और हृदय-सुरक्षित तेल"
  ],
  [
    "Drag and drop your medical files here or click to browse",
    "अपनी मेडिकल फाइलें यहाँ खींचें या ब्राउज़ करने के लिए क्लिक करें"
  ],
  [
    "Warm Steamed Sweet Corn with Lemon Juice & Black Pepper",
    "उबली स्वीट कॉर्न (नींबू का रस और काली मिर्च)"
  ],
  [
    "2 crispy dark millet dosas with homemade tomato chutney",
    "2 कुरकुरे रागी डोसे + टमाटर चटनी"
  ],
  [
    "Scrambled eggs tossed with onions, tomatoes & coriander",
    "अंडा भुर्जी (प्याज, टमाटर और हरे धनिए के साथ)"
  ],
  [
    "1 large glass freshly churned with roasted cumin & mint",
    "1 बड़ा गिलास ताजा छाछ (भुना जीरा और पुदीना)"
  ],
  [
    "I was still very hungry (Add +250 kcal snacks tomorrow)",
    "मुझे अभी भी भूख लग रही थी (कल +250 कैलोरी स्नैक जोड़ें)"
  ],
  [
    "Oats & Vegetable Upma with Carrots, Beans & Green Peas",
    "ओट्स और वेज उपमा (गाजर, बीन्स और हरी मटर के साथ)"
  ],
  [
    "2 hard boiled eggs in mild home curry with 2 hot rotis",
    "2 hard boiled eggs in mild home curry with 2 hot rotis"
  ],
  [
    "1 small bowl steamed corn seasoned with lemon & pepper",
    "1 small bowl steamed corn seasoned with lemon & pepper"
  ],
  [
    "Sign in to access your health dashboard and reminders.",
    "अपने स्वास्थ्य डैशबोर्ड और दवा अनुस्मारक तक पहुंचने के लिए लॉगिन करें।"
  ],
  [
    "I agree to CareNest Health Data Terms & Privacy Policy",
    "मैं केयरनेस्ट स्वास्थ्य डेटा शर्तों और गोपनीयता नीति से सहमत हूँ"
  ],
  [
    "Metabolism balancing, selenium & iodine rich nutrition",
    "मेटाबॉलिज्म संतुलन, सेलेनियम और आयोडीन युक्त पोषण"
  ],
  [
    "Fresh Pink Guava Slices with a pinch of Chaat Masala",
    "ताजा गुलाबी अमरूद स्लाइस (चाट मसाले के साथ)"
  ],
  [
    "2 Soft Phulkas + 2 Egg Bhurji with Tomatoes & Onions",
    "2 नरम फुल्के + 2 एग भुर्जी (टमाटर व प्याज)"
  ],
  [
    "Fresh Tender Coconut Water (Nariyal Pani / Elaneer)",
    "ताजा नारियल पानी (प्राकृतिक इलेक्ट्रोलाइट्स)"
  ],
  [
    "I felt too full / heavy (Reduce -150 kcal tomorrow)",
    "मेरा पेट बहुत भारी महसूस हो रहा था (कल -150 कैलोरी कम करें)"
  ],
  [
    "2 phulkas with pureed spinach & fresh paneer cubes",
    "2 phulkas with pureed spinach & fresh paneer cubes"
  ],
  [
    "Personalized Daily Indian Diet & Nutrition Planner",
    "व्यक्तिगत दैनिक भारतीय आहार और पोषण योजना"
  ],
  [
    "Wholesome home diet for general vitality & fitness",
    "सामान्य स्फूर्ति और तंदुरुस्ती के लिए पौष्टिक घरेलू आहार"
  ],
  [
    "Step 4: End-of-Day Nutritional & Deficiency Report",
    "चरण 4: दिन का अंत पोषण और कमी रिपोर्ट"
  ],
  [
    "Anti-inflammatory home meals for cardiac recovery",
    "हृदय स्वास्थ्य सुधार के लिए सूजनरोधी घरेलू भोजन"
  ],
  [
    "Your Comprehensive Personal Healthcare Companion",
    "आपका संपूर्ण व्यक्तिगत स्वास्थ्य और देखभाल साथी"
  ],
  [
    "CareNest - Indian Daily Diet & Nutrition Planner",
    "केयरनेस्ट - भारतीय दैनिक आहार और पोषण योजना"
  ],
  [
    "Fresh Crisp Apple Slices with pinch of Cinnamon",
    "ताजा सेब के टुकड़े (दालचीनी के साथ)"
  ],
  [
    "Tap each glass as you drink throughout the day!",
    "दिनभर में जब भी पानी पिएं, गिलास पर टैप करें!"
  ],
  [
    "Mid-Morning Refreshment (11:00 AM – 11:30 AM)",
    "दोपहर से पहले अल्पाहार (11:00 AM – 11:30 AM)"
  ],
  [
    "Light on Kidneys • Low Potassium & Phosphorus",
    "किडनी के अनुकूल • कम पोटेशियम"
  ],
  [
    "CareNest - Your Personal Healthcare Companion",
    "केयरनेस्ट - आपका व्यक्तिगत स्वास्थ्य साथी"
  ],
  [
    "Medicine Reminders with Alarm & Tablet Photos",
    "अलार्म और फोटो के साथ दवा अनुस्मारक"
  ],
  [
    "Daily Diet Planner with Food Tracking & Swaps",
    "भारतीय भोजन और जल ट्रैकर के साथ दैनिक आहार"
  ],
  [
    "View End-of-Day Nutrition & Deficiency Report",
    "दैनिक पोषण और कमी रिपोर्ट देखें"
  ],
  [
    "How Did You Feel Today? (Hunger Recalibrator)",
    "आज आपको कैसा महसूस हुआ? (भूख पुनर्गणक)"
  ],
  [
    "CareNest - Medicine Reminders & Tablet Alarms",
    "केयरनेस्ट - दवा अनुस्मारक और टैबलेट अलार्म"
  ],
  [
    "Find Affordable Generic Medicine Equivalents",
    "सस्ती जेनेरिक दवा विकल्प तुरंत खोजें"
  ],
  [
    "Prescription Dosing Schedule & Visual Alarms",
    "पर्चे की दवा अनुसूची और दृश्य अलार्म"
  ],
  [
    "6 peeled soaked almonds and 2 walnut halves",
    "6 छिले भीगे बादाम और 2 अखरोट"
  ],
  [
    "Classic Indian Thali • Wholesome & Balanced",
    "पारंपरिक भारतीय थाली • संतुलित और पौष्टिक"
  ],
  [
    "Very Light on Stomach • Promotes Good Sleep",
    "पेट के लिए बहुत हल्का • अच्छी नींद में सहायक"
  ],
  [
    "Light Active (Daily Walking / Light Chores)",
    "हल्की सक्रिय (रोजाना चलना / घरेलू काम)"
  ],
  [
    "Natural Electrolytes • Hydrating & Cooling",
    "प्राकृतिक इलेक्ट्रोलाइट्स • शीतलता और ताजगी"
  ],
  [
    "High Iron & Protein • Satisfying & Healthy",
    "उच्च आयरन व प्रोटीन • संतोषजनक व स्वस्थ"
  ],
  [
    "Very Light • Low Potassium for Kidney Care",
    "बहुत हल्का • किडनी सुरक्षा के लिए कम पोटेशियम"
  ],
  [
    "Daily Water Tracker (Pani Peene ka Record)",
    "दैनिक जल ट्रैकर (पानी पीने का रिकॉर्ड)"
  ],
  [
    "Fresh Sweet Papaya Slices (1 Medium Bowl)",
    "ताजा पपीता स्लाइस (1 मध्यम कटोरी)"
  ],
  [
    "1 natural tender coconut (approx. 200 ml)",
    "1 ताजा प्राकृतिक नारियल पानी (लगभग 200 मिली)"
  ],
  [
    "1 whole ripe guava sliced with black salt",
    "1 पूरा पका अमरूद स्लाइस (काले नमक के साथ)"
  ],
  [
    "Controls Blood Pressure • Light & Cooling",
    "रक्तचाप नियंत्रण • हल्का व शीतल"
  ],
  [
    "Private • Encrypted • Healthcare Standard",
    "निजी • सुरक्षित एन्क्रिप्टेड • स्वास्थ्य मानक"
  ],
  [
    "Step 2: Medical Conditions & Health Goals",
    "चरण 2: चिकित्सीय स्थितियां और स्वास्थ्य लक्ष्य"
  ],
  [
    "Satisfying Home Breakfast • High Energy",
    "संतोषजनक घरेलू नाश्ता • भरपूर ऊर्जा"
  ],
  [
    "Understand Hospital Discharge Documents",
    "अस्पताल डिस्चार्ज पर्चियों को आसानी से समझें"
  ],
  [
    "Moderate Active (1 Hour Brisk Exercise)",
    "मध्यम सक्रिय (1 घंटा व्यायाम / योग)"
  ],
  [
    "Very Active (Physical Labor / Athletes)",
    "अत्यधिक सक्रिय (शारीरिक श्रम / खेल)"
  ],
  [
    "Save Today's Report to CareNest Profile",
    "आज की रिपोर्ट प्रोफ़ाइल में सहेजें"
  ],
  [
    "High Vegetarian Protein • Strong Bones",
    "उच्च शाकाहारी प्रोटीन • मजबूत हड्डियां"
  ],
  [
    "Step 3: Your Daily Indian Meal Routine",
    "चरण 3: आपका दैनिक भारतीय भोजन रूटीन"
  ],
  [
    "CareNest - Portal Selection Dashboard",
    "केयरनेस्ट - पोर्टल चयन डैशबोर्ड"
  ],
  [
    "Sedentary (Desk Job / Little Walking)",
    "गतिहीन (डेस्क जॉब / कम चलना)"
  ],
  [
    "1 medium cup freshly cut ripe papaya",
    "1 कप ताजा कटा हुआ पपीता"
  ],
  [
    "Rich in Calcium & Iron • Bone Health",
    "कैल्शियम व आयरन युक्त • हड्डियों की मजबूती"
  ],
  [
    "Brain & Memory • Good Fats for Heart",
    "याद्दाश्त व दिमाग • हृदय के लिए उत्तम वसा"
  ],
  [
    "Quick & Light • High Quality Protein",
    "त्वरित व हल्का • उच्च गुणवत्ता प्रोटीन"
  ],
  [
    "Find Lower-Cost Generic Alternatives",
    "कम लागत वाली जेनेरिक दवाएं खोजें"
  ],
  [
    "Step 1: Your Profile & Health Target",
    "चरण 1: आपकी प्रोफ़ाइल और स्वास्थ्य लक्ष्य"
  ],
  [
    "Deficiency Alerts & Kitchen Remedies",
    "पोषक तत्वों की कमी और घरेलू उपाय"
  ],
  [
    "Morning Breakfast (Subah ka Nashta)",
    "सुबह का नाश्ता (8:00 AM – 9:00 AM)"
  ],
  [
    "Easy to Digest • Light & Energizing",
    "पचाने में आसान • हल्का और ऊर्जावान"
  ],
  [
    "High Protein • Blood Sugar Friendly",
    "उच्च प्रोटीन • शुगर के अनुकूल"
  ],
  [
    "Aids Digestion • High Vitamin A & C",
    "पाचन में सहायक • विटामिन ए व सी से भरपूर"
  ],
  [
    "Gentle on Kidneys • Crisp & Filling",
    "किडनी के लिए कोमल • कुरकुरा व पेट भरने वाला"
  ],
  [
    "High Fiber • Controls Morning Sugar",
    "उच्च फाइबर • सुबह की शुगर नियंत्रित रखे"
  ],
  [
    "Secure • Private • Cloud Sync Ready",
    "सुरक्षित • निजी • क्लाउड सिंक तैयार"
  ],
  [
    "Afternoon Lunch (Dopahar ka Khana)",
    "दोपहर का खाना (1:30 PM – 2:30 PM)"
  ],
  [
    "Zero Oil Crunch • Sustained Energy",
    "शून्य तेल स्नैक • निरंतर ऊर्जा"
  ],
  [
    "Lean Protein • Light & No Bloating",
    "लीन प्रोटीन • हल्का व सुपाच्य"
  ],
  [
    "Wholesome Lunch (Dopahar ka Khana)",
    "दोपहर का खाना (1:00 PM – 2:00 PM)"
  ],
  [
    "Medicine Reminders & Tablet Alarms",
    "दवा अनुस्मारक और टैबलेट अलार्म"
  ],
  [
    "Generic Medicine Finder | CareNest",
    "जेनेरिक दवा खोजक | केयरनेस्ट"
  ],
  [
    "Evening Snack (Chai & Light Bite)",
    "शाम का नाश्ता (चाय और हल्का स्नैक 5:00 PM)"
  ],
  [
    "Select an Alternative Indian Meal",
    "वैकल्पिक भारतीय भोजन चुनें"
  ],
  [
    "Cools Stomach • Natural Probiotic",
    "पेट को ठंडक • प्राकृतिक प्रोबायोटिक"
  ],
  [
    "Healthy Egg Protein • Vitamin B12",
    "स्वस्थ अंडा प्रोटीन • विटामिन बी12"
  ],
  [
    "Cooling & Light • Keeps BP Normal",
    "शीतल व हल्का • बीपी सामान्य रखे"
  ],
  [
    "CareNest - Medical Document Vault",
    "केयरनेस्ट - चिकित्सा दस्तावेज़ वॉल्ट"
  ],
  [
    "High Iron & Calcium • Fiber Rich",
    "उच्च आयरन व कैल्शियम • फाइबर से भरपूर"
  ],
  [
    "Keep me logged in on this device",
    "मुझे इस डिवाइस पर लॉग इन रखें"
  ],
  [
    "1 medium apple sliced with peel",
    "1 कटा हुआ ताजा सेब"
  ],
  [
    "Heart Healthy • Natural Omega-3",
    "हृदय के अनुकूल • प्राकृतिक ओमेगा-3"
  ],
  [
    "High Fiber • Keeps Sugar Stable",
    "उच्च फाइबर • शुगर को स्थिर रखे"
  ],
  [
    "Filling & Fresh • Good Vitamins",
    "ताजा और पेट भरने वाला • उत्तम विटामिन"
  ],
  [
    "Indian Diet & Nutrition Planner",
    "भारतीय आहार और पोषण योजना"
  ],
  [
    "Non-Vegetarian (Chicken & Fish)",
    "मांसाहारी (चिकन और मछली)"
  ],
  [
    "Search by brand or salt name...",
    "ब्रांड या घटक के नाम से खोजें..."
  ],
  [
    "High Protein • Muscle Strength",
    "उच्च प्रोटीन • मांसपेशियों की मजबूती"
  ],
  [
    "Rich in Fiber • Heart Friendly",
    "फाइबर से भरपूर • हृदय के लिए लाभकारी"
  ],
  [
    "Low Sodium • Heart Safe & Lean",
    "कम सोडियम • हृदय-सुरक्षित और लीन"
  ],
  [
    "Iron Rich • Wholesome & Quick",
    "आयरन से भरपूर • पौष्टिक और त्वरित"
  ],
  [
    "Heart Healthy • Rich in Fiber",
    "हृदय के लिए उत्तम • फाइबर से भरपूर"
  ],
  [
    "Low Sodium • Crispy & Healthy",
    "कम सोडियम • कुरकुरा और स्वस्थ"
  ],
  [
    "100% Home Cooked Indian Meals",
    "100% घर का बना भारतीय भोजन"
  ],
  [
    "+ Add Medicine & Tablet Photo",
    "+ नई दवा और फोटो जोड़ें"
  ],
  [
    "Night Dinner (Raat ka Khana)",
    "रात का खाना (8:00 PM – 9:00 PM)"
  ],
  [
    "Controls Sugar • Healthy Gut",
    "शुगर नियंत्रण • स्वस्थ पाचन"
  ],
  [
    "Very High Fiber • Sugar Safe",
    "उच्च फाइबर • शुगर के लिए सुरक्षित"
  ],
  [
    "Upcoming Review Appointments",
    "आगामी समीक्षा परामर्श"
  ],
  [
    "Uploaded Reports & Lab Vault",
    "अपलोड की गई रिपोर्ट और लैब वॉल्ट"
  ],
  [
    "Affordable Generic Medicines",
    "किफायती जेनेरिक दवाएं"
  ],
  [
    "Generate My Indian Diet Plan",
    "मेरी भारतीय आहार योजना बनाएं"
  ],
  [
    "Bioequivalent Savings Portal",
    "किफायती दवा बचत पोर्टल"
  ],
  [
    "Custom Indian Diet Plan for",
    "अनुकूलित भारतीय आहार योजना -"
  ],
  [
    "Lean High Protein • Low Fat",
    "लीन प्रोटीन • कम वसा युक्त"
  ],
  [
    "Sugar Friendly & High Fiber",
    "शुगर के अनुकूल • उच्च फाइबर"
  ],
  [
    "Healthy Heart Recovery Plan",
    "स्वस्थ हृदय रिकवरी योजना"
  ],
  [
    "Prescription Pill Reminders",
    "पर्चे की दवा अनुस्मारक"
  ],
  [
    "Recalibrate Tomorrow's Diet",
    "कल की आहार योजना पुनर्गणित करें"
  ],
  [
    "Wholesome Indian Home Diet",
    "पौष्टिक भारतीय घरेलू भोजन"
  ],
  [
    "Clinical Discharge Summary",
    "नैदानिक डिस्चार्ज सारांश"
  ],
  [
    "Local Everyday Ingredients",
    "स्थानीय रोजमर्रा की सामग्री"
  ],
  [
    "Eggetarian (Includes Eggs)",
    "अंडे सहित शाकाहारी"
  ],
  [
    "Evening Snack (Chai-Time)",
    "शाम का नाश्ता (4:30 PM – 5:30 PM)"
  ],
  [
    "Daily Indian Diet Planner",
    "दैनिक भारतीय आहार और पोषण योजना"
  ],
  [
    "Simple Health Terminology",
    "सरल स्वास्थ्य भाषा"
  ],
  [
    "Already have an account?",
    "पहले से खाता है?"
  ],
  [
    "Emergency Care & Support",
    "आपातकालीन देखभाल और सहायता"
  ],
  [
    "Daily Lifestyle Activity",
    "दैनिक जीवनशैली गतिविधि"
  ],
  [
    "High Blood Pressure (BP)",
    "उच्च रक्तचाप (हाई बीपी)"
  ],
  [
    "Muscle repair & strength",
    "मांसपेशियों की मजबूती"
  ],
  [
    "Mid-Morning Refreshment",
    "दोपहर से पहले अल्पाहार (11:00 AM – 11:30 AM)"
  ],
  [
    "Create CareNest Account",
    "केयरनेस्ट खाता बनाएं"
  ],
  [
    "Generic Medicine Finder",
    "जेनेरिक दवा खोजक"
  ],
  [
    "Don't have an account?",
    "खाता नहीं है?"
  ],
  [
    "Chronic Kidney Disease",
    "किडनी सुरक्षा (सीकेडी)"
  ],
  [
    "Overall Adherence Rate",
    "दवा लेने की समग्र दर"
  ],
  [
    "Medical Document Vault",
    "चिकित्सा दस्तावेज़ वॉल्ट"
  ],
  [
    "Instant Review Access",
    "त्वरित समीक्षा पहुंच"
  ],
  [
    "Upcoming Appointments",
    "आगामी अपॉइंटमेंट"
  ],
  [
    "Secure Document Vault",
    "सुरक्षित दस्तावेज़ वॉल्ट"
  ],
  [
    "Vegetarian (Pure Veg)",
    "शाकाहारी (शुद्ध शाकाहारी)"
  ],
  [
    "Heart Health & Stents",
    "हृदय स्वास्थ्य और स्टेंट"
  ],
  [
    "Strong bones & joints",
    "मजबूत हड्डियां और जोड़"
  ],
  [
    "Healthy gut digestion",
    "स्वस्थ पाचन तंत्र"
  ],
  [
    "Upload Medical Record",
    "चिकित्सा रिकॉर्ड अपलोड करें"
  ],
  [
    "Classic Indian Thali",
    "पारंपरिक भारतीय थाली"
  ],
  [
    "Healthcare Companion",
    "स्वास्थ्य साथी"
  ],
  [
    "No Special Condition",
    "सामान्य स्वास्थ्य (कोई विशेष बीमारी नहीं)"
  ],
  [
    "Hemoglobin & stamina",
    "हीमोग्लोबिन और स्फूर्ति"
  ],
  [
    "Skipped Meals Today:",
    "आज छूटे हुए भोजन:"
  ],
  [
    "Sign In to CareNest",
    "केयरनेस्ट में साइन इन करें"
  ],
  [
    "Vegan (Plant Based)",
    "वीगन (पौध-आधारित)"
  ],
  [
    "Medications Tracked",
    "ट्रैक की जा रही दवाएं"
  ],
  [
    "Discharge Summaries",
    "डिस्चार्ज सारांश"
  ],
  [
    "Generic Substitutes",
    "जेनेरिक विकल्प"
  ],
  [
    "Active Medications",
    "सक्रिय दवाएं"
  ],
  [
    "Upcoming Next Dose",
    "अगली आने वाली खुराक"
  ],
  [
    "Morning Breakfast",
    "सुबह का नाश्ता"
  ],
  [
    "One-Click Login →",
    "एक-क्लिक लॉगिन →"
  ],
  [
    "Patient Dashboard",
    "रोगी स्वास्थ्य डैशबोर्ड"
  ],
  [
    "Back to Dashboard",
    "डैशबोर्ड पर वापस जाएं"
  ],
  [
    "CALORIES CONSUMED",
    "कुल खाई गई कैलोरी"
  ],
  [
    "High Cholesterol",
    "उच्च कोलेस्ट्रॉल"
  ],
  [
    "Confirm Password",
    "पासवर्ड की पुष्टि करें"
  ],
  [
    "Pre-filled demo:",
    "डेमो क्रेडेंशियल:"
  ],
  [
    "Today's Schedule",
    "आज का शेड्यूल"
  ],
  [
    "Log Today's Meal",
    "आज का भोजन दर्ज करें"
  ],
  [
    "IRON & VITAMIN C",
    "आयरन और विटामिन सी"
  ],
  [
    "HYDRATION LOGGED",
    "दर्ज किया गया जल सेवन"
  ],
  [
    "Search Medicines",
    "दवाएं खोजें"
  ],
  [
    "Price Comparison",
    "मूल्य तुलना"
  ],
  [
    "Afternoon Lunch",
    "दोपहर का खाना"
  ],
  [
    "Kidney Friendly",
    "किडनी सुरक्षा"
  ],
  [
    "Diet Preference",
    "आहार प्राथमिकता"
  ],
  [
    "Type 2 Diabetes",
    "टाइप 2 मधुमेह (डायबिटीज)"
  ],
  [
    "Scans & Imaging",
    "स्कैन और एक्स-रे"
  ],
  [
    "Morning Nashta",
    "सुबह का नाश्ता"
  ],
  [
    "Non-Vegetarian",
    "मांसाहारी"
  ],
  [
    "Thyroid / PCOD",
    "थायराइड / पीसीओडी"
  ],
  [
    "General Health",
    "सामान्य स्वास्थ्य"
  ],
  [
    "Healthcare Hub",
    "स्वास्थ्य केंद्र"
  ],
  [
    "Create Account",
    "खाता बनाएं"
  ],
  [
    "Good Afternoon",
    "शुभ दोपहर"
  ],
  [
    "View Care Plan",
    "देखभाल योजना देखें"
  ],
  [
    "Take Medicines",
    "दवाएं लें"
  ],
  [
    "PROTEIN INTAKE",
    "प्रोटीन सेवन"
  ],
  [
    "CALCIUM LOGGED",
    "कैल्शियम दर्ज"
  ],
  [
    "Upcoming Doses",
    "आगामी खुराक"
  ],
  [
    "Mark as Eaten",
    "खा लिया"
  ],
  [
    "Evening Snack",
    "शाम का नाश्ता"
  ],
  [
    "Email Address",
    "ईमेल पता"
  ],
  [
    "Pending Doses",
    "लंबित खुराक"
  ],
  [
    "Medicine Name",
    "दवा का नाम"
  ],
  [
    "Food Relation",
    "भोजन संबंध"
  ],
  [
    "📥 Export CSV",
    "📥 सीएसवी निर्यात"
  ],
  [
    "+ Upload File",
    "+ फ़ाइल अपलोड करें"
  ],
  [
    "All Documents",
    "सभी दस्तावेज़"
  ],
  [
    "Prescriptions",
    "डॉक्टर के पर्चे"
  ],
  [
    "Daily Total:",
    "दैनिक कुल:"
  ],
  [
    "Night Dinner",
    "रात का खाना"
  ],
  [
    "Heart Health",
    "हृदय स्वास्थ्य"
  ],
  [
    "Welcome Back",
    "स्वागत है"
  ],
  [
    "Good Morning",
    "सुप्रभात"
  ],
  [
    "Good Evening",
    "शुभ संध्या"
  ],
  [
    "Welcome back",
    "पुनः स्वागत है"
  ],
  [
    "FIBER INTAKE",
    "फाइबर सेवन"
  ],
  [
    "Missed Doses",
    "छूटी हुई खुराक"
  ],
  [
    "Manufacturer",
    "निर्माता"
  ],
  [
    "Height (cm)",
    "ऊंचाई (सेमी)"
  ],
  [
    "Weight (kg)",
    "वजन (किलो)"
  ],
  [
    "Mid-Morning",
    "दोपहर से पहले"
  ],
  [
    "Plan Active",
    "योजना सक्रिय"
  ],
  [
    "Taken Today",
    "आज ली गई दवाएं"
  ],
  [
    "Before Food",
    "भोजन से पहले"
  ],
  [
    "Lab Reports",
    "लैब परीक्षण रिपोर्ट"
  ],
  [
    "Mark Eaten",
    "खाया गया"
  ],
  [
    "Vegetarian",
    "शाकाहारी"
  ],
  [
    "Eggetarian",
    "अंडे सहित शाकाहारी"
  ],
  [
    "Print Plan",
    "योजना प्रिंट करें"
  ],
  [
    "After Food",
    "भोजन के बाद"
  ],
  [
    "Mark Taken",
    "दवा ली गई"
  ],
  [
    "Swap Dish",
    "व्यंजन बदलें"
  ],
  [
    "Afternoon",
    "दोपहर"
  ],
  [
    "Pick This",
    "यह चुनें"
  ],
  [
    "Full Name",
    "पूरा नाम"
  ],
  [
    "Language:",
    "भाषा:"
  ],
  [
    "Breakfast",
    "सुबह का नाश्ता"
  ],
  [
    "Frequency",
    "आवृत्ति"
  ],
  [
    "With Food",
    "भोजन के साथ"
  ],
  [
    "Take Dose",
    "दवा लें"
  ],
  [
    "Portion:",
    "मात्रा:"
  ],
  [
    "Diabetes",
    "मधुमेह (डायबिटीज)"
  ],
  [
    "CareNest",
    "केयरनेस्ट"
  ],
  [
    "Password",
    "पासवर्ड"
  ],
  [
    "Language",
    "भाषा"
  ],
  [
    "✓ Eaten",
    "✓ खा लिया"
  ],
  [
    "High BP",
    "उच्च रक्तचाप (बीपी)"
  ],
  [
    "Sign In",
    "साइन इन करें"
  ],
  [
    "Profile",
    "प्रोफ़ाइल"
  ],
  [
    "Pending",
    "लंबित"
  ],
  [
    "Savings",
    "बचत"
  ],
  [
    "Logout",
    "लॉग आउट"
  ],
  [
    "Gender",
    "लिंग"
  ],
  [
    "Female",
    "महिला"
  ],
  [
    "Height",
    "ऊंचाई"
  ],
  [
    "Weight",
    "वजन"
  ],
  [
    "Dinner",
    "रात का खाना"
  ],
  [
    "Dosage",
    "खुराक"
  ],
  [
    "Timing",
    "समय"
  ],
  [
    "Missed",
    "छूट गई"
  ],
  [
    "Vegan",
    "वीगन"
  ],
  [
    "Close",
    "बंद करें"
  ],
  [
    "Lunch",
    "दोपहर का खाना"
  ],
  [
    "Eaten",
    "खाया गया"
  ],
  [
    "Taken",
    "पूर्ण"
  ],
  [
    "Male",
    "पुरुष"
  ],
  [
    "Age",
    "आयु"
  ]
];
  const SORTED_TE = [
  [
    "Never miss a dose. Track medications by exact administration times, preview verified tablet photos, and test the realistic audible alarm with pill visuals.",
    "మోతాదును ఎప్పుడూ మరచిపోవద్దు. ఖచ్చితమైన సమయాలను ట్రాక్ చేయండి, టాబ్లెట్ ఫోటోలను చూడండి మరియు అలారంలను తనిఖీ చేయండి."
  ],
  [
    "Enter your details to generate a clinically customized daily Indian meal routine with balanced macros and kitchen remedies.",
    "సమతుల్య పోషకాలు మరియు వంటింటి చిట్కాలతో కూడిన రోజువారీ భారతీయ భోజన ప్రణాళిక కోసం మీ వివరాలను నమోదు చేయండి."
  ],
  [
    "Based on your profile, here is your customized 5-meal schedule for today. Click 'Swap Dish' if you want an alternative:",
    "మీ ప్రొఫైల్ ఆధారంగా నేటి 5-భోజనాల షెడ్యూల్ ఇక్కడ ఉంది. వేరే వంటకం కోసం 'వంటకం మార్చండి' నొక్కండి:"
  ],
  [
    "Upload discharge papers or doctor prescriptions to extract dosing tables, dietary restrictions, and red flags.",
    "మందుల పట్టికలు, ఆహార నియమాలు మరియు హెచ్చరికలను పొందడానికి డిశ్చార్జ్ పత్రాలను అప్‌లోడ్ చేయండి."
  ],
  [
    "Search branded medicines to discover approved, bio-equivalent generic alternatives at up to 80% lower cost.",
    "80% వరకు తక్కువ ధరలో ఆమోదించబడిన జెనెరిక్ ప్రత్యామ్నాయాలను కనుగొనడానికి బ్రాండెడ్ మందులను శోధించండి."
  ],
  [
    "Personalized Indian home meals (Idli, Poha, Khichdi, Phulka) matched to your specific health conditions.",
    "మీ ఆరోగ్య పరిస్థితికి సరిపోయే ఇంటి భోజనం (ఇడ్లీ, పోహా, కిచిడీ, పుల్కా) ప్రణాళిక."
  ],
  [
    "Search any branded medication to discover identical generic alternatives and save up to 80% on costs.",
    "సరిసమానమైన జెనెరిక్ మందులను కనుగొని ఖర్చులో 80% వరకు ఆదా చేసుకోండి."
  ],
  [
    "Store prescriptions, lab reports, ECGs, and scans safely with encrypted offline and cloud access.",
    "ప్రిస్క్రిప్షన్లు, ల్యాబ్ రిపోర్టులు, ఈసీజీలు మరియు స్కాన్‌లను సురక్షితంగా భద్రపరచండి."
  ],
  [
    "Direct contact with verified cardiologists, nephrologists, and 24x7 emergency helpline numbers.",
    "ధృవీకరించబడిన వైద్యులు మరియు 24x7 అత్యవసర హెల్ప్‌లైన్ నంబర్లతో ప్రత్యక్ష సంప్రదింపులు."
  ],
  [
    "Never miss a scheduled dose. Visual pill alarms, audio alerts, and food timing instructions.",
    "మోతాదును ఎప్పుడూ మరచిపోవద్దు. ఫోటో అలారాలు, ఆడియో హెచ్చరికలు మరియు సమయ సూచనలు."
  ],
  [
    "Summary of consumed meals, nutrient coverage, and kitchen remedies for any missing vitamins:",
    "తీసుకున్న భోజనం, పోషకాల లభ్యత మరియు విటమిన్ల లోపాల కోసం వంటింటి చిట్కాలు:"
  ],
  [
    "2 phulkas (no oil) + 1 katori moong dal + 1 katori bhindi + 1 small katori dahi",
    "2 పుల్కాలు + 1 కప్పు పెసరపప్పు + బెండకాయ కూర + పెరుగు"
  ],
  [
    "Select all that apply to tailor foods specifically for your health safety:",
    "మీ ఆరోగ్య భద్రతకు అనుగుణంగా ఆహారాన్ని సిద్ధం చేయడానికి వర్తించే వాటిని ఎంచుకోండి:"
  ],
  [
    "2 Soft Whole Wheat Phulkas + Yellow Moong Dal + Bhindi Sabzi + Fresh Curd",
    "2 మెత్తని పుల్కాలు + పెసరపప్పు + బెండకాయ కూర + తాజా పెరుగు"
  ],
  [
    "2 gluten-free millet rotis with cooling bottle gourd dal & fresh beetroot",
    "2 gluten-free millet rotis with cooling bottle gourd dal & fresh beetroot"
  ],
  [
    "2 phulkas with 100g tender chicken in onion-tomato-ginger gravy + salad",
    "2 phulkas with 100g tender chicken in onion-tomato-ginger gravy + salad"
  ],
  [
    "Steamed Rice + Palak Dal (Spinach Lentils) + Carrot Beans Sabzi + Curd",
    "అన్నం + పాలకూర పప్పు + క్యారెట్ బీన్స్ కూర + పెరుగు"
  ],
  [
    "Spiced Buttermilk (Chaas / Majjiga) with Roasted Jeera & Curry Leaves",
    "మసాలా మజ్జిగ (జీలకర్ర మరియు కరివేపాకుతో)"
  ],
  [
    "1 medium bowl rice + generous palak dal + steamed carrot beans + dahi",
    "1 గిన్నె అన్నం + పాలకూర పప్పు + క్యారెట్ బీన్స్ కూర + పెరుగు"
  ],
  [
    "2 Phulkas + Low-Fat Paneer Bhurji + Toor Dal + Sliced Cucumber Salad",
    "2 పుల్కాలు + పనీర్ భూర్జీ + కందిపప్పు + కీరదోస సలాడ్"
  ],
  [
    "1 bowl steamed rice with 1 piece fish in light curry + cabbage sabzi",
    "1 bowl steamed rice with 1 piece fish in light curry + cabbage sabzi"
  ],
  [
    "1 soft phulka with generous light moong soup & crunchy roasted papad",
    "1 soft phulka with generous light moong soup & crunchy roasted papad"
  ],
  [
    "1 Soft Phulka + Large Bowl of Yellow Moong Dal Soup + Roasted Papad",
    "1 పుల్కా + పెద్ద గిన్నెడు పెసరపప్పు సూప్ + వేయించిన అప్పడం"
  ],
  [
    "1 fish fillet lightly spiced with turmeric & pepper + 1 roti & soup",
    "1 fish fillet lightly spiced with turmeric & pepper + 1 roti & soup"
  ],
  [
    "Steamed White Rice + Mild Yellow Moong Dal + Sautéed Gourd (Lauki)",
    "తెల్ల అన్నం + పెసరపప్పు + తేలికపాటి సొరకాయ కూర"
  ],
  [
    "2 eggs scrambled with onions, tomatoes & green coriander + 2 rotis",
    "2 eggs scrambled with onions, tomatoes & green coriander + 2 rotis"
  ],
  [
    "2 Soft Phulkas + Home-Style Chicken Curry (Low Oil) + Green Salad",
    "2 పుల్కాలు + ఇంటి చికెన్ కర్రీ (తక్కువ నూనె) + సలాడ్"
  ],
  [
    "2 Boiled Egg Curry + 2 Whole Wheat Phulkas + Cucumber Onion Salad",
    "2 ఉడకబెట్టిన గుడ్ల కూర + 2 పుల్కాలు + ఉల్లిపాయ సలాడ్"
  ],
  [
    "2 rotis with 75g crumbled paneer tossed with tomatoes & fresh dal",
    "2 రోటీలు + పనీర్ భూర్జీ + పప్పు"
  ],
  [
    "2 Jowar / Bajra Rotis + Lauki (Gourd) Chana Dal + Beetroot Salad",
    "2 జొన్న / సజ్జ రొట్టెలు + సొరకాయ పప్పు + బీట్‌రూట్ సలాడ్"
  ],
  [
    "Vegetable Dalia (Broken Wheat Khichdi) with Carrots, Peas & Curd",
    "గోధుమ రవ్వ కిచిడీ (క్యారెట్లు, బఠానీలు మరియు పెరుగు)"
  ],
  [
    "1 medium bowl tempered with mustard seeds, curry leaves & ginger",
    "1 గిన్నె ఉప్మా (ఆవాలు, కరివేపాకు, అల్లం తిరగమాతతో)"
  ],
  [
    "1 bowl warm comforting khichdi tempered with cumin & 1 bowl curd",
    "1 bowl warm comforting khichdi tempered with cumin & 1 bowl curd"
  ],
  [
    "Soft Steamed Idlis (3 pcs) + Vegetable Sambar + Coconut Chutney",
    "మెత్తని ఇడ్లీలు (3) + కూరగాయల సాంబార్ + కొబ్బరి చట్నీ"
  ],
  [
    "2 Boiled Eggs with Black Pepper & 2 Whole Wheat Phulkas / Toast",
    "2 ఉడకబెట్టిన గుడ్లు (మిరియాల పొడితో) + 2 పుల్కాలు"
  ],
  [
    "Light Steamed Fish (100g) + 1 Soft Phulka + Warm Moong Dal Soup",
    "ఆవిరి చేప (100 గ్రా) + 1 పుల్కా + పెసరపప్పు సూప్"
  ],
  [
    "Controlled protein, regulated potassium & strict sodium balance",
    "పరిమిత ప్రొటీన్, నియంత్రిత పొటాషియం మరియు తక్కువ సోడియం"
  ],
  [
    "Fresh Methi (Fenugreek) Thepla / Rotis (2 pcs) with Fresh Curd",
    "మెంతి రోటీ / తెప్లా (2) + తాజా పెరుగు"
  ],
  [
    "Steamed Rice + Home-Style Fish Curry + Cabbage Poriyal / Sabzi",
    "అన్నం + చేపల పులుసు + క్యాబేజీ కూర"
  ],
  [
    "Boiled Sprouted Moong Chaat with Cucumber, Onion & Fresh Lemon",
    "మొలకెత్తిన పెసల చాట్ (కీరదోస, ఉల్లిపాయ, నిమ్మరసంతో)"
  ],
  [
    "Spiced chicken breast cooked on tawa with 1 roti & clear broth",
    "Spiced chicken breast cooked on tawa with 1 roti & clear broth"
  ],
  [
    "DASH dietary principles with low sodium & potassium rich foods",
    "తక్కువ ఉప్పు, పొటాషియం సమృద్ధిగా ఉండే బీపీ నియంత్రణ ఆహారం"
  ],
  [
    "2 Soft Phulkas + Home-style Palak Paneer (Low Oil) + Warm Dal",
    "2 పుల్కాలు + పాలక్ పనీర్ (తక్కువ నూనె) + వేడి పప్పు"
  ],
  [
    "1 medium plate with green peas, onions, peanuts & lemon juice",
    "1 ప్లేట్ పోహా (బఠానీలు, ఉల్లిపాయలు, నిమ్మరసంతో)"
  ],
  [
    "2 golden crepes made from soaked moong dal with green chutney",
    "2 పెసరపప్పు దోశలు/చిల్లా + పచ్చడి"
  ],
  [
    "2 soft whole wheat methi rotis with 1 small katori fresh dahi",
    "2 మెంతి రోటీలు + 1 చిన్న కప్పు పెరుగు"
  ],
  [
    "1 cup steamed sprouts with chopped tomatoes, cucumber & lemon",
    "1 cup steamed sprouts with chopped tomatoes, cucumber & lemon"
  ],
  [
    "2 slices whole grain bread with fresh cucumber, tomato & mint",
    "2 slices whole grain bread with fresh cucumber, tomato & mint"
  ],
  [
    "Handful of Soaked Almonds (6 pcs Badam) & 2 Walnuts (Akhrot)",
    "నానబెట్టిన బాదం (6) మరియు 2 అక్రోట్ ముక్కలు"
  ],
  [
    "Whole Wheat Cucumber-Tomato Sandwich with Green Mint Chutney",
    "గోధుమ బ్రెడ్ శాండ్‌విచ్ (కీరదోస, టమాటా, పుదీనా చట్నీ)"
  ],
  [
    "Soft Yellow Moong Dal Khichdi + 1 tsp Pure Ghee + Fresh Curd",
    "మెత్తని పెసరపప్పు కిచిడీ + 1 స్పూన్ నెయ్యి + పెరుగు"
  ],
  [
    "Tawa Grilled Chicken (100g) + 1 Phulka + Warm Clear Veg Soup",
    "గ్రిల్డ్ చికెన్ (100 గ్రా) + 1 పుల్కా + వెజ్ సూప్"
  ],
  [
    "1 bowl soft rice with light moong dal and bottle gourd sabzi",
    "1 bowl soft rice with light moong dal and bottle gourd sabzi"
  ],
  [
    "Yellow Moong Dal Chilla (2 pcs) with Mint Coriander Chutney",
    "పెసరపప్పు చిల్లా (2) + పుదీనా కొత్తిమీర చట్నీ"
  ],
  [
    "Ragi (Finger Millet) Dosa (2 pcs) with Tomato Onion Chutney",
    "రాగి దోశ (2) + టమాటా ఉల్లిపాయ చట్నీ"
  ],
  [
    "3 medium steamed idlis with 1 bowl sambar & 1 spoon chutney",
    "3 ఇడ్లీలు + 1 గిన్నె సాంబార్ + 1 స్పూన్ చట్నీ"
  ],
  [
    "1 bowl wholesome cracked wheat with vegetables & small curd",
    "1 bowl wholesome cracked wheat with vegetables & small curd"
  ],
  [
    "Crispy Roasted Makhana (Foxnuts) with Turmeric & Rock Salt",
    "వేయించిన పూల్ మఖానా (పసుపు మరియు ఉప్పుతో)"
  ],
  [
    "Roasted Bengal Gram (Bhuna Chana) + Hot Adrak (Ginger) Tea",
    "వేయించిన శనగలు + వేడి అల్లం టీ"
  ],
  [
    "2 Soft Phulkas + Lauki (Bottle Gourd) Dal + Cucumber Salad",
    "2 పుల్కాలు + సొరకాయ పప్పు + కీరదోస సలాడ్"
  ],
  [
    "Small bowl of roasted chana with hot ginger tea (no sugar)",
    "Small bowl of roasted chana with hot ginger tea (no sugar)"
  ],
  [
    "Low glycemic index foods to prevent post-meal sugar spikes",
    "భోజనం తర్వాత షుగర్ పెరగకుండా నియంత్రించే తక్కువ గ్లైసెమిక్ ఆహారం"
  ],
  [
    "Vegetable Poha with Roasted Peanuts, Curry Leaves & Lemon",
    "కూరగాయల పోహా (వేరుశనగలు, కరివేపాకు, నిమ్మరసంతో)"
  ],
  [
    "2 warm phulkas with gentle bottle gourd dal & fresh salad",
    "2 warm phulkas with gentle bottle gourd dal & fresh salad"
  ],
  [
    "I felt completely satisfied and energetic (Maintain plan)",
    "నేను పూర్తిగా సంతృప్తిగా, ఉత్సాహంగా ఉన్నాను (ప్రణాళిక కొనసాగించండి)"
  ],
  [
    "Masala Egg Bhurji (2 Eggs) with 2 Soft Whole Wheat Rotis",
    "మసాలా ఎగ్ భూర్జీ (2 గుడ్లు) + 2 మెత్తని గోధుమ రోటీలు"
  ],
  [
    "2 whole eggs sprinkled with roasted jeera & black pepper",
    "2 గుడ్లు (జీలకర్ర, మిరియాల పొడితో)"
  ],
  [
    "1 full bowl roasted with a drop of ghee & pinch of haldi",
    "1 full bowl roasted with a drop of ghee & pinch of haldi"
  ],
  [
    "Zero trans-fats, high soluble fiber, and heart-safe fats",
    "కొలెస్ట్రాల్ రహిత, అధిక పీచు మరియు గుండెకు మేలు చేసే కొవ్వులు"
  ],
  [
    "Drag and drop your medical files here or click to browse",
    "మీ వైద్య ఫైళ్ళను ఇక్కడ లాగి వదలండి లేదా బ్రౌజ్ చేయండి"
  ],
  [
    "Warm Steamed Sweet Corn with Lemon Juice & Black Pepper",
    "ఉడికించిన స్వీట్ కార్న్ (నిమ్మరసం, మిరియాల పొడితో)"
  ],
  [
    "2 crispy dark millet dosas with homemade tomato chutney",
    "2 రాగి దోశలు + టమాటా చట్నీ"
  ],
  [
    "Scrambled eggs tossed with onions, tomatoes & coriander",
    "ఎగ్ భూర్జీ (ఉల్లిపాయలు, టమాటాలు, కొత్తిమీరతో)"
  ],
  [
    "1 large glass freshly churned with roasted cumin & mint",
    "1 పెద్ద గ్లాసు మజ్జిగ (జీలకర్ర మరియు పుదీనాతో)"
  ],
  [
    "I was still very hungry (Add +250 kcal snacks tomorrow)",
    "నాకు ఇంకా చాలా ఆకలిగా ఉంది (రేపు +250 క్యాలరీల స్నాక్ జోడించండి)"
  ],
  [
    "Oats & Vegetable Upma with Carrots, Beans & Green Peas",
    "ఓట్స్ వెజిటబుల్ ఉప్మా (క్యారెట్లు, బీన్స్ మరియు బఠానీలతో)"
  ],
  [
    "2 hard boiled eggs in mild home curry with 2 hot rotis",
    "2 hard boiled eggs in mild home curry with 2 hot rotis"
  ],
  [
    "1 small bowl steamed corn seasoned with lemon & pepper",
    "1 small bowl steamed corn seasoned with lemon & pepper"
  ],
  [
    "Sign in to access your health dashboard and reminders.",
    "మీ ఆరోగ్య డ్యాష్‌బోర్డ్ మరియు మందుల రిమైండర్‌లను చూడటానికి లాగిన్ చేయండి."
  ],
  [
    "I agree to CareNest Health Data Terms & Privacy Policy",
    "నేను కేర్‌నెస్ట్ ఆరోగ్య డేటా నిబంధనలు మరియు గోప్యతా విధానానికి అంగీకరిస్తున్నాను"
  ],
  [
    "Metabolism balancing, selenium & iodine rich nutrition",
    "జీవక్రియ సమతుల్యత, సెలీనియం మరియు అయోడిన్ పోషకాహారం"
  ],
  [
    "Fresh Pink Guava Slices with a pinch of Chaat Masala",
    "తాజా జామకాయ ముక్కలు (చాట్ మసాలాతో)"
  ],
  [
    "2 Soft Phulkas + 2 Egg Bhurji with Tomatoes & Onions",
    "2 పుల్కాలు + ఎగ్ భూర్జీ (టమాటాలు & ఉల్లిపాయలు)"
  ],
  [
    "Fresh Tender Coconut Water (Nariyal Pani / Elaneer)",
    "తాజా కొబ్బరి బొండం నీరు (సహజ ఎలక్ట్రోలైట్లు)"
  ],
  [
    "I felt too full / heavy (Reduce -150 kcal tomorrow)",
    "కడుపు చాలా నిండుగా/బరువుగా ఉంది (రేపు -150 క్యాలరీలు తగ్గించండి)"
  ],
  [
    "2 phulkas with pureed spinach & fresh paneer cubes",
    "2 phulkas with pureed spinach & fresh paneer cubes"
  ],
  [
    "Personalized Daily Indian Diet & Nutrition Planner",
    "వ్యక్తిగతీకరించిన రోజువారీ భారతీయ ఆహార ప్రణాళిక"
  ],
  [
    "Wholesome home diet for general vitality & fitness",
    "సాధారణ ఆరోగ్యం మరియు ఉల్లాసం కోసం సమతుల్య ఇంటి భోజనం"
  ],
  [
    "Step 4: End-of-Day Nutritional & Deficiency Report",
    "దశ 4: రోజు ముగింపు పోషకాహార & లోపాల నివేదిక"
  ],
  [
    "Anti-inflammatory home meals for cardiac recovery",
    "గుండె కోలుకోవడానికి సహకరించే తేలికపాటి ఇంటి భోజనం"
  ],
  [
    "Your Comprehensive Personal Healthcare Companion",
    "మీ సమగ్ర వ్యక్తిగత ఆరోగ్య మరియు సంరక్షణ సహచరుడు"
  ],
  [
    "CareNest - Indian Daily Diet & Nutrition Planner",
    "కేర్‌నెస్ట్ - రోజువారీ భారతీయ ఆహార & పోషకాహార ప్రణాళిక"
  ],
  [
    "Fresh Crisp Apple Slices with pinch of Cinnamon",
    "తాజా యాపిల్ ముక్కలు (దాల్చినచెక్క పొడితో)"
  ],
  [
    "Tap each glass as you drink throughout the day!",
    "రోజంతా నీరు తాగినప్పుడల్లా గ్లాసుపై నొక్కండి!"
  ],
  [
    "Mid-Morning Refreshment (11:00 AM – 11:30 AM)",
    "మధ్యాహ్నానికి ముందు అల్పాహారం (11:00 AM – 11:30 AM)"
  ],
  [
    "Light on Kidneys • Low Potassium & Phosphorus",
    "కిడ్నీకి తేలిక • తక్కువ పొటాషియం"
  ],
  [
    "CareNest - Your Personal Healthcare Companion",
    "కేర్‌నెస్ట్ - మీ వ్యక్తిగత ఆరోగ్య సహచరుడు"
  ],
  [
    "Medicine Reminders with Alarm & Tablet Photos",
    "అలారాలు మరియు టాబ్లెట్ ఫోటోలతో మందుల రిమైండర్లు"
  ],
  [
    "Daily Diet Planner with Food Tracking & Swaps",
    "భారతీయ ఆహారం & నీటి ట్రాకర్‌తో రోజువారీ ఆహార ప్రణాళిక"
  ],
  [
    "View End-of-Day Nutrition & Deficiency Report",
    "రోజు ముగింపు పోషకాహార & లోపాల నివేదికను చూడండి"
  ],
  [
    "How Did You Feel Today? (Hunger Recalibrator)",
    "ఈరోజు మీకు ఎలా అనిపించింది? (ఆకలి రీకాలిబ్రేటర్)"
  ],
  [
    "CareNest - Medicine Reminders & Tablet Alarms",
    "కేర్‌నెస్ట్ - మందుల రిమైండర్లు & అలారాలు"
  ],
  [
    "Find Affordable Generic Medicine Equivalents",
    "సరసమైన జెనెరిక్ మందుల ప్రత్యామ్నాయాలను కనుగొనండి"
  ],
  [
    "Prescription Dosing Schedule & Visual Alarms",
    "మందుల షెడ్యూల్ & దృశ్య అలారాలు"
  ],
  [
    "6 peeled soaked almonds and 2 walnut halves",
    "6 నానబెట్టిన బాదం మరియు 2 అక్రోట్ ముక్కలు"
  ],
  [
    "Classic Indian Thali • Wholesome & Balanced",
    "సాంప్రదాయ భారతీయ భోజనం • సమతుల్య ఆహారం"
  ],
  [
    "Very Light on Stomach • Promotes Good Sleep",
    "కడుపుకు చాలా తేలిక • మంచి నిద్రకు సహకారం"
  ],
  [
    "Light Active (Daily Walking / Light Chores)",
    "తేలికపాటి శ్రమ (రోజువారీ నడక / ఇంటి పనులు)"
  ],
  [
    "Natural Electrolytes • Hydrating & Cooling",
    "సహజ ఎలక్ట్రోలైట్లు • శరీరానికి చలువ"
  ],
  [
    "High Iron & Protein • Satisfying & Healthy",
    "అధిక ఐరన్ & ప్రోటీన్ • సంపూర్ణ ఆరోగ్యం"
  ],
  [
    "Very Light • Low Potassium for Kidney Care",
    "చాలా తేలిక • కిడ్నీ సంరక్షణకు తక్కువ పొటాషియం"
  ],
  [
    "Daily Water Tracker (Pani Peene ka Record)",
    "రోజువారీ నీటి ట్రాకర్ (నీటి రికార్డు)"
  ],
  [
    "Fresh Sweet Papaya Slices (1 Medium Bowl)",
    "తాజా బొప్పాయి ముక్కలు (1 కప్పు)"
  ],
  [
    "1 natural tender coconut (approx. 200 ml)",
    "1 కొబ్బరి బొండం నీరు (సుమారు 200 మి.లీ)"
  ],
  [
    "1 whole ripe guava sliced with black salt",
    "1 జామకాయ ముక్కలు (ఉప్పుతో)"
  ],
  [
    "Controls Blood Pressure • Light & Cooling",
    "రక్తపోటు నియంత్రణ • తేలికపాటి చలువ ఆహారం"
  ],
  [
    "Private • Encrypted • Healthcare Standard",
    "వ్యక్తిగతం • ఎన్‌క్రిప్ట్ చేయబడింది • ఆరోగ్య ప్రమాణాలు"
  ],
  [
    "Step 2: Medical Conditions & Health Goals",
    "దశ 2: వైద్య పరిస్థితులు & ఆరోగ్య లక్ష్యాలు"
  ],
  [
    "Satisfying Home Breakfast • High Energy",
    "తృప్తికరమైన ఇంటి అల్పాహారం • అధిక శక్తి"
  ],
  [
    "Understand Hospital Discharge Documents",
    "ఆసుపత్రి డిశ్చార్జ్ పత్రాలను సులభంగా అర్థం చేసుకోండి"
  ],
  [
    "Moderate Active (1 Hour Brisk Exercise)",
    "మధ్యస్థ శ్రమ (1 గంట వ్యాయామం / యోగా)"
  ],
  [
    "Very Active (Physical Labor / Athletes)",
    "అధిక శ్రమ (భారీ శారీరక శ్రమ / క్రీడలు)"
  ],
  [
    "Save Today's Report to CareNest Profile",
    "నేటి నివేదికను ప్రొఫైల్‌లో భద్రపరచండి"
  ],
  [
    "High Vegetarian Protein • Strong Bones",
    "శాకాహార ప్రోటీన్ • బలమైన ఎముకలు"
  ],
  [
    "Step 3: Your Daily Indian Meal Routine",
    "దశ 3: మీ రోజువారీ భారతీయ భోజన ప్రణాళిక"
  ],
  [
    "CareNest - Portal Selection Dashboard",
    "కేర్‌నెస్ట్ - పోర్టల్ ఎంపిక డ్యాష్‌బోర్డ్"
  ],
  [
    "Sedentary (Desk Job / Little Walking)",
    "శ్రమలేని (డెస్క్ జాబ్ / తక్కువ నడక)"
  ],
  [
    "1 medium cup freshly cut ripe papaya",
    "1 కప్పు తాజా బొప్పాయి ముక్కలు"
  ],
  [
    "Rich in Calcium & Iron • Bone Health",
    "కాల్షియం & ఐరన్ • ఎముకల బలం"
  ],
  [
    "Brain & Memory • Good Fats for Heart",
    "మెదడు & జ్ఞాపకశక్తి • గుండెకు మేలు చేసే కొవ్వులు"
  ],
  [
    "Quick & Light • High Quality Protein",
    "త్వరిత & తేలికపాటి • ఉత్తమ ప్రోటీన్"
  ],
  [
    "Find Lower-Cost Generic Alternatives",
    "తక్కువ ధర జెనెరిక్ ప్రత్యామ్నాయాలు"
  ],
  [
    "Step 1: Your Profile & Health Target",
    "దశ 1: మీ ప్రొఫైల్ & ఆరోగ్య లక్ష్యం"
  ],
  [
    "Deficiency Alerts & Kitchen Remedies",
    "పోషకాల లోపాలు & వంటింటి చిట్కాలు"
  ],
  [
    "Morning Breakfast (Subah ka Nashta)",
    "ఉదయం అల్పాహారం (8:00 AM – 9:00 AM)"
  ],
  [
    "Easy to Digest • Light & Energizing",
    "సులభంగా జీర్ణమవుతుంది • తేలికైన & శక్తివంతమైన"
  ],
  [
    "High Protein • Blood Sugar Friendly",
    "అధిక ప్రోటీన్ • షుగర్ రోగులకు అనుకూలం"
  ],
  [
    "Aids Digestion • High Vitamin A & C",
    "జీర్ణక్రియకు సహకారం • విటమిన్ ఎ & సి సమృద్ధి"
  ],
  [
    "Gentle on Kidneys • Crisp & Filling",
    "కిడ్నీకి అనుకూలం • కడుపు నింపే ఆహారం"
  ],
  [
    "High Fiber • Controls Morning Sugar",
    "అధిక పీచు • ఉదయపు షుగర్ నియంత్రణ"
  ],
  [
    "Secure • Private • Cloud Sync Ready",
    "సురక్షితం • వ్యక్తిగతం • క్లౌడ్ సింక్ సిద్ధంగా ఉంది"
  ],
  [
    "Afternoon Lunch (Dopahar ka Khana)",
    "మధ్యాహ్న భోజనం (1:30 PM – 2:30 PM)"
  ],
  [
    "Zero Oil Crunch • Sustained Energy",
    "నూనె లేని స్నాక్ • స్థిరమైన శక్తి"
  ],
  [
    "Lean Protein • Light & No Bloating",
    "లీన్ ప్రోటీన్ • తేలికగా అరిగే ఆహారం"
  ],
  [
    "Wholesome Lunch (Dopahar ka Khana)",
    "మధ్యాహ్న భోజనం (1:00 PM – 2:00 PM)"
  ],
  [
    "Medicine Reminders & Tablet Alarms",
    "మందుల రిమైండర్లు & టాబ్లెట్ అలారాలు"
  ],
  [
    "Generic Medicine Finder | CareNest",
    "జెనెరిక్ మందుల శోధన | కేర్‌నెస్ట్"
  ],
  [
    "Evening Snack (Chai & Light Bite)",
    "సాయంత్రం చిరుతిండి (టీ సమయం 5:00 PM)"
  ],
  [
    "Select an Alternative Indian Meal",
    "మరొక ప్రత్యామ్నాయ భారతీయ భోజనాన్ని ఎంచుకోండి"
  ],
  [
    "Cools Stomach • Natural Probiotic",
    "కడుపుకు చలువ • సహజ ప్రోబయోటిక్"
  ],
  [
    "Healthy Egg Protein • Vitamin B12",
    "గుడ్డు ప్రోటీన్ • విటమిన్ బి12"
  ],
  [
    "Cooling & Light • Keeps BP Normal",
    "చలువ చేసే ఆహారం • బీపీ సాధారణంగా ఉంచుతుంది"
  ],
  [
    "CareNest - Medical Document Vault",
    "కేర్‌నెస్ట్ - వైద్య రికార్డుల వాల్ట్"
  ],
  [
    "High Iron & Calcium • Fiber Rich",
    "అధిక ఐరన్ & కాల్షియం • పీచు సమృద్ధి"
  ],
  [
    "Keep me logged in on this device",
    "ఈ పరికరంలో నన్ను లాగిన్ చేసి ఉంచండి"
  ],
  [
    "1 medium apple sliced with peel",
    "1 యాపిల్ ముక్కలు"
  ],
  [
    "Heart Healthy • Natural Omega-3",
    "గుండెకు రక్షణ • సహజ ఒమేగా-3"
  ],
  [
    "High Fiber • Keeps Sugar Stable",
    "అధిక పీచు • షుగర్ స్థిరంగా ఉంచుతుంది"
  ],
  [
    "Filling & Fresh • Good Vitamins",
    "తాజా ఆహారం • మంచి విటమిన్లు"
  ],
  [
    "Indian Diet & Nutrition Planner",
    "భారతీయ ఆహార & పోషకాహార ప్రణాళిక"
  ],
  [
    "Non-Vegetarian (Chicken & Fish)",
    "మాంసాహారం (చికెన్ & చేపలు)"
  ],
  [
    "Search by brand or salt name...",
    "బ్రాండ్ లేదా సాల్ట్ పేరుతో శోధించండి..."
  ],
  [
    "High Protein • Muscle Strength",
    "అధిక ప్రోటీన్ • కండరాల బలం"
  ],
  [
    "Rich in Fiber • Heart Friendly",
    "పీచు సమృద్ధి • గుండెకు మేలు"
  ],
  [
    "Low Sodium • Heart Safe & Lean",
    "తక్కువ ఉప్పు • గుండెకు సురక్షితం"
  ],
  [
    "Iron Rich • Wholesome & Quick",
    "ఐరన్ సమృద్ధిగా • సంపూర్ణ & శీఘ్ర పోషకాలు"
  ],
  [
    "Heart Healthy • Rich in Fiber",
    "గుండెకు మేలు • పీచు పదార్థ సమృద్ధి"
  ],
  [
    "Low Sodium • Crispy & Healthy",
    "తక్కువ ఉప్పు • ఆరోగ్యకరమైన స్నాక్"
  ],
  [
    "100% Home Cooked Indian Meals",
    "100% ఇంట్లో వండిన భారతీయ భోజనం"
  ],
  [
    "+ Add Medicine & Tablet Photo",
    "+ కొత్త మందు & ఫోటోను జోడించండి"
  ],
  [
    "Night Dinner (Raat ka Khana)",
    "రాత్రి భోజనం (8:00 PM – 9:00 PM)"
  ],
  [
    "Controls Sugar • Healthy Gut",
    "షుగర్ నియంత్రణ • జీర్ణకోశ ఆరోగ్యం"
  ],
  [
    "Very High Fiber • Sugar Safe",
    "అధిక పీచు పదార్థం • షుగర్‌కు సురక్షితం"
  ],
  [
    "Upcoming Review Appointments",
    "రాబోయే వైద్య సమీక్షలు"
  ],
  [
    "Uploaded Reports & Lab Vault",
    "అప్‌లోడ్ చేసిన ల్యాబ్ నివేదికలు"
  ],
  [
    "Affordable Generic Medicines",
    "సరసమైన జెనెరిక్ మందులు"
  ],
  [
    "Generate My Indian Diet Plan",
    "నా భారతీయ ఆహార ప్రణాళికను రూపొందించండి"
  ],
  [
    "Bioequivalent Savings Portal",
    "సరసమైన మందుల పొదుపు పోర్టల్"
  ],
  [
    "Custom Indian Diet Plan for",
    "ప్రత్యేక భారతీయ ఆహార ప్రణాళిక -"
  ],
  [
    "Lean High Protein • Low Fat",
    "లీన్ ప్రోటీన్ • తక్కువ కొవ్వు"
  ],
  [
    "Sugar Friendly & High Fiber",
    "షుగర్ అనుకూలం • అధిక పీచు"
  ],
  [
    "Healthy Heart Recovery Plan",
    "ఆరోగ్యకరమైన గుండె రికవరీ ప్రణాళిక"
  ],
  [
    "Prescription Pill Reminders",
    "ప్రిస్క్రిప్షన్ మందుల రిమైండర్లు"
  ],
  [
    "Recalibrate Tomorrow's Diet",
    "రేపటి ఆహార ప్రణాళికను సర్దుబాటు చేయండి"
  ],
  [
    "Wholesome Indian Home Diet",
    "సమతుల్య భారతీయ ఇంటి భోజనం"
  ],
  [
    "Clinical Discharge Summary",
    "వైద్య డిశ్చార్జ్ సారాంశం"
  ],
  [
    "Local Everyday Ingredients",
    "స్థానికంగా లభించే నిత్య ఆహార పదార్థాలు"
  ],
  [
    "Eggetarian (Includes Eggs)",
    "గుడ్లతో కూడిన శాకాహారం"
  ],
  [
    "Evening Snack (Chai-Time)",
    "సాయంత్రం చిరుతిండి (4:30 PM – 5:30 PM)"
  ],
  [
    "Daily Indian Diet Planner",
    "రోజువారీ భారతీయ ఆహార & పోషకాహార ప్రణాళిక"
  ],
  [
    "Simple Health Terminology",
    "సరళమైన ఆరోగ్య వివరణలు"
  ],
  [
    "Already have an account?",
    "ఇప్పటికే ఖాతా ఉందా?"
  ],
  [
    "Emergency Care & Support",
    "అత్యవసర సంరక్షణ & సహాయం"
  ],
  [
    "Daily Lifestyle Activity",
    "రోజువారీ జీవనశైలి శ్రమ"
  ],
  [
    "High Blood Pressure (BP)",
    "అధిక రక్తపోటు (బీపీ)"
  ],
  [
    "Muscle repair & strength",
    "కండరాల పటుత్వం"
  ],
  [
    "Mid-Morning Refreshment",
    "మధ్యాహ్నానికి ముందు అల్పాహారం (11:00 AM – 11:30 AM)"
  ],
  [
    "Create CareNest Account",
    "కేర్‌నెస్ట్ ఖాతాను సృష్టించండి"
  ],
  [
    "Generic Medicine Finder",
    "జెనెరిక్ మందుల శోధన"
  ],
  [
    "Don't have an account?",
    "ఖాతా లేదా?"
  ],
  [
    "Chronic Kidney Disease",
    "కిడ్నీ రక్షణ (సీకేడీ)"
  ],
  [
    "Overall Adherence Rate",
    "మందులు తీసుకున్న సమయపాలన"
  ],
  [
    "Medical Document Vault",
    "వైద్య రికార్డుల వాల్ట్"
  ],
  [
    "Instant Review Access",
    "త్వరిత సమీక్ష యాక్సెస్"
  ],
  [
    "Upcoming Appointments",
    "రాబోయే అపాయింట్‌మెంట్లు"
  ],
  [
    "Secure Document Vault",
    "సురక్షిత డాక్యుమెంట్ వాల్ట్"
  ],
  [
    "Vegetarian (Pure Veg)",
    "శాకాహారం (పూర్తి శాకాహారి)"
  ],
  [
    "Heart Health & Stents",
    "గుండె ఆరోగ్యం & స్టెంట్లు"
  ],
  [
    "Strong bones & joints",
    "బలమైన ఎముకలు & కీళ్ళు"
  ],
  [
    "Healthy gut digestion",
    "మంచి జీర్ణక్రియ"
  ],
  [
    "Upload Medical Record",
    "వైద్య రికార్డును అప్‌లోడ్ చేయండి"
  ],
  [
    "Classic Indian Thali",
    "సాంప్రదాయ భారతీయ భోజనం"
  ],
  [
    "Healthcare Companion",
    "ఆరోగ్య సహచరుడు"
  ],
  [
    "No Special Condition",
    "సాధారణ ఆరోగ్యం (ప్రత్యేక సమస్యలు లేవు)"
  ],
  [
    "Hemoglobin & stamina",
    "రక్తకణాలు & శక్తి"
  ],
  [
    "Skipped Meals Today:",
    "ఈరోజు తప్పిపోయిన భోజనం:"
  ],
  [
    "Sign In to CareNest",
    "కేర్‌నెస్ట్‌లోకి సైన్ ఇన్ చేయండి"
  ],
  [
    "Vegan (Plant Based)",
    "వీగన్ (మొక్కల ఆధారిత)"
  ],
  [
    "Medications Tracked",
    "ట్రాక్ చేయబడుతున్న మందులు"
  ],
  [
    "Discharge Summaries",
    "డిశ్చార్జ్ సారాంశాలు"
  ],
  [
    "Generic Substitutes",
    "జెనెరిక్ ప్రత్యామ్నాయాలు"
  ],
  [
    "Active Medications",
    "ప్రస్తుత మందులు"
  ],
  [
    "Upcoming Next Dose",
    "రాబోయే తదుపరి మోతాదు"
  ],
  [
    "Morning Breakfast",
    "ఉదయం అల్పాహారం"
  ],
  [
    "One-Click Login →",
    "వన్-క్లిక్ లాగిన్ →"
  ],
  [
    "Patient Dashboard",
    "రోగి ఆరోగ్య డ్యాష్‌బోర్డ్"
  ],
  [
    "Back to Dashboard",
    "డ్యాష్‌బోర్డ్‌కు తిరిగి వెళ్లండి"
  ],
  [
    "CALORIES CONSUMED",
    "తీసుకున్న మొత్తం క్యాలరీలు"
  ],
  [
    "High Cholesterol",
    "అధిక కొలెస్ట్రాల్"
  ],
  [
    "Confirm Password",
    "పాస్‌వర్డ్ నిర్ధారణ"
  ],
  [
    "Pre-filled demo:",
    "డెమో వివరాలు:"
  ],
  [
    "Today's Schedule",
    "నేటి షెడ్యూల్"
  ],
  [
    "Log Today's Meal",
    "నేటి భోజనాన్ని నమోదు చేయండి"
  ],
  [
    "IRON & VITAMIN C",
    "ఐరన్ & విటమిన్ సి"
  ],
  [
    "HYDRATION LOGGED",
    "నమోదైన నీటి పరిమాణం"
  ],
  [
    "Search Medicines",
    "మందులను శోధించండి"
  ],
  [
    "Price Comparison",
    "ధరల పోలిక"
  ],
  [
    "Afternoon Lunch",
    "మధ్యాహ్న భోజనం"
  ],
  [
    "Kidney Friendly",
    "కిడ్నీ రక్షణ"
  ],
  [
    "Diet Preference",
    "ఆహార ప్రాధాన్యత"
  ],
  [
    "Type 2 Diabetes",
    "టైప్ 2 మధుమేహం (షుగర్)"
  ],
  [
    "Scans & Imaging",
    "స్కాన్లు మరియు ఎక్స్-రేలు"
  ],
  [
    "Morning Nashta",
    "ఉదయం అల్పాహారం"
  ],
  [
    "Non-Vegetarian",
    "మాంసాహారం"
  ],
  [
    "Thyroid / PCOD",
    "థైరాయిడ్ / పీసీవోడీ"
  ],
  [
    "Healthcare Hub",
    "ఆరోగ్య కేంద్రం"
  ],
  [
    "Create Account",
    "ఖాతాను సృష్టించండి"
  ],
  [
    "Good Afternoon",
    "శుభ మధ్యాహ్నం"
  ],
  [
    "View Care Plan",
    "సంరక్షణ ప్రణాళికను చూడండి"
  ],
  [
    "Take Medicines",
    "మందులు వేసుకోండి"
  ],
  [
    "PROTEIN INTAKE",
    "ప్రోటీన్ పరిమాణం"
  ],
  [
    "CALCIUM LOGGED",
    "కాల్షియం రికార్డు"
  ],
  [
    "Upcoming Doses",
    "రాబోయే మోతాదులు"
  ],
  [
    "Mark as Eaten",
    "తిన్నట్లు గుర్తించండి"
  ],
  [
    "Evening Snack",
    "సాయంత్రం చిరుతిండి"
  ],
  [
    "Email Address",
    "ఈమెయిల్ చిరునామా"
  ],
  [
    "Pending Doses",
    "పెండింగ్ మోతాదులు"
  ],
  [
    "Medicine Name",
    "మందు పేరు"
  ],
  [
    "Food Relation",
    "ఆహార సంబంధం"
  ],
  [
    "📥 Export CSV",
    "📥 సీఎస్‌వీ ఎగుమతి"
  ],
  [
    "+ Upload File",
    "+ పత్రాన్ని అప్‌లోడ్ చేయండి"
  ],
  [
    "All Documents",
    "అన్ని పత్రాలు"
  ],
  [
    "Prescriptions",
    "డాక్టర్ ప్రిస్క్రిప్షన్లు"
  ],
  [
    "Daily Total:",
    "రోజువారీ మొత్తం:"
  ],
  [
    "Night Dinner",
    "రాత్రి భోజనం"
  ],
  [
    "Heart Health",
    "గుండె ఆరోగ్యం"
  ],
  [
    "Welcome Back",
    "స్వాగతం"
  ],
  [
    "Good Morning",
    "శుభోదయం"
  ],
  [
    "Good Evening",
    "శుభ సాయంత్రం"
  ],
  [
    "Welcome back",
    "తిరిగి స్వాగతం"
  ],
  [
    "FIBER INTAKE",
    "పీచు పదార్థ పరిమాణం"
  ],
  [
    "Missed Doses",
    "తప్పిపోయిన మోతాదులు"
  ],
  [
    "Manufacturer",
    "తయారీదారు"
  ],
  [
    "Height (cm)",
    "ఎత్తు (సెం.మీ)"
  ],
  [
    "Weight (kg)",
    "బరువు (కిలోలు)"
  ],
  [
    "Mid-Morning",
    "మధ్యాహ్నానికి ముందు"
  ],
  [
    "Plan Active",
    "ప్రణాళిక అమలులో ఉంది"
  ],
  [
    "Taken Today",
    "ఈరోజు తీసుకున్నవి"
  ],
  [
    "Before Food",
    "భోజనానికి ముందు"
  ],
  [
    "Lab Reports",
    "ల్యాబ్ పరీక్ష నివేదికలు"
  ],
  [
    "Mark Eaten",
    "తినబడింది"
  ],
  [
    "Vegetarian",
    "శాకాహారం"
  ],
  [
    "Eggetarian",
    "గుడ్లతో కూడిన శాకాహారం"
  ],
  [
    "Print Plan",
    "ప్రణాళికను ప్రింట్ చేయండి"
  ],
  [
    "After Food",
    "భోజనం తర్వాత"
  ],
  [
    "Mark Taken",
    "మందు తీసుకున్నారు"
  ],
  [
    "Swap Dish",
    "వంటకం మార్చండి"
  ],
  [
    "Afternoon",
    "మధ్యాహ్నం"
  ],
  [
    "Pick This",
    "ఇది ఎంచుకోండి"
  ],
  [
    "Full Name",
    "పూర్తి పేరు"
  ],
  [
    "Language:",
    "భాష:"
  ],
  [
    "Breakfast",
    "ఉదయం అల్పాహారం"
  ],
  [
    "Frequency",
    "తరచుదనం"
  ],
  [
    "With Food",
    "భోజనంతో పాటు"
  ],
  [
    "Take Dose",
    "మందు తీసుకోండి"
  ],
  [
    "Portion:",
    "పరిమాణం:"
  ],
  [
    "Diabetes",
    "మధుమేహం (షుగర్)"
  ],
  [
    "CareNest",
    "కేర్‌నెస్ట్"
  ],
  [
    "Password",
    "పాస్‌వర్డ్"
  ],
  [
    "Language",
    "భాష"
  ],
  [
    "✓ Eaten",
    "✓ పూర్తయింది"
  ],
  [
    "High BP",
    "అధిక రక్తపోటు (బీపీ)"
  ],
  [
    "Sign In",
    "సైన్ ఇన్ చేయండి"
  ],
  [
    "Profile",
    "ప్రొఫైల్"
  ],
  [
    "Pending",
    "పెండింగ్"
  ],
  [
    "Savings",
    "పొదుపు"
  ],
  [
    "Logout",
    "లాగ్ అవుట్"
  ],
  [
    "Gender",
    "లింగం"
  ],
  [
    "Female",
    "మహిళ"
  ],
  [
    "Height",
    "ఎత్తు"
  ],
  [
    "Weight",
    "బరువు"
  ],
  [
    "Dinner",
    "రాత్రి భోజనం"
  ],
  [
    "Dosage",
    "మోతాదు"
  ],
  [
    "Timing",
    "సమయం"
  ],
  [
    "Missed",
    "మిస్సయింది"
  ],
  [
    "Vegan",
    "వీగన్"
  ],
  [
    "Close",
    "మూసివేయండి"
  ],
  [
    "Lunch",
    "మధ్యాహ్న భోజనం"
  ],
  [
    "Eaten",
    "తినబడింది"
  ],
  [
    "Taken",
    "పూర్తయింది"
  ],
  [
    "Male",
    "పురుషుడు"
  ],
  [
    "Age",
    "వయస్సు"
  ]
];

  const DICT_HI_MAP = {
  "Custom Indian Diet Plan for": "अनुकूलित भारतीय आहार योजना -",
  "Daily Total:": "दैनिक कुल:",
  "Portion:": "मात्रा:",
  "Mark as Eaten": "खा लिया",
  "Mark Eaten": "खाया गया",
  "✓ Eaten": "✓ खा लिया",
  "Swap Dish": "व्यंजन बदलें",
  "Morning Breakfast (Subah ka Nashta)": "सुबह का नाश्ता (8:00 AM – 9:00 AM)",
  "Morning Breakfast": "सुबह का नाश्ता",
  "Morning Nashta": "सुबह का नाश्ता",
  "Mid-Morning Refreshment (11:00 AM – 11:30 AM)": "दोपहर से पहले अल्पाहार (11:00 AM – 11:30 AM)",
  "Mid-Morning Refreshment": "दोपहर से पहले अल्पाहार (11:00 AM – 11:30 AM)",
  "Afternoon Lunch (Dopahar ka Khana)": "दोपहर का खाना (1:30 PM – 2:30 PM)",
  "Afternoon Lunch": "दोपहर का खाना",
  "Afternoon": "दोपहर",
  "Evening Snack (Chai & Light Bite)": "शाम का नाश्ता (चाय और हल्का स्नैक 5:00 PM)",
  "Evening Snack (Chai-Time)": "शाम का नाश्ता (4:30 PM – 5:30 PM)",
  "Evening Snack": "शाम का नाश्ता",
  "Night Dinner (Raat ka Khana)": "रात का खाना (8:00 PM – 9:00 PM)",
  "Night Dinner": "रात का खाना",
  "Vegetarian": "शाकाहारी",
  "Vegan": "वीगन",
  "Eggetarian": "अंडे सहित शाकाहारी",
  "Non-Vegetarian": "मांसाहारी",
  "Diabetes": "मधुमेह (डायबिटीज)",
  "High BP": "उच्च रक्तचाप (बीपी)",
  "High Cholesterol": "उच्च कोलेस्ट्रॉल",
  "Heart Health": "हृदय स्वास्थ्य",
  "Thyroid / PCOD": "थायराइड / पीसीओडी",
  "Kidney Friendly": "किडनी सुरक्षा",
  "General Health": "सामान्य स्वास्थ्य",
  "Pick This": "यह चुनें",
  "Select an Alternative Indian Meal": "वैकल्पिक भारतीय भोजन चुनें",
  "Close": "बंद करें",
  "Soft Steamed Idlis (3 pcs) + Vegetable Sambar + Coconut Chutney": "नरम भाप वाली इडली (3 पीस) + सांभर + नारियल चटनी",
  "Vegetable Poha with Roasted Peanuts, Curry Leaves & Lemon": "सब्जी पोहा (मूंगफली, कढ़ी पत्ता और नींबू के साथ)",
  "Yellow Moong Dal Chilla (2 pcs) with Mint Coriander Chutney": "मूंग दाल चीला (2 पीस) + पुदीना धनिया चटनी",
  "Oats & Vegetable Upma with Carrots, Beans & Green Peas": "ओट्स और वेज उपमा (गाजर, बीन्स और हरी मटर के साथ)",
  "Fresh Methi (Fenugreek) Thepla / Rotis (2 pcs) with Fresh Curd": "मेथी थेपला / रोटी (2 पीस) + ताजा दही",
  "2 Boiled Eggs with Black Pepper & 2 Whole Wheat Phulkas / Toast": "2 उबले अंडे (काली मिर्च के साथ) + 2 गेहूं के फुल्के",
  "Ragi (Finger Millet) Dosa (2 pcs) with Tomato Onion Chutney": "रागी डोसा (2 पीस) + टमाटर प्याज की चटनी",
  "Masala Egg Bhurji (2 Eggs) with 2 Soft Whole Wheat Rotis": "मसाला एग भुर्जी (2 अंडे) + 2 नरम गेहूं की रोटियां",
  "Fresh Tender Coconut Water (Nariyal Pani / Elaneer)": "ताजा नारियल पानी (प्राकृतिक इलेक्ट्रोलाइट्स)",
  "Spiced Buttermilk (Chaas / Majjiga) with Roasted Jeera & Curry Leaves": "मसाला छाछ (भुना जीरा और कढ़ी पत्ते के साथ)",
  "Fresh Sweet Papaya Slices (1 Medium Bowl)": "ताजा पपीता स्लाइस (1 मध्यम कटोरी)",
  "Fresh Pink Guava Slices with a pinch of Chaat Masala": "ताजा गुलाबी अमरूद स्लाइस (चाट मसाले के साथ)",
  "Handful of Soaked Almonds (6 pcs Badam) & 2 Walnuts (Akhrot)": "भीगे बादाम (6 पीस) और 2 अखरोट",
  "Fresh Crisp Apple Slices with pinch of Cinnamon": "ताजा सेब के टुकड़े (दालचीनी के साथ)",
  "2 Soft Whole Wheat Phulkas + Yellow Moong Dal + Bhindi Sabzi + Fresh Curd": "2 नरम फुल्के + पीली मूंग दाल + भिंडी मसाला + ताजा दही",
  "Steamed Rice + Palak Dal (Spinach Lentils) + Carrot Beans Sabzi + Curd": "सादे चावल + पालक दाल + गाजर बीन्स सब्जी + दही",
  "2 Phulkas + Low-Fat Paneer Bhurji + Toor Dal + Sliced Cucumber Salad": "2 फुल्के + पनीर भुर्जी + तुअर दाल + खीरा सलाद",
  "2 Soft Phulkas + Home-Style Chicken Curry (Low Oil) + Green Salad": "2 नरम फुल्के + घर की चिकन करी (कम तेल) + हरा सलाद",
  "2 Jowar / Bajra Rotis + Lauki (Gourd) Chana Dal + Beetroot Salad": "2 ज्वार / बाजरा रोटियां + लौकी चना दाल + चुकंदर सलाद",
  "Steamed Rice + Home-Style Fish Curry + Cabbage Poriyal / Sabzi": "उबले चावल + घर की फिश करी + पत्तागोभी सब्जी",
  "2 Boiled Egg Curry + 2 Whole Wheat Phulkas + Cucumber Onion Salad": "2 उबले अंडे की करी + 2 गेहूं के फुल्के + खीरा प्याज सलाद",
  "Steamed White Rice + Mild Yellow Moong Dal + Sautéed Gourd (Lauki)": "सफेद चावल + हल्की मूंग दाल + लौकी की सब्जी",
  "Crispy Roasted Makhana (Foxnuts) with Turmeric & Rock Salt": "कुरकुरे भुने मखाने (हल्दी और सेंधा नमक के साथ)",
  "Boiled Sprouted Moong Chaat with Cucumber, Onion & Fresh Lemon": "अंकुरित मूंग चाट (खीरा, प्याज और ताजा नींबू)",
  "Roasted Bengal Gram (Bhuna Chana) + Hot Adrak (Ginger) Tea": "भुना चना + अदरक वाली गर्म चाय",
  "Whole Wheat Cucumber-Tomato Sandwich with Green Mint Chutney": "होल व्हीट खीरा-टमाटर सैंडविच (हरी पुदीना चटनी)",
  "Warm Steamed Sweet Corn with Lemon Juice & Black Pepper": "उबली स्वीट कॉर्न (नींबू का रस और काली मिर्च)",
  "Soft Yellow Moong Dal Khichdi + 1 tsp Pure Ghee + Fresh Curd": "मूंग दाल खिचड़ी + 1 चम्मच शुद्ध घी + ताजा दही",
  "2 Soft Phulkas + Lauki (Bottle Gourd) Dal + Cucumber Salad": "2 नरम फुल्के + लौकी दाल + खीरा सलाद",
  "2 Soft Phulkas + Home-style Palak Paneer (Low Oil) + Warm Dal": "2 नरम फुल्के + पालक पनीर (कम तेल) + गर्म दाल",
  "Tawa Grilled Chicken (100g) + 1 Phulka + Warm Clear Veg Soup": "तवा ग्रिल्ड चिकन (100g) + 1 फुल्का + वेज क्लीयर सूप",
  "2 Soft Phulkas + 2 Egg Bhurji with Tomatoes & Onions": "2 नरम फुल्के + 2 एग भुर्जी (टमाटर व प्याज)",
  "Vegetable Dalia (Broken Wheat Khichdi) with Carrots, Peas & Curd": "सब्जी दलिया खिचड़ी (गाजर, मटर और ताजा दही)",
  "Light Steamed Fish (100g) + 1 Soft Phulka + Warm Moong Dal Soup": "भाप में पकी मछली (100g) + 1 फुल्का + मूंग दाल सूप",
  "1 Soft Phulka + Large Bowl of Yellow Moong Dal Soup + Roasted Papad": "1 नरम फुल्का + मूंग दाल सूप की बड़ी कटोरी + भुना पापड़",
  "3 medium steamed idlis with 1 bowl sambar & 1 spoon chutney": "3 मध्यम इडली + 1 कटोरी सांभर + 1 चम्मच चटनी",
  "1 medium plate with green peas, onions, peanuts & lemon juice": "1 प्लेट पोहा (मटर, प्याज, मूंगफली और नींबू के साथ)",
  "2 golden crepes made from soaked moong dal with green chutney": "2 मूंग दाल चीले + हरी चटनी",
  "1 medium bowl tempered with mustard seeds, curry leaves & ginger": "1 कटोरी उपमा (राई, कढ़ी पत्ता और अदरक तड़का)",
  "2 soft whole wheat methi rotis with 1 small katori fresh dahi": "2 नरम मेथी रोटियां + 1 छोटी कटोरी ताजा दही",
  "2 whole eggs sprinkled with roasted jeera & black pepper": "2 पूरे अंडे (भुना जीरा और काली मिर्च छिड़का हुआ)",
  "2 crispy dark millet dosas with homemade tomato chutney": "2 कुरकुरे रागी डोसे + टमाटर चटनी",
  "Scrambled eggs tossed with onions, tomatoes & coriander": "अंडा भुर्जी (प्याज, टमाटर और हरे धनिए के साथ)",
  "1 natural tender coconut (approx. 200 ml)": "1 ताजा प्राकृतिक नारियल पानी (लगभग 200 मिली)",
  "1 large glass freshly churned with roasted cumin & mint": "1 बड़ा गिलास ताजा छाछ (भुना जीरा और पुदीना)",
  "1 medium cup freshly cut ripe papaya": "1 कप ताजा कटा हुआ पपीता",
  "1 whole ripe guava sliced with black salt": "1 पूरा पका अमरूद स्लाइस (काले नमक के साथ)",
  "6 peeled soaked almonds and 2 walnut halves": "6 छिले भीगे बादाम और 2 अखरोट",
  "1 medium apple sliced with peel": "1 कटा हुआ ताजा सेब",
  "2 phulkas (no oil) + 1 katori moong dal + 1 katori bhindi + 1 small katori dahi": "2 बिना तेल के फुल्के + 1 कटोरी मूंग दाल + 1 कटोरी भिंडी + दही",
  "1 medium bowl rice + generous palak dal + steamed carrot beans + dahi": "1 कटोरी चावल + पालक दाल + गाजर बीन्स सब्जी + दही",
  "2 rotis with 75g crumbled paneer tossed with tomatoes & fresh dal": "2 रोटियां + 75g पनीर भुर्जी + ताजा दाल",
  "2 phulkas with 100g tender chicken in onion-tomato-ginger gravy + salad": "2 phulkas with 100g tender chicken in onion-tomato-ginger gravy + salad",
  "2 gluten-free millet rotis with cooling bottle gourd dal & fresh beetroot": "2 gluten-free millet rotis with cooling bottle gourd dal & fresh beetroot",
  "1 bowl steamed rice with 1 piece fish in light curry + cabbage sabzi": "1 bowl steamed rice with 1 piece fish in light curry + cabbage sabzi",
  "2 hard boiled eggs in mild home curry with 2 hot rotis": "2 hard boiled eggs in mild home curry with 2 hot rotis",
  "1 bowl soft rice with light moong dal and bottle gourd sabzi": "1 bowl soft rice with light moong dal and bottle gourd sabzi",
  "1 full bowl roasted with a drop of ghee & pinch of haldi": "1 full bowl roasted with a drop of ghee & pinch of haldi",
  "1 cup steamed sprouts with chopped tomatoes, cucumber & lemon": "1 cup steamed sprouts with chopped tomatoes, cucumber & lemon",
  "Small bowl of roasted chana with hot ginger tea (no sugar)": "Small bowl of roasted chana with hot ginger tea (no sugar)",
  "2 slices whole grain bread with fresh cucumber, tomato & mint": "2 slices whole grain bread with fresh cucumber, tomato & mint",
  "1 small bowl steamed corn seasoned with lemon & pepper": "1 small bowl steamed corn seasoned with lemon & pepper",
  "1 bowl warm comforting khichdi tempered with cumin & 1 bowl curd": "1 bowl warm comforting khichdi tempered with cumin & 1 bowl curd",
  "2 warm phulkas with gentle bottle gourd dal & fresh salad": "2 warm phulkas with gentle bottle gourd dal & fresh salad",
  "2 phulkas with pureed spinach & fresh paneer cubes": "2 phulkas with pureed spinach & fresh paneer cubes",
  "Spiced chicken breast cooked on tawa with 1 roti & clear broth": "Spiced chicken breast cooked on tawa with 1 roti & clear broth",
  "2 eggs scrambled with onions, tomatoes & green coriander + 2 rotis": "2 eggs scrambled with onions, tomatoes & green coriander + 2 rotis",
  "1 bowl wholesome cracked wheat with vegetables & small curd": "1 bowl wholesome cracked wheat with vegetables & small curd",
  "1 fish fillet lightly spiced with turmeric & pepper + 1 roti & soup": "1 fish fillet lightly spiced with turmeric & pepper + 1 roti & soup",
  "1 soft phulka with generous light moong soup & crunchy roasted papad": "1 soft phulka with generous light moong soup & crunchy roasted papad",
  "Easy to Digest • Light & Energizing": "पचाने में आसान • हल्का और ऊर्जावान",
  "Iron Rich • Wholesome & Quick": "आयरन से भरपूर • पौष्टिक और त्वरित",
  "High Protein • Blood Sugar Friendly": "उच्च प्रोटीन • शुगर के अनुकूल",
  "Heart Healthy • Rich in Fiber": "हृदय के लिए उत्तम • फाइबर से भरपूर",
  "Controls Sugar • Healthy Gut": "शुगर नियंत्रण • स्वस्थ पाचन",
  "High Protein • Muscle Strength": "उच्च प्रोटीन • मांसपेशियों की मजबूती",
  "Rich in Calcium & Iron • Bone Health": "कैल्शियम व आयरन युक्त • हड्डियों की मजबूती",
  "Satisfying Home Breakfast • High Energy": "संतोषजनक घरेलू नाश्ता • भरपूर ऊर्जा",
  "Natural Electrolytes • Hydrating & Cooling": "प्राकृतिक इलेक्ट्रोलाइट्स • शीतलता और ताजगी",
  "Cools Stomach • Natural Probiotic": "पेट को ठंडक • प्राकृतिक प्रोबायोटिक",
  "Aids Digestion • High Vitamin A & C": "पाचन में सहायक • विटामिन ए व सी से भरपूर",
  "Very High Fiber • Sugar Safe": "उच्च फाइबर • शुगर के लिए सुरक्षित",
  "Brain & Memory • Good Fats for Heart": "याद्दाश्त व दिमाग • हृदय के लिए उत्तम वसा",
  "Gentle on Kidneys • Crisp & Filling": "किडनी के लिए कोमल • कुरकुरा व पेट भरने वाला",
  "Classic Indian Thali • Wholesome & Balanced": "पारंपरिक भारतीय थाली • संतुलित और पौष्टिक",
  "High Iron & Calcium • Fiber Rich": "उच्च आयरन व कैल्शियम • फाइबर से भरपूर",
  "High Vegetarian Protein • Strong Bones": "उच्च शाकाहारी प्रोटीन • मजबूत हड्डियां",
  "Lean High Protein • Low Fat": "लीन प्रोटीन • कम वसा युक्त",
  "Controls Blood Pressure • Light & Cooling": "रक्तचाप नियंत्रण • हल्का व शीतल",
  "Heart Healthy • Natural Omega-3": "हृदय के अनुकूल • प्राकृतिक ओमेगा-3",
  "Healthy Egg Protein • Vitamin B12": "स्वस्थ अंडा प्रोटीन • विटामिन बी12",
  "Light on Kidneys • Low Potassium & Phosphorus": "किडनी के अनुकूल • कम पोटेशियम",
  "Low Sodium • Crispy & Healthy": "कम सोडियम • कुरकुरा और स्वस्थ",
  "High Fiber • Keeps Sugar Stable": "उच्च फाइबर • शुगर को स्थिर रखे",
  "Zero Oil Crunch • Sustained Energy": "शून्य तेल स्नैक • निरंतर ऊर्जा",
  "Filling & Fresh • Good Vitamins": "ताजा और पेट भरने वाला • उत्तम विटामिन",
  "Rich in Fiber • Heart Friendly": "फाइबर से भरपूर • हृदय के लिए लाभकारी",
  "Very Light on Stomach • Promotes Good Sleep": "पेट के लिए बहुत हल्का • अच्छी नींद में सहायक",
  "Cooling & Light • Keeps BP Normal": "शीतल व हल्का • बीपी सामान्य रखे",
  "High Iron & Protein • Satisfying & Healthy": "उच्च आयरन व प्रोटीन • संतोषजनक व स्वस्थ",
  "Lean Protein • Light & No Bloating": "लीन प्रोटीन • हल्का व सुपाच्य",
  "Quick & Light • High Quality Protein": "त्वरित व हल्का • उच्च गुणवत्ता प्रोटीन",
  "High Fiber • Controls Morning Sugar": "उच्च फाइबर • सुबह की शुगर नियंत्रित रखे",
  "Low Sodium • Heart Safe & Lean": "कम सोडियम • हृदय-सुरक्षित और लीन",
  "Very Light • Low Potassium for Kidney Care": "बहुत हल्का • किडनी सुरक्षा के लिए कम पोटेशियम",
  "Sugar Friendly & High Fiber": "शुगर के अनुकूल • उच्च फाइबर",
  "Wholesome Indian Home Diet": "पौष्टिक भारतीय घरेलू भोजन",
  "Classic Indian Thali": "पारंपरिक भारतीय थाली",
  "CareNest - Your Personal Healthcare Companion": "केयरनेस्ट - आपका व्यक्तिगत स्वास्थ्य साथी",
  "CareNest": "केयरनेस्ट",
  "Healthcare Companion": "स्वास्थ्य साथी",
  "Healthcare Hub": "स्वास्थ्य केंद्र",
  "Your Comprehensive Personal Healthcare Companion": "आपका संपूर्ण व्यक्तिगत स्वास्थ्य और देखभाल साथी",
  "Understand Hospital Discharge Documents": "अस्पताल डिस्चार्ज पर्चियों को आसानी से समझें",
  "Find Affordable Generic Medicine Equivalents": "सस्ती जेनेरिक दवा विकल्प तुरंत खोजें",
  "Medicine Reminders with Alarm & Tablet Photos": "अलार्म और फोटो के साथ दवा अनुस्मारक",
  "Daily Diet Planner with Food Tracking & Swaps": "भारतीय भोजन और जल ट्रैकर के साथ दैनिक आहार",
  "Private • Encrypted • Healthcare Standard": "निजी • सुरक्षित एन्क्रिप्टेड • स्वास्थ्य मानक",
  "Sign In": "साइन इन करें",
  "Create Account": "खाता बनाएं",
  "Instant Review Access": "त्वरित समीक्षा पहुंच",
  "One-Click Login →": "एक-क्लिक लॉगिन →",
  "Welcome Back": "स्वागत है",
  "Sign in to access your health dashboard and reminders.": "अपने स्वास्थ्य डैशबोर्ड और दवा अनुस्मारक तक पहुंचने के लिए लॉगिन करें।",
  "Email Address": "ईमेल पता",
  "Password": "पासवर्ड",
  "Keep me logged in on this device": "मुझे इस डिवाइस पर लॉग इन रखें",
  "Sign In to CareNest": "केयरनेस्ट में साइन इन करें",
  "Full Name": "पूरा नाम",
  "Confirm Password": "पासवर्ड की पुष्टि करें",
  "I agree to CareNest Health Data Terms & Privacy Policy": "मैं केयरनेस्ट स्वास्थ्य डेटा शर्तों और गोपनीयता नीति से सहमत हूँ",
  "Create CareNest Account": "केयरनेस्ट खाता बनाएं",
  "Secure • Private • Cloud Sync Ready": "सुरक्षित • निजी • क्लाउड सिंक तैयार",
  "Language:": "भाषा:",
  "Language": "भाषा",
  "Pre-filled demo:": "डेमो क्रेडेंशियल:",
  "Don't have an account?": "खाता नहीं है?",
  "Already have an account?": "पहले से खाता है?",
  "CareNest - Portal Selection Dashboard": "केयरनेस्ट - पोर्टल चयन डैशबोर्ड",
  "Patient Dashboard": "रोगी स्वास्थ्य डैशबोर्ड",
  "Good Morning": "सुप्रभात",
  "Good Afternoon": "शुभ दोपहर",
  "Good Evening": "शुभ संध्या",
  "Welcome back": "पुनः स्वागत है",
  "Profile": "प्रोफ़ाइल",
  "Logout": "लॉग आउट",
  "Active Medications": "सक्रिय दवाएं",
  "Today's Schedule": "आज का शेड्यूल",
  "Pending Doses": "लंबित खुराक",
  "Upcoming Appointments": "आगामी अपॉइंटमेंट",
  "Upcoming Review Appointments": "आगामी समीक्षा परामर्श",
  "Uploaded Reports & Lab Vault": "अपलोड की गई रिपोर्ट और लैब वॉल्ट",
  "Find Lower-Cost Generic Alternatives": "कम लागत वाली जेनेरिक दवाएं खोजें",
  "Healthy Heart Recovery Plan": "स्वस्थ हृदय रिकवरी योजना",
  "View Care Plan": "देखभाल योजना देखें",
  "Log Today's Meal": "आज का भोजन दर्ज करें",
  "Take Medicines": "दवाएं लें",
  "Clinical Discharge Summary": "नैदानिक डिस्चार्ज सारांश",
  "Upload discharge papers or doctor prescriptions to extract dosing tables, dietary restrictions, and red flags.": "दवा सारणी, आहार प्रतिबंध और चेतावनी संकेत निकालने के लिए डिस्चार्ज पर्चियां अपलोड करें।",
  "Prescription Pill Reminders": "पर्चे की दवा अनुस्मारक",
  "Never miss a scheduled dose. Visual pill alarms, audio alerts, and food timing instructions.": "कभी भी खुराक न भूलें। फोटो अलार्म, ध्वनि अलर्ट और भोजन समय निर्देश।",
  "Indian Diet & Nutrition Planner": "भारतीय आहार और पोषण योजना",
  "Personalized Indian home meals (Idli, Poha, Khichdi, Phulka) matched to your specific health conditions.": "आपकी स्वास्थ्य स्थिति के अनुसार व्यक्तिगत भारतीय घरेलू भोजन (इडली, पोहा, खिचड़ी, फुल्का)।",
  "Secure Document Vault": "सुरक्षित दस्तावेज़ वॉल्ट",
  "Store prescriptions, lab reports, ECGs, and scans safely with encrypted offline and cloud access.": "पर्चे, लैब रिपोर्ट, ईसीजी और स्कैन को सुरक्षित एन्क्रिप्टेड रूप में सहेजें।",
  "Affordable Generic Medicines": "किफायती जेनेरिक दवाएं",
  "Search any branded medication to discover identical generic alternatives and save up to 80% on costs.": "समान जेनेरिक विकल्प खोजने और 80% तक बचत करने के लिए कोई भी ब्रांडेड दवा खोजें।",
  "Emergency Care & Support": "आपातकालीन देखभाल और सहायता",
  "Direct contact with verified cardiologists, nephrologists, and 24x7 emergency helpline numbers.": "सत्यापित डॉक्टरों और 24x7 आपातकालीन हेल्पलाइन नंबरों से सीधा संपर्क।",
  "CareNest - Indian Daily Diet & Nutrition Planner": "केयरनेस्ट - भारतीय दैनिक आहार और पोषण योजना",
  "Back to Dashboard": "डैशबोर्ड पर वापस जाएं",
  "Daily Indian Diet Planner": "दैनिक भारतीय आहार और पोषण योजना",
  "Print Plan": "योजना प्रिंट करें",
  "Personalized Daily Indian Diet & Nutrition Planner": "व्यक्तिगत दैनिक भारतीय आहार और पोषण योजना",
  "Enter your details to generate a clinically customized daily Indian meal routine with balanced macros and kitchen remedies.": "संतुलित पोषण और घरेलू नुस्खों के साथ अनुकूलित दैनिक भारतीय भोजन दिनचर्या तैयार करने के लिए अपना विवरण दर्ज करें।",
  "100% Home Cooked Indian Meals": "100% घर का बना भारतीय भोजन",
  "Local Everyday Ingredients": "स्थानीय रोजमर्रा की सामग्री",
  "Simple Health Terminology": "सरल स्वास्थ्य भाषा",
  "Step 1: Your Profile & Health Target": "चरण 1: आपकी प्रोफ़ाइल और स्वास्थ्य लक्ष्य",
  "Age": "आयु",
  "Gender": "लिंग",
  "Male": "पुरुष",
  "Female": "महिला",
  "Height": "ऊंचाई",
  "Height (cm)": "ऊंचाई (सेमी)",
  "Weight": "वजन",
  "Weight (kg)": "वजन (किलो)",
  "Daily Lifestyle Activity": "दैनिक जीवनशैली गतिविधि",
  "Sedentary (Desk Job / Little Walking)": "गतिहीन (डेस्क जॉब / कम चलना)",
  "Light Active (Daily Walking / Light Chores)": "हल्की सक्रिय (रोजाना चलना / घरेलू काम)",
  "Moderate Active (1 Hour Brisk Exercise)": "मध्यम सक्रिय (1 घंटा व्यायाम / योग)",
  "Very Active (Physical Labor / Athletes)": "अत्यधिक सक्रिय (शारीरिक श्रम / खेल)",
  "Diet Preference": "आहार प्राथमिकता",
  "Vegetarian (Pure Veg)": "शाकाहारी (शुद्ध शाकाहारी)",
  "Vegan (Plant Based)": "वीगन (पौध-आधारित)",
  "Eggetarian (Includes Eggs)": "अंडे सहित शाकाहारी",
  "Non-Vegetarian (Chicken & Fish)": "मांसाहारी (चिकन और मछली)",
  "Step 2: Medical Conditions & Health Goals": "चरण 2: चिकित्सीय स्थितियां और स्वास्थ्य लक्ष्य",
  "Select all that apply to tailor foods specifically for your health safety:": "अपनी स्वास्थ्य सुरक्षा के अनुसार भोजन तैयार करने के लिए सभी लागू विकल्पों का चयन करें:",
  "No Special Condition": "सामान्य स्वास्थ्य (कोई विशेष बीमारी नहीं)",
  "Wholesome home diet for general vitality & fitness": "सामान्य स्फूर्ति और तंदुरुस्ती के लिए पौष्टिक घरेलू आहार",
  "Type 2 Diabetes": "टाइप 2 मधुमेह (डायबिटीज)",
  "Low glycemic index foods to prevent post-meal sugar spikes": "भोजन के बाद शुगर के स्तर को नियंत्रित रखने वाले खाद्य पदार्थ",
  "High Blood Pressure (BP)": "उच्च रक्तचाप (हाई बीपी)",
  "DASH dietary principles with low sodium & potassium rich foods": "कम नमक और पोटेशियम युक्त खाद्य पदार्थों के साथ बीपी नियंत्रण",
  "Zero trans-fats, high soluble fiber, and heart-safe fats": "शून्य ट्रांस-फैट, उच्च घुलनशील फाइबर और हृदय-सुरक्षित तेल",
  "Heart Health & Stents": "हृदय स्वास्थ्य और स्टेंट",
  "Anti-inflammatory home meals for cardiac recovery": "हृदय स्वास्थ्य सुधार के लिए सूजनरोधी घरेलू भोजन",
  "Metabolism balancing, selenium & iodine rich nutrition": "मेटाबॉलिज्म संतुलन, सेलेनियम और आयोडीन युक्त पोषण",
  "Chronic Kidney Disease": "किडनी सुरक्षा (सीकेडी)",
  "Controlled protein, regulated potassium & strict sodium balance": "नियंत्रित प्रोटीन, संतुलित पोटेशियम और सीमित सोडियम",
  "Generate My Indian Diet Plan": "मेरी भारतीय आहार योजना बनाएं",
  "Step 3: Your Daily Indian Meal Routine": "चरण 3: आपका दैनिक भारतीय भोजन रूटीन",
  "Based on your profile, here is your customized 5-meal schedule for today. Click 'Swap Dish' if you want an alternative:": "आपकी प्रोफ़ाइल के आधार पर, आज के लिए आपका 5-भोजन कार्यक्रम यहां है। विकल्प के लिए 'व्यंजन बदलें' पर क्लिक करें:",
  "Wholesome Lunch (Dopahar ka Khana)": "दोपहर का खाना (1:00 PM – 2:00 PM)",
  "Breakfast": "सुबह का नाश्ता",
  "Mid-Morning": "दोपहर से पहले",
  "Lunch": "दोपहर का खाना",
  "Dinner": "रात का खाना",
  "Eaten": "खाया गया",
  "Plan Active": "योजना सक्रिय",
  "Daily Water Tracker (Pani Peene ka Record)": "दैनिक जल ट्रैकर (पानी पीने का रिकॉर्ड)",
  "Tap each glass as you drink throughout the day!": "दिनभर में जब भी पानी पिएं, गिलास पर टैप करें!",
  "View End-of-Day Nutrition & Deficiency Report": "दैनिक पोषण और कमी रिपोर्ट देखें",
  "Step 4: End-of-Day Nutritional & Deficiency Report": "चरण 4: दिन का अंत पोषण और कमी रिपोर्ट",
  "Summary of consumed meals, nutrient coverage, and kitchen remedies for any missing vitamins:": "खाए गए भोजन, पोषक तत्वों की स्थिति और छूटे हुए विटामिनों के लिए घरेलू उपाय:",
  "CALORIES CONSUMED": "कुल खाई गई कैलोरी",
  "PROTEIN INTAKE": "प्रोटीन सेवन",
  "FIBER INTAKE": "फाइबर सेवन",
  "CALCIUM LOGGED": "कैल्शियम दर्ज",
  "IRON & VITAMIN C": "आयरन और विटामिन सी",
  "HYDRATION LOGGED": "दर्ज किया गया जल सेवन",
  "Strong bones & joints": "मजबूत हड्डियां और जोड़",
  "Hemoglobin & stamina": "हीमोग्लोबिन और स्फूर्ति",
  "Healthy gut digestion": "स्वस्थ पाचन तंत्र",
  "Muscle repair & strength": "मांसपेशियों की मजबूती",
  "Deficiency Alerts & Kitchen Remedies": "पोषक तत्वों की कमी और घरेलू उपाय",
  "Save Today's Report to CareNest Profile": "आज की रिपोर्ट प्रोफ़ाइल में सहेजें",
  "Skipped Meals Today:": "आज छूटे हुए भोजन:",
  "How Did You Feel Today? (Hunger Recalibrator)": "आज आपको कैसा महसूस हुआ? (भूख पुनर्गणक)",
  "I was still very hungry (Add +250 kcal snacks tomorrow)": "मुझे अभी भी भूख लग रही थी (कल +250 कैलोरी स्नैक जोड़ें)",
  "I felt completely satisfied and energetic (Maintain plan)": "मैं पूरी तरह संतुष्ट और ऊर्जावान महसूस कर रहा था (योजना जारी रखें)",
  "I felt too full / heavy (Reduce -150 kcal tomorrow)": "मेरा पेट बहुत भारी महसूस हो रहा था (कल -150 कैलोरी कम करें)",
  "Recalibrate Tomorrow's Diet": "कल की आहार योजना पुनर्गणित करें",
  "CareNest - Medicine Reminders & Tablet Alarms": "केयरनेस्ट - दवा अनुस्मारक और टैबलेट अलार्म",
  "Medicine Reminders & Tablet Alarms": "दवा अनुस्मारक और टैबलेट अलार्म",
  "+ Add Medicine & Tablet Photo": "+ नई दवा और फोटो जोड़ें",
  "Prescription Dosing Schedule & Visual Alarms": "पर्चे की दवा अनुसूची और दृश्य अलार्म",
  "Never miss a dose. Track medications by exact administration times, preview verified tablet photos, and test the realistic audible alarm with pill visuals.": "कभी भी खुराक न भूलें। दवाइयों को सटीक समय पर ट्रैक करें, टैबलेट की तस्वीर देखें और अलार्म की जांच करें।",
  "Medications Tracked": "ट्रैक की जा रही दवाएं",
  "Upcoming Next Dose": "अगली आने वाली खुराक",
  "Overall Adherence Rate": "दवा लेने की समग्र दर",
  "Upcoming Doses": "आगामी खुराक",
  "Taken Today": "आज ली गई दवाएं",
  "Missed Doses": "छूटी हुई खुराक",
  "Medicine Name": "दवा का नाम",
  "Dosage": "खुराक",
  "Frequency": "आवृत्ति",
  "Timing": "समय",
  "Food Relation": "भोजन संबंध",
  "Before Food": "भोजन से पहले",
  "After Food": "भोजन के बाद",
  "With Food": "भोजन के साथ",
  "Take Dose": "दवा लें",
  "Mark Taken": "दवा ली गई",
  "Pending": "लंबित",
  "Taken": "पूर्ण",
  "Missed": "छूट गई",
  "CareNest - Medical Document Vault": "केयरनेस्ट - चिकित्सा दस्तावेज़ वॉल्ट",
  "Medical Document Vault": "चिकित्सा दस्तावेज़ वॉल्ट",
  "📥 Export CSV": "📥 सीएसवी निर्यात",
  "+ Upload File": "+ फ़ाइल अपलोड करें",
  "Upload Medical Record": "चिकित्सा रिकॉर्ड अपलोड करें",
  "All Documents": "सभी दस्तावेज़",
  "Prescriptions": "डॉक्टर के पर्चे",
  "Discharge Summaries": "डिस्चार्ज सारांश",
  "Lab Reports": "लैब परीक्षण रिपोर्ट",
  "Scans & Imaging": "स्कैन और एक्स-रे",
  "Drag and drop your medical files here or click to browse": "अपनी मेडिकल फाइलें यहाँ खींचें या ब्राउज़ करने के लिए क्लिक करें",
  "Generic Medicine Finder | CareNest": "जेनेरिक दवा खोजक | केयरनेस्ट",
  "Generic Medicine Finder": "जेनेरिक दवा खोजक",
  "Bioequivalent Savings Portal": "किफायती दवा बचत पोर्टल",
  "Search branded medicines to discover approved, bio-equivalent generic alternatives at up to 80% lower cost.": "80% तक कम कीमत पर स्वीकृत जेनेरिक विकल्प खोजने के लिए ब्रांडेड दवाएं खोजें।",
  "Search by brand or salt name...": "ब्रांड या घटक के नाम से खोजें...",
  "Search Medicines": "दवाएं खोजें",
  "Generic Substitutes": "जेनेरिक विकल्प",
  "Manufacturer": "निर्माता",
  "Price Comparison": "मूल्य तुलना",
  "Savings": "बचत"
};
  const DICT_TE_MAP = {
  "Custom Indian Diet Plan for": "ప్రత్యేక భారతీయ ఆహార ప్రణాళిక -",
  "Daily Total:": "రోజువారీ మొత్తం:",
  "Portion:": "పరిమాణం:",
  "Mark as Eaten": "తిన్నట్లు గుర్తించండి",
  "Mark Eaten": "తినబడింది",
  "✓ Eaten": "✓ పూర్తయింది",
  "Swap Dish": "వంటకం మార్చండి",
  "Morning Breakfast (Subah ka Nashta)": "ఉదయం అల్పాహారం (8:00 AM – 9:00 AM)",
  "Morning Breakfast": "ఉదయం అల్పాహారం",
  "Morning Nashta": "ఉదయం అల్పాహారం",
  "Mid-Morning Refreshment (11:00 AM – 11:30 AM)": "మధ్యాహ్నానికి ముందు అల్పాహారం (11:00 AM – 11:30 AM)",
  "Mid-Morning Refreshment": "మధ్యాహ్నానికి ముందు అల్పాహారం (11:00 AM – 11:30 AM)",
  "Afternoon Lunch (Dopahar ka Khana)": "మధ్యాహ్న భోజనం (1:30 PM – 2:30 PM)",
  "Afternoon Lunch": "మధ్యాహ్న భోజనం",
  "Afternoon": "మధ్యాహ్నం",
  "Evening Snack (Chai & Light Bite)": "సాయంత్రం చిరుతిండి (టీ సమయం 5:00 PM)",
  "Evening Snack (Chai-Time)": "సాయంత్రం చిరుతిండి (4:30 PM – 5:30 PM)",
  "Evening Snack": "సాయంత్రం చిరుతిండి",
  "Night Dinner (Raat ka Khana)": "రాత్రి భోజనం (8:00 PM – 9:00 PM)",
  "Night Dinner": "రాత్రి భోజనం",
  "Vegetarian": "శాకాహారం",
  "Vegan": "వీగన్",
  "Eggetarian": "గుడ్లతో కూడిన శాకాహారం",
  "Non-Vegetarian": "మాంసాహారం",
  "Diabetes": "మధుమేహం (షుగర్)",
  "High BP": "అధిక రక్తపోటు (బీపీ)",
  "High Cholesterol": "అధిక కొలెస్ట్రాల్",
  "Heart Health": "గుండె ఆరోగ్యం",
  "Thyroid / PCOD": "థైరాయిడ్ / పీసీవోడీ",
  "Kidney Friendly": "కిడ్నీ రక్షణ",
  "Pick This": "ఇది ఎంచుకోండి",
  "Select an Alternative Indian Meal": "మరొక ప్రత్యామ్నాయ భారతీయ భోజనాన్ని ఎంచుకోండి",
  "Close": "మూసివేయండి",
  "Soft Steamed Idlis (3 pcs) + Vegetable Sambar + Coconut Chutney": "మెత్తని ఇడ్లీలు (3) + కూరగాయల సాంబార్ + కొబ్బరి చట్నీ",
  "Vegetable Poha with Roasted Peanuts, Curry Leaves & Lemon": "కూరగాయల పోహా (వేరుశనగలు, కరివేపాకు, నిమ్మరసంతో)",
  "Yellow Moong Dal Chilla (2 pcs) with Mint Coriander Chutney": "పెసరపప్పు చిల్లా (2) + పుదీనా కొత్తిమీర చట్నీ",
  "Oats & Vegetable Upma with Carrots, Beans & Green Peas": "ఓట్స్ వెజిటబుల్ ఉప్మా (క్యారెట్లు, బీన్స్ మరియు బఠానీలతో)",
  "Fresh Methi (Fenugreek) Thepla / Rotis (2 pcs) with Fresh Curd": "మెంతి రోటీ / తెప్లా (2) + తాజా పెరుగు",
  "2 Boiled Eggs with Black Pepper & 2 Whole Wheat Phulkas / Toast": "2 ఉడకబెట్టిన గుడ్లు (మిరియాల పొడితో) + 2 పుల్కాలు",
  "Ragi (Finger Millet) Dosa (2 pcs) with Tomato Onion Chutney": "రాగి దోశ (2) + టమాటా ఉల్లిపాయ చట్నీ",
  "Masala Egg Bhurji (2 Eggs) with 2 Soft Whole Wheat Rotis": "మసాలా ఎగ్ భూర్జీ (2 గుడ్లు) + 2 మెత్తని గోధుమ రోటీలు",
  "Fresh Tender Coconut Water (Nariyal Pani / Elaneer)": "తాజా కొబ్బరి బొండం నీరు (సహజ ఎలక్ట్రోలైట్లు)",
  "Spiced Buttermilk (Chaas / Majjiga) with Roasted Jeera & Curry Leaves": "మసాలా మజ్జిగ (జీలకర్ర మరియు కరివేపాకుతో)",
  "Fresh Sweet Papaya Slices (1 Medium Bowl)": "తాజా బొప్పాయి ముక్కలు (1 కప్పు)",
  "Fresh Pink Guava Slices with a pinch of Chaat Masala": "తాజా జామకాయ ముక్కలు (చాట్ మసాలాతో)",
  "Handful of Soaked Almonds (6 pcs Badam) & 2 Walnuts (Akhrot)": "నానబెట్టిన బాదం (6) మరియు 2 అక్రోట్ ముక్కలు",
  "Fresh Crisp Apple Slices with pinch of Cinnamon": "తాజా యాపిల్ ముక్కలు (దాల్చినచెక్క పొడితో)",
  "2 Soft Whole Wheat Phulkas + Yellow Moong Dal + Bhindi Sabzi + Fresh Curd": "2 మెత్తని పుల్కాలు + పెసరపప్పు + బెండకాయ కూర + తాజా పెరుగు",
  "Steamed Rice + Palak Dal (Spinach Lentils) + Carrot Beans Sabzi + Curd": "అన్నం + పాలకూర పప్పు + క్యారెట్ బీన్స్ కూర + పెరుగు",
  "2 Phulkas + Low-Fat Paneer Bhurji + Toor Dal + Sliced Cucumber Salad": "2 పుల్కాలు + పనీర్ భూర్జీ + కందిపప్పు + కీరదోస సలాడ్",
  "2 Soft Phulkas + Home-Style Chicken Curry (Low Oil) + Green Salad": "2 పుల్కాలు + ఇంటి చికెన్ కర్రీ (తక్కువ నూనె) + సలాడ్",
  "2 Jowar / Bajra Rotis + Lauki (Gourd) Chana Dal + Beetroot Salad": "2 జొన్న / సజ్జ రొట్టెలు + సొరకాయ పప్పు + బీట్‌రూట్ సలాడ్",
  "Steamed Rice + Home-Style Fish Curry + Cabbage Poriyal / Sabzi": "అన్నం + చేపల పులుసు + క్యాబేజీ కూర",
  "2 Boiled Egg Curry + 2 Whole Wheat Phulkas + Cucumber Onion Salad": "2 ఉడకబెట్టిన గుడ్ల కూర + 2 పుల్కాలు + ఉల్లిపాయ సలాడ్",
  "Steamed White Rice + Mild Yellow Moong Dal + Sautéed Gourd (Lauki)": "తెల్ల అన్నం + పెసరపప్పు + తేలికపాటి సొరకాయ కూర",
  "Crispy Roasted Makhana (Foxnuts) with Turmeric & Rock Salt": "వేయించిన పూల్ మఖానా (పసుపు మరియు ఉప్పుతో)",
  "Boiled Sprouted Moong Chaat with Cucumber, Onion & Fresh Lemon": "మొలకెత్తిన పెసల చాట్ (కీరదోస, ఉల్లిపాయ, నిమ్మరసంతో)",
  "Roasted Bengal Gram (Bhuna Chana) + Hot Adrak (Ginger) Tea": "వేయించిన శనగలు + వేడి అల్లం టీ",
  "Whole Wheat Cucumber-Tomato Sandwich with Green Mint Chutney": "గోధుమ బ్రెడ్ శాండ్‌విచ్ (కీరదోస, టమాటా, పుదీనా చట్నీ)",
  "Warm Steamed Sweet Corn with Lemon Juice & Black Pepper": "ఉడికించిన స్వీట్ కార్న్ (నిమ్మరసం, మిరియాల పొడితో)",
  "Soft Yellow Moong Dal Khichdi + 1 tsp Pure Ghee + Fresh Curd": "మెత్తని పెసరపప్పు కిచిడీ + 1 స్పూన్ నెయ్యి + పెరుగు",
  "2 Soft Phulkas + Lauki (Bottle Gourd) Dal + Cucumber Salad": "2 పుల్కాలు + సొరకాయ పప్పు + కీరదోస సలాడ్",
  "2 Soft Phulkas + Home-style Palak Paneer (Low Oil) + Warm Dal": "2 పుల్కాలు + పాలక్ పనీర్ (తక్కువ నూనె) + వేడి పప్పు",
  "Tawa Grilled Chicken (100g) + 1 Phulka + Warm Clear Veg Soup": "గ్రిల్డ్ చికెన్ (100 గ్రా) + 1 పుల్కా + వెజ్ సూప్",
  "2 Soft Phulkas + 2 Egg Bhurji with Tomatoes & Onions": "2 పుల్కాలు + ఎగ్ భూర్జీ (టమాటాలు & ఉల్లిపాయలు)",
  "Vegetable Dalia (Broken Wheat Khichdi) with Carrots, Peas & Curd": "గోధుమ రవ్వ కిచిడీ (క్యారెట్లు, బఠానీలు మరియు పెరుగు)",
  "Light Steamed Fish (100g) + 1 Soft Phulka + Warm Moong Dal Soup": "ఆవిరి చేప (100 గ్రా) + 1 పుల్కా + పెసరపప్పు సూప్",
  "1 Soft Phulka + Large Bowl of Yellow Moong Dal Soup + Roasted Papad": "1 పుల్కా + పెద్ద గిన్నెడు పెసరపప్పు సూప్ + వేయించిన అప్పడం",
  "3 medium steamed idlis with 1 bowl sambar & 1 spoon chutney": "3 ఇడ్లీలు + 1 గిన్నె సాంబార్ + 1 స్పూన్ చట్నీ",
  "1 medium plate with green peas, onions, peanuts & lemon juice": "1 ప్లేట్ పోహా (బఠానీలు, ఉల్లిపాయలు, నిమ్మరసంతో)",
  "2 golden crepes made from soaked moong dal with green chutney": "2 పెసరపప్పు దోశలు/చిల్లా + పచ్చడి",
  "1 medium bowl tempered with mustard seeds, curry leaves & ginger": "1 గిన్నె ఉప్మా (ఆవాలు, కరివేపాకు, అల్లం తిరగమాతతో)",
  "2 soft whole wheat methi rotis with 1 small katori fresh dahi": "2 మెంతి రోటీలు + 1 చిన్న కప్పు పెరుగు",
  "2 whole eggs sprinkled with roasted jeera & black pepper": "2 గుడ్లు (జీలకర్ర, మిరియాల పొడితో)",
  "2 crispy dark millet dosas with homemade tomato chutney": "2 రాగి దోశలు + టమాటా చట్నీ",
  "Scrambled eggs tossed with onions, tomatoes & coriander": "ఎగ్ భూర్జీ (ఉల్లిపాయలు, టమాటాలు, కొత్తిమీరతో)",
  "1 natural tender coconut (approx. 200 ml)": "1 కొబ్బరి బొండం నీరు (సుమారు 200 మి.లీ)",
  "1 large glass freshly churned with roasted cumin & mint": "1 పెద్ద గ్లాసు మజ్జిగ (జీలకర్ర మరియు పుదీనాతో)",
  "1 medium cup freshly cut ripe papaya": "1 కప్పు తాజా బొప్పాయి ముక్కలు",
  "1 whole ripe guava sliced with black salt": "1 జామకాయ ముక్కలు (ఉప్పుతో)",
  "6 peeled soaked almonds and 2 walnut halves": "6 నానబెట్టిన బాదం మరియు 2 అక్రోట్ ముక్కలు",
  "1 medium apple sliced with peel": "1 యాపిల్ ముక్కలు",
  "2 phulkas (no oil) + 1 katori moong dal + 1 katori bhindi + 1 small katori dahi": "2 పుల్కాలు + 1 కప్పు పెసరపప్పు + బెండకాయ కూర + పెరుగు",
  "1 medium bowl rice + generous palak dal + steamed carrot beans + dahi": "1 గిన్నె అన్నం + పాలకూర పప్పు + క్యారెట్ బీన్స్ కూర + పెరుగు",
  "2 rotis with 75g crumbled paneer tossed with tomatoes & fresh dal": "2 రోటీలు + పనీర్ భూర్జీ + పప్పు",
  "2 phulkas with 100g tender chicken in onion-tomato-ginger gravy + salad": "2 phulkas with 100g tender chicken in onion-tomato-ginger gravy + salad",
  "2 gluten-free millet rotis with cooling bottle gourd dal & fresh beetroot": "2 gluten-free millet rotis with cooling bottle gourd dal & fresh beetroot",
  "1 bowl steamed rice with 1 piece fish in light curry + cabbage sabzi": "1 bowl steamed rice with 1 piece fish in light curry + cabbage sabzi",
  "2 hard boiled eggs in mild home curry with 2 hot rotis": "2 hard boiled eggs in mild home curry with 2 hot rotis",
  "1 bowl soft rice with light moong dal and bottle gourd sabzi": "1 bowl soft rice with light moong dal and bottle gourd sabzi",
  "1 full bowl roasted with a drop of ghee & pinch of haldi": "1 full bowl roasted with a drop of ghee & pinch of haldi",
  "1 cup steamed sprouts with chopped tomatoes, cucumber & lemon": "1 cup steamed sprouts with chopped tomatoes, cucumber & lemon",
  "Small bowl of roasted chana with hot ginger tea (no sugar)": "Small bowl of roasted chana with hot ginger tea (no sugar)",
  "2 slices whole grain bread with fresh cucumber, tomato & mint": "2 slices whole grain bread with fresh cucumber, tomato & mint",
  "1 small bowl steamed corn seasoned with lemon & pepper": "1 small bowl steamed corn seasoned with lemon & pepper",
  "1 bowl warm comforting khichdi tempered with cumin & 1 bowl curd": "1 bowl warm comforting khichdi tempered with cumin & 1 bowl curd",
  "2 warm phulkas with gentle bottle gourd dal & fresh salad": "2 warm phulkas with gentle bottle gourd dal & fresh salad",
  "2 phulkas with pureed spinach & fresh paneer cubes": "2 phulkas with pureed spinach & fresh paneer cubes",
  "Spiced chicken breast cooked on tawa with 1 roti & clear broth": "Spiced chicken breast cooked on tawa with 1 roti & clear broth",
  "2 eggs scrambled with onions, tomatoes & green coriander + 2 rotis": "2 eggs scrambled with onions, tomatoes & green coriander + 2 rotis",
  "1 bowl wholesome cracked wheat with vegetables & small curd": "1 bowl wholesome cracked wheat with vegetables & small curd",
  "1 fish fillet lightly spiced with turmeric & pepper + 1 roti & soup": "1 fish fillet lightly spiced with turmeric & pepper + 1 roti & soup",
  "1 soft phulka with generous light moong soup & crunchy roasted papad": "1 soft phulka with generous light moong soup & crunchy roasted papad",
  "Easy to Digest • Light & Energizing": "సులభంగా జీర్ణమవుతుంది • తేలికైన & శక్తివంతమైన",
  "Iron Rich • Wholesome & Quick": "ఐరన్ సమృద్ధిగా • సంపూర్ణ & శీఘ్ర పోషకాలు",
  "High Protein • Blood Sugar Friendly": "అధిక ప్రోటీన్ • షుగర్ రోగులకు అనుకూలం",
  "Heart Healthy • Rich in Fiber": "గుండెకు మేలు • పీచు పదార్థ సమృద్ధి",
  "Controls Sugar • Healthy Gut": "షుగర్ నియంత్రణ • జీర్ణకోశ ఆరోగ్యం",
  "High Protein • Muscle Strength": "అధిక ప్రోటీన్ • కండరాల బలం",
  "Rich in Calcium & Iron • Bone Health": "కాల్షియం & ఐరన్ • ఎముకల బలం",
  "Satisfying Home Breakfast • High Energy": "తృప్తికరమైన ఇంటి అల్పాహారం • అధిక శక్తి",
  "Natural Electrolytes • Hydrating & Cooling": "సహజ ఎలక్ట్రోలైట్లు • శరీరానికి చలువ",
  "Cools Stomach • Natural Probiotic": "కడుపుకు చలువ • సహజ ప్రోబయోటిక్",
  "Aids Digestion • High Vitamin A & C": "జీర్ణక్రియకు సహకారం • విటమిన్ ఎ & సి సమృద్ధి",
  "Very High Fiber • Sugar Safe": "అధిక పీచు పదార్థం • షుగర్‌కు సురక్షితం",
  "Brain & Memory • Good Fats for Heart": "మెదడు & జ్ఞాపకశక్తి • గుండెకు మేలు చేసే కొవ్వులు",
  "Gentle on Kidneys • Crisp & Filling": "కిడ్నీకి అనుకూలం • కడుపు నింపే ఆహారం",
  "Classic Indian Thali • Wholesome & Balanced": "సాంప్రదాయ భారతీయ భోజనం • సమతుల్య ఆహారం",
  "High Iron & Calcium • Fiber Rich": "అధిక ఐరన్ & కాల్షియం • పీచు సమృద్ధి",
  "High Vegetarian Protein • Strong Bones": "శాకాహార ప్రోటీన్ • బలమైన ఎముకలు",
  "Lean High Protein • Low Fat": "లీన్ ప్రోటీన్ • తక్కువ కొవ్వు",
  "Controls Blood Pressure • Light & Cooling": "రక్తపోటు నియంత్రణ • తేలికపాటి చలువ ఆహారం",
  "Heart Healthy • Natural Omega-3": "గుండెకు రక్షణ • సహజ ఒమేగా-3",
  "Healthy Egg Protein • Vitamin B12": "గుడ్డు ప్రోటీన్ • విటమిన్ బి12",
  "Light on Kidneys • Low Potassium & Phosphorus": "కిడ్నీకి తేలిక • తక్కువ పొటాషియం",
  "Low Sodium • Crispy & Healthy": "తక్కువ ఉప్పు • ఆరోగ్యకరమైన స్నాక్",
  "High Fiber • Keeps Sugar Stable": "అధిక పీచు • షుగర్ స్థిరంగా ఉంచుతుంది",
  "Zero Oil Crunch • Sustained Energy": "నూనె లేని స్నాక్ • స్థిరమైన శక్తి",
  "Filling & Fresh • Good Vitamins": "తాజా ఆహారం • మంచి విటమిన్లు",
  "Rich in Fiber • Heart Friendly": "పీచు సమృద్ధి • గుండెకు మేలు",
  "Very Light on Stomach • Promotes Good Sleep": "కడుపుకు చాలా తేలిక • మంచి నిద్రకు సహకారం",
  "Cooling & Light • Keeps BP Normal": "చలువ చేసే ఆహారం • బీపీ సాధారణంగా ఉంచుతుంది",
  "High Iron & Protein • Satisfying & Healthy": "అధిక ఐరన్ & ప్రోటీన్ • సంపూర్ణ ఆరోగ్యం",
  "Lean Protein • Light & No Bloating": "లీన్ ప్రోటీన్ • తేలికగా అరిగే ఆహారం",
  "Quick & Light • High Quality Protein": "త్వరిత & తేలికపాటి • ఉత్తమ ప్రోటీన్",
  "High Fiber • Controls Morning Sugar": "అధిక పీచు • ఉదయపు షుగర్ నియంత్రణ",
  "Low Sodium • Heart Safe & Lean": "తక్కువ ఉప్పు • గుండెకు సురక్షితం",
  "Very Light • Low Potassium for Kidney Care": "చాలా తేలిక • కిడ్నీ సంరక్షణకు తక్కువ పొటాషియం",
  "Sugar Friendly & High Fiber": "షుగర్ అనుకూలం • అధిక పీచు",
  "Wholesome Indian Home Diet": "సమతుల్య భారతీయ ఇంటి భోజనం",
  "Classic Indian Thali": "సాంప్రదాయ భారతీయ భోజనం",
  "CareNest - Your Personal Healthcare Companion": "కేర్‌నెస్ట్ - మీ వ్యక్తిగత ఆరోగ్య సహచరుడు",
  "CareNest": "కేర్‌నెస్ట్",
  "Healthcare Companion": "ఆరోగ్య సహచరుడు",
  "Healthcare Hub": "ఆరోగ్య కేంద్రం",
  "Your Comprehensive Personal Healthcare Companion": "మీ సమగ్ర వ్యక్తిగత ఆరోగ్య మరియు సంరక్షణ సహచరుడు",
  "Understand Hospital Discharge Documents": "ఆసుపత్రి డిశ్చార్జ్ పత్రాలను సులభంగా అర్థం చేసుకోండి",
  "Find Affordable Generic Medicine Equivalents": "సరసమైన జెనెరిక్ మందుల ప్రత్యామ్నాయాలను కనుగొనండి",
  "Medicine Reminders with Alarm & Tablet Photos": "అలారాలు మరియు టాబ్లెట్ ఫోటోలతో మందుల రిమైండర్లు",
  "Daily Diet Planner with Food Tracking & Swaps": "భారతీయ ఆహారం & నీటి ట్రాకర్‌తో రోజువారీ ఆహార ప్రణాళిక",
  "Private • Encrypted • Healthcare Standard": "వ్యక్తిగతం • ఎన్‌క్రిప్ట్ చేయబడింది • ఆరోగ్య ప్రమాణాలు",
  "Sign In": "సైన్ ఇన్ చేయండి",
  "Create Account": "ఖాతాను సృష్టించండి",
  "Instant Review Access": "త్వరిత సమీక్ష యాక్సెస్",
  "One-Click Login →": "వన్-క్లిక్ లాగిన్ →",
  "Welcome Back": "స్వాగతం",
  "Sign in to access your health dashboard and reminders.": "మీ ఆరోగ్య డ్యాష్‌బోర్డ్ మరియు మందుల రిమైండర్‌లను చూడటానికి లాగిన్ చేయండి.",
  "Email Address": "ఈమెయిల్ చిరునామా",
  "Password": "పాస్‌వర్డ్",
  "Keep me logged in on this device": "ఈ పరికరంలో నన్ను లాగిన్ చేసి ఉంచండి",
  "Sign In to CareNest": "కేర్‌నెస్ట్‌లోకి సైన్ ఇన్ చేయండి",
  "Full Name": "పూర్తి పేరు",
  "Confirm Password": "పాస్‌వర్డ్ నిర్ధారణ",
  "I agree to CareNest Health Data Terms & Privacy Policy": "నేను కేర్‌నెస్ట్ ఆరోగ్య డేటా నిబంధనలు మరియు గోప్యతా విధానానికి అంగీకరిస్తున్నాను",
  "Create CareNest Account": "కేర్‌నెస్ట్ ఖాతాను సృష్టించండి",
  "Secure • Private • Cloud Sync Ready": "సురక్షితం • వ్యక్తిగతం • క్లౌడ్ సింక్ సిద్ధంగా ఉంది",
  "Language:": "భాష:",
  "Language": "భాష",
  "Pre-filled demo:": "డెమో వివరాలు:",
  "Don't have an account?": "ఖాతా లేదా?",
  "Already have an account?": "ఇప్పటికే ఖాతా ఉందా?",
  "CareNest - Portal Selection Dashboard": "కేర్‌నెస్ట్ - పోర్టల్ ఎంపిక డ్యాష్‌బోర్డ్",
  "Patient Dashboard": "రోగి ఆరోగ్య డ్యాష్‌బోర్డ్",
  "Good Morning": "శుభోదయం",
  "Good Afternoon": "శుభ మధ్యాహ్నం",
  "Good Evening": "శుభ సాయంత్రం",
  "Welcome back": "తిరిగి స్వాగతం",
  "Profile": "ప్రొఫైల్",
  "Logout": "లాగ్ అవుట్",
  "Active Medications": "ప్రస్తుత మందులు",
  "Today's Schedule": "నేటి షెడ్యూల్",
  "Pending Doses": "పెండింగ్ మోతాదులు",
  "Upcoming Appointments": "రాబోయే అపాయింట్‌మెంట్లు",
  "Upcoming Review Appointments": "రాబోయే వైద్య సమీక్షలు",
  "Uploaded Reports & Lab Vault": "అప్‌లోడ్ చేసిన ల్యాబ్ నివేదికలు",
  "Find Lower-Cost Generic Alternatives": "తక్కువ ధర జెనెరిక్ ప్రత్యామ్నాయాలు",
  "Healthy Heart Recovery Plan": "ఆరోగ్యకరమైన గుండె రికవరీ ప్రణాళిక",
  "View Care Plan": "సంరక్షణ ప్రణాళికను చూడండి",
  "Log Today's Meal": "నేటి భోజనాన్ని నమోదు చేయండి",
  "Take Medicines": "మందులు వేసుకోండి",
  "Clinical Discharge Summary": "వైద్య డిశ్చార్జ్ సారాంశం",
  "Upload discharge papers or doctor prescriptions to extract dosing tables, dietary restrictions, and red flags.": "మందుల పట్టికలు, ఆహార నియమాలు మరియు హెచ్చరికలను పొందడానికి డిశ్చార్జ్ పత్రాలను అప్‌లోడ్ చేయండి.",
  "Prescription Pill Reminders": "ప్రిస్క్రిప్షన్ మందుల రిమైండర్లు",
  "Never miss a scheduled dose. Visual pill alarms, audio alerts, and food timing instructions.": "మోతాదును ఎప్పుడూ మరచిపోవద్దు. ఫోటో అలారాలు, ఆడియో హెచ్చరికలు మరియు సమయ సూచనలు.",
  "Indian Diet & Nutrition Planner": "భారతీయ ఆహార & పోషకాహార ప్రణాళిక",
  "Personalized Indian home meals (Idli, Poha, Khichdi, Phulka) matched to your specific health conditions.": "మీ ఆరోగ్య పరిస్థితికి సరిపోయే ఇంటి భోజనం (ఇడ్లీ, పోహా, కిచిడీ, పుల్కా) ప్రణాళిక.",
  "Secure Document Vault": "సురక్షిత డాక్యుమెంట్ వాల్ట్",
  "Store prescriptions, lab reports, ECGs, and scans safely with encrypted offline and cloud access.": "ప్రిస్క్రిప్షన్లు, ల్యాబ్ రిపోర్టులు, ఈసీజీలు మరియు స్కాన్‌లను సురక్షితంగా భద్రపరచండి.",
  "Affordable Generic Medicines": "సరసమైన జెనెరిక్ మందులు",
  "Search any branded medication to discover identical generic alternatives and save up to 80% on costs.": "సరిసమానమైన జెనెరిక్ మందులను కనుగొని ఖర్చులో 80% వరకు ఆదా చేసుకోండి.",
  "Emergency Care & Support": "అత్యవసర సంరక్షణ & సహాయం",
  "Direct contact with verified cardiologists, nephrologists, and 24x7 emergency helpline numbers.": "ధృవీకరించబడిన వైద్యులు మరియు 24x7 అత్యవసర హెల్ప్‌లైన్ నంబర్లతో ప్రత్యక్ష సంప్రదింపులు.",
  "CareNest - Indian Daily Diet & Nutrition Planner": "కేర్‌నెస్ట్ - రోజువారీ భారతీయ ఆహార & పోషకాహార ప్రణాళిక",
  "Back to Dashboard": "డ్యాష్‌బోర్డ్‌కు తిరిగి వెళ్లండి",
  "Daily Indian Diet Planner": "రోజువారీ భారతీయ ఆహార & పోషకాహార ప్రణాళిక",
  "Print Plan": "ప్రణాళికను ప్రింట్ చేయండి",
  "Personalized Daily Indian Diet & Nutrition Planner": "వ్యక్తిగతీకరించిన రోజువారీ భారతీయ ఆహార ప్రణాళిక",
  "Enter your details to generate a clinically customized daily Indian meal routine with balanced macros and kitchen remedies.": "సమతుల్య పోషకాలు మరియు వంటింటి చిట్కాలతో కూడిన రోజువారీ భారతీయ భోజన ప్రణాళిక కోసం మీ వివరాలను నమోదు చేయండి.",
  "100% Home Cooked Indian Meals": "100% ఇంట్లో వండిన భారతీయ భోజనం",
  "Local Everyday Ingredients": "స్థానికంగా లభించే నిత్య ఆహార పదార్థాలు",
  "Simple Health Terminology": "సరళమైన ఆరోగ్య వివరణలు",
  "Step 1: Your Profile & Health Target": "దశ 1: మీ ప్రొఫైల్ & ఆరోగ్య లక్ష్యం",
  "Age": "వయస్సు",
  "Gender": "లింగం",
  "Male": "పురుషుడు",
  "Female": "మహిళ",
  "Height": "ఎత్తు",
  "Height (cm)": "ఎత్తు (సెం.మీ)",
  "Weight": "బరువు",
  "Weight (kg)": "బరువు (కిలోలు)",
  "Daily Lifestyle Activity": "రోజువారీ జీవనశైలి శ్రమ",
  "Sedentary (Desk Job / Little Walking)": "శ్రమలేని (డెస్క్ జాబ్ / తక్కువ నడక)",
  "Light Active (Daily Walking / Light Chores)": "తేలికపాటి శ్రమ (రోజువారీ నడక / ఇంటి పనులు)",
  "Moderate Active (1 Hour Brisk Exercise)": "మధ్యస్థ శ్రమ (1 గంట వ్యాయామం / యోగా)",
  "Very Active (Physical Labor / Athletes)": "అధిక శ్రమ (భారీ శారీరక శ్రమ / క్రీడలు)",
  "Diet Preference": "ఆహార ప్రాధాన్యత",
  "Vegetarian (Pure Veg)": "శాకాహారం (పూర్తి శాకాహారి)",
  "Vegan (Plant Based)": "వీగన్ (మొక్కల ఆధారిత)",
  "Eggetarian (Includes Eggs)": "గుడ్లతో కూడిన శాకాహారం",
  "Non-Vegetarian (Chicken & Fish)": "మాంసాహారం (చికెన్ & చేపలు)",
  "Step 2: Medical Conditions & Health Goals": "దశ 2: వైద్య పరిస్థితులు & ఆరోగ్య లక్ష్యాలు",
  "Select all that apply to tailor foods specifically for your health safety:": "మీ ఆరోగ్య భద్రతకు అనుగుణంగా ఆహారాన్ని సిద్ధం చేయడానికి వర్తించే వాటిని ఎంచుకోండి:",
  "No Special Condition": "సాధారణ ఆరోగ్యం (ప్రత్యేక సమస్యలు లేవు)",
  "Wholesome home diet for general vitality & fitness": "సాధారణ ఆరోగ్యం మరియు ఉల్లాసం కోసం సమతుల్య ఇంటి భోజనం",
  "Type 2 Diabetes": "టైప్ 2 మధుమేహం (షుగర్)",
  "Low glycemic index foods to prevent post-meal sugar spikes": "భోజనం తర్వాత షుగర్ పెరగకుండా నియంత్రించే తక్కువ గ్లైసెమిక్ ఆహారం",
  "High Blood Pressure (BP)": "అధిక రక్తపోటు (బీపీ)",
  "DASH dietary principles with low sodium & potassium rich foods": "తక్కువ ఉప్పు, పొటాషియం సమృద్ధిగా ఉండే బీపీ నియంత్రణ ఆహారం",
  "Zero trans-fats, high soluble fiber, and heart-safe fats": "కొలెస్ట్రాల్ రహిత, అధిక పీచు మరియు గుండెకు మేలు చేసే కొవ్వులు",
  "Heart Health & Stents": "గుండె ఆరోగ్యం & స్టెంట్లు",
  "Anti-inflammatory home meals for cardiac recovery": "గుండె కోలుకోవడానికి సహకరించే తేలికపాటి ఇంటి భోజనం",
  "Metabolism balancing, selenium & iodine rich nutrition": "జీవక్రియ సమతుల్యత, సెలీనియం మరియు అయోడిన్ పోషకాహారం",
  "Chronic Kidney Disease": "కిడ్నీ రక్షణ (సీకేడీ)",
  "Controlled protein, regulated potassium & strict sodium balance": "పరిమిత ప్రొటీన్, నియంత్రిత పొటాషియం మరియు తక్కువ సోడియం",
  "Generate My Indian Diet Plan": "నా భారతీయ ఆహార ప్రణాళికను రూపొందించండి",
  "Step 3: Your Daily Indian Meal Routine": "దశ 3: మీ రోజువారీ భారతీయ భోజన ప్రణాళిక",
  "Based on your profile, here is your customized 5-meal schedule for today. Click 'Swap Dish' if you want an alternative:": "మీ ప్రొఫైల్ ఆధారంగా నేటి 5-భోజనాల షెడ్యూల్ ఇక్కడ ఉంది. వేరే వంటకం కోసం 'వంటకం మార్చండి' నొక్కండి:",
  "Wholesome Lunch (Dopahar ka Khana)": "మధ్యాహ్న భోజనం (1:00 PM – 2:00 PM)",
  "Breakfast": "ఉదయం అల్పాహారం",
  "Mid-Morning": "మధ్యాహ్నానికి ముందు",
  "Lunch": "మధ్యాహ్న భోజనం",
  "Dinner": "రాత్రి భోజనం",
  "Eaten": "తినబడింది",
  "Plan Active": "ప్రణాళిక అమలులో ఉంది",
  "Daily Water Tracker (Pani Peene ka Record)": "రోజువారీ నీటి ట్రాకర్ (నీటి రికార్డు)",
  "Tap each glass as you drink throughout the day!": "రోజంతా నీరు తాగినప్పుడల్లా గ్లాసుపై నొక్కండి!",
  "View End-of-Day Nutrition & Deficiency Report": "రోజు ముగింపు పోషకాహార & లోపాల నివేదికను చూడండి",
  "Step 4: End-of-Day Nutritional & Deficiency Report": "దశ 4: రోజు ముగింపు పోషకాహార & లోపాల నివేదిక",
  "Summary of consumed meals, nutrient coverage, and kitchen remedies for any missing vitamins:": "తీసుకున్న భోజనం, పోషకాల లభ్యత మరియు విటమిన్ల లోపాల కోసం వంటింటి చిట్కాలు:",
  "CALORIES CONSUMED": "తీసుకున్న మొత్తం క్యాలరీలు",
  "PROTEIN INTAKE": "ప్రోటీన్ పరిమాణం",
  "FIBER INTAKE": "పీచు పదార్థ పరిమాణం",
  "CALCIUM LOGGED": "కాల్షియం రికార్డు",
  "IRON & VITAMIN C": "ఐరన్ & విటమిన్ సి",
  "HYDRATION LOGGED": "నమోదైన నీటి పరిమాణం",
  "Strong bones & joints": "బలమైన ఎముకలు & కీళ్ళు",
  "Hemoglobin & stamina": "రక్తకణాలు & శక్తి",
  "Healthy gut digestion": "మంచి జీర్ణక్రియ",
  "Muscle repair & strength": "కండరాల పటుత్వం",
  "Deficiency Alerts & Kitchen Remedies": "పోషకాల లోపాలు & వంటింటి చిట్కాలు",
  "Save Today's Report to CareNest Profile": "నేటి నివేదికను ప్రొఫైల్‌లో భద్రపరచండి",
  "Skipped Meals Today:": "ఈరోజు తప్పిపోయిన భోజనం:",
  "How Did You Feel Today? (Hunger Recalibrator)": "ఈరోజు మీకు ఎలా అనిపించింది? (ఆకలి రీకాలిబ్రేటర్)",
  "I was still very hungry (Add +250 kcal snacks tomorrow)": "నాకు ఇంకా చాలా ఆకలిగా ఉంది (రేపు +250 క్యాలరీల స్నాక్ జోడించండి)",
  "I felt completely satisfied and energetic (Maintain plan)": "నేను పూర్తిగా సంతృప్తిగా, ఉత్సాహంగా ఉన్నాను (ప్రణాళిక కొనసాగించండి)",
  "I felt too full / heavy (Reduce -150 kcal tomorrow)": "కడుపు చాలా నిండుగా/బరువుగా ఉంది (రేపు -150 క్యాలరీలు తగ్గించండి)",
  "Recalibrate Tomorrow's Diet": "రేపటి ఆహార ప్రణాళికను సర్దుబాటు చేయండి",
  "CareNest - Medicine Reminders & Tablet Alarms": "కేర్‌నెస్ట్ - మందుల రిమైండర్లు & అలారాలు",
  "Medicine Reminders & Tablet Alarms": "మందుల రిమైండర్లు & టాబ్లెట్ అలారాలు",
  "+ Add Medicine & Tablet Photo": "+ కొత్త మందు & ఫోటోను జోడించండి",
  "Prescription Dosing Schedule & Visual Alarms": "మందుల షెడ్యూల్ & దృశ్య అలారాలు",
  "Never miss a dose. Track medications by exact administration times, preview verified tablet photos, and test the realistic audible alarm with pill visuals.": "మోతాదును ఎప్పుడూ మరచిపోవద్దు. ఖచ్చితమైన సమయాలను ట్రాక్ చేయండి, టాబ్లెట్ ఫోటోలను చూడండి మరియు అలారంలను తనిఖీ చేయండి.",
  "Medications Tracked": "ట్రాక్ చేయబడుతున్న మందులు",
  "Upcoming Next Dose": "రాబోయే తదుపరి మోతాదు",
  "Overall Adherence Rate": "మందులు తీసుకున్న సమయపాలన",
  "Upcoming Doses": "రాబోయే మోతాదులు",
  "Taken Today": "ఈరోజు తీసుకున్నవి",
  "Missed Doses": "తప్పిపోయిన మోతాదులు",
  "Medicine Name": "మందు పేరు",
  "Dosage": "మోతాదు",
  "Frequency": "తరచుదనం",
  "Timing": "సమయం",
  "Food Relation": "ఆహార సంబంధం",
  "Before Food": "భోజనానికి ముందు",
  "After Food": "భోజనం తర్వాత",
  "With Food": "భోజనంతో పాటు",
  "Take Dose": "మందు తీసుకోండి",
  "Mark Taken": "మందు తీసుకున్నారు",
  "Pending": "పెండింగ్",
  "Taken": "పూర్తయింది",
  "Missed": "మిస్సయింది",
  "CareNest - Medical Document Vault": "కేర్‌నెస్ట్ - వైద్య రికార్డుల వాల్ట్",
  "Medical Document Vault": "వైద్య రికార్డుల వాల్ట్",
  "📥 Export CSV": "📥 సీఎస్‌వీ ఎగుమతి",
  "+ Upload File": "+ పత్రాన్ని అప్‌లోడ్ చేయండి",
  "Upload Medical Record": "వైద్య రికార్డును అప్‌లోడ్ చేయండి",
  "All Documents": "అన్ని పత్రాలు",
  "Prescriptions": "డాక్టర్ ప్రిస్క్రిప్షన్లు",
  "Discharge Summaries": "డిశ్చార్జ్ సారాంశాలు",
  "Lab Reports": "ల్యాబ్ పరీక్ష నివేదికలు",
  "Scans & Imaging": "స్కాన్లు మరియు ఎక్స్-రేలు",
  "Drag and drop your medical files here or click to browse": "మీ వైద్య ఫైళ్ళను ఇక్కడ లాగి వదలండి లేదా బ్రౌజ్ చేయండి",
  "Generic Medicine Finder | CareNest": "జెనెరిక్ మందుల శోధన | కేర్‌నెస్ట్",
  "Generic Medicine Finder": "జెనెరిక్ మందుల శోధన",
  "Bioequivalent Savings Portal": "సరసమైన మందుల పొదుపు పోర్టల్",
  "Search branded medicines to discover approved, bio-equivalent generic alternatives at up to 80% lower cost.": "80% వరకు తక్కువ ధరలో ఆమోదించబడిన జెనెరిక్ ప్రత్యామ్నాయాలను కనుగొనడానికి బ్రాండెడ్ మందులను శోధించండి.",
  "Search by brand or salt name...": "బ్రాండ్ లేదా సాల్ట్ పేరుతో శోధించండి...",
  "Search Medicines": "మందులను శోధించండి",
  "Generic Substitutes": "జెనెరిక్ ప్రత్యామ్నాయాలు",
  "Manufacturer": "తయారీదారు",
  "Price Comparison": "ధరల పోలిక",
  "Savings": "పొదుపు"
};

  function getCurrentLanguage() {
    let lang = localStorage.getItem(STORAGE_KEY) || 'en';
    if (!SUPPORTED_LANGS.includes(lang)) lang = 'en';
    return lang;
  }

  // --- Dynamic Regex Template Matchers for Compound Sentences & Units ---
  function applyDynamicTemplates(text, lang) {
    if (lang === 'en') return text;

    if (lang === 'hi') {
      text = text.replace(/Custom Indian Diet Plan for/gi, 'अनुकूलित भारतीय आहार योजना -');
      text = text.replace(/Daily Total:\s*~?(\d+)\s*kcal/gi, 'दैनिक कुल: ~$1 कैलोरी');
      text = text.replace(/Daily Total:/gi, 'दैनिक कुल:');
      text = text.replace(/Portion:\s*/gi, 'मात्रा: ');
      text = text.replace(/Target:\s*(\d+)\s*Glasses\s*\(([\d,]+)\s*ml\)/gi, 'लक्ष्य: $1 गिलास ($2 मिली)');
      text = text.replace(/(\d+)\s*\/\s*(\d+)\s*Glasses\s*\(([\d,]+)\s*ml\)/gi, '$1 / $2 गिलास ($3 मिली)');
      text = text.replace(/(\d+)\s*of\s*(\d+)\s*Glasses\s*consumed/gi, '$1 / $2 गिलास पीया गया');
      text = text.replace(/(\d+)\s*Glasses/gi, '$1 गिलास');
      text = text.replace(/~?(\d+)\s*kcal/gi, '~$1 कैलोरी');
      text = text.replace(/(\d+)\s*g\s*protein/gi, '$1 ग्राम प्रोटीन');
      text = text.replace(/(\d+)\s*g\s*carbs/gi, '$1 ग्राम कार्ब्स');
      text = text.replace(/(\d+)\s*g\s*fat/gi, '$1 ग्राम वसा');
      text = text.replace(/(\d+)\s*g\s*fiber/gi, '$1 ग्राम फाइबर');
      text = text.replace(/(\d+)\s*pcs/gi, '$1 पीस');
      text = text.replace(/Mark as Eaten/gi, 'खाया गया दर्ज करें');
      text = text.replace(/✓ Eaten/gi, '✓ खा लिया');
      text = text.replace(/Swap Dish/gi, 'व्यंजन बदलें');
    } else if (lang === 'te') {
      text = text.replace(/Custom Indian Diet Plan for/gi, 'ప్రత్యేక భారతీయ ఆహార ప్రణాళిక -');
      text = text.replace(/Daily Total:\s*~?(\d+)\s*kcal/gi, 'రోజువారీ మొత్తం: ~$1 క్యాలరీలు');
      text = text.replace(/Daily Total:/gi, 'రోజువారీ మొత్తం:');
      text = text.replace(/Portion:\s*/gi, 'పరిమాణం: ');
      text = text.replace(/Target:\s*(\d+)\s*Glasses\s*\(([\d,]+)\s*ml\)/gi, 'లక్ష్యం: $1 గ్లాసులు ($2 మి.లీ)');
      text = text.replace(/(\d+)\s*\/\s*(\d+)\s*Glasses\s*\(([\d,]+)\s*ml\)/gi, '$1 / $2 గ్లాసులు ($3 మి.లీ)');
      text = text.replace(/(\d+)\s*of\s*(\d+)\s*Glasses\s*consumed/gi, '$1 / $2 గ్లాసులు తాగబడింది');
      text = text.replace(/(\d+)\s*Glasses/gi, '$1 గ్లాసులు');
      text = text.replace(/~?(\d+)\s*kcal/gi, '~$1 క్యాలరీలు');
      text = text.replace(/(\d+)\s*g\s*protein/gi, '$1 గ్రా ప్రోటీన్');
      text = text.replace(/(\d+)\s*g\s*carbs/gi, '$1 గ్రా కార్బోహైడ్రేట్లు');
      text = text.replace(/(\d+)\s*g\s*fat/gi, '$1 గ్రా కొవ్వు');
      text = text.replace(/(\d+)\s*g\s*fiber/gi, '$1 గ్రా పీచు');
      text = text.replace(/(\d+)\s*pcs/gi, '$1 ముక్కలు');
      text = text.replace(/Mark as Eaten/gi, 'తిన్నట్లు గుర్తించండి');
      text = text.replace(/✓ Eaten/gi, '✓ పూర్తయింది');
      text = text.replace(/Swap Dish/gi, 'వంటకం మార్చండి');
    }

    return text;
  }

  // --- Core Recursive DOM Translator ---
  let isTranslating = false;

  function translateDomNodes(rootNode, lang) {
    if (!rootNode || isTranslating) return;
    isTranslating = true;

    try {
      const isEnglish = (lang === 'en');
      const sortedEntries = (lang === 'hi') ? SORTED_HI : (lang === 'te' ? SORTED_TE : []);
      const dictMap = (lang === 'hi') ? DICT_HI_MAP : (lang === 'te' ? DICT_TE_MAP : {});

      // 1. Text Nodes Walker
      const walker = document.createTreeWalker(
        rootNode,
        NodeFilter.SHOW_TEXT,
        {
          acceptNode: function (node) {
            const parent = node.parentElement;
            if (!parent) return NodeFilter.FILTER_REJECT;
            if (['SCRIPT', 'STYLE', 'CODE', 'PRE'].includes(parent.tagName)) return NodeFilter.FILTER_REJECT;
            if (parent.closest && (parent.closest('#carenest-lang-toggle') || parent.closest('.carenest-lang-toggle'))) {
              return NodeFilter.FILTER_REJECT;
            }
            if (!node.nodeValue || !node.nodeValue.trim()) return NodeFilter.FILTER_REJECT;
            return NodeFilter.FILTER_ACCEPT;
          }
        },
        false
      );

      let textNode;
      while ((textNode = walker.nextNode())) {
        if (!textNode.__carenest_orig) {
          textNode.__carenest_orig = textNode.nodeValue;
        }

        if (isEnglish) {
          if (textNode.__carenest_orig) {
            textNode.nodeValue = textNode.__carenest_orig;
          }
        } else {
          const original = textNode.__carenest_orig.trim();

          // A: Exact Match
          if (dictMap[original]) {
            textNode.nodeValue = textNode.__carenest_orig.replace(original, dictMap[original]);
          } else {
            // B: Phrase Matching in order of descending phrase length
            let current = textNode.__carenest_orig;
            let replaced = false;

            for (let i = 0; i < sortedEntries.length; i++) {
              const [enKey, trVal] = sortedEntries[i];
              if (enKey.length >= 2 && current.includes(enKey)) {
                current = current.split(enKey).join(trVal);
                replaced = true;
              }
            }

            // C: Dynamic Templates
            const templated = applyDynamicTemplates(current, lang);
            if (templated !== textNode.__carenest_orig || replaced) {
              textNode.nodeValue = templated;
            }
          }
        }
      }

      // 2. Select Options & Form Elements
      const options = (rootNode.querySelectorAll ? rootNode : document).querySelectorAll('option');
      options.forEach(opt => {
        if (!opt.__carenest_orig) opt.__carenest_orig = opt.innerText;
        if (isEnglish) {
          opt.innerText = opt.__carenest_orig;
        } else {
          const trimmed = opt.__carenest_orig.trim();
          if (dictMap[trimmed]) {
            opt.innerText = dictMap[trimmed];
          }
        }
      });

      // 3. Placeholders, Titles & Buttons
      const inputs = (rootNode.querySelectorAll ? rootNode : document).querySelectorAll('input[placeholder], textarea[placeholder], button[title], div[title], button');
      inputs.forEach(el => {
        if (el.closest && (el.closest('#carenest-lang-toggle') || el.closest('.carenest-lang-toggle'))) return;

        if (el.placeholder) {
          if (!el.__carenest_orig_ph) el.__carenest_orig_ph = el.placeholder;
          if (isEnglish) {
            el.placeholder = el.__carenest_orig_ph;
          } else if (dictMap[el.__carenest_orig_ph.trim()]) {
            el.placeholder = dictMap[el.__carenest_orig_ph.trim()];
          }
        }

        if (el.title) {
          if (!el.__carenest_orig_title) el.__carenest_orig_title = el.title;
          if (isEnglish) {
            el.title = el.__carenest_orig_title;
          } else if (dictMap[el.__carenest_orig_title.trim()]) {
            el.title = dictMap[el.__carenest_orig_title.trim()];
          }
        }

        // Direct button text
        if (el.tagName === 'BUTTON' && el.children.length === 0) {
          if (!el.__carenest_orig_btn) el.__carenest_orig_btn = el.innerText;
          if (isEnglish) {
            el.innerText = el.__carenest_orig_btn;
          } else {
            const btnTrimmed = el.__carenest_orig_btn.trim();
            if (dictMap[btnTrimmed]) {
              el.innerText = dictMap[btnTrimmed];
            }
          }
        }
      });

    } finally {
      isTranslating = false;
    }
  }

  // --- Export Global Helper for Dynamic Pages ---
  window.applyCareNestTranslations = function () {
    const lang = getCurrentLanguage();
    if (lang !== 'en') {
      translateDomNodes(document.body, lang);
    }
  };

  // --- Global Language Switch Function ---
  window.changeCareNestLanguage = function (lang) {
    if (!SUPPORTED_LANGS.includes(lang)) lang = 'en';
    localStorage.setItem(STORAGE_KEY, lang);

    document.querySelectorAll('.carenest-lang-toggle .lang-opt').forEach(btn => {
      if (btn.getAttribute('data-lang') === lang) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });

    translateDomNodes(document.body, lang);
    window.dispatchEvent(new CustomEvent('carenest_lang_changed', { detail: { lang } }));
  };

  // --- Toggle UI & Styles ---
  function injectStyles() {
    if (document.getElementById('carenest-lang-styles')) return;
    const style = document.createElement('style');
    style.id = 'carenest-lang-styles';
    style.innerHTML = `
      .carenest-lang-toggle {
        display: inline-flex;
        align-items: center;
        background: #f1f5f9;
        padding: 3px 5px;
        border-radius: 24px;
        border: 1.5px solid #cbd5e1;
        box-shadow: 0 1px 4px rgba(0, 0, 0, 0.06);
        font-family: inherit;
        user-select: none;
        vertical-align: middle;
        margin: 0 6px;
        z-index: 100;
      }
      .carenest-lang-toggle .lang-globe {
        font-size: 14px;
        margin: 0 4px 0 5px;
        opacity: 0.9;
      }
      .carenest-lang-toggle .lang-opt {
        border: none;
        background: transparent;
        padding: 5px 12px;
        border-radius: 18px;
        font-size: 12px;
        font-weight: 700;
        color: #475569;
        cursor: pointer;
        transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
        outline: none;
        letter-spacing: 0.02em;
        line-height: 1;
      }
      .carenest-lang-toggle .lang-opt:hover {
        color: #0d7377;
        background: rgba(13, 115, 119, 0.08);
      }
      .carenest-lang-toggle .lang-opt.active {
        background: #0d7377;
        color: #ffffff;
        box-shadow: 0 2px 8px rgba(13, 115, 119, 0.35);
      }
      .auth-lang-banner {
        display: flex;
        align-items: center;
        justify-content: flex-end;
        width: 100%;
        max-width: 440px;
        margin: 0 auto 18px;
        gap: 8px;
      }
      .auth-lang-banner-label {
        font-size: 13px;
        font-weight: 700;
        color: #475569;
      }
      .carenest-lang-floating {
        position: fixed;
        bottom: 24px;
        right: 24px;
        z-index: 99999;
        background: #ffffff;
        border-radius: 30px;
        padding: 5px 6px;
        box-shadow: 0 10px 28px rgba(0, 0, 0, 0.2);
        border: 2px solid #0d7377;
      }
    `;
    document.head.appendChild(style);
  }

  function createToggleElement(extraId) {
    const curLang = getCurrentLanguage();
    const div = document.createElement('div');
    div.className = 'carenest-lang-toggle';
    if (extraId) div.id = extraId;
    div.setAttribute('title', 'Change Language / भाषा बदलें / భాష మార్చండి');
    div.innerHTML = `
      <span class="lang-globe">🌐</span>
      <button type="button" class="lang-opt ${curLang === 'en' ? 'active' : ''}" data-lang="en" onclick="changeCareNestLanguage('en')">EN</button>
      <button type="button" class="lang-opt ${curLang === 'hi' ? 'active' : ''}" data-lang="hi" onclick="changeCareNestLanguage('hi')">हिन्दी</button>
      <button type="button" class="lang-opt ${curLang === 'te' ? 'active' : ''}" data-lang="te" onclick="changeCareNestLanguage('te')">తెలుగు</button>
    `;
    return div;
  }

  function mountLanguageToggle() {
    injectStyles();

    if (document.getElementById('carenest-lang-toggle')) return;

    // Login screen mount
    const authMountTarget = document.getElementById('auth-lang-mount');
    if (authMountTarget) {
      const toggle = createToggleElement('carenest-lang-toggle');
      authMountTarget.appendChild(toggle);
      return;
    }

    const authFormSide = document.querySelector('.auth-form-side');
    const authTabs = document.querySelector('.auth-switch-tabs');
    if (authFormSide && authTabs) {
      const banner = document.createElement('div');
      banner.className = 'auth-lang-banner';
      banner.innerHTML = `<span class="auth-lang-banner-label">🌐 Language:</span>`;
      const toggle = createToggleElement('carenest-lang-toggle');
      banner.appendChild(toggle);
      authFormSide.insertBefore(banner, authTabs);
      return;
    }

    // Standard Portal Headers
    const toggle = createToggleElement('carenest-lang-toggle');
    const mountTargets = [
      document.querySelector('.portal-header-right'),
      document.querySelector('.topbar-actions'),
      document.querySelector('.topbar-right'),
      document.querySelector('.topbar-container'),
      document.querySelector('.portal-topbar-inner .topbar-right'),
      document.querySelector('.portal-header')
    ];

    let mounted = false;
    for (const target of mountTargets) {
      if (target) {
        if (target.firstChild) {
          target.insertBefore(toggle, target.firstChild);
        } else {
          target.appendChild(toggle);
        }
        mounted = true;
        break;
      }
    }

    if (!mounted) {
      toggle.classList.add('carenest-lang-floating');
      document.body.appendChild(toggle);
    }
  }

  // Dynamic MutationObserver to translate any newly inserted cards
  function initDynamicObserver() {
    const observer = new MutationObserver((mutations) => {
      const curLang = getCurrentLanguage();
      if (curLang === 'en') return;

      for (const m of mutations) {
        if (m.type === 'childList') {
          m.addedNodes.forEach(node => {
            if (node.nodeType === Node.ELEMENT_NODE) {
              translateDomNodes(node, curLang);
            }
          });
        }
      }
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true
    });
  }

  function init() {
    mountLanguageToggle();
    initDynamicObserver();

    const curLang = getCurrentLanguage();
    if (curLang !== 'en') {
      setTimeout(() => {
        translateDomNodes(document.body, curLang);
      }, 50);
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
