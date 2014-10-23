PPP_API
========

This is the API deployment for the Providing for Peacekeeping Database. The application is deployed servers-side with Node.js. The script uses Mongoose to connect to MongoDB and to define a series of data models. Express.js is used to define the routes used by the api to get data. Routes are a series of GET requests defined below. The API can be access through [server dns]/api.

-	**ppp_api/missions/[mission acronym]** returns mission specific data (country, country id, hq, & hq geo location). If acronym is not supplied, returns full object array of all UN PK missions or search for specific mission.

-	**ppp_api/countries/[country ISO3]** returns country specific data (country name, continent, un region, capital, capital geo location, & a variety of group membership flags for RO's etc.). If ISO3 is not supplied, returns the full object array of all countries or search by specific country ISO 3 id.

-	**ppp_api/contributions/[country]** returns all contribution data as an object array of country-date observations. Can return the full array or a subset based on country ISO 3 id. Country-date objects is made up of basic info (country name, region, date, and continent) as well as and object array of contributions. Contributions object array is made up of a series of loosely typed objects containing contributions for each mission contributed as well as one object for total monthly contribution. Keys include totals and by type where contribution exists and are further disaggregated by gender as a sub-object when that data became available.

-	**ppp_api/search?...** allows for querying. Query options are:
	+	*tcc_country_id*: ISO 3 Alpha designation for contributor. Value of 'all' is used for monthly system totals
	+	*tcc_country_string*: String name of contributor.
	+	*tcc_un_region*: Region of contributor. See [United Nations Statistics Division](http://unstats.un.org/unsd/methods/m49/m49regin.htm) for list of regions
	+	*tcc_un_bloc*: United Nations General Assembly regional groups (AG: African Group, APG: Asia-Pacific Group, EEG: Eastern European Group,LACG: Latin American and Caribbean Group, WEOG: Western European and Others Group)
	+	*tcc_continent*: Continent of conributor.
	+	*tcc_p5g4a3*: Membership in the P5, G4 or A3 (P5: permanent mebers of the UN Security Council, G4: four aspirational members of the UNSC (Japan, India, Brazil and Germany), A3: three African aspirational members of the UNSC (Nigeria, Egypt and South Africa), None: Everyone else.)
	+	*mission*: Acronym of UN peacekeeping mission.
	+	*mission_country_id*: ISO 3 Alpha designation for the mission host country. Value of 'all' is used for monthly system and country totals.
	+	*mission_country*: String name of the mission host country.
	+	*mission_un_region*: Region of the mission host country. See [United Nations Statistics Division](http://unstats.un.org/unsd/methods/m49/m49regin.htm) for list of regions
	+	*mission_un_bloc*: United Nations General Assembly regional groups (AG: African Group, APG: Asia-Pacific Group, EEG: Eastern European Group,LACG: Latin American and Caribbean Group, WEOG: Western European and Others Group)
	+	*mission_continent*: Continent of conributor.
	+	*mission_p5g4a3*: Membership in the P5, G4 or A3 (P5: permanent mebers of the UN Security Council, G4: four aspirational members of the UNSC (Japan, India, Brazil and Germany), A3: three African aspirational members of the UNSC (Nigeria, Egypt and South Africa), None: Everyone else.)
	+	*True/False fields*: tcc_sadc, tcc_eac, tcc_oic, tcc_g8, tcc_uma, tcc_au, tcc_comesa, tcc_eu, tcc_censad, tcc_ecowas, tcc_asean, tcc_gcc, tcc_g20, tcc_oecd, tcc_eccas, tcc_shanghai, tcc_nam, tcc_cis, tcc_g77, tcc_nato, tcc_oas, tcc_igad, tcc_arabLeague, mission_sadc, mission_eac, mission_oic, mission_g8, mission_uma, mission_au, mission_comesa, mission_eu, mission_censad, mission_ecowas, mission_asean, mission_gcc, mission_g20, mission_oecd, mission_eccas, mission_shanghai, mission_nam, mission_cis, mission_g77, mission_nato, mission_oas, mission_igad, mission_arabLeague.
	+	*Data Fields (total, male and female)*: (fpu, fpu_m, fpu_f): formed police units, (ip, ip_m, ip_f): individual police, (eom_f, eom_m, eom): experts on mission, (troops_f, troops_m, troops): troops, (civpol): total police, (observers):total eom and observers over time, (total_f, total_m, total): totals


## Dependencies

Python
-	[MongoDB](http://www.mongodb.com/ "Mongo DB") - Object NoSQL database based on javascript conventions.
-	[Node](http://nodejs.org/ "Node") - server-side javascript framework
-	[Express](https://www.npmjs.org/package/express "Express") - web framework, specifically used to route API requests
-	[Mongoose](https://www.npmjs.org/package/mongoose "Mongoose") - MongoDB connector, also used to define collection schemas
-	[BodyParser](https://www.npmjs.org/package/body-parser "BodyParser") - parsing middleware

## Install & launch


Run:
```
git clone https://github.com/IPIDataLab/PPP_API.gitß
cd /path/to/PPP_API
npm rebuild
node server.js
```
The api will consol.log the port used by the api. Default is 8080.


## TODO

*	Search by date or range
*	Search by specific mission contributed to
*	search for records with specific types of contributions
*	search for records based on greater than less than operators
