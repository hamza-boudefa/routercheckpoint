import React from 'react'
import Movie from './Movie'

const MovieList = ({movies,search, rating}) => {
  return (
    <div className='movies'>
       { movies.filter((el)=> el.rate>=rating && el.title.toLowerCase().includes(search.toLowerCase())).map((movies)=> < Movie movies={movies} />) }
    </div>
  )
}

export default MovieList