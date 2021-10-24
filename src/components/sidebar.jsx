import { useSelector, useDispatch } from "react-redux";
import { toggleSidebar } from "../redux/actions";
import Category from "./category";

function Sidebar() {
  // VARIABLE DECLARATIONS

  const { allCategories, sidebar } = useSelector((state) => state);
  const dispatch = useDispatch();

  // HANDLERS

  function onToggleSidebar() {
    dispatch(toggleSidebar());
  }

  // RENDER

  return (
    <div className={`sidebar ${!sidebar ? "closed" : ""}`}>
      <div
        className={`toggle ${!sidebar ? "closed" : ""}`}
        onClick={onToggleSidebar}
      >
        <img src={require("../assets/icons/toggle.svg").default} alt="" />
      </div>
      <div className="categories">
        {allCategories.map((cat) => (
          <Category cat={cat} key={cat.url} />
        ))}
      </div>
    </div>
  );
}

export default Sidebar;
