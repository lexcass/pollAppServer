// eslint-disable-next-line no-unused-vars

const PollHooks = require('./PollHooks');

module.exports = function (app) {
	
	app.service('/polls').hooks(PollHooks);
};
