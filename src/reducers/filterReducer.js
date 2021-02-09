import * as actionTypes from '../constants/actionTypes';

const initialState = {};

export default function (state = initialState, action) {

  switch (action.type) {

    case actionTypes.FILTER_PRODUCTS_BY_SIZE_PRICE_RANGE:

      	return {
        	...state,
        	minPrice  : action.minPrice,
        	maxPrice  : action.maxPrice
      	};

    case actionTypes.FILTER_PRODUCTS_BY_MODEL:
    	return {
        ...state,
        filteredItems: action.payload.items,
        size: action.payload.size,
      };

    case actionTypes.FILTER_PRODUCTS_BY_BRAND:
    	return {
        	...state,
        	brand: action.payload,
      	};

    default:
        return state;
  }
}