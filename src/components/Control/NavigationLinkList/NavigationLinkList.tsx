import s from "./NavigationLinkList.module.css";
import { FaBeer } from "react-icons/fa";
import CustomNavLink from "../../CustomNavLink";

export const NavigationLinkList = () => {
  return (
    <div className={s.container}>
      <CustomNavLink link="test" icon={<FaBeer />} text="TEST" />
      <CustomNavLink link="home" icon={<FaBeer />} text="HOME" />
    </div>
  );
};
