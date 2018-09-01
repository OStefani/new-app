/** A list of products */
import React, { Component } from 'react';
//import './ListOfProducts.css';

class ListOfProducts extends Component {   
    
    componentDidMount() {
        fetch('https://smktesting.herokuapp.com/api/products/')
        .then(result => {
          if(result.ok) {
            return result.json();
          }
          else {
            return Promise.reject(result.status);
          }
        }).then(result => {
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
              return (
                <div key={index} className="listOfProducts" >
                  <p onClick = { () => { this.props.handleClick(item.id) } } >{item.title}</p>
                </div>
              )            
            });
           return  arrayOfData
          }
    }
}
export default ListOfProducts;