const errors = require('@feathersjs/errors');


module.exports = {
	before: {
		create(context) {
			var _app = context.app;
			var userId = context.data.user_id;
			var pollId = context.data.poll_id;
			var userError = {};
			
			console.log("User ID: " + userId);
			
			_app.service('/users').get(userId).catch(err => err);
			
			return context;
		}
	}
}