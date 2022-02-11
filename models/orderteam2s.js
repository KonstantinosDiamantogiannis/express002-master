'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class OrderTeam2s extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      OrderTeam2s.belongsTo(models.TestCustomer);
      OrderTeam2s.belongsTo(models.ProductTeam2s);
      OrderTeam2s.hasOne(models.ProductTeam2s);
      OrderTeam2s.hasOne(models.TestCustomer);
    }
  }
  OrderTeam2s.init({
    quantity: DataTypes.INTEGER,
    totalPrice: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'OrderTeam2s',
  });
  return OrderTeam2s;
};