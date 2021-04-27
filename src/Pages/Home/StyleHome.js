import styled from "styled-components";
import { device } from "../../utils/mediaQuery";

export const StyleWrapper = styled.div`
  max-width: 1300px;
  margin: 0 auto;
  padding: 2em 4em;
  @media ${device.tablet} {
    padding: 1em;
  }
`;

export const StyleFlex = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: center;
  flex-wrap: wrap;
`;

export const StyleGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 6.5em;
  align-items: center;
  width: 100%;
  justify-content: center;
  @media ${device.laptop} {
    display: flex;
    flex-wrap: wrap;
  }
`;

export const StyleSearchBarContainer = styled(StyleFlex)`
  justify-content: space-between;
`;

export const StyleGridContainer = styled(StyleFlex)`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(13em, 1fr));
  grid-column-gap: 0.8rem;
  grid-row-gap: 0.8rem;
`;
