// Number game guessing game
// let createNum = Math.random();
// console.log(createNum);

// // provide range
// let range = createNum * 10;
// console.log(range);

// // Math.floor(createNum) + 1;
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
let maximum = parseInt(prompt("Enter the maximum number!"));
while (!maximum) {
  maximum = parseInt(prompt("Enter a valid number!"));

  console.log(type(maximum));
}

const targetNum = Math.floor(Math.random() * maximum) + 1;

let guess = prompt("Enter your first guess! (Type 'q' to quit)");
let attempts = 1;

while (parseInt(guess) !== targetNum) {
  if (guess === "q") break;
  guess = parseInt(guess);
  if (guess > targetNum) {
    guess = prompt("Too high! Enter a new guess:");
    attempts++;
  } else if (guess < targetNum) {
    guess = prompt("Too low! Enter a new guess:");
    attempts++;
  } else {
    guess = prompt("Invalid guess. Please enter a number or 'q' to quit");
  }
}

if (guess === "q") {
  console.log("OK, YOU QUIT!");
} else {
  console.log("CONGRATS YOU WIN!");
  console.log(`You got it! It took you ${attempts} guesses`);
}
