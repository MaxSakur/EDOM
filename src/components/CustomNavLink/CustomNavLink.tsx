import { FC } from "react";
import { Link } from "react-router-dom";
import s from "./CustomNavLink.module.css";

interface NavLinkProps {
  link: string;
  icon: React.ReactNode;
  text: string;
}

export const CustomNavLink: FC<NavLinkProps> = ({ link, icon, text }) => {
  return (
    <Link className={s.nav_link} to={`/${link}`}>
      <p className={s.nav_link_text}>
        {icon}
        {text}
      </p>
    </Link>
  );
};
