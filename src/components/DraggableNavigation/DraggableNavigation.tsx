import React from "react";
import Draggable from "react-draggable";

interface DraggableNavigationProps {
  children: React.ReactNode;
}

export const DraggableNavigation = (props: DraggableNavigationProps) => {
  let [activeDrags, setActiveDrags] = React.useState(0);
  const [horizonalMaxPoint, setHorizonalMaxPoint] = React.useState(0);
  const OPEN_MENU_WIDTH = 340;
  const nodeRef = React.useRef(null);
  const onStart = () => setActiveDrags(++activeDrags);
  const onStop = () => setActiveDrags(--activeDrags);
  const dragHandlers = { onStart, onStop };

  return (
    <Draggable
      nodeRef={nodeRef}
      defaultPosition={{ x: 0, y: 0 }}
      axis="x"
      position={{ x: horizonalMaxPoint, y: 0 }}
      {...dragHandlers}
      onStop={(_, data) => {
        if (data.x < horizonalMaxPoint) {
          return setHorizonalMaxPoint(-OPEN_MENU_WIDTH * 0.65);
        }

        return setHorizonalMaxPoint(0);
      }}
    >
      <div className="box cursor-x" ref={nodeRef}>
        {props.children}
      </div>
    </Draggable>
  );
};
