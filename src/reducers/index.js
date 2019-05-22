import { CHECK_USER } from "../constants";

export const initialState = {
  isAuth: false
};
export function rootReducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case CHECK_USER: {
      console.log("Action check user: ", payload);
      return { ...state, isAuth: !!payload.token };
    }
    default:
      return state;
  }
}
