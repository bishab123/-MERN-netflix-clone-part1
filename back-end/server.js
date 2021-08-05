const express = require('express')
const actionMovies = require('./data/actionMovies')
const netflixOriginals = require('./data/netflixOriginals')
const topRated = require('./data/topRated')
const trending = require('./data/trending')

const dotenv = require ('dotenv')
dotenv.config()

const app = express()

const PORT = process.env.PORT || 5000
app.listen(PORT, console.log(`Node JS Server is running in ${process.env.NODE_ENV} mode on port: ${PORT}`));



// Handling HTTP GET requests..
app.get('/', (request, response) => {
    response.send("API is running...")
})

app.get('/api/action-movies', (request, response) => {
    response.json(actionMovies);  // converting into JSON content type
})

app.get('/api/action-movies/detail/:id', (request, response) => {
    const actionMovie = actionMovies.find((movie) => movie.id == request.params.id)
    response.json(actionMovie);  // converting into JSON content type
})



app.get('/api/netflix-originals', (request, response) => {
    response.json(netflixOriginals);  // converting into JSON content type
})
app.get('/api/netflix-originals/detail/:id', (request, response) => {
    const netflixOriginal = netflixOriginals.find((movie) => movie.id == request.params.id)
    response.json(netflixOriginal);  // converting into JSON content type
})



app.get('/api/top-rated-movies', (request, response) => {
    response.json(topRated);  // converting into JSON content type
})
app.get('/api/top-rated-movies/detail/:id', (request, response) => {
    const topRatatedMovie = topRated.find((movie) => movie.id == request.params.id)
    response.json(topRatatedMovie);  // converting into JSON content type
})



app.get('/api/trending-movies', (request, response) => {
    response.json(trending);  // converting into JSON content type
})
app.get('/api/trending-movies/detail/:id', (request, response) => {
    const trendingMovie = trending.find((movie) => movie.id == request.params.id)
    response.json(trendingMovie);  // converting into JSON content type
})
