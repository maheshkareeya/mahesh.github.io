const admin = require("firebase-admin");
const serviceAccount = require("./kariya-firebase-adminsdk.json");
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://kariya.firebaseio.com"
});

