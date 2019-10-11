import {
  ADD_BLOG_REQUEST,
  ADD_BLOG_SUCCESS,
  FETCH_ALL_BLOG_REQUEST,
  FETCH_ALL_BLOG_SUCCESS,
  UPDATE_BLOG_REQUEST,
  UPDATE_BLOG_SUCCESS,
  DELETE_BLOG_REQUEST,
  DELETE_BLOG_SUCCESS,
  ACTIVATE_BLOG_SUCCESS,
  ACTIVATE_BLOG_REQUEST
} from "../../types/blog";

const initialState = {
  isLoading: false,
  msg: false,
  errors: null,
  payload: []
};
export default function(state = initialState, action) {
  switch (action.type) {
    case ACTIVATE_BLOG_REQUEST:
    case ADD_BLOG_REQUEST:
    case FETCH_ALL_BLOG_REQUEST:
    case UPDATE_BLOG_REQUEST:
    case DELETE_BLOG_REQUEST:
      return { ...state, isLoading: true };

    case FETCH_ALL_BLOG_SUCCESS:
      return { ...state, payload: action.blogs, isLoading: false };

    case ADD_BLOG_SUCCESS:
      return {
        ...state,
        payload: [...state.payload, Object.assign({}, action.blog)],
        isLoading: false
      };

    case DELETE_BLOG_SUCCESS:
      return {
        isLoading: false,
        payload: [...state.payload.filter(blog => blog.id !== action.id)]
      };  

    case UPDATE_BLOG_SUCCESS:
      return {
        ...state,
        isLoading: false,
        payload: [
          ...state.payload.filter(blog => blog.id !== action.blog.id),
          Object.assign({}, action.blog)
        ]
      };

      case ACTIVATE_BLOG_SUCCESS:
      return { ...state, isLoading: false, 
        payload: [...state.payload.filter(blog => blog.id !== action.blog.id), 
          Object.assign({}, action.blog)] }; 

    default:
      return state;
  }
}
