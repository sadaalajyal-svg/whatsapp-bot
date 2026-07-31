router.get("/", (req, res) => {

  console.log("Meta Mode:", req.query["hub.mode"]);
  console.log("Meta Token:", req.query["hub.verify_token"]);
  console.log("Server Token:", config.VERIFY_TOKEN);

  const mode = req.query["hub.mode"];
  const token = req.query["hub.verify_token"];
  const challenge = req.query["hub.challenge"];

  if (
    mode === "subscribe" &&
    token === config.VERIFY_TOKEN
  ) {
    console.log("Webhook Verified");
    return res.status(200).send(challenge);
  }

  return res.sendStatus(403);
});
