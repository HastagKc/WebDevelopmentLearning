// math object

console.log(Math.floor(2.145)); //2
console.log(Math.ceil(2.145)); //3

console.log(Math.max(10, 25, 45, 85)); // 85
console.log(Math.min(10, 12, 22, 5)); //5

console.log(Math.round(5.95)); // 6
console.log(Math.abs(-258)); // 258

// let making guessing number game
// guess number 1 to 10
let attempt = 0;
let totalAttempt = 3;
let num = Math.floor(Math.random() * 10);
console.log(num);
let userGuess;

do {
  userGuess = prompt("Guess any number:");
  let check = parseInt(userGuess);
  console.log(` user guess=> ${userGuess}`);
  if (check < num) {
    console.log(`Guess higher Number than ${check}`);
    attempt++;
  } else if (check > num) {
    console.log(`Guess lower Number than ${check}`);
    attempt++;
  } else if (check == num) {
    console.log("Congratulation you have guess right");
    break;
    attempt++;
  } else {
    console.log("please enter vaild input");
  }
} while (attempt < totalAttempt);

// if (attempt === totalAttempt && userGuess === num) {
//   console.log("Out of Attempts try next time !!!");
// }
