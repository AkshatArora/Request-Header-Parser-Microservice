// server.js
// where your node app starts

// init project
var express = require('express');
var app = express();
var  os = require('os')
// we've started you off with Express

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});

app.get("/whoami", function (request, response) {
  var data = {"ipaddress":request.connection.remoteAddress.substring(7),"language":request.headers["accept-language"].substring(0,request.headers["accept-language"].indexOf(',')),"software":os.type()+";"+os.platform+";"+os.arch}
  response.send(JSON.stringify(data));
});

// could also use the POST body instead of query string: http://expressjs.com/en/api.html#req.body


// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
