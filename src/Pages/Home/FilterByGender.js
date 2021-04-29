import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Card from "../../Components/Card/Card";
import Loading from "../../Components/Loading";

function FilterByGender({ filter }) {
  const [pokemonByGender, setPokemonByGender] = useState();
  const [loading, setLoading] = useState(true);
  const genderApi = "https://pokeapi.co/api/v2/gender/";
  const option = useSelector((state) => state.option);
  console.log(option);

  const fetchFetchPokemonByGender = async (value, group) => {
    if (filter === group && value !== undefined) {
      const gender = await axios
        .get(`${genderApi}${value.name}`)
        .catch((err) => {
          console.log("Error = " + err);
        });
      const pokemonGenderData = gender.data.pokemon_species_details;
      console.log(pokemonGenderData);

      setPokemonByGender(pokemonGenderData);
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
          const { pokemon_species } = pokemon;
          const { name, url } = pokemon_species;

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
                // img={sprites.other.dream_world.front_default}
                img={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`}
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
