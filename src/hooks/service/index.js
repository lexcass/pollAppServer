// eslint-disable-next-line no-unused-vars

const PollHooks = require('./PollHooks');
const VoteHooks = require('./VoteHooks');

module.exports = function (app) {
	
	app.service('/polls').hooks(PollHooks);
	app.service('/votes').hooks(VoteHooks);
};
