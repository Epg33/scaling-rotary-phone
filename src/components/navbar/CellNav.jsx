import { NavLink } from "react-router-dom"
import { BsFillHouseFill, BsCameraReelsFill, BsPeopleFill, BsDisplayFill} from 'react-icons/bs'
import {BiSearchAlt, BiTrendingUp} from 'react-icons/bi'
import {MdCategory} from 'react-icons/md'
import style from './cellNav.module.css'
import { useState } from "react"

function CellNav() {
  const [nav, setNav] = useState(style.burguer_container);

  const navState = () => {
    setNav(nav === style.burguer_container ? style.burguer_container_active : style.burguer_container)
  }
  return (
    <>
      <button onClick={()=>navState()} className={nav}>
        <div className={style.burguer}></div>
        <div className={style.burguer}></div>
        <div className={style.burguer}></div>
      </button>
      <nav className={style.nav}>
        <h3>React Movies</h3>
        <NavLink to='/' className={style.NavLink}><BsFillHouseFill /> &nbsp; &nbsp; Home</NavLink>
        <NavLink to='/genres' className={style.NavLink}><MdCategory /> &nbsp; &nbsp; Genres</NavLink>
        <NavLink to='/movies' className={style.NavLink}><BsCameraReelsFill /> &nbsp; &nbsp; Movies</NavLink>
        <NavLink to='/people' className={style.NavLink}><BsPeopleFill /> &nbsp; &nbsp; People</NavLink>
        <NavLink to='/search' className={style.NavLink}><BiSearchAlt /> &nbsp; &nbsp; Search</NavLink>
        <NavLink to='/trending' className={style.NavLink}><BiTrendingUp /> &nbsp; &nbsp; Trending</NavLink>
        <NavLink to='/tv' className={style.NavLink}><BsDisplayFill /> &nbsp; &nbsp; Tv</NavLink>
      </nav>
    </>
  )
}

export default CellNav