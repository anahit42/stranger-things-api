const { InputValidationError } = require('./errors.util')

class ValidationHandlerUtil {
  /**
   * @param {Object} error
   * @param {Function} next
   * @description Validation results handler.
   */
  static handleResults (error, next) {
    if (error) {
      const errorMessage = error && error.details && error.details[0] && error.details[0].message
      return next(new InputValidationError(errorMessage))
    }

    return next()
  }
}

module.exports = ValidationHandlerUtil
