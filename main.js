let $ = document;
let titleElem = $.querySelector(".title");
let convertBtn = $.querySelector(".convert");
let resetBtn = $.querySelector(".reset");
let changeBtn = $.querySelector(".change");
let userInput = $.querySelector("#input");
let resultElem = $.querySelector(".result");
function convert() {
  let convertResult;
  if (typeof userInput.value != "number") {
    resultElem.innerHTML = "Write correct value!";
    resultElem.style.color = "#E65100";
    resultElem.style.visibility = "visible";
  } else {
    if (userInput.getAttribute("placeholder") === "°C") {
      convertResult = (userInput.value * (9 / 5) + 32).toFixed(2);
      resultElem.innerHTML = userInput.value + " °C to " + convertResult + " F";
      resultElem.style.visibility = "visible";
    } else {
      convertResult = (userInput.value - 32) * (5 / 9).toFixed(2);
      resultElem.innerHTML = userInput.value + " F to " + convertResult + " °C";
      resultElem.style.visibility = "visible";
    }
  }
}
function reset() {
  userInput.value = "";
  resultElem.style.visibility = "hidden";
}
function change() {
  if (titleElem.innerHTML === "Convert °C to F") {
    titleElem.innerHTML = "Convert F to °C";
    $.title = "F to °C";
    userInput.setAttribute("placeholder", "F");
  } else {
    titleElem.innerHTML = "Convert °C to F";
    $.title = "°C to F";
    userInput.setAttribute("placeholder", "°C");
  }
}
convertBtn.addEventListener("click", convert);
resetBtn.addEventListener("click", reset);
changeBtn.addEventListener("click", change);
