# P.F.C Restaurant - نظام الطلبات الكامل

موقع منيو تفاعلي + باك اند + داتا بيز جاهز للرفع على أي استضافة.

## المميزات

- منيو كامل تفاعلي مع عربة تسوق
- حفظ الطلبات في قاعدة بيانات SQLite
- لوحة تحكم (Admin) لمتابعة الطلبات وتغيير حالتها
- إحصائيات (عدد الطلبات - مبيعات اليوم - الإجمالي)
- جاهز للرفع على Railway / Render / VPS

## طريقة التشغيل محلياً

### 1. تثبيت المكتبات
```bash
cd pfc-backend
npm install
```

### 2. تشغيل السيرفر
```bash
npm start
```

الموقع هيفتح على:  
**http://localhost:3000**

لوحة التحكم:  
**http://localhost:3000/admin**

## هيكل المشروع

```
pfc-backend/
├── package.json
├── server.js          ← السيرفر الرئيسي
├── database.js        ← إعداد الداتا بيز
├── orders.db          ← هتتخلق أوتوماتيك أول ما تشغل
└── public/
    ├── index.html     ← صفحة المنيو
    ├── style.css
    ├── script.js
    └── admin.html     ← لوحة التحكم
```

## الرفع على استضافة حقيقية

### الخيار الأسهل: Railway.app
1. اعمل حساب على [railway.app](https://railway.app)
2. New Project → Deploy from GitHub (ارفع المشروع على GitHub أولاً)
3. أو استخدم Railway CLI
4. هيديلك لينك جاهز

### Render.com
1. اعمل حساب على [render.com](https://render.com)
2. New → Web Service
3. اربط الريبو أو ارفع الملفات
4. Build Command: `npm install`
5. Start Command: `npm start`

### VPS (مثل DigitalOcean أو Contabo)
```bash
# بعد ما ترفع الملفات
npm install
npm start

# أو استخدم PM2 عشان يفضل شغال
npm install -g pm2
pm2 start server.js --name pfc
pm2 save
```

## ملاحظات مهمة

- الداتا بيز (`orders.db`) بتتحفظ جنب الملفات. لو استخدمت Railway أو Render تأكد إن عندك Persistent Storage لو عايز الداتا متضيعش مع كل Deploy.
- لو عايز تربط الطلبات بواتساب أو إيميل، قولي وأنا أضيفلك الكود.
- تقدر تضيف كلمة سر للـ Admin بسهولة بعدين.

## API Endpoints

| Method | Endpoint                  | الوصف              |
|--------|---------------------------|--------------------|
| POST   | /api/orders               | إنشاء طلب جديد     |
| GET    | /api/orders               | جلب كل الطلبات     |
| PATCH  | /api/orders/:id/status    | تغيير حالة الطلب   |
| DELETE | /api/orders/:id           | حذف طلب            |
| GET    | /api/stats                | إحصائيات           |

---
تم التطوير بواسطة nourhan_elsayeh
