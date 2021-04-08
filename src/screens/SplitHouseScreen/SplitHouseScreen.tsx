import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { BsInfoCircleFill, BsFillBarChartFill } from "react-icons/bs";
import { FaMapMarkerAlt } from "react-icons/fa";
import s from "./../Screen.module.css";
// import { FC } from "react";
import imgTownHouse from "./../../images/edom_townhouse.jpeg";
import ObjectHeader from "../../components/ObjectHeader";

const googleLocPath =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.6575650975005!2d30.1848206742669!3d50.42728005867663!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTDCsDI1JzQxLjIiTiAzMMKwMTEnMDcuNSJF!5e0!3m2!1sru!2sua!4v1515096581549";

const ObjectLocatiom = () => {
  return (
    <iframe
      src={googleLocPath}
      title="Edom Town House Location"
      width="100%"
      height="450"
      frameBorder={0}
      style={{ border: 0 }}
    />
  );
};

const ObjectPhotoGallery = () => {
  return (
    <Tabs className={s.objectStages}>
      <TabList>
        <Tab>
          <p>
            Этап 1 <br /> Фундамент
          </p>
        </Tab>
        <Tab>
          <p>
            Этап 2 <br /> Стены
          </p>
        </Tab>
        <Tab>
          <p>
            Этап 3 <br /> Отделка
          </p>
        </Tab>
      </TabList>

      <TabPanel>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem,
          quos ullam? Amet, harum, ullam reprehenderit hic corrupti voluptatem
          quibusdam aperiam excepturi fuga, ad dolorem fugit impedit assumenda
          voluptates possimus modi.
        </p>
      </TabPanel>
      <TabPanel>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem,
          quos ullam? Amet, harum, ullam reprehenderit hic corrupti voluptatem
          quibusdam aperiam excepturi fuga, ad dolorem fugit impedit assumenda
          voluptates possimus modi.
        </p>
      </TabPanel>
      <TabPanel>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem,
          quos ullam? Amet, harum, ullam reprehenderit hic corrupti voluptatem
          quibusdam aperiam excepturi fuga, ad dolorem fugit impedit assumenda
          voluptates possimus modi.
        </p>
      </TabPanel>
    </Tabs>
  );
};

export const SplitHouseScreen = () => {
  const splitData = {
    totalHouseArea: 125,
    badroomsCount: 4,
    carsCanBeParcing: 4,
    totalObjectArea: 5,
    totalPrice: 100000,
  };

  return (
    <div className={s.screenContainer}>
      <div className={s.screenHeader}>
        <ObjectHeader imgPath={imgTownHouse} aboutProject={splitData} />
      </div>
      <div className={s.screenContent}>
        <Tabs>
          <TabList>
            <Tab>
              <BsInfoCircleFill />
              Общие данные
            </Tab>
            <Tab>
              <FaMapMarkerAlt />
              Карта
            </Tab>
            <Tab>
              <BsFillBarChartFill />
              Этапы строительства
            </Tab>
            <Tab>
              <BsFillBarChartFill />
              Фото обьекта
            </Tab>
          </TabList>

          <TabPanel className={s.mapContainer}>
            <ObjectLocatiom />
          </TabPanel>
          <TabPanel>
            <h2>Общая инфа об проекте</h2>
          </TabPanel>
          <TabPanel>
            <ObjectPhotoGallery />
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};
