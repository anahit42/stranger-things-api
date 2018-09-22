const { TweetsModel } = require('../../models')

const { ResponseHandlerUtil, SuccessHandlerUtil } = require('../../utils')

class TweetsService {
  /**
   * @param {Object} req
   * @param {Object} res
   * @param {Function} next
   * @description List tweets.
   */
  static async listTweets (req, res, next) {
    const limit = parseInt(req.query.limit, 10) || 20
    const offset = parseInt(req.query.offset, 10) || 0
    const { topic } = req.query
    const query = topic ? { topic } : {}

    try {
      const [ tweets, totalCount ] = await Promise.all([
        TweetsModel.listTweets({ query, limit, offset }),
        TweetsModel.getTweetsTotalCount(query)
      ])

      ResponseHandlerUtil.setTotalCountHeader(res, totalCount)

      return SuccessHandlerUtil.handleList(res, tweets)
    } catch (error) {
      next(error)
    }
  }
}

module.exports = TweetsService
