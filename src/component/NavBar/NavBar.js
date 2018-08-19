import React, { Component } from 'react';
import './NavBar.css';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default class NavBar extends Component {
  constructor() {
    super();
    this.state = {};
  }

  // login() {
  //   let { REACT_APP_DOMAIN, REACT_APP_CLIENT_ID } = process.env;
  //   let url = `${window.location.origin}/auth/callback`;

  //   window.location = `https://${REACT_APP_DOMAIN}/authorize?client_id=${REACT_APP_CLIENT_ID}&scope=openid%20profile%20email&redirect_uri=${url}&response_type=code`;
  // }

  logout() {
    axios.get('/api/logout').then(res => {
      this.props.history.push('/');
    });
  }

  render() {
    return (
      <Navbar default collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <a>Inkin' Cute Ideas!</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>
            <NavItem eventKey={1} componentClass={Link} href="/shop" to="/shop">
              Shop
            </NavItem>
            <NavItem eventKey={2} componentClass={Link} href="/cart" to="/cart">
              Cart
            </NavItem>
            <NavItem
              eventKey={3}
              componentClass={Link}
              href="/"
              to="/"
              onClick={this.logout}
            >
              Logout
            </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
