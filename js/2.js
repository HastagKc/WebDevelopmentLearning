let regularNum = 45;
console.log(regularNum);

//* The BigInt data type was introduced in ECMAScript 11(ES11) to address the limitation of the Number data type, which can represent whole numbers up to a maximum value(Number.MAX_SAFE_INTEGER) of 2 ^ 53 - 1(9,007, 199, 254, 740, 991).When you need to work

let bigIntNum = 60n;
console.log(bigIntNum);

//! null
// When you assign a variable to null, you are essentially saying that the variable exists, but it has no meaningful value or is unknown at that moment.

let userName = null;
userName = "kshittiz";
console.log(userName);

//? undefined
// * The undefined value is used to represent variables that have been declared but not assigned a value. It is also the default value for uninitialized variables in JavaScript.
//*  When a variable is declared but not explicitly assigned a value, it is automatically assigned the value undefined.

let lastName;

console.log(typeof lastName);
lastName = "Chaudhary";

console.log(userName + " " + lastName);
console.log(userName.concat(" " + lastName));
