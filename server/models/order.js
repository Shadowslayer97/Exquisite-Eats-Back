'use strict';
module.exports = (sequelize, DataTypes) => {
  const Order = sequelize.define('Order', {
    quantity: DataTypes.INTEGER
  }, {});
  Order.associate = (models) => {
    // associations can be defined here
    Order.belongsTo(models.Dish, {
      foreignKey: 'dishId',
      as: 'orderDishes',
      onDelete: 'CASCADE',
    });
    Order.belongsTo(models.Order_list, {
      foreignKey: 'orderListId',
      as: 'orderListItems',
      onDelete: 'CASCADE',
    });
  };
  return Order;
};
