var app = require("./src/routes");

var server = app.listen(8000, function() {
  console.log('Listening on port %d', server.address().port);
});
