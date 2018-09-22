const Joi = require('joi')

const StatisticsSchema = require('./schemas/statistics.schema')
const { getStatisticsArgsSchema } = StatisticsSchema

const { VALIDATIONS } = require('../../config')
const { OPTIONS } = VALIDATIONS

const { ValidationHandlerUtil } = require('../../utils')

class StatisticsValidation {
  /**
   * @param {Object} req
   * @param {Object} res
   * @param {Function} next
   * @description Validate arguments for getting statistics.
   */
  static validateGetStatisticsArgs (req, res, next) {
    const getStatisticsArgs = { query: req.query }
    const { error } = Joi.validate(getStatisticsArgs, getStatisticsArgsSchema, OPTIONS)

    return ValidationHandlerUtil.handleResults(error, next)
  }
}

module.exports = StatisticsValidation
