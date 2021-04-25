import React from "react";
import { StyleCheckBoxContainer } from "./StyleCheckBox";

function Checkbox() {
  return (
    <StyleCheckBoxContainer>
      <div>
        <input type="checkbox" />
        <span>ABC</span>
      </div>
    </StyleCheckBoxContainer>
  );
}

export default Checkbox;
