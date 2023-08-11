let numbersList = [10, 20, 30, 35, 45];

// map() returns array as per the callback function
let squreList = numbersList.map((num) => {
  return num * num;
});

console.log(squreList);

// creating arrayOfObject

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

// this code will return fullName by concating firstname and lastname
// that will concat into fullNameArray
let fullNameArrayy = people.map(function (person) {
  return person.firstName + " " + person.lastName;
});

console.log(fullNameArrayy);
