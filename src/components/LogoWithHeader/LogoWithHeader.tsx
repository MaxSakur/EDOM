import React, { FC } from "react";
import imgPath from "./../../images/logo-new.png";
import s from "./LogoWithHeader.module.css";

interface LogoWithHeaderProps {
  img?: string;
}

export const LogoWithHeader: FC<LogoWithHeaderProps> = ({ img }) => {
  return (
    <div className={s.logo_container}>
      <img src={img || imgPath} className={s.logo} alt="Edom logo" />
    </div>
  );
};
