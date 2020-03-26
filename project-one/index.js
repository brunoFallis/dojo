const http = require('http')
const fs = require('fs')

var express = require('express');
var app = express();

fs.readFile('./index.html', function (err, html) {
    if (err) {
        throw err;
    }
    
    http.createServer(function (request, response) {
        response.writeHeader(200, { "Content-Type": "text/html" });
        response.write(html);
        response.end();
    }).listen(8080);
});

app.post('/user', function(req, res) {
    res.send(response);
});

app.listen(3000)

