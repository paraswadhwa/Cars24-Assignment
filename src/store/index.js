import {createStore, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';
import rootReducer from '../reducers/rootReducer';
import { persistStore,persistReducer } from 'redux-persist';
import { createLogger } from 'redux-logger';
import storage from 'redux-persist/lib/storage';

const middlewares = [];

if(process.env.NODE_ENV === 'development') {
  
  const logger = createLogger({
    collapsed: true,
    duration: true
  });
  middlewares.push(logger);
}

middlewares.push(thunkMiddleware);

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['inventoryReducer','filtersReducer']
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const persistedStore = createStore(
  persistedReducer,
  applyMiddleware(...middlewares)
);

const persistor = persistStore(persistedStore);

export { persistedStore, persistor };