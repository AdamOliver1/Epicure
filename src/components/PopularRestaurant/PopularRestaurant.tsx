import style from "./PopularRestaurant.module.scss";
import { useEffect, useState } from "react";
import { RestaurantCard } from "./RestaurantCard/RestaurantCard";
import { Carusel } from "../sharedComponents/Carusel/Carusel";
import { AllRestaurantsButton } from "../sharedComponents/AllRestaurantsButton/AllRestaurantsButton";
import Restaurant from "../../dataModels/Restaurant";
import { useAxiosGet } from "../../hooks/useAxios";
import { Loader } from "../sharedComponents/Loader/Loader";
import { useNavigate } from "react-router-dom";

export const PopularRestaurant = () => {
  const [restaurants, setRestaurants] = useState<Restaurant[]>([]);
  const { data, isPending, error } = useAxiosGet("/restaurant");
  console.log(restaurants);
  
  // const navigate = useNavigate();
  useEffect(() => {
    setRestaurants(data);
  }, [data]);

  
  const title = "POPULAR RESTAURANT IN EPICURE:";
  return (
    <div className={style.container}>
      <h1 className={style.PopularRestaurantTitle}>{title}</h1>
      {isPending && <Loader></Loader>}
      {restaurants && (
        <Carusel>
          {restaurants.map((restaurant, i) => {
            return (
              <RestaurantCard
                chef={restaurant.chef}
                title={restaurant.name}
                key={i}
                rate={restaurant.stars}
                img={restaurant.image}
              ></RestaurantCard>
            );
          })}
        </Carusel>
      )}

      <div className={style.row}>
        <AllRestaurantsButton></AllRestaurantsButton>
      </div>
    </div>
  );
};
