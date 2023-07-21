console.log("Hello Worlld");

// string in js
let name = "John";
let age = 30;
let interpolatedString = `My name is ${name} and I am ${age} years old.`;
console.log(interpolatedString);
// js string method
// length: Returns the length of the string.

console.log(interpolatedString.length);

// toUpperCase(): Converts the string to uppercase.
console.log(interpolatedString.toUpperCase());

// toLowerCase(): Converts the string to lowercase.
console.log(interpolatedString.toLowerCase());

// charAt(index): Returns the character at the specified index.

console.log(interpolatedString.charAt(37));

// indexOf(substring): Returns the index of the first occurrence of the specified substring.
console.log(interpolatedString.indexOf("john"));

//! substring(startIndex, endIndex): Returns a portion of the string starting from the startIndex to the endIndex.
console.log(interpolatedString.substring(11, 16));

// ! split(separator): Splits the string into an array of substrings based on the separator.

let nameOfFriends = "Kshittiz, Aashish, Suresh, Ajay";
console;

let arrayOfFriends = nameOfFriends.toUpperCase().split(",");

console.log(arrayOfFriends);

//! trim(): Removes leading and trailing whitespace from the string.

let dis = "      Nepal is a beautiful country        ";
console.log(dis.length);
console.log(dis.trim().length);
console.log(dis);
