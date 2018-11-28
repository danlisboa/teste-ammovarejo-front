import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { clickButton } from '../Actions/index';

class Home extends Component {
  state = {
    inputValue: ''
  }

  inputChange = event => {
    this.setState({
      inputValue: event.target.value
    })
  }
  
  render() {
    const { clickButton, newValue } = this.props;
    const { inputValue } = this.state;
    console.log('props', this.props)

    return (
      <div className="container">
        Home Page - <small>teste ammovarejo</small><br />
        
        <Link key='/produtos' className="nav-link" to='/produtos'>
            Lista de produtos
        </Link>

      </div>
    );
  }
}

//bind
const mapDispatchToProps = dispatch =>
  bindActionCreators({ clickButton }, dispatch);

//map
const mapStateToProps = store => ({
  newValue: store.clickState.newValue
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);