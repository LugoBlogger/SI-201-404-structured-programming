/* The following program will parse lyrics from utaten.com
 * Update 2023 May 05. It is possible that in the future, the website
 * will change the layout, so we have to revise the parsing procedure.
 */

const https = require('https');
const HTMLParser = require('node-html-parser');

// Read the text content of the URL and asynchronously pass it to the callback
function getText(url, callback) {
  // Start an HTTP GET request for the URL
  request = https.get(url);
  
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
    .childNodes[0]._rawText;

  let kanjiText = [];

  for (let htmlElem of selectedLyrics) {
    if ("_rawText" in htmlElem) {                 // Enter childNodes that contains hiragana only
      // console.log(htmlElem._rawText);
      kanjiText.push(htmlElem._rawText);
    } else {                                      // Enter childNoes with kanji
      // We enter the .rb class
      let rbElement = htmlElem.querySelector('.rb');    // Select only kanji not furigana
      let rawText = rbElement !== null                  // sometimes the element is null
        ? rbElement.childNodes[0]._rawText : "";
      kanjiText.push(rawText);
    }
  }

  console.log(lyricsTitle.trim());
  // console.log(kanjiText.join("").trim());    
}

const url1 = "https://utaten.com/lyric/ac23011918/";   // JYOCHO (文明開化の模様)
const url2 = "https://utaten.com/lyric/hw23040537/";   // ヨルシカ (第一夜)
getText(url2, callback);