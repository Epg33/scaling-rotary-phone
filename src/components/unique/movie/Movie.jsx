import { useState, useEffect } from 'react'
import { useParams } from "react-router-dom"
import { fetchEspecificMovie } from '../../../services/fetch';
import Loading from '../../loading/Loading'

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
      <section>
        <img src={`https://www.themoviedb.org/t/p/w220_and_h330_face${content.poster_path}`}alt="" />
        <h2>{content.title}</h2>
        <p>{content.overview}</p>
        <ul>
          {content.genres.map((genre, i)=>{
            return <li key={i}>{genre.name}</li>
          })}
        </ul>
        <span>Rate: {content.vote_average}</span>
        <span>Release Date: {content.release_date}</span>
        <p>budget: {content.budget} Revenue: {content.revenue}</p>
        <ul>production companies:
          {content.production_companies.map((comp, i)=>{
            return <li key={i}>{comp.name}</li>
          })}
        </ul>
      </section>
    </>
  )
}

export default Movie