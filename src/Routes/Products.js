import React, { Component } from 'react';
import HeaderComponent from '../Components/HeaderComponent';
import ProductListComponent from '../Components/ProductListComponent';
import FooterComponent from '../Components/FooterComponent';

class Products extends Component {

  render() {
    return (
      <div className="container">
        <HeaderComponent teste='teste' title='Ammo Varejo' />
        <ProductListComponent />
        <FooterComponent />
      </div>
    );
  }
}

export default Products;