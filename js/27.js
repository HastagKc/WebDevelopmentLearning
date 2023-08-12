// default parameters in js

function add(num1, num2 = 10) {
  return num1 * num2;
}
console.log(add(45));

// spread operator in js
// in array

let cats = ["Jimmy", "Rocket", "Jhon"];
let dogs = ["kale", "Sete"];

// ...spread operator add copy to the allpets
let allpets = [...cats, ...dogs];
console.log(allpets);

// spread into string
let hl = "hello";
let copy = [...hl];
console.log(copy);

// spread operator in object
let obj = {
  firstname: "Kshittiz",
  lastname: "Chaudhary",
};

let copyObj = {
  ...obj,
};
console.log(copyObj);
