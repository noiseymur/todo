import * as types from "../action-types";

const searchRed = (state = "", action) => {
  switch (action.type) {
    case types.SET_SEARCH:
      return action.payload;
    default:
      return state;
  }
};

export default searchRed;
