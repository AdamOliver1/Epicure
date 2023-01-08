import style from "./MeaningOfIcons.module.scss";
import spicy from "../../assets/dishesIcons/spicy.svg";
import vegan from "../../assets/dishesIcons/vegan.svg";
import vegetarian from "../../assets/dishesIcons/vegetarian.svg";

export const MeaningOfIcons = () => {
  return (
    <div className={`${style.container} ${style.margin}`}>
      <div className={`${style.title} ${style.mobile}`}>signature dish of:</div>
      <div className={`${style.title} ${style.desktop}`}>
        the meaning of our icons:
      </div>
      <div  className={`${style.desktopContainerIcons} ${style.icons}`}>
        <div className={style.group}>
          <img className={style.img} src={spicy} alt="spicy"></img>
          <div className={style.subtitle}>spicy</div>
        </div>
        <div className={style.group}>
          <img className={style.img} src={vegetarian} alt="vegetarian"></img>
          <div className={style.subtitle}>vegetarian</div>
        </div>
        <div className={style.group}>
          <img className={style.img} src={vegan} alt="vegan"></img>
          <div className={style.subtitle}>vegan</div>
        </div>
      </div>
    </div>
  );
};
