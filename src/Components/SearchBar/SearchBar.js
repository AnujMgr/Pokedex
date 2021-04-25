import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {
  StyleDropDown,
  StyleSearchBar,
  StyleSearchBarWrapper,
  StyleSearchFilter,
  StyleSearchIcon,
} from "./StyleSearchBar";

function SearchBar({ focused, inputRef, setFilter, filter, setQuery }) {
  // const pokemons = useSelector((state) => state.allPokemon.pokemons);

  // const [query, setQuery] = useState("");
  const [visible, setVisible] = useState(false);

  const toggleDropDown = () => {
    setVisible(!visible);
    console.log(visible);
  };

  const setFilterValue = (data) => {
    setFilter(data);
    toggleDropDown();
  };

  // const filterData = pokemons.filter((pokemon) => {
  //   return pokemon.name.toLowerCase().includes(query.toLocaleLowerCase());
  // });

  // useEffect(() => {
  //   // dispatch(setPokemon(filterData));
  //   console.log(query);
  // }, [query]);

  useEffect(() => {
    if (focused) {
      inputRef.current.focus();
    }
  }, [focused]);

  return (
    <StyleSearchBarWrapper>
      <StyleSearchFilter onClick={toggleDropDown}>
        <span>{filter}</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          viewBox="0 0 16 16"
        >
          <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
        </svg>
      </StyleSearchFilter>

      {visible ? (
        <StyleDropDown>
          <ul>
            <li
              onClick={() => {
                setFilterValue("name");
              }}
            >
              Name
            </li>
            <li
              onClick={() => {
                setFilterValue("location");
              }}
            >
              Location
            </li>
            <li
              onClick={() => {
                setFilterValue("gender");
              }}
            >
              Gender
            </li>
            <li
              onClick={() => {
                setFilterValue("habitat");
              }}
            >
              Habitat
            </li>
            {/* <li onClick={setFilterData}>Gender</li>
            <li onClick={setFilterData}>Habitat</li> */}
          </ul>
        </StyleDropDown>
      ) : (
        ""
      )}

      <StyleSearchBar
        onChange={(e) => {
          setQuery(e.target.value);
        }}
        ref={inputRef}
        type="text"
        placeholder={`Search by ${filter}...`}
      />

      <StyleSearchIcon
        xmlns="http://www.w3.org/2000/svg"
        width="26"
        height="26"
        fill="currentColor"
        viewBox="0 0 16 16"
      >
        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
      </StyleSearchIcon>
    </StyleSearchBarWrapper>
  );
}

export default SearchBar;
