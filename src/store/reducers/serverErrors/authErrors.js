
import { CREATE_USER_REQUEST, CREATE_USER_FAILURE } from "../../../types/auth";
export default function authErrors(state = {}, action = {}, loaded = false) {
  switch (action.type) {
    case CREATE_USER_REQUEST:
      return { ...state, loaded: true };
    case CREATE_USER_FAILURE:
      return { ...state, signup: action.errors, loaded: false };
    default:
      return state;
  }
}