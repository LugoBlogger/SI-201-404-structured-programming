function readFiles(event) {
  const fileList = event.target.files;
  // console.log(fileList);
  readDataset(fileList[0]);
}

function readDataset(file) {
  const reader = new FileReader();
  let out = d3.csv(file.name, (rows) => {
    return {
      milesData: Number(rows["miles"]),
      gasData: Number(rows["gas"]),
      yearData: rows["year"],
      sideData: rows["side"]
    }
  });

  // console.log(out);
  out.then(plotlyConnectedScatter);
}

function plotlyConnectedScatter(output) {
  let miles = [];
  let gas = [];
  let year = []; 
  let side = [];

  // console.log("output", typeof(output), output)
  for (let row of output) {
    let {milesData, gasData, yearData, sideData} = row;
    // console.log(milesData, gasData, yearData, sideData);
    miles.push(milesData);
    gas.push(gasData);
    year.push(yearData);
    side.push(sideData);
  }

  // console.log("miles", ...miles);

  // design iteration 1 (line)
  let trace1 = {x: miles, y: gas, 
    mode: "lines", 
    type: "scatter",
    line: {
      color: "black"}};

  // design iteration 2 (marker)
  let trace2 = {x: miles, y: gas, 
    mode: "markers", 
    type: "scatter",
    marker: {
      color: "white",
      line: { color: "black", width: 1 }
    },
  };

  // design iteration 3 (year text)
  textside = side.map((elem) => "middle " + elem);
  let x_offset = 60;   // this depends on the unit of miles
  let y_offset = 0.03;     // this depends on the unit of gas
  textxyoffset = {
    x: miles.map((elem, idx) => {
      let offset = 0;
      if (side[idx] === "left") { offset = -x_offset; }
      else if (side[idx] === "right") { offset = x_offset; }
      return elem + offset;
    }),
    y: gas.map((elem, idx) => {
      let offset = 0;
      if (side[idx] === "bottom") { offset = -y_offset; }
      else if (side[idx] === "top") { offset = y_offset; }
      return elem + offset;
    }) 
  }
  let trace3 = {x: textxyoffset.x, y: textxyoffset.y, 
    mode: "text", 
    type: "scatter", 
    text: year, 
    textposition: textside, 
    textfont: { size: 6 }};

  let data = [trace1, trace2, trace3];

  // console.log(data);

  let layout = {
    title: "Driving Shifts Into Reverse",
    margin: { t: 100 }, height: 600, width: 1000,
    showlegend: false 
  };

  const divTester = document.getElementById("tester");
  Plotly.newPlot( divTester, data, layout );
}

const fileSelector = document.getElementById("file-selector");

fileSelector.addEventListener("change", readFiles);