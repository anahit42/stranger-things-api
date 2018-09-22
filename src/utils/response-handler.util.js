class ResponseHandlerUtil {
  /**
   * @param {Object} res
   * @param {number} totalCount
   */
  static setTotalCountHeader (res, totalCount) {
    res.set('X-Total-Count', totalCount)
  }
}

module.exports = ResponseHandlerUtil
