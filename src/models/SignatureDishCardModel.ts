import {IBaseCard} from './IBaseCard';

export interface ISignatureDishCard  extends IBaseCard{

  ingredients: string;
  isSpicy: boolean;
  isVegan: boolean;
  isVegetarian: boolean;
  isPrice: boolean;
  price: number;
}

export class SignatureDishCardModel implements ISignatureDishCard {
  img: string;
  title: string;
  ingredients: string;
  isSpicy: boolean;
  isVegan: boolean;
  isVegetarian: boolean;
  isPrice: boolean;
  price: number;

  constructor(
    img: string,
    title: string,
    ingredients: string,
    isSpicy: boolean,
    isVegan: boolean,
    isVegetarian: boolean,
    price: number,
    isPrice: boolean
  ) {
    this.ingredients = ingredients;
    this.img = img;
    this.title = title;
    this.isSpicy = isSpicy;
    this.isVegan = isVegan;
    this.isVegetarian = isVegetarian;
    this.isPrice = isPrice;
    if (price < 0) {
      throw new Error("spice must be greater than 0");
    }
    this.price = price;
  }
}
