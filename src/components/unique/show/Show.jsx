import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { fetchEspecificShow } from "../../../services/fetch";
import Loading from "../../loading/Loading";
import Percentage from "../../percentage/Percentage";
import style from './show.module.css'

const Show = () => {
  const params = useParams();
  const [content, setContent] = useState();
  useEffect(()=>{
    const fetching = async () => {
      const res = await fetchEspecificShow(params.id);
      console.log(res);
      setContent(res)
    }
    fetching();
  }, [])
  if(!content) return <div className={style.loading_container}><Loading /></div>
  return (
    <>
      <section className={style.body}>
        <img src={`https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/${content.backdrop_path}`} className={style.bg_image} alt={`backdrop image of ${content.name}`} />
        <div className={style.content}>
          <img src={`https://www.themoviedb.org/t/p/w300_and_h450_face${content.poster_path}`} className={style.poster} alt={`profile of ${content.name}`} />
          <div className={style.info}>
            <div className={style.entitled}>
              <h2>{content.name}</h2>
              <p>First air date: {content.first_air_date}. Last air Date: {content.last_air_date}</p>
              {content.next_episode_to_air ? <p>Next episode: {content.next_episode_to_air.air_date} '{content.name}'</p> : null}
              <div className={style.dg_info}>
                <ul>
                  {content.genres.map((genre, i)=>{
                    return <li key={i}>{genre.name}</li>
                  })}
                </ul>
              </div>
            </div>
            <p>{content.overview}</p>
            <div className={style.aceptation}>
              <Percentage percentage={content.vote_average.toFixed(1)*10}/>
              <p>Number of seasons: {content.number_of_seasons}, number of espisodes {content.number_of_episodes}</p>
            </div>
            <div className={style.seasons}>
              <h4 className={style.h4}>Seasons: </h4>
              <ul className={style.actual_seasons}>
                {content.seasons.map((sea, i)=>{
                  return <li key={i} className={style.season}>
                    <h4>{sea.name}</h4>
                    <p>Number of episodes: {sea.episode_count}</p>
                    <span>Air date: {sea.air_date}</span>
                  </li>
                })}
              </ul>
            </div>
            <span>Type: {content.type}</span>
            <h5 style={{fontSize: '1.2rem'}}>Production Companies: </h5>
            <ul className={style.companies}>
              {content.production_companies.map((comp, i )=>{
                return <li key={i}>{comp.name}</li>
              })}
            </ul>
          </div>
        </div>
      </section>
    </>
  )
}

export default Show