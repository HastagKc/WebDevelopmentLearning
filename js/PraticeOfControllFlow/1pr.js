//! 1.Check if a given number is even or odd.
let num = 10;
if (num > 0) {
  console.log("Positive");
} else if (num == 0) {
  console.log("Zero");
} else {
  console.log("Negative");
}

//? function in js
//1. function functionName(para1, para2) {

// }

function multiplyNum(a, b) {
  return a * b;
}

console.log(multiplyNum(10, 20));

// 2. const functionName =function(){

//}

const addNum = function (a, b) {
  return a + b;
};

let x = addNum(10, 25);
console.log(x);

// 3. arrow function in js

const substractNum = (a, b) => {
  return a - b;
};

let y = substractNum(50, 25);
console.log(y);
