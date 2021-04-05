import React, { FC } from "react";
import imgPath from "./../../../images/logo-new.png";
import s from "./ControlHeader.module.css";

interface ControlHeaderProps {
  img?: string;
}

export const ControlHeader: FC<ControlHeaderProps> = ({ img }) => {
  return (
    <div>
      <img src={img || imgPath} className={s.controlHeader} alt="Edom logo" />
      <p>
        Строительство современных загородных энергоэффективных домов под ключ{" "}
      </p>
    </div>
  );
};
