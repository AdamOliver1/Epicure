import style from "./RestaurantCard.module.scss";
import { IRestaurantCard } from "../../../cardModels/RestaurantCardModel";
import fullStar from "../../../assets/fullStar.svg";
import emptyStar from "../../../assets/emptyStar.svg";
import { BaseCard } from "../../sharedComponents/BaseCard/BaseCard";


export const RestaurantCard = ({ rate ,img,title,chef}: IRestaurantCard) => {
  function getFullStars() {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      if (i < rate) {
        stars.push(<img key={i} src={fullStar} alt="star"></img>);
      } else {
        stars.push(<img key={i} src={emptyStar} alt="star"></img>);
      }
    }
    return stars;
  }

  return (
    <div className={style.container}>
      <BaseCard img={img}>
        <div className={style.children}>
          <div className={style.title}>{title}</div>
          <div>{chef.name}</div>
          <div className={style.starsContainer}>{getFullStars()}</div>
        </div>
      </BaseCard>
    </div>
  );
};
{
}
