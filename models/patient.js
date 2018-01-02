var mongoose = require('mongoose');
var PatientSchema = mongoose.Schema({
	member:{
		first_name:{
			type:String,
		},
		last_name:{
			type:String
		},
		id:{
			type:String
		},
		birth_date:{
			type:String,
			required:true
		},
		phone_number:{
			type:String
		}
	},
	provider:{
		first_name:{
			type:String,
		},
		last_name:{
			type:String
		},
		npi:{
			type:String
		}
	},
	trading_partner_id:{
		type:String
	}
});

var Patient = module.exports = mongoose.model('Patient', PatientSchema);
//for encapsulation

/*outside accessibilty of Patients
module.exports.getPatients = function (callback,limit) {
	Patient.find(callback).limit(limit);
}*/

module.exports.getPatient = function (id, callback,limit) {
	Patient.findById(id,callback).limit(limit);
}
