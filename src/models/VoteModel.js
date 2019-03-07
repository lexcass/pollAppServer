const NeDB = require('nedb');

module.exports = function(app) {
	
	const model = new NeDB({
		filename: './db-data/votes',
		autoload: true
	});
	
	// Restraints
	model.ensureIndex({ fieldName: 'user_id', unique: false, sparse: true }, function (err) {
		if (err) console.log(err.message);
	});
	
	model.ensureIndex({ fieldName: 'poll_id', unique: false, sparse: true }, function (err) {
		if (err) console.log(err.message);
	});
	
	model.ensureIndex({ fieldName: 'choice', unique: false, sparse: true }, function (err) {
		if (err) console.log(err.message);
	});
	
	model.ensureIndex({ fieldName: 'date_voted', unique: false, sparse: true }, function (err) {
		if (err) console.log(err.message);
	});
	
	return model;
};