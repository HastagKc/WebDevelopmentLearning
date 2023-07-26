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

//? 2. Determine the grade based on a given score: A (90-100), B (80-89), C (70-79), D (60-69), F (0-59).

function gradeCal(grade) {
  if (grade >= 90 && grade <= 100) {
    console.log("A");
  } else if (grade >= 80) {
    console.log("B");
  } else if (grade >= 70) {
    console.log("C");
  } else if (grade >= 60) {
    console.log("D");
  } else if (grade >= 0) {
    console.log("F");
  } else {
    console.log("Enter valid grade ");
  }
}

const userInput = prompt("Enter your grade number: ");
gradeCal(parseInt(userInput));
