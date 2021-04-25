import React from "react";
import {
  StyleCard,
  StyleRelative,
  StyleCircle,
  StyleImage,
  StyleDetails,
} from "./StyleCard";

const Card = ({ name, id, types, img, color, png }) => {
  const addDefaultSrc = (ev) => {
    ev.target.src = png;
  };
  console.log(types);
  return (
    <StyleCard color={color}>
      <StyleRelative>
        <StyleCircle />
        <StyleImage onError={addDefaultSrc} src={img} alt={name} />
      </StyleRelative>
      <StyleDetails>
        <span>#{id}</span>
        <h1>{name}</h1>
        {/* <h6>
          Type:
          {types.map((type) => {
            {
              return <span>{type.type.name}</span>;
            }
          })}
        </h6> */}
      </StyleDetails>
    </StyleCard>
  );
};

export default Card;
