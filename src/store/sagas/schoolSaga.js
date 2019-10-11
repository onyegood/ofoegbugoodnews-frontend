import { put } from "redux-saga/effects";
import axios from "axios";
import { baseURL } from "../../services/baseURL";

import {
  addEducationFailure,
  addEducationSuccess,
  fetchEducationFailure,
  fetchEducationSuccess,
  updateEducationFailure,
  updateEducationSuccess,
  deleteEducationSuccess,
  deleteEducationFailure,
  activateEducationSuccess,
  activateEducationFailure
} from "../../store/actions/schools";
import history from "../../history";

export function* addEducationSaga(action) {
  try {
    const response = yield axios.post(baseURL + `api/education/store`, action.school);
    yield put(addEducationSuccess(response.data));
    history.push("/all/schools");
  } catch (err) {
    yield put(addEducationFailure(err.response.data.errors));
  }
}

export function* getAllSchoolsSaga() {
  try {
    const response = yield axios.get(baseURL + `api/education/index`);
    yield put(fetchEducationSuccess(response.data.data));
  } catch (err) {
    yield put(fetchEducationFailure(err.response.data.errors));
  }
}

export function* updateEducationSaga(action) {
  try {
    const response = yield axios.put(baseURL + `api/education/update/${action.school.id}`, action.school);
    console.log("Edit education", response);
    yield put(updateEducationSuccess(response.school));
    
  } catch (err) {
    yield put(updateEducationFailure(err.response.data.errors));
  }
}

export function* activateEducationSaga(action) {
  try {
    const response = yield axios.put(baseURL + `api/education/active/${action.id}`, action.school);
    yield put(activateEducationSuccess(response.data));
  } catch (err) {
    yield put(activateEducationFailure(err.response.data.errors));
  }
}

export function* deleteEducationSaga(action) {
  try {
    const response = yield axios.delete(baseURL + `/api/education/delete/${action.id}`);
    yield put(deleteEducationSuccess(response.data.id));
  } catch (err) {
    yield put(deleteEducationFailure(err.response.data.errors));
  }
}
