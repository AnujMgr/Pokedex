import styled from "styled-components";

export const StyleWrapper = styled.div`
  max-width: 1300px;
  margin: 0 auto;
  padding: 2em 4em;
`;

export const StyleFlex = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
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
