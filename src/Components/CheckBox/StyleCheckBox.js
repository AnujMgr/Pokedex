import styled from "styled-components";

export const StyleCheckBoxContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  color: ${(props) => props.theme.fontColor};

  label {
    margin-left: 0.4em;
    text-transform: capitalize;
    user-select: none;
    cursor: pointer;
  }
`;
