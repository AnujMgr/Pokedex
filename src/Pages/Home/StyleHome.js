import styled from "styled-components";

export const StyleWrapper = styled.div`
  max-width: 1300px;
  margin: 0 auto;
  padding: 0 4rem;
`;

export const StyleFlex = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;

export const StyleSearchBarContainer = styled(StyleFlex)`
  justify-content: space-between;
  margin-bottom: 2rem;
`;

export const StyleGridContainer = styled(StyleFlex)`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(14em, 1fr));
  grid-column-gap: 0.5rem;
`;
