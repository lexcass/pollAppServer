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
	
	// Create dummy vote
	/*
	app.service('votes').create({
		
		poll_id: 'uckTq8Y9BP09ImQy',
		user_id: 'WYQdUPDGf4XKsjDe',
		choice:  'idk bro'
		
	}).then(v => console.log(v)).catch(err => ("Failed to create vote."));
	
	app.service('votes').find({ query: { choice: 'sandwich' } }).then(q => console.log(q)).catch(err => console.log(err));
	*/
	
	
	// Create dummy poll
	/*
	app.service('polls').create({
		//title: 'Pollio',
		creator_id: '25869',
		choices: ['good', 'bad', 'neither', 'idk bro'],
		date_created: 'Today'
	}).then(poll => console.log("Created " + poll.title)).catch(err => console.log("Failed to create poll."));
	
	app.service('polls').find({ query: { title: 'Pollio', $select: ['choices'] } }).then(q => console.log("Found: ", q));
	*/
	
	
	// Create dummy user
	/*
	app.service('users').create({
		google_id: '599', 
		google_token: 'wendys', 
		username: 'baconator', 
		date_created: '11-31-18'})
		.then(user => console.log("Created " + user)).catch(err => console.log("Failed to create user."));
		
	app.service('users').find({ query: { google_id: '599', $select: ['username'] } }).then(q => console.log("Found: ", q));
	*/
};
