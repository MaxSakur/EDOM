import { FC } from "react";
import s from "./ObjectHeader.module.css";

interface ObjectHeaderProps {
  imgPath?: string;
  header?: string;
  subheader?: string;
  aboutProject?: {
    totalHouseArea: number;
    badroomsCount: number;
    carsCanBeParcing: number;
    totalObjectArea: number;
    totalPrice: number;
  };
}

export const ObjectHeader: FC<ObjectHeaderProps> = ({
  imgPath,
  aboutProject,
}) => {
  return (
    <div className={s.animetedGradient}>
      <div className={s.headerContent}>
        <img src={imgPath} alt="" className={s.objectHeaderImage} />
        <div className={s.objectHeaderInfo}>
          <h2>Таунхаус </h2>
          <h3>закрытого типа на две семьи</h3>

          {aboutProject ? (
            <ul className={s.aboutProjectList}>
              <li>
                <p className={s.fieldName}>Площадь дома</p>
                <p className={s.fieldValue}>{aboutProject.totalHouseArea} м2</p>
              </li>
              <li>
                <p className={s.fieldName}>Количество спален</p>
                <p className={s.fieldValue}>{aboutProject.badroomsCount}</p>
              </li>
              <li>
                <p className={s.fieldName}>Крытые парко-места</p>
                <p className={s.fieldValue}>{aboutProject.carsCanBeParcing}</p>
              </li>
              <li>
                <p className={s.fieldName}>Площадь участка</p>
                <p className={s.fieldValue}>
                  {aboutProject.totalObjectArea} соток
                </p>
              </li>
              <li>
                <p className={s.fieldName}>Цена, минимальная комплектация</p>
                <p className={s.fieldValue}>{aboutProject.totalPrice} $</p>
              </li>
            </ul>
          ) : null}
        </div>
      </div>
    </div>
  );
};
