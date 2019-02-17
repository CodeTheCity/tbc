var restify = require('restify')
var apikeysjs = require('./apikeys')
var locationjs = require('./location')
var weatherjs = require('./weather')
//var trafficjs = require('./traffic')
//var pollutionjs = require('./pollution')
var test_mode = true //false

function weather(req, res, next) {
    if (test_mode) {
      console.log('reponded to request for weather')
      console.log(req.query)
    }
    LatLon = locationjs.idToLatLon(req)
    jsondata = LatLon
    jsondata = weatherjs.simple(req)
    res.send(jsondata)
    next();
}

function help(req, res, next) {
    if (test_mode) {console.log('reponded to request for help')}
    jsondata = {
        "help":"API options",
        "weather":{"id":"device id", "start_date":"unix time, UTC time zone", "end_date":"unix time, UTC time zone"}
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