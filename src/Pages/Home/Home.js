import { useEffect, memo, useState, useRef } from "react";
import { useDispatch } from "react-redux";
import SearchBar from "../../Components/SearchBar/SearchBar";
import {
  StyleFlex,
  StyleGrid,
  StyleGridContainer,
  StyleSearchBarContainer,
  StyleWrapper,
} from "./StyleHome";
import { setPokemon } from "../../Redux/actions/pokemon-action";
import PokemonLists from "./PokemonLists";
import Loading from "../../Components/Loading";
import DropDown from "../../Components/Dropdown/";
import axios from "axios";
import RadioOption from "../../Components/CheckBox";

function Home() {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const inputRef = useRef();
  const [filter, setFilter] = useState("search");
  const [fetched, setFetched] = useState(false);
  const [query, setQuery] = useState("");
  const [region, setRegion] = useState("region");
  const [habitat, setHabitat] = useState("");
  const [checkOption, setCheckOption] = useState("search");
  const [radioOption, setRadioOption] = useState("");
  const pokemonApi = "https://pokeapi.co/api/v2/pokemon/?limit=700&offset=0";
  const regionApi = "https://pokeapi.co/api/v2/region";
  const habitatApi = "https://pokeapi.co/api/v2/pokemon-habitat/";

  const gender = [{ name: "male" }, { name: "female" }, { name: "genderless" }];
  const noOfPokemon = 50;

  const fetchData = async () => {
    const getPokemons = await axios.get(`${pokemonApi}`);

    const region = await axios.get(regionApi).catch((err) => {
      console.log("Error = " + err);
    });

    const habitat = await axios.get(habitatApi).catch((err) => {
      console.log("Error = " + err);
    });

    setRegion(region.data.results);
    setHabitat(habitat.data.results);

    dispatch(setPokemon(getPokemons.data.results));
    setLoading(false);
  };

  useEffect(() => {
    if (!fetched) {
      fetchData();
      setFetched(true);
    }
  }, []);

  const handleClikOnSearch = () => {
    setFilter("search");
  };
  const setRadioValue = (value) => {
    setRadioOption(value);
  };

  useEffect(() => {
    // setLoading("me");
    if (filter === "region") {
      setCheckOption({ group: "region", data: region });
      setLoading(false);
    } else if (filter === "gender") {
      setCheckOption({ group: "gender", data: gender });
      setLoading(false);
    } else if (filter === "habitat") {
      setCheckOption({ group: "habitat", data: habitat });
      setLoading(false);
    } else if (filter === "search") {
      setLoading(false);
    }
  }, [filter]);

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
          onClick={handleClikOnSearch}
        />
      </StyleSearchBarContainer>

      <StyleGrid>
        {filter === "search" ? (
          <div></div>
        ) : (
          <StyleFlex>
            {typeof checkOption.data === "object" ||
            typeof checkOption.data === "array" ? (
              checkOption.data.map((option, index) => {
                console.log(checkOption.group);
                return (
                  <RadioOption
                    key={option.name}
                    name={option.name}
                    group={checkOption.group}
                    index={index}
                  />
                );
              })
            ) : (
              <div></div>
            )}
          </StyleFlex>
        )}

        <DropDown filter={filter} setFilter={setFilter} />
      </StyleGrid>
      <br />

      <StyleGridContainer>
        <PokemonLists
          query={query}
          filter={filter}
          option={radioOption}
          gender={gender}
          habitat={habitat}
          noOfPokemon={noOfPokemon}
          setRadioValue={setRadioValue}
        />
      </StyleGridContainer>
    </StyleWrapper>
  );
}

export default memo(Home);
