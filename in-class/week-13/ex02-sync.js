function setTimeoutSync(callback, delay) {
  const start = Date.now();
  while (Date.now() - start < delay) {
    // Do nothing and wait for the specified delay
  }
  callback();
}

console.log("delay two seconds from now")

const callbackFunc = () => {
  console.log("run after two seconds"); };
setTimeoutSync(callbackFunc, 2_000);

console.log("You cannot run this during 2 seconds.")