import style from "./percentage.module.css";

function Percentage({percentage}) {
  return (
    <div className={style.single_chart}>
      <svg viewBox="0 0 36 36" className={style.circular_chart}>
        <path
          className={style.circle_bg}
          d="M18 2.0845
                a 15.9155 15.9155 0 0 1 0 31.831
                a 15.9155 15.9155 0 0 1 0 -31.831"
        />
        <path
          className={style.circle}
          strokeDasharray={`${percentage}, 100`}
          d="M18 2.0845
                a 15.9155 15.9155 0 0 1 0 31.831
                a 15.9155 15.9155 0 0 1 0 -31.831"
        />
        <text x="18" y="20.35" className={style.percentage}>{percentage}%</text>
      </svg>
    </div>
  );
}

export default Percentage;
