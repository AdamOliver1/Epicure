import style from "./RestaurantCard.module.scss";
import { IRestaurantCard } from "../../../models/RestaurantCardModel";
import fullStar from "../../../assets/fullStar.svg";
import emptyStar from "../../../assets/emptyStar.svg";
import { BaseCard } from "../../sharedComponents/BaseCard/BaseCard";

type CardProps = {
  card: IRestaurantCard;
};

export const RestaurantCard = ({ card }: CardProps) => {
  function getFullStars() {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      if (i < card.rate) {
        stars.push(<img key={i} src={fullStar} alt="star"></img>);
      } else {
        stars.push(<img key={i} src={emptyStar} alt="star"></img>);
      }
    }
    return stars;
  } 

  return (
    <div className={style.container}>
    <BaseCard img={card.img}>
      <div className={style.children}>
      <div className={style.title}>{card.title}</div>
      <div>{card.chef}</div>
      <div className={style.starsContainer}>{getFullStars()}</div>
      </div>
    </BaseCard>
    </div>
  );
};
{
  
}
