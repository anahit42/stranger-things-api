class CommonUtil {
  /**
   * @param {Object} object
   * @return {Object}
   * @description Delete object undefined keys.
   */
  static deleteObjectUndefinedKeys (object) {
    if (!object) return {}

    Object.keys(object).forEach((key) => object[key] === undefined && delete object[key])

    return object
  }
}

module.exports = CommonUtil
