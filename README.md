# (F)usty (A)ir (R)oute (T)racker
Team TBC at CTC15 

#F.A.R.T. API
This project contains a nodejs API, example use:

http://localhost:8080/weather?id=5331&end_date=15-Jan-2019

where:

* **id** = sensor luftdaten ID
* **end_date** = the most recent date your interested in. (this is resolved in unix time)

this returns weather day for 2 days at an hourly interval from Dark Sky
