const Service = require('feathers-nedb').Service;


class PollService extends Service {
	
	constructor(options) {
		super(options);
	}
	
	get(id, params) {
		return super.get(id, params);
	}
	
	create(data, params) {
		
		// Required fields
		if (data.title === undefined ||
			data.creator_id === undefined ||
			data.choices === undefined)
		{
			return null;
		}
		
		// Defaults
		data.active = true;
		
		if (data.secret === undefined)
		{
			data.secret = false;
		}
		if (data.access_code === undefined)
		{
			data.access_code = -1;
		}
		
		return super.create(data, params);
	}
	
	
	update(id, data, params) {
		
		return super.update(id, data, params);
	}
	
	remove(id, params) {
		return super.remove(id, params);
	}
  
	patch(id, data, params){}
  
	setup(app, path) {}
}


exports.PollService = PollService;