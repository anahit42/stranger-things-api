const http = require('http')

const app = require('./app')

/**
 * @param portValue
 * @return {number | boolean}
 * @description Normalize a port into a number.
 */
function _normalizePort (portValue) {
  const port = parseInt(portValue, 10)

  if (!isNaN(port) && port >= 0) {
    return port
  }

  return false
}

/**
 * @description Get port from environment and store in Express.
 */
const port = _normalizePort(process.env.PORT || '3000')
app.set('port', port)

/**
 * @description Create HTTP server.
 */
const server = http.createServer(app)

/**
 * @private
 * @param error
 * @description Event listener for HTTP server "error" event.
 */
function _onError (error) {
  if (error.syscall !== 'listen') {
    throw error
  }

  const bind = typeof port === 'string'
    ? `Pipe ${port}`
    : `Port ${port}`

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      console.error(`${bind} requires elevated privileges`)
      process.exit(1)
    case 'EADDRINUSE':
      console.error(`${bind} is already in use`)
      process.exit(1)
    default:
      throw error
  }
}

/**
 * @private
 * @description Event listener for HTTP server "listening" event.
 */
function _onListening () {
  const address = server.address()
  const bind = typeof address === 'string'
    ? `pipe ${address}`
    : `${address.port}`

  console.log('\n', 'Server started:')
  console.log('\t', `Port: ${bind}`)
  console.log('\t', `Node version: ${process.version}`)
  console.log('\t', `Start date: ${(new Date()).toUTCString()} `, '\n')
}

/**
 * @description Listen.
 */
server.listen(port)
server.on('error', _onError)
server.on('listening', _onListening)
