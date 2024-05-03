// A function that simulates an asynchronous operation with a delay
function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms, 123));
}

// An asynchronous function that uses the "await" keyword
async function fetchData() {
  console.log("Fetching data...");
  let resolved_val = await delay(2000); // Simulating a delay of 2 seconds
  console.log(resolved_val);
  console.log("Data fetched!");
  return { message: "Hello, World!" };
}

// Using the "await" keyword to wait for the asynchronous function to complete
async function main() {
  console.log("Start");
  const result = await fetchData();
  console.log(result.message);
  console.log("End");
}

// Calling the main function
main();
