const fetch = require("node-fetch");

// const url =
//   "https://api.rawg.io/api/games?key=e8debf2567a4460a98a80beda0530bff&page=2";

const url =
  "https://api.rawg.io/api/games?dates=2019-01-01,2021-12-31&ordering=-rating&key=e8debf2567a4460a98a80beda0530bff";

const apiTest = async () => {
  let res = await fetch(url);
  res = await res.json();
  console.log(res);
};

apiTest();
