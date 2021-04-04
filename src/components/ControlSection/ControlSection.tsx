import React from "react";
import { Link } from "react-router-dom";
import ControlHeader from "../ControlHeader";
import "./ControlSection.css";

export const ControlSection = () => {
  return (
    <div>
      <ControlHeader />

      <Link to="/test">Test</Link>
      <Link to="/home">Home</Link>
    </div>
  );
};
