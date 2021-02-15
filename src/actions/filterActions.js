import * as actions from './index';


export const updateFilterDetails = (data) => (dispatch) => {
    dispatch(actions.updateFilterDetails(data));
};