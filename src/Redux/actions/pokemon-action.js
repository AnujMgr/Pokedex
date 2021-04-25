import { ActionTypes } from "../constants/action-types";

export const setPokemon = (pokemon) => {
  return {
    type: ActionTypes.SET_POKEMON,
    payload: pokemon,
  };
};

export const selectedPokemon = (pokemon) => {
  return {
    type: ActionTypes.SELECTED_POKEMON,
    payload: pokemon,
  };
};
