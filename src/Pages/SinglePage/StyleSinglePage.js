import styled from "styled-components";
import { elevation } from "../../utils/theme";
import { device } from "../../utils/mediaQuery";

export const StyleGrid = styled.div`
  display: grid;
  grid-template-columns: 20em 1fr;
  grid-template-areas:
    "aside header header header header header"
    "aside main main main main main"
    "aside main main main main main";
  grid-template-rows: 4em auto;

  box-shadow: ${elevation.elevate_2};
  max-width: 70em;
  margin: 2em auto;
  margin-top: 2rem;
  background-color: ${(props) => props.theme.main};

  @media ${device.tablet} {
    grid-template-columns: 1fr;
    grid-template-areas:
      "header header header header"
      "aside aside aside aside"
      "main main main main";
  }
`;

export const StyleAside = styled.div`
  grid-area: aside;
  background-color: ${(props) => props.theme.aside};
  color: ${(props) => props.theme.fontColor};

  /* max-width: 20em; */
  padding: 1rem;
  > img {
    height: auto;
    width: 100%;
    image-rendering: -webkit-optimize-contrast;
  }
  > h1 {
    font-size: 1.5rem;
    margin: 1.5rem 0;
    text-transform: capitalize;
  }
  @media ${device.tablet} {
    max-width: 100%;
    text-align: center;
    > img {
      height: auto;
      width: 100%;
      max-width: 20em;
      image-rendering: -webkit-optimize-contrast;
    }
  }
`;

export const StyleMain = styled.div`
  padding: 0rem;
  grid-area: main;
  color: ${(props) => props.theme.fontColor};
`;

export const StyleAsideDetail = styled.div`
  display: flex;
  margin-bottom: 0.6rem;
  height: 1.2em;
  > span {
    display: inline-block;
    font-weight: bold;
    width: 5.5rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    text-transform: capitalize;
    margin-right: 0.3rem;
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
    display: inline-block;
    background-color: red;
    color: #fff;
    padding: 0.2rem 0.4rem;
    margin-right: 0.4rem;
    border-radius: 0.4rem;
  }
  text-transform: capitalize;
`;

export const StyleHeader = styled.div`
  grid-area: header;
  display: flex;
  justify-content: space-between;
  padding: 1rem 1.5rem;
  align-items: center;
  color: ${(props) => props.theme.fontColor};

  a {
    display: inline-flex;
    align-items: center;
  }
  h1 {
    font-weight: bold;
    text-transform: capitalize;
  }
`;

export const StyleProfile = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(11rem, 1fr));
  div {
    display: flex;
    flex-direction: column;
    padding: 0.4rem;
    align-items: center;
    span:first-child {
      margin-bottom: 0.5rem;
      text-align: center;
      height: 1.3rem;
      font-weight: bold;
      text-transform: capitalize;
    }
  }
  div:last-child {
    border-right: none;
  }
`;

export const StyleTopic = styled.h1`
  color: ${(props) => props.theme.fontColor};
  font-size: 1.2rem;
  padding: 0.5rem 1.5rem;
  font-weight: 500;
  background-color: ${(props) => props.theme.aside};
`;
export const StyleAbility = styled.div`
  text-align: center;
  padding: 1em;
  display: flex;
  border-radius: 82px;
  background: #ffc5c5;
  align-items: center;
  height: 4rem;
  justify-content: center;
  width: 4rem;
  text-transform: capitalize;
  background-color: ${(props) => props.theme.secondary};
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  text-align: left;
  flex-wrap: wrap;
`;

export const StyleDescription = styled.p`
  margin: 1em 0;
  padding: 0.5rem 1.5rem;
  font-size: 1.2rem;
`;
