'use strict';
module.exports = (sequelize, DataTypes) => {
  const Dish = sequelize.define('Dish', {
    name: DataTypes.STRING,
    rate: DataTypes.INTEGER,
    description: DataTypes.TEXT,
    hq: DataTypes.INTEGER
  }, {});
  Dish.associate = (models) => {
    // associations can be defined here
    Dish.belongsTo(models.Order, {
      foreignKey: 'orderId',
      onDelete: 'CASCADE',
    });
  };
  return Dish;
};
