import React, {Component} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import axios from 'axios';

import { findProductsAction } from '../Actions/index';
import { config }  from '../config';

class HeaderComponent extends Component {
    findProduct = (param) => {
      var findProducts = this.props.findProductsAction;
      var url = config.remote_route.product_search+'?name='+this.productSearch;
      var productSearch = this.productSearch;
      axios.get(url).then(function (response) {
        findProducts(productSearch, response.data);
      }).catch(function (error) {
        console.log(error);
      });

    }

    setScopeValues(event) {
      this.productSearch = event.target.value;
    }
    
    render() {
      return(
        <div>
          <nav className="navbar navbar-light bg-light justify-content-between">
            <a className="navbar-brand"><h1>mmartan</h1></a>
            <div className="form-inline">
              <input className="form-control mr-sm-2" onChange={this.setScopeValues.bind(this)} type="search" placeholder="Buscar" aria-label="Search" />
              <button className="btn btn-outline-success my-2 my-sm-0" onClick={()=>this.findProduct()} >Buscar</button>
            </div>
          </nav>
          <div className="row" style={{'margin-top': '10px'}}>
            <div className="col-sm"><h3>{this.props.products.productSearch ? this.props.products.productSearch : 'Lista de produtos'}</h3></div>
          </div>
        </div>
      );
    }
  }

//bind
const mapDispatchToProps = dispatch =>
bindActionCreators({ findProductsAction }, dispatch); //manda objeto com {type,data} para index da reducer que vai procurar nas reducers combinadas

//map
const mapStateToProps = state => ({products: state.productList});

export default connect(mapStateToProps, mapDispatchToProps)(HeaderComponent);