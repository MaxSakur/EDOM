import React, { FC } from "react";
import Loader from "../Loader";

interface ScreenPreLoader {
  children: React.ReactNode;
}

// eslint-disable-next-line
export const ScreenPreLoader: FC<ScreenPreLoader> = ({ children }) => {
  const [currentCount, setCount] = React.useState(2);
  const timer = () => setCount(currentCount - 1);

  React.useEffect(() => {
    if (currentCount <= 0) {
      return;
    }

    const id = setInterval(timer, 1000);
    return () => clearInterval(id);
    // eslint-disable-next-line
  }, [currentCount]);

  return <>{currentCount !== 0 ? <Loader /> : children}</>;
};
