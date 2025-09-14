episode = 0
var text = document.getElementById("text");  // This establishes the variable for the text
var generator = document.getElementById("generator"); // This establishes the variable for the Generator Button
if (generator) {generator.addEventListener("click", getRandomInt);} // Makes sure the Generator is loaded, and runs the two functions
if (generator) {generator.addEventListener("click", displayText);}

  function getRandomInt() {
  show = Math.floor(Math.random() * (8-1)+1);
    if (show == 1) { // The West Wing
      show = "The West Wing: "
      season = Math.floor(Math.random() * (8-1)+1); // selects the season number
        if (season == 1) {
          episode = Math.floor(Math.random() * (23-1)+1); // selects the episode number if season one
        }
        if (season == 2) {
          episode = Math.floor(Math.random() * (23-1)+1); // selects the episode number if season two
        }
        if (season == 3) {
          episode = Math.floor(Math.random() * (24-1)+1); // selects the episode number if season third
        } 
        if (season == 4) {
          episode = Math.floor(Math.random() * (24-1)+1); // selects the episode number if season four
        }
        if (season == 5) {
          episode = Math.floor(Math.random() * (23-1)+1); // selects the episode number if season five
        }
        if (season == 6) {
          episode = Math.floor(Math.random() * (23-1)+1); // selects the episode number if season six
        }
        if (season == 7) {
          episode = Math.floor(Math.random() * (23-1)+1); // selects the episode number if season seven
        }
    }
    if (show == 2) { // The Newsroom
      show = "The Newsroom: "
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
    if (show == 3) {
      show = "The Americans: "
    }
    if (show == 4) {
      show = "Severance: "
    }
    if (show == 5) {
      show = "Paradise: "
    }
    if (show == 6) {
      show = "Madam Secretary: "
    }
    if (show == 7) {
      show = "Designated Survivor: "
    }
}

var textList = (episode); // 
function displayText(){
  text.innerHTML = show + "Season " + season + ", Episode " + episode; // sets the uh the uh text to be uh the uh episode and season. Man im such a good coder <:
  }
