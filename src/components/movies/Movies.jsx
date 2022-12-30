import InfiniteScroll from 'react-infinite-scroll-component'
import axios from 'axios'
import { useEffect, useState } from 'react'
import {AiFillStar} from 'react-icons/ai'
import {BsCameraReelsFill} from 'react-icons/bs'
import style from './movies.module.css'
import Loading from '../loading/Loading'
import { InView } from 'react-intersection-observer'

function Movies() {
  const [content, setContent] = useState();
  const [numPage, setNumPage] = useState(1)
  
  const fetchingMovies = async (page) => {
    const res = await axios.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=5433a58ed58a7253f675b66bb885524d&language=en-US&page=${page}`)
    const data = await res.data.results;
    console.log(data);
    if(!content) return await  data;
    return [...content, data[0]]
  }

  useEffect(()=>{
    const trying = async () => {
      const res = await fetchingMovies(numPage)
      setContent(res)
      console.log(content);
      console.log(numPage);
    }
    trying()  
  }, [numPage])

  if(!content) return <Loading />
  return (
    <section style={{display: 'flex', flexDirection: 'column'}}>
      {/* <InfiniteScroll  
      // dataLength={content.length}
      // next={()=>{fetchingMovies}}
      // hasMore={numPage<500}
      // className={style.movies_container}
      // loader={<Loading />}>*/}
        {
          content.map((movie, index)=>{
            return <div key={index} className={style.movie}>
              <h3 className={style.title}>{index+1}. {movie.title}</h3>
              {movie.poster_path ? <img src={`https://www.themoviedb.org/t/p/w220_and_h330_face${movie.poster_path}`} /> 
              : <BsCameraReelsFill className={style.default}/>}
              <p>{movie.overview}</p>
              <span><AiFillStar/> {movie.vote_average}/10</span>
            </div>
          })
        }
      {/* </InfiniteScroll> */}
      <InView as='div' onChange={(inView, entry)=>{inView ? setNumPage(numPage+1) : null;console.log(inView, entry)}}>
        <footer>footer</footer>
      </InView>
    </section>
  )
}

export default Movies