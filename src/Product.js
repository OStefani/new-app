import React, { Component } from 'react';
import './App.css';

class RenderItems extends Component{ 
      render() {
          var index = this.props.index - 1;
          var product = this.props.listOtProducts[index];
            var source = 'http://smktesting.herokuapp.com/static/' + product.img;
            return (
              <div >
                <p>{product.id}</p>
                <h3 >{product.title}</h3>
                <img src={source} alt='item in stock' />
                <p>{product.text}</p>
            </div>          
            )            
      }     
}


export default RenderItems;
