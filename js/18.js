// function scope

let bird = "Sprrow";

function birdFun() {
  let bird = "Parrot";
  console.log(bird);
}

birdFun(); // Parrot
console.log(bird); // Sprrow

// block scope
let num = 7;
if (num > 0) {
  let num2 = 80;
  console.log(num2);
}

// console.log(num2); //num2 is not defined

// lexical scope
// parent function variable is accessble to inner loop

function fun1() {
  let message = "Lexical scope ";

  function fun2() {
    message = "inner";
    function fun3() {
      message = "inner3";
      console.log(message);
    }
    fun3();
  }
  fun2();
}

fun1();
