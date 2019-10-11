import {
  ADD_CUSTOMER_REQUEST,
  ADD_CUSTOMER_FAILURE,
  FETCH_CUSTOMERS_REQUEST,
  FETCH_CUSTOMERS_SUCCESS,
  FETCH_CUSTOMERS_FAILURE,
  ADD_CUSTOMER_SUCCESS,
  FETCH_CUSTOMER_REQUEST,
  FETCH_CUSTOMER_SUCCESS,
  FETCH_CUSTOMER_FAILURE,
  UPDATE_CUSTOMER_REQUEST,
  UPDATE_CUSTOMER_SUCCESS,
  UPDATE_CUSTOMER_FAILURE,
  CUSTOMER_DELETED_REQUEST,
  CUSTOMER_DELETED_SUCCESS,
  CUSTOMER_DELETE_FAILD
} from "../../types/customer";

export const addCustomerRequest = customer => ({type: ADD_CUSTOMER_REQUEST, customer});

export const addCustomerSuccess = customer => ({type: ADD_CUSTOMER_SUCCESS, customer});

export const addCustomerFailure = errors => ({type: ADD_CUSTOMER_FAILURE, errors});

export const fetchCustomersRequest = customers => ({type: FETCH_CUSTOMERS_REQUEST, customers});

export const fetchCustomersSuccess = customers => ({type: FETCH_CUSTOMERS_SUCCESS, customers});

export const fetchCustomersFailure = errors => ({type: FETCH_CUSTOMERS_FAILURE, errors});

export const fetchSingleCustomerRequest = customer => ({type: FETCH_CUSTOMER_REQUEST, customer});

export const fetchSingleCustomerSuccess = (customer, id) => ({type: FETCH_CUSTOMER_SUCCESS, customer, id: id});

export const fetchSingleCustomerFailure = errors => ({type: FETCH_CUSTOMER_FAILURE, errors});

export const updateCustomerRequest = (customer, id) => ({type: UPDATE_CUSTOMER_REQUEST, customer, id});

export const updateCustomerSuccess = (customer, id) => ({type: UPDATE_CUSTOMER_SUCCESS, customer, id});

export const updateCustomerFailure = errors => ({type: UPDATE_CUSTOMER_FAILURE, errors});

export const deletecustomer = (id) => ({type: CUSTOMER_DELETED_REQUEST, id});

export const deleteCustomerSuccess = (id) => ({type: CUSTOMER_DELETED_SUCCESS, id});

export const deleteCustomerFaild = errors => ({type: CUSTOMER_DELETE_FAILD, errors});
