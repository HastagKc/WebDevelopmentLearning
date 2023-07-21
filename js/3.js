// ? operetors in js
// * In JavaScript, operators are symbols or keywords that allow you to perform various operations on data, such as arithmetic calculations, assignment, comparison, logical operations, and more. Operators are an essential part of any programming language and are used extensively to manipulate data and control program flow. Here are some common types of operators in JavaScript:

//!   1. Arithmetic Operators:**
//    - `+`: Addition
//    - `-`: Subtraction
//    - `*`: Multiplication
//    - `/`: Division
//    - `%`: Modulus (remainder after division)
//    - `**`: Exponentiation (ES6)

console.log(5 + 56);
console.log(55 - 6);
console.log(7 * 9);
console.log(9 / 3);
console.log(13 % 3);
console.log(2 ** 3);

//! 2. **Assignment Operators:**
//    - `=`: Assign a value to a variable
//    - `+=`: Add and assign
//    - `-=`: Subtract and assign
//    - `*=`: Multiply and assign
//    - `/=`: Divide and assign
//    - `%=`: Modulus and assign
let num1 = 10;
console.log("num1 " + num1); //10

let num2 = 10;

num2 += 10;
console.log("num2 " + num2); // 20

num2 -= 2;
console.log(num2); // 18

num2 *= 2;
console.log(num2); //36

num2 /= 3;
console.log(num2); //12

num2 %= 5;
console.log(num2); //2

3; //! Comparison Operators:
//  `==`: Equal to (loose equality; type coercion is performed)
//   `!=`: Not equal to (loose equality; type coercion is performed)
//  `===`: Equal to (strict equality; no type coercion)
//  `!==`: Not equal to (strict equality; no type coercion)
// `>`: Greater than
// `<`: Less than
//   `>=`: Greater than or equal to
//  `<=`: Less than or equal to

let num3 = 10;

let num4 = 20;
console.log(num3 == num4); //false

console.log(num3 != num4); // true

// checking equal datatypes and value too
console.log(num3 == num4); // false

console.log(num3 > num4); // false
console.log(num3 < num4); //  true
console.log(num3 >= num4); // false
console.log(num3 <= num4); // true
