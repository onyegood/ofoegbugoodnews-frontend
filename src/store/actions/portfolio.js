import {
  ADD_PORTFOLIO_REQUEST,
  ADD_PORTFOLIO_SUCCESS,
  ADD_PORTFOLIO_FAILURE,
  FETCH_ALL_PORTFOLIO_REQUEST,
  FETCH_ALL_PORTFOLIO_SUCCESS,
  FETCH_ALL_PORTFOLIO_FAILURE,
  UPDATE_PORTFOLIO_REQUEST,
  UPDATE_PORTFOLIO_SUCCESS,
  UPDATE_PORTFOLIO_FAILURE,
  DELETE_PORTFOLIO_REQUEST,
  DELETE_PORTFOLIO_SUCCESS,
  DELETE_PORTFOLIO_FAILURE,
  FETCH_SINGLE_PORTFOLIO_REQUEST,
  FETCH_SINGLE_PORTFOLIO_SUCCESS,
  FETCH_SINGLE_PORTFOLIO_FAILURE,
  ACTIVATE_PORTFOLIO_REQUEST,
  ACTIVATE_PORTFOLIO_SUCCESS,
  ACTIVATE_PORTFOLIO_FAILURE
} from "../../types/portfolio";

export const addPortfolioRequest = portfolio => ({type: ADD_PORTFOLIO_REQUEST, portfolio});

export const addPortfolioSuccess = portfolio => ({type: ADD_PORTFOLIO_SUCCESS, portfolio});

export const addPortfolioFailure = errors => ({type: ADD_PORTFOLIO_FAILURE, errors});

export const fetchPortfoliosRequest = portfolios => ({type: FETCH_ALL_PORTFOLIO_REQUEST, portfolios});

export const fetchPortfoliosSuccess = portfolios => ({type: FETCH_ALL_PORTFOLIO_SUCCESS, portfolios});

export const fetchPortfoliosFailure = errors => ({type: FETCH_ALL_PORTFOLIO_FAILURE, errors});

export const updatePortfolioRequest = (portfolio, id) => ({type: UPDATE_PORTFOLIO_REQUEST, portfolio, id});

export const updatePortfolioSuccess = (portfolio, id) => ({type: UPDATE_PORTFOLIO_SUCCESS, portfolio, id});

export const updatePortfolioFailure = errors => ({type: UPDATE_PORTFOLIO_FAILURE, errors});

export const deleteportfolio = id => ({ type: DELETE_PORTFOLIO_REQUEST, id });

export const deletePortfolioSuccess = (id) => ({type: DELETE_PORTFOLIO_SUCCESS, id});

export const deletePortfolioFaild = errors => ({type: DELETE_PORTFOLIO_FAILURE, errors});

export const fetchSinglePortfolioRequest = portfolio => ({type: FETCH_SINGLE_PORTFOLIO_REQUEST, portfolio});

export const fetchSinglePortfolioSuccess = (portfolio, id) => ({type: FETCH_SINGLE_PORTFOLIO_SUCCESS, portfolio, id});

export const fetchSinglePortfolioFailure = errors => ({type: FETCH_SINGLE_PORTFOLIO_FAILURE, errors});

export const activatePortfolioRequest = (portfolio, id) => ({ type: ACTIVATE_PORTFOLIO_REQUEST, portfolio, id });

export const activatePortfolioSuccess = (portfolio, id) => ({ type: ACTIVATE_PORTFOLIO_SUCCESS, portfolio, id });

export const activatePortfolioFailure = errors => ({ type: ACTIVATE_PORTFOLIO_FAILURE, errors });
