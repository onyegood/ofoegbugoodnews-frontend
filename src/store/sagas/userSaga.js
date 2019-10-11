import {call, put} from "redux-saga/effects";
import {baseURL} from "../../services/baseURL";
import axios from "axios";
import {
    fetchAllUsersSuccess,
    fetchAllUsersFailure,
    addUserSuccess,
    addUserFailure,
    deleteUserSuccess,
    deleteUserFailure,
    updateUserSuccess,
    updateUserFailure
} from "../../store/actions/users";

import history from "../../history";

export function* fetchAllUsersSaga(action) {
    try {
        const response = yield axios.get(baseURL + `api/index`);
        yield put(fetchAllUsersSuccess(response.data.data));
    } catch (errors) {
        yield put(fetchAllUsersFailure(errors.response.data.errors));
    }
}

export function* addUserSaga(action) {
    try {
        const response = yield axios.post(baseURL + `api/store`, action.user);
        yield put(addUserSuccess(response.data));
        history.push('/all/users');
    } catch (errors) {
        yield put(addUserFailure(errors.response.data.errors));
    }
}

export function* updateUserSaga(action){
    try{
        const response = yield axios.put(baseURL + `api/update/${action.user.id}`, action.user);
        yield put(updateUserSuccess(response.data));
        console.log('Update user response', response)
    } catch (errors) {
        yield put(updateUserFailure(errors.response.data.errors));
    }
}

export function* deleteUserSaga(action) {
    try{
        const response = yield axios.delete(baseURL + `api/delete/${action.id}`);
        console.log('Delete user response 1', response.data.user.id);
        yield put(deleteUserSuccess(response.data.user.id));
        console.log('Delete user response 2', response.data.user.id);
    } catch (errors) {
        yield put(deleteUserFailure(errors.response.data.errors));
    }
}