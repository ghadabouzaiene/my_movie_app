import React from 'react'
import MovieCard from './MovieCard'
import './MovieList.css'
const Rate = ({movieList,rate}) => {
    return (
        
        <div className='movie-list'>
          {movieList.filter((el)=> el.rating=rate)
          .map((movie)=> {return <MovieCard rate={Rate} />})}
          
        </div>
    )
}

export default Rate;