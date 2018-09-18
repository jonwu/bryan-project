import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import thunk from 'redux-thunk';
import { persistStore, createTransform } from 'redux-persist';
import rootReducer from 'common/reducers/rootReducer';
import configurePersistReducer from 'common/store/configurePersistReducer';
import middleware from 'common/middlewares/middleware';

const persistedReducer = configurePersistReducer(rootReducer);
const enhancer = compose(applyMiddleware(thunk, middleware));

export default initialState => {
  let store = createStore(persistedReducer, initialState, enhancer);
  let persistor = persistStore(store); // .purge() to clear
  return { store, persistor };
};
