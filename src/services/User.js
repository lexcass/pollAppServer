const Service = require('feathers-nedb').Service;
const moment = require('moment');

// JSON Schema
/*
	CREATE
	{
		"google_id": "XXXX",
		"google_token": "XXXX",
		"username": "XXXXX"
	}

	PATCH
	{
		"username": "XXXXX"
	}
*/


class UserService extends Service {

	constructor(options) {
		super(options);
	}

	get(id, params){
		return super.get(id, params);
	}

	create(data, params) {
		data.date_created	= moment().format('YYYY-MM-DD HH:mm:ss');
		return super.create(data, params);
	}

	update(id, data, params) {}

	remove(id, params) {
		return super.remove(id, params);
	}

	patch(id, data, params) {
		return super.patch(id, data, params);
	}

	setup(app, path) {}
}


exports.UserService = UserService;
