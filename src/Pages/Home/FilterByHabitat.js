import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Card from "../../Components/Card/Card";
import Loading from "../../Components/Loading";
import { StyleGridContainer } from "./StyleHome";

function FilterByHabitat({ filter }) {
  const [loading, setLoading] = useState(true);
  const habitatApi = "https://pokeapi.co/api/v2/pokemon-habitat/";
  const [pokemonByHabitat, setPokemonByHabitat] = useState();

  const option = useSelector((state) => state.option);
  console.log(option);

  const fetchFetchPokemonByHabitat = async (value, group) => {
    if (filter === group && value !== undefined) {
      const habitat = await axios
        .get(`${habitatApi}${value.name}`)
        .catch((err) => {
          console.log("Error = " + err);
        });
      const pokemonHabitatData = habitat.data.pokemon_species;
      console.log(pokemonHabitatData);

      setPokemonByHabitat(pokemonHabitatData);
      setLoading(false);
    }
  };

  useEffect(() => {
    if (JSON.stringify(option) !== "{}") {
      setLoading(true);
      fetchFetchPokemonByHabitat(option.option, option.option.group);
    }
  }, [option]);

  return !loading ? (
    <StyleGridContainer>
      {pokemonByHabitat.map((pokemon, index) => {
        if (index !== null) {
          const { name, url } = pokemon;

          const stripedUrl = url.substr(42, 4);
          var id = stripedUrl.match(/\d/g);
          console.log(id);
          id = id.join("");

          return (
            <Link to={/pokemon/ + pokemon.id} key={pokemon.name}>
              <Card
                id={id}
                name={name}
                color={"#3e3b3b"}
                img={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`}
                png={`"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png"`}
              />
            </Link>
          );
        } else return React.Fragment;
      })}
    </StyleGridContainer>
  ) : (
    <Loading />
  );
}

export default FilterByHabitat;
