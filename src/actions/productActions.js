import * as actions from './index';

export const fetchProducts = () => async (dispatch) => {

    try{
        let response = await fetch("products.json",{
          headers : { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
           }
        });
        response = await response.json();
        dispatch(actions.fetchProducts(response));
    }
    catch(ex){
        console.log(ex);
    }
};

export const updateFilteredProducts = (data) => (dispatch) => {
    dispatch(actions.updateFilteredProducts(data));
};