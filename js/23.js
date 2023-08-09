// function in js
// named function

function add(x, y) {
  return x + y;
}

console.log(add(22, 23));

// function expression
let add2 = function (x, y) {
  return x + y;
};

console.log(add2(12, 12));

// arrow function
const sum = (x, y) => {
  return x + y;
};

console.log(sum(20, 10));

// implicit return in arrow function
const mul = (num1, num2) => num1 * num2;
// const mul = (num1, num2) => (num1 * num2);
console.log(mul(10, 20));
