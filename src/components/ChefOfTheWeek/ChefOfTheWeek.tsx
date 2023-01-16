import style from "./ChefOfTheWeek.module.scss";
import Chef from "../../assets/Chef.svg";
import { useEffect, useState } from "react";
import {
  ChefOfTheWeekCardModel,
  IChefOfTheWeekCardModel,
} from "../../cardModels/ChefOfTheWeekCardModel";
import mashya from "../../assets/mashya.svg";
import kitchenMarket from "../../assets/kitchenMarket.svg";
import onza from "../../assets/onza.svg";
import { ChefOfTheWeekCard } from "./ChefOfTheWeekCard/ChefOfTheWeekCard";
import { AllRestaurantsButton } from "../sharedComponents/AllRestaurantsButton/AllRestaurantsButton";
import { IBaseCard } from "../../cardModels/IBaseCard";
import useAxiosGet from "../../hooks/useAxiosGet";
import Restaurant from "../../dataModels/Restaurant";

export const ChefOfTheWeek = () => {

  const [restaurants, setRestaurants] = useState<Restaurant[]>([]);
  const { data, isPending, error } = useAxiosGet("/restaurant");

  useEffect(() => {
    console.log(data);
  }, [data]);

  const [cards, setCards] = useState<IBaseCard[]>([
    new ChefOfTheWeekCardModel(onza, "Onza"),
    new ChefOfTheWeekCardModel(kitchenMarket, "kitchen Market"),
    new ChefOfTheWeekCardModel(mashya, "Mashya"),
  ]);

  const content =
    "Chef Yossi Shitrit has been living and breathing his culinary dreams for more than two decades, including running the kitchen in his first restaurant, the fondly-remembered Violet, located in Moshav  Udim. Shitrit's creativity and culinary  acumen born of long experience  are expressed in the every detail of each and every dish.";
  const title = "chef of the week:";
  const secondTitle = "Yossi’s Restaurants";
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
      <div className={`${style.title}`}>{secondTitle}</div>
      <div className={style.carusel}>
        <div className={style.cardsContainer}>
          {cards.map((card) => {
            return <ChefOfTheWeekCard key={card.title} card={card} />;
          })}
        </div>
      </div>
      <div className={style.row}>
        <AllRestaurantsButton />
      </div>
    </div>
  );
};
