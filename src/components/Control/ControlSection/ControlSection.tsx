import { FC } from "react";
import NavigationLinkList from "../NavigationLinkList";
import s from "./ControlSection.module.css";

export const ControlSection: FC = () => {
  return (
    <div className={s.container}>
      <NavigationLinkList />
    </div>
  );
};
