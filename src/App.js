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
      productReviews:[],
      productsIndex: null,
      username: '',
      password: '', 
      token: null
    }
    this.handleLoad = this.handleLoad.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.hendleLoadReview = this.hendleLoadReview.bind(this);
  }
  handleLoad(someData) {    
    this.setState({response: someData});
  }
  handleClick(index) {
    this.setState({ productsIndex: index});
  }
  hendleLoadReview(reviews) {
    console.log('loaded: ', reviews);
    this.setState({ productReviews: reviews });
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
            <Products index={ this.state.productsIndex } listOtProducts = { this.state.response } reviews = { this.state.productReviews } hendleLoadReview = {  
              this.hendleLoadReview } productReviews = { this.state.productReviews } />
          </div>
        )
      }
     
      
  
  }
}

export default App;
