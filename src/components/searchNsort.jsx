import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { searchTodo } from "../redux/actions";
import PopMenu from "./popMenu";

function Search(props) {
  // VARIABLE DECLARATIONS

  const [searchFocus, setSearchFocus] = useState(false);
  const [popMenuOn, setPopMenuOn] = useState(false);
  const search = useSelector((state) => state.search);
  const dispatch = useDispatch();

  // HANDLERS

  function onInput(e) {
    dispatch(searchTodo(e.target.value));
  }

  function onClear() {
    dispatch(searchTodo(""));
  }

  // EFFECT HOOKS

  useEffect(() => {
    function popMenuListener(e) {
      if (
        (!e.target.closest(".pop-menu") &&
          popMenuOn &&
          !e.target.closest(".sort")) ||
        e.target.closest(".todo") ||
        e.target.classList.contains("todo")
      ) {
        setPopMenuOn(false);
      }
    }

    window.addEventListener("click", popMenuListener);

    return () => {
      window.removeEventListener("click", popMenuListener);
    };
  });

  // RENDER

  return (
    <div className="search-n-sort">
      <div className={`search ${searchFocus ? "focused" : ""}`}>
        <input
          onFocus={() => setSearchFocus(true)}
          onBlur={() => setSearchFocus(false)}
          onInput={onInput}
          type="text"
          value={search}
          placeholder="Search your todos"
        />
        {search ? (
          <img
            className="clear"
            src={require("../assets/icons/plus.svg").default}
            alt="clear icon"
            onClick={onClear}
          />
        ) : (
          <img
            src={require("../assets/icons/magnifier.svg").default}
            alt="magnifying glass"
          />
        )}
      </div>
      <div
        className="sort"
        onClick={(e) => {
          setPopMenuOn(!popMenuOn);
        }}
      >
        <span>Sort </span>
        <img
          src={require("../assets/icons/sort.svg").default}
          alt="sort icon"
        />
        {popMenuOn ? <PopMenu onSelect={() => setPopMenuOn(false)} /> : <></>}
      </div>
    </div>
  );
}

export default Search;
