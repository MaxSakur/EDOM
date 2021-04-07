import { FC } from "react";
import s from "./HomeScreen.module.css";
import path from "../../video/bgVideo.mp4";
import Logo from "../../components/Logo";

export const HomeScreen: FC = () => {
  return (
    <div className={s.screen}>
      <video className={s.bgVideo} autoPlay loop muted>
        <source src={path} type="video/mp4" />
      </video>
      <div className={s.content}>
        <div className={s.mainBlock}>
          <div className={s.logoContainer}>
            <Logo />
          </div>
          <div className={s.textContainer}>
            <p className={s.slogan}>
              Загородние <br /> енергоэффективные <br /> дома
            </p>
            {/* <p>
              Идеальный размер дома: чтобы было слышно детей, но не слишком
              отчетливо. Миньон Маклофлин
            </p> */}
          </div>
        </div>
      </div>
    </div>
  );
};
