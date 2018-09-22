const router = require('express').Router()

const TweetsService = require('./tweets.service')

const { ValidationsMiddleware } = require('../../middlewares')
const { TweetsValidationMiddleware } = ValidationsMiddleware

router.get('/',
  TweetsValidationMiddleware.validateListTweetsArgs,
  TweetsService.listTweets
)

module.exports = router
