import { useEffect, useState } from 'react'
import {AiFillStar} from 'react-icons/ai'
import {BsCameraReelsFill} from 'react-icons/bs'
import style from './movies.module.css'
import Loading from '../loading/Loading'
import { InView } from 'react-intersection-observer'
import { fetchingMovies } from '../../services/fetch'

function Movies() {
  const [content, setContent] = useState();
  const [numPage, setNumPage] = useState(1);
  const [query, setQuery] = useState('now_playing');

  useEffect(()=>{
    const trying = async () => {
      const res = await fetchingMovies(content, numPage, query)
      setContent([...res])
    }
    trying()  
  }, [numPage, query])

  if(!content) return <div className={style.loading_container}><Loading /></div>
  return (
    <>
      <nav className={style.nav}>
        <button className={style.nav_button} onClick={()=>{setContent(null);setQuery('now_playing')}}>Now Playing</button>
        <button className={style.nav_button} onClick={()=>{setContent(null);setQuery('upcoming')}}>Upcoming</button>
        <button className={style.nav_button} onClick={()=>{setContent(null);setQuery('popular')}}>Popular</button>
        <button className={style.nav_button} onClick={()=>{setContent(null);setQuery('top_rated')}}>Top Rated</button>
      </nav>
      <section className={style.movies_container}>
          {
            content.map((movie, index)=>{
              if(index>19){
                return movie.map((peli, index)=>{
                  return <div key={index} className={style.movie}>
                    {peli.poster_path ? <img src={`https://www.themoviedb.org/t/p/w220_and_h330_face${peli.poster_path}`} alt={`poster for the ${peli.title} movie`}/> 
                    : <BsCameraReelsFill className={style.default}/>}
                    <div className={style.info}>
                      <h3 className={style.title}>{peli.title}</h3>
                      <p>
                        <span><AiFillStar/> {peli.vote_average}/10</span> &nbsp; &nbsp;
                        {peli.release_date}
                      </p>
                    </div>
                  </div>
                })
              }
              return <div key={index} className={style.movie}>
                {movie.poster_path ? <img src={`https://www.themoviedb.org/t/p/w220_and_h330_face${movie.poster_path}`} alt={`poster for the ${movie.title} movie`}/> 
                : <BsCameraReelsFill className={style.default}/>}
                <div className={style.info}>
                  <h3 className={style.title}>{movie.title}</h3>
                  <p>
                    <span><AiFillStar/> {movie.vote_average}/10</span> &nbsp; &nbsp;
                    {movie.release_date}
                  </p>
                </div>
              </div>
            })
          }
        <InView as='div' onChange={(inView, entry)=>{inView ? setNumPage(numPage+1) : null;}}>
          <Loading />
        </InView>
      </section>
    </>
  )
}

export default Movies