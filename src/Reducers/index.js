import { combineReducers } from 'redux';
import { clickReducer } from './clickReducer';
import { productsReducer } from './productsReducer'; 

export const Reducers = combineReducers({
  clickState: clickReducer,
  productList: productsReducer
});