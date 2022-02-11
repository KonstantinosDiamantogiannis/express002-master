'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class TestCustomer extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // this.belongsToMany(models.ProductTeam2s, { // edw dilwnoume to this instance na dwsei association se allo table 
      //   through: models.OrderTeam2s,  // best names EU
      //   as: 'ProductTeam2s',  
      //   foreignKey: 'TestCustomerId'
      // });
    }
  }
  TestCustomer.init({
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'TestCustomer',
  });
  return TestCustomer;
};