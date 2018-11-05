'use strict';
module.exports = (sequelize, DataTypes) => {
  const Order_list = sequelize.define('Order_list', {
    delivery: DataTypes.DATE,
    total: DataTypes.INTEGER
  }, {});
  Order_list.associate = (models) => {
    // associations can be defined here
    Order_list.hasMany(models.User, {
      foreignKey: 'userId',
      as:'userOrders',
    });
    Order_list.belongsTo(models.Order, {
      foreignKey: 'orderListId',
      onDelete: 'CASCADE',
    });
  };
  return Order_list;
};
