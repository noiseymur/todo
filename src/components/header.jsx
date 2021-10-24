import { useSelector, useDispatch } from "react-redux";
import { toggleSidebar } from "../redux/actions";

function Header() {
  // VARIABLE DECLARATIONS
  const sidebar = useSelector((state) => state.sidebar);
  const dispatch = useDispatch();

  // HANDLERS

  function onToggleSidebar() {
    dispatch(toggleSidebar());
  }

  return (
    <header>
      {sidebar ? (
        <img
          src={require("../assets/icons/menu.svg").default}
          alt="close icon"
          onClick={onToggleSidebar}
        />
      ) : (
        <img
          src={require("../assets/icons/close.svg").default}
          alt="menu icon"
          onClick={onToggleSidebar}
        />
      )}
      <img src={require("../assets/images/todorslogo.png").default} alt="" />
    </header>
  );
}

export default Header;
