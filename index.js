
episode = 0
var text = document.getElementById("text");  // This establishes the variable for the text
var generator = document.getElementById("generator"); // This establishes the variable for the Generator Button
if (generator) {generator.addEventListener("click", getRandomInt);} // Makes sure the Generator is loaded, and runs the two functions
if (generator) {generator.addEventListener("click", displayText);}


function generatenumbers(){
   wagg = Math.floor((Math.random() * 7) + 1); // sets the value for the seasons, from 1-7 because thats how many seasons i need :3

}
  function getRandomInt() {
  mazda = Math.floor(Math.random() * 3);
  console.log(mazda);
}

var textList = (episode); // 
function displayText(){
  text.innerHTML = mazda; // sets the uh the uh text to be uh the uh episode and season. Man im such a good coder
  }



