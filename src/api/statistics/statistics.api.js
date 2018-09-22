const router = require('express').Router()

const StatisticsService = require('./statistics.service')

const { ValidationsMiddleware } = require('../../middlewares')
const { StatisticsValidationMiddleware } = ValidationsMiddleware

router.get('/',
  StatisticsValidationMiddleware.validateGetStatisticsArgs,
  StatisticsService.getStatistics
)

module.exports = router
