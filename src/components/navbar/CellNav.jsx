import { NavLink } from "react-router-dom"
import { BsFillHouseFill, BsCameraReelsFill, BsPeopleFill, BsDisplayFill} from 'react-icons/bs'
import {BiSearchAlt, BiTrendingUp} from 'react-icons/bi'
import {MdCategory} from 'react-icons/md'
import style from './cellNav.module.css'
import { useState } from "react"

function CellNav() {
  const [nav, setNav] = useState(style.burguer_container);

  const navState = () => {
    console.log(11111);
    setNav(nav === style.burguer_container ? style.burguer_container_active : style.burguer_container)
    console.log(nav, 1); 
    
  }
  return (
    <>
      <input type="checkbox" className={style.check} name="" id="check" />
      <label htmlFor="check" className={style.burguer_container}>
        <div className={style.burguer}></div>
        <div className={style.burguer}></div>
        <div className={style.burguer}></div>
      </label>
      <nav className={style.nav}>
        <h3>React Movies</h3>
        <NavLink to='/' className={style.NavLink}>Home <BsFillHouseFill /></NavLink>
        <NavLink to='/' className={style.NavLink}>Genres <MdCategory /></NavLink>
        <NavLink to='/' className={style.NavLink}>Movies <BsCameraReelsFill /></NavLink>
        <NavLink to='/' className={style.NavLink}>People <BsPeopleFill /></NavLink>
        <NavLink to='/' className={style.NavLink}>Search <BiSearchAlt /></NavLink>
        <NavLink to='/' className={style.NavLink}>Trending <BiTrendingUp /></NavLink>
        <NavLink to='/' className={style.NavLink}>Tv <BsDisplayFill /></NavLink>
      </nav>
    </>
  )
}

export default CellNav