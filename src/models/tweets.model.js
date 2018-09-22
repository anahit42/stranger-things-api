const mongoose = require('mongoose')

const { TweetsSchema } = require('./schemas')

class TweetsModel {
  /**
   * @param {Object} [query]
   * @return {Promise<number> | Query }
   * @description Get tweets total count.
   */
  static getTweetsTotalCount (query) {
    return TweetsModel.model.find(query).countDocuments()
  }

  /**
   * @param {Object} payload
   * @param {Object} payload.query
   * @param {number} payload.limit
   * @param {number} payload.offset
   * @return {Promise<Array>}
   * @description List tweets.
   */
  static listTweets (payload) {
    const { query, limit, offset } = payload

    return TweetsModel.model.find(query).skip(offset).limit(limit)
  }
}

TweetsModel.model = mongoose.model('Tweets', TweetsSchema)

module.exports = TweetsModel
