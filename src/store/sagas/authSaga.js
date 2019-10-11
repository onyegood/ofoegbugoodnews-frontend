import {put} from "redux-saga/effects";
import {baseURL} from "../../services/baseURL";
import axios from "axios";

import {
    userLoggedIn,
    loginUserFailure,
    userLoggedOut,
    createUserFailure,
    fetchCurrentUserFailure,
    userAvatarUploadSuccess,
    userAvatarUploadFailure,
    updateAuthUserEmailSuccess,
    updateAuthUserEmailFailure,
    updateAuthUserPasswordSuccess,
    updateAuthUserPasswordFailure,
    updateAuthUserProfileSuccess,
    updateAuthUserProfileFailure
} from "../../store/actions/auth";

import history from "../../history";

import setAuthorizationHeader from "../../utils/setAuthorizationHeader";

export function* createUserSaga(action) {
    try {
        const user = yield axios.post(baseURL + `api/signup`, action.user);
        localStorage.token = user.data.success.token;
        yield put(userLoggedIn(user.data.user));
        setAuthorizationHeader(user.data.success.token);
        history.push("/user/dashboard");
    } catch (errors) {
        yield put(createUserFailure(errors.response.data.errors));
        console.log("Create user error", errors.response.data.errors);
    }
}

export function* fetchUserSaga(action) {
    try {
        const user = yield axios.get(baseURL + `api/current/user`, action.user);
        yield put(userLoggedIn(user.data.user));
    } catch (errors) {
        yield put(fetchCurrentUserFailure(errors.response.data.errors));
    }
}

export function* loginUserSaga(action) {
    try {
        const user = yield axios.post(baseURL + `api/signin`, action.user);
        localStorage.token = user.data.success.token;
        yield put(userLoggedIn(user.data.user));
        setAuthorizationHeader(user.data.success.token);
        history.push("/user/dashboard");
    } catch (errors) {
        yield put(loginUserFailure(errors.response.data.error));
    }
}

export function* logoutUserSaga() {
    localStorage.removeItem("token");
    sessionStorage.removeItem("ud");
    history.push("/user/login");
    yield put(userLoggedOut());
    setAuthorizationHeader();
}

export function* userAvatarUploadSaga(action){
    try{
        const config = {onUploadProgress: progressEvent => {
            const progressCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total);
            console.log(progressCompleted);
        }}
        const response = yield axios.post(baseURL + `api/avatar`, {avatar: action.avatar}, config);
        yield put(userAvatarUploadSuccess(response.data.avatar));
    }catch (err){
        yield put(userAvatarUploadFailure(err.response.data.errors));
    }
}

export function* updateAuthUserEmailSaga(action) {
    try {
        const response = yield axios.put(baseURL + `api/update/authemail/${action.user.id}`, action.user);
        yield put(updateAuthUserEmailSuccess(response.data));
    } catch (errors) {
        yield put(updateAuthUserEmailFailure(errors.response.data.errors));
    }
}

export function* updateAuthUserPasswordSaga(action) {
    try {
        const response = yield axios.put(baseURL + `api/update/authpass/${action.user.id}`, action.user);
        yield put(updateAuthUserPasswordSuccess(response.data));
    } catch (errors) {
        yield put(updateAuthUserPasswordFailure(errors.response.data.errors));
    }
}

export function* updateAuthUserProfileSaga(action) {
    try {
        const response = yield axios.put(baseURL + `api/update/authprofile/${action.user.id}`, action.user);
        yield put(updateAuthUserProfileSuccess(response.data));
    } catch (errors) {
        yield put(updateAuthUserProfileFailure(errors.response.data.errors));
    }
}

/*export function* confirmUserAccountSaga(action) {
    try {
        const user = yield call(api.user.confirm, action.token);
        localStorage.token = user.data.success.token;
        yield put(userLoggedIn(user));
    } catch (err) {
        yield put(confirmUserFailure(err.response.data.errors));
    }
}*/
