class SuccessHandlerUtil {
  /**
   * @param {Object} res
   * @param {Object} code
   * @param {Object} [data]
   * @description Send response with given HTTP code constant.
   */
  static _sendResponse (res, code, data) {
    if (code.STATUS === 204) { return res.status(code.STATUS).json() }

    const response = {
      status: code.STATUS,
      message: code.MESSAGE,
      data
    }

    res.status(response.status).json(response)
  }

  /**
   * @param {Object} res
   * @param {Array} result
   * @description Handle list method requests.
   */
  static handleList (res, result) {
    const { SUCCESS_200 } = SuccessHandlerUtil.HTTP_CODE_CONSTANTS

    SuccessHandlerUtil._sendResponse(res, SUCCESS_200, result || [])
  }

  /**
   * @param {Object} res
   * @param {Object} [result]
   * @description Handle get method requests.
   */
  static handleGet (res, result) {
    const { SUCCESS_200 } = SuccessHandlerUtil.HTTP_CODE_CONSTANTS

    SuccessHandlerUtil._sendResponse(res, SUCCESS_200, result || null)
  }
}
SuccessHandlerUtil.HTTP_CODE_CONSTANTS = {
  SUCCESS_200: { STATUS: 200, MESSAGE: 'OK' },
  SUCCESS_201: { STATUS: 201, MESSAGE: 'Created' },
  SUCCESS_204: { STATUS: 204 }
}

module.exports = SuccessHandlerUtil
