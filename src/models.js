var Sequelize = require('sequelize');

var sequelize = new Sequelize('datastore', null, null, {
  dialect: "sqlite",
  storage: './datastore.sqlite'
});

var Store = sequelize.import(__dirname + "/models/store");
var Entity = sequelize.import(__dirname + "/models/entity");
var EntityAttribute = sequelize.import(__dirname + "/models/entity-attribute");

Store.hasMany(Entity);
Entity.belongsTo(Store);

Entity.hasMany(EntityAttribute);
EntityAttribute.belongsTo(Entity);

module.exports = {
  Store: Store,
  Entity: Entity,
  EntityAttribute: EntityAttribute,
  sequelize: sequelize
}
