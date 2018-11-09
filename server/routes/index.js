const usersController = require('../controllers').users;
const dishesController = require('../controllers').dishes;
const orderListController = require('../controllers').orderLists;

module.exports = (app) => {
  app.get('/api', (req, res) => res.status(200).send({
    message: 'Welcome to the Users API!',
  }));

  app.get('/api/users', usersController.list);
  app.post('/api/users', usersController.create);

  app.get('/api/dishes', dishesController.list);
  app.post('/api/dishes', dishesController.create);

  app.get('/api/order/list', orderListController.list);
  app.get('/api/order/list/:userId', orderListController.listUserOrders);
  app.post('/api/order/list/:userId', orderListController.create);
  // app.post('/api/order/list', orderListController.create);
};
