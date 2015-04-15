/* jslint node: true */
'use strict'; 

// Node dependences
/**
 *  REQUIRES
 */
var http = require('http'),
    port = process.env.PORT || 3000;

var server = http.createServer(function (req, res) {
  res.writeHead(200, {'content-type': 'text/html'});
  res.end('<marquee> Hello World </marquee>');
});

server.listen(port, function () {
  console.log('server listening in %s', port);
});
