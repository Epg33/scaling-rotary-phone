import style from "./search.module.css";
import { useState, useEffect, useRef } from "react";
import { InView } from "react-intersection-observer";
import { searching } from "../../services/fetch";
import Cards from '../cards/Cards'
import Loading from '../loading/Loading'

function Search() {
  const [content, setContent] = useState();
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState('marvel')
  const queryText = useRef();

  useEffect(()=>{
    const fetching = async () => {
      const res = await searching(content, page, query);
      console.log(res);
      setContent([...res]);
    };
    fetching();
  }, [query, page])

  if(!content) return <div className={style.loading_container}><Loading /></div>
  return (
    <section className={style.body}>
      <nav>
        <div>
          <input type="text" ref={queryText}/>
          <button onClick={()=>{setContent(null);setPage(1);setQuery(queryText.current.value)}}>Search</button>
        </div>
        <button></button>
        <button></button>
        <button></button>
      </nav>
      <div className={style.content_container}>
        {
          content.map((movie, index)=>{
            if(index>19) {return movie.map((peli, indx)=>{
              return <Cards peli={{peli}} key={indx} />
            })}
            return <Cards movie={{movie}} key={index}/>
          })
        }
        <InView as='div'  onChange={(inView, entry)=>{inView ? setPage(page+1) : null;}}>
          <Loading />
        </InView>
      </div>
    </section>
  );
}

export default Search;
