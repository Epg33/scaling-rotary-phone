import {AiFillStar} from 'react-icons/ai'
import {BsCameraReelsFill} from 'react-icons/bs'
import style from './cards.module.css'

const Cards = ({movie, peli}) => {
  const mov = movie ? movie.movie : peli.peli
  return (
    <div className={style.movie}>
      {mov.poster_path ? <img src={`https://www.themoviedb.org/t/p/w220_and_h330_face${mov.poster_path}`} alt={`poster for the ${mov.title} movie`}/> 
      : <BsCameraReelsFill className={style.default}/>}
      <div className={style.info}>
        <h3 className={style.title}>{mov.name ? mov.name : mov.title}</h3>
        <p>
          <span><AiFillStar/> {mov.vote_average}/10</span> &nbsp; &nbsp;
          {mov.release_date ? mov.release_date : mov.first_air_date}
        </p>
      </div>
    </div>
  )
}

export default Cards