import { ReactNode } from "react";
import style from "./WidthContainer.module.scss";
import { IMaxWidth } from "./MaxWidth";

type WidthContainerProps = {
  children: ReactNode;
  maxWidth: IMaxWidth;
};

export const WidthContainer = ({ children, maxWidth }: WidthContainerProps) => {

  return (
    <div className={`${style.container} ${maxWidth.getWidth()}`}>
      {children}
    </div>
  );
};
