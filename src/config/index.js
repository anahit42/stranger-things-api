module.exports = {
  MONGODB: {
    CONNECTION_STRING: process.env.MONGODB_CONNECTION_STRING
  },
  VALIDATIONS: {
    API_LIMIT_MAX_VALUE: 20,
    OPTIONS: {
      abortEarly: true,
      allowUnknown: false,
      convert: true
    },
    TOPICS: ['Trump', 'ISIS', 'Esports', 'Lady Gaga']
  }
}
