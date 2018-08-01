const express = require('express');
const bodyParser = require('body-parser');
const controller = require('./controller');
const massive = require('massive');
require('dotenv').config();

const app = express();

app.use(bodyParser.json());

const{
  REACT_APP_DOMAIN,
  REACT_APP_CLIENT_ID,
  CLIENT_SECRET,
  SESSION_SECRET,
  CONNECTION_STRING
}

massive(CONNECTION_STRING)
  .then(dbInstance => {
    app.set('db', dbInstance);
  })
  .catch(err => console.log(err));

 

  // app.use(
  //   session({
  //     secret: SESSION_SECRET,
  //     resave: false,
  //     saveUninitialized: false
  //   }) 
  // )

  // app.get('/auth/callback', async (req, res) => {
    
  //   let payload = {
  //     client_id: REACT_APP_CLIENT_ID,
  //     client_secret: CLIENT_SECRET,
  //     code: req.query.code,
  //     grant_type: 'authorization_code',
  //     redirect_uri: `http://${req.headers.host}/auth/callback`
  //   };
  
    
  //   let resWithToken = await axios.post(
  //     `https://${REACT_APP_DOMAIN}/oauth/token`,
  //     payload
  //   );
    
  
  //   let resWithUserData = await axios.get(
  //     `https://${REACT_APP_DOMAIN}/userinfo?access_token=${
  //       resWithToken.data.access_token
  //     }`
  //   );
  
  //   const db = req.app.get('db');
  //   let { sub, email, name, picture } = resWithUserData.data;
  //   let foundUser = await db.find_user([sub]);
  //   if (foundUser[0]) {
      
  //     req.session.user = foundUser[0];
      
  //     res.redirect('/#/cart');
  //   } else {
      
  //     let createdUser = await db.create_user([name, email, sub, picture]);
      
  //     req.session.user = createdUser[0];
  //     res.redirect('/#/cart');
  //   }
  // });
  
  // app.get('/api/user-data', (req, res) => {
  //   if (req.session.user) {
  //     res.status(200).send(req.session.user);
  //   } else {
  //     res.status(401).send('Nice try!');
  //   }
  // });

app.post('/api/product', controller.create);
app.get('/api/products', controller.getAll);
app.get('/api/product/:id', controller.getOne);
app.put('/api/product/:id', controller.update);
app.delete('/api/product/:id', controller.delete);

const port = 3005;
app.listen(port, () => {
  console.log(`Server is listening port ${port}`);
});
