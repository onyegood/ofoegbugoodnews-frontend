import { put } from "redux-saga/effects";
import axios from "axios";
import { baseURL } from "../../services/baseURL";

import {
  addProfileSuccess,
  addProfileFailure,
  fetchProfileSuccess,
  fetchProfileFailure,
  updateProfileSuccess,
  updateProfileFailure,
  deleteProfileSuccess,
  deleteProfileFaild
} from "../../store/actions/profile";
import history from "../../history";

export function* addProfileSaga(action) {
  try {
    const response = yield axios.post(
      baseURL + `api/profile/store`,
      action.profile
    );
    yield put(addProfileSuccess(response.data.profile));
    history.push("/all/profile");
  } catch (err) {
    yield put(addProfileFailure(err.response.data.errors));
  }
}

export function* fetchProfileSaga() {
  try {
    const response = yield axios.get(baseURL + `api/profile/index`);
    yield put(fetchProfileSuccess(response.data.data));
  } catch (err) {
    yield put(fetchProfileFailure(err.response.data.errors));
  }
}

export function* updateProfileSaga(action) {
  try {
    const response = yield axios.put(
      baseURL + `api/profile/update/${action.profile.id}`,
      action.profile
    );
    yield put(updateProfileSuccess(response.data.profile));
  } catch (err) {
    yield put(updateProfileFailure(err.response.data.errors));
  }
}

export function* deleteProfileSaga(action) {
  try {
    const response = yield axios.delete(
      baseURL + `/api/profile/delete/${action.id}`
    );
    yield put(deleteProfileSuccess(response.data.id));
  } catch (err) {
    yield put(deleteProfileFaild(err.response.data.errors));
  }
}