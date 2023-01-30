import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';
import { fetchingMovies, fetchingPeople } from '../../services/fetch';
import Loading from '../loading/Loading'
import style from './home.module.css'

const Home = () => {
  const [movies, setMovies] = useState();
  const [tv, setTv] = useState();
  const [people, setPeople] = useState();
  useEffect(() => {
    (async ()=>{
      const mov = await fetchingMovies(movies, 1, 'popular', 'movie');
      const sh = await fetchingMovies(tv, 1, 'popular', 'tv');
      const per = await fetchingPeople(people, 1);
      setMovies([...mov]);
      setTv([...sh]);
      setPeople([...per]);
    })()
  }, [])
  if(!movies) return <div className={style.loading_container}><Loading /></div>;
  return (
    <main className={style.main}>
      <h1>React Movies</h1>
      <section className={style.principal}>
        {
          movies? 
          <NavLink to={`/movies/${movies[0].id}`} className={style.principal_container}>
            <img src={`https://www.themoviedb.org/t/p/w1920_and_h800_face${movies[0].backdrop_path}`} alt={`poster for the ${movies[0].title} movie`}/> 
            <div className={style.principal_info}>
              <h2>{movies[0].title}</h2>
              <p>{movies[0].release_date}</p>
            </div>
          </NavLink>
          : <Loading />
        }
      </section>
      <section className={style.movies}>
        <h3>Popular Movies</h3>
        <div>
          {
            movies ? movies.map((movie, index)=>{
              return <NavLink to={`/movies/${movie.id}`} key={index}>
                <img src={`https://www.themoviedb.org/t/p/w220_and_h330_face${movie.poster_path}`} alt={`poster for the ${movie.title} movie`}/> 
                <h4>{movie.title}</h4>
              </NavLink>
            })
            : <Loading />
          }
        </div>
      </section>
      <section className={style.movies}>
        <h3>Popular Tv Shows</h3>
        <div>
          {
            tv ? tv.map((show, index)=>{
              return <NavLink to={`/tv/${show.id}`} key={index}>
                <img src={`https://www.themoviedb.org/t/p/w220_and_h330_face${show.poster_path}`} alt={`poster for the ${show.name} movie`}/> 
                <h4>{show.name}</h4>
              </NavLink>
            })
            : <Loading />
          }
        </div>
      </section>
      <section className={style.movies}>
        <h3>Popular persons</h3>
        <div>
          {
            people && people.map((person, index)=>{
              return <NavLink to={`/people/${person.id}`} key={index}>
                <img src={`https://www.themoviedb.org/t/p/w220_and_h330_face${person.profile_path}`} alt={`poster for the ${person.name} movie`}/> 
                <h4>{person.name}</h4>
              </NavLink>
            })
          }
        </div>
      </section>
    </main>
  )
}

export default Home