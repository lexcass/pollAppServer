const NeDB = require('nedb');

module.exports = function(app) {

	const model = new NeDB({
		filename: './db-data/users',
		autoload: true
	});

	// Restraints
	
	model.ensureIndex({ fieldName: 'google_id', unique: true }, function (err) {
		if (err) console.log(err.message);
	});

	model.ensureIndex({ fieldName: 'google_token', unique: true }, function (err) {
		if (err) console.log(err.message);
	});

	model.ensureIndex({ fieldName: 'username', unique: true }, function (err) {
		if (err) console.log(err.message);
	});

	return model;
};
