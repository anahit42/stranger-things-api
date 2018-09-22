const router = require('express').Router()

const tweetsApi = require('./tweets/tweets.api')

router.use('/tweets', tweetsApi)

module.exports = router
