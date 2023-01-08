import { useState, useEffect } from 'react'
import { useParams } from "react-router-dom"
import { fetchEspecificMovie } from '../../../services/fetch';
import Loading from '../../loading/Loading'
import Percentage from '../../percentage/Percentage';
import style from './movie.module.css'

const Movie = () => {
  const params = useParams();
  const [content, setContent] = useState();

  useEffect(()=>{
    const fetching = async () =>{
      const res = await fetchEspecificMovie(params.id)
      console.log(res);
      setContent(res);
    }
    fetching()
  }, [])

  if(!content) return <Loading />
  return (
    <>
      <section className={style.body}>
        <img src={`https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/${content.backdrop_path}`} className={style.bg_image} alt={`backdrop image of ${content.title}`} />
        <div className={style.content}>
          <img src={`https://www.themoviedb.org/t/p/w300_and_h450_face${content.poster_path}`} className={style.poster} alt={`poster image of ${content.title}`} />
          <div className={style.info}>
            <div className={style.entitled}>
              <h2>{content.title}</h2>
              <div className={style.dg_info}>
                <span>Release Date: {content.release_date}</span>
                <ul>
                  {content.genres.map((genre, i)=>{
                    return <li key={i}>{genre.name}</li>
                  })}
                </ul>
              </div>
            </div>
            <div className={style.aceptation}>
              <Percentage percentage={content.vote_average.toFixed(1)*10} />
              <p><span> budget: {content.budget}</span> <span> Revenue: {content.revenue}</span></p>
            </div>
            <div className={style.resume}>
              <h3>Resume</h3>
              <p>{content.overview}</p>
            </div>
            <ul>production companies:
              {content.production_companies.map((comp, i)=>{
                return <li key={i}>{comp.name}</li>
              })}
            </ul>
          </div>
        </div>
      </section>
    </>
  )
}

export default Movie