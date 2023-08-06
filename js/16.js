let obj = {
  stu1: "Value1",
  stu2: "Value2",
  stu3: "Value3",
  stu4: "Value4",
};

// i will give the key
// and obj[i] give value to the respective key
for (let i in obj) {
  console.log(i);
  console.log(obj[i]);
}

for (let i of Object.keys(obj)) {
  console.log(`${i} => ${obj[i]}`);
}
