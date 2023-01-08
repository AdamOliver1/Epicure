import style from "./SearchBar.module.scss";
import topBackground_desktop from "../../assets/topBackground_desktop.svg";
import topBackground_mobile from "../../assets/topBackground_mobile.svg";
import search from "../../assets/search.svg";

export const SearchBar = () => {
  const title1 = "Epicure works with the top ";
  const title2 = "chef restaurants in Tel Aviv";
  const placeHolder = "Search for restaurant cuisine, chef";

  return (
    <div className={style.container}>
      <img
        className={style.backgroundDesktop}
        src={topBackground_desktop}
        alt="true"
      ></img>

      <img
        className={style.backgroundMobile}
        src={topBackground_mobile}
        alt="true"
      ></img>

      <div className={style.box}> 
        <div className={style['title-container']}>
          <h1 className={style.title}>{title1}</h1>
          <h1 className={style.title}>{title2}</h1>
        </div>
        <div className={style.inputContainer}>
          <img className={style.img} src={search} alt="search"></img>
          <input type="text" placeholder={placeHolder} className={style.input}></input>
        </div>
      </div>
    </div>
  );
};
