var express = require('express');
var app = express();
var testJson = require('./test.json');
app.get('/', function (req, res) {
    res.send('Hello World!');
});


app.get('/api/test',function(req,res){
    res.json(200,testJson);
});
var server = app.listen(3000, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log('Example app listening at http://%s:%s', host, port);
});
