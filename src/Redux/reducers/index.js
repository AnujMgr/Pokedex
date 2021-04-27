import { combineReducers } from "redux";
import {
  pokemonReducer,
  selectedPokemonReducer,
  selectedOptionReducer,
} from "./pokemon-reducer";

const reducers = combineReducers({
  allPokemon: pokemonReducer,
  pokemon: selectedPokemonReducer,
  option: selectedOptionReducer,
});

export default reducers;
