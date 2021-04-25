import React from "react";
import { useSelector } from "react-redux";
import ProgressBar from "../../Components/ProgressBar";
import {
  StyleAside,
  StyleAsideDetail,
  StylePokiDetails,
  StyleTypes,
} from "./StyleSinglePage";

function Aside() {
  const pokemon = useSelector((state) => state.pokemon);
  const { id, name, types, stats } = pokemon;

  return (
    <StyleAside>
      <img
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`}
        alt="Bulbasaur"
      />
      <h1>{name}</h1>

      <StyleTypes>
        {types.map((type) => {
          return <span key={type.type.name}>{type.type.name}</span>;
        })}
      </StyleTypes>
      <div>
        {stats.map((stat) => {
          var name = stat.stat.name;
          var newName = name.replace("special-", "SP ");
          return (
            <StyleAsideDetail key={stat.stat.name}>
              <span>{newName}</span>
              <StylePokiDetails>
                <span>{stat.base_stat}</span>
                <ProgressBar width={stat.base_stat} color={"orange"} />
              </StylePokiDetails>
            </StyleAsideDetail>
          );
        })}
      </div>
    </StyleAside>
  );
}

export default Aside;
