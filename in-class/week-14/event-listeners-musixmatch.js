/* Logs
 * - 2024/05/01
 *   The following program will parse lyrics from musixmatch.com
 *   Update 2024 May 01. It is possible that in the future, the website
 *   will change the layout, so we have to revise the parsing procedure.
 * 
 * - 2024/05/07
 *   Update importing https and HTMLParser using `import moduleName from 'module'`.
 *   Use rawText instead of _rawText. Update `lyricsTitleClassAttr`
 */

// to use import syntax, set in package.json {"type": "module"}
// const https = require('https');
// const HTMLParser = require('node-html-parser');
import https from "https";
import HTMLParser from "node-html-parser";

// Read the text content of the URL and asynchronously pass it to the callback
function getText(url, callback) {
  // Start an HTTP GET request for the URL
  let request = https.get(url);
  
  // Register a function to handle the "response" event
  request.on("response", response => {
    // The response event means that response headers have been received
    let httpStatus = response.statusCode;

    // console.log(httpStatus);

    // The body of the HTTP response has not been received yet.
    // So we register more event handlers to be called when it arrives.
    response.setEncoding("utf-8");    // We're expecting Unicode text
    let body = "";                    // which we will accumulate here.

    // The event handler is called when a chunk of the body is ready
    response.on("data", chunk => { body += chunk; });

    // This event handler is called when the response is complete
    response.on("end", () => {
      if (httpStatus === 200) {         // If the HTTP response was good
        console.log(httpStatus);
        callback(null, body);           // Pass response body to the callback
      } else {                          // Otherwise pass an error
        callback(httpStatus, null);
      }
    });
  });
  
  // We also register an event handler for lower-level network errors
  request.on("error", (err) => {
    callback(err, null);
  });
}

function callback(err, data) {
  if (err) {
    console.error(`Error: ${err}`);
    return;
  }
  
  // Parsing the html 
  // console.log(`Data: ${data}`);
  const root = HTMLParser.parse(data);

  let lyricsArtistClassAttr = "css-175oi2r r-1awozwy r-izgom r-1m7mu0x r-18u37iz r-1r8g8re r-1777fci r-ws14 r-1j93nrh r-3pj75a";
  lyricsArtistClassAttr = "." + (lyricsArtistClassAttr.replaceAll(" ", "."));
  let lyricsArtist = root.querySelector(lyricsArtistClassAttr)
    .childNodes[2].childNodes[1].rawText;
  // console.log(lyricsArtist);

  // Enter the lyrics title and lyrics tag area (class=lyricClassAttr)
  // let lyricsTitleClassAttr = "css-1rynq56 r-fdjqy7 r-1grxjyw r-zz5t5d r-37tt59 r-5oul0u r-14gqq1x";
  let lyricsTitleClassAttr = "css-146c3p1 r-fdjqy7 r-1grxjyw r-zz5t5d r-37tt59 r-5oul0u r-14gqq1x";
  lyricsTitleClassAttr = "." + (lyricsTitleClassAttr.replaceAll(" ", "."));
  let lyricsTitle = root.querySelector(lyricsTitleClassAttr)
    .childNodes[0].rawText;

  let lyricsClassAttr = "css-175oi2r r-13awgt0 r-eqz5dr r-1v1z2uz";
  lyricsClassAttr = "." + (lyricsClassAttr.replaceAll(" ", "."));
  let selectedLyrics = root.querySelector(lyricsClassAttr).childNodes;
  // console.log(selectedLyrics[0].rawAttrs.split("=")[1]);

  let lyricsText = [];

  let lyricsPart;
  let lyricsPartClassAttr = "css-175oi2r r-zd98yo";   // song section <div>
  let lyricsPartFormAttr = "css-175oi2r r-k200y r-18u37iz";  // for song section
  let lyricsPartTextRowAttr = "css-175oi2r r-18u37iz r-1w6e6rj";  // for each row of lyrics
  let currentLyricsPartClassAttr;
  let currentLyricsPartFormOrTextAttr;
  for (let i = 0; i < selectedLyrics.length; i++) {
    lyricsPart = selectedLyrics[i];

    currentLyricsPartClassAttr = lyricsPart.rawAttrs.split("=")[1].replaceAll("\"", "");
    if (i === 0 || (currentLyricsPartClassAttr !== lyricsPartClassAttr)) { 
      continue; }

    for (let lyricsRow of lyricsPart.childNodes) {
      currentLyricsPartFormOrTextAttr = lyricsRow.rawAttrs.split("=")[1].replaceAll("\"", "");
      if (currentLyricsPartFormOrTextAttr === lyricsPartFormAttr) {
        lyricsText.push(lyricsRow.childNodes[0].childNodes[0].rawText);
      } else {
        lyricsText.push("  " + lyricsRow.childNodes[0].childNodes[0].rawText);
      }
    }
    
  }

  console.log(`${lyricsArtist} - ${lyricsTitle}`);
  // replace HTML straight apostrophe &#x27 with "\'" 
  console.log(lyricsText.join("\n").replaceAll("&#x27;", "\'").trim());
}

const musixmatchURL = "https://www.musixmatch.com/lyrics/"
// const url = "Dream-Theater/Through-Her-Eyes-Scene-Five";
// const url = "Taylor-Swift/Fortnight-Post-Malone";
// const url = "MY-FIRST-STORY/Second-limit";
const url = "sakanaction-2/怪獣";

// const musixmatchURL = "https://www.musixmatch.com/lyrics/"
// const url = "Dream-Theater/Through-Her-Eyes-Scene-Three";   // 404. The link is not correct 

// const musixmatchURL = "https://www.musixmatch.com/artist/"
// const url = "Dream-Theater";                                  // We cannot catch this error 

getText(musixmatchURL + url, callback);
