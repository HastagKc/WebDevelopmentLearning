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

//? method in js

let arr1 = [20, 30, 45];
let arr2 = [34, 90, 75];
let arr3 = [39, 78, 65];

let conbineArry = arr1.concat(arr2, arr3);
console.log(conbineArry);
console.log(conbineArry.length);

// includes
console.log(conbineArry.includes(20));

// indexof provide index of the value if present if not
// return -1
console.log(conbineArry.indexOf(12)); // -1
console.log(conbineArry.indexOf(39)); // 6

// join join() method is used to convert the elements of an array into a string.

//const str = array.join(separator);

const convertArrtoString = conbineArry.join("-");
console.log(convertArrtoString);
const convertArrtoString2 = conbineArry.join(" ");
console.log(convertArrtoString2);

// .reverse() reverse an array

let mixedArr = [25, 12, "kc", { name: "joe" }];
console.log(mixedArr);

let arr5 = [10, 25, 35, 45, 55, 65, 85];
console.log(arr5.reverse());

// slice copies a portion of an arry
let extractedArr5 = arr5.slice(1, 5);
console.log(extractedArr5);

// splice  =>  the splice() method is used to add or remove elements from an array at a specified index. Unlike slice(), the splice() method directly modifies the original array and returns the elements that were removed in a new array.

// const removedElements = array.splice(startIndex, deleteCount, item1, item2, ..., itemN);

let arr6 = [10, 25, 35, 65, 45, 75];
const removedElement = arr6.splice(2, 3, 55, 45);
console.log(removedElement);
console.log(arr6);

// sort => use to sort an array
let sortedArray = arr6.sort();
console.log(sortedArray);
