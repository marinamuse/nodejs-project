const puppeteer = require("puppeteer");

async function scrapeMovies(url) {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(url);

  //   // movie image source
  //   const [el] = await page.$x(
  //     '//*[@id="main"]/div/div[3]/div/div[1]/div[2]/a/img' ////*[@id="main"]/div/div[3]/div/div[2]/div[2]/a/img
  //   );
  //   const src = await el.getProperty("src");
  //   const srcText = await src.jsonValue();

  //   // movie title
  //   const [el2] = await page.$x(
  //     '//*[@id="main"]/div/div[3]/div/div[1]/div[3]/h3/a'
  //   );
  //   const title = await el2.getProperty("textContent");
  //   const rawTitle = await title.jsonValue();

  //   // movie year
  //   const [el3] = await page.$x(
  //     '//*[@id="main"]/div/div[3]/div/div[1]/div[3]/h3/span[2]'
  //   );
  //   const year = await el3.getProperty("textContent");
  //   const rawYear = await year.jsonValue();

  //   // movie genre
  //   const [el4] = await page.$x('//*[@id="main"]/div/div[3]/div');
  //   const genre = await el4.getProperty("textContent");
  //   const rawGenre = await genre.jsonValue();

  //   console.log({ srcText, rawTitle, rawYear, rawGenre });

  // list of movies titles
  //   let listOfMoviesTitles = await page.$$eval(".loadlate", (items) =>
  //     items.map((item) => item.alt)
  //   );
  //   console.log(listOfMoviesTitles);

  // list of movies images

  //   let listOfImages = await page.$$eval("img", (items) =>
  //     items.map(async (item) => {
  //       const srcItem = await item[0].jsonValue();
  //     })
  //   );
  //   console.log(listOfImages);

  const list = [];
  //*[@id="top_movies_main"]/div/table/tbody/tr[1]/td[3]/a
  //*[@id="top_movies_main"]/div/table/tbody/tr[2]/td[3]/a
  //   const title = await el2.getProperty("textContent");
  //   const rawTitle = await title.jsonValue();

  for (var i = 1; i < 100; i++) {
    var xpath =
      '//*[@id="top_movies_main"]/div/table/tbody/tr[' + i + "]/td[3]/a";
    var [el] = await page.$x(xpath);
    var title = await el.getProperty("textContent");
    var rawTitle = await title.jsonValue();
    list.push(rawTitle);
  }

  console.log(list);

  browser.close();
}

// scrapeMovies(
//   "https://www.imdb.com/search/title/?groups=top_100&sort=user_rating,desc"
// );

scrapeMovies("https://www.rottentomatoes.com/top/bestofrt/");
