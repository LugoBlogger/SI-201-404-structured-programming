// Fetch A JSON api to demonstrate .catch

function displayData(message) {
  
  for (let country of message) {
    if (country.gini) {
      console.log(country.name.common, country.gini);
    }
  }

}

function c1(response) {
  if (!response.ok) {
    return null;
  }

  console.log(response.status)
  
  // Now check the headers to ensure that the server sent us JSON
  // If not, the server is broken.
  let type = response.headers.get('content-type');
  console.log(type);

  if (type !== "application/json") {
    throw new TypeError(`Expected JSON, got ${type}`);
  }

  // If we get here, then we got a 2xx status and a JSON content-type
  // so we confidently return a Promise for the response body as a JSON object
  let p4 = response.json();
  console.log(p4);
  return p4; 
}

function c2(message) {
  if (message) {
    displayData(message);
  }
  else {
    console.log("Message is null or undefined");
  }
}

function c3(err) {
  if (err instanceof TypeError) {
    // This happens if we throw TypeError above
    console.log("Something is wrong with the server");
  }
  else {
    // This must be some kind of unanticipated error
    console.error(err);
  }
}

// https://gitlab.com/restcountries/restcountries
const url = "https://restcountries.com/v3.1/all"

console.log(url);

let p1 = fetch(url)
  .then(c1)
  .then(c2)
  .catch(c3);

// let p1 = fetch(url);
// let p2 = p1.then(c1);
// let p3 = p2.then(c2);
// p3.catch(c3)