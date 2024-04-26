let clock = setInterval(() => {
  console.clear();
  console.log(new Date().toLocaleTimeString());
}, 1_000);

setTimeout(() => { clearInterval(clock); }, 11_000);
// clearTimeout(clock);
