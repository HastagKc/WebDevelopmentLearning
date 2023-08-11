// setTimeOut()
setTimeout(() => {
  console.log("Namaste from Kc");
}, 3000);

// setInterval
// setInterval(() => {
//   console.log("Print after each 3 sec ");
// }, 3000);

// map() and fliter()

// map() method returns the modify array having same length equal to
// original array

let numberList = [10, 20, 30, 40, 5, 60, 70, 80];
const numbers = numberList.map(function (num) {
  return num % 2 === 0;
});
console.log(numbers);

const numbers2 = numberList.filter(function (num) {
  return num % 2 === 0;
});

console.log(numbers2);
