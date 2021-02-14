import * as actionTypes from '../constants/actionTypes';

const initialState = {
    products         : [],
    filteredProducts : []
};

export default function (state = initialState, action) {

  switch (action.type) {
    
    case actionTypes.FETCH_PRODUCTS:
        
        return { 
            ...state, 
            products         : state.products.concat(action.payload),
            filteredProducts : state.filteredProducts.concat(action.payload)
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