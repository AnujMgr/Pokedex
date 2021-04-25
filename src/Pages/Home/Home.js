import axios from "axios";
import { useEffect, memo, useState, useRef } from "react";
import { useDispatch } from "react-redux";
import SearchBar from "../../Components/SearchBar/SearchBar";
import { StyleWrapper } from "../StylePage";
import { StyleGridContainer, StyleSearchBarContainer } from "./StyleHome";
import { setPokemon } from "../../Redux/actions/pokemon-action";
import PokemonLists from "./PokemonLists";
// import data from "../../data.json";
import Loading from "../../Components/Loading";
import Checkbox from "../../Components/CheckBox";

function Home() {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const inputRef = useRef();
  const [filter, setFilter] = useState("name");
  const [query, setQuery] = useState("");
  const limit = 100;
  const offset = 0;

  const pokemonApi = `https://pokeapi.co/api/v2/pokemon?offset=${0}&limit=${limit}`;
  const locationApi = `https://pokeapi.co/api/v2/region/?offset=${0}&limit=796`;
  const regionApi = `https://pokeapi.co/api/v2/region`;

  const fetchData = async () => {
    const data = [];

    for (let i = 1; i < 5; i++) {
      const response = await axios
        .get(`https://pokeapi.co/api/v2/pokemon/${i}`)
        .catch((err) => {
          console.log(err);
        });
      data.push(response.data);
    }
    dispatch(setPokemon(data));
    setLoading(false);

    // const pokemonsData = await axios
    //   .get(pokemonApi)
    //   .then((res) => {
    //     const responseData = res.data.results.map((pokemon, index) => {
    //       return { ...pokemon, id: index + 1 };
    //     });
    //     return responseData;
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });

    // dispatch(setPokemon(pokemonsData));
  };

  // const fetchPokemons = () => {
  //   // const response = data;
  //   console.log(data);
  //   dispatch(setPokemon(data.results));
  //   setLoading(false);
  // };

  useEffect(() => {
    fetchData();
  }, []);

  return loading ? (
    <Loading />
  ) : (
    <StyleWrapper>
      <StyleSearchBarContainer>
        <SearchBar
          focused={true}
          inputRef={inputRef}
          filter={filter}
          setFilter={setFilter}
          setQuery={setQuery}
        />
      </StyleSearchBarContainer>
      <Checkbox />
      <StyleGridContainer>
        <PokemonLists query={query} filter={filter} />
      </StyleGridContainer>
    </StyleWrapper>
  );
}

export default memo(Home);
