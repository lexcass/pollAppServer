const Service = require('feathers-nedb').Service;


class UserService extends Service {
	
	constructor(options) {
		super(options);
	}
	
	get(id, params){
		return super.get(id, params);
	}
	
	create(data, params) {
		
		// Required fields
		if (data.google_id === undefined ||
			data.google_token === undefined ||
			data.username === undefined)
		{
			return null;
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


exports.UserService = UserService;