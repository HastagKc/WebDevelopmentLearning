function hello(msg) {
  try {
    console.log(msg.toUpperCase().repeat(5));
  } catch (e) {
    console.log(e);
    console.log("Pass string value ");
  }
}
hello(21545);
