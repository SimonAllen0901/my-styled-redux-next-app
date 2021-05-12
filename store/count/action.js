import { SET_COUNT } from "./actionType";

export const addCount = () => (dispatch) => {
  return dispatch({ type: SET_COUNT.ADD });
};
