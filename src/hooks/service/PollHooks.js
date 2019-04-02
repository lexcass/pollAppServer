const errors = require('feathers-errors');

module.exports = {
	before: {
		create(context) {
			if (context.data.title === '') {
				return Promise.reject(new errors.GeneralError('Poll title cannot be blank.'));
			}
		}
	}
}