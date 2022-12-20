import axios from 'axios'
import { useEffect, useState } from 'react'
import style from './genres.module.css'

function Genres() {
  useEffect(()=>{
    axios.get('https://api.themoviedb.org/3/genre/movie/list?api_key=5433a58ed58a7253f675b66bb885524d&language=en-US')
      .then(res => console.log(res))
      
  })
  return (
    <div>Genres</div>
  )
}

export default Genres