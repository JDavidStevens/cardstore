import React, { Component } from 'react';
import axios from 'axios';
import S3 from './S3';

export default class Admin extends Component {
  constructor() {
    super();

    this.state = {
      products: [],
      name: '',
      description: '',
      price: '',
      picture: '',
      file: '',
      filename: '',
      filetype: '',
      img: ''
    };

    this.createNewCard = this.createNewCard.bind(this);
    this.updatePrice = this.updatePrice.bind(this);
    this.deleteProduct = this.deleteProduct.bind(this);
    this.handlePhoto = this.handlePhoto.bind(this);
    this.sendPhoto = this.sendPhoto.bind(this);
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

  updatePrice(price, product_id) {
    console.log(product_id, price);

    axios
      .put(`/api/product/${product_id}/${price}`)
      //price and product_id are correct up to this point
      .then(results => {
        this.setState({ products: results.data.products });
        console.log(results);
        //results and products are not defined
      });
  }

  deleteProduct(product_id) {
    axios.delete(`/api/product/${product_id}`).then(results => {
      this.setState({ products: results.data.products });
    });
  }

  handlePhoto(event) {
    const reader = new FileReader();
    // the file itself is located here
    const file = event.target.files[0];

    // this is an event handler and will not actaully run untill the code on line 39 finishes running
    reader.onload = photo => {
      // the photo param here is the processed image from the reader.
      this.setState({
        file: photo.target.result,
        filename: file.name,
        filetype: file.type,
        img: ''
      });
    };
    // take the file from the input field and process it at a DataURL (a special way to interpret files)
    reader.readAsDataURL(file);
  }
  sendPhoto(event) {
    return axios.post('/api/s3', this.state).then(response => {
      this.setState({ img: response.data.location });
    });
  }

  render() {
    console.log('this.state.products', this.state.products);
    let inventory =
      this.state.products &&
      this.state.products.map(element => {
        return (
          <div className="inventory-container" key={element.product_id}>
            <h2>{element.product_name}</h2>
            <h3>{element.product_description}</h3>
            <h3>{'$' + element.price}</h3>
            <img src={element.picture} alt="image" />
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
            <button onClick={() => this.deleteProduct(element.product_id)}>
              Delete
            </button>
          </div>
        );
      });
    return (
      <div>
        <div className="S3">
          <input type="file" id="real" onChange={this.handlePhoto} />
          <button onClick={this.sendPhoto}>upload</button>
          <div>
            <img src={this.state.img} alt="none" />
          </div>
        </div>

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
        <div className="current-inventory">{inventory}</div>
      </div>
    );
  }
}
