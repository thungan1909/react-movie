import API_KEY from "../utils/apiKey";
import AxiosClient from "./AxiosClient";
import AxiosClient3 from "./AxiosClient3";
export default class AuthenApi
{
    static async CreateRequestToken()
    {
       let data ;
    //    let token;
        try{
            const response = await AxiosClient3.get(`/authentication/token/new?api_key=${API_KEY}`);
            // token = response.request_token;
            data = response.request_token;
            // this.ApproveToken({token});
            // data = response;
        }
        catch (error) 
        {
            throw new Error(error.message);
        }
       return data;
    }
    // static async ApproveToken({token})
    // {
    //     window.location.href = `https://www.themoviedb.org/authenticate/${token}?redirect_to=http://localhost:3000/home`;
    //     this.CreateSection({token});
    // }
    static async CreateSection({token})
    {
        window.location.href = `https://www.themoviedb.org/authenticate/${token}`;
        
        let data;
        try{
            console.log("Res");
            const response =await AxiosClient3.post(`/authentication/session/new?api_key=${API_KEY}&request_token=${token}`, );
            data = await response;
            console.log("Res", response);
           
        }
        catch (error) 
        {
            throw new Error(error.message);
        }
        return data;
    }
}