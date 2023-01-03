import style from './people.module.css'
import { useState, useEffect } from 'react'
import { fetchingPeople } from '../../services/fetch';
import Loading from '../loading/Loading'
import { InView } from 'react-intersection-observer'

function People() {
  const [content, setContent] = useState();
  const [page, setPage] = useState(1);

  useEffect(()=>{
    const fetching = async ()=>{
      const res = await fetchingPeople(content, page);
      console.log(res);
      setContent([...res])
    }
    fetching()
  }, [page])
  if(!content) return <div className={style.loading_container}><Loading /></div>
  return (
    <>
      <section style={{display: 'flex', flexDirection: 'column', width: '100%'}}>
        <div className={style.people_container}>
          {
            content.map((person, index)=>{
              if(index>19) {return person.map((per, indx)=>{
                return <div key={per.id}>
                  <img src={`https://www.themoviedb.org/t/p/w220_and_h330_face${per.profile_path}`} alt="" />
                  <h3>{per.name}</h3>
                  <span>{per.known_for_department}</span>
              </div>
              })}
              return <div key={person.id}>
                <img src={`https://www.themoviedb.org/t/p/w220_and_h330_face${person.profile_path}`} alt="" />
                <h3>{person.name}</h3>
                <span>{person.known_for_department}</span>
              </div>
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