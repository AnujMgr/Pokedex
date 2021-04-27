import React, { useEffect, useRef } from "react";
import { StyleCheckBoxContainer } from "./StyleCheckBox";
import { setOption } from "../../Redux/actions/pokemon-action";
import { useDispatch } from "react-redux";

function RadioOption({ name, index, group }) {
  const inputRef = useRef();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setOption({ name: 1, group }));
  }, []);

  return (
    <StyleCheckBoxContainer>
      {index === 0 ? (
        <input
          id={name}
          value={name}
          name="checkGroup"
          type="radio"
          defaultChecked
          ref={inputRef}
          onChange={() => dispatch(setOption({ name: name, group }))}
        />
      ) : (
        <input
          id={name}
          name="checkGroup"
          value={name}
          type="radio"
          ref={inputRef}
          onChange={() => dispatch(setOption({ name: name, group }))}
        />
      )}

      <label htmlFor={name}>{name}</label>
    </StyleCheckBoxContainer>
  );
}

export default RadioOption;
