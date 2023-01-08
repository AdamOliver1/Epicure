import { ReactNode } from "react";
import style from "./WidthContainer.module.scss";
import { IMaxWidth } from "./MaxWidth";

type WidthContainerProps = {
  children: ReactNode;
  maxWidth: IMaxWidth;
};

// export enum MaxWidths {
//   Small = 320,
//   Medium = 768,
//   Large = 1024,
//   xLarge = 1188,
//   xxLarge = 1440,
// }

export const WidthContainer = ({ children, maxWidth }: WidthContainerProps) => {
  // const getWidth = (maxWidth: MaxWidths) => {
  //   return maxWidth === MaxWidths.Small
  //     ? style.small
  //     : maxWidth === MaxWidths.Medium
  //     ? style.medium
  //     : maxWidth === MaxWidths.Large
  //     ? style.large
  //     : maxWidth === MaxWidths.xLarge
  //     ? style.xLarge
  //     : style.xxLarge;
  // };

  return (
    <div className={`${style.container} ${maxWidth.getWidth()}`}>
      {children}
    </div>
  );
};
