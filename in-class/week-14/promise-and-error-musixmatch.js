// This is a version of `event-listeners-musixmatch.js` using Promise object

const HTMLParser = require("node-html-parser");

function displayLyrics(htmlBody) {
  const root = HTMLParser.parse(htmlBody);

    // Enter the lyrics title and lyrics tag area (class=lyricClassAttr)
  let lyricsTitleClassAttr = "css-1rynq56 r-fdjqy7 r-1grxjyw r-zz5t5d r-37tt59 r-5oul0u r-14gqq1x";
  lyricsTitleClassAttr = "." + (lyricsTitleClassAttr.replaceAll(" ", "."));
  let lyricsTitle = root.querySelector(lyricsTitleClassAttr)
    .childNodes[0]._rawText;

  let lyricsClassAttr = "css-175oi2r r-13awgt0 r-eqz5dr r-1v1z2uz";
  lyricsClassAttr = "." + (lyricsClassAttr.replaceAll(" ", "."));
  let selectedLyrics = root.querySelector(lyricsClassAttr).childNodes;

  let lyricsText = [];

  let lyricsPart;
  let lyricsPartClassAttr = "css-175oi2r r-zd98yo";
  let currentLyricsPartClassAttr;
  for (let i = 0; i < selectedLyrics.length; i++) {
    lyricsPart = selectedLyrics[i];

    currentLyricsPartClassAttr = lyricsPart.rawAttrs.split("=")[1].replaceAll("\"", "");
    if (i === 0 || (currentLyricsPartClassAttr !== lyricsPartClassAttr)) { 
      continue; 
    }

    for (let lyricsRow of lyricsPart.childNodes) {
      lyricsText.push(lyricsRow.childNodes[0].childNodes[0]._rawText);
    }
    
  }

  console.log(lyricsTitle);
  // replace HTML straight apostrophe &#x27 with "\'" 
  console.log(lyricsText.join("\n").replaceAll("&#x27;", "\'").trim());
}

function c1(response) {   // callback 1 for handling response
  console.log(response.status);
  if (!response.ok) { return null; }
  
  console.log(response.headers.get("content-type"));
  let p4 = response.text();
  console.log(p4);            // => Promise  { <pending> }
  return p4;                  // return promise 4
}

function c2(htmlBody) {   // callback 2 for parsing
  if (htmlBody) { displayLyrics(htmlBody); }
  else {
    // If we got a 404 error above and returned null, we end up here
    console.log("The link is not correct.");
  }
}

function c3(err) {        // callback 3 for error handling
  // console.log(err);
  if (err instanceof TypeError) { console.log("displayLyrics() failed to parse"); }
  else {
    // This must be some kind of unanticipated error
    console.log(err);
  }
}

const musixmatchURL = "https://www.musixmatch.com/lyrics/"
const url = "Dream-Theater/Through-Her-Eyes-Scene-Five";     // Success

// const musixmatchURL = "https://www.musixmatch.com/lyrics/"
// const url = "Dream-Theater/Through-Her-Eyes-Scene-Three";   // 404. The link is not correct 

// const musixmatchURL = "https://www.musixmatch.com/artist/"
// const url = "Dream-Theater";                                  // displayLyrics() failed to parse

let p1 = fetch(musixmatchURL + url)
  .then(c1)
  .then(c2)
  .catch(c3)
