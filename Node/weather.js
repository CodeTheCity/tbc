var apikeysjs = require('./apikeys')
var request = require('request')
var locationjs = require('./location')

exports.simple = function(req, res, next){
    key = apikeysjs.darksky()
    var request = require('request');
    var data = ""
    LatLon = locationjs.idToLatLon(req)
//    var time = 255657600
//    var time = Math.round(new Date("2017-09-15 00:00:00.000").getTime()/1000);
    var time = Math.round(new Date(req.query.end_date).getTime()/1000);
    //https://api.darksky.net/forecast/[key]/[latitude],[longitude],[time]
    var url = 'https://api.darksky.net/forecast/' + key + '/'
    API_CALL = url + LatLon[0] +',' + LatLon[1] + ',' + time + '?exlude=currently,minutely,daily,alerts,flags'
    request(API_CALL, function (error, response, body) {
        if (!error && response.statusCode == 200) {
        data = JSON.parse(body)
        console.log(data)
        res.send(data)
        }
    })
//return (data)
}