// Vercel & Netlify Serverless API endpoint: /api/bookings
const fs = require('fs');
const path = require('path');

// In-memory cache for serverless environments where filesystem may be read-only
let memoryBookings = [
  {
    id: "GF-LOL-1001",
    token: "GF-LOL-1001",
    name: "সুমাইয়া জান্নাত",
    phone: "01711223344",
    profileId: "shuvo",
    profileName: "শুভ (দুষ্টু-মিষ্টি টাইপ)",
    packageId: "half-day",
    packageName: "হাফ-ডে প্যাকেজ",
    price: "৳১৫০০",
    date: "2026-09-17",
    note: "শপিংয়ে গিয়ে ব্যাগ বহন নিশ্চিত করতে হবে",
    createdAt: "2026-09-16T14:30:00.000Z"
  }
];

// Helper to get filepath
const getDBPath = () => path.join(process.cwd(), 'data', 'bookings.json');

// Read bookings safely
function readBookings() {
  try {
    const dbPath = getDBPath();
    if (fs.existsSync(dbPath)) {
      const data = fs.readFileSync(dbPath, 'utf8');
      return JSON.parse(data);
    }
  } catch (err) {
    console.warn('Filesystem read failed, using memory store:', err.message);
  }
  return memoryBookings;
}

// Write bookings safely
function writeBookings(bookings) {
  memoryBookings = bookings;
  try {
    const dbPath = getDBPath();
    const dir = path.dirname(dbPath);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    fs.writeFileSync(dbPath, JSON.stringify(bookings, null, 2), 'utf8');
    return true;
  } catch (err) {
    console.warn('Filesystem write failed, saved to memory store:', err.message);
    return false;
  }
}

module.exports = async (req, res) => {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  // GET: Fetch all bookings
  if (req.method === 'GET') {
    const bookings = readBookings();
    return res.status(200).json({
      success: true,
      count: bookings.length,
      data: bookings
    });
  }

  // POST: Create a new booking
  if (req.method === 'POST') {
    try {
      let body = req.body;
      if (typeof body === 'string') {
        body = JSON.parse(body);
      }

      if (!body || !body.name || !body.phone) {
        return res.status(400).json({
          success: false,
          error: 'নাম এবং মোবাইল নম্বর আবশ্যক।'
        });
      }

      const tokenNumber = body.token || ('GF-LOL-' + Math.floor(1000 + Math.random() * 9000));
      const newBooking = {
        id: tokenNumber,
        token: tokenNumber,
        name: body.name.trim(),
        phone: body.phone.trim(),
        profileId: body.profileId || 'random',
        profileName: body.profileName || 'সারপ্রাইজ বয়ফ্রেন্ড',
        packageId: body.packageId || 'standard',
        packageName: body.packageName || 'স্ট্যান্ডার্ড প্যাকেজ',
        price: body.price || '৳১০০০',
        date: body.date || new Date().toISOString().split('T')[0],
        note: (body.note || '').trim(),
        createdAt: new Date().toISOString()
      };

      const currentList = readBookings();
      currentList.unshift(newBooking);
      writeBookings(currentList);

      return res.status(201).json({
        success: true,
        message: 'কাল্পনিক বুকিং সফলভাবে ডেটাবেজে সংরক্ষিত হয়েছে!',
        data: newBooking
      });
    } catch (err) {
      return res.status(500).json({
        success: false,
        error: 'বুকিং সংরক্ষণে সমস্যা হয়েছে: ' + err.message
      });
    }
  }

  return res.status(405).json({ error: 'Method Not Allowed' });
};
