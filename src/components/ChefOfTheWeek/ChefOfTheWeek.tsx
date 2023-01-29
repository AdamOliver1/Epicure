import style from "./ChefOfTheWeek.module.scss";
import { useEffect, useState } from "react";
import { ChefOfTheWeekCard } from "./ChefOfTheWeekCard/ChefOfTheWeekCard";
import { AllRestaurantsButton } from "../sharedComponents/AllRestaurantsButton/AllRestaurantsButton";
import { useAxiosGet } from "../../hooks/useAxios";
import Restaurant from "../../dataModels/Restaurant";
import { Loader } from "../sharedComponents/Loader/Loader";
import { Chef } from "../../dataModels/Chef";
import axiosApi from "../../hooks/axiosApi";
import { Error } from "../ErrorPage/ErrorPage";

export const ChefOfTheWeek = () => {
  const [restaurantsOfChef, setRestaurantsOfChef] = useState<Restaurant[]>([]);
  const [restaurantsOfChefPending, setRestaurantsOfChefPending] = useState(true);
  const [chef, setChef] = useState<Chef>();
  const { data:chefData,isPending: chefIsPending,error: chefError } = useAxiosGet('/chef/chefweek');
 
  useEffect(() => {
    setChef(chefData);
    if(chefData?._id){
      axiosApi.get(`/restaurant/by-chef/${chefData?._id}`).then(res => {
        setRestaurantsOfChefPending(false)
        setRestaurantsOfChef(res.data);
      })
    }
  }, [chefData]);

  const content =
    "Chef Yossi Shitrit has been living and breathing his culinary dreams for more than two decades, including running the kitchen in his first restaurant, the fondly-remembered Violet, located in Moshav  Udim. Shitrit's creativity and culinary  acumen born of long experience  are expressed in the every detail of each and every dish.";
  const title = "chef of the week:";
  const secondTitle = `${chef?.name}'s Restaurants`;

  return (
    <div className={style.container}>
      <div className={`${style.title} ${style.titleFirst}`}>{title}</div>
      {chefError && <Error></Error>}
      
      {chefIsPending && <Loader></Loader>}
     {chef && <div className={`${style.chefContainer}`}>
        <div className={style.imgContainer}>
        <img
          className={style.img}
          src={chef.image}
          alt="chef"
        ></img>
        <div className={style.chefNameContainer}>
          <div>
          {chef.name}
          </div>
          
          </div>
        </div>
      
        <p className={style.content}>{chef.description}</p>
      </div>}

      <div className={`${style.title}`}>{secondTitle}</div>
      {restaurantsOfChefPending && <Loader></Loader>}
      {restaurantsOfChef && (
        <div className={style.carusel}>
          <div className={style.cardsContainer}>
            {restaurantsOfChef.map((restaurant, i) => {
              return (
                <ChefOfTheWeekCard
                  key={i}
                  img={restaurant.image}
                  title={restaurant.name}
                />
              );
            })}
          </div>
        </div>
      )}
      <div className={style.row}>
        <AllRestaurantsButton />
      </div>
    </div>
  );
};
