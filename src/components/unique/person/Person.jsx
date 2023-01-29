import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { fetchEspecificPerson } from "../../../services/fetch";
import Loading from "../../loading/Loading";
import style from './person.module.css'

const Person = () => {
  const params = useParams();
  const [content, setContent] = useState();
  const [aditionalContent, setAditionalContent] = useState();
  useEffect(()=>{
    const fetching = async () => {
      const [res, add] = await fetchEspecificPerson(params.id);
      setContent(res)
      setAditionalContent(add)
    }
    fetching()
  }, [])
  if(!content || !aditionalContent) return <div className={style.loading_container}><Loading /></div>
  return (
    <>
      <section className={style.body}>
        <img src={`https://www.themoviedb.org/t/p/w300_and_h450_face${content.profile_path}`} className={style.poster} alt={`profile of ${content.name}`} />
        <div className={style.content}>
          <h2>{content.name}</h2>
          <p className={style.bio}>{content.biography}</p>
          <div className={style.aditional}>
            <p>birthday: {content.birthday}</p>
            {content.deathday? <span>{content.deathday}</span>: null}
            <p>{content.gender === 1 ? 'Female' : 'Male'}, known for {content.known_for_department}</p>
          </div>
          <p className={style.born}>born in: {content.place_of_birth}</p>
        </div>
        {aditionalContent.data.cast.length > 0 ? <div className={style.container}>
          <h4>Played Characters</h4>
          <ul className={style.played}>
            {aditionalContent.data.cast.map((movie, i)=>{
              return <li className={style.va_played} key={i}>
                <p>
                  <span className={style.release}>({movie.release_date || 'unknown'})</span> &nbsp;
                  <span className={style.cha_movie}>{movie.title}</span> &nbsp;
                  <span className={style.cha_name}>as &nbsp; {movie.character}</span>
                </p>
              </li>
            })}
          </ul>
        </div> : null}
      </section>
    </>
  )
}

export default Person