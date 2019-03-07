const NeDB = require('nedb');

module.exports = function(app) {
	
	const model = new NeDB({
		filename: './db-data/polls',
		autoload: true
	});
	
	// Restraints
	model.ensureIndex({ fieldName: 'title', unique: false, sparse: true }, function (err) {
		if (err) console.log(err.message);
	});
	
	model.ensureIndex({ fieldName: 'creator_id', unique: false, sparse: true }, function (err) {
		if (err) console.log(err.message);
	});
	
	model.ensureIndex({ fieldName: 'active', unique: false, sparse: true }, function (err) {
		if (err) console.log(err.message);
	});
	
	model.ensureIndex({ fieldName: 'private', unique: false, sparse: true }, function (err) {
		if (err) console.log(err.message);
	});
	
	model.ensureIndex({ fieldName: 'access_code', unique: true, sparse: true }, function (err) {
		if (err) console.log(err.message);
	});
	
	model.ensureIndex({ fieldName: 'choices', unique: false, sparse: true }, function (err) {
		if (err) console.log(err.message);
	});
	
	model.ensureIndex({ fieldName: 'date_created', unique: false, sparse: true }, function (err) {
		if (err) console.log(err.message);
	});
	
	return model;
};