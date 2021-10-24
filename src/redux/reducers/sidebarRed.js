import * as types from "../action-types";

const sidebarRed = (state = window.innerWidth > 576 ? true : false, action) => {
  switch (action.type) {
    case types.TOGGLE_SIDEBAR:
      return !state;
    default:
      return state;
  }
};

export default sidebarRed;
