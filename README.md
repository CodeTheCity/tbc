# (F)usty (A)ir (R)oute (T)racker
Team TBC at CTC15 

#F.A.R.T. API
This project contains a nodejs API, example use:

http://localhost:8080/weather?id=5331&start_date=01-Jan-2019&end_date=15-Jan-2019

Where:

* **id** = sensor luftdaten ID
* **end_date** = the most recent date your interested in. (defaults to today)
* **start_date** = the most historic date your interested in. (defaults to 2 days before today)

This returns weather data in an hourly interval from Dark Sky between the given dates. The format is:

        [
            {
            time: 1546300800,
            summary: "Overcast",
            icon: "cloudy",
            precipType: "rain",
            temperature: 46.86,
            apparentTemperature: 40.35,
            dewPoint: 35.6,
            humidity: 0.65,
            windSpeed: 16.1,
            windBearing: 281,
            cloudCover: 1,
            uvIndex: 0,
            visibility: 6.22
            },
            {
            time: 1546304400,
            summary: "Partly Cloudy",
            icon: "partly-cloudy-night",
            precipType: "rain",
            temperature: 45.04,
            apparentTemperature: 37.73,
            dewPoint: 30.19,
            humidity: 0.56,
            windSpeed: 17.22,
            windGust: 36.91,
            windBearing: 300,
            cloudCover: 0.44,
            uvIndex: 0,
            visibility: 6.22
            },
            {
            time: 1546308000,
            summary: "Mostly Cloudy",
            icon: "partly-cloudy-night",
            precipType: "rain",
            :
            : and so on. for 48hrs
