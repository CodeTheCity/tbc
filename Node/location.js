
exports.idToLatLon = function(req){
    //add look up to database for lat/lon
    lat = 0
    lon = 0
    id = req.query.id

    switch(id){
        case '5331':
            lat = 57.128
            lon = -2.130
            break
        case '7789':
            lat = 57.130
            lon = -2.087
            break
        case '8554':
            lat = 57.146
            lon = -2.114
            break
        case '8733':
            lat = 57.136
            lon = -2.107
            break
    }
    return ([lat, lon])
}