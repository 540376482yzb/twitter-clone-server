const mongoose = require('mongoose')

const TweetSchema = new mongoose.Schema(
	{
		text: String
	},
	{timestamps: true}
)

const Tweet = mongoose.model('Tweet', TweetSchema)

module.exports = Tweet
