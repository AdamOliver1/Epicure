import { IBaseCard } from './IBaseCard';

export interface IRestaurantCard extends IBaseCard{
  chef:string;
  rate: number;
}

export class RestaurantCardModel implements IRestaurantCard {
  img: string;
  title: string;
  rate: number;
  chef:string;

  constructor(img: string, title: string,  chef:string,rate: number) {
    this.chef = chef; 
    this.img = img;
    this.title = title;
    if (rate < 0 || rate > 5) {
      throw new Error("Rate must be between 0 and 5");
    }
    this.rate = rate;
  }
}
