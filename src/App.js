import React, { Component } from 'react';
import './App.css';
import RenderItems from './Product.js'

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
      
      this.state.token &&
      <div className="App">
        <RenderItems />
      </div>
    );
  }
}

export default App;
