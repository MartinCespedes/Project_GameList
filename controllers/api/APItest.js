
let goodgames = []

let RandomGames = []


const apiKey = "679e7300d01e4563b27ad92076bd7ebc";

// Pulling list of highrated games
function getHighRated() {
    goodgames = []

    fetch(`https://rawg.io/api/games/?token&key=679e7300d01e4563b27ad92076bd7ebc&ordering=-rating`)
        .then(res => res.json())
        .then(data =>
        // Grabs the IDs of 20 games and pushes it into 'goodgames' array
        {
            for (i = 0; i < 20; i++) {

                let gameID = data.results[i].id
                goodgames.push(gameID)

            }
            // console.log(data)
            // calls this function that fetches details for each game
            getGGdetails()
        })
        //  .then(data => console.log(data.results[1].id))
        .catch(error => console.error('Error:', error));
}








function getGGdetails() {
    // loops through each game in the array and pulls the info we want to display for each game
    for (i = 0; i < 20; i++) {

        let slctgame = goodgames[i]
        fetch(`https://rawg.io/api/games/${slctgame}?token&key=679e7300d01e4563b27ad92076bd7ebc`)
            .then(res => res.json())
            .then(data => {
                let gameTitle = data.name;
                let gameImage = data.background_image;
                let gameDesc = data.description;
                let gameRelease = data.released;
                let gameMetaScore = data.metacritic;
                let gameRating = data.rating;
                let gamePlayTime = data.playtime;
                let gameAch = data.achievements_count;

                let gamePlatforms = data.platforms

                let gamePlats = []


                for (i = 0; i < gamePlatforms.length; i++) {

                    let GgPlatforms = data.platforms[i].platform.name
                    gamePlats.push(GgPlatforms)

                }

                let gameStores = data.stores
                let gameShops = []

                for (i = 0; i < gameStores.length; i++) {

                    let gameShop = data.stores[i].store.name
                    let gameShopDomain = data.stores[i].store.domain
                    gameShops.push(gameShop)
                    gameShops.push(gameShopDomain)

                }

                let gameGen = data.genres
                let gameGenres = []

                for (i = 0; i < gameGen.length; i++) {

                    let gameGenre = data.genres[i].name
                    gameGenres.push(gameGenre)

                }

                let gameTa = data.tags
                let gameTags = []

                for (i = 0; i < gameTa.length; i++) {

                    let gameTag = data.tags[i].name
                    gameTags.push(gameTag)

                }

                let gameDeveloper = data.developers
                let gameDevs = []

                for (i = 0; i < gameDeveloper.length; i++) {

                    let gameDev = data.developers[i].name
                    gameDevs.push(gameDev)

                }





                // console.log(gameTitle);
                // console.log(gameImage);
                // console.log(gameDesc);
                // console.log(gameRelease);
                // console.log(gameDevs);
                // console.log(gameMetaScore);
                // console.log(gameRating);
                // console.log(gamePlayTime);
                // console.log(gameAch);
                // console.log(gamePlats)
                // console.log(gameShops);
                // console.log(gameGenres);
                // console.log(gameTags);
                // console.log(data);
            })
    }
};




// getHighRated()
// getGGdetails ()


function getRandomGames() {
    fetch(`https://rawg.io/api/games/?token&key=679e7300d01e4563b27ad92076bd7ebc&ordering=-metacritic`)
        .then(res => res.json())
        .then(data => {

            let GameData = data.results
            RandomGames = []

            for (i = 0; i < GameData.length; i++) {

                let RandoGame = data.results[i].id
                RandomGames.push(RandoGame)

            }
            // console.log(RandomGames)
            selectRandoGame(RandomGames)

        })
}

function selectRandoGame() {

    const randomIndex = Math.floor(Math.random() * RandomGames.length);
    const RGame = RandomGames[randomIndex]
    console.log(RGame)

    fetch(`https://rawg.io/api/games/${RGame}?token&key=679e7300d01e4563b27ad92076bd7ebc`)
        .then(res => res.json())
        .then(data => {

            let RgameTitle = data.name;

            let RgameImage = data.background_image;
            let RgameDesc = data.description;
            let RgameRelease = data.released;
            let RgameMetaScore = data.metacritic;
            let RgameRating = data.rating;
            let RgamePlayTime = data.playtime;
            let RgameAch = data.achievements_count;

            let RgamePlatforms = data.platforms

            let RgamePlats = []


            for (i = 0; i < RgamePlatforms.length; i++) {

                let RGgPlatforms = data.platforms[i].platform.name
                RgamePlats.push(RGgPlatforms)

            }

            let RgameStores = data.stores
            let RgameShops = []

            for (i = 0; i < RgameStores.length; i++) {

                let RgameShop = data.stores[i].store.name
                let RgameShopDomain = data.stores[i].store.domain
                RgameShops.push(RgameShop)
                RgameShops.push(RgameShopDomain)

            }

            let RgameGen = data.genres
            let RgameGenres = []

            for (i = 0; i < RgameGen.length; i++) {

                let RgameGenre = data.genres[i].name
                RgameGenres.push(RgameGenre)

            }

            let RgameTa = data.tags
            let RgameTags = []

            for (i = 0; i < RgameTa.length; i++) {

                let RgameTag = data.tags[i].name
                RgameTags.push(RgameTag)

            }

            let RgameDeveloper = data.developers
            let RgameDevs = []

            for (i = 0; i < RgameDeveloper.length; i++) {

                let RgameDev = data.developers[i].name
                RgameDevs.push(RgameDev)

            }




            console.log(RgameTitle);
            console.log(RgameImage);
            console.log(RgameDesc);
            console.log(RgameRelease);
            console.log(RgameDevs);
            console.log(RgameMetaScore);
            console.log(RgameRating);
            console.log(RgamePlayTime);
            console.log(RgameAch);
            console.log(RgamePlats)
            console.log(RgameShops);
            console.log(RgameGenres);
            console.log(RgameTags);
            // console.log(data);

        })
}



getRandomGames()

const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '126aa9a222msh511ea90b77f0d10p1b34d9jsnbf58338755b4',
        'X-RapidAPI-Host': 'videogames-news2.p.rapidapi.com'
    }
};

fetch('https://videogames-news2.p.rapidapi.com/videogames_news/recent', options)
    .then(res => res.json())
    .then(data => {
        // console.log(data)

        for (i = 0; i < data.length; i++) {

            let newsTitle = data[i].title
            let newsDate = data[i].date
            let newsDesc = data[i].description
            let newsLink = data[i].link
            let newsImg = data[i].image
            
            let newsContainer = document.createElement('div')
            let newsImgcon = document.createElement('img')
		    newsImgcon.classList.add("img")
		    let newstitlecon = document.createElement('h2')
            let newsDatecon = document.createElement('h3')
            let newsDescription = document.createElement('h3')
            
            newsContainer.classList.add("")
            newsImgcon.src = newsImg
            newstitlecon.textContent = newsTitle
            newstitlecon.href = newsLink
            newsDatecon.textContent = newsDate
            newsDescription.textContent = newsDesc

            newsContainer.appendChild(newsImgcon)
		    newsContainer.appendChild(newstitlecon)
            newsContainer.appendChild(newsDatecon)
		    newsContainer.appendChild(newsDescription)






        }


    })
    .catch(err => console.error(err));

