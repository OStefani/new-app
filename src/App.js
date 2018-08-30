import React, { Component } from 'react';
import './App.css';
//import RenderItems from './Product.js'
import Products from './Product.js';
import ListOfProducts from './ListOfProducts';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      response: [],
      productsIndex: null,
      username: '',
      password: '', 
      token: null
    }
    this.handleLoad = this.handleLoad.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
  handleLoad(someData) {    
    this.setState({response: someData});
  }
  handleClick(index) {
    console.log('loaded: ', index);
    this.setState({ productsIndex: index});
  }
  render() {
    
      if(!this.state.productsIndex) {
        return (
          <div className="App">
             <ListOfProducts handleLoad={ this.handleLoad } listOtProducts = { this.state.response } handleClick = { this.handleClick } />
          </div>
        )
      }
      if(this.state.productsIndex) {
        return (
          <div>
            <Products index={ this.state.productsIndex } listOtProducts = { this.state.response } />
          </div>
        )
      }
     
      
  
  }
}

export default App;
