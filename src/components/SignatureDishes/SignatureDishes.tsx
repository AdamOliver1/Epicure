import style from "./SignatureDishes.module.scss";
import { SignatureDishCard } from "./SignatureDishCard/SignatureDishCard";
import { useEffect, useState } from "react";
import { Carusel } from "../sharedComponents/Carusel/Carusel";
import { AllRestaurantsButton } from "../sharedComponents/AllRestaurantsButton/AllRestaurantsButton";
import Dish from "../../dataModels/Dish";
import { useAxiosGet } from "../../hooks/useAxios";
import { Loader } from "../sharedComponents/Loader/Loader";

export const SignatureDishes = () => {
  const [dishes, setDishes] = useState<Dish[]>([]);
  const { data, isPending, error } = useAxiosGet("/dish/limited");
  const title = "Signature Dish of:";
  useEffect(() => {
    setDishes(data);
  }, [data]);


  //TODO flexing cards by max card height
  return (
    <div className={style.container}>
      <div className={style.title}>{title}</div>
      {isPending && <Loader />}
      {dishes && (
        <Carusel>
          {dishes.map((dish, i) => {
            return (
              <div key={i} className={style.card}>
                <SignatureDishCard key={i} dish={dish}></SignatureDishCard>
              </div>
            );
          })}
        </Carusel>
      )}

      <div className={`${style.row} ${style.desktop}`}>
        <div className={style.mobile}>
          <AllRestaurantsButton></AllRestaurantsButton>
        </div>
      </div>
    </div>
  );
};
