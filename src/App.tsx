import React from "react";
import Draggable from "react-draggable";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import ControlSection from "./components/ControlSection";

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
  let [activeDrags, setActiveDrags] = React.useState(0);
  let [horizonalMaxPoint, setHorizonalMaxPoint] = React.useState(0);
  const nodeRef = React.useRef(null);
  const onStart = () => setActiveDrags(++activeDrags);
  const onStop = () => setActiveDrags(--activeDrags);
  const dragHandlers = { onStart, onStop };
  return (
    <Router>
      <div className="App">
        <div className="controls">
          <Draggable
            nodeRef={nodeRef}
            defaultPosition={{ x: horizonalMaxPoint, y: 0 }}
            axis="x"
            positionOffset={{ x: 0, y: 20 }}
            bounds="20"
            // position={{ x: horizonalMaxPoint, y: 0 }}
            {...dragHandlers}
            onStop={(e, data) => {
              if (data.x < 0) {
                setHorizonalMaxPoint(0);
              }

              if (data.x > 50) {
                console.log("DONE", data.x, horizonalMaxPoint);
                setHorizonalMaxPoint(50);
              }
              console.log("-----", data.x, horizonalMaxPoint);
              setHorizonalMaxPoint(0);
            }}
          >
            <div className="box cursor-x" ref={nodeRef}>
              <ControlSection />
            </div>
          </Draggable>
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
