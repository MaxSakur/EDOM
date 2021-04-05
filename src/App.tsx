import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import DraggableNavigation from "./components/DraggableNavigation";
import ScreenPreLoader from "./components/ScreenPreLoader";
import HomeScreen from "./screens/HomeScreen";
import SplitHouseScreen from "./screens/SplitHouseScreen";
import CustomNavLink from "./components/CustomNavLink";
import LogoWithHeader from "./components/LogoWithHeader";
// import { FaBeer } from "react-icons/fa";

const DONE_PROJECTS = [
  {
    exact: true,
    text: "ТаунХаус",
    link: "home",
    path: "/home",
    screen: <HomeScreen />,
  },
  {
    text: "Бойница",
    link: "home2",
    path: "/home2",
    screen: <SplitHouseScreen />,
  },
  {
    text: "Усадьба",
    link: "home3",
    path: "/home3",
    screen: <HomeScreen />,
  },
];
const CURRENT_PROJECTS = [
  {
    exact: true,
    text: "ТаунХаус",
    link: "home4",
    path: "/home4",
    screen: <HomeScreen />,
  },
  {
    text: "Бойница",
    link: "home5",
    path: "/home5",
    screen: <SplitHouseScreen />,
  },
  {
    text: "Усадьба",
    link: "home6",
    path: "/home6",
    screen: <HomeScreen />,
  },
];

const COMPANY = [
  {
    text: "О компании",
    link: "home7",
    path: "/home7",
    screen: <HomeScreen />,
  },
  {
    text: "Контакты",
    link: "home8",
    path: "/home8",
    screen: <SplitHouseScreen />,
  },
  {
    text: "Инвестиционные программы",
    link: "home9",
    path: "/home9",
    screen: <SplitHouseScreen />,
  },
];

function App() {
  const [menuIsOpen, setMenuIsOpen] = React.useState(false);
  const concatData = [...COMPANY, ...DONE_PROJECTS];

  return (
    <Router>
      <div className="app">
        <div className="control">
          <DraggableNavigation onDragChange={setMenuIsOpen}>
            <LogoWithHeader />

            {/* TODO: Add function that get an Array and create separator with block name header */}
            <div className="separator_line" />
            <p className="separator_header">Завершенные проекты</p>
            <div className="separator_line" />
            {DONE_PROJECTS.map((screen, index) => (
              <CustomNavLink
                key={index}
                link={screen.link}
                text={screen.text}
              />
            ))}

            <div className="separator_line" />
            <p className="separator_header">Настоящие проекты</p>
            <div className="separator_line" />
            {CURRENT_PROJECTS.map((screen, index) => (
              <CustomNavLink
                key={index}
                link={screen.link}
                text={screen.text}
              />
            ))}

            <div className="separator_line" />
            <p className="separator_header">Другое</p>
            <div className="separator_line" />
            {COMPANY.map((screen, index) => (
              <CustomNavLink
                key={index}
                link={screen.link}
                text={screen.text}
              />
            ))}
          </DraggableNavigation>
        </div>

        <div className={`window ${menuIsOpen && "window_fullWidth"}`}>
          <Switch>
            {concatData.map((screen, index) => (
              <Route key={index} path={screen.path}>
                <ScreenPreLoader>{screen.screen}</ScreenPreLoader>
              </Route>
            ))}
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
