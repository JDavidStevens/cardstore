import React, { Component } from 'react';
import axios from 'axios';

export default class Admin extends Component {
  constructor() {
    super();

    this.state = {
      name: '',
      description: '',
      price: '',
      picture: '',
      products: []
    };

    this.createNewCard = this.createNewCard.bind(this);
    this.updatePrice = this.updatePrice.bind(this);
  }

  componentDidMount() {
    axios.get('/api/products').then(response => {
      console.log(response);
      this.setState({
        products: response.data
      });
    });
  }

  handleNewCardName(value) {
    this.setState({ name: value });
  }

  handleNewCardDescription(value) {
    this.setState({ description: value });
  }

  handleNewCardPrice(value) {
    this.setState({ price: value });
  }
  handleNewPicture(value) {
    this.setState({ picture: value });
  }
  createNewCard() {
    let { name, description, price, picture } = this.state;
    return axios
      .post('/api/product', {
        product_name: name,
        product_description: description,
        price: price,
        picture: picture
      })
      .then(response => {
        this.setState({ products: response.data });
      });
  }
  handleUpdatePrice(value) {
    this.setState({ price: value });
  }

  updatePrice(product_id, price) {
    console.log(product_id, price);
    axios.put(`/api/product/${product_id}`, { price }).then(results => {
      this.setState({ products: results.data });
      console.log(results);
    });
  }

  render() {
    console.log('this.state.products', this.state.products);
    let inventory = this.state.products.map((element, index) => {
      return (
        <div className="inventory-container" key={index}>
          <h2>{element.product_name}</h2>
          <h3>{element.product_description}</h3>
          <h3>{'$' + element.price}</h3>
          <img src={element.picture} alt="" />
          <input
            id="updatePrice"
            placeholder="Update Price"
            onChange={e => this.handleUpdatePrice(e.target.value)}
          />
          <button
            onClick={() =>
              this.updatePrice(element.product_id, this.state.price)
            }
          >
            Update
          </button>
          <button onClick={this.deleteProduct}>Delete</button>
        </div>
      );
    });
    return (
      <div>
        <div>
          <h3>New Card</h3>
          <input
            type="text"
            id="new-card-name"
            placeholder="Name"
            onChange={e => this.handleNewCardName(e.target.value)}
          />
          <input
            type="text"
            id="new-card-description"
            placeholder="Description"
            onChange={e => this.handleNewCardDescription(e.target.value)}
          />
          <input
            id="new-card-price"
            placeholder="Price"
            onChange={e => this.handleNewCardPrice(e.target.value)}
          />
          <br />
          <input
            type="text"
            id="new-card-img"
            placeholder="Image URL"
            onChange={e => this.handleNewPicture(e.target.value)}
          />
          <button onClick={this.createNewCard}>Add</button>
        </div>
        <div className="current-inventory">
          {inventory}
          {/* <input
            id="updatePrice"
            placeholder="Update Price"
            onChange={e => this.handleUpdatePrice(e.target.value)}
          />
          <button onClick={this.updatePrice}>Update</button>
          <button onClick={this.deleteProduct}>Delete</button> */}
        </div>
      </div>
    );
  }
}
