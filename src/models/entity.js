module.exports = function(sequelize, DataTypes) {
  return sequelize.define("Entity", {
    name: DataTypes.STRING,
    description: DataTypes.STRING
  });
}
