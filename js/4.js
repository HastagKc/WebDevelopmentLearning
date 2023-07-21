//! types conversion or type casting
//* implicit conversion
// conversion takes automatically without any developer effort

//* exampe of explicit conversion
//* number to string

let num = 22;
let numStr = String(num);
console.log(numStr); //22
console.log(typeof numStr); // string

//* string to number
let num2 = "22";
let strNum = Number(num2);
console.log(strNum); //22
console.log(typeof strNum); // number

//* boolean to string
let booleanValue = true;
let boolStr = String(booleanValue); // "true"
console.log(boolStr); // true
console.log(typeof boolStr); // string

//* string to bool
let stringValue = "false";
console.log(typeof stringValue); // string
let strBool = Boolean(stringValue); // true
console.log(strBool); // true
console.log(typeof strBool); // Boolean

//* intParse() it converts string to number explicity
