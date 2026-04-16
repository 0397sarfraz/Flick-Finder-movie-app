import React, { useEffect, useState } from 'react'
import Home from './Home'
import SearchBar from './SearchBar'
import { BrowserRouter as Router, Routes, Route, NavLink, Link } from 'react-router-dom'
import netflixbg from './assets/netflixbg.jpg'

const App = () => {
  const [movies, setMovies] = useState([])
  const [searchItem, setSearchItem] = useState("avengers")

  const fetchMovieList = async (searchItem) => {
    const res=await fetch(`http://www.omdbapi.com/?apikey=4a3b711b&s=${searchItem}`);
    const data=await res.json()
    setMovies(data.Search||[]);
  }

  useEffect(()=>{
    fetchMovieList(searchItem)
  },[])



  return (
    <Router>
      <div className='min-h-screen bg-cover bg-center relative overflow-x-hidden' style={{ backgroundImage: `url(${netflixbg})` }}  >
        <div className='absolute inset-0 bg-black/60'></div>
        <div className='relative z-10 text-white'>
          <nav className='flex justify-between items-center p-4 bg-black/40 backdrop-blur-md select-none'>
            <h1 className='text-2xl font-bold'>Flick Finder</h1>
            <div className='flex items-center  gap-6'>
              <Link to="/">Home</Link>
              <SearchBar searchItem={searchItem} setSearchItem={setSearchItem} onSearch={fetchMovieList} />
            </div>
          </nav>
          <Routes>
            <Route path="/" element={<Home  movies={movies} />} />
          </Routes>
        </div>
      </div>

    </Router>
  )
}

export default App