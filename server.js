const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = process.env.PORT || 3000;
const DB_FILE = path.join(__dirname, 'data', 'bookings.json');

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.svg': 'image/svg+xml'
};

// Database helper functions
function getStoredBookings() {
  try {
    if (fs.existsSync(DB_FILE)) {
      const content = fs.readFileSync(DB_FILE, 'utf8');
      return JSON.parse(content);
    }
  } catch (err) {
    console.error('Database read error:', err.message);
  }
  return [];
}

function saveBookingsToDB(bookings) {
  try {
    const dir = path.dirname(DB_FILE);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    fs.writeFileSync(DB_FILE, JSON.stringify(bookings, null, 2), 'utf8');
    return true;
  } catch (err) {
    console.error('Database write error:', err.message);
    return false;
  }
}

const server = http.createServer((req, res) => {
  // CORS Headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.writeHead(200);
    return res.end();
  }

  const urlPath = req.url.split('?')[0];

  // API ROUTE: /api/bookings
  if (urlPath === '/api/bookings') {
    if (req.method === 'GET') {
      const bookings = getStoredBookings();
      res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });
      return res.end(JSON.stringify({
        success: true,
        count: bookings.length,
        data: bookings
      }));
    }

    if (req.method === 'POST') {
      let bodyData = '';
      req.on('data', chunk => { bodyData += chunk; });
      req.on('end', () => {
        try {
          const body = JSON.parse(bodyData || '{}');
          if (!body.name || !body.phone) {
            res.writeHead(400, { 'Content-Type': 'application/json; charset=utf-8' });
            return res.end(JSON.stringify({
              success: false,
              error: 'নাম এবং মোবাইল নম্বর দেওয়া আবশ্যক!'
            }));
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

          const currentList = getStoredBookings();
          currentList.unshift(newBooking);
          saveBookingsToDB(currentList);

          res.writeHead(201, { 'Content-Type': 'application/json; charset=utf-8' });
          return res.end(JSON.stringify({
            success: true,
            message: 'বুকিং সফলভাবে ডেটাবেজে সংরক্ষিত হয়েছে!',
            data: newBooking
          }));
        } catch (err) {
          res.writeHead(500, { 'Content-Type': 'application/json; charset=utf-8' });
          return res.end(JSON.stringify({
            success: false,
            error: 'সার্ভার প্রক্রিয়াকরণে সমস্যা হয়েছে: ' + err.message
          }));
        }
      });
      return;
    }
  }

  // STATIC FILE SERVING
  let filePath = path.join(__dirname, urlPath === '/' ? 'index.html' : urlPath);
  const ext = path.extname(filePath).toLowerCase();
  const contentType = MIME_TYPES[ext] || 'application/octet-stream';

  fs.readFile(filePath, (err, content) => {
    if (err) {
      if (err.code === 'ENOENT') {
        res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
        res.end('404 Not Found');
      } else {
        res.writeHead(500);
        res.end(`Server Error: ${err.code}`);
      }
    } else {
      res.writeHead(200, { 'Content-Type': contentType });
      res.end(content);
    }
  });
});

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
  console.log(`Database ready at ${DB_FILE}`);
});
