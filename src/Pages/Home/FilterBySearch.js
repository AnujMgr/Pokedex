import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Card from "../../Components/Card/Card";
import Loading from "../../Components/Loading";

function FilterBySearch({ query }) {
  const pokemons = useSelector((state) => state.allPokemon.pokemons);
  const [loading, setLoading] = useState(true);
  const filterData = pokemons.filter((pokemon) => {
    return pokemon.name.toLowerCase().includes(query.toLowerCase());
  });
  useEffect(() => {
    if (JSON.stringify(pokemons) !== "[]") {
      console.log("loading complete");

      setLoading(false);
    }
  }, [pokemons]);

  return !loading ? (
    <>
      {filterData.map((pokemon, index) => {
        if (index !== null) {
          const { id, name, sprites } = pokemon;
          return (
            <Link to={/pokemon/ + pokemon.id} key={pokemon.name}>
              <Card
                id={id}
                name={name}
                color={"#3e3b3b"}
                img={sprites.other.dream_world.front_default}
                png={`"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png"`}
              />
            </Link>
          );
        } else return React.Fragment;
      })}
    </>
  ) : (
    <Loading />
  );
}

export default FilterBySearch;
