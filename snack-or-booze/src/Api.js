import axios from "axios";

const BASE_API_URL = "http://localhost:5000";

/* 
  json-server will give you CRUD endpoints on snacks and drinks.
  Here we've provided you with a single action to get all drinks.

  You'll need to add to this class as you build features for the app.
*/

class SnackOrBoozeApi {

  static async getSnacks() {
    const result = await axios.get(`${BASE_API_URL}/snacks`);
    return result.data;
  }

  static async getDrinks() {
    const result = await axios.get(`${BASE_API_URL}/drinks`);
    return result.data;
  }

  static async addItem({name, description, recipe, serve, type}){
    if(!name || !description || !recipe || !serve || !type){
      return undefined;
    }
    const fields = {
      "id" : name.toLowerCase(),
      "name": name,
      "description" : description,
      "recipe" : recipe,
      "serve" : serve
    }
    const url = `${BASE_API_URL}/${type}s`
    console.log("URL: ", url)
    try {
      await axios.post( url, fields )
    } catch(e){
      return undefined
    }
    return true
  }
}

export default SnackOrBoozeApi;
