import { CHECK_USER } from "../constants";
import { NEWS_IMPORT } from "../constants";

export const initialState = {
  isAuth: false,
  user: "No name",
  apiKey: ""
};
export function rootReducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case CHECK_USER: {
      console.log("Action check user: ", payload);
      return { ...state, isAuth: !!payload.token, user: payload.user };
    }
    case NEWS_IMPORT: {
      console.log("Action import news: ", payload);
      return { ...state, isAuth: !!payload.token, user: payload.user };
    }
    default:
      return state;
  }
}
