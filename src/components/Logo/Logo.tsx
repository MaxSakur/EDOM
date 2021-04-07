import React, { FC } from "react";
import path from "./../../images/logo-new.png";
import s from "./Logo.module.css";

export const Logo: FC = () => {
  return <img src={path} className={s.logoImg} alt="Edom main logo png" />;
};
