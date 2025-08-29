const { env } = require("../config");

function maskSecret(secret) {
  if (!secret) return "<MISSING>";
  if (secret.length <= 4) return "****";
  return secret.slice(0, 2) + "****" + secret.slice(-2);
}

function logEnvConfig() {
  console.log("🔧 Environment Config Check:");
  console.log("  PORT:", env.PORT);
  console.log("  DATABASE_URL:", env.DATABASE_URL ? "✅ Loaded" : "❌ Missing");
  console.log("  JWT_ACCESS_TOKEN_SECRET:", maskSecret(env.JWT_ACCESS_TOKEN_SECRET));
  console.log("  JWT_REFRESH_TOKEN_SECRET:", maskSecret(env.JWT_REFRESH_TOKEN_SECRET));
  console.log("  CSRF_TOKEN_SECRET:", maskSecret(env.CSRF_TOKEN_SECRET));
  console.log("  UI_URL:", env.UI_URL);
  console.log("  API_URL:", env.API_URL);
  console.log("  RESEND_API_KEY:", maskSecret(env.RESEND_API_KEY));
}

module.exports = { logEnvConfig };

