import React, { Component } from 'react';
import './App.css';
//import RenderItems from './Product.js'
import Products from './Product.js'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '', 
      token: null
    }
  }
  render() {
    return (
      <div className="App">
        <Products />
      </div>
    );
  }
}

export default App;
