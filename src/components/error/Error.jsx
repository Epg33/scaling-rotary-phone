import style from "./error.module.css";

function Error() {
  return (
    <section className={style.body}>
      <div className={style.container}>
        <h1 className={style.error}>404</h1>
        <p className={style.description}>Page not found...</p>
      </div>
    </section>
  );
}

export default Error;
