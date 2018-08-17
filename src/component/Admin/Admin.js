// import React, { Component } from 'react';
// import axios from 'axios';
// import { Grid, Row, Col, Button } from 'react-bootstrap';
// import Orders from './orders';
// import NavBar from '../NavBar/NavBar';
// import './admin.css';

// export default class Admin extends Component {
//   constructor() {
//     super();

//     this.state = {
//       products: [],
//       name: '',
//       description: '',
//       price: '',
//       picture: ''
//     };

//     this.createNewCard = this.createNewCard.bind(this);
//     this.updatePrice = this.updatePrice.bind(this);
//     this.deleteProduct = this.deleteProduct.bind(this);
//   }

//   componentDidMount() {
//     return axios.get('/api/products').then(response => {
//       console.log(response);
//       this.setState({
//         products: response.data
//       });
//     });
//   }

//   handleNewCardName(value) {
//     this.setState({ name: value });
//   }

//   handleNewCardDescription(value) {
//     this.setState({ description: value });
//   }

//   handleNewCardPrice(value) {
//     this.setState({ price: value });
//   }
//   handleNewPicture(value) {
//     this.setState({ picture: value });
//   }
//   createNewCard() {
//     let { name, description, price, picture } = this.state;
//     return axios
//       .post('/api/product', {
//         product_name: name,
//         product_description: description,
//         price: price,
//         picture: picture
//       })
//       .then(response => {
//         this.setState({ products: response.data });
//       });
//   }
//   handleUpdatePrice(value) {
//     this.setState({ price: value });
//   }

//   updatePrice(product_id, price) {
//     console.log(product_id, price);

//     axios
//       .put(`/api/product/${product_id}/`, { price })
//       //price and product_id are correct up to this point
//       .then(results => {
//         console.log(results);
//         this.setState({ products: results.data });

//         // products are not defined
//       });
//   }

//   deleteProduct(product_id) {
//     axios.delete(`/api/product/${product_id}`).then(results => {
//       this.setState({ products: results.data });
//     });
//   }

//   render() {
//     console.log('this.state.products', this.state.products);
//     let inventory =
//       this.state.products &&
//       this.state.products.map(element => {
//         return (
//           <Grid>
//             <Row className="inventory-container" key={element.product_id}>
//               <Col xs={12} sm={6} className="inventory-wrapper">
//                 <h3>
//                   {element.product_name}
//                   <Button
//                     bsStyle="primary"
//                     onClick={() => this.deleteProduct(element.product_id)}
//                   >
//                     Remove
//                   </Button>
//                 </h3>

//                 <h4>{element.product_description}</h4>
//                 <div>
//                   <br />
//                   <img src={element.picture} alt="add" className="pic" />
//                   <br />
//                 </div>
//                 <div>
//                   <h4>
//                     {'$' + element.price}
//                     <input
//                       className="price-input"
//                       id="updatePrice"
//                       placeholder="Update Price"
//                       onChange={e => this.handleUpdatePrice(e.target.value)}
//                     />
//                     <Button
//                       bsStyle="primary"
//                       onClick={() =>
//                         this.updatePrice(element.product_id, this.state.price)
//                       }
//                     >
//                       Update
//                     </Button>
//                   </h4>
//                 </div>
//               </Col>
//             </Row>
//           </Grid>
//         );
//       });
//     return (
//       <div>
//         <NavBar />
//         <div className="admin">
//           <div className="inventory">
//             <h1>Current Inventory</h1>
//             {inventory}
//           </div>
//           <div>
//             <h3>Add a New Card:</h3>
//             <input
//               type="text"
//               id="new-card-name"
//               placeholder="Name"
//               onChange={e => this.handleNewCardName(e.target.value)}
//             />
//             <input
//               type="text"
//               id="new-card-description"
//               placeholder="Description"
//               onChange={e => this.handleNewCardDescription(e.target.value)}
//             />
//             <input
//               id="new-card-price"
//               placeholder="Price"
//               onChange={e => this.handleNewCardPrice(e.target.value)}
//             />
//             <br />
//             <input
//               type="text"
//               id="new-card-img"
//               placeholder="Image URL"
//               onChange={e => this.handleNewPicture(e.target.value)}
//             />
//             <Button bsStyle="primary" onClick={this.createNewCard}>
//               Add
//             </Button>
//           </div>
//           <div className="orders">
//             <Orders />
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

import React, { Component } from 'react';
import axios from 'axios';
import { Grid, Row, Col, Button } from 'react-bootstrap';
import Orders from './orders';
import NavBar from '../NavBar/NavBar';
import Header from '../Header/Header';
import './admin.css';

export default class Admin extends Component {
  constructor() {
    super();

    this.state = {
      products: [],
      name: '',
      description: '',
      price: '',
      picture: ''
    };

    this.createNewCard = this.createNewCard.bind(this);
    this.updatePrice = this.updatePrice.bind(this);
    this.deleteProduct = this.deleteProduct.bind(this);
  }

  componentDidMount() {
    return axios.get('/api/products').then(response => {
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

    axios
      .put(`/api/product/${product_id}/`, { price })
      //price and product_id are correct up to this point
      .then(results => {
        console.log(results);
        this.setState({ products: results.data });

        // products are not defined
      });
  }

  deleteProduct(product_id) {
    axios.delete(`/api/product/${product_id}`).then(results => {
      this.setState({ products: results.data });
    });
  }

  render() {
    console.log('this.state.products', this.state.products);
    let inventory =
      this.state.products &&
      this.state.products.map(element => {
        return (
          <Grid>
            <Row className="inventory-container" key={element.product_id}>
              <Col xs={12} sm={6} className="inventory-wrapper">
                <h3>
                  {element.product_name}
                  <Button
                    bsStyle="primary"
                    onClick={() => this.deleteProduct(element.product_id)}
                  >
                    Remove
                  </Button>
                </h3>

                <h4>{element.product_description}</h4>
                <div>
                  <br />
                  <img src={element.picture} alt="add" className="pic" />
                  <br />
                </div>
                <div>
                  <h4>
                    {'$' + element.price}
                    <input
                      className="price-input"
                      id="updatePrice"
                      placeholder="Update Price"
                      onChange={e => this.handleUpdatePrice(e.target.value)}
                    />
                    <Button
                      bsStyle="primary"
                      onClick={() =>
                        this.updatePrice(element.product_id, this.state.price)
                      }
                    >
                      Update
                    </Button>
                  </h4>
                </div>
              </Col>
            </Row>
          </Grid>
        );
      });
    return (
      <div>
        <NavBar />
        <div className="admin">
          <Grid>
            <div className="inventory">
              <h1>Current Inventory</h1>
              {inventory}
            </div>
            <div>
              <Row>
                <Col xs={12} sm={6}>
                  <h3>Add a New Card:</h3>
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
                    onChange={e =>
                      this.handleNewCardDescription(e.target.value)
                    }
                  />
                  <input
                    id="new-card-price"
                    placeholder="Price"
                    onChange={e => this.handleNewCardPrice(e.target.value)}
                  />

                  <input
                    type="text"
                    id="new-card-img"
                    placeholder="Image URL"
                    onChange={e => this.handleNewPicture(e.target.value)}
                  />

                  <Button bsStyle="primary" onClick={this.createNewCard}>
                    Add
                  </Button>
                </Col>
              </Row>
            </div>
            <div className="orders">
              <Row>
                <Col xs={12} sm={6}>
                  <Orders />
                </Col>
              </Row>
            </div>
          </Grid>
        </div>
      </div>
    );
  }
}
