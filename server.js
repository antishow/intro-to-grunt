var express = require('express');
var app = new express();

app.use(express.static(__dirname + '/dist'));
app.listen(1337);

console.log("The server is running!");