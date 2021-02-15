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

export const updateFilterDetails = (data) => {
    
    return { 
    	type    : actionTypes.SET_FILTER_DETAILS, 
    	payload : data 
    };
}