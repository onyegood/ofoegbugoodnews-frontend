import {
  ADD_PROFILE_REQUEST,
  ADD_PROFILE_SUCCESS,
  ADD_PROFILE_FAILURE,
  FETCH_ALL_PROFILE_REQUEST,
  FETCH_ALL_PROFILE_SUCCESS,
  FETCH_ALL_PROFILE_FAILURE,
  UPDATE_PROFILE_REQUEST,
  UPDATE_PROFILE_SUCCESS,
  UPDATE_PROFILE_FAILURE,
  DELETE_PROFILE_REQUEST,
  DELETE_PROFILE_SUCCESS,
  DELETE_PROFILE_FAILURE
} from "../../types/profile";

export const addProfileRequest = profile => ({ type: ADD_PROFILE_REQUEST, profile });

export const addProfileSuccess = profile => ({ type: ADD_PROFILE_SUCCESS, profile });

export const addProfileFailure = errors => ({ type: ADD_PROFILE_FAILURE, errors });

export const fetchProfileRequest = profile => ({ type: FETCH_ALL_PROFILE_REQUEST, profile });

export const fetchProfileSuccess = profile => ({ type: FETCH_ALL_PROFILE_SUCCESS, profile });

export const fetchProfileFailure = errors => ({ type: FETCH_ALL_PROFILE_FAILURE, errors });

export const updateProfileRequest = (profile, id) => ({ type: UPDATE_PROFILE_REQUEST, profile, id });

export const updateProfileSuccess = (profile, id) => ({ type: UPDATE_PROFILE_SUCCESS, profile, id });

export const updateProfileFailure = errors => ({ type: UPDATE_PROFILE_FAILURE, errors });

export const deleteprofile = id => ({ type: DELETE_PROFILE_REQUEST, id });

export const deleteProfileSuccess = id => ({ type: DELETE_PROFILE_SUCCESS, id });

export const deleteProfileFaild = errors => ({ type: DELETE_PROFILE_FAILURE, errors });