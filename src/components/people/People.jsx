import style from './people.module.css'
import { useState, useEffect } from 'react'
import { fetchingPeople } from '../../services/fetch';
import Loading from '../loading/Loading'
import { InView } from 'react-intersection-observer'
import PeopleCards from '../cards/PeopleCards';

function People() {
  const [content, setContent] = useState();
  const [page, setPage] = useState(1);

  useEffect(()=>{
    const fetching = async ()=>{
      const res = await fetchingPeople(content, page);
      setContent([...res])
    }
    fetching()
  }, [page])
  if(!content) return <div className={style.loading_container}><Loading /></div>
  return (
    <>
      <section className={style.container}>
        <div className={style.people_container}>
          {
            content.map((person, index)=>{
              if(index>19) {return person.map((per, indx)=>{
                return <PeopleCards per={{per}} key={indx} />
              })}
              return <PeopleCards person={{person}} key={index} />
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

export default People