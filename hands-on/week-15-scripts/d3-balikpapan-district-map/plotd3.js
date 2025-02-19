// Set the dimensions and margins of the graph
let margin = { top: 30, right: 30, bottom: 100, left: 60 };
let width = 460 - margin.left - margin.right;
let height = 400 - margin.top - margin.bottom;

// Append the svg object to the body of the page
let svg = d3.select("body")
  .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform",
          "translate(" + margin.left + ", " + margin.top +")");


function plotMap(data) {
  console.log(data);
  console.log(document.querySelector("svg"));

  // Create a projection function (our data is in latitude, longitude)
  // This function is needed to project from spherical to cylindrical 
  let projection = d3.geoMercator() .scale(1).translate([0, 0])
    .precision(0);
  console.log(projection);

  // Create a function to translate projected coordinate
  // into SVG path
  let path = d3.geoPath().projection(projection);
  console.log(path);

  // Automatic plot scaling and translation from 
  // "https://stackoverflow.com/questions/23953366
  //  /d3-large-geojson-file-does-not-show-draw-map-properly-using
  //  -projections/24055015#24055015"
  let bounds = path.bounds(data);
  let scale = .95 / Math.max((bounds[1][0] - bounds[0][0]) / width, 
    (bounds[1][1] - bounds[0][1]) / height);
  let transl = [(width - scale * (bounds[1][0] + bounds[0][0])) / 2, 
    (height - scale * (bounds[1][1] + bounds[0][1])) / 2];
  console.log("bounds", bounds)
  console.log("scale", scale);
  console.log("transl",  transl);

  // Add scaling and translation to projection function
  projection.scale(scale).translate(transl);

  // Create polygon for district and give the element iits className
  // to be able doing styling using styles.css
  svg.selectAll(".subunit")
    .data(data.features).enter().append("path")
    .attr("class", (d) => "subunit " + d.properties.KEC_.replace(" ", ""))
    .attr("d", path);


  // Add labels for district name
  svg.selectAll(".subunit-label")
    .data(data.features)
    .enter().append("text")
    .attr("class", (d) => "subunit-label " + d.properties.KEC_.replace(" ", ""))
    .attr("transform", (d) => "translate(" + path.centroid(d) + ")")
    .attr("dy", ".35em")
    .text((d) => d.properties.KEC_ );

}

d3.json("../datasets/balikpapan.geojson")
  .then(plotMap);