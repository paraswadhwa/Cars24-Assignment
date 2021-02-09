import * as actionTypes from '../constants/actionTypes';

export const fetchProducts = (data) => {
    
    return { 
    	type    : actionTypes.FETCH_PRODUCTS, 
    	payload : data 
    };
}