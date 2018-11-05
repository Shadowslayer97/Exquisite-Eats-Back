'use strict';
module.exports = (sequelize, DataTypes) => {
  const Order = sequelize.define('Order', {
    quantity: DataTypes.INTEGER
  }, {});
  Order.associate = (models) => {
    // associations can be defined here
    Order.hasMany(models.Dish, {
      foreignKey: 'orderId',
      as: 'orderDishes',
    });
    Order.hasMany(models.Order_list, {
      foreignKey: 'orderListId',
      as: 'orderListItems',
    });
  };
  return Order;
};
