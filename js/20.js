// method in js object

let simpleMath = {
  firstName: "kshittiz",
  squre: function (num) {
    return num * num;
  },
  cube: function (num) {
    return num ** 3;
  },
};

console.log(simpleMath.firstName); // Kshittiz
console.log(simpleMath.squre(2)); //4
console.log(simpleMath.cube(2)); //8

console.log("=================OR===================");
// or recent change
let simpleMath2 = {
  firstName: "Ram",
  squre(num) {
    return num * num;
  },
  cube(num) {
    return num ** 3;
  },
};

console.log(simpleMath2.firstName); // Ram
console.log(simpleMath2.squre(3)); //9
console.log(simpleMath2.cube(3)); //27
