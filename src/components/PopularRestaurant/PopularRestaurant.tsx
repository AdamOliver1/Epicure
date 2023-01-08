import style from "./PopularRestaurant.module.scss";
import {
  RestaurantCardModel,
  IRestaurantCard,
} from "../../models/RestaurantCardModel";
import { useState } from "react";
import { RestaurantCard } from "./RestaurantCard/RestaurantCard";
import claro from "../../assets/dishes/claro.svg";
import lumina from "../../assets/dishes/lumina.svg";
import tigerLilly from "../../assets/dishes/tigerLilly.svg";
import { Carusel } from "../sharedComponents/Carusel/Carusel";
import { AllRestaurantsButton } from "../sharedComponents/AllRestaurantsButton/AllRestaurantsButton";
import { SwiperSlide } from "swiper/react";

export const PopularRestaurant = () => {
  const [cards, setCards] = useState<IRestaurantCard[]>([
    new RestaurantCardModel(claro, "Claro", "Ran Shmueli", 4),
    new RestaurantCardModel(lumina, "Lumina", "Meir Adoni", 4),
    new RestaurantCardModel(tigerLilly, "Tiger Lilly", "Yanir Green", 4),
  ]);

  const title = "POPULAR RESTAURANT IN EPICURE:";
  return (
    <div className={style.container}>
      <h1 className={style.PopularRestaurantTitle}>{title}</h1>
      <Carusel>
        {cards.map((card) => {
          return <RestaurantCard key={card.title} card={card}></RestaurantCard>;
        })}
      </Carusel>
      <div className={style.row}>
        <AllRestaurantsButton></AllRestaurantsButton>
      </div>
    </div>
  );
};
