import React, { Component } from 'react';
import { connect } from 'react-redux';

import { storesActions } from './actions/stores';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  componentWillMount() {
    this.props.getAll();
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    stores: state.stores
  }
};

export default connect(mapStateToProps, storesActions)(App)
