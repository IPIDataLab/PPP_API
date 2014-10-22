// app/models/contributions.js

var mongoose		= require('mongoose');
var Schema			= mongoose.Schema;

var Contributions = new Schema({
	civpol : Number,
	troops : Number,
	ip : Number,
	fpu: Number,
	mission : String,
	eom : Number,
	tot : Number,
	gender : {
		ip_f : Number,
		ip_m : Number,
		eom_f : Number,
		eom_m : Number,
		civpol_f : Number,
		civpol_m : Number,
		troops_f : Number,
		troops_m : Number,
		fpu_f : Number,
		fpu_m : Number,
		tot_f : Number,
		tot_m : Number
	},
	num_missions : Number
});

var ContributionSchema	= new Schema({
	country_string : String,
	country : String,
	region : String,
	date : String,
	contributions : [Contributions],
	continent : String
});

var collectionName = 'contributions';
module.exports		= mongoose.model('contribution', ContributionSchema, collectionName);








{
	"_id" : ObjectId("54467e424bf42ee743e6ab13"),
	"eom" : 3,
	"mission_igad" : false,
	"tcc_asean" : false,
	"mission_uma" : false,
	"mission_country_id" : "ESH",
	"mission_sadc" : false,
	"tcc_p5g4a3" : "None",
	"tcc_eu" : false,
	"mission_asean" : false,
	"mission_country" : "Western Sahara",
	"mission_censad" : false,
	"mission_shanghai" : false,
	"tcc_comesa" : false,
	"tcc_eccas" : false,
	"tcc_g77" : true,
	"mission_g8" : false,
	"mission_p5g4a3" : "None",
	"mission_eccas" : false,
	"tcc_country_id" : "ARG",
	"total" : 3,
	"total_m" : 3,
	"tcc_capital_loc" : {
		"y" : -36.5001,
		"x" : -60
	},
	"mission_oecd" : false,
	"mission_un_bloc" : "Non-Member State",
	"mission_continent" : "Africa",
	"tcc_nam" : false,
	"mission_g77" : false,
	"mission_oic" : false,
	"mission_nato" : false,
	"mission_un_region" : "Northern Africa",
	"tcc_igad" : false,
	"tcc_oas" : true,
	"tcc_censad" : false,
	"tcc_sadc" : false,
	"tcc_oic" : false,
	"eom_m" : 3,
	"mission_gcc" : false,
	"tcc_g8" : false,
	"mission_g20" : false,
	"mission" : "MINURSO",
	"mission_eu" : false,
	"tcc_ecowas" : false,
	"observers" : 3,
	"mission_eac" : false,
	"tcc_continent" : "South America",
	"mission_nam" : false,
	"tcc_eac" : false,
	"date" : "20140228T000000",
	"mission_au" : true,
	"mission_hq" : "Laayoune",
	"mission_arabLeague" : false,
	"tcc_country_string" : "Argentina",
	"mission_cis" : false,
	"mission_ecowas" : false,
	"tcc_oecd" : false,
	"tcc_g20" : true,
	"tcc_capital" : "Buenos Aires",
	"tcc_shanghai" : false,
	"mission_oas" : false,
	"tcc_uma" : false,
	"tcc_arabLeague" : false,
	"tcc_nato" : false,
	"tcc_cis" : false,
	"tcc_gcc" : false,
	"mission_hq_loc" : {
		"y" : 27.1536,
		"x" : -13.2033
	},
	"tcc_au" : false,
	"tcc_un_region" : "South America",
	"mission_comesa" : false,
	"tcc_un_bloc" : "GRULAC"
}