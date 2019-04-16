const NeDB = require('nedb');

module.exports = function(app) {
	
	const model = new NeDB({
		filename: './db-data/poll_access',
		autoload: true
	});
	
	return model;
};