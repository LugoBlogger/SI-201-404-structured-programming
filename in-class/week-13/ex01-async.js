console.log("delay two seconds from now");

const callbackFunc = () => {
  console.log("run after two seconds")};
setTimeout(callbackFunc, 2_000)

console.log("do something during 2 secs.");