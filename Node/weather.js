var apikeysjs = require('./apikeys')
var request = require('request')
var locationjs = require('./location')

exports.simple = function(req, res, next){
    key = apikeysjs.darksky()
    var request = require('request');
    var data = ""
    LatLon = locationjs.idToLatLon(req)
    API_CALL = 'https://api.darksky.net/forecast/' + key + '/' + LatLon[0] +',' + LatLon[1]
    request(API_CALL, function (error, response, body) {
        if (!error && response.statusCode == 200) {
        data = JSON.parse(body)
        console.log(data)
        res.send(data)
        }
    })
//return (data)
}