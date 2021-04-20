import { useEffect, useRef } from "react";
import { StyleSearchBar } from "./StyleSearchBar";

function SearchBar({ focused }) {
  const inputRef = useRef();

  useEffect(() => {
    if (focused) {
      inputRef.current.focus();
    }
  }, [focused]);

  return <StyleSearchBar ref={inputRef} type="text" placeholder="Search..." />;
}

export default SearchBar;
