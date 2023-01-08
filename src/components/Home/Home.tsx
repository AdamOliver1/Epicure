// import style from "./Home.module.scss";
import { SearchBar } from "../SearchBar/SearchBar";
import { PopularRestaurant } from "../PopularRestaurant/PopularRestaurant";
import { SignatureDishes } from "../SignatureDishes/SignatureDishes";
import { MeaningOfIcons } from "../MeaningOfIcons/MeaningOfIcons";
import { ChefOfTheWeek } from "../ChefOfTheWeek/ChefOfTheWeek";
import { WidthContainer } from "../sharedComponents/WidthContainer/WidthContainer";
import { About } from "../About/About";
import { DesktopWidth } from "../sharedComponents/WidthContainer/MaxWidth";
export const Home = () => {
  return (
    <>
      <SearchBar />

      <WidthContainer maxWidth={new DesktopWidth()}>
        <PopularRestaurant />
        <SignatureDishes />
      </WidthContainer>

      <MeaningOfIcons />

      <WidthContainer maxWidth={new DesktopWidth()}>
        <ChefOfTheWeek />
      </WidthContainer>

      <About />
    </>
  );
};
