import React from "react";
import {
  StyleCard,
  StyleRelative,
  StyleCircle,
  StyleImage,
  StyleDetails,
} from "./StyleCard";

const Card = ({ name, rank, type, img, color }) => {
  return (
    <StyleCard color={color}>
      <StyleRelative>
        <StyleCircle />
        <StyleImage src={img} alt={name} />
      </StyleRelative>
      <StyleDetails>
        <span>#{rank}</span>
        <h1>{name}</h1>
        <h6>Type: {type}</h6>
      </StyleDetails>
    </StyleCard>
  );
};

export default Card;
