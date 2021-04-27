import React from "react";
import {
  StyleCard,
  StyleRelative,
  StyleCircle,
  StyleImage,
  StyleDetails,
} from "./StyleCard";

const Card = ({ name, id, img, color, png }) => {
  const addDefaultSrc = (ev) => {
    ev.target.src = png;
  };
  return (
    <StyleCard color={color}>
      <StyleRelative>
        <StyleCircle />
        <StyleImage onError={addDefaultSrc} src={img} alt={name} />
      </StyleRelative>
      <StyleDetails>
        <span>#{id}</span>
        <h1>{name}</h1>
        {/* <StyleText>
          Species: <span>{species.name}</span>
        </StyleText> */}
      </StyleDetails>
    </StyleCard>
  );
};

export default Card;
