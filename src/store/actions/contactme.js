import {
    ADD_CONTACT_REQUEST,
    ADD_CONTACT_SUCCESS,
    ADD_CONTACT_FAILURE,
    FETCH_ALL_CONTACT_REQUEST,
    FETCH_ALL_CONTACT_SUCCESS,
    FETCH_ALL_CONTACT_FAILURE,
    DELETE_CONTACT_REQUEST,
    DELETE_CONTACT_SUCCESS,
    DELETE_CONTACT_FAILURE
} from "../../types/contactme";

export const addContactMeRequest = contact => ({ type: ADD_CONTACT_REQUEST, contact });

export const addContactMeSuccess = contact => ({ type: ADD_CONTACT_SUCCESS, contact});

export const addContactMeFailure = errors => ({ type: ADD_CONTACT_FAILURE, errors });

export const fetchContactMeRequest = payload => ({ type: FETCH_ALL_CONTACT_REQUEST, payload });

export const fetchContactMeSuccess = payload => ({ type: FETCH_ALL_CONTACT_SUCCESS, payload });

export const fetchContactMeFailure = errors => ({ type: FETCH_ALL_CONTACT_FAILURE, errors });

export const deletecontactme = id => ({ type: DELETE_CONTACT_REQUEST, id });

export const deleteContactMeSuccess = id => ({ type: DELETE_CONTACT_SUCCESS, id });

export const deleteContactMeFailure = errors => ({ type: DELETE_CONTACT_FAILURE, errors });
