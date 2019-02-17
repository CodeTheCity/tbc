var restify = require('restify')
//var apikeysjs = require('./apikeys')
//var locationjs = require('./location')
var weatherjs = require('./weather')
//var trafficjs = require('./traffic')
//var pollutionjs = require('./pollution')
var test_mode = true //false

function weather(req, res, next) {
    if (test_mode) {
      console.log('reponded to request for weather')
      console.log(req.query)
    }
    weatherjs.simple(req, res, next)
}

function help(req, res, next) {
    if (test_mode) {console.log('reponded to request for help')}
    jsondata = {
        "help":"API options",
        "weather":{
            "params":{
            },
            "args":{
                "id":"device id", 
                "start_date":"yyyy-mm-dd <or> dd-mm-yyyy <or> dd-mmm-yyyy",
                "end_date":"yyyy-mm-dd <or> dd-mm-yyyy <or> dd-mmm-yyyy"}
            }
    }
    res.send(jsondata)
    next();
}

var server = restify.createServer()
server.use(restify.plugins.queryParser())
//server.get('/traffic/:id/:start_date/:end_date/:interval', traffic);
server.get('/weather', weather);
server.get('/help', help);

server.listen(8080, function() {
    console.log('%s listening at %s', server.name, server.url);
});