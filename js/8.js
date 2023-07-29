// falsy value in js

// false, zero, "" (empty string), null, undefined, NaN
// beside everything is truthly value

// false
let isFalse = false;
if (isFalse) {
  console.log("Truthly");
} else {
  console.log("Falsy");
}

// empty string
let name = "";
if (name) {
  console.log("Truthly");
} else {
  console.log("Falsy");
}

// null
let num = null;
if (num) {
  console.log("Truthly");
} else {
  console.log("Falsy");
}

// undefined
let var1 = undefined;
if (var1) {
  console.log("Truthly");
} else {
  console.log("Falsy");
}

// zero
let var2 = 0;
if (var2) {
  console.log("Truthly");
} else {
  console.log("Falsy");
}

// NaN
let var3 = NaN;
if (var3) {
  console.log("Truthly");
} else {
  console.log("Falsy");
}
