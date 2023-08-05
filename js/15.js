// // for loop

// // making an array
// let nameList = ["Ram", "Hari", "Shyama", "Krishna"];
// for (let i = 0; i < nameList.length; i++) {
//   console.log(nameList[i]);
// }

// // using for of loop which is not support in internet explore

// for (let name of nameList) {
//   console.log(name);
// }

// console.log("----------------------");
// let seatPlanning = [
//   ["Ram", "Hari", "Shyama", "Krishna"],
//   ["Pooja", "Sharmila", "Sujata", "Samina"],
//   ["Narayan", "Dk", "Samir"],
// ];

// console.log(seatPlanning[0].length);
// for (let i = 0; i < seatPlanning.length; i++) {
//   let row = seatPlanning[i];
//   for (let j = 0; j < row.length; j++) {
//     console.log(row[j]);
//   }
// }

// console.log("----------------------");

// for (let row of seatPlanning) {
//   for (let student of row) {
//     console.log(student);
//   }
// }

// object

// let obj = {
//   key1: "Value1",
//   key2: "Value2",
//   key3: "Value3",
//   key4: "Value4",
//   key5: "Value5",
// };

// for (let i in obj) {
//   console.log(i);
// }

// const person = {
//   name: "John",
//   age: 30,
//   occupation: "Engineer",
// };

// const keys = Object.keys(person);
// for (let key of keys) {
//   console.log(key); // Output: "name", "age", "occupation"
// }

const textScores = {
  keenan: 60,
  Amit: 95,
  Rahul: 45,
  Susil: 90,
  Nadia: 67,
};

for (let key in textScores) {
  console.log(key);
}
// for of loop
for (let value of Object.values(textScores)) {
  console.log(value);
}

// key provide key length of the textScores in object
for (let key of Object.keys(textScores)) {
  console.log(`${key} socres ${textScores[key]}`);
}

// total of the marks
let total = 0;
let len = Object.values(textScores).length;
for (let key of Object.keys(textScores)) {
  total += textScores[key];
}
console.log(`Total: ${total}`); // this will give the total
console.log(`Average: ${total / len}`); // this will give the average
