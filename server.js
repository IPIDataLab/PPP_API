// server.js

// BASE SETUP
// =============================================================================

// call the packages we need
var express		= require('express'); 		// call express
var app			= express(); 				// define our app using express
var bodyParser  = require('body-parser');
var mongoose	= require('mongoose');		// Create connection to mongodb

// configuration
var connect		= mongoose.connect('mongodb://localhost:27017/pppDB');
var port = process.env.PORT || 8080; 		// set our port
var prefix = '/api';					// route prefix

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser());

// import models
var Country			= require('./app/models/countries')
var Contribution 	= require('./app/models/contributions')
var Mission 		= require('./app/models/missions')


// ROUTES FOR OUR API
// =============================================================================
var router = express.Router(); 				// get an instance of the express Router

// middleware to use for all requests
router.use(function(req, res, next) {
	// do logging
	console.log('Serving up ' + req.url);
	next(); // make sure we go to the next routes and don't stop here
});


// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
router.get('/', function(req, res) {
	res.jsonp({ message: 'Welcome to the IPI Providing for Peacekeeping API!' });	
});


// Basic routes for mission and country collections
// define routes for countries collection
router.route('/countries')
	// get all the countries (accessed at GET http://localhost:8080/api/countries)
	.get(function(req, res) {
		Country.find(function(err, countries) {
			if (err)
				res.send(err);

			res.send(countries);
		});
	});

// on routes that end in /countries/:country_id
// ----------------------------------------------------
router.route('/countries/:country_id')

	// get the country with a given ISO3 country id (accessed at GET http://localhost:8080/api/countries/:country_id)
	.get(function(req, res) {
		req.params.country_id = req.params.country_id.toUpperCase();
		Country.find(req.params, function(err, country) {
			if(!err) {
				res.jsonp(country);
			}else{
				return console.log(err);
			}
		});
	});

// define routes for missions collection
router.route('/missions')
	// get all the missions (accessed at GET http://localhost:8080/api/missions)
	.get(function(req, res) {
		Mission.find(function(err, missions) {
			if (err)
				res.send(err);
			res.send(missions);
		});
	});

// on routes that end in /missions/:mission_id
// ----------------------------------------------------
router.route('/missions/:mission')

	// get the country with a given ISO3 country id (accessed at GET http://localhost:8080/api/missions/:mission)
	.get(function(req, res) {
		req.params.mission = req.params.mission.toUpperCase();
		Mission.find(req.params, function(err, mission) {
			if(!err) {
				res.jsonp(mission);
			}else{
				return console.log(err);
			}
		});
	});

// Route for contribution collection calls
// on routes that end in /countries/:country_id
// ----------------------------------------------------
router.route('/contributions/:tcc_country_id')

	// get all the contributions from a given country (accessed at GET http://localhost:8080/api/contributions/:country)
	.get(function(req, res) {
		req.params.tcc_country_id = req.params.tcc_country_id.toUpperCase();
		Contribution.find(req.params, 'tcc_country_id troops', function(err, contribution) {
			if(!err) {
				res.jsonp(contribution);
			}else{
				return console.log(err);
			}
		});
	});

router.route('/search')
	// search contributions based on query params (accessed at GET http://localhost:8080/api/search?...)

	//GET REQUEST

	.get(function(req, res) {
		// req.params.tcc_country_id = req.params.tcc_country_id.toUpperCase();
		// console.log(req.query);
		Contribution.find(req.query, 'cont_date tcc_country_id tcc_country_string tcc_continent tcc_un_region mission mission_country_id mission_country mission_continent mission_un_region fpu fpu_f fpu_m ip ip_f ip_m civpol eom eom_f eom_m observers troops troops_f troops_m total total_f total_m', function(err, contribution) {
		// Contribution.find(req.query, function(err, contribution) {
			if(!err) {
				res.jsonp(contribution);
			}else{
				return console.log(err);
			}
		});
	});

	
    ////////////////////////////////////////////////////////
    ////////UNSED CODE TO PARSE DATE ETC.
    ////////////////////////////////////////////////////////
 	// 	//Parses query to return main query terms
	// 	function parseQuery(req) {
	// 		var mainQuery = {};
	// 		for(key in req.query) {
	// 			mainQuery[key] = req.query[key];
	// 		}
	// 		delete mainQuery.date;
	// 		return mainQuery;
	// 	}      

	// 	//Parses query to return date query
	// 	function getDateQuery(req) {
	// 		if('date' in req.query) {
	// 			var dateQuery = req.query.date;
	// 		}
	// 		return dateQuery;
	// 	}

	// 	//Get's array of countries that match main query terms
	// 	function getCountryArray(query) {
	// 		var query = Country.find(query, 'country_id');
	// 		return query;
	// 	}



	// 	var mainQuery = parseQuery(req);
	// 	var dateQuery = getDateQuery(req);

app.use(prefix, router);

// START THE SERVER
// =============================================================================
app.listen(port, function() {
	console.log('Magic happens at http://localhost:'+port+prefix+'/');
});

