import React from 'react'
import MovieCard from './MovieCard'
import './MovieList.css'
import Rate from './Rate'
const MovieList = ({movieList,search}) => {
    return (
        
        <div className='movie-list'>
          {movieList.filter(movie=> movie.title.toUpperCase().match(search.toUpperCase()))
          .map((movie)=> {return <MovieCard movieCard={movie} rate={Rate}/>})}
        </div>
    )
}

export default MovieList;