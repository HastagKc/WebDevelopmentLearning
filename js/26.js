const words = ["dog", "jello", "log", "cupcake", "bag"];

let wordArray = words.some((word) => {
  return word.length > 4;
});

console.log(words);

const words2 = ["dog", "jello", "log", "cupcake", "bag"];
words2.some((word) => {
  word.includes("cake");
});

console.log(words2); // returrn true

// in every method each value should statify condition
function allEvens(numbers) {
  return numbers.every((num) => num % 2 === 0);
}

let numList = [10, 20, 30, 40, 13, 15];
console.log(allEvens(numList));
