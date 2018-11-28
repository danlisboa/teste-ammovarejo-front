import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';

import Home from './Routes/Home';
import Products from './Routes/Products';

export class Routes extends Component {
  render() {
    return (
      <div className="container">
        <Switch>
            <Route exact path='/' component={Home}/>
            <Route exact path='/produtos' component={Products}/>
        </Switch>
      </div>
    )
  }
};

export default Routes;