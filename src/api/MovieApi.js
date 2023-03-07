import API_KEY from "../utils/apiKey";
import BASE_URL from "../utils/baseURL";

import AxiosClient from "./AxiosClient";
export default class MovieApi
{
  
    static async getTrending  ({currentSegmented}) {
        let data = [];
        try{
            const response = await AxiosClient.get(`/trending/all/${currentSegmented}?api_key=${API_KEY}`);
            data = response.results;
        }
        catch (error) 
        {
            throw new Error(error.message);
        }
        return data;
    }
    static async getTopRated(){
        let data = [];
        try{
            const response = await AxiosClient.get(`/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`);
            data = response.results;
        }
        catch(error)
        {
            throw new Error(error.message);
        }
        return data;
    }

}