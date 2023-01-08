import style from "./Footer.module.scss";


export const Footer = () => {

  return (
    <>
      <div className={style.container}>
        <div className={style.btn}>Contact Us</div>
        <div className={style.btn}>Term of Use</div>
        <div className={style.btn}>Privacy Policy</div>
      </div>
    </>
  );
};
