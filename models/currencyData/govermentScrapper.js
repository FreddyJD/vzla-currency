// Promise based req. 
const request = require("request");

// Supports async and await 
const fetch = require('node-fetch');

// Our scrapper 
const cheerio = require("cheerio");

// The goal is this cheerio Scrapper is to take the reported
// EUR value directly from the Venezuela Goverment website ~ DICOM https://www.dicom.gob.ve/
// And then export that value as an USD value.

// Side note: You can return the promise without any issues but just
// To keep this code "standardize" and "faster", we return a new promise and
// start doing all the "heavy work" in the async/await function.
//
// Belive it or not we get 1/2s difference 
//
// - Love Freddy ❤️

function dicomRequest() {
  return new Promise(function(resolve, reject) {
    request("https://www.dicom.gob.ve/", (err, response, data) => {
      if (!err && response.statusCode === 200) {
        resolve(data);
      } else {
        reject(err);
      }
    });
  });
}; 


module.exports = async function dataScrapping() {
    const response = await dicomRequest(); 
    const $ = cheerio.load(response);
    const grabEUR_div = $('.moneda-eur');
    const grabValue = grabEUR_div.find('.value').text();
    
    let valueMassage = grabValue.split(',');
    valueMassage[0] = valueMassage[0].split('.');
    let eurVAL = parseInt(valueMassage[0].join(''));
    
    const data = await fetch('https://api.exchangeratesapi.io/latest'); 
    const eur_to_usd = await data.json(); 

    const usdVAL = eur_to_usd.rates.USD * eurVAL;

    DicomRate = {
        usd_value: eurVAL, 
        eur_value: Math.floor(usdVAL), 
    }

    return DicomRate

}