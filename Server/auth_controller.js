const { REACT_APP_DOMAIN, REACT_APP_CLIENT_ID, CLIENT_SECRET } = process.env;

// module.exports = {
//   app.get

//   queryCode: async (req, res) => {
//     let payload = {
//       client_id: REACT_APP_CLIENT_ID,
//       client_secret: CLIENT_SECRET,
//       code: req.query.code,
//       grant_type: 'authorization_code',
//       redirect_uri: `http://${req.headers.host}/auth/callback`
//     };

//     let resWithToken = await axios.post(
//       `https://${REACT_APP_DOMAIN}/oauth/token`,
//       payload
//     );

//     let resWithUserData = await axios.get(
//       `https://${REACT_APP_DOMAIN}/userinfo?access_token=${
//         resWithToken.data.access_token
//       }`
//     );

//     const db = req.app.get('db');
//     console.log('resWithUserData.data', resWithUserData.data);
//     let { first_name, last_name, email } = resWithUserData.data;
//     let foundUser = await db.find_user([sub]);
//     if (foundUser[0]) {
//       req.session.user = foundUser[0];

//       res.redirect('/#/cart');
//     } else {
//       let createdUser = await db.create_customer([
//         first_name,
//         last_name,
//         email
//       ]);

//       req.session.user = createdUser[0];
//       res.redirect('/#/cart');
//     }
//   },

//     app.get

//   dataRetrieved: (req, res) => {
//     if (req.session.user) {
//       res.status(200).send(req.session.user);
//     } else {
//       res.status(401).send('Nice try!');
//     }
//   }
// };
