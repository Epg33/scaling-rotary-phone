import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { fetchEspecificShow } from "../../../services/fetch";
import Loading from "../../loading/Loading";
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
      <section>
        <img src={`https://www.themoviedb.org/t/p/w220_and_h330_face${content.poster_path}`} alt={`profile of ${content.name}`} />
        <h2>{content.name}</h2>
        <p>{content.overview}</p>
        <ul>Prduction Companies:
          {content.production_companies.map((comp, i )=>{
            return <li key={i}>{comp.name}</li>
          })}
        </ul>
        <p>Number of seasons: {content.number_of_seasons}, number of espisodes {content.number_of_episodes}</p>
        <ul>Seasons:
          {content.seasons.map((sea, i)=>{
            return <li key={i}>
              <h4>{sea.name}</h4>
              <p>Number of episodes: {sea.episode_count}</p>
              <span>Air date: {sea.air_date}</span>
            </li>
          })}
        </ul>
        <span>type: {content.type}</span>
        <p>First air date: {content.first_air_date}. Last air Date: {content.last_air_date}</p>
        {content.next_episode_to_air ? <p>Next episode: {content.next_episode_to_air.air_date} '{content.name}'</p> : null}
      </section>
    </>
  )
}

export default Show