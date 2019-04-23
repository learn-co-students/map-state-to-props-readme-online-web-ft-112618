import React, { Component } from 'react';
import { connect } from 'react-redux'
import './App.css';

class App extends Component {

  handleOnClick() {
    this.props.dispatch({
      type: 'INCREASE_COUNT',
    });
  }

  render() {
    return (
      <div className="App">
        <button onClick={(event) => this.handleOnClick()}>
          Click
        </button>
        <p>{this.props.items.length}</p>
      </div>
    );
  }

}

const mapStateToProps = (state) => {
  return { items: state.items } //(1) a function that listens to every change in the store and then (2) filters out the changes relevant to a particular component to (3) provide to that component.
}

export default connect(mapStateToProps)(App);
