import styled from "styled-components";
import { device } from "../../utils/mediaQuery";
import { elevation } from "../../utils/theme";

const borderRadius = "2rem";

export const StyleSearchBarWrapper = styled.div`
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

export const StyleSearchBar = styled.input`
  width: 100%;
  padding: 1rem 2rem;
  border: 0px;
  border-radius: 0 ${borderRadius} ${borderRadius} 0;
  background-color: ${(props) => props.theme.primary};
  font-size: 1rem;
  border-radius: ${borderRadius};
  color: ${(props) => props.theme.fontColor};

  @media ${device.mobileL} {
    max-width: 100%;
  }
`;

export const StyleSearchIcon = styled.svg`
  padding: 0 1rem;
  margin-right: 1em;
`;
