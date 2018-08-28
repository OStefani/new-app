import React, { Component } from 'react';
import './App.css';

class RenderItems extends Component{
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
            console.log(item);
            var source = 'http://smktesting.herokuapp.com/static/' + item.img;
            return (
              <div key={index}>
                <p>{item.id}</p>
                <h3 >{item.title}</h3>
                <img src={source} alt='item in stock' />
                <p>{item.text}</p>
              </div>
            )
           
          });
          console.log('arr: ', arrayOfData);
         return  arrayOfData
        }
        
      }
      
}


export default RenderItems;
