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
