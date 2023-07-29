// and or and not operator in js
let password = prompt("Enter any password");

// And in js
// where password.indexOf(" ") === -1 check if there is an
// space in the input

if (password.length >= 6 && password.indexOf(" ") === -1) {
  console.log("Valid Password");
} else {
  console.log("Invalid Password");
}
