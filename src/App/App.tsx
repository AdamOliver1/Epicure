import style from "./App.module.scss";
import { Home } from "../components/Home/Home";
import { Header } from "../components/Header/Header";
import { WidthContainer } from "../components/sharedComponents/WidthContainer/WidthContainer";
import { Footer } from "../components/Footer/Footer";
import { DesktopWidth } from "../components/sharedComponents/WidthContainer/MaxWidth";
// import {MaxWidths} from '../components/sharedComponents/WidthContainer/WidthContainer';
function App() {
  return (
    <>
      <div className={style.container}>
        <WidthContainer maxWidth={new DesktopWidth()}>
          <Header />
        </WidthContainer>
        <Home />
        <WidthContainer maxWidth={new DesktopWidth()}>
          <Footer />
        </WidthContainer>
      </div>
    </>
  );
}

export default App;
