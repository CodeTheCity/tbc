# (F)usty (A)ir (R)oute (T)racker
Team TBC at CTC15 

#F.A.R.T. API
This project contains a nodejs API, example use:

http://localhost:8080/weather?id=5331&end_date=15-Jan-2019

where:

* **id** = sensor luftdaten ID
* **end_date** = the most recent date your interested in. (this is resolved in unix time)

this returns weather day for 2 days at an hourly interval from Dark Sky. The format is:

        {
            "latitude":57.128,
            "longitude":-2.13,
            "timezone":"Europe/London",
            "hourly":{
                "summary":"Foggy in the morning.",
                "icon":"fog",
                "data":[{
                    "time":1547510400,
                    "summary":"Clear",
                    "icon":"clear-night",
                    "precipType":"rain",
                    "temperature":45.04,
                    "apparentTemperature":40.71,
                    "dewPoint":37.4,
                    "humidity":0.74,
                    "windSpeed":8.05,
                    "windBearing":221,
                    "uvIndex":0,
                    "visibility":6.22
                    },
                    {"time":1547514000,
                    "summary":"Clear",
                    "icon":"clear-night",
                    "precipType":"rain",
                    "temperature":41.45,
                    "apparentTemperature":37.6,
                    "dewPoint":37.4,
                    "humidity":0.85,
                    "windSpeed":5.82,
                    "windBearing":191,
                    "uvIndex":0,
                    "visibility":6.22
                    },
                    {"time":1547517600,
                    "summary":"Clear"
                    :
                    : and so on. for 48hrs
