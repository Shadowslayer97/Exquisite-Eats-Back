'use strict';
module.exports = (sequelize, DataTypes) => {
  const Dish = sequelize.define('Dish', {
    name: DataTypes.STRING,
    rate: DataTypes.INTEGER,
    description: DataTypes.TEXT,
    hq: DataTypes.INTEGER,
    image: DataTypes.TEXT,
    type: DataTypes.STRING
  }, {});
  Dish.associate = (models) => {
    // associations can be defined here
    Dish.hasMany(models.Order, {
      foreignKey: 'dishId',
      as:'orderDishes'
    });
  };
  return Dish;
};
