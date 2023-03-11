import API_KEY from "../utils/apiKey";
import AxiosClient from "./AxiosClient";
import AxiosClient3 from "./AxiosClient3";
export default class AuthenApi {
  static async CreateRequestToken() {
    let data;
    //    let token;
    try {
      const response = await AxiosClient3.get(
        `/authentication/token/new?api_key=${API_KEY}`
      );

      data = response.request_token;
    } catch (error) {
      throw new Error(error.message);
    }
    return data;
  }
  static async CreateSession({ approvedToken }) {
    try {
      const response = await AxiosClient3.post(
        `/authentication/session/new?api_key=${API_KEY}&request_token=${approvedToken}`
      );
      return response.session_id;
    } catch (error) {
      throw new Error(error.message);
    }
  }
}
