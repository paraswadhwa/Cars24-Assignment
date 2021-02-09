import * as actionTypes from '../constants/actionTypes';

const initialState = {};

export default function (state = initialState, action) {

  switch (action.type) {
    
    case actionTypes.FETCH_PRODUCTS:
        
        return { 
            ...state, 
            products         : action.payload,
            filteredProducts : action.payload
        };

    case actionTypes.UPDATE_FILTERED_PRODUCTS:
        
        return { 
            ...state,
            filteredProducts : action.payload
        };

    default:
        return state;
  }
}