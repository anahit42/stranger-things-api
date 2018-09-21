const CUSTOM_ERRORS = [
  'PathNotFoundError',
  'ValidationError'
]

const ERRORS = CUSTOM_ERRORS.reduce((acc, className) => {
  acc[className] = ({
    [className]: class extends Error {
      constructor (msg) {
        super(msg)
        this.name = this.constructor.name
      }
    }
  })[className]

  return acc
}, {})

module.exports = ERRORS
