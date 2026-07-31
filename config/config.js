export default {
  get PORT() {
    return process.env.PORT || 3000;
  },

get VERIFY_TOKEN() {
  console.log("VERIFY_TOKEN =", process.env.VERIFY_TOKEN);
  return process.env.VERIFY_TOKEN;
},

  get WHATSAPP_TOKEN() {
    return process.env.WHATSAPP_TOKEN;
  },

  get PHONE_NUMBER_ID() {
    return process.env.PHONE_NUMBER_ID;
  },

  get OPENAI_API_KEY() {
    return process.env.OPENAI_API_KEY;
  }
};
