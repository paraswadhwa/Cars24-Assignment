import { combineReducers } from 'redux';

import inventoryReducer from './inventoryReducer';
import filterReducer from './filterReducer';

export default combineReducers({
	inventoryReducer,
	filterReducer
});