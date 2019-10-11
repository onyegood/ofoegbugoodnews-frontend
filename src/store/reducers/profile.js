import {
  ADD_PROFILE_REQUEST,
  ADD_PROFILE_SUCCESS,
  FETCH_ALL_PROFILE_REQUEST,
  FETCH_ALL_PROFILE_SUCCESS,
  UPDATE_PROFILE_REQUEST,
  UPDATE_PROFILE_SUCCESS,
  DELETE_PROFILE_REQUEST,
  DELETE_PROFILE_SUCCESS
} from "../../types/profile";

const initialState = {
  isLoading: false,
  msg: false,
  errors: null,
  profile: []
};
export default function(state = initialState, action) {
  switch (action.type) {
    case ADD_PROFILE_REQUEST:
    case FETCH_ALL_PROFILE_REQUEST:
    case UPDATE_PROFILE_REQUEST:
    case DELETE_PROFILE_REQUEST:
      return { ...state, isLoading: true };

    case FETCH_ALL_PROFILE_SUCCESS:
      return { ...state, 
        profile: action.profile, isLoading: false };

    case ADD_PROFILE_SUCCESS:
      return { ...state, 
        profile: [...state.profile, 
            Object.assign({}, action.profile)], 
            isLoading: false };

    case UPDATE_PROFILE_SUCCESS:
      return { ...state, isLoading: false,
        profile: [...state.profile.filter(profile => profile.id !== action.profile.id), 
            Object.assign({}, action.profile)] };

    case DELETE_PROFILE_SUCCESS:
      return { isLoading: false, 
        profile: [...state.profile.filter(profile => profile.id !== action.id)] };
    default:
      return state;
  }
}
