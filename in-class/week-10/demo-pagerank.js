const formatNum = require('@stdlib/string-format');

function printPageRank(t, pageRankArr) {
  let roundNum = pageRankArr.map((num) => formatNum('%.4f', num))
  console.log('pageRank at t=', formatNum("%3d", t), roundNum);
}

function pageRank(connectiveMatrix, totalIteration) {
  let initPageRank = Array.from(
    // {length: connectiveMatrix[0].length}, 
    new Array(connectiveMatrix[0].length),
     () => 1/connectiveMatrix[0].length);
  // console.log(initPageRank);
  let currentPageRank = Array.from(initPageRank);
  let nextPageRank = Array.from(initPageRank);
  let numOfPages = initPageRank.length;
  let L_pi_arr = connectiveMatrix.map(
    arr => arr.reduce((acc, curr) => acc + curr, 0));
  let isIncoming;

  for (let t = 0; t < totalIteration; t++) {
    printPageRank(t, nextPageRank);

    nextPageRank = new Array(numOfPages).fill(0);

    for (let pi = 0; pi < numOfPages; pi++) {
      for (let pj = 0; pj < numOfPages; pj++) {
        isIncoming = connectiveMatrix[pj][pi];
        if (isIncoming === 1) {
          nextPageRank[pi] += currentPageRank[pj] / L_pi_arr[pj];
        }
      }
    }
    currentPageRank = [...nextPageRank];
  }
}


pageRank([[0, 0, 0, 1], [1, 0, 1, 0], [1, 0, 0, 0], [1, 1, 1, 0]], 30);