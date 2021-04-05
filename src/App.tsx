import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import ControlSection from "./components/Control/ControlSection";
import DraggableNavigation from "./components/Control/DraggableNavigation";
import ScreenPreLoader from "./components/ScreenPreLoader";
import HomeScreen from "./screens/HomeScreen";

const Test = () => {
  return (
    <div>
      <p>TEST</p>
    </div>
  );
};

function App() {
  const [menuIsOpen, setMenuIsOpen] = React.useState(false);

  console.log(menuIsOpen, "menuIsOpen");

  return (
    <Router>
      <div className="app">
        <div className="control">
          <DraggableNavigation onDragChange={setMenuIsOpen}>
            <ControlSection />
          </DraggableNavigation>
        </div>

        <div className={`window ${menuIsOpen && "window_fullWidth"}`}>
          <Switch>
            <Route exact path="/home">
              <ScreenPreLoader>
                <HomeScreen />
              </ScreenPreLoader>
            </Route>
            <Route path="/test">
              <Test />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
