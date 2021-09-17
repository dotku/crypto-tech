import * as functions from "firebase-functions";

export const kryptex = functions.https.onRequest((request, response) => {
  response.send("Kryptex");
});
