const Joi = require('joi')

const { VALIDATIONS } = require('../../../config')
const { TOPICS } = VALIDATIONS

module.exports = {
  /**
   * @description Validation schema for getting statistics.
   */
  getStatisticsArgsSchema: {
    query: {
      topic: Joi.string().valid(TOPICS).required()
    }
  }
}
