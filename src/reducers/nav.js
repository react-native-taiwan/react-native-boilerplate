import AppNavigator from "../navigator";

const initialState = {
  index: 0,
  routes: [{ key: "Init", routeName: "Home" }]
};

const nav = (state = initialState, action) =>
  AppNavigator.router.getStateForAction(action, state);

export { nav };
