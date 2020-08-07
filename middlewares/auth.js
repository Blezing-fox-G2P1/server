const { verifyToken } = require('../helpers/jwt.js')
const { User } = require('../models/index.js')

async function authentication(req, res, next) {
  const token = req.headers.token
  try {
    if (!token) {
      throw { name: 'You are unauthenticated to make this request' }
    } else {
      console.log(token)
      const { email } = verifyToken(token)
      const user = await User.findOne({ where: { email } })
      if (!user) {
        throw { name: 'Your token invalid' }
      } else {
        next()
      }
    }
  } catch (err) {
    console.log(err)
    next({
      name: err.name
    })
  }
}

module.exports = { authentication }