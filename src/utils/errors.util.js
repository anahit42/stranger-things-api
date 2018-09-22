class InputValidationError extends Error {
  constructor (message) {
    super()
    this.message = message
    this.name = this.constructor.name
  }
}

class PathNotFoundError extends Error {
  constructor (message) {
    super()
    this.message = message
    this.name = this.constructor.name
  }
}

module.exports = {
  InputValidationError,
  PathNotFoundError

}
