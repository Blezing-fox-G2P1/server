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
}

module.exports = Controller