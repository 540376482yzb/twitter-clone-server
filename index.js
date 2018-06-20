var createError = require('http-errors')
var express = require('express')
var path = require('path')
var logger = require('morgan')
const PORT = process.env.PORT || 8080
require('dotenv').config()
const {dbConnect} = require('./db')
const {DATABASE_URL} = require('./config')
const {createServer} = require('http')
const {graphiqlExpress, graphqlExpress} = require('apollo-server-express')
const {makeExecutableSchema} = require('graphql-tools')
const typeDefs = require('./graphql/schema')
const resolvers = require('./graphql/resolvers/index')
const schema = makeExecutableSchema({
	typeDefs,
	resolvers
})
const seeding = require('./mocks')
const app = express()
app.use(logger('dev'))
app.use(express.json())
app.use(express.static(path.join(__dirname, 'public')))

app.use(
	'/graphiql',
	graphiqlExpress({
		endpointURL: '/graphql'
	})
)
app.use(
	'/graphql',
	graphqlExpress({
		schema
	})
)
// catch 404 and forward to error handler
app.use(function(req, res, next) {
	next(createError(404))
})

// error handler
app.use(function(err, req, res, next) {
	// set locals, only providing error in development
	res.locals.message = err.message
	res.locals.error = req.app.get('env') === 'development' ? err : {}

	// render the error page
	res.status(err.status || 500)
	res.render('error')
})

//#===================Create GraphiQL server ====================>
const graphQLServer = createServer(app)
seeding()
graphQLServer.listen(PORT, err => {
	if (err) console.log(err)
	else {
		dbConnect(DATABASE_URL)
		console.log('server is up')
	}
})
