class TestVoteQuery {
	
	execute(app) {
		
		// Create a vote.
		app.service('votes').create({
			user_id: 'O3S83PwlOW5V18lR',
			poll_id: 'bMnaEStQ0lu7as4J',
			choice: 'Yes we can!',
			date_created: 'Today'
		}).then(vote => console.log("Voted ", vote.choice)).catch(err => console.log("Failed to create vote."));
	
		// Find vote for a choice (string) and print the user and poll IDs that the vote was cast for.
		app.service('votes').find({ query: { choice: 'Yes we can!', $select: ['user_id', 'poll_id'] } }).then(q => console.log("Found: ", q));
	}
}

exports.TestVoteQuery = TestVoteQuery;