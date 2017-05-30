"use strict";


var express = require('express');
var app = express();
var badges = require("./controllers/badges");

app.get('/', badges.save, badges.send, function(req, res){

});

app.listen(8000)