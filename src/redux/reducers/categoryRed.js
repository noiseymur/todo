import * as types from "../action-types";

const pathName = window.location.pathname;
const pathes = ["/", "/urgent", "/planned", "/all"];

const categoryRed = (
  state = pathes.indexOf(pathName) >= 0 ? pathName : "/",
  action
) => {
  switch (action.type) {
    case types.SET_CATEGORY:
      return action.payload;
    default:
      return state;
  }
};

export default categoryRed;
