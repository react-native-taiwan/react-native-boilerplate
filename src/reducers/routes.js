import { ActionConst } from "react-native-router-flux";

const initialState = {
  scene: {}
};

export const routes = (state = initialState, action) => {
  switch (action.type) {
    case ActionConst.FOCUS:
      return {
        ...state,
        scene: action.scene
      };
    default:
      return state;
  }
};
