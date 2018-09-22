const Joi = require('joi')

const TweetsSchema = require('./schemas/tweets.schema')
const { listTweetsArgsSchema } = TweetsSchema

const { VALIDATIONS } = require('../../config')
const { OPTIONS } = VALIDATIONS

const { ValidationHandlerUtil } = require('../../utils')

class TweetsValidation {
  /**
   * @param {Object} req
   * @param {Object} res
   * @param {Function} next
   * @description Validate arguments for tweets listing.
   */
  static validateListTweetsArgs (req, res, next) {
    const listTweetsArgs = { query: req.query }
    const { error } = Joi.validate(listTweetsArgs, listTweetsArgsSchema, OPTIONS)

    return ValidationHandlerUtil.handleResults(error, next)
  }
}

module.exports = TweetsValidation
