import { combineReducers } from "redux";
import { pokemonReducer, selectedPokemonReducer } from "./pokemon-reducer";

const reducers = combineReducers({
  allPokemon: pokemonReducer,
  pokemon: selectedPokemonReducer,
});

export default reducers;
