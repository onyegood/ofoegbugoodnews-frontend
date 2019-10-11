import {
    USER_LOGGED_IN,
    USER_LOGGED_OUT,
    LOGIN_USER_REQUEST,
    LOGIN_USER_FAIL,
    LOGOUT_USER_REQUEST,
    CREATE_USER_REQUEST,
    CREATE_USER_FAILURE,
    FETCH_CURRENT_USER_REQUEST,
    FETCH_CURRENT_USER_SUCCESS,
    FETCH_CURRENT_USER_FAILURE,
    USER_AVATAR_UPLOAD_REQUEST,
    USER_AVATAR_UPLOAD_SUCCESS,
    USER_AVATAR_UPLOAD_FAILURE,
    ERROR_MSG_RESET,
    UPDATE_AUTH_USER_EMAIL_REQUEST,
    UPDATE_AUTH_USER_EMAIL_SUCCESS,
    UPDATE_AUTH_USER_EMAIL_FAILURE,
    UPDATE_AUTH_USER_PASSWORD_REQUEST,
    UPDATE_AUTH_USER_PASSWORD_SUCCESS,
    UPDATE_AUTH_USER_PASSWORD_FAILURE,
    UPDATE_AUTH_USER_PROFILE_REQUEST,
    UPDATE_AUTH_USER_PROFILE_SUCCESS,
    UPDATE_AUTH_USER_PROFILE_FAILURE
} from "../../types/auth";

export const createUserRequest = user => ({type: CREATE_USER_REQUEST, user});

export const createUserFailure = errors => ({type: CREATE_USER_FAILURE, errors});

export const userLoggedIn = user => ({type: USER_LOGGED_IN, user});

export const userLoggedOut = () => ({type: USER_LOGGED_OUT});

export const loginUserRequests = user => ({type: LOGIN_USER_REQUEST, user});

export const loginUserFailure = error => ({type: LOGIN_USER_FAIL, error});

export const resetErrorMessage = error => ({ type: ERROR_MSG_RESET, error });

export const logoutUserRequest = user => ({type: LOGOUT_USER_REQUEST, user});

export const fetchCurrentUserRequest = () => ({type: FETCH_CURRENT_USER_REQUEST});

export const fetchCurrentUserSuccess = user => ({type: FETCH_CURRENT_USER_SUCCESS, user});

export const fetchCurrentUserFailure = errors => ({type: FETCH_CURRENT_USER_FAILURE, errors});

export const userAvatarUploadRequest = avatar => ({type: USER_AVATAR_UPLOAD_REQUEST, avatar});

export const userAvatarUploadSuccess = avatar => ({type: USER_AVATAR_UPLOAD_SUCCESS, avatar});

export const userAvatarUploadFailure = errors => ({type: USER_AVATAR_UPLOAD_FAILURE, errors});

export const updateAuthUserEmailRequest = user => ({type: UPDATE_AUTH_USER_EMAIL_REQUEST, user}); 

export const updateAuthUserEmailSuccess = user => ({ type: UPDATE_AUTH_USER_EMAIL_SUCCESS, user }); 

export const updateAuthUserEmailFailure = error => ({ type: UPDATE_AUTH_USER_EMAIL_FAILURE, error }); 

export const updateAuthUserPasswordRequest = user => ({ type: UPDATE_AUTH_USER_PASSWORD_REQUEST, user });

export const updateAuthUserPasswordSuccess = user => ({ type: UPDATE_AUTH_USER_PASSWORD_SUCCESS, user });

export const updateAuthUserPasswordFailure = error => ({ type: UPDATE_AUTH_USER_PASSWORD_FAILURE, error }); 

export const updateAuthUserProfileRequest = user => ({ type: UPDATE_AUTH_USER_PROFILE_REQUEST, user });

export const updateAuthUserProfileSuccess = user => ({ type: UPDATE_AUTH_USER_PROFILE_SUCCESS, user });

export const updateAuthUserProfileFailure = error => ({ type: UPDATE_AUTH_USER_PROFILE_FAILURE, error }); 



/*
export const confirmUserRequest = token => ({
    type: CONFIRM_USER_REQUEST,
    token
});

export const confirmUserFailure = errors => ({
    type: CONFIRM_USER_FAILURE,
    errors
});

export const confirm = token => dispatch =>
    api.user.confirm(token).then(user => {
        localStorage.bookwormJWT = user.token;
        dispatch(userLoggedIn(user));
    });

export const resetPasswordRequest = ({ email }) => () =>
    api.user.resetPasswordRequest(email);

export const validateToken = token => () => api.user.validateToken(token);

export const resetPassword = data => () => api.user.resetPassword(data);*/
