import styled from "styled-components";
import { device } from "../utils/mediaQuery";

export const StyleWrapper = styled.div`
  max-width: 1300px;
  margin: 0 auto;
  padding: 2em 4em;
  @media ${device.laptop} {
    padding: 0 1rem;
  }
`;
