// import style from './Carusel.module.scss';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
// import { ReactNode } from 'react';
// import { Autoplay ,Navigation,Thumbs} from 'swiper';
// type caruselProps = {
//   children: ReactNode;
// };

// export const Carusel = ({ children }: caruselProps) => {
//     // modules={[Autoplay]}
//     // spaceBetween={24}
//     // slidesPerView={'auto'}
//     // loop={true}
//     // autoplay={{
//     //   delay: 1800,
//     //   disableOnInteraction: false,
//     // }}
//     // mousewheel={{
//     //   invert: true,
//     //   releaseOnEdges: true,
//     // }}
//     // speed={1000}
    
//     return (
//         <div className={style.swipper}>
//         <Swiper 
//     //  modules={[Thumbs,Navigation]}
//     //   spaceBetween={10}
//     //   slidesPerView={'auto'}
//     //   loop={true}
//     // modules={[Autoplay]}
//     spaceBetween={20}
//     slidesPerView={3}
//     loop={true}
//     // autoplay={{
//     //   delay: 1800,
//     //   disableOnInteraction: false,
//     // }}
//     mousewheel={{
//       invert: true,
//       releaseOnEdges: true,
//     }}
//     speed={1000}
//         >
//       {children}
//     </Swiper>
//         </div>
//     )
// }

import style from "./Carusel.module.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { ReactNode } from "react";

type caruselProps = {
  children: ReactNode;
};

export const Carusel = ({ children }: caruselProps) => {
  const settings1 = {
    infinite: false,
    slidesToShow:3,
    slidesToScroll: 1,
    swipeToSlide: true,
    rows: 1,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2.3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1.7,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1.5,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return <Slider {...settings1}>{children}</Slider>;
};
