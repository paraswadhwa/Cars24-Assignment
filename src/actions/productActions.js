import * as actions from './index';
import { API_BASE_URL } from '../constants/apiConstants';

export const fetchProducts = (currentPage) => async (dispatch) => {

    try{
        let response = await fetch(`${API_BASE_URL}/fetch?currentPage=${currentPage}&pageSize=6`,{
          headers : { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
           }
        });
        response = await response.json();

        if(response.data.length > 0){
            dispatch(actions.fetchProducts(response.data));
        }
    }
    catch(ex){
        console.log(ex);
    }
};

export const updateFilteredProducts = (data) => (dispatch) => {
    dispatch(actions.updateFilteredProducts(data));
};