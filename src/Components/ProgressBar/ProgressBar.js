import React from "react";
import { StyleProgressBar } from "./StyleProgressBar";

function ProgressBar({ width, color }) {
  return (
    <StyleProgressBar width={width} color={color}>
      <div></div>
    </StyleProgressBar>
  );
}

export default ProgressBar;
