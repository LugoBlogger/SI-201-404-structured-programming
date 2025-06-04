/* The following program will parse lyrics from utaten.com
 * Logs
 * - 2023/05/05
 *   It is possible that in the future, the website
 *   will change the layout, so we have to revise the parsing procedure.
 * 
 * - 2025/05/21
 *   Update the code according to the new layout and use import module instead
 *   of require.
 *   Add band name and improve the layout
 */

// const https = require('https');
// const HTMLParser = require('node-html-parser');
import https from 'https';
import HTMLParser from 'node-html-parser';

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

  // Enter the lyric div tag area (class="hiragana")
  // There are two types of childNodes (kanji with furigana, the other one
  // is hiragana only)
  let selectedLyrics = root.querySelector('.hiragana').childNodes;
  let lyricsTitle = root.querySelector('.newLyricTitle__main')
    .childNodes[0].rawText;
  lyricsTitle = lyricsTitle.trim();

  // Get artis name
  let lyricsArtist = root.querySelector('.newLyricWork__name')
    .childNodes[1].childNodes[1].childNodes[0]["_rawText"];
  lyricsArtist = lyricsArtist.trim();

  let kanjiText = [];

  for (let htmlElem of selectedLyrics) {
    // console.log(htmlElem);
    // console.log("_rawText" in htmlElem);
    // break;

    if ("_rawText" in htmlElem) {                 // Enter childNodes that contains hiragana only
      // console.log(htmlElem._rawText);
      const rawText = htmlElem._rawText;
      if (rawText !== "\n") {
        kanjiText.push(htmlElem._rawText);
      }
    } else {                                      // Enter childNoes with kanji
      // We enter the .rb class
      let rbElement = htmlElem.querySelector('.rb');    // Select only kanji not furigana
      let rawText = rbElement !== null                  // sometimes the element is null
        ? rbElement.childNodes[0]._rawText : "";
      kanjiText.push(rawText);
    }
  }

  console.log(`${lyricsArtist} - ${lyricsTitle}`);
  console.log(kanjiText.join("").trim());    
}

const url1 = "https://utaten.com/lyric/ac23011918/";   // JYOCHO (文明開化の模様)
const url2 = "https://utaten.com/lyric/hw23040537/";   // ヨルシカ (第一夜)
getText(url2, callback);