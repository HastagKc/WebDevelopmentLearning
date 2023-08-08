// Higher order function
function twiceCall(func) {
  func();
  func();
}
function dice() {
  let diceNo = Math.floor(Math.random() * 6) + 1;
  console.log(diceNo);
}

twiceCall(dice);

// function as a return value

let randNum = Math.floor(Math.random() * 10) + 1;
function fun() {
  if (randNum > 5) {
    return function greaterFun() {
      console.log("Greater Than 5");
    };
  }
  if (randNum <= 5) {
    return function smallerFun() {
      console.log("Smaller Than 5");
    };
  }
}
let returnFun = fun();
returnFun();

let rangeFun = function (min, max) {
  return function (age) {
    return age >= min && age <= max;
  };
};

let checkAge = rangeFun(0, 18);
// checkAge variable store function
// checkAge() excute return function
checkAge(12);

console.log(checkAge(12));
