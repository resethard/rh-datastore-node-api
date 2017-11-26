module.exports = function(sequelize, DataTypes) {
  return sequelize.define("Store", {
    name: DataTypes.STRING,
    description: DataTypes.STRING
  });
}
