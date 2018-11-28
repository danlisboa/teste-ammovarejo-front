import { CLICK_UPDATE_VALUE, GET_PRODUCTS, FIND_PRODUCTS, SET_PAGINATION_PAGE} from '../Actions/actionTypes';

export const clickButton = value => ({
  type: CLICK_UPDATE_VALUE,
  newValue: value
});

export const getProductsAction = (data) => {
  return {
    type: GET_PRODUCTS,
    payload: data
  }
};

export const findProductsAction = (search, data) => {
  return {
    type: FIND_PRODUCTS,
    payload: {search:search, data:data}
  }
};

export const setPaginationPageAction = (data) => {
  console.log('passou na action', data)
  return {
    type: SET_PAGINATION_PAGE,
    payload: {set_page:data}
  }
};