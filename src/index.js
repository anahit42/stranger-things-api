const { MongooseConnection } = require('./storages')

const { MONGODB } = require('./config')

/**
 * @description Init Mongoose connection.
 */
MongooseConnection.init(MONGODB.CONNECTION_STRING)
