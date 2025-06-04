// A demonstration to show chunk in node.js
// This chunk is a variable in a callback of response.on(), see \
// `event-listeners-musixmatch.js`
// This example is a copy from https://www.geeksforgeeks.org/what-is-chunk-in-node-js/

// Run this file (index.js) with node.js and open in the browser localhost:3000
// console.log will print the output in VSCode terminal where we run index.js

// Importing https libraries
// to use import syntax, set in package.json {"type": "module"}
// const http = require("http");
import http from "http";

// Creating a server
const server = http.createServer((req, res) => {
  const url = req.url;
  const method = req.method;

  if (url === '/') {
    // Sending the response
    res.write(`<html lang="en-US">`);
    res.write("<head><title>Enter Message</title><head>");
    res.write(`<body><form action="/message" method="POST">
      <label for="name">Please enter any string: </label>
      <input type="text" id="message" name="message"></input>
      <button type="submit">Send</button></form></body>`);
    res.write("</html>")  ;
    return res.end()
  }

  // Handling different routes for different type request
  if (url === "/message" && method === "POST") {
    const body = [];

    req.on("data", (chunk) => {
      // Storing the chunk data
      body.push(chunk);
      console.log("chunk", chunk);
    });

    console.log("body", body)

    req.on("end", () => {
      // Parsing the chunk data
      const parseBody = Buffer.concat(body).toString();
      const message = parseBody.split("=")[1];

      // Printing the data
      console.log("message", message);
    });

    res.statusCode = 302;
    res.setHeader("Location", "/");
    return res.end();
  }
});

// Starting the server
server.listen(3000);
console.log(" Go to: http://localhost:3000");
console.log(" Press Ctrl+C to stop the server");
