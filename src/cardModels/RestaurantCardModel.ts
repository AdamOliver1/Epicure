import { Chef } from './../dataModels/Chef';
import { IBaseCard } from "./IBaseCard";

export interface IRestaurantCard extends IBaseCard {
  chef: Chef;
  rate: number;
}

export class RestaurantCardModel implements IRestaurantCard {
  img: string;
  title: string;
  rate: number;
  chef: Chef;

  constructor(img: string, title: string, chef: Chef, rate: number) {
    this.chef = chef;
    this.img = img;
    this.title = title;
    if (rate < 0 || rate > 5) {
      throw new Error("Rate must be between 0 and 5");
    }
    this.rate = rate;
  }
}
