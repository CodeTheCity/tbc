var apikeysjs = require('./apikeys')
var test_mode = true //false

exports.simple = function(req, res, next){
    var LatLon = 0
    var requestLimit = 100
    key = apikeysjs.darksky()
    var request = require('request');
    id = req.query.id
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
        if (!LatLon){
            API_CALL = 'http://api.luftdaten.info/v1/sensor/' + id + '/' 
            request(API_CALL, function (error, response, body) {
                if (!error && response.statusCode == 200) {
                    data = JSON.parse(body)
                    console.log(data)
                    if (data.length>1){
                        lat = data[0].location.latitude
                        lon = data[0].location.longitude
                        console.log('latlong = ' + [lat, lon])
                        console.log('altitude = ' + data[0].location.altitude)
                        LatLon = [lat,lon]
                        APIrequest(jsondata)
                    } else {
                        console.log ('ERROR: no sensor found')
                        res.send('False: no sensor found')
                    }
                }
            })
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
                    jsondata.forEach(function(element) {
                        element.UTC = element.time
                        element.time = new Date(element.time * 1e3).toISOString()
                    });
                    console.log('Completed')
                    res.send(jsondata)
                }
            }
        })
    }
}