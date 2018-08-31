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
                <div className="product">
                <h3 >{product.title}</h3>
                <img src={source} alt='item in stock' />
                <p>{product.text}</p>
                { this.props.productReviews.map((item, index) => {
                  return  <div key={ item.id } className="reviews">
                            <p>{item.rate}</p>
                            <p>{item.created_by.username}</p>
                            <p>{ item.text }</p>
                          </div>
                }) }
                </div>
                {
                  this.props.token &&
                  <div>
                    <form onSubmit = { this.props.postComment }>
                      <input name="rate" type="radio" id="one" value={ '1' } checked = { this.props.rate ==='1' } onChange = { this.props.changeInput } /><label htmlFor="one">1</label>
                      <input name="rate" type="radio" id="two" value={ '2' } checked = { this.props.rate ==='2' } onChange = { this.props.changeInput } /><label htmlFor="two">2</label>
                      <input name="rate" type="radio" id="three" value={ '3' } checked = { this.props.rate ==='3' } onChange = { this.props.changeInput } /><label htmlFor="three">3</label>
                      <input name="rate" type="radio" id="four" value={ '4' } checked = { this.props.rate ==='4' } onChange = { this.props.changeInput } /><label htmlFor="four">4</label>
                      <input name="rate" type="radio" id="five" value={ '5' } checked = { this.props.rate ==='5' } onChange = { this.props.changeInput } /><label htmlFor="five">5</label>
                      <textarea name="text" id="" cols="30" rows="10" onChange = { this.props.changeInput } value={this.props.text}></textarea>
                      <button>Submit</button>
                    </form>
                    
                  </div>
                }
            </div>          
            )            
      }     
}


export default RenderItems;
