import { useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setCategory, toggleSidebar } from "../redux/actions";
import { useHistory } from "react-router-dom";
import sunIcon from "../assets/icons/sun.svg";
import starIcon from "../assets/icons/star.svg";
import calendarIcon from "../assets/icons/calendar.svg";
import listIcon from "../assets/icons/list.svg";

function Category({ cat, sidebarOpen }) {
  // VARIABLE DECLARATIONS
  const { category, sidebar } = useSelector((state) => state);
  const dispatch = useDispatch();
  const history = useHistory();
  const icons = useRef({
    sunIcon,
    starIcon,
    calendarIcon,
    listIcon,
  });

  // HANDLERS

  function onSetCategory(url) {
    dispatch(setCategory(url));
    history.push(url);
    if (window.innerWidth <= 576) {
      dispatch(toggleSidebar());
    }
  }

  // RENDER

  return (
    <div
      className={`category ${cat.url === category ? "active" : ""}`}
      onClick={() => onSetCategory(cat.url)}
    >
      {sidebar ? (
        <>
          <img src={icons.current[cat.icon]} alt="" />
          {cat.name} <span>{cat.todos.length || ""}</span>
        </>
      ) : (
        <img src={icons.current[cat.icon]} alt="" />
      )}
    </div>
  );
}

export default Category;
