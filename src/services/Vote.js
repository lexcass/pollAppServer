const Service = require('feathers-nedb').Service;
const moment = require('moment');


// JSON Schema
/*
	CREATE
	{
		"user_id": "XXXX",
		"poll_id": "XXXX",
		"choice": "XXXXX"
	}
*/


class VoteService extends Service {
	
	constructor(options) {
		super(options);
	}
	
	get(id, params){
		return super.get(id, params);
	}
	
	create(data, params) {
		data.date_created = moment().format('YYYY-MM-DD HH:mm:ss');
		return super.create(data, params);
	}
	
	update(id, data, params) {}
	
	remove(id, params) {
		return super.remove(id, params);
	}
  
	patch(id, data, params){}
  
	setup(app, path) {}
}


exports.VoteService = VoteService;