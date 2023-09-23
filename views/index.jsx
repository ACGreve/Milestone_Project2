const React = require('react')
const Default = require('./layouts/default')
const movie = require('../controllers/movie')

//breads is the name of the array of objects
function Index ({ movies, trendingMovies }) {
    const movieDisplay = movies.map((movie) => {
        return (
            //interpolates throught the bread array
            //adds a hyperlink to the index of the breads array (which changes the webpage because of the code in bread.js in controllers/models)
            <li key={movie._id}>
                <a href={`/movies/${movie._id}`}>
                    {movie.original_title}
                </a>
            </li>
        )
    })

    const trendingDisplay = trendingMovies.results.map(movie => {
        return (
            <li key={movie.id}>
                {movie.title}
            </li>
        )
    })
    // const bakerDisplay = bakers.map(baker => {
    //     return (
    //         <li key={baker._id}>
    //             <a href={`/bakers/${baker._id}`}>
    //                 {baker.name}
    //             </a>
    //         </li>
    //     )
    // })

    return (
      <Default>
        <h2>Movies</h2>
    <div>
    {movieDisplay}
    {trendingDisplay}
    </div>
      </Default>
    )
}

module.exports = Index