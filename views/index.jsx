const React = require('react')
const Default = require('./layouts/default')
import Carousel from 'react-bootstrap/Carousel';
import '../public/bootstrap.min.css'

function Index ({ movies, trendingMovies }) {
    const trendingDisplay = trendingMovies.results.map(movie => {
        return (
                <div className='white' key={movie.id}>
                    <a href={`https://image.tmdb.org/t/p/original`+movie.poster_path}>
                        {movie.title}
                    </a>
                </div>
        )  
    })

    const posterDisplay = trendingMovies.results.map(movie => {
        return (
            <div id='poster' key={movie.id}>
                <li>
                    {movie.poster_path}
                    </li>
            </div>
        )        
    })

    const altDisplay = movies.map((movie) => {
        return (
            <div id='alt' key={movie.id}>
                <a href={`/movies/${movie.id}`}>
                    {movie.original_title}
                </a>
            </div>
        )        
    })

    const overviewDisplay = trendingMovies.results.map(movie => {
        return (
            <div id='overview' key={movie._id}>
                <a href={`/movies/${movie._id}`}>
                    {movie.overview}
                </a>
            </div>
        )        
    })

    const movieDisplay = movies.map((movie) => {
        return (
            <li key={movie.id}>
                <a href={`/movies/${movie.id}`}>
                    {movie.original_title}
                </a>
            </li>
        )
    })


    return (
        <html>
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
        integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM"
        crossOrigin="anonymous"
      />

      <Default>
         <h2>Trending Movies</h2>
        <h5>{trendingDisplay}</h5>
      </Default>
      </html>
    )
}

module.exports = Index