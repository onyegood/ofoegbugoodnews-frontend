import {
    ADD_USER_REQUEST,
    ADD_USER_SUCCESS,
    FETCH_ALL_USERS_REQUEST,
    FETCH_ALL_USERS_SUCCESS,
    UPDATE_USER_REQUEST,
    UPDATE_USER_SUCCESS,
    DELETE_USER_REQUEST,
    DELETE_USER_SUCCESS
} from "../../types/user";

const initialState = {
    isLoading: false,
    msg: false,
    errors: null,
    users: []
}
export default function(state = initialState, action) {
    switch (action.type) {
        case ADD_USER_REQUEST:
        case FETCH_ALL_USERS_REQUEST:
        case UPDATE_USER_REQUEST:
        case DELETE_USER_REQUEST:
            return {
                ...state,
                isLoading: true
            };

        case FETCH_ALL_USERS_SUCCESS:
            return {
                ...state,
                users: action.users,
                isLoading: false
            };

        case ADD_USER_SUCCESS:
            return {
                ...state,
                isLoading: false,
                users: [...state.users, 
                    Object.assign({}, action.user)
                ]
            };
        case UPDATE_USER_SUCCESS:
            return {
                ...state,
                isLoading: false,
                msg: true,
                users: [
                    ...state.users.filter(user => user.id !== action.user.id),
                    Object.assign({}, action.user)
                ]
            }

        case DELETE_USER_SUCCESS:
            console.log('Hello every body!');
            return {
                isLoading: false,
                users: [...state.users.filter(user => user.id !== action.id)]
            }

        default:
            return state;
    }
}
