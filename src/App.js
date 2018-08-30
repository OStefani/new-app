import React, { Component } from 'react';
import './App.css';
//import RenderItems from './Product.js'
import Products from './Product.js';
import ListOfProducts from './ListOfProducts';
import RegisterComponent from './RegisterComponent';
import RegistrationForm from './RegistrationForm.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      response: [],
      productReviews:[],
      productsIndex: null,
      showForm: false,
      username: 'Olga',
      password: '',
      registered: false,
      token: null
    }
    this.handleLoad = this.handleLoad.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.hendleLoadReview = this.hendleLoadReview.bind(this);
    this.handleClickRegister = this.handleClickRegister.bind(this);
    this.changeInput = this.changeInput.bind(this);
    this.submitForm = this.submitForm.bind(this);
  }
  handleLoad(someData) {    
    this.setState({response: someData});
  }
  handleClick(index) {
    this.setState({ productsIndex: index});
  }
  hendleLoadReview(reviews) {
    this.setState({ productReviews: reviews });
  }
  handleClickRegister() {
    this.setState({ showForm: true });
  }
  changeInput(event) {
    this.setState({ [event.target.name]: event.target.value  });
  }
  submitForm(event) {
    event.preventDefault();
    
    const headerObjLog = new Headers();
    headerObjLog.append('Content-Type', 'application/json');

    var bodyObj = {
      username: event.target.username.value,
      password: event.target.password.value
    }
    var initObj = {
      method: 'POST',
      headers: headerObjLog,
      body: JSON.stringify(bodyObj), 
      credentials: 'same-origin',

    }
    fetch('http://smktesting.herokuapp.com/api/register', initObj)
      .then(response => {
        if (response.ok) return response.json();
        else return Promise.reject(response.status);
      })
      .then(result => {
        console.log(result);
      })
      .catch(err => console.log(err));
  }
  render() {
    
      if(!this.state.productsIndex && !this.state.showForm) {
        return (
          <div className="App">
            <RegisterComponent handleClickRegister= { this.handleClickRegister }  />
             <ListOfProducts handleLoad={ this.handleLoad } listOtProducts = { this.state.response } handleClick = { this.handleClick } />
          </div>
        )
      }
      else if(this.state.productsIndex && !this.state.showForm) {
        return (
          <div>
            <RegisterComponent handleClickRegister= { this.handleClickRegister } />
            <Products index={ this.state.productsIndex } listOtProducts = { this.state.response } reviews = { this.state.productReviews } hendleLoadReview = {  
              this.hendleLoadReview } productReviews = { this.state.productReviews } />
          </div>
        )
      }
      if (this.state.showForm) {
        return <div><RegistrationForm username = { this.state.username } password = { this.state.password } changeInput= { this.changeInput } submitForm = { this.submitForm } /></div>
      }
      
     
      
  
  }
}

export default App;
