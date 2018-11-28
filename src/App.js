import React, { Component } from 'react';
import {BrowserRouter as Router } from 'react-router-dom';

import Routes from './Routes';

class App extends Component {
  
  render() {
    console.log('propriedades', this.props);
    return (
        <Router>
          <Routes/>
        </Router>
    );
  }
}

export default App;
