import {
  ADD_STACK_REQUEST,
  ADD_STACK_SUCCESS,
  FETCH_ALL_STACK_REQUEST,
  FETCH_ALL_STACK_SUCCESS,
  UPDATE_STACK_REQUEST,
  UPDATE_STACK_SUCCESS,
  DELETE_STACK_REQUEST,
  DELETE_STACK_SUCCESS,
  ACTIVATE_STACK_REQUEST,
  ACTIVATE_STACK_SUCCESS
} from "../../types/stack";

const initialState = {
  isLoading: false,
  msg: false,
  errors: null,
  stacks: []
};
export default function(state = initialState, action) {
  switch (action.type) {
    case ACTIVATE_STACK_REQUEST:
    case ADD_STACK_REQUEST:
    case FETCH_ALL_STACK_REQUEST:
    case UPDATE_STACK_REQUEST:
    case DELETE_STACK_REQUEST:
      return { ...state, isLoading: true };

    case FETCH_ALL_STACK_SUCCESS:
      return { ...state, stacks: action.stacks, isLoading: false };

    case ADD_STACK_SUCCESS:
      return { ...state, 
        stacks: [...state.stacks, 
          Object.assign({}, action.stack)], isLoading: false };

    case UPDATE_STACK_SUCCESS:
      return { ...state, isLoading: false, 
        stacks: [...state.stacks.filter(stack => stack.id !== action.stack.id), 
          Object.assign({}, action.stack)] };

    case DELETE_STACK_SUCCESS:
      return { isLoading: false, 
        stacks: [...state.stacks.filter(stack => stack.id !== action.id)] };

    case ACTIVATE_STACK_SUCCESS:
      return { ...state, isLoading: false, 
        stacks: [...state.stacks.filter(stack => stack.id !== action.stack.id), 
          Object.assign({}, action.stack)] };     

    default:
      return state;
  }
}
