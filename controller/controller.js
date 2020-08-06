const { Model1, Model2 } = require('../models/index.js')

class Controller {
  // static rootPage(req, res) {
  //   res.render('home')
  // }

  //read
  static showAll(req, res, next) {
    Model1.findAll({})
      .then(data => {
        
      })
      .catch(err => {
        
      })
  }
}

module.exports = { Controller }