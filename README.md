# (F)usty (A)ir (R)oute (T)racker
Team TBC at CTC15 

#F.A.R.T. API
This project contains a nodejs API, example use:

http://localhost:8080/weather?id=5331&start_date=01-Jan-2019&end_date=15-Jan-2019

Where:

* **id** = sensor luftdaten ID
* **end_date** = the most recent date your interested in. (defaults to today)
* **start_date** = the most historic date your interested in. (defaults to 2 days before today)

This returns weather data at an hourly interval from Dark Sky between the given dates. The format is:

        [
            {
                time: "2019-01-01T00:00:00.000Z",
                summary: "Overcast",
                icon: "cloudy",
                precipType: "rain",
                temperature: 46.95,
                apparentTemperature: 40.47,
                dewPoint: 35.6,
                humidity: 0.64,
                windSpeed: 16.1,
                windBearing: 281,
                cloudCover: 1,
                uvIndex: 0,
                visibility: 6.22,
                UTC: 1546300800
            },
            {
                time: "2019-01-01T01:00:00.000Z",
                summary: "Partly Cloudy",
                icon: "partly-cloudy-night",
                precipType: "rain",
                temperature: 45.14,
                apparentTemperature: 37.85,
                dewPoint: 30.19,
                humidity: 0.56,
                windSpeed: 17.22,
                windGust: 36.91,
                windBearing: 300,
                cloudCover: 0.44,
                uvIndex: 0,
                visibility: 6.22,
                UTC: 1546304400
            },
            {
                time: "2019-01-01T02:00:00.000Z",
                summary: "Mostly Cloudy",
                :
                : and so on.

See Dark Sky for more details: https://darksky.net/dev/docs