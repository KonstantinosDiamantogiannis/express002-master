'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('OrderTeam2s', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      TestCustomerId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'TestCustomers',
          key: 'id'
        }
      },
      ProductTeam2sId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'ProductTeam2s',
          key: 'id'
        }
      },
      quantity: {
        type: Sequelize.INTEGER
      },
      totalPrice: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('OrderTeam2s');
  }
};