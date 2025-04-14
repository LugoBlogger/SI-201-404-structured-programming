function changeColor() {
  outElement = document.getElementById("output");
  // console.log(outElement.className);
  
  let currentClass = outElement.className;
  if (currentClass === "" || currentClass === "green") {
    outElement.className = "red";
  } else { 
    outElement.className = "green";
  } 
}

let btnChange = document.getElementById("change");

btnChange.addEventListener("click", changeColor);