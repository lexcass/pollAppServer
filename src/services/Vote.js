const Service = require('feathers-nedb').Service;


class VoteService extends Service {
	
	constructor(options) {
		super(options);
	}
	
	get(id, params){
		return super.get(id, params);
	}
	
	create(data, params) {
		
		// Required fields
		if (data.user_id === undefined ||
			data.poll_id === undefined ||
			data.choice === undefined)
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


exports.VoteService = VoteService;