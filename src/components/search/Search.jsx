import style from "./search.module.css";
import { useState, useEffect, useRef } from "react";
import { InView } from "react-intersection-observer";
import { searching } from "../../services/fetch";
import { BiSearchAlt } from 'react-icons/bi'
import Cards from '../cards/Cards'
import PeopleCards from '../cards/PeopleCards'
import Loading from '../loading/Loading'

function Search() {
  const [content, setContent] = useState();
  const [page, setPage] = useState(1);
  const [type, setType] = useState('multi')
  const [query, setQuery] = useState('marvel')
  const queryText = useRef();

  useEffect(()=>{
    const fetching = async () => {
      const res = await searching(content, page, type, query);
      setContent([...res]);
    };
    fetching();
  }, [query, page, type])

  if(!content) return <div className={style.loading_container}><Loading /></div>
  return (
    <section className={style.body}>
      <nav className={style.nav}>
        <div className={style.input_container}>
            <BiSearchAlt />
          <input type="text" ref={queryText} placeholder='search'/>
          <button onClick={()=>{setContent(null);setPage(1);setQuery(queryText.current.value)}}>Search</button>
        </div>
        <div className={style.buttons_container}>
          <button className={style.nav_button} onClick={()=>{setContent(null);setPage(1);setType('multi')}}>All</button>
          <button className={style.nav_button} onClick={()=>{setContent(null);setPage(1);setType('movie')}}>Only Movies </button>
          <button className={style.nav_button} onClick={()=>{setContent(null);setPage(1);setType('tv')}}>Only TV</button>
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
  );
}

export default Search;
