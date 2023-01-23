const { clear } = require('console');
const fs = require('fs');
const { finished } = require('stream');

const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '126aa9a222msh511ea90b77f0d10p1b34d9jsnbf58338755b4',
        'X-RapidAPI-Host': 'videogames-news2.p.rapidapi.com'
    }
};

news=[];

function getNews(){

fetch('https://videogames-news2.p.rapidapi.com/videogames_news/recent', options)
    .then(res => res.json())
    .then(data => {
        // console.log(data)

        news = []

        for (i = 0; i < data.length; i++) {

            let newsProperties = {
                title: data[i].title,
                date: data[i].date,
                description: data[i].description,
                image: data[i].image,
                link: data[i].link

            }
            news.push(newsProperties)
            console.log(news)

            // let jsonData = JSON.stringify(games, null, 2);

            fs.writeFileSync('./seeds/newsData.json', JSON.stringify(news, null, 2), finished)
        }

    })
    .catch(err => console.error(err));


}

getNews();