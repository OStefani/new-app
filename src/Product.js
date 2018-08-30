import React, { Component } from 'react';
//import './App.css';

class RenderItems extends Component{ 
  
  componentWillMount() {
    var indexReview = this.props.index;
    var url = 'http://smktesting.herokuapp.com/api/reviews/'+ indexReview; 
    fetch(url)
      .then(response => {
        if(response.ok) return response.json();
        else return Promise.reject(response.status);
      })
      .then(result => {
        this.props.hendleLoadReview(result); 
      })
      .catch(err => console.log(err)); 
  }
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
                { this.props.productReviews.map((item, index) => {
                  return  <div key={ item.id }>
                            <p>{item.rate}</p>
                            <p>{item.created_by.username}</p>
                            <p>{ item.text }</p>
                          </div>
                }) }
            </div>          
            )            
      }     
}


export default RenderItems;
