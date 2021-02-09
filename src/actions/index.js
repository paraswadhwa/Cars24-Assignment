import * as actionTypes from '../constants/actionTypes';

export const fetchProducts = (data) => {
    
    return { 
    	type    : actionTypes.FETCH_PRODUCTS, 
    	payload : data 
    };
}

export const updateFilteredProducts = (data) => {
    
    return { 
    	type    : actionTypes.UPDATE_FILTERED_PRODUCTS, 
    	payload : data 
    };
}