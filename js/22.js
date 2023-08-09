// forEach

let arrayNum = [10, 20, 30, 40];
arrayNum.forEach(function (element) {
  console.log(element);
});

// forEach in object

const people = [
  {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    city: "New York",
  },
  {
    firstName: "Jane",
    lastName: "Smith",
    age: 28,
    city: "Los Angeles",
  },
  {
    firstName: "Michael",
    lastName: "Johnson",
    age: 25,
    city: "Chicago",
  },
  {
    firstName: "Kshittiz",
    lastName: "Chaudhary",
    age: 22,
    city: "Kathmandu",
  },
];

console.log(people[0].firstName); // Output: John
console.log(people[1].city); // Output: Los Angeles
console.log(people[2].age); // Output: 25

// fullname = firstname+ lastname
// age
// city:
people.forEach(function (person) {
  console.log(
    "Fullname: " +
      person.firstName +
      " " +
      person.lastName +
      " Age:" +
      person.age +
      " City:" +
      person.city
  );
});

// map method in js
/*

map() creates a new array from calling a function for every array element.

map() does not execute the function for empty elements.

map() does not change the original array.
 */

const numbers = [1, 2, 3, 4, 5, 6];
let doubles = numbers.map(function (num) {
  return num * 2;
});

console.log(doubles);

// making array of the people of firstname and lastname only
let fullname = people.map(function (person) {
  return person.firstName + " " + person.lastName;
});

console.log(fullname);

// arraw function
