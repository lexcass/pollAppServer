// eslint-disable-next-line no-unused-vars

var PollService = require('./Poll').PollService;
var PollModel   = require('../models/PollModel')();

var UserService = require('./User').UserService;
var UserModel   = require('../models/UserModel')();

var VoteService = require('./Vote').VoteService;
var VoteModel   = require('../models/VoteModel')();

module.exports = function (app) {
	
	app.use('/polls', new PollService( { Model: PollModel } ));
	app.use('/users', new UserService( { Model: UserModel } ));
	app.use('/votes', new VoteService( { Model: VoteModel } ));
};
