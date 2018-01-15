import * as demoAction from "../../actions/demo";
import types from "../../constants/ActionsType";
import initialState from "../initialState";
import demoReducer from "../demo";

it("should 測試收到 加一action 後 reducer 的變化", () => {
  const state = demoReducer(initialState.demo, { type: "initial" });
  const payload = {count: 1};
  const action = demoAction.sub(payload);
  expect(state).toMatchSnapshot();
  expect(state.get("count")).toBe(0);
  const newState = demoReducer(state, { ...action });
  expect(newState).toMatchSnapshot();
  expect(newState.get("count")).toBe(1);;
});

it("should 測試收到 減一action 後 reducer 的變化", () => {
  const state = demoReducer(initialState.demo, { type: "initial" });
  const payload = {count: 1};
  const action = demoAction.less(payload);
  expect(state).toMatchSnapshot();
  expect(state.get("count")).toBe(0);
  const newState = demoReducer(state, { ...action });
  expect(newState).toMatchSnapshot();
  expect(newState.get("count")).toBe(-1);;
});

