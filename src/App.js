import React, { Component } from 'react';
import './App.css';
//import RenderItems from './Product.js'
import { Router, Route, hashHistory } from 'react-router'
import { Link } from 'react-router-dom'

class ListOfProducts extends Component{
  constructor (props) {
    super(props);
    this.state = {
      token: null,
      response: null
    }
  } 
  componentDidMount() {
    fetch('http://smktesting.herokuapp.com/api/products/')
    .then(result => {
      if(result.ok) {
        return result.json();
      }
      else {
        return Promise.reject(result.status);
      }
    }).then(result => {
      this.setState({response: result}, () => {
        return result;
      });
    })
      .catch(err => console.log(err));
  }
  render() {
    if (this.state.response === null) {
      return <p>Loading data</p>
    }
    else {
      var arrayOfData = this.state.response.map((item, index) => {
        var path = '/'+item.id;
        return (
          
          <div key={index}>

            <p><Link to={path}>{item.id}</Link></p>
          </div>
        )
       
      });
      console.log('arr: ', arrayOfData);
     return  arrayOfData
    }
    
  }
  
}



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
        <ListOfProducts />
      </div>
    );
  }
}

export default App;
