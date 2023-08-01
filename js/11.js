// multi dimensinal array
// let numbers = [
//   [10, 20, 25],
//   [70, 80, 35],
//   [30, 20, 55],
// ];

// accessing element from arrays

// console.log(numbers);
// console.log(numbers[1][0]); // 70

// modify element of an array
// numbers[1][0] = "Kc";
// console.log(numbers);

// const array in js
// in constant array we can't resign value to the array but we can
// modify the value of an array

const myArray = [10, 20, 50, 40];
myArray[0] = 20;
myArray.unshift(45);
myArray.push(85);

console.log(myArray);

// includes
console.log(myArray.includes(20));
