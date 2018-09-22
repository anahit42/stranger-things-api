class ErrorHandlerMiddleware {
  /**
   * @param {Object} error
   * @param {Object} req
   * @param {Object} res
   * @param {Function} next
   * @description Error handler middleware.
   */
  static handleError (error, req, res, next) {
    const { ERROR_CASES } = ErrorHandlerMiddleware
    const _error = ERROR_CASES[error.name] || ERROR_CASES.InternalServerError

    const errorResponse = {
      status: _error.statusCode,
      code: _error.errorCode,
      message: _error.errorMessage || error.message
    }

    errorResponse.status === 500 && console.log('Error: ', error.name, error.message)

    res.status(errorResponse.status).json(errorResponse)
  }
}

ErrorHandlerMiddleware.ERROR_CASES = {
  ValidationError: {
    statusCode: 400,
    errorCode: 'InvalidInput'
  },
  PathNotFoundError: {
    statusCode: 404,
    errorCode: 'NotFound'
  },
  InternalServerError: {
    statusCode: 500,
    errorCode: 'InternalError',
    errorMessage: 'Internal server error. Try again later.'
  }
}

module.exports = ErrorHandlerMiddleware
