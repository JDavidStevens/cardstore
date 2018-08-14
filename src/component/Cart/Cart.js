import React, { Component } from 'react';
import Checkout from '../Checkout/Checkout';

export default class Cart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      shoppingCart: this.props.shoppingCart
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      shoppingCart: nextProps.shoppingCart
    });
  }

  render() {
    let shoppingCartDisplay = this.state.shoppingCart.map((element, index) => {
      return (
        <div className="shopping-cart-product-container" key={index}>
          <img src={element.image} alt="" />
          <div className="shopping-cart-info">
            <h2>{element.product_name}</h2>
            <h2>{'$' + element.price}</h2>
            <div className="shopping-cart-button-container">
              <Checkout />
              <button
                className="shopping-cart-delete-button"
                onClick={() => this.props.removeFromShoppingCart(element)}
              >
                Remove
              </button>
            </div>
          </div>
        </div>
      );
    });

    return (
      <div className="shopping-cart-container">
        {shoppingCartDisplay[0] ? (
          shoppingCartDisplay
        ) : (
          <div className="make-a-purchase">
            <h1>Your shopping cart is empty</h1>
          </div>
        )}
      </div>
    );
  }
}
