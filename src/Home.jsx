import React from 'react'   
import MovieCard from './MovieCard'
const Home = ({movies}) => {
  return (
    <div className='p-4'>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
     {movies.map((movie)=>(<MovieCard key={movie.imdbID} movie={movie} />))}
     
    </div>
    </div>
  )
}

export default Home