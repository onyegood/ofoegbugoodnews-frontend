import {
  ADD_EXPERIENCE_REQUEST,
  ADD_EXPERIENCE_SUCCESS,
  FETCH_ALL_EXPERIENCE_REQUEST,
  FETCH_ALL_EXPERIENCE_SUCCESS,
  UPDATE_EXPERIENCE_REQUEST,
  UPDATE_EXPERIENCE_SUCCESS,
  DELETE_EXPERIENCE_REQUEST,
  DELETE_EXPERIENCE_SUCCESS,
  CHANGE_CURRENT_EXPERIENCE_REQUEST,
  CHANGE_CURRENT_EXPERIENCE_SUCCESS,
  CHANGE_STATUS_EXPERIENCE_REQUEST,
  CHANGE_STATUS_EXPERIENCE_SUCCESS
} from "../../types/experience";

const initialState = {
  isLoading: false,
  msg: false,
  errors: null,
  experiences: []
};
export default function(state = initialState, action) {
  switch (action.type) {
    case CHANGE_CURRENT_EXPERIENCE_REQUEST:
    case CHANGE_STATUS_EXPERIENCE_REQUEST:
    case ADD_EXPERIENCE_REQUEST:
    case FETCH_ALL_EXPERIENCE_REQUEST:
    case UPDATE_EXPERIENCE_REQUEST:
    case DELETE_EXPERIENCE_REQUEST:
      return { ...state, isLoading: true };

    case FETCH_ALL_EXPERIENCE_SUCCESS:
      return { ...state, experiences: action.experiences, isLoading: false };

    case ADD_EXPERIENCE_SUCCESS:
      return { ...state, experiences: [...state.experiences, Object.assign({}, action.experience)], isLoading: false };

    case DELETE_EXPERIENCE_SUCCESS:
      return { isLoading: false, experiences: [...state.experiences.filter(experience => experience.id !== action.id)] };

    case UPDATE_EXPERIENCE_SUCCESS:
      return { ...state, isLoading: false, experiences: [...state.experiences.filter(experience => experience.id !== action.experience.id), Object.assign({}, action.experience)] };

    case CHANGE_CURRENT_EXPERIENCE_SUCCESS:
     return { ...state, isLoading: false, 
      experiences: [...state.experiences.filter(experience => experience.id !== action.experience.id), 
        Object.assign({}, action.experience)] };


    case CHANGE_STATUS_EXPERIENCE_SUCCESS:
      return { ...state, isLoading: false, 
        experiences: [...state.experiences.filter(experience => experience.id !== action.experience.id), 
          Object.assign({}, action.experience)] };

    default:
      return state;
  }
}
