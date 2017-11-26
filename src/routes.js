var express = require('express');
var app = express();

require('./expressConfig')(app, express);
require('./routes/store')(app);
//require('./routes/entity')(app);
//require('./routes/entity-attribute')(app);

module.exports = app;
