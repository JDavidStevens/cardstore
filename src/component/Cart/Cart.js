import React, { Component } from 'react';
// import axios from 'axios';
// import StripeCheckout from 'react-stripe-checkout';
// import Checkout from './Checkout/Checkout';

export default class Cart extends Component {
  // onToken = token => {
  //   token.card = void 0;
  //   console.log('token', token);
  //   axios
  //     .post('http://localhost:3005/api/payment', { token, amount: 100 })
  //     .then(response => {
  //       alert('we are in business');
  //     });
  // };
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
            <h2>{element.name}</h2>
            <h2>{'$' + element.price}</h2>
            <div className="shopping-cart-button-container">
              <button
                className="shopping-cart-button"
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

        {/* <StripeCheckout
          token={this.onToken}
          stripeKey={stripe.pub_key}
          amount={1000}
        /> */}
      </div>
    );
  }
}
