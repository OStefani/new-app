import React, { Component } from 'react';
import './App.css';

class ListOfProducts extends Component {   
    
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
          console.log('res: ', result);
          this.props.handleLoad(result);
          
        })
          .catch(err => console.log(err));
      }
      
    render() {
        if (this.props.listOtProducts === null) {
            return <p>Loading data</p>
        }
        else {
            var arrayOfData = this.props.listOtProducts.map((item, index) => {  
              console.log(item.id);          
              return (
                <div key={index} >
                  <p onClick = { () => { this.props.handleClick(item.id) } }>{item.id}</p>
                </div>
              )            
            });
           return  arrayOfData
          }
    }
}
export default ListOfProducts;