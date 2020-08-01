const request = require("request");
const cheerio = require("cheerio");

request(
  "https://www.world-airport-codes.com/alphabetical/airport-code/a.html?page=1/",
  (error, response, html) => {
    if (!error && response.statusCode == 200) {
      // console.log(html);
      const $ = cheerio.load(html);
      const siteHeading = $(".box-generic-title");
      // console.log(siteHeading.text());
      // const output = siteHeading.find("h1").text();
      // const output = siteHeading.children("h1").text();
      // const output = siteHeading.children("h1").next().text();
      // const output = siteHeading.children("h1").parent().text();
      // console.log(output);

      $('.listing-pagination a').each((i, el)=> {
        const item = $(el).text();
        const link = $(el).attr('href')
        console.log(link)
      })

    } else {
      console.log(error);
    }
  }
);
