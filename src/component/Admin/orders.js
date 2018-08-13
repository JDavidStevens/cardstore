import React, { Component } from 'react';
import axios from 'axios';

export default class orders extends Component {
  constructor() {
    super();

    this.state = {
      orderInfo: []
    };
  }

  componentDidMount() {
    axios.get('/api/orders').then(response => {
      console.log(response);
      this.setState({
        orderInfo: response.data
      });
    });
  }
  render() {
    let orderTracker = this.state.orderInfo.map(element => {
      return (
        <div className="orderTracker" key={element.order_id}>
          <h3>{element.name}</h3>
          <h3>{element.product_name}</h3>
        </div>
      );
    });
    return (
      <div>
        <h1>Client Orders</h1>
        <ul>
          <li>{orderTracker}</li>
        </ul>
      </div>
    );
  }
}
