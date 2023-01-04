import style from "./peopleCards.module.css";

const PeopleCards = ({person, per}) => {
  const ind = person ? person.person : per.per
  return (
    <div className={style.person}>
      <img src={`https://www.themoviedb.org/t/p/w220_and_h330_face${ind.profile_path}`} alt={`profile of ${ind.name}`} />
      <div className={style.info}>
        <h3 className={style.name}>{ind.name}</h3>
        <span>{ind.known_for_department}</span>
      </div>
    </div>
  );
};

export default PeopleCards;
