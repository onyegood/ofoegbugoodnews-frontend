import {
    ADD_USER_REQUEST,
    ADD_USER_SUCCESS,
    ADD_USER_FAILURE,
    FETCH_ALL_USERS_REQUEST,
    FETCH_ALL_USERS_SUCCESS,
    FETCH_ALL_USERS_FAILURE,
    DELETE_USER_REQUEST,
    DELETE_USER_FAILURE,
    DELETE_USER_SUCCESS,
    UPDATE_USER_REQUEST,
    UPDATE_USER_SUCCESS,
    UPDATE_USER_FAILURE
} from "../../types/user";

export const addUserRequest = user => ({type: ADD_USER_REQUEST, user});

export const addUserSuccess = user => ({type: ADD_USER_SUCCESS, user});

export const addUserFailure = errors => ({type: ADD_USER_FAILURE, errors});

export const fetchAllUsersRequest = users => ({type: FETCH_ALL_USERS_REQUEST, users});

export const fetchAllUsersSuccess = users => ({type: FETCH_ALL_USERS_SUCCESS, users});

export const fetchAllUsersFailure = errors => ({type: FETCH_ALL_USERS_FAILURE, errors});

export const updateUserRequest = (user, id) => ({type: UPDATE_USER_REQUEST, user, id});

export const updateUserSuccess = (user, id) => ({type: UPDATE_USER_SUCCESS, user, id});

export const updateUserFailure = (errors) => ({type: UPDATE_USER_FAILURE, errors});

export const deleteuser = (id) => ({type: DELETE_USER_REQUEST, id});

export const deleteUserSuccess = (id) => ({type: DELETE_USER_SUCCESS, id});

export const deleteUserFailure = (errors) => ({type: DELETE_USER_FAILURE, errors});