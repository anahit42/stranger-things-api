class PathNotFoundError extends Error {
  constructor (message) {
    super()
    this.message = message
    this.name = this.constructor.name
  }
}

class ValidationError extends Error {
  constructor (message) {
    super()
    this.message = message
    this.name = this.constructor.name
  }
}

module.exports = {
  PathNotFoundError,
  ValidationError
}
