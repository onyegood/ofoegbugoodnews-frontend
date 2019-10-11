import {
  ADD_EDUCATION_REQUEST,
  ADD_EDUCATION_SUCCESS,
  ADD_EDUCATION_FAILURE,
  FETCH_ALL_EDUCATION_REQUEST,
  FETCH_ALL_EDUCATION_SUCCESS,
  FETCH_ALL_EDUCATION_FAILURE,
  UPDATE_EDUCATION_REQUEST,
  UPDATE_EDUCATION_SUCCESS,
  UPDATE_EDUCATION_FAILURE,
  DELETE_EDUCATION_REQUEST,
  DELETE_EDUCATION_SUCCESS,
  DELETE_EDUCATION_FAILURE,
  ACTIVATE_EDUCATION_REQUEST,
  ACTIVATE_EDUCATION_SUCCESS,
  ACTIVATE_EDUCATION_FAILURE
} from "../../types/schools";

export const addEducationRequest = school => ({ type: ADD_EDUCATION_REQUEST, school });

export const addEducationSuccess = school => ({ type: ADD_EDUCATION_SUCCESS, school });

export const addEducationFailure = errors => ({ type: ADD_EDUCATION_FAILURE, errors });

export const fetchEducationRequest = schools => ({ type: FETCH_ALL_EDUCATION_REQUEST, schools });

export const fetchEducationSuccess = schools => ({ type: FETCH_ALL_EDUCATION_SUCCESS, schools });

export const fetchEducationFailure = errors => ({ type: FETCH_ALL_EDUCATION_FAILURE, errors });

export const updateEducationRequest = (school, id) => ({ type: UPDATE_EDUCATION_REQUEST, school, id });

export const updateEducationSuccess = (school, id) => ({ type: UPDATE_EDUCATION_SUCCESS, school, id });

export const updateEducationFailure = errors => ({ type: UPDATE_EDUCATION_FAILURE, errors });

export const deleteeducation = id => ({ type: DELETE_EDUCATION_REQUEST, id });

export const deleteEducationSuccess = id => ({ type: DELETE_EDUCATION_SUCCESS, id });

export const deleteEducationFailure = errors => ({ type: DELETE_EDUCATION_FAILURE, errors });

export const activateEducationRequest = (school, id) => ({ type: ACTIVATE_EDUCATION_REQUEST, school, id });

export const activateEducationSuccess = (school, id) => ({ type: ACTIVATE_EDUCATION_SUCCESS, school, id });

export const activateEducationFailure = errors => ({ type: ACTIVATE_EDUCATION_FAILURE, errors });
