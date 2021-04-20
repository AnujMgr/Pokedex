import styled from "styled-components";
import { elevation } from "../../utils/theme";

export const StyleNavbar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${(props) => props.theme.primary};
  padding: 1rem;
  box-shadow: ${elevation.elevate_1};
  margin-bottom: 2rem;
  span {
    font-size: 1.5rem;
    color: ${(props) => props.theme.fontColor};
  }
`;

export const StyleToggleButton = styled.button`
  display: flex;
  justify-content: center;
  border: 0px;
  padding: 1rem;
  cursor: pointer;
  border-radius: 0.4rem;
`;
