import styled from "styled-components";
import { themes, elevation } from "../../utils/theme";

export const StyleCard = styled.div`
  background: ${(props) =>
    props.theme === themes.dark ? props.color : "rgb(236 250 229)"};
  box-shadow: ${elevation.elevate_1};
  padding: 1rem 0.5rem;
  border-radius: 0.4rem;
  :hover {
    box-shadow: ${elevation.elevate_4};
    transition: all 0.3s ease-in-out;
  }
`;

export const StyleRelative = styled.div`
  position: relative;
  height: 8em;
`;

export const StyleCircle = styled.div`
  height: 120px;
  width: 120px;
  border-radius: 50%;
  background-color: rgb(215 246 182);
  margin: auto;
`;

export const StyleImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  margin: auto;
  height: 8em;
  width: 8em;
  image-rendering: -webkit-optimize-contrast;
`;

export const StyleDetails = styled.div`
  margin: 1rem 0;
  text-align: center;
  > span {
    display: inline-block;
    color: #fff;
    padding: 0.3em 0.5em;
    background-color: #27666693;
    border-radius: 10px;
  }
  h3,
  h2 {
    margin: 0.6rem 0;
  }
  h1 {
    font-size: 1.5rem;
    margin: 1rem 0;
    text-transform: capitalize;
  }
`;

export const StyleText = styled.h6`
  span {
    text-transform: capitalize;
  }
`;
