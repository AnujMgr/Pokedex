import styled from "styled-components";
import { elevation } from "../../utils/theme";

const borderRadius = "0.2rem";

export const StyleDropButton = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  padding: 1rem;
  background-color: ${(props) => props.theme.primary};
  border-radius: ${borderRadius} 0 0 ${borderRadius};
  color: ${(props) => props.theme.fontColor};
  justify-content: space-between;
  cursor: pointer;
  span {
    text-transform: capitalize;
  }
`;

export const StyleDropDownMenu = styled.div`
  position: absolute;
  top: 3.5em;
  left: 0;
  z-index: 999;
  background-color: ${(props) => props.theme.primary};
  width: 9em;
  box-shadow: ${elevation.elevate_3};
  li {
    padding: 0.8em 1em;
    user-select: none;
    :hover {
      cursor: pointer;
      background-color: ${(props) => props.theme.background};
    }
  }
`;

export const StyleDropDownContainer = styled.div`
  position: relative;
`;
