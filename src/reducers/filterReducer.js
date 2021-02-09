import * as actionTypes from '../constants/actionTypes';

const initialState = {};

export default function (state = initialState, action) {

  switch (action.type) {
    
    case actionTypes.FETCH_PRODUCTS:
        
        return { 
            ...state, 
            products: action.payload 
        };

    case actionTypes.CHANGE_PRICE:

      	return {
        	...state,
        	minPrice  : action.minPrice,
        	highPrice : action.highPrice
      	};

    case actionTypes.CHANGE_MODEL:
    	return {
        	...state,
        	model: action.payload,
      	};

    case actionTypes.CHANGE_BRAND:
    	return {
        	...state,
        	brand: action.payload,
      	};

    default:
        return state;
  }
}