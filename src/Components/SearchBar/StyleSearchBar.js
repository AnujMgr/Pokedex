import styled from "styled-components";
import { device } from "../../utils/mediaQuery";
import { elevation } from "../../utils/theme";

const borderRadius = "0.2rem";

export const StyleSearchBarWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  border-radius: ${borderRadius};
  background-color: ${(props) => props.theme.primary};
  box-shadow: ${elevation.elevate_1};
  color: ${(props) => props.theme.fontColor};
  max-width: 30em;
  width: 100%;
  margin: 1rem auto;
  :focus,
  :hover {
    box-shadow: ${elevation.elevate_3};
    transition: all 0.4s ease-in;
  }
  span {
    margin-right: 0.4rem;
    user-select: none;
    text-transform: capitalize;
  }
`;

export const StyleSearchFilter = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem;
  background-color: ${(props) => props.theme.primary};
  border-radius: ${borderRadius} 0 0 ${borderRadius};
  cursor: pointer;
`;

export const StyleDropDown = styled.div`
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

export const StyleSearchBar = styled.input`
  width: 100%;
  padding: 1rem 0rem;
  border: 0px;
  border-radius: 0 ${borderRadius} ${borderRadius} 0;
  background-color: ${(props) => props.theme.primary};
  font-size: 1rem;

  @media ${device.mobileL} {
    max-width: 100%;
  }
`;

export const StyleSearchIcon = styled.svg`
  padding: 0 1rem;
`;
