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
      $project: {
        topic: 1,
        tweetId: 1,
        userId: 1,
        createdAt: 1,
        favoriteCount: 1,
        retweetCount: 1,
        language: 1,
        text: 1
      }
    }

    const groupStage = {
      $group: {
        _id: {
          month: { $month: '$createdAt' },
          day: { $dayOfMonth: '$createdAt' },
          year: { $year: '$createdAt' }
        },
        tweets: { $push: '$$ROOT' },
        totalCount: { $sum: 1 }
      }
    }

    return TweetsModel.model.aggregate([ matchStage, projectStage, groupStage ])
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
