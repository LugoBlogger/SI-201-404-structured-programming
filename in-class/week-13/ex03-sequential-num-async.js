// The following program will print sequentially
// numbers from 1 to 10 with each one second delay

let state = {num: 0};


let callbackFunc = () => {
  state.num += 1;
  console.log(state.num)};

// Call callbackFunc in one second and then again repeat
// every second after that
let updateIntervalId = setInterval(callbackFunc, 1_000);


// setInterval() returns a value that we can use to stop the
// repeated invocations by calling clearInterval()

function stop_callbackFunc() {
  clearInterval(updateIntervalId);
}

setTimeout(stop_callbackFunc, 10_500);   // add a little bit milliseconds
                                        // from 10 secs.
