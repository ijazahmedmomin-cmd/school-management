const requestLogger = (req, res, next) => {
  console.log("🔥 requestLogger middleware hit");
  console.log(`➡️ ${req.method} ${req.originalUrl}`);
  if (Object.keys(req.body || {}).length > 0) {
    console.log("📦 Body:", req.body);
  }
  next();
};

module.exports = { requestLogger };

