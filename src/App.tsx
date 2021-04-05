import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import DraggableNavigation from "./components/DraggableNavigation";
import ScreenPreLoader from "./components/ScreenPreLoader";
import HomeScreen from "./screens/HomeScreen";
import SplitHouseScreen from "./screens/SplitHouseScreen";
import CustomNavLink from "./components/CustomNavLink";
import { FaBeer } from "react-icons/fa";

const SCREENS = [
  {
    exact: true,
    text: "home",
    link: "home",
    path: "/home",
    icon: <FaBeer />,
    screen: <HomeScreen />,
  },
  {
    text: "home2",
    link: "home2",
    path: "/home2",
    icon: <FaBeer />,
    screen: <SplitHouseScreen />,
  },
  {
    text: "home3",
    link: "home3",
    path: "/home3",
    icon: <FaBeer />,
    screen: <HomeScreen />,
  },
];

function App() {
  const [menuIsOpen, setMenuIsOpen] = React.useState(false);

  return (
    <Router>
      <div className="app">
        <div className="control">
          <DraggableNavigation onDragChange={setMenuIsOpen}>
            {SCREENS.map((screen, index) => (
              <CustomNavLink
                key={index}
                link={screen.link}
                icon={screen.icon}
                text={screen.text}
              />
            ))}
          </DraggableNavigation>
        </div>

        <div className={`window ${menuIsOpen && "window_fullWidth"}`}>
          <Switch>
            {SCREENS.map((screen, index) => (
              <Route exact={screen.exact} key={index} path={screen.path}>
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
