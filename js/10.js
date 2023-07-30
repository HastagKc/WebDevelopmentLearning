// array in js

// Empty array
let emptyArray = [];

// Array with numbers
let numbersArray = [1, 2, 3, 4, 5];

// Array with strings
let fruitsArray = ["apple", "banana", "orange"];

// Array with mixed data types
let mixedArray = [1, "hello", true, { name: "John" }];

// Nested arrays
let nestedArray = [
  [1, 2],
  [3, 4],
  [5, 6],
];

// Creating an array with the 'Array' constructor
let newArray = new Array(10); // Creates an array with 10 undefined elements

// Array with explicit index assignment
let explicitArray = [];
explicitArray[0] = "First element";
explicitArray[1] = "Second element";

let arr = []; // empty array
let nameList = ["kshittiz", "Rahul", "Suresh", "Vivek"];
console.log(nameList);

// push => add element in last
nameList.push("Ram");
console.log(nameList);

//pop => remove element from last index
nameList.pop();
console.log(nameList);
console.log(nameList.length);

// shift and unshift remove and add element in the first index
// remove form frist
nameList.shift();
console.log(nameList);

//add element in the first index
// unshift(value)
nameList.unshift("Kc");
console.log(nameList);
