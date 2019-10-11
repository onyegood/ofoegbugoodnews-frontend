import {
  ADD_EDUCATION_REQUEST,
  ADD_EDUCATION_SUCCESS,
  FETCH_ALL_EDUCATION_REQUEST,
  FETCH_ALL_EDUCATION_SUCCESS,
  UPDATE_EDUCATION_REQUEST,
  UPDATE_EDUCATION_SUCCESS,
  DELETE_EDUCATION_REQUEST,
  DELETE_EDUCATION_SUCCESS,
  ACTIVATE_EDUCATION_REQUEST,
  ACTIVATE_EDUCATION_SUCCESS
} from "../../types/schools";

const initialState = {
  isLoading: false,
  msg: false,
  errors: null,
  schools: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case ACTIVATE_EDUCATION_REQUEST:
    case ADD_EDUCATION_REQUEST:
    case FETCH_ALL_EDUCATION_REQUEST:
    case UPDATE_EDUCATION_REQUEST:
    case DELETE_EDUCATION_REQUEST:
      return { ...state, isLoading: true };

    case FETCH_ALL_EDUCATION_SUCCESS:
      return { ...state, schools: action.schools, isLoading: false };

    case ADD_EDUCATION_SUCCESS:
      return { ...state, 
        schools: [...state.schools, Object.assign({}, action.school)], isLoading: false };

    case UPDATE_EDUCATION_SUCCESS:
      return { ...state, isLoading: false, 
        schools: [...state.schools.filter(school => school.id !== action.school.id), 
          Object.assign({}, action.school)] };

    case ACTIVATE_EDUCATION_SUCCESS:
      return { ...state, isLoading: false, 
        schools: [...state.schools.filter(school => school.id !== action.school.id), 
          Object.assign({}, action.school)] };      

    case DELETE_EDUCATION_SUCCESS:
      return { isLoading: false, 
        schools: [...state.schools.filter(school => school.id !== action.id)] };
    default:
      return state;
  }
}
