import { combineReducers } from 'redux';

import inventoryReducer from './inventoryReducer';
import filtersReducer   from './filtersReducer';

export default combineReducers({
	inventoryReducer,
	filtersReducer
});