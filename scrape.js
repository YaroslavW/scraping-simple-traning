const request = require("request");
const cheerio = require("cheerio");

request(
  "https://airport.airlines-inform.ru/australia/",
  (error, response, html) => {
    if (!error && response.statusCode == 200) {
      console.log(html);
    } else {
      console.log(error);
    }
  }
);
