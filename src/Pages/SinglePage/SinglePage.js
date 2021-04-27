import { useParams } from "react-router-dom";
import { StyleGrid } from "./StyleSinglePage";
import { useDispatch } from "react-redux";
import Aside from "./Aside";
import Main from "./Main";
import axios from "axios";
import { selectedPokemon } from "../../Redux/actions/pokemon-action";
import { useEffect } from "react";
import { useState } from "react";
import Loading from "../../Components/Loading";
import Header from "./Header";

function SinglePage() {
  const { pokemonId } = useParams();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);

  const getPokemonApi = `https://pokeapi.co/api/v2/pokemon/${pokemonId}`;
  const getPokemonSpeciesApi = `https://pokeapi.co/api/v2/pokemon-species/${pokemonId}`;
  // const getEvolutionChainApi = `https://pokeapi.co/api/v2/evolution-chain/${pokemonId}`;

  const fetchPokemon = async () => {
    const pokemonApiRes = await axios.get(getPokemonApi).catch((err) => {
      console.log(err);
    });
    const pokemonSpeciesRes = await axios
      .get(getPokemonSpeciesApi)
      .catch((err) => {
        console.log(err);
      });

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
      <Header pokemonId={pokemonId} />
      <Main />
    </StyleGrid>
  ) : (
    <Loading />
  );
}

export default SinglePage;
