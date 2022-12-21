import style from './nav.module.css'
import { NavLink } from 'react-router-dom'
import { BsFillHouseFill, BsCameraReelsFill, BsPeopleFill, BsDisplayFill} from 'react-icons/bs'
import {BiSearchAlt, BiTrendingUp} from 'react-icons/bi'
import {MdCategory} from 'react-icons/md'

function Nav() {
  return (
    <nav className={style.nav}>
      <NavLink className={style.link} to='/'><BsFillHouseFill /></NavLink>
      <NavLink className={style.link} to='/genres'><MdCategory /></NavLink>
      <NavLink className={style.link} to='/movies'><BsCameraReelsFill /></NavLink>
      <NavLink className={style.link} to='/people'><BsPeopleFill /></NavLink>
      <NavLink className={style.link} to='/search'><BiSearchAlt /></NavLink>
      <NavLink className={style.link} to='/trending'><BiTrendingUp /></NavLink>
      <NavLink className={style.link} to='/tv'><BsDisplayFill /></NavLink>
    </nav>
  )
}

export default Nav