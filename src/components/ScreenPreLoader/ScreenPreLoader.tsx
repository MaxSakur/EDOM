import React from "react";
import Loader from "../Loader";

interface ScreenPreLoader {
  children: React.ReactNode;
}

export const ScreenPreLoader = (props: ScreenPreLoader) => {
  const [loading, setLoading] = React.useState(true);
  setInterval(() => setLoading(false), 2000);

  return <>{loading ? <Loader /> : props.children}</>;
};
