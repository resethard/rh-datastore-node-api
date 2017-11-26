var models = require('../models');
var Store = models.Store;

module.exports = function(app) {
  app.get('/stores', function(req, res) {
    models.sequelize.sync().then(function() {
      Store.findAll().then(function(result) {
        res.json(result);
      });
    });
  });
};
