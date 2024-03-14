function setHTML(elementId, value) {
  document.getElementById(elementId).innerHTML = value; 
}

function setImage(elementId, value) {
  document.getElementById(elementId).src = value;
}

// To use IJS, install: npm install image-js
// Use live-preview extension in VSCode to show html
async function process() {
  let image = await IJS.Image.load(document.getElementById("catImage").src);
  // let image = document.getElementById("catImage").src;
  console.log(image);

  let grey = image.grey();
  // let redChannel = image.split()[0];
  
  // Masking channels to make monochrome color
  let redChannel = image.clone()
  let greenChannel = image.clone();
  let blueChannel = image.clone();   

  for (let i = 0; i < redChannel.sizes[0] * redChannel.sizes[1]; i++) {
    redChannel.data[1 + i*4] = 0;
    redChannel.data[2 + i*4] = 0;
    redChannel.data[3 + i*4] = 240;

    greenChannel.data[0 + i*4] = 0;
    greenChannel.data[2 + i*4] = 0;

    blueChannel.data[0 + i*4] = 0;
    blueChannel.data[1 + i*4] = 0;
    blueChannel.data[3 + i*4] = 240;
  }


  // let rgbData = image.getRGBAData();
  let rgbData = image.getPixelsArray();

  // document.getElementById("result").src = grey.toDataURL();
  setImage("redChannel", redChannel.toDataURL());
  setImage("greenChannel", greenChannel.toDataURL());
  setImage("blueChannel", blueChannel.toDataURL());

  let size = [image.width, image.height];
  document.getElementById("size").innerHTML = `size: ${size}`;
  
  let component = image.components;
  setHTML("component", `component: ${component}`);

  let redChannelData = redChannel.getPixelsArray();
  setHTML("redChannelData", `redChannelData: ${redChannelData}`);

  let rgbDataStr = [...rgbData].join("],  [");
  document.getElementById("output").innerHTML = `rgbData: [[${rgbDataStr}]]`;
 
  let length = rgbData.length;
  document.getElementById("length").innerHTML = `length: ${length}`
}

process();