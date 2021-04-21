import React from "react";
import { Link } from "react-router-dom";
import Card from "../../Components/Card/Card";
import SearchBar from "../../Components/SearchBar/SearchBar";
import { StyleWrapper } from "../StylePage";
import { StyleGridContainer, StyleSearchBarContainer } from "./StyleHome";

function Home() {
  return (
    <StyleWrapper>
      <StyleSearchBarContainer>
        <SearchBar focused={true} />
      </StyleSearchBarContainer>
      <StyleGridContainer>
        <Link to="/pokemon/1">
          <Card
            name={"Pokemon"}
            rank={"001"}
            img={
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png"
            }
            type={"Grass"}
            color={"blue"}
          />
        </Link>
        <Card
          name={"Pikatchu"}
          rank={"002"}
          img={
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png"
          }
          type={"Grass"}
          color={"blue"}
        />
        {/* <Card /> */}
      </StyleGridContainer>
    </StyleWrapper>
  );
}

export default Home;
