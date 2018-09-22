const { TweetsModel } = require('../../models')

const { SuccessHandlerUtil } = require('../../utils')

class StatisticsService {
  /**
   * @param {Object} req
   * @param {Object} res
   * @param {Function} next
   * @description Get statistics.
   */
  static getStatistics (req, res, next) {
    const { topic } = req.query

    return TweetsModel.getTweetsStatisticsAboutTopic(topic)
      .then((statistics) => SuccessHandlerUtil.handleGet(res, statistics))
      .catch(next)
  }
}

module.exports = StatisticsService
