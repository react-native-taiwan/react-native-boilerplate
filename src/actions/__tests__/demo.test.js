import * as demoAction from "../demo";
import types from "../../constants/ActionsType";

it("should 加一的 action", () => {
  const payload = {
    count: 1
  };
  const expectedAction = {
    type: types.ADD,
    payload
  };
  expect(demoAction.sub(payload)).toEqual(expectedAction);
});

it("should 減一的 action", () => {
  const payload = {
    count: 1
  };
  const expectedAction = {
    type: types.LESS,
    payload
  };
  expect(demoAction.less(payload)).toEqual(expectedAction);
});
