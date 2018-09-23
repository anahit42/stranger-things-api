const mongoose = require('mongoose')

const { TweetsSchema } = require('./schemas')

class TweetsModel {
  /**
   * @param {string} topic
   * @return {Promise<Array>}
   * @description Get tweets statistics about a topic.
   */
  static getTweetsStatisticsAboutTopic (topic) {
    const matchStage = { $match: { topic } }
    const projectStage = {
      $project: { createdAt: 1 }
    }

    const groupStage = {
      $group: {
        _id: {
          month: { $month: '$createdAt' },
          day: { $dayOfMonth: '$createdAt' },
          year: { $year: '$createdAt' }
        },
        month: { '$first': { $month: '$createdAt' } },
        day: { '$first': { $dayOfMonth: '$createdAt' } },
        year: { '$first': { $year: '$createdAt' } },
        totalCount: { $sum: 1 }
      }
    }

    const secondProjectStage = {
      $project: {
        _id: 0,
        month: 1,
        day: 1,
        year: 1,
        totalCount: 1
      }
    }

    return TweetsModel.model.aggregate([ matchStage, projectStage, groupStage, secondProjectStage ])
  }

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
