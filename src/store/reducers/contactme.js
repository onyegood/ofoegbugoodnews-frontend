import {
    ADD_CONTACT_REQUEST,
    ADD_CONTACT_SUCCESS,
    FETCH_ALL_CONTACT_REQUEST,
    FETCH_ALL_CONTACT_SUCCESS,
    DELETE_CONTACT_REQUEST,
    DELETE_CONTACT_SUCCESS
} from "../../types/contactme";

const initialState = {
    isLoading: false,
    msg: false,
    errors: null,
    success: false,
    payload: []
};

export default function (state = initialState, action) {
    switch (action.type) {
        case ADD_CONTACT_REQUEST:
        case FETCH_ALL_CONTACT_REQUEST:
        case DELETE_CONTACT_REQUEST:
            return { ...state, isLoading: true };

        case FETCH_ALL_CONTACT_SUCCESS:
            return { 
                ...state,
                payload: action.payload, 
                isLoading: false 
                
            };

        case ADD_CONTACT_SUCCESS:
            return {
                ...state,
                payload: [...state.payload, Object.assign({}, action.contact)], 
                isLoading: false,
                success: true
            };

        case DELETE_CONTACT_SUCCESS:
            return {
                isLoading: false,
                success: true,
                payload: [...state.payload.filter(contact => contact.id !== action.id)]
            };
        default:
            return state;
    }
}
