const OrderList = require('../models').Order_list;
const User = require('../models').User;

module.exports = {
  create(req, res) {
    return OrderList
      .create({
        delivery:req.body.delivery,
        total:req.body.total,
        userId:req.params.userId
      })
      .then(orderList => res.status(201).send(orderList))
      .catch(error => res.status(400).send(error));
  },
  // list(req, res) {
  //   return orderList
  //     .all()
  //     .then(users => res.status(200).send(users))
  //     .catch(error => res.status(400).send(error))
  // }
  list(req, res) {
    return OrderList
      .findAll({
        include: [{
          model: User,
          as:'userOrders',
        }],
      })
      .then(orderLists => res.status(200).send(orderLists))
      .catch(error => {
          console.log(error);
          res.status(400).send(error)
      })
  }
};
