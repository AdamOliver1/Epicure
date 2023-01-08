import style from "./About.module.scss";
import epicureMobile from "../../assets/about/epicureMobile.svg";
import epicureDesktop from "../../assets/about/epicureDesktop.svg";
import googlePlayMobile from "../../assets/about/googlePlayMobile.svg";
import appStoreMobile from "../../assets/about/appStoreMobile.svg";
import { WidthContainer } from "../sharedComponents/WidthContainer/WidthContainer";
import { DesktopWidth } from "../sharedComponents/WidthContainer/MaxWidth";

export const About = () => {
  const contentMobile =
    "Lorem ipsum dolor sit amet,\n" +
    "consectetur adipiscing elit. In a\n" +
    "lacus vel justo fermentum\n" +
    "bibendum non\n" +
    "eu ipsum. Cras porta malesuada\n" +
    "eros, eget blandit\n" +
    "turpis suscipit at.  Vestibulun sed\n" +
    "massa in magna sodales porta.\n" +
    "Vivamus elit urna,\n" +
    "dignissim a vestibulum.\n" +
    "Lorem ipsum dolor sit amet,\n" +
    "consectetur adipiscing elit. In a\n" +
    "lacus vel justo fermentum\n" +
    "bibendum no \n" +
    "eu ipsum. Cras porta\n" +
    "malesuada eros.";

  const contentDesktop =
    "Lorem ipsum dolor sit amet, consectetur adipiscing\n" +
    "elit. In a lacus vel justo fermentum bibendum non\n" +
    "eu ipsum. Cras porta malesuada eros, eget blandit\n" +
    "turpis suscipit at.  Vestibulun sed massa in magna\n" +
    "sodales porta. Vivamus elit urna,\n" +
    "dignissim a vestibulum.\n\n" +
    "Lorem ipsum dolor sit amet,consectetur adipiscing\n" +
    "elit. In a lacus vel justo fermentum bibendum no\n" +
    "eu ipsum. Cras porta malesuada eros.\n";

  return (
    <>
      <div className={style.background}>
        <WidthContainer maxWidth={new DesktopWidth()}>
          <div className={style.container}>
            <img
              className={`${style.epicureImg} ${style.mobile}`}
              src={epicureMobile}
              alt="Epicure"
            ></img>
            <img
              className={`${style.epicureImg} ${style.desktop}`}
              src={epicureDesktop}
              alt="Epicure"
            ></img>
            <div className={style.leftContainer}>
              <div className={style.buttons}>
                <img
                  className={style.googlePlay}
                  src={googlePlayMobile}
                  alt="Epicure"
                ></img>
                <img
                  className={style.appStore}
                  src={appStoreMobile}
                  alt="Epicure"
                ></img>
              </div>
              <div className={style.contentContainer}>
                <div className={style.title}>about us</div>
                <p className={`${style.content} ${style.mobile}`}>
                  {contentMobile}
                </p>
                <p className={`${style.content} ${style.desktop}`}>
                  {contentDesktop}
                </p>
              </div>
            </div>
            <div className={style.bottom}></div>
          </div>
        </WidthContainer>
      </div>
    </>
  );
};
