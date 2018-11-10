const OrderList = require('../models').Order_list;
const User = require('../models').User;
const Order = require('../models').Order;
// const Status = require('../constants/order');

module.exports = {
  create(req, res) {
    OrderList
      .create({
        delivery:req.body.delivery, //in put call?
        total:req.body.total,
        status:1,                  //Ordered
        userId:req.params.userId
      })
      .then(orderList => {
        const orderedDishes = req.body.dishes;
        orderedDishes
          .forEach(dish => {
            Order
              .create({
                quantity: dish.quantity,
                dishId: dish.id,
                orderListId: orderList.id
              })
              .then(order => res.status(200).send(orderList))
              .catch(error => res.status(400).send(error))
          })
      })
      .catch(error => {
        console.log(error);
          res.status(400).send(error)
      });
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
        where: req.query
      })
      .then(orderLists => res.status(200).send(orderLists))
      .catch(error => {
          console.log(error);
          res.status(400).send(error)
      })
  },
  listUserOrders(req, res) {
    return OrderList
      .findAll({
        include: [{
          model: User,
          as:'userOrders',
          where: {
            id:req.params.userId
          }
        }],
      })
      .then(orderLists => res.status(200).send(orderLists))
      .catch(error => {
          console.log(error);
          res.status(400).send(error)
      })
  },
  update(req, res) {
    return OrderList
      .update(
        req.body,
        { where: {id:req.query.orderListId}}
      )
      .then(result => res.status(200).send(result))
      .catch(error => res.status(400).send(error))
  }
};
