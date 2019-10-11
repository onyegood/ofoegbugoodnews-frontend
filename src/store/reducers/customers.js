import {
  FETCH_CUSTOMERS_REQUEST,
  FETCH_CUSTOMERS_SUCCESS,
  ADD_CUSTOMER_REQUEST,
  ADD_CUSTOMER_SUCCESS,
  FETCH_CUSTOMER_REQUEST,
  FETCH_CUSTOMER_SUCCESS,
  UPDATE_CUSTOMER_REQUEST,
  UPDATE_CUSTOMER_SUCCESS,
  CUSTOMER_DELETED_SUCCESS,
  CUSTOMER_DELETED_REQUEST
} from "../../types/customer";

const initialState = {
  isLoading: false,
  msg: false,
  errors: null,
  customers: []
}

export default function(state = initialState, action) {
  switch (action.type) {
    case ADD_CUSTOMER_REQUEST:
    case FETCH_CUSTOMER_REQUEST:
    case UPDATE_CUSTOMER_REQUEST:
    case CUSTOMER_DELETED_REQUEST:
    case FETCH_CUSTOMERS_REQUEST:
      return { ...state, isLoading: true };

    case FETCH_CUSTOMERS_SUCCESS:
      return { ...state, customers: action.customers, isLoading: false };

    case ADD_CUSTOMER_SUCCESS:
      return { 
        ...state, 
          customers : [
            ...state.customers,
             Object.assign({}, action.customer)
            ],
        isLoading: false 
      };

    case FETCH_CUSTOMER_SUCCESS:
      return { ...state, ...action.customer, isLoading: false };

    case UPDATE_CUSTOMER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        customers : [
            ...state.customers.filter(customer => customer.id !== action.customer.id),
             Object.assign({}, action.customer)
            ],
      }

    case CUSTOMER_DELETED_SUCCESS:
      return { isLoading: false,
              customers: [...state.customers.filter(customer => customer.id !== action.id)]         
      };
    default:
      return state;
  }
}
