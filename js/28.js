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

// destructuring in parameters
function fullNameFun({ firstName, lastName }) {
  return `${firstName} ${lastName}`;
}

console.log(fullNameFun(user));

const movies = [
  {
    name: "Harry Potter",
    release: 1990,
    rating: 4.9,
  },
  {
    name: "Pirates",
    release: 1990,
    rating: 4.8,
  },
  {
    name: "SpiderMan",
    release: 1992,
    rating: 4.5,
  },
  {
    name: "Parasite",
    release: 2000,
    rating: 3.5,
  },
  {
    name: "Naran Dai",
    release: 2005,
    rating: 2.5,
  },
  {
    name: "Naraniya",
    release: 2006,
    rating: 3.9,
  },
];

let show = movies.map((movie) => {
  return `${movie.name} (${movie.release}) is rated ${movie.rating}`;
});
console.log(show);

// destructuring in map
let show2 = movies.map(({ name, release, rating }) => {
  return `${name} (${release}) is rated ${rating}`;
});

console.log(show2);
