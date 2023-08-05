// for loop

// making an array
let nameList = ["Ram", "Hari", "Shyama", "Krishna"];
for (let i = 0; i < nameList.length; i++) {
  console.log(nameList[i]);
}

// using for of loop which is not support in internet explore

for (let name of nameList) {
  console.log(name);
}

console.log("----------------------");
let seatPlanning = [
  ["Ram", "Hari", "Shyama", "Krishna"],
  ["Pooja", "Sharmila", "Sujata", "Samina"],
  ["Narayan", "Dk", "Samir"],
];

console.log(seatPlanning[0].length);
for (let i = 0; i < seatPlanning.length; i++) {
  let row = seatPlanning[i];
  for (let j = 0; j < row.length; j++) {
    console.log(row[j]);
  }
}

console.log("----------------------");

for (let row of seatPlanning) {
  for (let student of row) {
    console.log(student);
  }
}
