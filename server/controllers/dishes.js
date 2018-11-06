const Dish = require('../models').Dish;

module.exports = {
  create(req, res) {
    return Dish
      .create({
        name:req.body.name,
        rate:req.body.rate,
        desciption:req.body.description,
        hq:req.body.hq
      })
      .then(dish => res.status(200).send(dish))
      .catch(error => res.status(400).send(error));
  },
  list(req, res) {
    return Dish
      .all()
      .then(users => res.status(200).send(users))
      .catch(error => res.status(400).send(error))
  }
};
