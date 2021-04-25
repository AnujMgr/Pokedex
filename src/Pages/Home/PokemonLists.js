import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Card from "../../Components/Card/Card";

function PokemonLists({ query }) {
  const pokemons = useSelector((state) => state.allPokemon.pokemons);

  const filterData = pokemons.filter((pokemon) => {
    return pokemon.name.toLowerCase().includes(query.toLowerCase());
  });

  console.log(pokemons);

  return (
    <React.Fragment>
      {filterData.map((pokemon, index) => {
        if (index !== null) {
          return (
            <Link to={/pokemon/ + pokemon.id} key={pokemon.name}>
              <Card
                id={pokemon.id}
                name={pokemon.name}
                color={"#3e3b3b"}
                types={pokemon.types}
                img={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg`}
                png={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`}
              />
            </Link>
          );
        } else return React.Fragment;
      })}
    </React.Fragment>
  );
}

export default PokemonLists;
