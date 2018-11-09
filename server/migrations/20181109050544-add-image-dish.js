'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    queryInterface.addColumn(
      'Dishes',
      'image',
      {
        type: Sequelize.TEXT
      }
    );
    queryInterface.addColumn(
      'Dishes',
      'type',
      {
        type: Sequelize.STRING
      }
    );
  },

  down: (queryInterface, Sequelize) => {
    queryInterface.removeColumn(
      'Dishes',
      'image'
    );
    queryInterface.removeColumn(
      'Dishes',
      'type'
    );
  }
};
