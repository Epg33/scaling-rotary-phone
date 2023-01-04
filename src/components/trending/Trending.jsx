import { useEffect, useState } from 'react'
import { InView } from 'react-intersection-observer'
import { fetchingTrends } from '../../services/fetch'
import Cards from '../cards/cards'
import PeopleCards from '../cards/PeopleCards'
import Loading from '../loading/Loading'
import style from './trending.module.css'

function Trending() {
  const [content, setContent] = useState();
  const [page, setPage] = useState(1);
  const [type, setType] = useState('all');
  const [time, setTime] = useState('day');
  useEffect(()=>{
    const fetching = async () => {
      const res = await fetchingTrends(content, page, type, time);
      console.log(res);
      setContent([...res]);
    }
    fetching()
  }, [page, type, time])
  if(!content) return <div className={style.loading_container}><Loading /></div>
  return (
    <>
      <section className={style.body}>
        <nav className={style.nav}>
          <div>
            <button className={style.nav_button} onClick={()=>{setContent(null);setPage(1);setType('all')}}>All</button>
            <button className={style.nav_button} onClick={()=>{setContent(null);setPage(1);setType('movie')}}>Only Movies</button>
            <button className={style.nav_button} onClick={()=>{setContent(null);setPage(1);setType('tv')}}>Only Tv</button>
            <button className={style.nav_button} onClick={()=>{setContent(null);setPage(1);setType('person')}}>Only Person</button>
          </div>
          <div>
            <button className={style.nav_button} onClick={()=>{setContent(null);setPage(1);setTime('week')}}>This Week</button>
            <button className={style.nav_button} onClick={()=>{setContent(null);setPage(1);setTime('day')}}>This Day</button>
          </div>
        </nav>
        <div className={style.content_container}>
          {
            content.map((movie, index)=>{
              if(index>19) {return movie.map((peli, indx)=>{
                if(peli.gender) {const per = peli; return <PeopleCards per={{per}} key={indx} />}
                return <Cards peli={{peli}} key={indx} />
              })}
              if(movie.gender) {const person = movie; return <PeopleCards person={{person}} key={index} />}
              return <Cards movie={{movie}} key={index}/>
            })
          }
          <InView as='div' onChange={(inView, entry)=>{inView ? setPage(page+1) : null;}}>
            <Loading />
          </InView>
        </div>
      </section>
    </>
  )
}

export default Trending