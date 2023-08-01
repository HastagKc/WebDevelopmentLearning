// object in js

/*
In JavaScript, an object is a data type that allows you to store
 and organize multiple values as key-value pairs. Each key in the 
 object is a unique identifier, and its corresponding value can 
 be of any data type, including other objects, arrays, functions, 
 etc.

*/

let obj = {}; // empty object in js

let obj2 = {
  firstName: "kshittiz",
  lastName: "Chaudhary",
  aim: "Great software engineer",
  proLang: ["c++", "java", "js", "Dart"],
};

console.log(obj2);

console.log(obj2["aim"]); // This method is useful when the property name contains special characters or spaces.
console.log(obj2.firstName); // Dot notation is a more concise and commonly used method to access properties of an object. It directly references the property name without using any brackets.

// modify the object in js
obj2.firstName = "Ram";
console.log(obj2.firstName);
