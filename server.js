const express = require('express');
const cors = require('cors');
const path = require('path');
const { v4: uuidv4 } = require('uuid');
const db = require('./database');

const app = express();
const PORT = process.env.PORT || 3000;

// ====================== ADMIN AUTH ======================

const ADMIN_USER = process.env.ADMIN_USER || 'admin';
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'pfc-luxor-2026';

function requireAdminAuth(req, res, next) {
const header = req.headers.authorization || '';

const expected =
'Basic ' +
Buffer.from(`${ADMIN_USER}:${ADMIN_PASSWORD}`).toString('base64');

if (header === expected) {
return next();
}

res.set('WWW-Authenticate', 'Basic realm="P.F.C Admin"');
return res.status(401).send('Authentication required');
}

// ====================== MIDDLEWARE ======================

app.use(cors());
app.use(express.json());

app.use(
express.static(path.join(__dirname, 'public'))
);

// ====================== API ROUTES ======================

// Create new order
app.post('/api/orders', (req, res) => {
try {
const {
customerName,
customerPhone,
customerAddress,
notes,
items,
total
} = req.body;

```
if (
  !customerName ||
  !customerPhone ||
  !customerAddress ||
  !items ||
  !total
) {
  return res.status(400).json({
    success: false,
    message: 'بيانات ناقصة'
  });
}

const id = uuidv4();

const stmt = db.prepare(`
  INSERT INTO orders
  (
    id,
    customer_name,
    customer_phone,
    customer_address,
    notes,
    total,
    items
  )
  VALUES (?, ?, ?, ?, ?, ?, ?)
`);

stmt.run(
  id,
  customerName,
  customerPhone,
  customerAddress,
  notes || '',
  total,
  JSON.stringify(items)
);

console.log(
  `🛒 طلب جديد: ${customerName} - ${total} ج.م`
);

res.json({
  success: true,
  message: 'تم استلام الطلب بنجاح',
  orderId: id
});
```

} catch (err) {

```
console.error(err);

res.status(500).json({
  success: false,
  message: 'حصل خطأ في السيرفر'
});
```

}
});

// Get all orders
app.get('/api/orders', requireAdminAuth, (req, res) => {

try {

```
const orders = db.prepare(`
  SELECT *
  FROM orders
  ORDER BY created_at DESC
`).all();

const parsed = orders.map(o => ({
  ...o,
  items: JSON.parse(o.items)
}));

res.json({
  success: true,
  orders: parsed
});
```

} catch (err) {

```
console.error(err);

res.status(500).json({
  success: false,
  message: 'حصل خطأ'
});
```

}
});

// Update order status
app.patch('/api/orders/:id/status', requireAdminAuth, (req, res) => {

try {

```
const { id } = req.params;
const { status } = req.body;

const stmt = db.prepare(`
  UPDATE orders
  SET status = ?
  WHERE id = ?
`);

const result = stmt.run(status, id);

if (result.changes === 0) {

  return res.status(404).json({
    success: false,
    message: 'الطلب مش موجود'
  });
}

res.json({
  success: true,
  message: 'تم تحديث الحالة'
});
```

} catch (err) {

```
console.error(err);

res.status(500).json({
  success: false,
  message: 'حصل خطأ'
});
```

}
});

// Delete order
app.delete('/api/orders/:id', requireAdminAuth, (req, res) => {

try {

```
const { id } = req.params;

const stmt = db.prepare(`
  DELETE FROM orders
  WHERE id = ?
`);

stmt.run(id);

res.json({
  success: true,
  message: 'تم حذف الطلب'
});
```

} catch (err) {

```
console.error(err);

res.status(500).json({
  success: false,
  message: 'حصل خطأ'
});
```

}
});

// Stats
app.get('/api/stats', requireAdminAuth, (req, res) => {

try {

```
const totalOrders = db
  .prepare(`
    SELECT COUNT(*) as count
    FROM orders
  `)
  .get().count;

const totalRevenue = db
  .prepare(`
    SELECT SUM(total) as sum
    FROM orders
  `)
  .get().sum || 0;

const todayOrders = db
  .prepare(`
    SELECT COUNT(*) as count
    FROM orders
    WHERE date(created_at) = date('now')
  `)
  .get().count;

res.json({
  success: true,
  stats: {
    totalOrders,
    totalRevenue,
    todayOrders
  }
});
```

} catch (err) {

```
console.error(err);

res.status(500).json({
  success: false
});
```

}
});

// ====================== FRONTEND PAGES ======================

// الصفحة الرئيسية
app.get('/', (req, res) => {

res.sendFile(
path.join(__dirname, 'public', 'home.html')
);

});

// الصفحة الرئيسية أيضاً
app.get('/home', (req, res) => {

res.sendFile(
path.join(__dirname, 'public', 'home.html')
);

});

// المنيو
app.get('/menu', (req, res) => {

res.sendFile(
path.join(__dirname, 'public', 'menu.html')
);

});

// Admin dashboard
app.get('/admin', requireAdminAuth, (req, res) => {

res.sendFile(
path.join(__dirname, 'public', 'admin.html')
);

});

// ====================== START SERVER ======================

app.listen(PORT, () => {

console.log(
`🚀 P.F.C Server running on http://localhost:${PORT}`
);

console.log(
`🏠 Home: http://localhost:${PORT}/`
);

console.log(
`🍗 Menu: http://localhost:${PORT}/menu`
);

console.log(
`📋 Admin: http://localhost:${PORT}/admin`
);

});
