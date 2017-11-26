module.exports = function(sequelize, DataTypes) {
  return sequelize.define("EntityAttribute", {
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    maxLength: DataTypes.INTEGER,
    notNull: DataTypes.BOOLEAN,
    unique: DataTypes.BOOLEAN,
    attributeType: DataTypes.STRING
  });
}
