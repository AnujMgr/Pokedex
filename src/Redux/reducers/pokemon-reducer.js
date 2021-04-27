import { ActionTypes } from "../constants/action-types";

const initialState = {
  pokemons: [],
};

export const pokemonReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_POKEMON:
      return { ...state, pokemons: payload };
    default:
      return state;
  }
};

export const selectedOptionReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case ActionTypes.SELECTED_OPTION:
      return { option: payload };
    default:
      return state;
  }
};

export const selectedPokemonReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case ActionTypes.SELECTED_POKEMON:
      return { ...state, ...payload };
    default:
      return state;
  }
};
