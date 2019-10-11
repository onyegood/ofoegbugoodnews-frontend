import {put} from "redux-saga/effects";
import axios from "axios";
import {baseURL} from "../../services/baseURL";

import {
	addCustomerFailure,
	fetchCustomersSuccess,
  	fetchCustomersFailure,
	addCustomerSuccess,
	fetchSingleCustomerSuccess,
	fetchSingleCustomerFailure,
	updateCustomerFailure,
	updateCustomerSuccess,
	deleteCustomerSuccess,
	deleteCustomerFaild
} from "../../store/actions/customer";
import history from "../../history";

export function* addCustomerSaga(action) {
	try {
		const response = yield axios.post(baseURL + `api/customer/store`, action.customer);
		yield put(addCustomerSuccess(response.data));
        history.push("/all/customers");
	} catch (err) {
		yield put(addCustomerFailure(err.response.data.errors));
	}
}

export function* fetchCustomersSaga() {
  try {
		const response = yield axios.get(baseURL + `api/customer/index`);
		yield put(fetchCustomersSuccess(response.data.data));
	} catch (err) {
	   yield put(fetchCustomersFailure(err.response.data.errors));
	}
}

export function* fetchSingleCustomersSaga(action) {
  try {
		const response = yield axios.get(baseURL + `api/customer/show/` + action.customer);
		yield put(fetchSingleCustomerSuccess(response.data));
	} catch (err) {
	   yield put(fetchSingleCustomerFailure(err.response.data.errors));
	}
}

export function* updateCustomersSaga(action) {
  try {
		const response = yield axios.put(baseURL + `api/customer/update/${action.customer.id}`, action.customer);
		yield put(updateCustomerSuccess(response.data));
		console.log('Edit customer', response.data);
	} catch (err) {
	   yield put(updateCustomerFailure(err.response.data.errors));
	}
}

export function* deleteCustomerSaga(action) {
  try {
		const response = yield axios.delete(baseURL + `/api/customer/delete/${action.id}`);
		yield put(deleteCustomerSuccess(response.data.id));
	} catch (err) {
	   yield put(deleteCustomerFaild(err.response.data.errors));
	}
}