class TestQuery {
	
	execute(app) {
		
		// Create a poll.
		app.service('polls').create({
			title: 'Pollio',
			creator_id: '25869',
			choices: ['good', 'bad', 'neither', 'idk bro'],
			date_created: 'Today'
		}).then(poll => console.log("Created " + poll.title)).catch(err => console.log("Failed to create poll."));
	
		// Find polls with title 'Pollio' and print the field 'choices' only.
		app.service('polls').find({ query: { title: 'Pollio', $select: ['choices'] } }).then(q => console.log("Found Poll: ", q));
		
		
		// Create a user.
		app.service('users').create({
			google_id: 'wendys', 
			google_token: '599', 
			username: 'baconator', 
			date_created: '11-22-33'
		}).then(user => console.log("Created " + user)).catch(err => console.log("Failed to create user."));
		
		// Find users with google_id = 'wendys' and print their username.
		app.service('users').find({ query: { google_id: 'wendys', $select: ['username'] } }).then(q => console.log("Found User: ", q));
		
		
		
		
		// This is the query used to setup data for TestVoteQuery.
		
		/*app.service('polls').create({
			title: 'Can we fix it?',
			creator_id: '12345',
			choices: ['Yes we can!', 'I give up!', 'idk'],
			date_created: 'Today'
		}).then(poll => console.log("Created " + poll.title)).catch(err => console.log("Failed to create poll."));
		
		app.service('users').create({
			google_id: '555555', 
			google_token: 'asdkfjwieo234us8df', 
			username: 'bob_the_builder', 
			date_created: '11-22-33'
		}).then(user => console.log("Created " + user)).catch(err => console.log("Failed to create user."));*/
	}
}

exports.TestQuery = TestQuery;