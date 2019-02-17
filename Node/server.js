var restify = require('restify');
var test_mode = true //false
var restify = require('restify-clients');
var API_key_metoffice = "9a55e44f-72b8-47b6-8968-67967d63cb76"
//http://datapoint.metoffice.gov.uk/public/data/val/wxobs/all/datatype/sitelist?key=9a55e44f-72b8-47b6-8968-67967d63cb76
//aberdeen = 3091
// Creates a JSON client
var client = restify.createJsonClient({
  url: 'http://history.openweathermap.org'
});

//client.basicAuth('$login', '$password');
client.get('/my/machines', function(err, req, res, obj) {
  assert.ifError(err);

  console.log(JSON.stringify(obj, null, 2));
});

function location_resolver(id){
    //add look up to database for lat/lon
    lat = 0
    lon = 0
    switch(id){
        case 5331:
            lat = 57.128
            lon = -2.130
            break
        case 7789:
            lat = 57.130
            lon = -2.087
            break
        case 8554:
            lat = 57.146
            lon = -2.114
            break
        case 8733:
            lat = 57.136
            long = -2.107
            break
    }
    return ([lat, lon])
}

function weather(req, res, next) {
    if (test_mode) {console.log('reponded to request for weather')}
    jsondata = location_resolver(req.params.id)
    //jsondata = weather_agrigator()

    var options = {
        host: url,
        port: 80,
        path: '/resource?id=foo&bar=baz',
        method: 'POST'
      };
      
      http.request(options, function(res) {
        console.log('STATUS: ' + res.statusCode);
        console.log('HEADERS: ' + JSON.stringify(res.headers));
        res.setEncoding('utf8');
        res.on('data', function (chunk) {
          console.log('BODY: ' + chunk);
        });
      }).end()

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
//server.get('/traffic/:id/:start_date/:end_date/:interval', traffic);
server.get('/weather', weather); ///:id/:start_date/:end_date/:interval
server.get('/help', help);

server.listen(8080, function() {
    console.log('%s listening at %s', server.name, server.url);
});