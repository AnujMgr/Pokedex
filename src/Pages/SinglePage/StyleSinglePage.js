import styled from "styled-components";
import { elevation } from "../../utils/theme";
import { device } from "../../utils/mediaQuery";

export const StyleGrid = styled.div`
  display: grid;
  grid-template-columns: 18em 3fr;
  box-shadow: ${elevation.elevate_2};
  max-width: 65em;
  margin: auto;
  margin-top: 2rem;
  background-color: ${(props) => props.theme.main};

  @media ${device.tablet} {
    grid-template-columns: 1fr;
  }
`;

export const StyleAside = styled.div`
  background-color: ${(props) => props.theme.aside};
  padding: 1rem;
  > img {
    height: auto;
    width: 100%;
    image-rendering: -webkit-optimize-contrast;
  }
  > h1 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }
`;

export const StyleMain = styled.div`
  padding: 0rem;
`;

export const StyleAsideDetail = styled.div`
  display: flex;
  margin-bottom: 0.6rem;
  > span {
    font-weight: bold;
    width: 5.5rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    margin-right: 0.3rem;
    color: ${(props) => props.theme.fontColor};
  }
`;

export const StylePokiDetails = styled.div`
  display: flex;
  align-items: center;
  flex-grow: 2;
  > span {
    flex-grow: 1;
    color: ${(props) => props.theme.fontColor};
  }
  > div {
    flex-grow: 10;
  }
`;

export const StyleTypes = styled.div`
  margin-bottom: 1rem;
  span {
    background-color: red;
    color: #fff;
    padding: 0.2rem 0.4rem;
    margin-right: 0.4rem;
    border-radius: 0.4rem;
  }
`;

export const StyleHeader = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1rem 1.5rem;
  a {
    display: inline-flex;
  }
`;

export const StyleProfile = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(10rem, 1fr));
  background-color: #fdfdfd;
  div {
    display: flex;
    flex-direction: column;
    padding: 0.4rem;
    align-items: center;
    border-right: 1px solid #c7c7c7;
    span:first-child {
      margin-bottom: 0.5rem;
      text-align: center;
      height: 1.3rem;
      font-weight: bold;
    }
  }
  div:last-child {
    border-right: none;
  }
`;

export const StyleTopic = styled.h1`
  font-size: 1.2rem;
  padding: 0.5rem 1.5rem;
  font-weight: 500;
`;
