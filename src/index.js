import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Router, Route} from "react-router-dom";
import {logger} from 'redux-logger'
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './rootReducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './rootSaga';
import { Provider } from 'react-redux';
import history from "./history";
import registerServiceWorker from './registerServiceWorker';


import {fetchCustomersRequest, fetchCustomersSuccess} from "./store/actions/customer";
import {fetchCurrentUserRequest, fetchCurrentUserSuccess} from "./store/actions/auth";
import {fetchAllUsersRequest, fetchAllUsersSuccess} from "./store/actions/users";
import {fetchPortfoliosRequest} from "./store/actions/portfolio";
import {fetchEducationRequest} from "./store/actions/schools";
import { fetchExperiencesRequest } from "./store/actions/experience";
import { fetchProfileRequest } from "./store/actions/profile";
import { fetchStackRequest } from "./store/actions/stack";
import { fetchBlogsRequest } from "./store/actions/blog";

import { fetchContactMeRequest } from "./store/actions/contactme";

import setAuthorizationHeader from "./utils/setAuthorizationHeader";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    rootReducer,
    composeWithDevTools(
        applyMiddleware(sagaMiddleware, logger)
    )
);

sagaMiddleware.run(rootSaga);

if (localStorage.token) {
    setAuthorizationHeader(localStorage.token);
    store.dispatch(fetchCurrentUserRequest());
    store.dispatch(fetchCustomersRequest());
    store.dispatch(fetchAllUsersRequest());
    store.dispatch(fetchContactMeRequest());
} else {
    store.dispatch(fetchCurrentUserSuccess({}));
    store.dispatch(fetchCustomersSuccess([]));
    store.dispatch(fetchAllUsersSuccess([]));
    store.dispatch(fetchContactMeRequest([]));
}
store.dispatch(fetchPortfoliosRequest());
store.dispatch(fetchEducationRequest());
store.dispatch(fetchExperiencesRequest());
store.dispatch(fetchProfileRequest());
store.dispatch(fetchStackRequest());
store.dispatch(fetchBlogsRequest());

ReactDOM.render(
    <Router history={history}>
        <Provider store={store}>
            <Route component={App} />
        </Provider>
    </Router>,
    document.getElementById('root'));
    registerServiceWorker();
