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
          key: 'id'
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
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
      }
    )
  },

  down: (queryInterface, Sequelize) => {
    queryInterface.removeColumn(
      'Orders',
      'orderId'
    );
    queryInterface.removeColumn(
      'Orders',
      'orderListId'
    )
  }
};
