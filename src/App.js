import React, { Component } from 'react';
import './App.css';
import Aux from './hoc/hoc';
import Cards from './cards/cards';

class App extends Component {
  render() {
    return (
      <Aux>
        <Cards />
      </Aux>
    )
  } 
}

export default App;
