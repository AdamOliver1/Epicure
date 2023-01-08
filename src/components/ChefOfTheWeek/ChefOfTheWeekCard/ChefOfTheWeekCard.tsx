import style from "./ChefOfTheWeekCard.module.scss";
import { BaseCard } from "../../sharedComponents/BaseCard/BaseCard";
import { IChefOfTheWeekCardModel } from "../../../models/ChefOfTheWeekCardModel";

type CardProps = {
  card: IChefOfTheWeekCardModel;
};

export const ChefOfTheWeekCard = ({ card }: CardProps) => {
  return (
    <div className={style.cardContainer}>
      <BaseCard img={card.img} smallWidth={true}>
        <div className={style.container}>
          <div className={style.title}>{card.title}</div>
        </div>
      </BaseCard>
    </div>
  );
};
