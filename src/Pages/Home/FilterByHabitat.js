import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Card from "../../Components/Card/Card";
import Loading from "../../Components/Loading";

function FilterByHabitat({ filter, noOfPokemon }) {
  const [loading, setLoading] = useState(true);
  const pokemonApi = "https://pokeapi.co/api/v2/pokemon/";
  const habitatApi = "https://pokeapi.co/api/v2/pokemon-habitat/";
  const [pokemonByHabitat, setPokemonByHabitat] = useState();

  const option = useSelector((state) => state.option);
  console.log(option);

  const fetchFetchPokemonByHabitat = async (value, group) => {
    if (filter === group && value !== undefined) {
      const data = [];
      const habitat = await axios
        .get(`${habitatApi}${value.name}`)
        .catch((err) => {
          console.log("Error = " + err);
        });
      for (let i = 1; i < habitat.data.pokemon_species.length; i++) {
        const pokemonByHabitat = await axios.get(
          `${pokemonApi}${habitat.data.pokemon_species[i].name}`
        );
        if (pokemonByHabitat === undefined) continue;

        data.push(pokemonByHabitat.data);
      }
      setPokemonByHabitat(data);
      setLoading(false);
    } else {
      const data = [];
      const habitat = await axios.get(`${habitatApi}${1}`).catch((err) => {
        console.log("Error = " + err);
      });
      for (let i = 1; i < habitat.data.pokemon_species.length; i++) {
        const pokemonByHabitat = await axios.get(
          `${pokemonApi}${habitat.data.pokemon_species[i].name}`
        );
        data.push(pokemonByHabitat.data);
      }
      setPokemonByHabitat(data);
      setLoading(false);
    }
  };

  useEffect(() => {
    // console.log(option.option.group);
    if (JSON.stringify(option) !== "{}") {
      setLoading(true);
      fetchFetchPokemonByHabitat(option.option, option.option.group);
    }
  }, [option]);

  return !loading ? (
    <>
      <React.Fragment>
        {pokemonByHabitat.map((pokemon, index) => {
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
      </React.Fragment>
    </>
  ) : (
    <Loading />
  );
}

export default FilterByHabitat;
