'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    queryInterface.addColumn(
      'Orders',
      'dishId',
      {
        type: Sequelize.INTEGER,
        references : {
          model: 'Dishes',
          key: 'id',
          as: 'orderDishes'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
      }
    );
    queryInterface.addColumn(
      'Orders',
      'orderListId',
      {
        type: Sequelize.INTEGER,
        references : {
          model: 'Order_lists',
          key: 'id',
          as: 'orderListItems'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
      }
    )
  },

  down: (queryInterface, Sequelize) => {
    queryInterface.removeColumn(
      'Orders',
      'dishId'
    );
    queryInterface.removeColumn(
      'Orders',
      'orderListId'
    )
  }
};
