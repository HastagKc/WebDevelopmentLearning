//? 3. Calculate the sum of all numbers from 1 to a given number (inclusive).

let sum = (num) => {
  let total = 0;
  for (let i = 0; i <= num; i++) {
    total = total + i;
  }
  return total;
};

console.log(sum(10));
