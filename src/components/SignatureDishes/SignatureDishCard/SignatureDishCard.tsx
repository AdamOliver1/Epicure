import style from "./SignatureDishCard.module.scss";
import { ISignatureDishCard } from "../../../cardModels/SignatureDishCardModel";
import vegan from "../../../assets/dishesIcons/vegan.svg";
import spicy from "../../../assets/dishesIcons/spicy.svg";
import line from "../../../assets/line.svg";
import shekel from "../../../assets/shekel.svg";
import vegetarian from "../../../assets/dishesIcons/vegetarian.svg";
import { BaseCard } from "../../sharedComponents/BaseCard/BaseCard";
import nextId from "react-id-generator";

type CardProps = {
  card: ISignatureDishCard;
};

export const SignatureDishCard = ({ card }: CardProps) => {
  const getIcons = () => {
    const icons = [];
    if (card.isSpicy)
      icons.push(
        <img key={nextId()} className={style.img} src={spicy} alt="true"></img>
      );
    if (card.isVegan)
      icons.push(
        <img key={nextId()} className={style.img} src={vegan} alt="true"></img>
      );
    if (card.isVegetarian)
      icons.push(
        <img
          key={nextId()}
          className={style.img}
          src={vegetarian}
          alt="true"
        ></img>
      );
    return icons;
  };

  const getPrice = (isPrice: boolean) => {
    if (isPrice) {
      return (
        <div className={style.price}>
          <div className={style.desktop}>
            <img className={style.line} src={line} alt=""></img>
          </div>
          <div className={style.priceContainer}>
            <div className={style.shekel}>
              <img src={shekel} alt=""></img>
            </div>

            <div>{card.price}</div>
          </div>

          <div className={style.desktop}>
            <img className={style.line} src={line} alt=""></img>
          </div>
        </div>
      );
    }
    return <></>;
  };

  return (
    <div className={style.container}>
      <BaseCard img={card.img}>
        <div className={style.detailsContainer}>
          <div className={style.title}>{card.title}</div>
          <div className={style.ingredients}>{card.ingredients}</div>
          <div className={style.iconsContainer}>{getIcons()}</div>
          {getPrice(card.isPrice)}
        </div>
      </BaseCard>
    </div>
  );
};
