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


function plotBarChart(data) {
  console.log(data);
  console.log(document.querySelector("svg"));

  // Create an x-axis
  let x = d3.scaleBand()
    .range([0, width])
    .domain(data.map((d) => { return d.Food; }))
    .padding(0.2);
  svg.append("g")
    .attr("transform", "translate(0, " + height + ")")
    .call(d3.axisBottom(x))
    .selectAll("text")
      .attr("transform", "translate(-10.0)rotate(-45)")
      .style("text-anchor", "end");

  // Add a y-axis
  let y = d3.scaleLinear()
    .domain([0, 11])
    .range([height, 0 ])
  svg.append("g")
    .call(d3.axisLeft(y));

  // Draw bars
  svg.selectAll("dataBar")
    .data(data).enter()
    .append("rect")
      .attr("x", (d) => { return x(d.Food); })
      .attr("y", (d) => { return y(d.Deliciousness); })
      .attr("width", x.bandwidth())
      .attr("height", (d) => { return height - y(d.Deliciousness); })
      .attr("fill", "teal");

  // Add y-axis label
  svg.append("text")
    .attr("class", "y label")
    .attr("text-anchor", "middle")
    .attr("transform", "rotate(-90)")
    .attr("y", -margin.left + 20)
    .attr("x", -height / 2)
    .style("font-size", "14px")
    .text("Deliciousness");

  // Add plot title
  svg.append("text")
    .attr("x", (width / 2))
    .attr("y", 0 - (margin.top / 2))
    .attr("text-anchor", "middle")
    .style("font-size", "18px")
    .text("Some delicious food");
}

d3.csv("../datasets/food.csv")
  .then(plotBarChart);