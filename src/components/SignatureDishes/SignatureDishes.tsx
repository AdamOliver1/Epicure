import style from "./SignatureDishes.module.scss";
import { SignatureDishCard } from "./SignatureDishCard/SignatureDishCard";
import {
  SignatureDishCardModel,
  ISignatureDishCard,
} from "../../cardModels/SignatureDishCardModel";
import { useState } from "react";
import garbanzoFrito from "../../assets/dishes/garbanzoFrito.svg";
import padKiMao from "../../assets/dishes/padKiMao.svg";
import smokedPizza from "../../assets/dishes/smokedPizza.svg";
import { Carusel } from "../sharedComponents/Carusel/Carusel";
import { AllRestaurantsButton } from "../sharedComponents/AllRestaurantsButton/AllRestaurantsButton";

export const SignatureDishes = () => {
  const title = "Signature Dish of:";

  const [cards, setCards] = useState<ISignatureDishCard[]>([
    new SignatureDishCardModel(
      padKiMao,
      "Pad Ki Mao",
      "Shrimps, Glass Noodles, Kemiri Nuts, Shallots, Lemon Grass, Magic Chili Brown Coconut",
      true,
      false,
      false,
      88,
      false
    ),
    new SignatureDishCardModel(
      garbanzoFrito,
      "Garbanzo  Frito",
      "Polenta fingers, veal cheek, magic chili cured lemon cream, yellow laksa",
      false,
      false,
      false,
      88,
      true
    ),
    new SignatureDishCardModel(
      smokedPizza,
      "Smoked Pizza",
      'Basil dough, cashew "butter", demi-glace, bison & radish',
      true,
      true,
      false,
      88,
      true
    ),
  ]);

  //TODO: flexing cards by max card height
  return (
    <div className={style.container}>
      <div className={style.title}>{title}</div>

      <Carusel>
        {cards.map((card) => {
          return (
            <div key={card.title} className={style.card}>
              <SignatureDishCard
                key={card.title}
                card={card}
              ></SignatureDishCard>
            </div>
          );
        })}
      </Carusel>

      <div className={`${style.row} ${style.desktop}`}>
        <div className={style.mobile}>
          <AllRestaurantsButton></AllRestaurantsButton>
        </div>
      </div>
    </div>
  );
};
