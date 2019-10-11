import { put } from "redux-saga/effects";
import axios from "axios";
import { baseURL } from "../../services/baseURL";

import {
    addContactMeSuccess,
    addContactMeFailure,
    fetchContactMeSuccess,
    fetchContactMeFailure,
    deleteContactMeSuccess,
    deleteContactMeFailure
} from "../../store/actions/contactme";

export function* addContactMeSaga(action) {
    try {
        const response = yield axios.post(baseURL + `api/contact/store`, action.contact);
        yield put(addContactMeSuccess(response.data));
    } catch (err) {
        yield put(addContactMeFailure(err.response.data.errors));
    }
}

export function* getAllContactMeSaga() {
    try {
        const response = yield axios.get(baseURL + `api/contact/index`);
        yield put(fetchContactMeSuccess(response.data.contacts));
    } catch (err) {
        yield put(fetchContactMeFailure(err.response.data.errors));
    }
}

export function* deleteContactMeSaga(action) {
    try {
        const response = yield axios.delete(baseURL + `/api/contact/delete/${action.id}`);
        yield put(deleteContactMeSuccess(action.id));
    } catch (err) {
        yield put(deleteContactMeFailure(err.response.data.errors));
    }
}
