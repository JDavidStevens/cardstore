const express = require('express');
const bodyParser = require('body-parser');
const productsController = require('./products_controller');
const customerController = require('./customer_controller');
const ordersContoller = require('./orders_controller');
// const authController = require('./auth_controller');
const massive = require('massive');
const session = require('express-session');

//const config = require('./config');
// const stripe = require('stripe')(config.secret_key);

const cors = require('cors');
const axios = require('axios');
require('dotenv').config();

const app = express();
app.use(express.static(`${__dirname}/../build`));

app.use(bodyParser.json());
app.use(cors());

const {
  REACT_APP_DOMAIN,
  REACT_APP_CLIENT_ID,
  CLIENT_SECRET,
  SESSION_SECRET,
  CONNECTION_STRING
} = process.env;

app.use(
  session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: false
  })
);

massive(CONNECTION_STRING).then(dbInstance => {
  app.set('db', dbInstance);
});

app.get('/auth/callback', async (req, res) => {
  let payload = {
    client_id: REACT_APP_CLIENT_ID,
    client_secret: CLIENT_SECRET,
    code: req.query.code,
    grant_type: 'authorization_code',
    redirect_uri: `http://${req.headers.host}/auth/callback`
  };

  let resWithToken = await axios.post(
    `https://${REACT_APP_DOMAIN}/oauth/token`,
    payload
  );

  let resWithUserData = await axios.get(
    `https://${REACT_APP_DOMAIN}/userinfo?access_token=${
      resWithToken.data.access_token
    }`
  );

  const db = req.app.get('db');
  console.log('hit');
  let { sub, email, name, picture } = resWithUserData.data;
  let foundUser = await db.read_customer([sub]);
  if (foundUser[0]) {
    req.session.user = foundUser[0];

    res.redirect('/#/shop');
  } else {
    let createdUser = await db.create_customer([sub, name, email, picture]);

    req.session.user = createdUser[0];
    res.redirect('/#/shop');
  }
});

//products
app.post('/api/product', productsController.create);
app.get('/api/products', productsController.getAll);
app.get('/api/product/:id', productsController.getOne);
app.put('/api/product/:id', productsController.update);
app.delete('/api/product/:id', productsController.delete);

//customers
app.post('/api/customer', customerController.create);
app.get('/api/customers', customerController.getAll);
app.get('/api/customer/:id', customerController.getOne);

//orders
app.post('/api/order', ordersContoller.create);
app.get('/api/orders', ordersContoller.read);

//authentication
app.get('/api/user-data', (req, res) => {
  console.log(req.session);
  if (req.session.user) {
    res.status(200).send(req.session.user);
  } else {
    res.status(401).send('Nice try!');
  }
});

app.post('/api/payment', function(req, res, next) {
  // convert amount to pennies
  const amountArray = req.body.amount.toString().split('');
  const pennies = [];
  for (var i = 0; i < amountArray.length; i++) {
    if (amountArray[i] === '.') {
      if (typeof amountArray[i + 1] === 'string') {
        pennies.push(amountArray[i + 1]);
      } else {
        pennies.push('0');
      }
      if (typeof amountArray[i + 2] === 'string') {
        pennies.push(amountArray[i + 2]);
      } else {
        pennies.push('0');
      }
      break;
    } else {
      pennies.push(amountArray[i]);
    }
  }
  const convertedAmt = parseInt(pennies.join(''));

  const charge = stripe.charges.create(
    {
      amount: convertedAmt,
      // amount in cents, again
      currency: 'usd',
      source: req.body.token.id,
      description: 'Test charge from react app'
    },
    function(err, charge) {
      if (err) return res.sendStatus(500);
      return res.sendStatus(200);
      // if (err && err.type === 'StripeCardError') {
      // The card has been declined
      // }
    }
  );
});

const port = 3005;
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
