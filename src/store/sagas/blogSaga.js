import { put } from "redux-saga/effects";
import axios from "axios";
import { baseURL } from "../../services/baseURL";

import {
  addBlogSuccess,
  addBlogFailure,
  fetchBlogsSuccess,
  fetchBlogsFailure,
  updateBlogSuccess,
  updateBlogFailure,
  deleteBlogSuccess,
  deleteBlogFailure,
  activateBlogSuccess,
  activateBlogFailure
} from "../../store/actions/blog";
import history from "../../history";

export function* addBlogSaga(action) {
  try {
    const response = yield axios.post(
      baseURL + `api/blog/store`,
      action.blog
    );
    yield put(addBlogSuccess(response.data));
    history.push("/all/blogs");
  } catch (err) {
    yield put(addBlogFailure(err.response.data.errors));
  }
}

export function* fetchBlogsSaga() {
  try {
    const response = yield axios.get(baseURL + `api/blog/index`);
    yield put(fetchBlogsSuccess(response.data.data));
  } catch (err) {
    yield put(fetchBlogsFailure(err.response.data.errors));
  }
}

export function* updateBlogSaga(action) {
  try {
    const response = yield axios.put(baseURL + `api/blog/update/${action.blog.id}`, action.blog);
    yield put(updateBlogSuccess(response.blog));
  } catch (err) {
    yield put(updateBlogFailure(err.response.data.errors));
  }
}

export function* activateBlogSaga(action) {
  try {
    const response = yield axios.put(baseURL + `api/blog/active/${action.id}`, action.blog);
    yield put(activateBlogSuccess(response.data));
  } catch (err) {
    yield put(activateBlogFailure(err.response.data.errors));
  }
}

export function* deleteBlogSaga(action) {
  try {
    const response = yield axios.delete(baseURL + `/api/blog/delete/${action.id}`);
    yield put(deleteBlogSuccess(response.data.id));
  } catch (err) {
    yield put(deleteBlogFailure(err.response.data.errors));
  }
}
