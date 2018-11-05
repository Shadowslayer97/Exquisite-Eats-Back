'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    name: DataTypes.STRING,
    mobile: DataTypes.INTEGER,
    last_active: DataTypes.DATE,
    email: DataTypes.STRING,
    address: DataTypes.TEXT
  }, {});
  User.associate = (models) => {
    // associations can be defined here
    User.belongsTo(models.Order_list, {
      foreignKey: 'userId',
      onDelete: 'CASCADE',
    });
  };
  return User;
};
