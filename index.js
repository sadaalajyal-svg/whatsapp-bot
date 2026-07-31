import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import config from "./config/config.js";
import webhookRouter from "./routes/webhook.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

// الصفحة الرئيسية
app.get("/", (req, res) => {
  res.send("🚀 بوت صدى الأجيال يعمل بنجاح");
});

// ربط Webhook
app.use("/webhook", webhookRouter);

// تشغيل السيرفر
app.listen(config.PORT, () => {
  console.log(`Server running on port ${config.PORT}`);
});
