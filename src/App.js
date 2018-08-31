import React, { Component } from 'react';
import './App.css';
//import RenderItems from './Product.js'
import Products from './Product.js';
import ListOfProducts from './ListOfProducts';
import RegisterComponent from './RegisterComponent';
import RegistrationForm from './RegistrationForm.js';
import LoginForm from './LoginForm.js'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      response: [],
      productReviews:[],
      productsIndex: null,
      showForm: false,
      showLoginForm: false,
      username: 'user10',
      password: 'user',
      registered: false,
      token: null,
      message: '',
      text: 'A comment',
      rate: '3'
    }
    this.handleLoad = this.handleLoad.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.hendleLoadReview = this.hendleLoadReview.bind(this);
    this.handleClickRegister = this.handleClickRegister.bind(this);
    this.changeInput = this.changeInput.bind(this);
    this.submitForm = this.submitForm.bind(this);
    this.handleClickLogin = this.handleClickLogin.bind(this);
    this.submitLoginForm = this.submitLoginForm.bind(this);
    this.toCatalog = this.toCatalog.bind(this);
    this.logOut = this.logOut.bind(this);
    this.postComment = this.postComment.bind(this);
  }
  /** To display list of items */
  handleLoad(someData) {    
    this.setState({response: someData});
  }
  /** Click the product from the catalog */
  handleClick(index) {
    this.setState({ productsIndex: index});
  }
  hendleLoadReview(reviews) {
    this.setState({ productReviews: reviews });
  }
  /** To handle click on register button */
  handleClickRegister() {
    this.setState({ showForm: true });
  }
  /** To handle click on login button */
  handleClickLogin() {
    this.setState({ showLoginForm: true });
  }
  changeInput(event) {
    if(event.target.type === 'radio') {
      this.setState({ [event.target.name]: event.target.value }, ()=> {
        console.log('rate: ', this.state.rate);
      });
    }
    else {
      this.setState({ [event.target.name]: event.target.value  });
    }
   
  }
  /** Submit registration form */
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
    }
    fetch('http://smktesting.herokuapp.com/api/register/', initObj)
      .then(response => {
        if (response.ok) return response.json();
        else return Promise.reject(response.status);
      })
      .then(result => {
        if(result.success) {
          this.setState({ token: result.token, message: 'registered successful' }, ()=> {
          });
        }
        else if (!result.success) {
          this.setState({ message: result.message }, () => {
          });
        }
      })
      .catch(err => console.log(err));
  }
/** Submit login form */
  submitLoginForm(event) {
    event.preventDefault();    
    const headerObjLog = new Headers();
    headerObjLog.append('Content-Type', 'application/json');
    
    var bodyObj = {
      /**username: event.target.username.value,
      password: event.target.password.value**/
      username: this.state.username,
      password: this.state.password
    }
    var initObj = {
      method: 'POST',
      headers: headerObjLog,
      body: JSON.stringify(bodyObj)
    }
    fetch('http://smktesting.herokuapp.com/api/login/', initObj)
      .then(response => {
        if (response.ok) return response.json();
        else return Promise.reject(response.status);
      })
      .then(result => {
        if(result.success) {
          this.setState({ token: result.token, message: 'login successful' });
        }
        else if (!result.success) {
          this.setState({ message: result.message });
        }
      })
      .catch(err => console.log(err));
  }
  /** To the catalog */ 
  toCatalog() {
    this.setState({ productsIndex: null, showForm: false, showLoginForm: false });
  }
  /** Logout */
  logOut() {
    this.setState({ token: null });
  }
  /** Post a comment */
    postComment(event) {
      event.preventDefault();
      const headerObj = new Headers();
      const token = "Token " + this.state.token;
      headerObj.append('Authorization', token);
      console.log('token: ', this.state.token);

      /**const bodyObj = {
        text: event.target.text.value,
        rate: event.target.rate.value
      };**/
      var form = new FormData(event.target);
      //form.append("text", "some text 2");
      //form.append("rate", "4");
      
      const initObj = {
        method: 'POST',
        headers: headerObj,
        body: form,
        credentials: 'same-origin'
      };

      const url = 'http://smktesting.herokuapp.com/api/reviews/' + (this.state.productsIndex);
      fetch(url, initObj)
        .then(response => {
          if (response.ok) return response.json();
          else return Promise.reject(response.status);
        })
        .then(result => {
          console.log('result: ', result);
        })
        .catch(err => console.log(err));
    }
  render() {    
      if(!this.state.productsIndex && !this.state.showForm && !this.state.showLoginForm) {
        return (
          <div className="App">
            <RegisterComponent handleClickRegister= { this.handleClickRegister } handleClickLogin = { this.handleClickLogin } token = {this.state.token} logOut = {this.logOut} />
             <ListOfProducts handleLoad={ this.handleLoad } listOtProducts = { this.state.response } handleClick = { this.handleClick } />
          </div>
        )
      }
      else if(this.state.productsIndex && !this.state.showForm && !this.state.showLoginForm) {
        return (
          <div>
            <RegisterComponent handleClickRegister= { this.handleClickRegister } token = {this.state.token} logOut = {this.logOut} />
            <Products index={ this.state.productsIndex } listOtProducts = { this.state.response } reviews = { this.state.productReviews } hendleLoadReview = { this.hendleLoadReview } productReviews = { this.state.productReviews } changeInput={ this.changeInput } token = { this.state.token } postComment = {this.postComment} text={ this.state.text } rate = { this.state.rate } />
          </div>
        )
      }
      if (this.state.showForm) {
        return <div>
                  <RegistrationForm username = { this.state.username } password = { this.state.password } changeInput= { this.changeInput } submitForm = { this.submitForm } message = { this.state.message } toCatalog = { this.toCatalog }/>
              </div>
      }
      if (this.state.showLoginForm) {
        return <div>
                  <LoginForm username = { this.state.username } password = { this.state.password } changeInput= { this.changeInput } submitLoginForm = { this.submitLoginForm } message = { this.state.message } toCatalog = { this.toCatalog } />
              </div>;
      }
 
  }
}

export default App;
