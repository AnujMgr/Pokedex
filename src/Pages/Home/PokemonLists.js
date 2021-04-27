import React from "react";
import FilterByGender from "./FilterByGender";
import FilterByHabitat from "./FilterByHabitat";
import FilterBySearch from "./FilterBySearch";

function PokemonLists({ query, filter, option, setRadioValue, noOfPokemon }) {
  console.log(option);
  if (filter === "search") {
    return <FilterBySearch query={query} noOfPokemon={noOfPokemon} />;
  } else if (filter === "region") {
    return <h1>Filter By Search</h1>;
  } else if (filter === "gender") {
    return (
      <FilterByGender
        genderOption={option}
        filter={filter}
        noOfPokemon={noOfPokemon}
      />
    );
  } else if (filter === "habitat") {
    return (
      <FilterByHabitat
        habitatOption={option}
        filter={filter}
        setRadioValue={setRadioValue}
        noOfPokemon={noOfPokemon}
      />
    );
  }
}

export default PokemonLists;
