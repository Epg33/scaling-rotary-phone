import style from './nav.module.css'
import { NavLink } from 'react-router-dom'
import { BsFillHouseFill, BsCameraReelsFill, BsPeopleFill, BsDisplayFill} from 'react-icons/bs'
import {BiSearchAlt, BiTrendingUp} from 'react-icons/bi'
import {MdCategory} from 'react-icons/md'

function Nav() {
  return (
    <nav className={style.nav}>
      <Link icon={<BsFillHouseFill />} to='/' text='Home' />
      <Link icon={<MdCategory />} to='/genres' text='Genres' />
      <Link icon={<BsCameraReelsFill />} to='/movies' text='Movies' />
      <Link icon={<BsPeopleFill />} to='/people' text='People' />
      <Link icon={<BiSearchAlt />} to='/search' text='Search'/>
      <Link icon={<BiTrendingUp />} to='/trending' text='Trending' />
      <Link icon={<BsDisplayFill />} to='/tv' text='Tv' />
    </nav>
  )
}

const Link = ({icon, text, to}) => {
  return (
    <NavLink to={to} className={style.link}>{icon}
      <span className={style.link_span}>
        {text}
      </span>
    </NavLink>
  )
}

export default Nav