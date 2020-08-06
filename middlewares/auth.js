const { verifyToken } = require('../helpers/jwt.js')
const { User } = require('../models/index.js')

async function authentication(req, res, next) {
    let token = req.headers.token
    if (token) {

        try {
            let payload = verifyToken(token)

            let currentUser = await User.findOne({
                where: {
                    email: payload.email
                }
            })

            if (currentUser) {
                req.currentUser = currentUser
                next();
            } else {
                next ({
                    code: "401",
                    message: "Please login first!"
                })
            }

        } catch (err) {
            next ({
                code: "500",
                message: "Internal server error"
            })
        }

    } else {
        next ({
            code: "401",
            message: "Please login first!"
        })
    }
}

module.exports = { authentication }