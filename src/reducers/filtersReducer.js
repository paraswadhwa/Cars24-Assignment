import * as actionTypes from '../constants/actionTypes';

const initialState = {
    'isActive' : false,
    'brand'    : '',
    'minRange' : '',
    'maxRange' : ''

};

export default function (state = initialState, action) {

  switch (action.type) {
    
    case actionTypes.SET_FILTER_DETAILS:
        
        return { 
            ...state, 
            isActive         : action.payload.isActive,
            brand            : action.payload.brand,
            minRange         : action.payload.minRange,
            maxRange         : action.payload.maxRange
        };

    default:
        return state;
  }
}