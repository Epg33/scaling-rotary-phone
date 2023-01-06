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
        <img src="" alt="" />
      </section>
    </>
  )
}

export default Person