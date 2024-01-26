function readData(data) {
  console.log(data);
}

d3.csv("../datasets/food.csv")
  .then(readData);