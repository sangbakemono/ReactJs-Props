import React, { Component } from 'react';
import './App.css';
import Product from './components/Product';

class App extends Component {
  onClick() {
    console.log('Đây là app components');
  }

  render() {
    var products = [
      {
        id: 1,
        name: 'App Iphone XS Max',
        price: 25000000,
        images: 'https://cdn.tgdd.vn/Products/Images/42/190321/iphone-xs-max-gold-600x600.jpg',
        status: true
      },
      {
        id: 2,
        name: 'Samsung Galaxy Note 10',
        price: 23000000,
        images: 'https://www.91-img.com/pictures/130585-v7-samsung-galaxy-note-10-mobile-phone-large-1.jpg',
        status: true
      },
      {
        id: 3,
        name: 'Samsung Galaxy S10',
        price: 18000000,
        images: 'https://www.91-img.com/pictures/128392-v7-samsung-galaxy-s10-plus-mobile-phone-large-1.jpg',
        status: true
      },
    ];

    let elements = products.map((product, index) =>{
      let result ='';
      if(product.status){
        result= <Product 
                    key ={product.id}
                    price={product.price}
                    images={product.images}
                    status={product.status}>
                    {product.name}
                </Product>
      }
        return result;
    });
    return (
      <div>        
        <nav className="navbar navbar-inverse">
          <a className="navbar-brand" href="/">Title</a>
          <ul className="nav navbar-nav">
            <li className="active">
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/">Link</a>
            </li>
          </ul>
        </nav>        
        <div className="container">          
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
              {elements}
            </div>           
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">              
              <button type="button" className="btn btn-warning" onClick={this.onClick}>
                 Click me!
              </button>              
            </div>
            
          </div>          
        </div>       
      </div>
    );
  }
}

export default App;
