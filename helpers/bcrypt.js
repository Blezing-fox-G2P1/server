const bcrypt = require('bcryptjs');

function hashPassword(password) {
    const salt = bcrypt.genSaltSync(process.env.SALT_COUNT)
    return bcrypt.hashSync(password, salt)
}

function comparePassword(input, database) {
    return bcrypt.compareSync(input, database)
}

module.exports = { hashPassword, comparePassword }