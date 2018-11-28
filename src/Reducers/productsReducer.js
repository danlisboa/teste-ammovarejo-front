import { GET_PRODUCTS, FIND_PRODUCTS, SET_PAGINATION_PAGE } from '../Actions/actionTypes';

const productInicial = {
  productList: [{ 
    _id : "5bf7868055ed974998be99b3", 
    images : [
      {url: "https://images.tcdn.com.br/img/img_prod/606241/edredom_casal_percal_algodao_200_fios_toque_pluma_de_gans_416_1_20180404165013.jpg"},
      {url: "https://static.wmobjects.com.br/imgres/arquivos/ids/2626897-344-344/.jpg"},
      {url: "https://havan.vteximg.com.br/arquivos/ids/3265706-1200-1200/edredom-casal-blend-malha-altenburg-17-629.jpg?v=636650174965870000"}
    ], 
    name : "(carga inicial) Kit de cama 210 fios", 
    last_price : 98, 
    actually_price : 298, 
    short_description : "Classic I - Solteiro Extra", 
    createdAt : "2018-11-23T04:48:00.058+0000", 
    updatedAt : "2018-11-23T04:48:00.058+0000", 
    __v : 0
  }],
  productSearch: '',
  _totalResults: 0,
  activePage: 1,
  itemsCountPerPage: 5,
  pageRangeDisplayed: 5
};

export const productsReducer = (state = productInicial, action) => {
  console.log('reducer action', action);
  switch (action.type) {
    case GET_PRODUCTS:
      var new_state = {
        ...state,
        productList: action.payload.products.list,
        activePage: action.payload.activePage,
        _totalResults: action.payload.products.num_rows,
      };
      return new_state;
    
    case FIND_PRODUCTS:
      var new_state = {
        ...state,
        productSearch: action.payload.search,
        productList: action.payload.data,
      };
      return new_state;
    case SET_PAGINATION_PAGE:
      var new_state = {
        ...state,
        itemsCountPerPage: action.payload.set_page,
      };
      return new_state;
    default:
      return state;
  }
};