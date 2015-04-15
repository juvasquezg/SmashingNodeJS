/* jslint node: true */
'use strict'; 

// Node dependences
/**
 *  REQUIRES
 */
var http = require('http');
var port = process.env.PORT || 3000;

var server = http.createServer();

server.listen(port);
console.log("listening in %s", port);
