import { put } from "redux-saga/effects";
import axios from "axios";
import { baseURL } from "../../services/baseURL";

import {
  addExperienceSuccess,
  addExperienceFailure,
  fetchExperiencesSuccess,
  fetchExperiencesFailure,
  updateExperienceSuccess,
  updateExperienceFailure,
  deleteExperienceSuccess,
  deleteExperienceFaild,
  ChangeCurrentExperienceSuccess,
  ChangeCurrentExperienceFailure,
  ChangeStatusExperienceSuccess,
  ChangeStatusExperienceFailure
} from "../../store/actions/experience";
import history from "../../history";

export function* addExperienceSaga(action) {
  try {
    const response = yield axios.post(
      baseURL + `api/experience/store`,
      action.experience
    );
    yield put(addExperienceSuccess(response.data.experience));
    console.log("Add experience", response);
    history.push("/all/experience");
  } catch (err) {
    yield put(addExperienceFailure(err.response.data.errors));
  }
}

export function* fetchExperiencesSaga() {
  try {
    const response = yield axios.get(baseURL + `api/experience/index`);
    yield put(fetchExperiencesSuccess(response.data.data));
  } catch (err) {
    yield put(fetchExperiencesFailure(err.response.data.errors));
  }
}

export function* updateExperienceSaga(action) {
  try {
    const response = yield axios.put(
      baseURL + `api/experience/update/${action.experience.id}`,
      action.experience
    );
    yield put(updateExperienceSuccess(response.data.experience));
    console.log("Update experience", response);
  } catch (err) {
    yield put(updateExperienceFailure(err.response.data.errors));
  }
}

export function* deleteExperienceSaga(action) {
  try {
    const response = yield axios.delete(
      baseURL + `/api/experience/delete/${action.id}`
    );
    yield put(deleteExperienceSuccess(response.data.id));
  } catch (err) {
    yield put(deleteExperienceFaild(err.response.data.errors));
  }
}

export function* changeCurrentExperienceSaga(action) {
  try {
    const response = yield axios.put(baseURL + `api/experience/current/${action.id}`, action.experience);
    yield put(ChangeCurrentExperienceSuccess(response.data));
  } catch (err) {
    yield put(ChangeCurrentExperienceFailure(err.response.data.errors));
  }
}

export function* changeStatusExperienceSaga(action) {
  try {
    const response = yield axios.put( baseURL + `api/experience/active/${action.id}`, action.experience);
    yield put(ChangeStatusExperienceSuccess(response.data));
  } catch (err) {
    yield put(ChangeStatusExperienceFailure(err.response.data.errors));
  }
}