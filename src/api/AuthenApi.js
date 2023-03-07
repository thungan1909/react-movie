import API_KEY from "../utils/apiKey";
import AxiosClient from "./AxiosClient";
import AxiosClient3 from "./AxiosClient3";
export default class AuthenApi
{
    static async CreateRequestToken()
    {
       let data ;
       let token;
        try{
            const response = await AxiosClient3.get(`/authentication/token/new?api_key=${API_KEY}`);
            // token = response.request_token;
            data = response;
        }
        catch (error) 
        {
            throw new Error(error.message);
        }
       return data;
    }
    static async ApproveToken({token})
    {
      
        let data;
        try{
            const response = await AxiosClient.get(`/authenticate/${token}`);
            data = response;
            console.log("response",response);
        }
        catch (error) 
        {
            throw new Error(error.message);
        }
        return data;
    }
}