// nested loop in js

for (let i = 1; i <= 5; i++) {
  console.log(`Outer loop: ${i}`);
  for (let j = 1; j <= 5; j++) {
    console.log(`Inner loop: ${j}`);
  }
}

const seatPlanning = [
  ["Rahul", "Sharmila", "Suresh", "Rahul-1", "Sharmila-2", "Suresh-3"],
  ["Dikamber", "Narayan", "Susil"],
  ["Ram", "Amit", "Bibek"],
];

console.log(seatPlanning[0][1]); // Sharmila
console.log(seatPlanning.length); // length is property not a method this will
// give you length of the array

for (let i = 0; i < seatPlanning.length; i++) {
  for (let j = 0; j < seatPlanning[i].length; j++) {
    console.log(seatPlanning[i][j]);
  }
}

for (let i = 0; i < seatPlanning.length; i++) {
  console.log(`Row no: ${i}`);
  for (let j = 0; j < seatPlanning[i].length; j++) {
    console.log(seatPlanning[i][j]);
  }
}

console.log(seatPlanning[0].length); // 6

//! while loop

let input = prompt("Say something ");

while (true) {
  input = prompt(input);

  if (input.toLowerCase() == "stop") {
    console.log("You win");
    break;
  }
}
