const Database = require('better-sqlite3');
const path = require('path');

const dbPath = path.join(__dirname, 'orders.db');
const db = new Database(dbPath);

// Create tables if not exist
db.exec(`
  CREATE TABLE IF NOT EXISTS orders (
    id TEXT PRIMARY KEY,
    customer_name TEXT NOT NULL,
    customer_phone TEXT NOT NULL,
    customer_address TEXT NOT NULL,
    notes TEXT,
    total INTEGER NOT NULL,
    items TEXT NOT NULL,
    status TEXT DEFAULT 'جديد',
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
  );
`);

console.log('✅ Database ready:', dbPath);

module.exports = db;
