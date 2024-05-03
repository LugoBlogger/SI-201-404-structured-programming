// A function that simulates an asynchronous operation with a delay
function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function fetchData() {
  console.log("Fetching data...");
  delay(2000); // Simulating a delay of 2 seconds
  console.log("Data fetched!");
  return { message: "Hello, World!" };
}

function main() {
  console.log("Start");
  const result = fetchData();
  console.log(result.message);
  console.log("End");
}

// Calling the main function
main();

