// ====================== MENU DATA (AR/EN) ======================
const menuData = [
  // ===== ريزو و فرايز و رول =====
  { id: 1, name: "ريزو شيدر", name_en: "Rizzo Cheddar", price: 80, cat: "rizzo", img: "images/1.png", desc: "ريزو بالجبنة الشيدر", desc_en: "Rizzo topped with cheddar cheese" },
  { id: 2, name: "ريزو باربكيو", name_en: "Rizzo BBQ", price: 80, cat: "rizzo", img: "images/1.png", desc: "ريزو بصوص الباربكيو", desc_en: "Rizzo with BBQ sauce" },
  { id: 3, name: "ريزو رانش", name_en: "Rizzo Ranch", price: 80, cat: "rizzo", img: "images/1.png", desc: "ريزو بصوص الرانش", desc_en: "Rizzo with ranch sauce" },
  { id: 4, name: "ريزو هاليبينو", name_en: "Rizzo Jalapeño", price: 80, cat: "rizzo", img: "images/1.png", desc: "ريزو بالهاليبينو الحار", desc_en: "Rizzo with spicy jalapeños" },
  { id: 5, name: "فرايز اتشيز", name_en: "Cheese Fries", price: 55, cat: "rizzo",  img: "images/7.png", desc: "بطاطس مقلية بالجبنة", desc_en: "Crispy fries topped with cheese" },
  { id: 6, name: "فرايز اتشيز زنجر", name_en: "Cheese Zinger Fries", price: 80, cat: "rizzo", img: "images/7.png", desc: "بطاطس بالجبنة والزنجر", desc_en: "Fries topped with cheese and zinger chicken" },
  { id: 7, name: "فرايز اتشيز بيف", name_en: "Cheese Beef Fries", price: 80, cat: "rizzo",  img: "images/7.png", desc: "بطاطس بالجبنة واللحم", desc_en: "Fries topped with cheese and beef" },
  { id: 8, name: "فرايز رول", name_en: "Fries Roll", price: 55, cat: "rizzo",  img: "images/10.png", desc: "رول بالبطاطس", desc_en: "Roll filled with crispy fries" },
  { id: 9, name: "اتشكانو رول", name_en: "Chicano Roll", price: 85, cat: "rizzo", img: "images/10.png", desc: "رول تشيكن", desc_en: "Chicken roll" },
  { id: 10, name: "فاهيتا رول", name_en: "Fajita Roll", price: 85, cat: "rizzo", img: "images/10.png", desc: "رول فاهيتا", desc_en: "Fajita-filled roll" },

  // ===== برجر =====
  { id: 11, name: "انشكانو برجر", name_en: "Anshikano Burger", price: 100, cat: "burgers", img: "images/11.png", desc: "Single / Double 150 / Triple 180", desc_en: "Single / Double 150 / Triple 180", sizes: [{n:"Single",p:100},{n:"Double",p:150},{n:"Triple",p:180}] },
  { id: 12, name: "رانشيلو برجر", name_en: "Ranchilo Burger", price: 120, cat: "burgers", img: "images/12.png", desc: "Single / Double 160 / Triple 210", desc_en: "Single / Double 160 / Triple 210", sizes: [{n:"Single",p:120},{n:"Double",p:160},{n:"Triple",p:210}] },
  { id: 13, name: "إيطاليانو برجر", name_en: "Italiano Burger", price: 125, cat: "burgers", img: "images/13.png", desc: "Single / Double 170 / Triple 220", desc_en: "Single / Double 170 / Triple 220", sizes: [{n:"Single",p:125},{n:"Double",p:170},{n:"Triple",p:220}] },
  { id: 14, name: "اتشكن إستكس", name_en: "Chicken Steaks Burger", price: 135, cat: "burgers", img: "images/14.png", desc: "Single / Double 180 / Triple 230", desc_en: "Single / Double 180 / Triple 230", sizes: [{n:"Single",p:135},{n:"Double",p:180},{n:"Triple",p:230}] },
  { id: 15, name: "سماش كلاسيك", name_en: "Smash Classic", price: 100, cat: "burgers",  img: "images/15.png", desc: "Single / Double 145 / Triple 180", desc_en: "Single / Double 145 / Triple 180", sizes: [{n:"Single",p:100},{n:"Double",p:145},{n:"Triple",p:180}] },
  { id: 16, name: "بيفكو سماش", name_en: "Beefco Smash", price: 135, cat: "burgers", img: "images/16.png", desc: "Single / Double 175 / Triple 230", desc_en: "Single / Double 175 / Triple 230", sizes: [{n:"Single",p:135},{n:"Double",p:175},{n:"Triple",p:230}] },
  { id: 17, name: "سموكي سماش", name_en: "Smoky Smash", price: 120, cat: "burgers", img: "images/17.png", desc: "Single / Double 160 / Triple 210", desc_en: "Single / Double 160 / Triple 210", sizes: [{n:"Single",p:120},{n:"Double",p:160},{n:"Triple",p:210}] },
  { id: 18, name: "إستكسو سماش", name_en: "Steakso Smash", price: 125, cat: "burgers", img: "images/18.png", desc: "Single / Double 155 / Triple 200", desc_en: "Single / Double 155 / Triple 200", sizes: [{n:"Single",p:125},{n:"Double",p:155},{n:"Triple",p:200}] },
  { id: 19, name: "زنجر راون", name_en: "Zinger Round", price: 130, cat: "burgers", img: "images/19.png", desc: "مع فرايز وكولا", desc_en: "With fries and cola" },

  // ===== مكرونات =====
  { id: 20, name: "مكرونة باستا / إسباجتي", name_en: "Pasta / Spaghetti", price: 130, cat: "macaroni", img: "images/20.png", desc: "لحمة - فراخ - جمبري - خضار | وايت / ريد / موناليزا", desc_en: "Beef - Chicken - Shrimp - Vegetables | White / Red / Mona Lisa sauce" },
  { id: 21, name: "مكرونة نجرسكو فرن", name_en: "Baked Negresco Pasta", price: 130, cat: "macaroni", img: "images/21.png", desc: "طاجن مكرونة بشاميل | وايت / ريد صوص", desc_en: "Baked pasta casserole with béchamel | White / Red sauce" },

  // ===== بيتزا =====
  { id: 22, name: "بيتزا مارجريتا", name_en: "Margherita Pizza", price: 105, cat: "pizza", img: "images/22.png", desc: "Single 105 / Double 135 / Triple 175", desc_en: "Single 105 / Double 135 / Triple 175", sizes: [{n:"Single",p:105},{n:"Double",p:135},{n:"Triple",p:175}] },
  { id: 23, name: "بيتزا فاهيتا", name_en: "Fajita Pizza", price: 135, cat: "pizza", img: "images/23.png", desc: "Single 135 / Double 175 / Triple 235", desc_en: "Single 135 / Double 175 / Triple 235", sizes: [{n:"Single",p:135},{n:"Double",p:175},{n:"Triple",p:235}] },
  { id: 24, name: "بيتزا لحمة", name_en: "Beef Pizza", price: 135, cat: "pizza", img: "images/24.png", desc: "Single 135 / Double 175 / Triple 235", desc_en: "Single 135 / Double 175 / Triple 235", sizes: [{n:"Single",p:135},{n:"Double",p:175},{n:"Triple",p:235}] },
  { id: 25, name: "بيتزا سجق", name_en: "Sausage Pizza", price: 135, cat: "pizza",img: "images/25.png", desc: "Single 135 / Double 175 / Triple 195", desc_en: "Single 135 / Double 175 / Triple 195", sizes: [{n:"Single",p:135},{n:"Double",p:175},{n:"Triple",p:195}] },
  { id: 26, name: "بيتزا تونة", name_en: "Tuna Pizza", price: 135, cat: "pizza", img: "images/26.png", desc: "Single 135 / Double 175 / Triple 215", desc_en: "Single 135 / Double 175 / Triple 215", sizes: [{n:"Single",p:135},{n:"Double",p:175},{n:"Triple",p:215}] },
  { id: 27, name: "بيتزا جمبريكا", name_en: "Shrimp Pizza", price: 185, cat: "pizza", img: "images/27.png", desc: "Single 185 / Double 265 / Triple 315", desc_en: "Single 185 / Double 265 / Triple 315", sizes: [{n:"Single",p:185},{n:"Double",p:265},{n:"Triple",p:315}] },
  { id: 28, name: "بيتزا تشيكن زنجر", name_en: "Chicken Zinger Pizza", price: 145, cat: "pizza",img: "images/28.png", desc: "Single 145 / Double 175 / Triple 235", desc_en: "Single 145 / Double 175 / Triple 235", sizes: [{n:"Single",p:145},{n:"Double",p:175},{n:"Triple",p:235}] },
  { id: 29, name: "بيتزا مكس فراخ", name_en: "Mix Chicken Pizza", price: 155, cat: "pizza", img: "images/29.png", desc: "Single 155 / Double 185 / Triple 265", desc_en: "Single 155 / Double 185 / Triple 265", sizes: [{n:"Single",p:155},{n:"Double",p:185},{n:"Triple",p:265}] },
  { id: 30, name: "بيتزا مكس لحوم", name_en: "Mix Meat Pizza", price: 155, cat: "pizza", img: "images/30.png", desc: "Single 155 / Double 185 / Triple 265", desc_en: "Single 155 / Double 185 / Triple 265", sizes: [{n:"Single",p:155},{n:"Double",p:185},{n:"Triple",p:265}] },
  { id: 31, name: "بيتزا شق أبو العربي", name_en: "Abu El-Araby Special Pizza", price: 315, cat: "pizza",img: "images/31.png", desc: "حجم كبير مميز", desc_en: "Large special size" },
  { id: 32, name: "بيتزا هوت دوق", name_en: "Hot Dog Pizza", price: 145, cat: "pizza",img: "images/32.png", desc: "Single 145 / Double 175 / Triple 195", desc_en: "Single 145 / Double 175 / Triple 195", sizes: [{n:"Single",p:145},{n:"Double",p:175},{n:"Triple",p:195}] },
  { id: 33, name: "بيتزا فاهيتا سلامى ", name_en: "Fajita Salami Pizza", price: 145, cat: "pizza",img: "images/33.png ", desc: "Single 145 / Double 175 / Triple 235", desc_en: "Single 145 / Double 175 / Triple 235", sizes: [{n:"Single",p:145},{n:"Double",p:175},{n:"Triple",p:235}] },
  { id: 34, name: "بيتزا بيف سلامى ", name_en: "Beef Salami Pizza", price: 155, cat: "pizza",img: "images/34.png", desc: "Single 155 / Double 175 / Triple 235", desc_en: "Single 155 / Double 175 / Triple 235", sizes: [{n:"Single",p:155},{n:"Double",p:175},{n:"Triple",p:235}] },
  { id: 35, name: "بيتزا نص رانش ونص تشيز p.f.c", name_en: "Half Ranch Half Cheese P.F.C Pizza", price: 165, cat: "pizza", img: "images/35.png", desc: "Single 165 / Double 215 / Triple 245", desc_en: "Single 165 / Double 215 / Triple 245", sizes: [{n:"Single",p:165},{n:"Double",p:215},{n:"Triple",p:245}] },
  { id: 36, name: "حشو اطراف جبنه_ فراخ_ لحوم", name_en: "Stuffed Crust Cheese/Chicken/Beef Pizza", price: 115, cat: "pizza", img: "images/36.png", desc: "حجم كبير مميز", desc_en: "Large special size" },

  // ===== فطائر و كريبات =====
  { id: 37, name: "كريب مكس جبن", name_en: "Mix Cheese Crepe", price: 65, cat: "pastries",  img: "images/37.png", desc: "Single 65 / Double 95", desc_en: "Single 65 / Double 95", sizes: [{n:"Single",p:65},{n:"Double",p:95}] },
  { id: 38, name: "كريب بانية", name_en: "Crispy Breaded Crepe", price: 70, cat: "pastries",  img: "images/38.png", desc: "Single 70 / Double 100", desc_en: "Single 70 / Double 100", sizes: [{n:"Single",p:70},{n:"Double",p:100}] },
  { id: 39, name: "كريب فرايز", name_en: "Fries Crepe", price: 70, cat: "pastries",  img: "images/45.png", desc: "Single 70 / Double 100", desc_en: "Single 70 / Double 100", sizes: [{n:"Single",p:70},{n:"Double",p:100}] },
  { id: 40, name: "كريب كريسبي", name_en: "Crispy Crepe", price: 90, cat: "pastries",  img: "images/40.png", desc: "Single 90 / Double 115", desc_en: "Single 90 / Double 115", sizes: [{n:"Single",p:90},{n:"Double",p:115}] },
  { id: 41, name: "كريب زنجر", name_en: "Zinger Crepe", price: 105, cat: "pastries", img: "images/41.png", desc: "Single 105 / Double 135", desc_en: "Single 105 / Double 135", sizes: [{n:"Single",p:105},{n:"Double",p:135}] },
  { id: 42, name: "كريب اتشكانو رانش", name_en: "Chicano Ranch Crepe", price: 115, cat: "pastries",img: "images/42.png" , desc: "Single 115 / Double 145", desc_en: "Single 115 / Double 145", sizes: [{n:"Single",p:105},{n:"Double",p:135}] },
  { id: 43, name: "كريب اتشكانو تشيز", name_en: "Chicano Cheese Crepe", price: 105, cat: "pastries",img: "images/43.png" , desc: "Single 105 / Double 135", desc_en: "Single 105 / Double 135", sizes: [{n:"Single",p:105},{n:"Double",p:135}] },
  { id: 44, name: "كريب مكس فراخ", name_en: "Mix Chicken Crepe", price: 215, cat: "pastries", img: "images/44.png", desc: "Single 215 / Double 265", desc_en: "Single 215 / Double 265", sizes: [{n:"Single",p:215},{n:"Double",p:265}] },
  { id: 45, name: "كريب فرايداتشكن", name_en: "Fried Chicken Crepe", price: 65, cat: "pastries", img: "images/45.png", desc: "Single 65 / Double 95", desc_en: "Single 65 / Double 95", sizes: [{n:"Single",p:65},{n:"Double",p:95}] },
  { id: 46, name: "كريب شاورما فراخ", name_en: "Chicken Shawarma Crepe", price: 90, cat: "pastries", img: "images/46.png", desc: "Single 90 / Double 115", desc_en: "Single 90 / Double 115", sizes: [{n:"Single",p:90},{n:"Double",p:115}] },
  { id: 47, name: "كريب لحمه", name_en: "Beef Crepe", price: 105, cat: "pastries", img: "images/47.png", desc: "Single 105 / Double 135", desc_en: "Single 105 / Double 135", sizes: [{n:"Single",p:105},{n:"Double",p:135}] },
  { id: 48, name: "كريب مكس كرسبى", name_en: "Mix Crispy Crepe", price: 215, cat: "pastries", img: "images/48.png", desc: "Single 215 / Double 265", desc_en: "Single 215 / Double 265", sizes: [{n:"Single",p:215},{n:"Double",p:265}] },
  { id: 49, name: "كريب مكس لحوم", name_en: "Mix Meat Crepe", price: 165, cat: "pastries", img: "images/49.png", desc: "Single 165 / Double 235", desc_en: "Single 165 / Double 235", sizes: [{n:"Single",p:165},{n:"Double",p:235}] },
  { id: 50, name: "كريب كونو", name_en: "Cono Crepe", price: 95, cat: "pastries", img: "images/50.png", desc: "Single 95 / Double 165", desc_en: "Single 95 / Double 165", sizes: [{n:"Single",p:95},{n:"Double",p:165}] },
  { id: 51, name: "كريب p.f.c", name_en: "P.F.C Crepe", price: 145, cat: "pastries", img: "images/51.png", desc: "Single 145 / Double 185", desc_en: "Single 145 / Double 185", sizes: [{n:"Single",p:145},{n:"Double",p:185}] },
  { id: 52, name: " فطيرة مكس جبن", name_en: "Mix Cheese Pie", price: 145, cat: "pastries", img: "images/52.png", desc: "Single 145 / Double 185", desc_en: "Single 145 / Double 185", sizes: [{n:"Single",p:145},{n:"Double",p:185}] },
  { id: 53, name: "فطيرة زنجر", name_en: "Zinger Pie", price: 145, cat: "pastries", img: "images/54.png", desc: "Single 145 / Double 195", desc_en: "Single 145 / Double 195", sizes: [{n:"Single",p:145},{n:"Double",p:195}] },
  { id: 54, name: "فطيرة فاهيتا ", name_en: "Fajita Pie", price: 115, cat: "pastries", img: "images/54.png", desc: "Single 115 / Double 165", desc_en: "Single 115 / Double 165", sizes: [{n:"Single",p:115},{n:"Double",p:165}] },
  { id: 55, name: "فطيرة لحمه", name_en: "Beef Pie", price: 115, cat: "pastries",img:  "images/55.png", desc: "Single 115 / Double 165", desc_en: "Single 115 / Double 165", sizes: [{n:"Single",p:115},{n:"Double",p:165}] },
  { id: 56, name: "فطيرة سجق كيرى", name_en: "Curry Sausage Pie", price: 115, cat: "pastries",img:  "images/56.png", desc: "Single 115 / Double 165", desc_en: "Single 115 / Double 165", sizes: [{n:"Single",p:115},{n:"Double",p:165}] },
  { id: 57, name: "فطيرة مكس فراخ", name_en: "Mix Chicken Pie", price: 115, cat: "pastries", img: "images/57.png", desc: "Single 115 / Double 165", desc_en: "Single 115 / Double 165", sizes: [{n:"Single",p:115},{n:"Double",p:165}] },
  { id: 58, name: "فطيرة مكس لحوم", name_en: "Mix Meat Pie", price: 115, cat: "pastries", img: "images/58.png", desc: "Single 115 / Double 165", desc_en: "Single 115 / Double 165", sizes: [{n:"Single",p:115},{n:"Double",p:165}] },

  // ===== وجبات فراخ =====
  { id: 59, name: "وجبة ربع فرخة", name_en: "Quarter Chicken Meal", price: 135, cat: "meals",  img: "images/59.png", desc: "تومية - أرز - عيش - مخلل - بطاطس", desc_en: "Garlic sauce - Rice - Bread - Pickles - Fries" },
  { id: 60, name: "وجبة نص فرخة", name_en: "Half Chicken Meal", price: 260, cat: "meals",  img: "images/59.png", desc: "تومية - أرز - عيش - مخلل - بطاطس", desc_en: "Garlic sauce - Rice - Bread - Pickles - Fries" },
  { id: 61, name: "فرخة مشوية كاملة", name_en: "Whole Grilled Chicken", price: 480, cat: "meals",  img: "images/61.png", desc: "فرخة مشوية كاملة", desc_en: "A full grilled chicken" },
  { id: 62, name: "3 قطع استربس", name_en: "3 Pcs Strips", price: 155, cat: "meals",  img: "images/63.png", desc: "مع أرز وكلوسلو وكاتشب وعيش وفرايز", desc_en: "With rice, coleslaw, ketchup, bread and fries" },
  { id: 63, name: "5 قطع استربس", name_en: "5 Pcs Strips", price: 220, cat: "meals",  img: "images/63.png", desc: "مع أرز وكلوسلو وكاتشب وعيش وفرايز", desc_en: "With rice, coleslaw, ketchup, bread and fries" },
  { id: 64, name: "2 قطعة بروست", name_en: "2 Pcs Broast", price: 150, cat: "meals",  img: "images/67.png", desc: "بروست دجاج", desc_en: "Chicken broast" },
  { id: 65, name: "3 قطع بروست", name_en: "3 Pcs Broast", price: 210, cat: "meals",  img: "images/67.png", desc: "بروست دجاج", desc_en: "Chicken broast" },
  { id: 66, name: "5 قطع بروست", name_en: "5 Pcs Broast", price: 330, cat: "meals",  img: "images/67.png", desc: "بروست دجاج", desc_en: "Chicken broast" },
  { id: 67, name: "8 قطع بروست", name_en: "8 Pcs Broast", price: 500, cat: "meals",  img: "images/67.png", desc: "بروست دجاج", desc_en: "Chicken broast" },
  { id: 68, name: "هابي فاميلي", name_en: "Happy Family", price: 785, cat: "meals",  img: "images/71.png", desc: "12 قطعة دجاج + 4 أرز + 4 كلوسلو + 4 تومية + كاتشب + 8 عيش + فرايز عائلي + لتر كولا", desc_en: "12 chicken pcs + 4 rice + 4 coleslaw + 4 garlic sauce + ketchup + 8 bread + family fries + 1L cola" },
  { id: 69, name: "سوبر فاميلي", name_en: "Super Family", price: 1185, cat: "meals",  img: "images/71.png", desc: "18 قطعة دجاج + 8 أرز + 6 كلوسلو + 6 تومية + كاتشب + 12 عيش + فرايز عائلي + لتر كولا", desc_en: "18 chicken pcs + 8 rice + 6 coleslaw + 6 garlic sauce + ketchup + 12 bread + family fries + 1L cola" },
  { id: 70, name: "التوينز", name_en: "The Twins", price: 500, cat: "meals",  img: "images/71.png", desc: "4 قطع دجاج + 4 استربس + 2 أرز + 2 كلوسلو + 2 تومية + كاتشب + 4 عيش + 4 فرايز + 2 مشروب", desc_en: "4 chicken pcs + 4 strips + 2 rice + 2 coleslaw + 2 garlic sauce + ketchup + 4 bread + 4 fries + 2 drinks" },
  { id: 71, name: "الصحيحة", name_en: "El Sahiha", price: 990, cat: "meals",  img: "images/71.png", desc: "8 قطع دجاج + 8 استربس + 4 أرز + 4 كلوسلو + 4 تومية + كاتشب + 10 عيش + 4 فرايز + 4 مشروب", desc_en: "8 chicken pcs + 8 strips + 4 rice + 4 coleslaw + 4 garlic sauce + ketchup + 10 bread + 4 fries + 4 drinks" },

  // ===== مشويات =====
  { id: 72, name: "ربع دجاج تكا", name_en: "Quarter Chicken Tikka", price: 140, cat: "grill",img: "images/59.png", desc: "مشويات", desc_en: "Grills" },
  { id: 73, name: "نص دجاج تكا", name_en: "Half Chicken Tikka", price: 240, cat: "grill",img: "images/73.png", desc: "مشويات", desc_en: "Grills" },
  { id: 74, name: "ربع كفتة", name_en: "Quarter Kofta", price: 200, cat: "grill",img: "images/74.png", desc: "مشويات", desc_en: "Grills" },
  { id: 75, name: "مشكل قرب", name_en: "Mixed Grill (Small)", price: 270, cat: "grill",img: "images/75.png", desc: "مشويات", desc_en: "Grills" },
  { id: 76, name: "مشكل نص", name_en: "Mixed Grill (Half)", price: 370, cat: "grill",img: "images/76.png", desc: "مشويات", desc_en: "Grills" },
  { id: 77, name: "فاميلي مشاوي", name_en: "Family Grill", price: 670, cat: "grill",img: "images/77.png", desc: "وجبة عائلية مشويات", desc_en: "Family grill meal" },
  { id: 78, name: "ربع شييش", name_en: "Quarter Shish", price: 140, cat: "grill",img: "images/78.png", desc: "مشويات", desc_en: "Grills" },
  { id: 79, name: "ورقة لحمة", name_en: "Sliced Beef", price: 300, cat: "grill",img: "images/79.png", desc: "لحوم", desc_en: "Meats" },
  { id: 80, name: "لحمة محمرة", name_en: "Seared Beef", price: 300, cat: "grill",img: "images/80.png", desc: "لحوم", desc_en: "Meats" },
  { id: 81, name: "طاجن عكاوي", name_en: "Akkawi Casserole", price: 300, cat: "grill",img: "images/81.png", desc: "طواجن", desc_en: "Casseroles" },
  { id: 82, name: "طاجن فراخ", name_en: "Chicken Casserole", price: 160, cat: "grill",img: "images/82.png", desc: "طواجن", desc_en: "Casseroles" },
  { id: 83, name: "طاجن لحمة", name_en: "Beef Casserole", price: 300, cat: "grill",img: "images/83.png", desc: "طواجن", desc_en: "Casseroles" },
  { id: 84, name: "فراخ حشو", name_en: "Stuffed Chicken", price: 210, cat: "grill",img: "images/85.png", desc: "فراخ", desc_en: "Chicken" },
  { id: 85, name: "ديك محشي", name_en: "Stuffed Rooster", price: 240, cat: "grill",img: "images/85.png", desc: "فراخ", desc_en: "Chicken" },
  { id: 86, name: "جوز حمام", name_en: "Pair of Pigeons", price: 360, cat: "grill",img: "images/86.png", desc: "حمام", desc_en: "Pigeon" },
  { id: 87, name: "فردة حمام", name_en: "Single Pigeon", price: 160, cat: "grill",img: "images/87.png", desc: "حمام", desc_en: "Pigeon" },

  // ===== شاورما =====
  { id: 88, name: "شاورما سوري", name_en: "Syrian Shawarma", price: 70, cat: "shawarma", img: "images/88.png", desc: "Medium 70 / Large 90", desc_en: "Medium 70 / Large 90", sizes: [{n:"Medium",p:70},{n:"Large",p:90}] },
  { id: 89, name: "كيزر سوري", name_en: "Syrian Caesar", price: 45, cat: "shawarma", img: "images/89.png", desc: "Medium 45 / Large 65", desc_en: "Medium 45 / Large 65", sizes: [{n:"Medium",p:45},{n:"Large",p:65}] },
  { id: 90, name: "فتة شاورما", name_en: "Shawarma Fatta", price: 80, cat: "shawarma", img: "images/90.png", desc: "Medium 80 / Large 130", desc_en: "Medium 80 / Large 130", sizes: [{n:"Medium",p:80},{n:"Large",p:130}] },
  { id: 91, name: "ماريا سوري وسط", name_en: "Maria Syrian (Medium)", price: 120, cat: "shawarma", img: "images/92.png", desc: "ماريا", desc_en: "Maria" },
  { id: 92, name: "ماريا سوري كبير", name_en: "Maria Syrian (Large)", price: 180, cat: "shawarma", img: "images/92.png", desc: "ماريا", desc_en: "Maria" },
  { id: 93, name: "بوكس الروقان", name_en: "El Rawqan Box", price: 150, cat: "shawarma", img: "images/93.png", desc: "4 قطع سوري + كيزر سوري + بطاطس + مخلل + تومية + مشروب", desc_en: "4 Syrian pcs + Syrian Caesar + fries + pickles + garlic sauce + drink" },
  { id: 94, name: "وجبة تيكا", name_en: "Tika Meal", price: 430, cat: "shawarma", img: "images/94.png", desc: "2 استربس + 4 قطع سوري + ربع فرخة + 2 كيزر + بطاطس + تومية + عيش + مخلل + 2 مشروب", desc_en: "2 strips + 4 Syrian pcs + quarter chicken + 2 Caesar wraps + fries + garlic sauce + bread + pickles + 2 drinks" },
  { id: 95, name: "بوكس العيلة", name_en: "Family Box", price: 850, cat: "shawarma", img: "images/95.png", desc: "10 قطع سوري + نص فرخة + 3 قطع بروست + 4 شاورما كيزر + بطاطس + تومية + مخلل + لتر كولا", desc_en: "10 Syrian pcs + half chicken + 3 broast pcs + 4 Caesar shawarma + fries + garlic sauce + pickles + 1L cola" },

  // ===== مشروبات =====
  { id: 96, name: "عصير مانجو", name_en: "Mango Juice", price: 50, cat: "drinks", img: "images/96.png", desc: "فريش", desc_en: "Fresh" },
  { id: 97, name: "ايس كريم موكا", name_en: "Mocha Ice Cream", price: 50, cat: "drinks", img: "images/97.png", desc: "فريش", desc_en: "Fresh" },
  { id: 98, name: "فروت سالاد", name_en: "Fruit Salad", price: 70, cat: "drinks", img: "images/98.png", desc: "فريش", desc_en: "Fresh" },
  { id: 99, name: "عصير فراولة", name_en: "Strawberry Juice", price: 50, cat: "drinks", img: "images/99.png", desc: "فريش", desc_en: "Fresh" },
  { id: 100, name: "ليمون فريش", name_en: "Fresh Lemon", price: 40, cat: "drinks", img: "images/100.png", desc: "فريش", desc_en: "Fresh" },
  { id: 101, name: "كولا", name_en: "Cola", price: 30, cat: "drinks", img: "images/101.png", desc: "صودا", desc_en: "Soda" },
  { id: 102, name: "سبرايت", name_en: "Sprite", price: 30, cat: "drinks", img: "images/102.png", desc: "صودا", desc_en: "Soda" },
  { id: 103, name: "ميرندا", name_en: "Mirinda", price: 30, cat: "drinks", img: "images/103.png", desc: "صودا", desc_en: "Soda" },
  { id: 104, name: "شويبس", name_en: "Schweppes", price: 30, cat: "drinks", img: "images/104.png", desc: "صودا", desc_en: "Soda" },
  { id: 105, name: "لتر كولا", name_en: "Cola 1L", price: 30, cat: "drinks", img: "images/105.png", desc: "صودا", desc_en: "Soda" },
  { id: 106, name: "مياه معدنية", name_en: "Mineral Water", price: 10, cat: "drinks", img: "images/water.png", desc: "مياه", desc_en: "Water" },
  { id: 107, name: "فانتا", name_en: "Fanta", price: 25, cat: "drinks", img: "images/103.png", desc: "صودا", desc_en: "Soda" },

  // ===== إضافات =====
  { id:108 , name: "تركي مدخن", name_en: "Smoked Turkey", price: 65, cat: "extras", img: "images/108.png", desc: "إضافة", desc_en: "Extra" },
  { id:109, name: "لحمة بقري مدخن", name_en: "Smoked Beef", price: 65, cat: "extras", img: "images/109.png", desc: "إضافة", desc_en: "Extra" },
  { id: 110, name: "قطع بيروني", name_en: "Pepperoni Slices", price: 65, cat: "extras", img: "images/110.png", desc: "إضافة", desc_en: "Extra" },
  { id: 111, name: "باكت بطاطس", name_en: "Fries Packet", price: 40, cat: "extras", img: "images/111.png", desc: "إضافة", desc_en: "Extra" },
  { id: 112, name: "صوص رانش", name_en: "Ranch Sauce", price: 45, cat: "extras", img: "images/112.png", desc: "إضافة", desc_en: "Extra" },
  { id: 113, name: "صوص تشيز", name_en: "Cheese Sauce", price: 45, cat: "extras", img: "images/113.png", desc: "إضافة", desc_en: "Extra" },
  { id: 114, name: "عيش", name_en: "Bread", price: 25, cat: "extras", img: "images/114.png", desc: "إضافة", desc_en: "Extra" },
  { id: 115, name: "أرز", name_en: "Rice", price: 40, cat: "extras", img: "images/115.png", desc: "إضافة", desc_en: "Extra" },
  { id: 116, name: "صوص تكساس", name_en: "Texas Sauce", price: 45, cat: "extras", img: "images/116.png", desc: "إضافة", desc_en: "Extra" },
  { id: 117, name: "مايونيز", name_en: "Mayonnaise", price: 45, cat: "extras", img: "images/117.png", desc: "إضافة", desc_en: "Extra" },
  { id: 118, name: "كاتشب", name_en: "Ketchup", price: 45, cat: "extras", img: "images/118.png", desc: "إضافة", desc_en: "Extra" },
  { id: 119, name: "صوص باربكيو", name_en: "BBQ Sauce", price: 45, cat: "extras", img: "images/119.png", desc: "إضافة", desc_en: "Extra" },
  { id: 120, name: "تومية", name_en: "Garlic Sauce", price: 20, cat: "extras", img: "images/112.png", desc: "إضافة", desc_en: "Extra" },
  { id: 121, name: "كلوسلو", name_en: "Coleslaw", price: 25, cat: "extras", img: "images/kolo.png", desc: "إضافة", desc_en: "Extra" },
];

const categoryNames = {
  all:       { ar: "الكل",                 en: "All" },
  rizzo:     { ar: "ريزو و فرايز",        en: "Rizzo & Fries" },
  burgers:   { ar: "برجر",                  en: "Burgers" },
  macaroni:  { ar: "مكرونات",             en: "Pasta" },
  pizza:     { ar: "بيتزا",               en: "Pizza" },
  pastries:  { ar: "فطائر و كريبات",     en: "Pastries & Crepes" },
  meals:     { ar: "وجبات فراخ",          en: "Chicken Meals" },
  grill:     { ar: "مشويات",              en: "Grills" },
  shawarma:  { ar: "شاورما",              en: "Shawarma" },
  drinks:    { ar: "مشروبات",             en: "Drinks" },
  extras:    { ar: "إضافات",              en: "Extras" }
};

// ====================== UI TRANSLATIONS ======================
const UI = {
  ar: {
    emptyCart: "العربة فارغة 🛒",
    currency: "ج.م",
    add: "أضف",
    featured: "مميز",
    addedToCart: (n) => `تم إضافة ${n} للعربة ✓`,
    fillRequired: "من فضلك املأ كل البيانات المطلوبة",
    orderSuccess: "تم إرسال طلبك بنجاح! 🎉 هنتواصل معاك قريب",
    orderError: "حصل خطأ، حاول تاني",
    noConnection: "مفيش اتصال بالسيرفر، تأكد إن السيرفر شغال",
    sending: "جاري الإرسال...",
    submitOrder: "تأكيد وإرسال الطلب",
    micIdle: "اضغط وتكلم مع المساعد",
    micListening: "بسمعك...",
    micUnsupported: "المتصفح ده مش بيدعم التعرف على الصوت. جرب Chrome.",
    voiceGreeting: "أهلاً بيك في P.F.C! تحب أرشحلك حاجة؟",
    voiceHelp: "ممكن تسأل عن اسم أي صنف، سعره، أو تطلب مني أرشحلك حاجة، أو تقولي ضيف كذا للعربة.",
    voiceAdded: (n) => `تمام، ضفت ${n} للعربة. حاجة تانية؟`,
    voicePrice: (n, p) => `${n} سعره ${p} جنيه.`,
    voiceDesc: (n, d, p) => `${n}: ${d}. السعر ${p} جنيه. تحب أضيفه للعربة؟`,
    voiceRecommend: (n) => `أنا بانصحك بـ ${n}! تحب أضيفه؟`,
    voiceCartEmpty: "العربة فارغة دلوقتي.",
    voiceCart: (list, total) => `طلبك دلوقتي: ${list}. الإجمالي ${total} جنيه.`,
    voiceNotFound: "معلش مش لاقي الصنف ده في المنيو. جرب اسم تاني."
  },
  en: {
    emptyCart: "Your cart is empty 🛒",
    currency: "EGP",
    add: "Add",
    featured: "Featured",
    addedToCart: (n) => `${n} added to cart ✓`,
    fillRequired: "Please fill in all required fields",
    orderSuccess: "Your order was sent successfully! 🎉 We'll contact you soon",
    orderError: "Something went wrong, please try again",
    noConnection: "No connection to the server, make sure it's running",
    sending: "Sending...",
    submitOrder: "Confirm & Send Order",
    micIdle: "Tap and talk to the assistant",
    micListening: "Listening...",
    micUnsupported: "This browser doesn't support voice recognition. Try Chrome.",
    voiceGreeting: "Welcome to P.F.C! Want a recommendation?",
    voiceHelp: "You can ask about any item's name, price, or ask me for a recommendation, or say add such-and-such to the cart.",
    voiceAdded: (n) => `Great, I added ${n} to your cart. Anything else?`,
    voicePrice: (n, p) => `${n} costs ${p} EGP.`,
    voiceDesc: (n, d, p) => `${n}: ${d}. Price is ${p} EGP. Want me to add it to your cart?`,
    voiceRecommend: (n) => `I recommend the ${n}! Want me to add it?`,
    voiceCartEmpty: "Your cart is empty right now.",
    voiceCart: (list, total) => `Your current order: ${list}. Total ${total} EGP.`,
    voiceNotFound: "Sorry, I couldn't find that item on the menu. Try another name."
  }
};

// ====================== STATE ======================
let cart = JSON.parse(localStorage.getItem('pfc_cart')) || [];
let currentCategory = 'all';
let currentLang = localStorage.getItem('pfc_lang') || 'ar';

// ====================== DOM ======================
const menuGrid = document.getElementById('menuGrid');
const cartBtn = document.getElementById('cartBtn');
const cartCount = document.getElementById('cartCount');
const cartSidebar = document.getElementById('cartSidebar');
const cartOverlay = document.getElementById('cartOverlay');
const closeCart = document.getElementById('closeCart');
const cartItems = document.getElementById('cartItems');
const cartTotal = document.getElementById('cartTotal');
const checkoutBtn = document.getElementById('checkoutBtn');
const checkoutModal = document.getElementById('checkoutModal');
const closeModal = document.getElementById('closeModal');
const orderForm = document.getElementById('orderForm');
const orderSummary = document.getElementById('orderSummary');
const toast = document.getElementById('toast');
const catButtons = document.querySelectorAll('.cat-btn');

function t(key, ...args) {
  const val = UI[currentLang][key];
  return typeof val === 'function' ? val(...args) : val;
}
function itemName(item) { return currentLang === 'ar' ? item.name : item.name_en; }
function itemDesc(item) { return currentLang === 'ar' ? item.desc : item.desc_en; }

// ====================== LANGUAGE ======================
function applyLanguage() {
  document.documentElement.lang = currentLang;
  document.documentElement.dir = currentLang === 'ar' ? 'rtl' : 'ltr';
  document.body.classList.toggle('lang-en', currentLang === 'en');

  document.querySelectorAll('[data-ar][data-en]').forEach(el => {
    el.textContent = currentLang === 'ar' ? el.dataset.ar : el.dataset.en;
  });
  document.querySelectorAll('[data-ar-placeholder][data-en-placeholder]').forEach(el => {
    el.placeholder = currentLang === 'ar' ? el.dataset.arPlaceholder : el.dataset.enPlaceholder;
  });

  catButtons.forEach(btn => {
    const cat = btn.dataset.cat;
    if (categoryNames[cat]) btn.textContent = categoryNames[cat][currentLang];
  });

  document.querySelectorAll('.lang-btn').forEach(b => b.classList.toggle('active', b.dataset.lang === currentLang));

  renderMenu(currentCategory);
  updateCartUI();
  const micStatus = document.getElementById('micStatus');
  if (micStatus && !listening) micStatus.textContent = t('micIdle');
}

document.querySelectorAll('.lang-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    currentLang = btn.dataset.lang;
    localStorage.setItem('pfc_lang', currentLang);
    applyLanguage();
  });
});

// ====================== RENDER MENU ======================
function renderMenu(cat = 'all') {
  currentCategory = cat;
  const items = cat === 'all' ? menuData : menuData.filter(i => i.cat === cat);

  menuGrid.innerHTML = items.map(item => {
    const hasSizes = item.sizes && item.sizes.length > 0;
    return `
      <div class="menu-item" data-id="${item.id}">
        <div class="item-img">
          <img src="${item.img}" alt="" style="width: 70px; height: 70px; object-fit: cover; border-radius: 10px;">
          ${item.cat === 'meals' || item.cat === 'grill' ? `<span class="badge">${t('featured')}</span>` : ''}
        </div>
        <div class="item-body">
          <div class="item-name">${itemName(item)}</div>
          <div class="item-desc">${itemDesc(item) || ''}</div>
          ${hasSizes ? `
            <div class="size-options" data-item="${item.id}">
              ${item.sizes.map((s, idx) => `
                <button class="size-btn ${idx === 0 ? 'active' : ''}" data-price="${s.p}" data-size="${s.n}">
                  ${s.n} - ${s.p}${currentLang === 'ar' ? 'ج' : ' EGP'}
                </button>
              `).join('')}
            </div>
          ` : ''}
          <div class="item-footer">
            <div class="item-price">
              <span class="price-value">${item.price}</span> <small>${t('currency')}</small>
            </div>
            <button class="add-btn" onclick="addToCart(${item.id})">
              <i class="fas fa-plus"></i> ${t('add')}
            </button>
          </div>
        </div>
      </div>
    `;
  }).join('');

  document.querySelectorAll('.size-options').forEach(group => {
    group.querySelectorAll('.size-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        group.querySelectorAll('.size-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const card = group.closest('.menu-item');
        card.querySelector('.price-value').textContent = btn.dataset.price;
      });
    });
  });
}

// ====================== CART ======================
function addToCart(id, announce = true) {
  const item = menuData.find(i => i.id === id);
  if (!item) return null;

  let selectedPrice = item.price;
  let selectedSize = null;

  const card = document.querySelector(`.menu-item[data-id="${id}"]`);
  if (card) {
    const activeSize = card.querySelector('.size-btn.active');
    if (activeSize) {
      selectedPrice = parseInt(activeSize.dataset.price);
      selectedSize = activeSize.dataset.size;
    }
  }

  const cartKey = selectedSize ? `${id}_${selectedSize}` : `${id}`;
  const existing = cart.find(c => c.key === cartKey);
  const displayName = itemName(item) + (selectedSize ? ` (${selectedSize})` : '');

  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({
      key: cartKey,
      id: item.id,
      name: item.name + (selectedSize ? ` (${selectedSize})` : ''),
      name_en: item.name_en + (selectedSize ? ` (${selectedSize})` : ''),
      price: selectedPrice,
      qty: 1
    });
  }

  saveCart();
  updateCartUI();
  if (announce) showToast(t('addedToCart', displayName));
  return item;
}

function changeQty(key, delta) {
  const item = cart.find(c => c.key === key);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) {
    cart = cart.filter(c => c.key !== key);
  }
  saveCart();
  updateCartUI();
}

function removeFromCart(key) {
  cart = cart.filter(c => c.key !== key);
  saveCart();
  updateCartUI();
}

function saveCart() {
  localStorage.setItem('pfc_cart', JSON.stringify(cart));
}

function updateCartUI() {
  const totalQty = cart.reduce((sum, i) => sum + i.qty, 0);
  cartCount.textContent = totalQty;

  if (cart.length === 0) {
    cartItems.innerHTML = `<p class="empty-cart">${t('emptyCart')}</p>`;
    cartTotal.textContent = `0 ${t('currency')}`;
    checkoutBtn.disabled = true;
    return;
  }

  checkoutBtn.disabled = false;
  let total = 0;

  cartItems.innerHTML = cart.map(item => {
    total += item.price * item.qty;
    const name = currentLang === 'ar' ? item.name : item.name_en;
    return `
      <div class="cart-item">
        <div class="cart-item-info">
          <div class="cart-item-name">${name}</div>
          <div class="cart-item-price">${item.price} ${t('currency')}</div>
          <div class="cart-item-controls">
            <button class="qty-btn" onclick="changeQty('${item.key}', -1)">−</button>
            <span class="qty">${item.qty}</span>
            <button class="qty-btn" onclick="changeQty('${item.key}', 1)">+</button>
            <button class="remove-item" onclick="removeFromCart('${item.key}')">
              <i class="fas fa-trash"></i>
            </button>
          </div>
        </div>
      </div>
    `;
  }).join('');

  cartTotal.textContent = total + ' ' + t('currency');
}

// ====================== UI EVENTS ======================
cartBtn.addEventListener('click', () => {
  cartSidebar.classList.add('open');
  cartOverlay.classList.add('show');
});

closeCart.addEventListener('click', closeCartSidebar);
cartOverlay.addEventListener('click', closeCartSidebar);

function closeCartSidebar() {
  cartSidebar.classList.remove('open');
  cartOverlay.classList.remove('show');
}

checkoutBtn.addEventListener('click', () => {
  if (cart.length === 0) return;
  const label = currentLang === 'ar' ? 'ملخص الطلب:' : 'Order summary:';
  let html = `<strong>${label}</strong><br>`;
  let total = 0;
  cart.forEach(i => {
    const name = currentLang === 'ar' ? i.name : i.name_en;
    html += `• ${name} × ${i.qty} = ${i.price * i.qty} ${t('currency')}<br>`;
    total += i.price * i.qty;
  });
  const totalLabel = currentLang === 'ar' ? 'الإجمالي' : 'Total';
  html += `<br><strong>${totalLabel}: ${total} ${t('currency')}</strong>`;
  orderSummary.innerHTML = html;
  checkoutModal.classList.add('show');
  closeCartSidebar();
});

closeModal.addEventListener('click', () => {
  checkoutModal.classList.remove('show');
});

// ====================== SEND ORDER TO BACKEND ======================
orderForm.addEventListener('submit', async (e) => {
  e.preventDefault();

  const name = document.getElementById('customerName').value.trim();
  const phone = document.getElementById('customerPhone').value.trim();
  const address = document.getElementById('customerAddress').value.trim();
  const notes = document.getElementById('orderNotes').value.trim();

  if (!name || !phone || !address) {
    showToast(t('fillRequired'));
    return;
  }

  const total = cart.reduce((sum, i) => sum + (i.price * i.qty), 0);

  const orderData = {
    customerName: name,
    customerPhone: phone,
    customerAddress: address,
    notes: notes,
    items: cart.map(i => ({ ...i, name: currentLang === 'ar' ? i.name : i.name_en })),
    total: total,
    lang: currentLang
  };

  const submitBtn = orderForm.querySelector('.submit-order');
  submitBtn.disabled = true;
  submitBtn.textContent = t('sending');

  try {
    const response = await fetch('/api/orders', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(orderData)
    });

    const result = await response.json();

    if (result.success) {
      cart = [];
      saveCart();
      updateCartUI();
      checkoutModal.classList.remove('show');
      orderForm.reset();
      showToast(t('orderSuccess'));
    } else {
      showToast(result.message || t('orderError'));
    }
  } catch (err) {
    console.error(err);
    showToast(t('noConnection'));
  } finally {
    submitBtn.disabled = false;
    submitBtn.textContent = t('submitOrder');
  }
});

// Category filter
catButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    catButtons.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    renderMenu(btn.dataset.cat);
  });
});

function showToast(msg) {
  toast.textContent = msg;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 2800);
}

// ================= AI Voice Assistant =================
let recognition = null;
let listening = false;
const micBtn = document.getElementById('micBtn');
const micStatus = document.getElementById('micStatus');
const voiceLog = document.getElementById('voiceLog');

function initRecognition() {
  const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
  if (!SR) return null;
  const rec = new SR();
  rec.continuous = false;
  rec.interimResults = false;
  rec.maxAlternatives = 1;
  return rec;
}

function logVoice(text, who) {
  const div = document.createElement('div');
  div.className = 'voice-msg ' + who;
  div.dir = /[\u0600-\u06FF]/.test(text) ? 'rtl' : 'ltr';
  div.textContent = text;
  voiceLog.appendChild(div);
  voiceLog.scrollTop = voiceLog.scrollHeight;
}

function speak(text) {
  const utter = new SpeechSynthesisUtterance(text);
  utter.lang = currentLang === 'ar' ? 'ar-EG' : 'en-US';
  window.speechSynthesis.cancel();
  window.speechSynthesis.speak(utter);
}

function normalize(s) {
  return s
    .replace(/[\u064B-\u0652\u0640]/g, '') 
    .toLowerCase()
    .replace(/[أإآ]/g, 'ا')
    .replace(/ى/g, 'ي')
    .replace(/ة/g, 'ه')
    .replace(/[^\p{L}\p{N}\s]/gu, ' ')        
    .replace(/\s+/g, ' ')
    .trim();
}

function findItemInText(text) {
  const queryWords = normalize(text).split(' ').filter(w => w.length > 1);
  if (queryWords.length === 0) return null;

  let best = null, bestScore = 0;
  menuData.forEach(item => {
    [item.name, item.name_en].forEach(nameVal => {
      const nameWords = normalize(nameVal).split(' ').filter(w => w.length > 1);
      if (nameWords.length === 0) return;

      let matched = 0;
      nameWords.forEach(nw => {
        if (queryWords.some(qw => qw.includes(nw) || nw.includes(qw))) matched++;
      });
      const score = matched / nameWords.length;

      if (score > bestScore) {
        bestScore = score;
        best = item;
      }
    });
  });

  return bestScore >= 0.5 ? best : null;
}

function answerQuery(text) {
  const n = normalize(text);
  const item = findItemInText(text);

  // التأكد من أن نية المستخدم هي طلب أو إضافة فعلية وليست مجرد تساؤل أو ذكر للصنف
  const explicitAddKeywords = ['ضيف', 'اطلب', 'اشتري', 'هات', 'حط', 'اضف', 'add', 'order', 'buy', 'put'];
  const hasExplicitAdd = explicitAddKeywords.some(keyword => n.includes(keyword));

  // إذا استخدم "عايز" أو "عاوز" مقترنة بكلمات طلب مثل "عايز اطلب" أو "عايز أضيف"
  const wantsToOrder = (n.includes('عايز اطلب') || n.includes('عاوز اطلب') || n.includes('عايز اضيف') || n.includes('عاوز اضيف') || n.includes('عايز اشتري') || n.includes('عاوز اشتري'));

  const isAddRequest = hasExplicitAdd || wantsToOrder;

  if (isAddRequest) {
    if (item) {
      addToCart(item.id, false);
      const name = itemName(item);
      return t('voiceAdded', name);
    } else {
      return currentLang === 'ar' 
        ? "تحديد الصنف مطلوب! تحب أضيف إيه بالتحديد للعربة؟" 
        : "Please specify which item you would like to add to your cart.";
    }
  }

  // Price question
  if (item && (n.includes('سعر') || n.includes('بكام') || n.includes('كام') || n.includes('price') || n.includes('cost'))) {
    return t('voicePrice', itemName(item), item.price);
  }

  // General item mention / question (مثل: عايز أسأل على بيتزا تونة) -> يعرض وصفه فقط بدون إضافة
  if (item) {
    return t('voiceDesc', itemName(item), itemDesc(item), item.price);
  }

  // Recommendation request
  if (n.includes('رشح') || n.includes('اقترح') || n.includes('recommend') || n.includes('suggest') || n.includes('best')) {
    const featured = menuData.filter(i => i.cat === 'meals' || i.cat === 'grill');
    const pick = featured[Math.floor(Math.random() * featured.length)];
    return t('voiceRecommend', itemName(pick));
  }

  // Show cart
  if (n.includes('طلبي') || n.includes('العربه') || n.includes('السله') || n.includes('my order') || n.includes('cart')) {
    if (cart.length === 0) return t('voiceCartEmpty');
    const total = cart.reduce((s, c) => s + c.qty * c.price, 0);
    const list = cart.map(c => `${c.qty}x ${currentLang === 'ar' ? c.name : c.name_en}`).join('، ');
    return t('voiceCart', list, total);
  }

  // Greeting
  if (n.includes('السلام') || n.includes('اهلا') || n.includes('مرحبا') || n.includes('hello') || n.includes('hi')) {
    return t('voiceGreeting');
  }

  return t('voiceHelp');
}

if (micBtn) {
  micBtn.addEventListener('click', () => {
    if (!window.SpeechRecognition && !window.webkitSpeechRecognition) {
      alert(t('micUnsupported'));
      return;
    }
    if (listening) return;
    recognition = initRecognition();
    recognition.lang = currentLang === 'ar' ? 'ar-EG' : 'en-US';

    recognition.onstart = () => {
      listening = true;
      micBtn.classList.add('listening');
      micStatus.textContent = t('micListening');
    };
    recognition.onend = () => {
      listening = false;
      micBtn.classList.remove('listening');
      micStatus.textContent = t('micIdle');
    };
    recognition.onerror = () => {
      listening = false;
      micBtn.classList.remove('listening');
      micStatus.textContent = t('micIdle');
    };
    recognition.onresult = (event) => {
      const text = event.results[0][0].transcript;
      logVoice(text, 'user');
      const reply = answerQuery(text);
      logVoice(reply, 'bot');
      speak(reply);
    };
    recognition.start();
  });
}

// ====================== INIT ======================
applyLanguage();