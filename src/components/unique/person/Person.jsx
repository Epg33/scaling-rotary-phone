import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { fetchEspecificPerson } from "../../../services/fetch";
import Loading from "../../loading/Loading";
import style from './person.module.css'

const Person = () => {
  const params = useParams();
  const [content, setContent] = useState();
  useEffect(()=>{
    const fetching = async () => {
      const res = await fetchEspecificPerson(params.id);
      console.log(res);
      setContent(res)
    }
    fetching()
  }, [])
  if(!content) return <div className={style.loading_container}><Loading /></div>
  return (
    <>
      <section>
        <img src={`https://www.themoviedb.org/t/p/w220_and_h330_face${content.profile_path}`} alt={`profile of ${content.name}`} />
        <h2>{content.name}</h2>
        <p>{content.biography}</p>
        <p>birthday: {content.birthday}</p>
        {content.deathday? <span>{content.deathday}</span>: null}
        <p>{content.gender === 1 ? 'Female' : 'Male'}, known for {content.known_for_department}</p>
        <span>born in: {content.place_of_birth}</span>
      </section>
    </>
  )
}

export default Person