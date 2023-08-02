// nested loop in js

for (let i = 1; i <= 5; i++) {
  console.log(`Outer loop: ${i}`);
  for (let j = 1; j <= 5; j++) {
    console.log(`Inner loop: ${j}`);
  }
}

const seatPlanning = [
  ["Rahul", "Sharmila", "Suresh"],
  ["Dikamber", "Narayan", "Susil"],
  ["Ram", "Amit", "Bibek"],
];

console.log(seatPlanning[0][1]);
