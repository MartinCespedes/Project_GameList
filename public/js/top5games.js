const express = require('express');
const axios = require('axios');

const app = express();

// Need to test this with our API 

app.get('/games', async (req, res) => {
  try {
    const response = await axios.get('API_URL');
    const games = response.data.games;
    // sorts top 5 games, depending on how API works. 
    const topFiveGames = games.sort((a, b) => b.rating - a.rating).slice(0, 5);
    res.json(topFiveGames);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error getting games from API' });
  }
});

// For testing --- can be removed or modified to fit into our application 
app.listen(3000, () => {
  console.log('Server started on port 3000');
});