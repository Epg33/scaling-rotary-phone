import { useEffect, useState } from 'react'
import {AiFillStar} from 'react-icons/ai'
import {BsCameraReelsFill} from 'react-icons/bs'
import style from './movies.module.css'
import Loading from '../loading/Loading'
import { InView } from 'react-intersection-observer'
import { fetchingMovies } from '../../services/fetch'

function Movies() {
  const [content, setContent] = useState();
  const [numPage, setNumPage] = useState(1)

  useEffect(()=>{
    const trying = async () => {
      const res = await fetchingMovies(content, numPage)
      console.log(res);
      setContent([...res])
    }
    trying()  
  }, [numPage])

  if(!content) return <div className={style.loading_container}><Loading /></div>
  return (
    <section className={style.movies_container}>
        {
          content.map((movie, index)=>{
            if(index>19){
              return movie.map((peli, index)=>{
                return <div key={index} className={style.movie}>
                  {peli.poster_path ? <img src={`https://www.themoviedb.org/t/p/w220_and_h330_face${peli.poster_path}`} /> 
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
              {movie.poster_path ? <img src={`https://www.themoviedb.org/t/p/w220_and_h330_face${movie.poster_path}`} /> 
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
  )
}

export default Movies