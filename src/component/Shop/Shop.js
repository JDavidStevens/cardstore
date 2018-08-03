import React, { Component } from 'react';
import axios from 'axios';

export default class Shop extends Component {
  constructor() {
    super();

    this.state = {
      products: []
    };
  }

  componentDidMount() {
    axios.get('/api/products').then(response => {
      console.log(response);
      this.setState({
        products: response.data
      });
    });
  }

  render() {
    let productDisplay = this.state.products.map((element, index) => {
      return (
        <div className="product-container" key={index}>
          <h2>{element.name}</h2>
          <img src={element.picture} alt="" />
          <h3>{'$' + element.price}</h3>
          <button onClick={() => this.props.addToShoppingCart(element)}>
            Purchase!
          </button>
        </div>
      );
    });
    return <div className="storefront-container">{productDisplay}</div>;
  }
}
