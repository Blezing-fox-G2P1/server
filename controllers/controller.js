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
    
  }
  static hitEdamam(req, res) {
    try {

        let input ={
            //paramete url input yang dibutuhkan
            quantity,
            size,
            food
        }
      axios({
        method: 'GET',
        //sample (bisa di tes) -> 'https://api.edamam.com/api/nutrition-data?app_id=d9f25735&app_key=947d762a17290cc043b8c781c5b41095&ingr=1%20large%20potato'
        url: `https://api.edamam.com/api/nutrition-data?app_id=${process.env.EDAMAM_ID}&app_key=${process.env.EDAMAM_KEY}&ingr=${input.quantity}%20${input.size}%20${input.food}`
      })
      .then(result=>{

        //belum dimanipulasi baru dimunculkan return datanya
          let finalResult ={
              calories,
              totalWeight,
              dietLabels,
              healthLabels,
              totalNutrients,
          }

          res.status(200).json(result.data)
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