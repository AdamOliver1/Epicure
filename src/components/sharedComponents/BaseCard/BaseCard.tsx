import React, { ReactNode } from "react";
import style from "./BaseCard.module.scss";
import { SwiperSlide } from "swiper/react";
type baseCardProps = {
  img: string;
  children: ReactNode;
  height?: string;
  width?: string;
};

const getImg = (img: string, height?: string, width?: string) => {
  if((window.innerWidth > 768 ) && height && width){
    return <img height={height} width={width} src={img} alt="true"></img>;
  }
  return  <img className={style.img} src={img} alt="true"></img>  
}; 

export const BaseCard = ({ img, children,height,width }: baseCardProps) => {
  return (
 <div className={style.container}>
      {getImg(img,height,width)}
       <div className={style.detailsContainer}>{children}</div>
     </div>
 
   
  );
};
