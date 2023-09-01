import axios from "axios";
import { BASE_URL, API_KEY_PARAM } from "../config";

export class PixabayApi {
  static async fetchDefaultImages() {
    try {
      const response = await axios.get(
        `${BASE_URL}${API_KEY_PARAM}&image_type=photo&pretty=true`
      );
      // console.log(response.data.hits);
      return response.data.hits;
    } catch (e) {
      console.log(e);
    }
  }

  static async fetchByQuery(query) {
    try {
      const response = await axios.get(
        `${BASE_URL}${API_KEY_PARAM}&q=${query}`
      );
      // console.log(response.data.hits);
      return response.data.hits;
    } catch (e) {
      console.log(e);
    }
  }
}
