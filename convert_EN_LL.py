from convertbng.util import convert_bng, convert_lonlat
'''
# convert a single value
res = convert_bng(lon, lat)

# convert lists of longitude and latitude values to OSGB36 Eastings and Northings, using OSTN15 corrections
lons = [lon1, lon2, lon3]
lats = [lat1, lat2, lat3]
res_list = convert_bng(lons, lats)

# convert lists of BNG Eastings and Northings to longitude, latitude
eastings = [easting1, easting2, easting3]
northings = [northing1, northing2, northing3]
res_list_en = convert_lonlat(eastings, northings)

'''
coords = [[394400,809000],
[393250,805600],
[391560,808000],
[384900,811400],
[394600,810000],
[387200,802070],
[392900,803560],
[389010,811700],
[394400,806330],
[392900,803000],
[392000,809050],
[391620,805200],
[392640,808000],
[393200,805300],
[392600,805000],
[391350,809035],
[386800,811210],
[394200,808100],
[385000,801100],
[393100,808000],
[392640,804000],
[394000,808500],
[392400,807600],
[391102,806220],
[393800,806000],
[383400,800930],
[393170,800230],
[394740,812500],
[382860,812325],
[384070,806365],
[394220,804670],
[394510,805770],
[391050,806950],
[392440,807260],
[391610,807330],
[391100,809200],
[392800,803800],
[394220,801500],
[393020,803350],
[389000,802770],
[389500,806670],
[389100,809800],
[388800,813900],
[394000,805580],
[394610,806300],
[389000,806640],
[390000,806680],
[392000,806800],
[393000,806910],
[394000,810990],
[391722,810505],
[392880,804000],
[393640,807320],
[394240,806750],
[392000,808000],
[393050,806000],
[394350,805030],
[386000,806180]]

eastings, northings = list(zip(*coords))

res_list_en = convert_lonlat(eastings, northings)

with open ("lat_lng.csv", "a") as outfile:

	for x in range(0,57):
		outfile.write (str(res_list_en[0][x]) + "," + str(res_list_en[1][x]) + "\n")

