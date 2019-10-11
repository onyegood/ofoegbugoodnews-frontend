import {
  ADD_EXPERIENCE_REQUEST,
  ADD_EXPERIENCE_SUCCESS,
  ADD_EXPERIENCE_FAILURE,
  FETCH_ALL_EXPERIENCE_REQUEST,
  FETCH_ALL_EXPERIENCE_SUCCESS,
  FETCH_ALL_EXPERIENCE_FAILURE,
  UPDATE_EXPERIENCE_REQUEST,
  UPDATE_EXPERIENCE_SUCCESS,
  UPDATE_EXPERIENCE_FAILURE,
  DELETE_EXPERIENCE_REQUEST,
  DELETE_EXPERIENCE_SUCCESS,
  DELETE_EXPERIENCE_FAILURE,
  FETCH_SINGLE_EXPERIENCE_REQUEST,
  FETCH_SINGLE_EXPERIENCE_SUCCESS,
  FETCH_SINGLE_EXPERIENCE_FAILURE,
  CHANGE_CURRENT_EXPERIENCE_REQUEST,
  CHANGE_CURRENT_EXPERIENCE_SUCCESS,
  CHANGE_CURRENT_EXPERIENCE_FAILURE,
  CHANGE_STATUS_EXPERIENCE_REQUEST,
  CHANGE_STATUS_EXPERIENCE_SUCCESS,
  CHANGE_STATUS_EXPERIENCE_FAILURE
} from "../../types/experience";

export const addExperienceRequest = experience => ({ type: ADD_EXPERIENCE_REQUEST, experience });

export const addExperienceSuccess = experience => ({ type: ADD_EXPERIENCE_SUCCESS, experience });

export const addExperienceFailure = errors => ({ type: ADD_EXPERIENCE_FAILURE, errors });

export const fetchExperiencesRequest = experiences => ({ type: FETCH_ALL_EXPERIENCE_REQUEST, experiences });

export const fetchExperiencesSuccess = experiences => ({ type: FETCH_ALL_EXPERIENCE_SUCCESS, experiences });

export const fetchExperiencesFailure = errors => ({ type: FETCH_ALL_EXPERIENCE_FAILURE, errors });

export const updateExperienceRequest = (experience, id) => ({ type: UPDATE_EXPERIENCE_REQUEST, experience, id });

export const updateExperienceSuccess = (experience, id) => ({ type: UPDATE_EXPERIENCE_SUCCESS, experience, id });

export const updateExperienceFailure = errors => ({ type: UPDATE_EXPERIENCE_FAILURE, errors });

export const deleteexperience = id => ({ type: DELETE_EXPERIENCE_REQUEST, id });

export const deleteExperienceSuccess = id => ({ type: DELETE_EXPERIENCE_SUCCESS, id });

export const deleteExperienceFaild = errors => ({ type: DELETE_EXPERIENCE_FAILURE, errors });

export const fetchSingleExperienceRequest = experience => ({ type: FETCH_SINGLE_EXPERIENCE_REQUEST, experience });

export const fetchSingleExperienceSuccess = (experience, id) => ({ type: FETCH_SINGLE_EXPERIENCE_SUCCESS, experience, id });

export const fetchSingleExperienceFailure = errors => ({ type: FETCH_SINGLE_EXPERIENCE_FAILURE, errors });

export const ChangeCurrentExperienceRequest = (experience, id) => ({ type: CHANGE_CURRENT_EXPERIENCE_REQUEST, experience, id });

export const ChangeCurrentExperienceSuccess = (experience, id) => ({ type: CHANGE_CURRENT_EXPERIENCE_SUCCESS, experience, id });

export const ChangeCurrentExperienceFailure = errors => ({ type: CHANGE_CURRENT_EXPERIENCE_FAILURE, errors });

export const ChangeStatusExperienceRequest = (experience, id) => ({ type: CHANGE_STATUS_EXPERIENCE_REQUEST, experience, id });

export const ChangeStatusExperienceSuccess = (experience, id) => ({ type: CHANGE_STATUS_EXPERIENCE_SUCCESS, experience, id });

export const ChangeStatusExperienceFailure = errors => ({ type: CHANGE_STATUS_EXPERIENCE_FAILURE, errors });