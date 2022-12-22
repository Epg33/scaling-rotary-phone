import axios from 'axios'
import { useEffect, useState } from 'react'
import {AiFillStar} from 'react-icons/ai'
import style from './movies.module.css'
import Loading from '../loading/Loading'

function Movies() {
  const [content, setContent] = useState();
  
  const fetchingMovies = async () => {
    const res = await axios.get('https://api.themoviedb.org/3/movie/now_playing?api_key=5433a58ed58a7253f675b66bb885524d&language=en-US&page=1')
    const data = await res.data.results;
    console.log(data);
    setContent(data);
  }
  
  useEffect(()=>{
    fetchingMovies()
  }, [])

  if(!content) return <Loading />
  return (
    <div>
      {
        content.map((movie)=>{
          return <div key={movie.id}>
            <h3>{movie.title}</h3>
            <img src={`https://www.themoviedb.org/t/p/w220_and_h330_face${movie.backdrop_path}`} />
            <span><AiFillStar/> {movie.vote_average}/10</span>
          </div>
        })
      }
    </div>
  )
}

export default Movies