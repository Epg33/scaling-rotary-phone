import {useEffect} from 'react'
import axios from 'axios'
import style from './home.module.css'

const Home = () => {
  useEffect(() => {
    axios.get('https://api.themoviedb.org/3/discover/movie?api_key=5433a58ed58a7253f675b66bb885524d&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate')
      .then(res=> console.log(res))
  }, [])
  
  return (
    <main className={style.main}>
      <h1>Home...</h1>
    </main>
  )
}

export default Home