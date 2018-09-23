const Joi = require('joi')

const { VALIDATIONS } = require('../../../config')
const { API_LIMIT_MAX_VALUE, TOPICS } = VALIDATIONS

module.exports = {
  /**
   * @description Validation schema for listing tweets.
   */
  listTweetsArgsSchema: {
    query: {
      language: Joi.string().length(2),
      limit: Joi.number().positive().max(API_LIMIT_MAX_VALUE).integer(),
      offset: Joi.number().positive().integer(),
      topic: Joi.string().valid(TOPICS)
    }
  }
}
