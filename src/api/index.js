const router = require('express').Router()

const statisticsApi = require('./statistics/statistics.api')
const tweetsApi = require('./tweets/tweets.api')

router.use('/statistics', statisticsApi)
router.use('/tweets', tweetsApi)

module.exports = router
