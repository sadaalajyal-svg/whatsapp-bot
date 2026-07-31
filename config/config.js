const config = {
  PORT: process.env.PORT || 3000,

  VERIFY_TOKEN: process.env.VERIFY_TOKEN,

  WHATSAPP_TOKEN: process.env.WHATSAPP_TOKEN,

  PHONE_NUMBER_ID: process.env.PHONE_NUMBER_ID,

  OPENAI_API_KEY: process.env.OPENAI_API_KEY,
};

console.log("VERIFY_TOKEN =", process.env.VERIFY_TOKEN);

export default config;
