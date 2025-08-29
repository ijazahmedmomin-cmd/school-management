console.log("✅ app.js is being executed");
const express = require("express");
const app = express();
app.use((req, res, next) => {
  console.log("🟢 Global logger HIT:", req.method, req.url);
  next();
});


console.log("🚀 LOADED app.js from:", __filename);
console.log("✅ app.js loaded");
const cookieParser = require("cookie-parser");
const dotenv = require("dotenv");
dotenv.config();

const { handle404Error, handleGlobalError } = require("./middlewares");
const { v1Routes } = require("./routes/v1");
const { cors } = require("./config");
const { requestLogger } = require("./middlewares/requestLogger");
const path = require("path");


app.use(cors);
app.use(express.json());
app.use(express.static(path.join(__dirname, '..', 'public')));
app.use(cookieParser());

app.get("/debug", (req, res) => {
  console.log("🐛 DEBUG ROUTE HIT");
  res.send("Hello from debug");
});


app.use("/api/v1", v1Routes);

app.use(handle404Error);
app.use(handleGlobalError);
console.log("✅ Middleware setup complete");
module.exports = { app };
