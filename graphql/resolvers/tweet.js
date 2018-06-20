const Tweet = require('../../models/tweet')

module.exports = {
	getTweet: (_, {_id}) => Tweet.findById(_id),
	getTweets: () => Tweet.find({}).sort({createdAt: -1}),
	createTweet: (_, args) => Tweet.create(args),
	updateTweet: (_, {_id, ...rest}) => Tweet.findByIdAndUpdate(_id, rest, {new: true}),
	deleteTweet: async (_, {_id}) => {
		try {
			await Tweet.findByIdAndRemove(_id)
			return {
				message: 'delete success'
			}
		} catch (err) {
			throw err
		}
	}
}
