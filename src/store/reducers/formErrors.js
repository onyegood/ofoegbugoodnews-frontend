import {
    ADD_CUSTOMER_REQUEST,
	ADD_CUSTOMER_FAILURE,
	FETCH_CUSTOMER_REQUEST,
	FETCH_CUSTOMER_FAILURE,
	UPDATE_CUSTOMER_REQUEST,
	UPDATE_CUSTOMER_FAILURE,
	CUSTOMER_DELETED_REQUEST,
    CUSTOMER_DELETE_FAILD
} from "../../types/customer";

import {
    ADD_USER_REQUEST,
	ADD_USER_FAILURE,
	UPDATE_USER_REQUEST,
	UPDATE_USER_FAILURE,
	DELETE_USER_REQUEST,
	DELETE_USER_FAILURE,
	FETCH_ALL_USERS_REQUEST,
    FETCH_ALL_USERS_FAILURE,
} from "../../types/user";

import {
  ADD_EDUCATION_REQUEST,
  ADD_EDUCATION_FAILURE,
  UPDATE_EDUCATION_FAILURE,
  UPDATE_EDUCATION_REQUEST,
  FETCH_ALL_EDUCATION_FAILURE,
  FETCH_ALL_EDUCATION_REQUEST,
  DELETE_EDUCATION_REQUEST,
  DELETE_EDUCATION_FAILURE
} from "../../types/schools";

 import {
     ADD_EXPERIENCE_REQUEST,
     ADD_EXPERIENCE_FAILURE,
     UPDATE_EXPERIENCE_REQUEST,
     UPDATE_EXPERIENCE_FAILURE,
     FETCH_ALL_EXPERIENCE_REQUEST,
     FETCH_ALL_EXPERIENCE_FAILURE,
     DELETE_EXPERIENCE_REQUEST,
     DELETE_EXPERIENCE_FAILURE
 } from "../../types/experience";

 import {
     ADD_PROFILE_REQUEST,
     ADD_PROFILE_FAILURE,
     UPDATE_PROFILE_REQUEST,
     UPDATE_PROFILE_FAILURE,
     FETCH_ALL_PROFILE_FAILURE,
     FETCH_ALL_PROFILE_REQUEST,
     DELETE_PROFILE_FAILURE,
     DELETE_PROFILE_REQUEST
 } from "../../types/profile";

 import {
  ADD_CONTACT_REQUEST,
  ADD_CONTACT_FAILURE,
  FETCH_ALL_CONTACT_REQUEST,
  FETCH_ALL_CONTACT_FAILURE,
  DELETE_CONTACT_REQUEST,
  DELETE_CONTACT_FAILURE
 } from "../../types/contactme";
export default function formErrors(state = {}, action = {}, loaded = false, success = false) {
	switch (action.type) {
    case ADD_CUSTOMER_REQUEST:
    case FETCH_CUSTOMER_REQUEST:
    case UPDATE_CUSTOMER_REQUEST:
    case CUSTOMER_DELETED_REQUEST:
      return { ...state, customer: {}, loaded: true };

    case ADD_CUSTOMER_FAILURE:
    case FETCH_CUSTOMER_FAILURE:
    case UPDATE_CUSTOMER_FAILURE:
    case CUSTOMER_DELETE_FAILD:
      return { ...state, customer: action.errors, loaded: false };

    case ADD_USER_REQUEST:
      return { ...state, user: {}, loaded: true };

    case ADD_USER_FAILURE:
      return { ...state, user: action.errors, loaded: false };

    case FETCH_ALL_USERS_FAILURE:
      return { ...state, users: action.errors, loaded: false };

    case FETCH_ALL_USERS_REQUEST:
      return { ...state, users: {}, loaded: true };

    case UPDATE_USER_REQUEST:
      return { ...state, user: {}, loaded: true };

    case UPDATE_USER_FAILURE:
      return { ...state, user: action.errors, loaded: false };

    case DELETE_USER_REQUEST:
      return { ...state, user: {}, loaded: true };

    case DELETE_USER_FAILURE:
      return { ...state, user: action.errors, loaded: false };

    case ADD_EDUCATION_REQUEST:
    case UPDATE_EDUCATION_REQUEST:
    case FETCH_ALL_EDUCATION_REQUEST:
    case DELETE_EDUCATION_REQUEST:
      return { ...state, school: {}, loaded: true };

    case ADD_EDUCATION_FAILURE:
    case UPDATE_EDUCATION_FAILURE:
    case FETCH_ALL_EDUCATION_FAILURE:
    case DELETE_EDUCATION_FAILURE:
      return { ...state, school: action.errors, loaded: false };

    case ADD_EXPERIENCE_REQUEST:
    case UPDATE_EXPERIENCE_REQUEST:
    case FETCH_ALL_EXPERIENCE_REQUEST:
    case DELETE_EXPERIENCE_REQUEST:
      return { ...state, experience: {}, loaded: true };

    case ADD_EXPERIENCE_FAILURE:
    case UPDATE_EXPERIENCE_FAILURE:
    case FETCH_ALL_EXPERIENCE_FAILURE:
    case DELETE_EXPERIENCE_FAILURE:
      return { ...state, experience: action.errors, loaded: false };

    case ADD_PROFILE_REQUEST:
    case UPDATE_PROFILE_REQUEST:
    case FETCH_ALL_PROFILE_REQUEST:
    case DELETE_PROFILE_REQUEST:
      return { ...state, profile: {}, loaded: true };

    case ADD_PROFILE_FAILURE:
    case UPDATE_PROFILE_FAILURE:
    case FETCH_ALL_PROFILE_FAILURE:
    case DELETE_PROFILE_FAILURE:
      return { ...state, profile: action.errors, loaded: false };

    case ADD_CONTACT_REQUEST:
    case FETCH_ALL_CONTACT_REQUEST:
    case DELETE_CONTACT_REQUEST:
    return {...state, payload: {}, loaded: true};
    
    case ADD_CONTACT_FAILURE:
    case FETCH_ALL_CONTACT_FAILURE:
    case DELETE_CONTACT_FAILURE:
    return {...state, payload: action.errors, loaded: false, success: false};

    default:
      return state;
  }
}
