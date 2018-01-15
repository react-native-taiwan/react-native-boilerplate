import types from '../constants/ActionsType';
import initialState from "./initialState";

export default function reducer(state = initialState.demo, { type }) {
  switch (type) {
    case types.ADD:
      return state.update("count", count => count + 1);
    case types.LESS:
    return state.update("count", count => count - 1);
    default:
      return state;
  }
}