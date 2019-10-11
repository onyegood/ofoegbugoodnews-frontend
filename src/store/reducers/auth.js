import {
    USER_LOGGED_IN,
    USER_LOGGED_OUT,
    FETCH_CURRENT_USER_SUCCESS,
    CONFIRM_USER_REQUEST,
    USER_AVATAR_UPLOAD_REQUEST,
    USER_AVATAR_UPLOAD_SUCCESS,
    LOGIN_USER_REQUEST,
    LOGIN_USER_FAIL,
    CREATE_USER_REQUEST,
    CREATE_USER_FAILURE,
    ERROR_MSG_RESET,
    UPDATE_AUTH_USER_EMAIL_REQUEST,
    UPDATE_AUTH_USER_EMAIL_SUCCESS,
    UPDATE_AUTH_USER_PASSWORD_REQUEST,
    UPDATE_AUTH_USER_PASSWORD_SUCCESS,
    UPDATE_AUTH_USER_PROFILE_REQUEST,
    UPDATE_AUTH_USER_PROFILE_SUCCESS
} from "../../types/auth"

const initialState = {
    loaded: false,
    error: null
}

export default function auth(state = initialState, action) {
    switch (action.type) {
      case CREATE_USER_REQUEST:
        return { ...state, loaded: true };
      case CREATE_USER_FAILURE:
        return { ...state, signup: action.errors, loaded: false };
      case LOGIN_USER_REQUEST:
        return { ...state, loaded: true };
      case LOGIN_USER_FAIL:
        return { ...state, error: action.error, loaded: false };
      case ERROR_MSG_RESET:
        return { ...state, loaded: false, error: null };
      case USER_LOGGED_IN:
        return { ...action.user, loaded: false };
      case FETCH_CURRENT_USER_SUCCESS:
        return { ...state, ...action.user, loaded: false };
      case USER_LOGGED_OUT:
        return {};
      case CONFIRM_USER_REQUEST:
        return { ...state, ...action.confirm, loaded: true };
      case USER_AVATAR_UPLOAD_REQUEST:
        return { ...state, ...action.avatar, loaded: true };
      case USER_AVATAR_UPLOAD_SUCCESS:
        return Object.assign({}, state, {
          avatar: action.avatar,
          loaded: false
        });

      case UPDATE_AUTH_USER_EMAIL_REQUEST:
        return { ...state, ...action.user, loaded: true };

      case UPDATE_AUTH_USER_EMAIL_SUCCESS:
        return Object.assign({}, state, {
          user: action.user,
          loaded: false
        });

      case UPDATE_AUTH_USER_PASSWORD_REQUEST:
        return { ...state, ...action.user, loaded: true };

      case UPDATE_AUTH_USER_PASSWORD_SUCCESS:
        return Object.assign({}, state, {
          user: action.user,
          loaded: false
        });

      case UPDATE_AUTH_USER_PROFILE_REQUEST:
        return { ...state, ...action.user, loaded: true };

      case UPDATE_AUTH_USER_PROFILE_SUCCESS:
        return Object.assign({}, state, {
          user: action.user,
          loaded: false
        });

      default:
        return state;
    }
}