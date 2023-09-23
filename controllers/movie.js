const movies = require('express').Router()
const movie = require('../models/movie')
const Movie = require('../models/movie')
const movieseedData = require('../models/movieSeedData')


//Seed data route
movies.get('/data/seed', async (req, res)=>{
  
  await Promise.all([Movie.deleteMany()])
  const movies = await Movie.insertMany(movieseedData)
  const movieIds = movies.map(movie => movie._id)
  // res.redirect('/movies')
  res.json(movies)
})


//Home Route for all the movies
movies.get('/', async(req, res)=>{//this route works fine
  const API = await fetch('https://api.themoviedb.org/3/trending/movie/week?api_key=8a84e44e1b62f0e80accee95d9a91cd0')
  trendingMovies = await API.json()

  const movies = await Movie.find()
  res.render('index', {movies, trendingMovies})
})



//Carousel
movies.get('/carousel', async (req, res) => {
  const movies = await Movie.find()
  res.render('example', {movies})
})

//Create a movie
movies.post('/', async (req, res)=>{//this route needs work. It does post but without the body even though i put a subject in the body of postman
  console.log("I was hit")
  console.log(req.body)
  let createdMovie = await Movie.create(req.body)
  res.json(createdMovie)
})

//Get a specific movie page
movies.get('/:id', async (req, res)=>{//this route works fine
  const {id} = req.params
  const movie = await Movie.findById(id)
  res.render('movieShow', {movie})
  // res.json(movie)
})


//Render new movie page
movies.get('/newmovie', async (req, res)=>{
  const movies = await Movie.find()
  // res.render('newMovie', {movies})// newmovie needs to be created
})

//Get edit page for movie
movies.get('/:id/edit', async (req, res)=>{
  const {id}= req.params
  let movie = await Movie.findById(id)
  // res.render('moviesEdit', {movie})// moviesEdit needs to be created
  res.json(movie)
})
movies.delete('/:id', async (req, res)=>{
  const {id} = req.params
 let deletedMovie = await Movie.findByIdAndDelete(id)
  // res.redirect('/movies')
  res.json(deletedMovie)
})

movies.put('/:id', async (req, res)=>{
  const {id} = req.params
  let updatedMovie = await Movie.findByIdAndUpdate(id, req.body)
  // res.status(303).redirect(`/movies/${id}`)
  res.json(updatedMovie)
})

module.exports = movies