import React, {Component} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import axios from 'axios';

import ProductRowComponent from '../Components/ProductRowComponent';
import { getProductsAction } from '../Actions/index';
import { config }  from '../config';

class ProductListComponent extends Component {
  loadProducts () {
    var getProducts = this.props.getProductsAction;

    axios.get(config.remote_route.get_products).then(function (response) {
      getProducts({products: response.data, activePage: 1});
    }).catch(function (error) {
      console.log(error);
    });
  }

  componentDidMount() {
    this.loadProducts();
  }

  render() {
    const { productList, teste, _totalResults} = this.props.products;
    const qtde_products = productList.length;

    return(
      <div>
        <div className='row'>
          <div className='col-sm'>
            <div class={qtde_products > 0 ? "alert alert-info" : "alert alert-danger"} role="alert">
              {qtde_products > 0 ? (
                <span><span class="badge badge-light">{_totalResults}</span> Produtos encontrados</span>
              ) : (
                <span>Nenhum produto encontrado</span>
              )}
            </div>
          </div>
        </div>
        <table className="table table-hover">
          <tbody>
            {productList.map(data=> <ProductRowComponent data={data} />)}
          </tbody>
        </table>
      </div>
    );
  }
}

//bind
const mapDispatchToProps = dispatch =>
  bindActionCreators({ getProductsAction }, dispatch); //manda objeto com {type,data} para index da reducer que vai procurar nas reducers combinadas

//map
const mapStateToProps = state => ({
  products: state.productList,
  //teste: state.teste // mapeia estado da store e disponibiliza na props
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductListComponent);