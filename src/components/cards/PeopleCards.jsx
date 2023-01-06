import style from "./peopleCards.module.css";
import { NavLink } from 'react-router-dom'

const PeopleCards = ({person, per}) => {
  const ind = person ? person.person : per.per
  return (
    <NavLink to={`/people/${ind.id}`} className={style.person}>
      <img src={`https://www.themoviedb.org/t/p/w220_and_h330_face${ind.profile_path}`} alt={`profile of ${ind.name}`} />
      <div className={style.info}>
        <h3 className={style.name}>{ind.name}</h3>
        <span>{ind.known_for_department}</span>
      </div>
    </NavLink>
  );
};

export default PeopleCards;
