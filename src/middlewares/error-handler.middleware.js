class ErrorHandlerMiddleware {
  /**
   * @param {Object} error
   * @param {Object} req
   * @param {Object} res
   * @param {Function} next
   * @description Error handler middleware function.
   */
  static handleError (error, req, res, next) {
    const ERROR_CASE = ErrorHandlerMiddleware.ERROR_CASES[error.name] || ErrorHandlerMiddleware.ERROR_CASES.DEFAULT

    const errorResponse = {
      status: ERROR_CASE.statusCode,
      code: ERROR_CASE.errorCode,
      message: ERROR_CASE.errorMessage || error.message
    }

    // temp. log to explore and add more cases.
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
  DEFAULT: {
    statusCode: 500,
    errorCode: 'InternalError',
    errorMessage: 'The server encountered an internal error. Try again later.'
  }
}

module.exports = ErrorHandlerMiddleware
