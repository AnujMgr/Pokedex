import React, { useState } from "react";
import { StyleDropButton, StyleDropDownMenu } from "./StyleDropDown";

function DropDown({ filter, setFilter }) {
  const [visible, setVisible] = useState(false);

  const toggleDropDown = () => {
    setVisible(!visible);
  };

  const setFilterValue = (data) => {
    setFilter(data);
    toggleDropDown();
  };

  return (
    <>
      <StyleDropButton onClick={toggleDropDown}>
        <span>{filter === "search" ? "Options" : filter}</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          viewBox="0 0 16 16"
        >
          <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
        </svg>

        {visible ? (
          <StyleDropDownMenu>
            <ul>
              <li
                onClick={() => {
                  setFilterValue("region");
                }}
              >
                Region
              </li>
              <li
                onClick={() => {
                  setFilterValue("gender");
                }}
              >
                Gender
              </li>
              <li
                onClick={() => {
                  setFilterValue("habitat");
                }}
              >
                Habitat
              </li>
              {/* <li onClick={setFilterData}>Gender</li>
            <li onClick={setFilterData}>Habitat</li> */}
            </ul>
          </StyleDropDownMenu>
        ) : (
          ""
        )}
      </StyleDropButton>
    </>
  );
}

export default DropDown;
