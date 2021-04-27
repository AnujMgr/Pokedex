import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Card from "../../Components/Card/Card";
import Loading from "../../Components/Loading";

function FilterByGender({ filter, noOfPokemon }) {
  const [pokemonByGender, setPokemonByGender] = useState();
  const [loading, setLoading] = useState(true);
  const genderApi = "https://pokeapi.co/api/v2/gender/";
  const pokemonApi = "https://pokeapi.co/api/v2/pokemon/";
  const option = useSelector((state) => state.option);
  console.log(option);

  const fetchFetchPokemonByGender = async (value, group) => {
    if (filter === group && value !== undefined) {
      console.log(value.name);
      const data = [];
      const gender = await axios
        .get(`${genderApi}${value.name}`)
        .catch((err) => {
          console.log("Error = " + err);
        });
      for (let i = 1; i < noOfPokemon; i++) {
        const pokemonByGender = await axios
          .get(
            `${pokemonApi}${gender.data.pokemon_species_details[i].pokemon_species.name}`
          )
          .catch((err) => {
            console.log("Error = " + err);
          });

        if (pokemonByGender === undefined) continue;

        console.log(pokemonByGender.status);
        data.push(pokemonByGender.data);
      }
      setPokemonByGender(data);
      setLoading(false);
    } else {
      const data = [];
      const gender = await axios.get(`${genderApi}${1}`).catch((err) => {
        console.log("Error = " + err);
      });
      for (let i = 1; i < noOfPokemon; i++) {
        const pokemonByGender = await axios.get(
          `${pokemonApi}${gender.data.pokemon_species_details[i].pokemon_species.name}`
        );

        data.push(pokemonByGender.data);
      }
      setPokemonByGender(data);
      setLoading(false);
    }
  };

  useEffect(() => {
    if (JSON.stringify(option) !== "{}") {
      setLoading(true);
      fetchFetchPokemonByGender(option.option, option.option.group);
    }
  }, [option]);

  return loading ? (
    <Loading />
  ) : (
    <>
      {pokemonByGender.map((pokemon, index) => {
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
      })}{" "}
      ;
    </>
  );
}

export default FilterByGender;
