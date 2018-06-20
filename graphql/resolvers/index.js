const TweetResolver = require('./tweet')

module.exports = {
	Query: {
		getTweet: TweetResolver.getTweet,
		getTweets: TweetResolver.getTweets
	},
	Mutation: {
		createTweet: TweetResolver.createTweet,
		updateTweet: TweetResolver.updateTweet,
		deleteTweet: TweetResolver.deleteTweet
	}
}
