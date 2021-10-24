import { useSelector, useDispatch } from "react-redux";
import { setSorting } from "../redux/actions";

function PopMenu({ onSelect }) {
  // VARIABLE DECLARATIONS

  const sorting = useSelector((state) => state.sorting);
  const dispatch = useDispatch();

  // HANDLERS

  function onSetFilter(e, name) {
    e.stopPropagation();
    if (name !== sorting) dispatch(setSorting(name));
    onSelect();
  }

  // RENDER

  return (
    <div className="pop-menu">
      <span
        className={`${sorting === "creation" ? "active" : ""}`}
        onClick={(e) => onSetFilter(e, "creation")}
      >
        Creation date
      </span>
      <span
        className={`${sorting === "due" ? "active" : ""}`}
        onClick={(e) => onSetFilter(e, "due")}
      >
        Due date
      </span>
      <span
        className={`${sorting === "alphabetical" ? "active" : ""}`}
        onClick={(e) => onSetFilter(e, "alphabetical")}
      >
        Alphabetically
      </span>
    </div>
  );
}

export default PopMenu;
