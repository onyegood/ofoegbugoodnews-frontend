import {
  ADD_PORTFOLIO_REQUEST,
  ADD_PORTFOLIO_SUCCESS,
  FETCH_ALL_PORTFOLIO_REQUEST,
  FETCH_ALL_PORTFOLIO_SUCCESS,
  UPDATE_PORTFOLIO_REQUEST,
  UPDATE_PORTFOLIO_SUCCESS,
  DELETE_PORTFOLIO_REQUEST,
  DELETE_PORTFOLIO_SUCCESS,
  FETCH_SINGLE_PORTFOLIO_REQUEST,
  FETCH_SINGLE_PORTFOLIO_SUCCESS,
  ACTIVATE_PORTFOLIO_SUCCESS,
  ACTIVATE_PORTFOLIO_REQUEST
} from "../../types/portfolio";

const initialState = {
  isLoading: false,
  msg: false,
  errors: null,
  portfolios: []
}

export default function(state = initialState, action) {
  switch (action.type) {
    case ADD_PORTFOLIO_REQUEST:
    case FETCH_ALL_PORTFOLIO_REQUEST:
    case UPDATE_PORTFOLIO_REQUEST:
    case DELETE_PORTFOLIO_REQUEST:
    case FETCH_SINGLE_PORTFOLIO_REQUEST:
      return { ...state, isLoading: true };

    case FETCH_ALL_PORTFOLIO_SUCCESS:
      return { ...state, 
        portfolios: action.portfolios, isLoading: false };

    case FETCH_SINGLE_PORTFOLIO_SUCCESS:
      return { ...state, ...action.portfolio, isLoading: false };

    case ADD_PORTFOLIO_SUCCESS:
      return { 
        ...state, 
          portfolios : [
            ...state.portfolios,
             Object.assign({}, action.portfolio)
            ],
        isLoading: false 
      };

    case DELETE_PORTFOLIO_SUCCESS:
      return { isLoading: false,
              portfolios: [
                  ...state.portfolios.filter(portfolio => portfolio.id !== action.id)
              ]
      };  

    case UPDATE_PORTFOLIO_SUCCESS:
      return {
        ...state,
        isLoading: false,
        portfolios : [
            ...state.portfolios.filter(portfolio => portfolio.id !== action.portfolio.id),
             Object.assign({}, action.portfolio)
            ],
      }

      case ACTIVATE_PORTFOLIO_SUCCESS:
      return { ...state, isLoading: false, 
        portfolios: [...state.portfolios.filter(portfolio => portfolio.id !== action.portfolio.id), 
          Object.assign({}, action.portfolio)] }; 

    default:
      return state;
  }
}
