import {put} from "redux-saga/effects";
import axios from "axios";
import {baseURL} from "../../services/baseURL";

import {
    addPortfolioSuccess,
    addPortfolioFailure,
	fetchPortfoliosSuccess,
  	fetchPortfoliosFailure,
    updatePortfolioSuccess,
	updatePortfolioFailure,
	deletePortfolioSuccess,
	deletePortfolioFaild,
    fetchSinglePortfolioSuccess,
	fetchSinglePortfolioFailure,
	activatePortfolioSuccess,
	activatePortfolioFailure
} from "../../store/actions/portfolio";
import history from "../../history";

export function* addPortfolioSaga(action) {
	try {
		const response = yield axios.post(baseURL + `api/portfolio/store`, action.portfolio);
        yield put(addPortfolioSuccess(response.data.portfolio));
        console.log('Add portfolio', response)
        history.push("/all/portfolios");
	} catch (err) {
		yield put(addPortfolioFailure(err.response.data.errors));
	}
}

export function* fetchPortfoliosSaga() {
  try {
		const response = yield axios.get(baseURL + `api/portfolio/index`);
        yield put(fetchPortfoliosSuccess(response.data.data));
	} catch (err) {
	   yield put(fetchPortfoliosFailure(err.response.data.errors));
	}
}

export function* fetchSinglePortfolioSaga(action) {
    try {
        const response = yield axios.get(baseURL + `api/portfolio/show/` + action.portfolio);
        yield put(fetchSinglePortfolioSuccess(response.data.portfolio));
    } catch (err) {
        yield put(fetchSinglePortfolioFailure(err.response.data.errors));
    }
}

export function* updatePortfolioSaga(action) {
  try {
		const response = yield axios.put(baseURL + `api/portfolio/update/${action.portfolio.id}`, action.portfolio);
        yield put(updatePortfolioSuccess(response.data.portfolio));
        console.log('Update portfolio', response)
	} catch (err) {
	   yield put(updatePortfolioFailure(err.response.data.errors));
	}
}

export function* deletePortfolioSaga(action) {
  try {
		const response = yield axios.delete(baseURL + `/api/portfolio/delete/${action.id}`);
        yield put(deletePortfolioSuccess(response.data.id));
	} catch (err) {
	   yield put(deletePortfolioFaild(err.response.data.errors));
	}
}

export function* activatePortfolioSaga(action) {
  try {
    const response = yield axios.put(baseURL + `api/portfolio/active/${action.id}`, action.portfolio);
    yield put(activatePortfolioSuccess(response.data));
  } catch (err) {
    yield put(activatePortfolioFailure(err.response.data.errors));
  }
}