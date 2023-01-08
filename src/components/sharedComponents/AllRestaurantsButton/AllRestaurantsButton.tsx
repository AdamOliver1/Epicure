import style from "./AllRestaurantsButton.module.scss";
import AllRestaurantArrow from "../../../assets/AllRestaurantArrow.svg";

export const AllRestaurantsButton = () => {
  const AllRestaurants = "All Restaurants";

  return (
    <div className={style.container}>
      <div className={style.allRestaurants}>{AllRestaurants}</div>
      <img
        src={AllRestaurantArrow}
        alt=">>"
        className={style.allRestaurantsArrow}
      ></img>
    </div>
  );
};
