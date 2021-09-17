import * as functions from "firebase-functions";
const puppeteer = require('puppeteer');
// import { kryptex } from "./kryptex";

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
export const helloWorld = functions.https.onRequest((request, response) => {
  functions.logger.info("Hello logs!", { structuredData: true });
  response.send("Hello from Firebase2!");
});

export const kryptex = functions.https.onRequest((request, response) => {
  // functions.logger.info("kryptex", { structuredData: true });
  const vgmUrl = 'https://www.vgmusic.com/music/console/nintendo/nes';

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.goto(vgmUrl);
  // await page.$$eval('a', 
  const links = await page.$$eval('a', elements => elements.filter(element => {
    console.log('typeof', typeof element);
    const parensRegex = /^((?!\().)*$/;
    return element.href.includes('.mid') && parensRegex.test(element.textContent);
  }).map(element => element.href));

  links.forEach(link => console.log(link));

  await browser.close();
})();
  console.log("hi");
  response.send("Kryptex 7");
});
