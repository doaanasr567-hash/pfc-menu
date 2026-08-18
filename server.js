const express = require('express');
const cors = require('cors');
const path = require('path');
const { v4: uuidv4 } = require('uuid');
const db = require('./database');

const app = express();
const PORT = process.env.PORT || 3000;

// ====================== ADMIN AUTH ======================
// Protects the admin dashboard and order-management endpoints so random
// visitors can't read customer names/phones/addresses or edit orders.
// Change ADMIN_PASSWORD before deploying (set it as an environment variable
// on your host, or edit the default below).
const ADMIN_USER = process.env.ADMIN_USER || 'admin';
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'pfc-luxor-2026';

function requireAdminAuth(req, res, next) {
  const header = req.headers.authorization || '';
  const expected = 'Basic ' + Buffer.from(`${ADMIN_USER}:${ADMIN_PASSWORD}`).toString('base64');
  if (header === expected) return next();
  res.set('WWW-Authenticate', 'Basic realm="P.F.C Admin"');
  return res.status(401).send('Authentication required');
}

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// ====================== API ROUTES ======================

// Create new order
app.post('/api/orders', (req, res) => {
  try {
    const { customerName, customerPhone, customerAddress, notes, items, total } = req.body;

    if (!customerName || !customerPhone || !customerAddress || !items || !total) {
      return res.status(400).json({ success: false, message: 'بيانات ناقصة' });
    }

    const id = uuidv4();
    const stmt = db.prepare(`
      INSERT INTO orders (id, customer_name, customer_phone, customer_address, notes, total, items)
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

    console.log(`🛒 طلب جديد: ${customerName} - ${total} ج.م`);

    res.json({
      success: true,
      message: 'تم استلام الطلب بنجاح',
      orderId: id
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: 'حصل خطأ في السيرفر' });
  }
});

// Get all orders (for admin) — protected
app.get('/api/orders', requireAdminAuth, (req, res) => {
  try {
    const orders = db.prepare(`
      SELECT * FROM orders ORDER BY created_at DESC
    `).all();

    // Parse items JSON
    const parsed = orders.map(o => ({
      ...o,
      items: JSON.parse(o.items)
    }));

    res.json({ success: true, orders: parsed });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: 'حصل خطأ' });
  }
});

// Update order status — protected
app.patch('/api/orders/:id/status', requireAdminAuth, (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    const stmt = db.prepare(`UPDATE orders SET status = ? WHERE id = ?`);
    const result = stmt.run(status, id);

    if (result.changes === 0) {
      return res.status(404).json({ success: false, message: 'الطلب مش موجود' });
    }

    res.json({ success: true, message: 'تم تحديث الحالة' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: 'حصل خطأ' });
  }
});

// Delete order — protected
app.delete('/api/orders/:id', requireAdminAuth, (req, res) => {
  try {
    const { id } = req.params;
    const stmt = db.prepare(`DELETE FROM orders WHERE id = ?`);
    stmt.run(id);
    res.json({ success: true, message: 'تم حذف الطلب' });
  } catch (err) {
    res.status(500).json({ success: false, message: 'حصل خطأ' });
  }
});

// Stats — protected
app.get('/api/stats', requireAdminAuth, (req, res) => {
  try {
    const totalOrders = db.prepare(`SELECT COUNT(*) as count FROM orders`).get().count;
    const totalRevenue = db.prepare(`SELECT SUM(total) as sum FROM orders`).get().sum || 0;
    const todayOrders = db.prepare(`
      SELECT COUNT(*) as count FROM orders 
      WHERE date(created_at) = date('now')
    `).get().count;

    res.json({
      success: true,
      stats: { totalOrders, totalRevenue, todayOrders }
    });
  } catch (err) {
    res.status(500).json({ success: false });
  }
});

// Serve frontend — landing page at "/", the digital menu at "/menu"
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'home.html'));
});

app.get('/menu', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Admin dashboard — protected
app.get('/admin', requireAdminAuth, (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'admin.html'));
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 P.F.C Server running on http://localhost:${PORT}`);
  console.log(`📋 Admin panel: http://localhost:${PORT}/admin  (user: ${ADMIN_USER})`);
});
