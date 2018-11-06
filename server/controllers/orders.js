const Order = require('../models').Order;

module.exports = {
  list(req, res) {
    return Order
      .findAll({
        where:req.body
      })
      .then(orders => res.status(200).send(orders))
      .catch(error => res.status(400).send(error))
  }
};
