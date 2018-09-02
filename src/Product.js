/** It returns a product with description and comments and also allows to post a comment to a registered user */
import React, { Component } from 'react';
//import './App.css';
import StarRatingComponent from 'react-star-rating-component';


class RenderItems extends Component{ 
  /** To fetch a product */
  componentWillMount() {
    var indexReview = this.props.index;
    var url = 'https://smktesting.herokuapp.com/api/reviews/'+ indexReview; 
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
        /** Render a product */
          var index = this.props.index - 1;
          var product = this.props.listOtProducts[index];
          var source = 'https://smktesting.herokuapp.com/static/' + product.img;
            return (
              <div >
                <div className="product">
                <h3 >{product.title}</h3>
                <img src={source} alt='item in stock' />
                <h4>Product description</h4>
                <p>{product.text}</p>
                <h4>Leave your feedback</h4>
                 {/** Display a form to a registered user **/}
                 { 
                  this.props.token &&
                  <div>
                    <form onSubmit = { this.props.postComment } className="feedback">
                    <StarRatingComponent 
                      name="rate" 
                      starCount={5}
                      value={Number(this.props.rate)}
                      onStarClick={this.props.onStarClick}
                    />
                      
                    <div>
                        <textarea name="text" id="" cols="30" rows="10" onChange = { this.props.changeInput } value={this.props.text}></textarea>
                    </div>
                      
                      <button>Submit</button>
                    </form>
                    
                  </div>
                }
                <hr />
                { this.props.productReviews.map((item) => {
                  return  <div key={ item.id } className="reviews">
                            <p>Rate: {item.rate}</p>
                            <p>User: {item.created_by.username}</p>
                            <p>Comment: { item.text }</p>
                          </div>
                }) }
                </div>
               
                <p onClick = { this.props.toCatalog } className="linkToCat">To the Catalog</p>
            </div>          
            )            
      }     
}


export default RenderItems;
