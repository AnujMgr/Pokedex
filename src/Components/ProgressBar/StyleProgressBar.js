import styled from "styled-components";

export const StyleProgressBar = styled.div`
  background-color: #c7c7c7;
  border-radius: 13px;
  height: 0.4em;
  > div {
    background-color: ${(props) => props.color};
    width: ${(props) => props.width}%;
    max-width: 100%;
    height: 0.4em;
    border-radius: 0.5em;
  }
`;
