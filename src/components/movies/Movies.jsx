import axios from 'axios'
import { useEffect, useRef, useState } from 'react'
import {AiFillStar} from 'react-icons/ai'
import style from './movies.module.css'
import Loading from '../loading/Loading'

function Movies() {
  const [content, setContent] = useState();
  const [numPage, setNumPage] = useState(1)
  const container = useRef()
  
  const fetchingMovies = async (page) => {
    const res = await axios.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=5433a58ed58a7253f675b66bb885524d&language=en-US&page=${page}`)
    const data = await res.data.results;
    console.log(data);
    if(!content) setContent(data);
    else setContent((cont)=>[...cont, data]);
  }
  
  useEffect(()=>{
    fetchingMovies(numPage)
    console.log(numPage)
  }, [numPage])

  useEffect(()=>{
    const change = event => {
      if(window.scrollY> container.current.offsetHeight*0.85){
        setNumPage(numPage+2)
        console.log(container)
      }
    }
    window.addEventListener('scroll', change)
    return ()=>{ window.removeEventListener('scroll', change)}
  },[])

  if(!content) return <Loading />
  return (
    <div ref={container}>
      {
        content.map((movie, index)=>{
          return <div key={movie.id}>
            <h3>{index+1}. {movie.title}</h3>
            <img src={`https://www.themoviedb.org/t/p/w220_and_h330_face${movie.backdrop_path}`} />
            <span><AiFillStar/> {movie.vote_average}/10</span>
          </div>
        })
      }
    </div>
  )
}

export default Movies