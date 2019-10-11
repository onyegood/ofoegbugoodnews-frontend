import {
  ADD_STACK_REQUEST,
  ADD_STACK_SUCCESS,
  ADD_STACK_FAILURE,
  FETCH_ALL_STACK_REQUEST,
  FETCH_ALL_STACK_SUCCESS,
  FETCH_ALL_STACK_FAILURE,
  UPDATE_STACK_REQUEST,
  UPDATE_STACK_SUCCESS,
  UPDATE_STACK_FAILURE,
  DELETE_STACK_REQUEST,
  DELETE_STACK_SUCCESS,
  DELETE_STACK_FAILURE,
  ACTIVATE_STACK_REQUEST,
  ACTIVATE_STACK_SUCCESS,
  ACTIVATE_STACK_FAILURE
} from "../../types/stack";

export const addStackRequest = stack => ({ type: ADD_STACK_REQUEST, stack });

export const addStackSuccess = stack => ({ type: ADD_STACK_SUCCESS, stack });

export const addStackFailure = errors => ({ type: ADD_STACK_FAILURE, errors });

export const fetchStackRequest = stacks => ({ type: FETCH_ALL_STACK_REQUEST, stacks });

export const fetchStackSuccess = stacks => ({ type: FETCH_ALL_STACK_SUCCESS, stacks });

export const fetchStackFailure = errors => ({ type: FETCH_ALL_STACK_FAILURE, errors });

export const updateStackRequest = (stack, id) => ({ type: UPDATE_STACK_REQUEST, stack, id });

export const updateStackSuccess = (stack, id) => ({ type: UPDATE_STACK_SUCCESS, stack, id });

export const updateStackFailure = errors => ({ type: UPDATE_STACK_FAILURE, errors });

export const deletestack = id => ({ type: DELETE_STACK_REQUEST, id });

export const deleteStackSuccess = id => ({ type: DELETE_STACK_SUCCESS, id });

export const deleteStackFaild = errors => ({ type: DELETE_STACK_FAILURE, errors });

export const activateStackRequest = (stack, id) => ({ type: ACTIVATE_STACK_REQUEST, stack, id });

export const activateStackSuccess = (stack, id) => ({ type: ACTIVATE_STACK_SUCCESS, stack, id });

export const activateStackFailure = errors => ({ type: ACTIVATE_STACK_FAILURE, errors });
