const { User } = require('../models/index.js')
const { comparePassword } = require('../helpers/bcrypt.js')
const { signToken } = require('../helpers/jwt.js')

const { verify } = require('../helpers/googleOauth')

class UserController {

    //REGISTER
    static register(req, res, next) {
        let newUser = {
            email: req.body.email,
            password: req.body.password
        }

        User.create(newUser)
            .then(result => {
                res.status(201).json({
                    id: result.id,
                    email: result.email,
                })
            })
            .catch(err => {
                next(err)
            })
    }
  
    static async postLogin(req, res, next) {
      let { email, password } = req.body
      try {
        const userLogin = await User.findOne({ where: { email } })
        if (!userLogin) {
          throw { name: "Invalid email & password!" }
        }
        if (!comparePassword(password, userLogin.password)) {
          throw { name: "Invalid email & password!" }
        } else {
          const token = signToken({ email })
          res.status(200).json({
            access_token: token
          })
        }
      } catch (err) {
        next(err)
      }
    }
  
    static async postGoogleLogin(req, res, next) {
      const id_token = req.headers.id_token
      console.log({
        id_token
      })
      try {
        const googlePayload = await verify(id_token)
        const email = googlePayload.email
        console.log({ email })

        const user = await User.findOne({ where: { email } })
        console.log({
          user
        })

        if (user) {
          if (!comparePassword(process.env.GOOGLE_DEFAULT_PASSWORD, user.password)) {
            throw { name: 'Please login via website' }
          } else {
            const token = signToken({ email: user.email })
            res.status(200).json({
              access_token: token
            })
          }
        } else {
          console.log(`${email} belum terdaftar!`)
          let newGoogleUser = await User.create({
            email,
            password: process.env.GOOGLE_DEFAULT_PASSWORD
          })
          const token = signToken({ email })
          console.log(token)
          res.status(201).json({
            access_token: token
          })
        }
      } catch (err) {
        console.log(err.errors)
        next(err)
      }
    }


    //LOGIN
    // static login(req, res, next) {
    //     let inputEmail = req.body.email
    //     let inputPassword = req.body.password
    //     let token = signToken(payload)

    //     User.findOne({
    //         where: {
    //             email: inputEmail
    //         }
    //     })
    //         .then(result => {
    //             if (result !== null) {
    //                 if (comparePassword(inputPassword, result.password)) {
    //                     let payload = {
    //                         email: result.email
    //                     }
    //                     res.status(200).json({ token })
    //                 }
    //                 else {
    //                     throw { name: "Bad Request" };
    //                 }

    //             } else {
    //                 throw { name: "Bad Request" };
    //             }
    //         })
    //         .catch(err => {
    //             next(err)
    //         })
    // }
}

module.exports = UserController;