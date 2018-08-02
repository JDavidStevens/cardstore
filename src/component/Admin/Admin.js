import React, { Component } from 'react';
import axios from 'axios';

export default class Admin extends Component {
  constructor() {
    super();

    this.state = {
      file: '',
      filename: '',
      filetype: '',
      img: ''
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
        img: ''
      });
    };

    reader.readAsDataURL(file);
  }

  sendPhoto(event) {
    return axios.post('/api/s3', this.state).then(response => {
      this.setState({ img: response.data.location });
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
      </div>
    );
  }
}
