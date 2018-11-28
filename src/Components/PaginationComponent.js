import React, { Component } from "react";
import Pagination from "react-js-pagination";
import axios from 'axios';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getProductsAction } from '../Actions/index';
import PaginationControlComponent from '../Components/PaginationControlComponent';
import { config }  from '../config';

class PaginationComponent extends Component {
 
  handlePageChange(pageNumber) {
    var products = this.props.products;
    var getProducts = this.props.getProductsAction;
    var count = ( pageNumber * products.itemsCountPerPage ) - products.itemsCountPerPage;
    var delimiter = products.itemsCountPerPage;
    
    const url = config.remote_route.get_products+'?offset='+count+'&limit='+delimiter; 
    axios.get(url).then(function (response) {
      getProducts({products: response.data, activePage: pageNumber});
    }).catch(function (error) {
      console.log(error);
    });
  }

  render() {
    var products = this.props.products;
 
    return (
      <div>
        <PaginationControlComponent />
        
        <nav aria-label="Page navigation example" style={{float: 'right'}}>
          <Pagination
            activePage={products.activePage}
            itemsCountPerPage={products.itemsCountPerPage}
            totalItemsCount={products._totalResults}
            pageRangeDisplayed={products.pageRangeDisplayed}
            onChange={this.handlePageChange.bind(this)}
            itemClass='page-item'
            linkClass	= 'page-link'
            prevPageText = 'Anterior'
            nextPageText = 'Próximo'
          />
        </nav>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators({ getProductsAction }, dispatch);

const mapStateToProps = state => ({products: state.productList});

export default connect(mapStateToProps, mapDispatchToProps)(PaginationComponent);