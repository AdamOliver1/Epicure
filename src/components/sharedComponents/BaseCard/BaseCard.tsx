import { ReactNode } from "react";
import style from "./BaseCard.module.scss";

type baseCardProps = {
  img: string;
  children: ReactNode;
  smallWidth?: boolean;
};

const getImgStyle = (smallWidth?: boolean) => {
  if (smallWidth) return `${style.img} ${style.imgWidth}`;
  return style.img;
};

export const BaseCard = ({
  img,
  children,
  smallWidth
}: baseCardProps) => {
  return (
    <div className={style.container}>
      <img className={getImgStyle(smallWidth)} src={img} alt="true"></img>
      <div className={style.detailsContainer}>{children}</div>
    </div>
  );
};
