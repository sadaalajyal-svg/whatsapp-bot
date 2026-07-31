import "dotenv/config";

import express from "express";
import cors from "cors";

import config from "./config/config.js";
import webhookRouter from "./routes/webhook.js";

const app = express();
const port = Number(config.PORT) || 3000;

app.use(cors());
app.use(express.json());

// الصفحة الرئيسية
app.get("/", (req, res) => {
  res.status(200).send("🚀 بوت صدى الأجيال يعمل بنجاح");
});

// فحص حالة الخادم
app.get("/health", (req, res) => {
  res.status(200).json({
    status: "ok",
    verifyTokenLoaded: Boolean(config.VERIFY_TOKEN),
  });
});

// ربط Webhook
app.use("/webhook", webhookRouter);

// تشغيل السيرفر
app.listen(port, "0.0.0.0", () => {
  console.log(`Server running on port ${port}`);
  console.log(
    `VERIFY_TOKEN loaded: ${config.VERIFY_TOKEN ? "YES" : "NO"}`
  );
});
