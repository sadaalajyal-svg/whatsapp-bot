import express from "express";
import config from "../config/config.js";

const router = express.Router();

// التحقق من Meta
router.get("/", (req, res) => {
  console.log("========== WEBHOOK VERIFY ==========");
  console.log("Mode:", req.query["hub.mode"]);
  console.log("Token:", req.query["hub.verify_token"]);
  console.log("Challenge:", req.query["hub.challenge"]);
  console.log("Server VERIFY_TOKEN:", config.VERIFY_TOKEN);
  console.log("====================================");

  const mode = req.query["hub.mode"];
  const token = req.query["hub.verify_token"];
  const challenge = req.query["hub.challenge"];

  if (
    mode === "subscribe" &&
    token === config.VERIFY_TOKEN
  ) {
    console.log("✅ Webhook Verified");
    return res.status(200).send(challenge);
  }

  console.log("❌ Verification Failed");
  return res.sendStatus(403);
});

// استقبال الرسائل
router.post("/", async (req, res) => {
  console.log("========== NEW MESSAGE ==========");
  console.log(JSON.stringify(req.body, null, 2));
  console.log("================================");

  res.sendStatus(200);
});

export default router;
