const jwt = require('jsonwebtoken');

function signToken(payload) {
    let token = jwt.sign(payload, process.env.SECRET_JWT)
    return token
}

function verifyToken(token) {
    try {
        let output = jwt.verify(token, process.env.SECRET_JWT)
        return output
    } catch (err) {
        return err
    }
}

module.exports = { signToken, verifyToken };