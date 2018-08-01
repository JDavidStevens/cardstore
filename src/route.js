import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './component/Home';
import Shop from './component/Shop';
import Cart from './component/Cart';
import Admin from './component/Admin';

export default (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/shop" component={Shop} />
    <Route path="/cart" component={Cart} />
    <Route path="/admin" component={Admin} />
  </Switch>
);
