import types from "../constants/ActionsType";

export const sub = payload => ({
  type: types.ADD,
  payload
});

export const less = payload => ({
  type: types.LESS,
  payload
});