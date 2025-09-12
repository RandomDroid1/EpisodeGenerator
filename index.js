
var factList = [
 "guh", "wuh"];

var fact = document.getElementById("episode");
var GenerateButton = document.getElementById("generator");
var count = 0;
if (GenerateButton) {
  GenerateButton.addEventListener("click", displayFact);
}
function displayFact(){
  fact.innerHTML = factList[count];
  count++;
  if (count == factList.length){
    count = 0;
  }
}
