const Service = require('feathers-nedb').Service;
const moment = require('moment');


// JSON Schema
/*
	CREATE
	{
		"creator_id": "XXXX",
		"title": "XXXX",
		"choices": ["XXX", "XXX", "XXX"],
		"secret": true/false,
		"access_code": "XXX or -1 if secret = false"
		"expiration_date": DATETIME
		"results": [int, int, int]
	}

	PATCH
	{
		"active": true/false
	}

	PATCH
	{
		"results": [int, int, int]
	}
*/


class PollService extends Service {

	constructor(options) {
		super(options);
	}

	get(id, params) {
		return super.get(id, params);
	}

	create(data, params) {
		data.active = true;
		data.date_created = moment().format('YYYY-MM-DD HH:mm:ss');

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


exports.PollService = PollService;
