import style from "./SignatureDishCard.module.scss";
import vegan from "../../../assets/dishesIcons/vegan.svg";
import spicy from "../../../assets/dishesIcons/spicy.svg";
import line from "../../../assets/line.svg";
import shekel from "../../../assets/shekel.svg";
import vegetarian from "../../../assets/dishesIcons/vegetarian.svg";
import { BaseCard } from "../../sharedComponents/BaseCard/BaseCard";
import nextId from "react-id-generator";
import Dish from "../../../dataModels/Dish";
import { Tags } from "../../../dataModels/Tags";

type props = {
  dish: Dish
}

export const SignatureDishCard = ({dish}: props )=> {
  const isSpicy = dish.tags?.find(tag => tag === Tags.SPICY);
  const isVegan = dish.tags?.find(tag => tag === Tags.VEGAN);
  const isVegetarian = dish.tags?.find(tag => tag === Tags.VEGETARIAN);

  const getIcons = () => {
    const icons = [];
    if (isSpicy)
      icons.push(
        <img key={nextId()} className={style.img} src={spicy} alt="true"></img>
      );
    if (isVegan)
      icons.push(
        <img key={nextId()} className={style.img} src={vegan} alt="true"></img>
      );
    if (isVegetarian)
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

  const getPrice = () => {
      return (
        <div className={style.price}>
          <div className={style.desktop}>
            <img className={style.line} src={line} alt=""></img>
          </div>
          <div className={style.priceContainer}>
            <div className={style.shekel}>
              <img src={shekel} alt=""></img>
            </div>

            <div>{dish.price}</div>
          </div>

          <div className={style.desktop}>
            <img className={style.line} src={line} alt=""></img>
          </div>
        </div>
      );
  };


  const getIngredients = ():string => {
    if(dish.ingredients === undefined) return "";
    let result = "";
    for (let i = 0; i < dish.ingredients.length ?? 0; i++) {
      result += dish.ingredients[i];
      if (i !== dish.ingredients.length - 1) {
        result += ", ";
      }
    }
    return result;
  }

  return (
    <div className={style.container}>
      <BaseCard img={dish.image}>
        <div className={style.detailsContainer}>
          <div className={style.title}>{dish.name}</div>
          <div className={style.ingredients}>{getIngredients()}</div>
          <div className={style.iconsContainer}>{getIcons()}</div>
          {getPrice()}
        </div>
      </BaseCard>
    </div>
  );
};
