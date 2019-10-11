import {takeLatest} from "redux-saga/effects";
import {
	CREATE_USER_REQUEST,
    FETCH_CURRENT_USER_REQUEST,
	LOGIN_USER_REQUEST,
	LOGOUT_USER_REQUEST,
	USER_AVATAR_UPLOAD_REQUEST,
	UPDATE_AUTH_USER_EMAIL_REQUEST,
	UPDATE_AUTH_USER_PASSWORD_REQUEST,
	UPDATE_AUTH_USER_PROFILE_REQUEST
} from "./types/auth";

import {
	ADD_CUSTOMER_REQUEST,
	FETCH_CUSTOMERS_REQUEST,
	FETCH_CUSTOMER_REQUEST,
	UPDATE_CUSTOMER_REQUEST,
	CUSTOMER_DELETED_REQUEST
} from "./types/customer";

import {
	FETCH_ALL_USERS_REQUEST,
	ADD_USER_REQUEST,
	DELETE_USER_REQUEST,
	UPDATE_USER_REQUEST
} from "./types/user";

import {
	ADD_PORTFOLIO_REQUEST,
	FETCH_ALL_PORTFOLIO_REQUEST,
	UPDATE_PORTFOLIO_REQUEST,
	DELETE_PORTFOLIO_REQUEST,
	FETCH_SINGLE_PORTFOLIO_REQUEST,
	ACTIVATE_PORTFOLIO_REQUEST
} from "./types/portfolio";

import {
	ADD_EDUCATION_REQUEST,
	FETCH_ALL_EDUCATION_REQUEST,
	UPDATE_EDUCATION_REQUEST,
	DELETE_EDUCATION_REQUEST,
	ACTIVATE_EDUCATION_REQUEST
} from "./types/schools";

import {
	ADD_EXPERIENCE_REQUEST,
	FETCH_ALL_EXPERIENCE_REQUEST,
	UPDATE_EXPERIENCE_REQUEST,
	DELETE_EXPERIENCE_REQUEST,
	CHANGE_CURRENT_EXPERIENCE_REQUEST,
	CHANGE_STATUS_EXPERIENCE_REQUEST
} from "./types/experience";

import {
	ADD_PROFILE_REQUEST,
	FETCH_ALL_PROFILE_REQUEST,
	UPDATE_PROFILE_REQUEST,
	DELETE_PROFILE_REQUEST
 } from "./types/profile";

import {
ADD_STACK_REQUEST,
UPDATE_STACK_REQUEST,
DELETE_STACK_REQUEST,
FETCH_ALL_STACK_REQUEST,
ACTIVATE_STACK_REQUEST
} from './types/stack';

import {
ADD_BLOG_REQUEST,
FETCH_ALL_BLOG_REQUEST,
UPDATE_BLOG_REQUEST,
DELETE_BLOG_REQUEST,
ACTIVATE_BLOG_REQUEST
} from "./types/blog";

import 
{
	addSackSaga,
	fetchSackSaga,
	deleteStackSaga,
	updateStackSaga,
	activateStackSaga
} from './store/sagas/stackSaga';

import {
	addCustomerSaga,
	fetchCustomersSaga,
	fetchSingleCustomersSaga,
	updateCustomersSaga,
	deleteCustomerSaga
} from "./store/sagas/customersSagas";

import {
  addEducationSaga,
  getAllSchoolsSaga,
  updateEducationSaga,
  deleteEducationSaga,
  activateEducationSaga
} from "./store/sagas/schoolSaga";

import {
	fetchAllUsersSaga,
	addUserSaga,
	deleteUserSaga,
	updateUserSaga
} from "./store/sagas/userSaga";

import {
	createUserSaga,
	fetchUserSaga,
	loginUserSaga,
	logoutUserSaga,
	userAvatarUploadSaga,
	updateAuthUserEmailSaga,
	updateAuthUserPasswordSaga,
	updateAuthUserProfileSaga
} from "./store/sagas/authSaga";

import {
	addPortfolioSaga,
	fetchPortfoliosSaga,
	updatePortfolioSaga,
	deletePortfolioSaga,
	fetchSinglePortfolioSaga,
	activatePortfolioSaga
} from "./store/sagas/portfolioSaga";

import {
	addExperienceSaga,
	fetchExperiencesSaga,
	deleteExperienceSaga,
	updateExperienceSaga,
	changeCurrentExperienceSaga,
	changeStatusExperienceSaga
} from "./store/sagas/experienceSaga";

import {
	addProfileSaga,
	updateProfileSaga,
	fetchProfileSaga,
	deleteProfileSaga
 } from "./store/sagas/profileSaga";

 import {
addBlogSaga,
fetchBlogsSaga,
updateBlogSaga,
deleteBlogSaga,
activateBlogSaga
 } from "./store/sagas/blogSaga";

 import {
	addContactMeSaga,
	getAllContactMeSaga,
	deleteContactMeSaga
 } from "./store/sagas/contactmeSaga";

 import {
	 ADD_CONTACT_REQUEST,
	 FETCH_ALL_CONTACT_REQUEST,
	 DELETE_CONTACT_REQUEST

 } from "./types/contactme";


export default function* rootSaga() {
	//User Authentications Operation
	yield takeLatest(CREATE_USER_REQUEST, createUserSaga);
	yield takeLatest(FETCH_CURRENT_USER_REQUEST, fetchUserSaga);
	yield takeLatest(LOGIN_USER_REQUEST, loginUserSaga);
	yield takeLatest(LOGOUT_USER_REQUEST, logoutUserSaga);
	yield takeLatest(USER_AVATAR_UPLOAD_REQUEST, userAvatarUploadSaga);
	yield takeLatest(UPDATE_AUTH_USER_EMAIL_REQUEST, updateAuthUserEmailSaga);
	yield takeLatest(UPDATE_AUTH_USER_PASSWORD_REQUEST, updateAuthUserPasswordSaga);
	yield takeLatest(UPDATE_AUTH_USER_PROFILE_REQUEST, updateAuthUserProfileSaga);

	//Customer Operations
	yield takeLatest(FETCH_CUSTOMERS_REQUEST, fetchCustomersSaga);
	yield takeLatest(ADD_CUSTOMER_REQUEST, addCustomerSaga);
	yield takeLatest(FETCH_CUSTOMER_REQUEST, fetchSingleCustomersSaga);
	yield takeLatest(UPDATE_CUSTOMER_REQUEST, updateCustomersSaga);
	yield takeLatest(CUSTOMER_DELETED_REQUEST, deleteCustomerSaga);

	//User Operations
	yield takeLatest(FETCH_ALL_USERS_REQUEST, fetchAllUsersSaga);
	yield takeLatest(ADD_USER_REQUEST, addUserSaga);
	yield takeLatest(DELETE_USER_REQUEST, deleteUserSaga);
	yield takeLatest(UPDATE_USER_REQUEST, updateUserSaga);

	//Portfolio Operations
	yield takeLatest(ADD_PORTFOLIO_REQUEST, addPortfolioSaga);
	yield takeLatest(FETCH_ALL_PORTFOLIO_REQUEST, fetchPortfoliosSaga);
	yield takeLatest(UPDATE_PORTFOLIO_REQUEST, updatePortfolioSaga);
	yield takeLatest(DELETE_PORTFOLIO_REQUEST, deletePortfolioSaga);
	yield takeLatest(FETCH_SINGLE_PORTFOLIO_REQUEST, fetchSinglePortfolioSaga);
	yield takeLatest(ACTIVATE_PORTFOLIO_REQUEST, activatePortfolioSaga)

	//Education Operations
	yield takeLatest(ADD_EDUCATION_REQUEST, addEducationSaga);
	yield takeLatest(UPDATE_EDUCATION_REQUEST, updateEducationSaga);
	yield takeLatest(FETCH_ALL_EDUCATION_REQUEST, getAllSchoolsSaga);
	yield takeLatest(DELETE_EDUCATION_REQUEST, deleteEducationSaga);
	yield takeLatest(ACTIVATE_EDUCATION_REQUEST, activateEducationSaga);
	
	//Experiences Operations
	yield takeLatest(ADD_EXPERIENCE_REQUEST, addExperienceSaga);
	yield takeLatest(UPDATE_EXPERIENCE_REQUEST, updateExperienceSaga);
	yield takeLatest(FETCH_ALL_EXPERIENCE_REQUEST, fetchExperiencesSaga);
	yield takeLatest(DELETE_EXPERIENCE_REQUEST, deleteExperienceSaga);
	yield takeLatest(CHANGE_CURRENT_EXPERIENCE_REQUEST, changeCurrentExperienceSaga);
	yield takeLatest(CHANGE_STATUS_EXPERIENCE_REQUEST, changeStatusExperienceSaga);

	//Profile Operations
	yield takeLatest(ADD_PROFILE_REQUEST, addProfileSaga);
	yield takeLatest(UPDATE_PROFILE_REQUEST, updateProfileSaga);
	yield takeLatest(FETCH_ALL_PROFILE_REQUEST, fetchProfileSaga);
	yield takeLatest(DELETE_PROFILE_REQUEST, deleteProfileSaga);

	//Stack Operations
	yield takeLatest(ADD_STACK_REQUEST, addSackSaga);
	yield takeLatest(UPDATE_STACK_REQUEST, updateStackSaga);
	yield takeLatest(FETCH_ALL_STACK_REQUEST, fetchSackSaga);
	yield takeLatest(DELETE_STACK_REQUEST, deleteStackSaga);
	yield takeLatest(ACTIVATE_STACK_REQUEST, activateStackSaga);

	//Blog Operations
	yield takeLatest(ADD_BLOG_REQUEST, addBlogSaga);
	yield takeLatest(UPDATE_BLOG_REQUEST, updateBlogSaga);
	yield takeLatest(FETCH_ALL_BLOG_REQUEST, fetchBlogsSaga);
	yield takeLatest(DELETE_BLOG_REQUEST, deleteBlogSaga);
	yield takeLatest(ACTIVATE_BLOG_REQUEST, activateBlogSaga);

	//Contact Operation
	yield takeLatest(ADD_CONTACT_REQUEST, addContactMeSaga);
	yield takeLatest(FETCH_ALL_CONTACT_REQUEST, getAllContactMeSaga);
	yield takeLatest(DELETE_CONTACT_REQUEST, deleteContactMeSaga);

}
