import { Link, useParams } from "react-router-dom";
import { StyleGrid, StyleHeader } from "./StyleSinglePage";
import { useDispatch } from "react-redux";
import Aside from "./Aside";
import Main from "./Main";
import axios from "axios";
import { selectedPokemon } from "../../Redux/actions/pokemon-action";
import { useEffect } from "react";
import { useState } from "react";
import Loading from "../../Components/Loading";

function SinglePage() {
  const { pokemonId } = useParams();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);

  const getPokemonApi = `https://pokeapi.co/api/v2/pokemon/${pokemonId}`;
  const getPokemonSpeciesApi = `https://pokeapi.co/api/v2/pokemon-species/${pokemonId}`;
  const getEvolutionChainApi = `https://pokeapi.co/api/v2/evolution-chain/${pokemonId}`;

  const fetchPokemon = async () => {
    const pokemonApiRes = await axios.get(getPokemonApi).catch((err) => {
      console.log(err);
    });
    const pokemonSpeciesRes = await axios
      .get(getPokemonSpeciesApi)
      .catch((err) => {
        console.log(err);
      });
    const pokemonEvolutionRes = await axios
      .get(getEvolutionChainApi)
      .catch((err) => {
        console.log(err);
      });

    console.log(pokemonEvolutionRes.data);

    dispatch(
      selectedPokemon({ ...pokemonApiRes.data, ...pokemonSpeciesRes.data })
    );
    setLoading(false);
  };

  useEffect(() => {
    if (pokemonId !== "") {
      fetchPokemon();
    }
  }, [pokemonId]);

  return !loading ? (
    <StyleGrid>
      <Aside />
      <StyleHeader>
        <Link to="/">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path d="m3.86 8.753 5.482 4.796c.646.566 1.658.106 1.658-.753V3.204a1 1 0 0 0-1.659-.753l-5.48 4.796a1 1 0 0 0 0 1.506z" />
          </svg>
          #001 Mew
        </Link>
        <h1>Bulbasaur</h1>
        <Link to="/">
          #001 Mew
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
      <Main />
    </StyleGrid>
  ) : (
    <Loading />
  );
}

export default SinglePage;
