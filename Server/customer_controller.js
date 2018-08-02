module.exports = {
  create: (req, res, next) => {
    const dbInstance = req.app.get('db');
    const { first_name, last_name, email } = req.body;

    dbInstance
      .create_customer([first_name, last_name, email])
      .then(() => res.sendStatus(200))
      .catch(err => {
        res.status(500).send({ errorMessage: 'Oops! Something went wrong.' });
        console.log(err);
      });
  },
  getOne: (req, res, next) => {
    const dbInstance = req.app.get('db');
    const { params } = req;

    dbInstance
      .read_customer(params.id)
      .then(product => res.status(200).send(product))
      .catch(err => {
        res.status(500).send({ errorMessage: 'Oops! Something went wrong.' });
        console.log(err);
      });
  },
  getAll: (req, res, next) => {
    const dbInstance = req.app.get('db');

    dbInstance
      .read_customers()
      .then(products => res.status(200).send(products))
      .catch(err => {
        res.status(500).send({ errorMessage: 'Oops! Something went wrong.' });
        console.log(err);
      });
  }
};
