
import axios from 'axios'

export default function getRecipes() {
    const url = 'https://www.themealdb.com/api/json/v1/1/random.php'
    return axios.get(url)
  }