const NeDB = require('nedb');

module.exports = function(app) {
	
	const model = new NeDB({
		filename: './db-data/votes',
		autoload: true
	});
	
	// Restraints
	
	
	return model;
};