import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import ControlSection from "./components/Control/ControlSection";
import DraggableNavigation from "./components/DraggableNavigation";

const Test = () => {
  return (
    <div>
      <p>TEST</p>
    </div>
  );
};
const Home = () => {
  return (
    <div>
      <p>HOME</p>
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
            <Route path="/test">
              <Test />
            </Route>

            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
