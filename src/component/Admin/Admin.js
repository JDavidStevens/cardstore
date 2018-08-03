import React, { Component } from 'react';
import axios from 'axios';

export default class Admin extends Component {
  constructor() {
    super();

    this.state = {
      file: '',
      filename: '',
      filetype: '',
      img: '',
      name: '',
      description: '',
      picture: ''
    };

    this.handlePhoto = this.handlePhoto.bind(this);
    this.sendPhoto = this.sendPhoto.bind(this);
  }
  handlePhoto(event) {
    const reader = new FileReader();

    const file = event.target.files[0];

    reader.onload = photo => {
      this.setState({
        file: photo.target.result,
        filename: file.name,
        filetype: file.type,
        img: '',
        newProduct: {}
      });
    };

    reader.readAsDataURL(file);
  }

  sendPhoto(event) {
    return axios.post('/api/s3', this.state).then(response => {
      this.setState({ img: response.data.location });
    });
  }

  handleNewCardName(value) {
    this.setState({ name: value });
  }

  handleNewCardDescription(value) {
    this.setState({ description: value });
  }
  handleNewPicture(value) {
    this.setState({ picture: value });
  }
  createNewCard(event) {
    return axios.post('api/product').then(response => {
      this.setState({ newProduct: response.data });
    });
  }

  render() {
    return (
      <div>
        <input type="file" id="real" onChange={this.handlePhoto} />
        <button onClick={this.sendPhoto}>upload</button>
        <div>
          <img src={this.state.img} alt="none" />
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
      </div>
    );
  }
}
