import styled from "styled-components";
import { device } from "../../utils/mediaQuery";

export const StyleSearchBar = styled.input`
  width: 100%;
  max-width: 30em;
  margin: auto;
  border-radius: 10px;
  padding: 1rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  border: 0px;
  margin: 1rem auto;
  background-color: ${(props) => props.theme.primary};
  font-size: 1.2rem;

  @media ${device.mobileL} {
    max-width: 100%;
  }
  :focus,
  :hover {
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    transition: all 0.4s ease-in;
  }
`;
