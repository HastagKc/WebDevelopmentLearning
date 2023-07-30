// Print the multiplication table for a given number (from 1 to 10).

let num = prompt("Enter the number which we want to print it table ");

function printMultiple(num) {
  for (let i = 1; i <= 10; i++) {
    console.log(num + " X " + i + " = " + num * i);
  }
}

printMultiple(Number(num));
