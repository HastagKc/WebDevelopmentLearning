// DEFINE YOUR FUNCTION BELOW:
function capitalize(str) {
  let newString = str.slice(0, 1);
  //   console.log(newString);

  return newString.toUpperCase() + str.slice(1, str.length);
}
let cap = capitalize("eggplant");
console.log(cap);

// DEFINE YOUR FUNCTION BELOW:
function returnDay(num) {
  if (num < 1 || num > 7) {
    return null;
  }
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  return days[num - 1];
}

function dayReturn2(num) {
  if (num === 1) {
    return "Sunday";
  } else if (num === 2) {
    return "Monday";
  } else if (num === 3) {
    return "Tuesday";
  } else if (num === 4) {
    return "Wednesday";
  } else if (num === 5) {
    return "Thursday";
  } else if (num === 6) {
    return "Friday";
  } else if (num === 7) {
    return "Saturday";
  } else {
    return null;
  }
}

console.log(dayReturn2(5)); //Thursday
let day = returnDay(3);
console.log(day);
