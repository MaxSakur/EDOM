import { FC } from "react";
import { NavLink } from "react-router-dom";
import s from "./CustomNavLink.module.css";

interface NavLinkProps {
  link: string;
  icon?: React.ReactNode;
  text: string;
}

export const CustomNavLink: FC<NavLinkProps> = ({ link, icon, text }) => {
  return (
    <NavLink
      activeClassName={s.is_active}
      className={s.nav_link}
      to={`/${link}`}
    >
      <>
        {/* <span className={s.icon}>{icon}</span> */}
        <p className={s.nav_link_text}>{text}</p>
      </>
    </NavLink>
  );
};
