const request = require("request");
const cheerio = require("cheerio");

request(
  "https://www.world-airport-codes.com/alphabetical/airport-code/a.html?page=1/",
  (error, response, html) => {
    if (!error && response.statusCode == 200) {
      const $ = cheerio.load(html);
     $('.stack2 tbody tr').each((i, el)=>{
       const title = $(el).find('th a').text()
       console.log(title)
     })
    } else {
      console.log(error);
    }
  }
);
