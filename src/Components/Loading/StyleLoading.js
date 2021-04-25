import styled from "styled-components";

export const StyleLoading = styled.div`
  display: flex;
  justify-content: center;
  height: 100vh;
  align-items: center;
  div {
    border: 0.3rem solid #f3f3f3;
    border-radius: 50%;
    border-top: 0.3rem solid #3498db;
    width: ${(props) => (props.size ? props.size : "10em")};
    height: ${(props) => (props.size ? props.size : "10em")};
    -webkit-animation: spin 2s linear infinite; /* Safari */
    animation: spin 2s linear infinite;
  }
  @-webkit-keyframes spin {
    0% {
      -webkit-transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
    }
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
