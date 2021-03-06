module.exports = {
  create: (req, res, next) => {
    const dbInstance = req.app.get('db');
    const { product_name, product_description, price, picture } = req.body;

    dbInstance
      .create_product([product_name, product_description, price, picture])
      .then(products => res.status(200).send(products))
      .catch(err => {
        res.status(500).send({ errorMessage: 'Oops! Something went wrong.' });
        console.log(err);
      });
  },

  getOne: (req, res, next) => {
    const dbInstance = req.app.get('db');
    const { params } = req;

    dbInstance
      .read_product(params.id)
      .then(product => res.status(200).send(product))
      .catch(err => {
        res.status(500).send({ errorMessage: 'Oops! Something went wrong.' });
        console.log(err);
      });
  },

  getAll: (req, res, next) => {
    const dbInstance = req.app.get('db');
    dbInstance
      .read_products()
      .then(products => {
        console.log(products);
        res.status(200).send(products);
      })
      .catch(err => {
        res.status(500).send({ errorMessage: 'Oops! Something went wrong.' });
        console.log(err);
      });
  },
  update: (req, res, next) => {
    const dbInstance = req.app.get('db');
    const { params, body } = req;

    dbInstance
      .update_product([params.id, body.price])
      //params has correct id, but product_id is undefined
      .then(products => {
        console.log(products);
        res.status(200).send(products);
      })
      .catch(err => {
        res.status(500).send({ errorMessage: 'Oops! Something went wrong.' });
        console.log(err);
      });
  },
  delete: (req, res, next) => {
    const dbInstance = req.app.get('db');
    const { params } = req;

    dbInstance
      .delete_product([params.id])
      .then(products => res.status(200).send(products))
      //changed from res.sendStatus(200)
      .catch(err => {
        res.status(500).send({ errorMessage: 'Oops! Something went wrong.' });
        console.log(err);
      });
  }
};
