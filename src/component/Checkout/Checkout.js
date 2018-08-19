import React, { Component } from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

class Checkout extends Component {
  onToken = token => {
    token.card = void 0;
    console.log('token', token);
    axios.post('/api/payment', { token, amount: 100 }).then(response => {
      alert('we are in business');
    });
  };
  render() {
    return (
      <div className="Checkout">
        <StripeCheckout
          token={this.onToken}
          stripeKey="pk_test_jwGtWQMpsyUYQMo7GcDUsAPr"
        />
      </div>
    );
  }
}
export default Checkout;
