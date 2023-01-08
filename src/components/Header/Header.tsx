import style from"./header.module.scss";
import profile from "../../assets/profile.svg";
import search from "../../assets/search.svg";
import shop from "../../assets/shop.svg";
import hamburger from "../../assets/hamburger.svg";
import plate from "../../assets/plate.svg";

export const Header = () => {
  const name = "Epicure";

  return (
    <>
      <header> 
        <div className={style.container}>
          <div className={style.left}>          
            <img className={style.hamburger} src={hamburger} alt="true"></img>
            <img className={style.desktop} src={plate} alt="search"></img>
            <div className={`${style.title} ${style.desktop}`}>{name}</div>
            <div className={`${style.link} ${style.desktop}`}>Restaurants</div>
            <div className={`${style.link} ${style.desktop}`}>Chefs</div>
          </div>
          <div className={style.center}>
            <img className={style.img} src={plate} alt="search"></img>
          </div>
          <div className={style.right}>
            <img className={style.img} src={search} alt="search"></img>
            <img className={style.img} src={profile} alt="true"></img>
            <img className={style.img} src={shop} alt="true"></img>
          </div>
        </div>
      </header>
    </>
  );
};


