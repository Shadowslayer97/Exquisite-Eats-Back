'use strict';
module.exports = (sequelize, DataTypes) => {
  const Order_list = sequelize.define('Order_list', {
    delivery: DataTypes.DATE,
    total: DataTypes.INTEGER,
    status: DataTypes.INTEGER
  }, {});
  Order_list.associate = (models) => {
    // associations can be defined here
    Order_list.belongsTo(models.User, {
      foreignKey: 'userId',
      as:'userOrders',
      onDelete: 'CASCADE',
    });
    Order_list.hasMany(models.Order, {
      foreignKey: 'orderListId',
      as: 'orderListItems',
    });
  };
  return Order_list;
};
