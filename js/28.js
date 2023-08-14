//Destructuring from array

let scores = [110, 100, 90, 80, 70, 60, 50];

const [highScore, secondScore, ...restScore] = scores;
console.log(highScore);
console.log(secondScore);

console.log(...restScore);

// destructuring from object

const user = {
  firstName: "Kshittiz",
  lastName: "Chaudhary",
  email: "kc@gmail.com",
  bron: 2001,
  city: "kalanki",
};

const { email, firstName, lastName } = user;
console.log(firstName);
console.log(lastName);
console.log(email);

// rename
const { city: bornCity } = user;
console.log(bornCity);

// default value
const user2 = {
  name: "Ram Shresth",
  email: "r@gmail.com",
  bron: 1985,
};

const { name: fullName, death = "Still Alive" } = user2;
console.log(fullName);
console.log(death);
