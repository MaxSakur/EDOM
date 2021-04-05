import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import ControlSection from "./components/Control/ControlSection";
import DraggableNavigation from "./components/Control/DraggableNavigation";
import HomeScreen from "./screens/HomeScreen";

const Test = () => {
  return (
    <div>
      <p>TEST</p>
    </div>
  );
};

function App() {
  return (
    <Router>
      <div className="app">
        <div className="control">
          <DraggableNavigation>
            <ControlSection />
          </DraggableNavigation>
        </div>

        <div className="window">
          <Switch>
            <Route path="/home">
              <HomeScreen />
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
