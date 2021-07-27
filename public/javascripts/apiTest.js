// const fetch = require("node-fetch");

// // const url =
// //   "https://api.rawg.io/api/games?key=e8debf2567a4460a98a80beda0530bff&page=2";

// const url =
//   "https://api.rawg.io/api/games?dates=2019-01-01,2021-12-31&ordering=-rating&key=e8debf2567a4460a98a80beda0530bff";

// const apiTest = async () => {
//   let res = await fetch(url);
//   res = await res.json();
//   console.log(res);
// };

// apiTest();

let array = [12, 3, 1, 2, -6, 5, -8, 6];
let sorted = [-8, -6, 1, 2, 3, 5, 6, 12]
let targetSum = 0;

const threeNumberSum = (array, targetSum) => {
  array = array.sort((a, b) => a - b);

  let sum;
  let newArr;
  let finalArr = [];

  while (array.length >= 3) {
    let p1 = array[0];
    let p2;
    let p3 = array[array.length - 1];
    for (let i = 1; i < array.length - 1; i++) {
      newArr = [];
      p2 = array[i];
      sum = p1 + p2 + p3;
      if (sum === targetSum) {
        newArr.push(p1);
        newArr.push(p2);
        newArr.push(p3);
        finalArr.push(newArr);
      }
    }
    array.shift();
  }

  return finalArr;
};

console.log(threeNumberSum(array, targetSum));
