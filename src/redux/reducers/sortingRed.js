import * as types from "../action-types";

const sortingRed = (state = "creation", action) => {
  switch (action.type) {
    case types.SET_SORTING:
      return action.payload;
    default:
      return state;
  }
};

export default sortingRed;
