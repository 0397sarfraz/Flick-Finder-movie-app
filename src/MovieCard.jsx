import React from 'react'

const MovieCard = ({ movie }) => {
  return (
      <div className='bg-black/70 rounded-lg p-4 overflow-hidden hover:scale-105 cursor-pointer'>
       <img src={movie.Poster} alt={movie.Title} className='w-full h-60 object-cover' />
       <div className='p-3'>
        <p className='text-lg font-bold'>{movie.Title}</p>
        <p className='text-sm text-gray-300 '>{movie.Year}</p>
        <p className='text-sm text-gray-300 '>{movie.Type}</p>
       </div>
       </div>
  )
}

export default MovieCard