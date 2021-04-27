import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { StyleHeader } from "./StyleSinglePage";

function Header({ pokemonId }) {
  const { name } = useSelector((state) => state.pokemon);
  return (
    <StyleHeader>
      {pokemonId > 1 ? (
        <Link to={"/pokemon/" + (pokemonId > 1 ? pokemonId - 1 : pokemonId)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path d="m3.86 8.753 5.482 4.796c.646.566 1.658.106 1.658-.753V3.204a1 1 0 0 0-1.659-.753l-5.48 4.796a1 1 0 0 0 0 1.506z" />
          </svg>
          {pokemonId > 1 ? "# " + (pokemonId - 1) + " Prev" : ""}
        </Link>
      ) : (
        <div></div>
      )}
      <h1>{name}</h1>
      <Link to={"/pokemon/" + (pokemonId !== 898 ? ++pokemonId : pokemonId)}>
        {pokemonId < 898 ? "# " + +pokemonId + " Next" : ""}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          viewBox="0 0 16 16"
        >
          <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
        </svg>
      </Link>
    </StyleHeader>
  );
}

export default Header;
