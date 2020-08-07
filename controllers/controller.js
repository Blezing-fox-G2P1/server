const axios = require('axios')

class Controller {

  static hitMealDB(req, res, next) {
    try {
      let payload = axios({
        method: 'GET',
        url: 'https://www.themealdb.com/api/json/v1/1/random.php'
      })
      .then(result=>{
        console.log(result.data.meals[0].strMeal);
        res.status(200).json({
          name: result.data.meals[0].strMeal,
          type: result.data.meals[0].strArea,
          youtube: result.data.meals[0].strYoutube,
          thumb: result.data.meals[0].strMealThumb,
          instruction: result.data.meals[0].strInstructions
        }
        )
      })
      .catch(err=>{
        res.status(500).json(err)
      })
    } catch (err) {
      res.status(500).json(err)
    }

  }
  static hitZomato(req, res, next) {
    try {
      if (!req.query.entity_id) {
        throw { name: 'You dont have quentity id' }
      } else {
        axios({
          method: 'GET',
          url: `https://developers.zomato.com/api/v2.1/search`,
          params: {
            'entity_id': 74,
            'entity_type': 'city',
            'sort': 'rating',
            'count': 20
          },
          headers: {
            'user-key': process.env.ZOMATO_KEY
          }
        })
          .then(result => {
            res.status(200).json(result.data.restaurants)
          })
          .catch(next)
      }
    } catch (err) {
      next(err)
    }
  }
}

module.exports = Controller