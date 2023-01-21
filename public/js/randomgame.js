// using axios so we use another packager per prooject requirements

const axios = require("axios");

async function suggestRandomGame() {
  try {
    //make a GET request to the API endpoint
    const response = await axios.get("API LINK GOES HERE");
    //store the games data in a variable
    const games = response.data;
    //generate a random index number
    const randomIndex = Math.floor(Math.random() * games.length);
    //select a random game from the games array
    const randomGame = games[randomIndex];
    //log the name of the random game
    // add wherever you want to diplsay msg
    console.log(`How about trying out "${randomGame.name}"`);
  } catch (error) {
    console.log(`An error occurred: ${error}`);
  }
}

suggestRandomGame();