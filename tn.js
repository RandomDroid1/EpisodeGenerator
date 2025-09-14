episode = 0
var text = document.getElementById("text");  // This establishes the variable for the text
var generator = document.getElementById("generator"); // This establishes the variable for the Generator Button
if (generator) {generator.addEventListener("click", getRandomInt);} // Makes sure the Generator is loaded, and runs the two functions
if (generator) {generator.addEventListener("click", displayText);}

  function getRandomInt() {
  season = Math.floor(Math.random() * (4-1)+1); // selects the season number
  if (season == 1) {
    episode = Math.floor(Math.random() * (11-1)+1); // selects the episode number if season one 
  }
  if (season == 2) {
    episode = Math.floor(Math.random() * (10-1)+1); // selects the episode number if season two 
  }
  if (season == 3) {
    episode = Math.floor(Math.random() * (7-1)+1); // selects the episode number if season two 
  }
}

var textList = (episode); // 
function displayText(){
  text.innerHTML = "Season " + season + ", Episode " + episode; // sets the uh the uh text to be uh the uh episode and season. Man im such a good coder <:
  }