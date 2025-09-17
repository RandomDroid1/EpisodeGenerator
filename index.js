// Redirects to mobile site
var w = window.innerWidth;
// Variable stuff!!!!!!!

episode = 0
var text = document.getElementById("text");  // This establishes the variable for the text
var generator = document.getElementById("generator"); // This establishes the variable for the Generator Button
if (generator) {generator.addEventListener("click", getRandomInt);} // Makes sure the Generator is loaded, and runs the two functions
if (generator) {generator.addEventListener("click", displayText);}

  function getRandomInt() {
  show = Math.floor(Math.random() * (9-1)+1);
  console.log(show);
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
    if (show == 3) { // The Americans
      show = "The Americans: "
      season = Math.floor(Math.random() * (7-1)+1); // selects the season number
        if (season == 1) {
          episode = Math.floor(Math.random() * (14-1)+1); // selects the episode number if season one
        }
        if (season == 2) {
          episode = Math.floor(Math.random() * (14-1)+1); // selects the episode number if season two
        }
        if (season == 3) {
          episode = Math.floor(Math.random() * (14-1)+1); // selects the episode number if season third
        }
        if (season == 4) {
          episode = Math.floor(Math.random() * (14-1)+1); // selects the episode number if season four
        }
        if (season == 5) {
          episode = Math.floor(Math.random() * (14-1)+1); // selects the episode number if season five
        }
        if (season == 6) {
          episode = Math.floor(Math.random() * (11-1)+1); // selects the episode number if season six
        }
    }

    if (show == 4) { // Severance
      show = "Severance: "
      season = Math.floor(Math.random() * (3-1)+1); // selects the season number
        if (season == 1) {
          episode = Math.floor(Math.random() * (11-1)+1); // selects the episode number if season one 
        }
        if (season == 2) {
          episode = Math.floor(Math.random() * (10-1)+1); // selects the episode number if season two 
        }
    }

    if (show == 5) {
      show = "Paradise: " // Paradise
      season = Math.floor(Math.random() * (1-1)+1); // selects the season number // kept like this for when the next season releases, easy updating
        if (season == 1) {
          episode = Math.floor(Math.random() * (9-1)+1); // selects the episode number if season one
        }
    }

    if (show == 6) { // Madam Secretary
      show = "Madam Secretary (if you can find somewhere to watch it): ";
      season = Math.floor(Math.random() * (7-1)+1); // selects the season number
        if (season == 1) {
          episode = Math.floor(Math.random() * (23-1)+1); // selects the episode number if season one 
        }
        if (season == 2) {
          episode = Math.floor(Math.random() * (24-1)+1); // selects the episode number if season two 
        }
        if (season == 3) {
          episode = Math.floor(Math.random() * (24-1)+1); // selects the episode number if season third 
        }
        if (season == 4) {
          episode = Math.floor(Math.random() * (23-1)+1); // selects the episode number if season four 
        }
        if (season == 5) {
          episode = Math.floor(Math.random() * (21-1)+1); // selects the episode number if season five 
        }
        if (season == 6) {
          episode = Math.floor(Math.random() * (11-1)+1); // selects the episode number if season six
        }
    }
    if (show == 7) { // Designated Survivor
      show = "Designated Survivor: ";
      season = Math.floor(Math.random() * (4-1)+1); // selects the season number
        if (season == 1) {
          episode = Math.floor(Math.random() * (22-1)+1); // selects the episode number if season one
        }
        if (season == 2) {
          episode = Math.floor(Math.random() * (23-1)+1); // selects the episode number if season two
        }
        if (season == 3) {
          episode = Math.floor(Math.random() * (11-1)+1); // selects the episode number if season third
        }
    }
    if (show == 8) {
         show = "For All Mankind: ";
      season = Math.floor(Math.random() * (5-1)+1); // selects the season number
        if (season == 1) {
          episode = Math.floor(Math.random() * (11-1)+1); // selects the episode number if season one
        }
        if (season == 2) {
          episode = Math.floor(Math.random() * (11-1)+1); // selects the episode number if season two
        }
        if (season == 3) {
          episode = Math.floor(Math.random() * (11-1)+1); // selects the episode number if season third
        }
        if (season == 4) {
          episode = Math.floor(Math.random() * (11-1)+1); // selects the episode number if season four
        }
    }
}

var textList = (episode); // 
function displayText(){
  text.innerHTML = show + "Season " + season + ", Episode " + episode; // sets the uh the uh text to be uh the uh episode and season. Man im such a good coder <:
  }
