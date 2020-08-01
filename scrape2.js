const request = require("request");
const cheerio = require("cheerio");

request(
  "https://www.world-airport-codes.com/alphabetical/airport-code/a.html?page=1/",
  (error, response, html) => {
    if (!error && response.statusCode == 200) {
     
    } else {
      console.log(error);
    }
  }
);
