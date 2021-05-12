import { SET_CLOCK } from "./actionType";

export const serverRenderClock = (isServer) => (dispatch) => {
  return dispatch({
    type: SET_CLOCK.TICK,
    light: !isServer,
    ts: Date.now(),
  });
};

export const startClock = () => (dispatch) => {
  return setInterval(
    () => dispatch({ type: SET_CLOCK.TICK, light: true, ts: Date.now() }),
    1000
  );
};
