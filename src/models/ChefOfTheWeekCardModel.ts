import { IBaseCard } from "./IBaseCard";

export interface IChefOfTheWeekCardModel extends IBaseCard {}

export class ChefOfTheWeekCardModel implements IChefOfTheWeekCardModel {
  img: string;
  title: string;

  constructor(img: string, title: string) {
    this.img = img;
    this.title = title;
  }
}
