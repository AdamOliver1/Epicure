import style from "./ChefOfTheWeek.module.scss";
import Chef from "../../assets/Chef.svg";
import { useState } from "react";
import {
  ChefOfTheWeekCardModel,
  IChefOfTheWeekCardModel,
} from "../../models/ChefOfTheWeekCardModel";
import mashya from "../../assets/mashya.svg";
import kitchenMarket from "../../assets/kitchenMarket.svg";
import onza from "../../assets/onza.svg";
import { Carusel } from "../sharedComponents/Carusel/Carusel";
import { ChefOfTheWeekCard } from "./ChefOfTheWeekCard/ChefOfTheWeekCard";
import { AllRestaurantsButton } from "../sharedComponents/AllRestaurantsButton/AllRestaurantsButton";
export const ChefOfTheWeek = () => {
  const [cards, setCards] = useState<IChefOfTheWeekCardModel[]>([
    new ChefOfTheWeekCardModel(onza, "Onza"),
    new ChefOfTheWeekCardModel(kitchenMarket, "kitchen Market"),
    new ChefOfTheWeekCardModel(mashya, "Mashya"),
  ]);

  const content =
    "Chef Yossi Shitrit has been living and breathing his culinary dreams for more than two decades, including running the kitchen in his first restaurant, the fondly-remembered Violet, located in Moshav  Udim. Shitrit's creativity and culinary  acumen born of long experience  are expressed in the every detail of each and every dish.";
  const title = "chef of the week:";
  return (
    <div className={style.container}>
      <div className={`${style.title} ${style.titleFirst}`}>{title}</div>
      <div className={`${style.chefContainer} ${style.desktop}`}>
        <img
          className={style.img}
          src={require(`../../assets/Shef.png`)}
          alt="chef"
        ></img>
        <p className={style.content}>{content}</p>
      </div>
      <img
        className={`${style.img} ${style.mobile}`}
        src={Chef}
        alt="chef"
      ></img>
      <div className={`${style.content} ${style.mobile}`}>{content}</div>
      <div className={`${style.title} ${style.titleSecond}`}>{title}</div>
      <div className={style.carusel}>
        {/* <Carusel> */}
        <div className={style.cardsContainer}>
          {cards.map((card) => {
            return (
              <div key={card.title} className={style.card}>
                <ChefOfTheWeekCard key={card.title} card={card} />
              </div>
            );
          })}
        </div>
        {/* </Carusel> */}
      </div>
      <div className={style.row}>
        <AllRestaurantsButton />
      </div>
    </div>
  );
};
