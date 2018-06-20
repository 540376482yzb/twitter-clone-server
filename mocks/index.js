const faker = require('faker')
const Tweet = require('../models/tweet')
const TOTAL = 10

const seeding = async () => {
	try {
		await Tweet.remove()
		await Array.from({length:TOTAL}).forEach(async () => {
			await Tweet.create({text:faker.lorem.paragraph(1)})
		})
	} catch (err) {
		throw err
	}
}

module.exports = seeding
