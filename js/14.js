// Number game guessing game
// let createNum = Math.random();
// console.log(createNum);

// provide range
// let range = createNum * 10;
// console.log(range);

// Math.floor(createNum) + 1;
// console.log(Math.floor(range));

// Math.floor() return nearest round up value
// Math.random() generate random float value
// Math.random()* range upto 11 to 20
// plus 1 at last shift range startin from if i added 10 it give number form 11 to 20
// let serectNum = Math.floor(Math.random() * 10) + 10;
// console.log(serectNum);

// function randomNum(min, max) {
//   return Math.floor(Math.random() * 10) + 10;
// }

// let input = parseInt(prompt("Enter any number from 11 t0 20 "));
// while (isNaN(input)) {
//   input = parseInt(prompt("Invalid Inputs"));
// }

let userInput = parseInt(prompt("Enter any guess number form 1 to 10"));

console.log(typeof userInput);

// unless user does not click number this loop will run
while (!userInput) {
  userInput = parseInt(prompt("Invalid input "));
}
//
const targetNum = Math.floor(Math.random() * 10) + 1;
// console.log(targetNum);
let attempts = 1;

while (userInput !== targetNum) {
  attempts++;
  if (targetNum === userInput) {
    // console.log(`Congratulations you win !! you need ${attempts} to complete`);
    alert(`Congratulations you win !! you need ${attempts} to complete`);
    break;
  } else if (targetNum > userInput) {
    userInput = parseInt(prompt("Guess high number"));
  } else {
    userInput = parseInt(prompt("Guess lower number"));
  }
}
