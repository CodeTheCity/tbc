var apikeysjs = require('./apikeys')
var request = require('request')

exports.simple = function(req){
    key = apikeysjs.darksky
    var request = require('request');
    API_CALL = 'https://api.darksky.net/forecast/ec26fe7b8e6a5ae68aebca2bd927b89f/37.8267,-122.4233'
    request(API_CALL, function (error, response, body) {
        if (!error && response.statusCode == 200) {
        var info = JSON.parse(body)
        console.log(info)
        }
    })
//return (data)
}