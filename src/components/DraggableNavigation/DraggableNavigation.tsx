import React from "react";
import Draggable from "react-draggable";

interface DraggableNavigationProps {
  children: React.ReactNode;
  onDragChange: (value: boolean) => any;
}

export const DraggableNavigation = (props: DraggableNavigationProps) => {
  let [activeDrags, setActiveDrags] = React.useState(0);
  const [horizonalMaxPoint, setHorizonalMaxPoint] = React.useState(0);
  const OPEN_MENU_WIDTH = -240;
  const nodeRef = React.useRef(null);
  const onStart = () => setActiveDrags(++activeDrags);
  const onStop = () => setActiveDrags(--activeDrags);
  const dragHandlers = { onStart, onStop };
  const { onDragChange } = props;

  const handleCloseDraggable = () => {
    onDragChange(true);
    return setHorizonalMaxPoint(OPEN_MENU_WIDTH);
  };
  const handleOpenDraggable = () => {
    onDragChange(false);
    return setHorizonalMaxPoint(0);
  };

  return (
    <Draggable
      nodeRef={nodeRef}
      defaultPosition={{ x: 0, y: 0 }}
      axis="x"
      position={{ x: horizonalMaxPoint, y: 0 }}
      {...dragHandlers}
      onStop={(_, data) => {
        if (data.x < horizonalMaxPoint) {
          handleCloseDraggable();
        } else {
          handleOpenDraggable();
        }
      }}
    >
      <div className="box cursor-x" ref={nodeRef}>
        <div
          className={`box_nav_icon ${
            horizonalMaxPoint === 0 ? "" : "box_nav_icon_active"
          }`}
        />
        {props.children}
      </div>
    </Draggable>
  );
};
