import { put } from "redux-saga/effects";
import axios from "axios";
import { baseURL } from "../../services/baseURL";

import {
  addStackSuccess,
  addStackFailure,
  fetchStackSuccess,
  fetchStackFailure,
  updateStackSuccess,
  updateStackFailure,
  deleteStackSuccess,
  deleteStackFaild,
  activateStackSuccess,
  activateStackFailure
} from "../../store/actions/stack";
import history from "../../history";

export function* addSackSaga(action) {
  try {
    const response = yield axios.post(
      baseURL + `api/stack/store`, action.stack
    );
    yield put(addStackSuccess(response.data.stack));
    console.log("Add stack", response);
    history.push("/all/stacks");
  } catch (err) {
    yield put(addStackFailure(err.response.data.errors));
  }
}

export function* fetchSackSaga() {
  try {
    const response = yield axios.get(baseURL + `api/stack/index`);
    yield put(fetchStackSuccess(response.data.data));
  } catch (err) {
    yield put(fetchStackFailure(err.response.data.errors));
  }
}

export function* updateStackSaga(action) {
  try { 
    const response = yield axios.put(baseURL + `api/stack/update/${action.id}`, action.stack);
    yield put(updateStackSuccess(response.data.stack));
    console.log("Action data", action.id);
    console.log("Update data", response.data);
  } catch (err) {
    yield put(updateStackFailure(err.response.data.errors));
  }
}

export function* activateStackSaga(action) {
  try {
    const response = yield axios.put(baseURL + `api/stack/active/${action.id}`, action.stack);
    console.log('Activate stack response', response.data);
    yield put(activateStackSuccess(response.data));
  } catch (err) {
    yield put(activateStackFailure(err.response.data.errors));
  }
}

export function* deleteStackSaga(action) {
  try {
    const response = yield axios.delete(baseURL + `/api/stack/delete/${action.id}`);
    yield put(deleteStackSuccess(response.data.id));
  } catch (err) {
    yield put(deleteStackFaild(err.response.data.errors));
  }
}
