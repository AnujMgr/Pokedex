import styled from "styled-components";
import { elevation } from "../../utils/theme";

export const StyleNavbar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  margin-bottom: 2rem;
  max-width: 1300px;
  margin: auto;

  a {
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
  background-color: ${(props) => props.theme.secondary};
  box-shadow: ${elevation.elevate_1};
  color: ${(props) => props.theme.fontColor};
`;

export const StyleWrapper = styled.div`
  background-color: ${(props) => props.theme.primary};
  box-shadow: ${elevation.elevate_1};
`;
