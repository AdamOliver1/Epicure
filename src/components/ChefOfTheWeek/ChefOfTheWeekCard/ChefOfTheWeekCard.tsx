import style from "./ChefOfTheWeekCard.module.scss";
import { BaseCard } from "../../sharedComponents/BaseCard/BaseCard";
import { IChefOfTheWeekCardModel } from "../../../cardModels/ChefOfTheWeekCardModel";

export const ChefOfTheWeekCard = ({img,title}: IChefOfTheWeekCardModel) => {
  return (
    <div className={style.cardContainer}>
      <BaseCard img={img} smallWidth={true}>
        <div className={style.container}>
          <div className={style.title}>{title}</div>
        </div>
      </BaseCard>
    </div>
  );
};
