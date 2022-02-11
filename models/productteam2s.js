'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ProductTeam2s extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) { // method of all sequelize models
      // define association here
      this.belongsToMany(models.TestCustomer, { // edw dilwnoume to this instance na dwsei association se allo table 
        through: models.OrderTeam2s,  // best names EU
        as: 'TestCustomer',  
        foreignKey: 'ProductTeam2sId'
      });
    }
  }
  ProductTeam2s.init({
    title: DataTypes.STRING,
    price: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'ProductTeam2s',
    // timestamps: false // Gia ta createAt kai updatedAt na einai disabled
  });
  return ProductTeam2s;
};