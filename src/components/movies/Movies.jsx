import { useEffect, useState } from 'react'
import style from './movies.module.css'
import Loading from '../loading/Loading'
import { InView } from 'react-intersection-observer'
import { fetchingMovies } from '../../services/fetch'
import Cards from '../cards/cards'

function Movies() {
  const [content, setContent] = useState();
  const [numPage, setNumPage] = useState(1);
  const [query, setQuery] = useState('now_playing');

  useEffect(()=>{
    const trying = async () => {
      const res = await fetchingMovies(content, numPage, query, 'movie')
      setContent([...res])
    }
    trying()  
  }, [numPage, query])

  if(!content) return <div className={style.loading_container}><Loading /></div>
  return (
    <section className={style.body}>
      <nav className={style.nav}>
        <button className={style.nav_button} onClick={()=>{setContent(null);setQuery('now_playing')}}>Now Playing</button>
        <button className={style.nav_button} onClick={()=>{setContent(null);setQuery('upcoming')}}>Upcoming</button>
        <button className={style.nav_button} onClick={()=>{setContent(null);setQuery('popular')}}>Popular</button>
        <button className={style.nav_button} onClick={()=>{setContent(null);setQuery('top_rated')}}>Top Rated</button>
      </nav>
      <div className={style.movies_container}>
          {
            content.map((movie, index)=>{
              if(index>19){
                return movie.map((peli, index)=>{
                  return <Cards peli={{peli}} key={index}/>
                })
              }
               return <Cards movie={{movie}} key={index}/>
            })
          }
        <InView as='div' onChange={(inView, entry)=>{inView ? setNumPage(numPage+1) : null;}}>
          <Loading />
        </InView>
      </div>
    </section>
  )
}

export default Movies