var apikeysjs = require('./apikeys')
var request = require('request')
var locationjs = require('./location')
var requestLimit = 100
var test_mode = true //false

exports.simple = function(req, res, next){
    key = apikeysjs.darksky()
    var request = require('request');
    var data = ""
    LatLon = locationjs.idToLatLon(req)
//    var time = 255657600
//    var time = Math.round(new Date("2017-09-15 00:00:00.000").getTime()/1000);
    try{
        var EndTime = Math.round(new Date(req.query.end_date).getTime()/1000);
    } catch (e){
        var EndTime = Math.round(new Date(today()).getTime()/1000);
    }
    try{
        var StartTime = Math.round(new Date(req.query.start_date).getTime()/1000);
    } catch (e){
        var StartTime = Endtime - (86400*2) //minus 2 days as date comes in 2 day chunks
    }
    var time = EndTime
    //https://api.darksky.net/forecast/[key]/[latitude],[longitude],[time]
    var url = 'https://api.darksky.net/forecast/' + key + '/'
    var jsondata = []
    APIrequest(jsondata)

    function APIrequest(jsondata){
        requestLimit -=1
        if (!requestLimit){
            return (False)
        }

        API_CALL = url + LatLon[0] +',' + LatLon[1] + ',' + time + '?exlude=currently,minutely,daily,alerts,flags'        
        request(API_CALL, function (error, response, body) {
            if (!error && response.statusCode == 200) {
                data = JSON.parse(body)
                jsondata = (data.hourly.data).concat(jsondata)
                if (time>StartTime ){
                    time -= (86400*2)
                    APIrequest(jsondata)
                    if (test_mode) {console.log('loop ' + time + ", requestLimit = " + requestLimit )}
                } else {
                    res.send(jsondata)
                }
            }
        })
    }
//return (data)
}