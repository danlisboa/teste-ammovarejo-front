import React, {Component} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { setPaginationPageAction, getProductsAction } from '../Actions/index';


class PaginationControlComponent extends Component {  
  changeNumPage = (param) => {
    this.props.setPaginationPageAction(param);
  }

  render() {
    var products = this.props.products;

    return(
      <div className="dropdown" style={{float : 'left'}}>
        <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          {products.itemsCountPerPage} produtos por página
        </button>
        <div className="dropdown-menu" aria-labelledby="dropdownMenu2">        
          {[5,10,20,30].map(qty =>
            <button className="dropdown-item" onClick={()=>this.changeNumPage(qty)} type="button">{`${qty}`}</button>
          )}
        </div>
      </div>    
    );
  };
}

const mapDispatchToProps = dispatch =>
  bindActionCreators({ setPaginationPageAction, getProductsAction }, dispatch);

const mapStateToProps = state => ({products: state.productList});

export default connect(mapStateToProps, mapDispatchToProps)(PaginationControlComponent);