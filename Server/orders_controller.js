module.exports = {
  create: (req, res, next) => {
    const dbInstance = req.app.get('db');
    const { product_id, auth_id } = req.body;

    dbInstance
      .create_order([product_id, auth_id])
      .then(() => res.sendStatus(200))
      .catch(err => {
        res.status(500).send({ errorMessage: 'Oops! Something went wrong.' });
        console.log(err);
      });
  },
  read: (req, res, next) => {
    const dbInstance = req.app.get('db');
    dbInstance
      .read_orders()
      .then(orders => {
        res.status(200).send(orders);
      })
      .catch(err => {
        res.status(500).send({ errorMessage: 'Oops! Something went wrong.' });
        console.log(err);
      });
  }
};
