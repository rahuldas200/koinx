import { apiConnector } from "../apiConnecter";
import {currencyendpoints} from "../apis"

const {TRENDING_API, PERFORMENCE_API } = currencyendpoints;


export const topTrending = async () => {
    let data = [];

    try {

        const response = await apiConnector("GET",TRENDING_API);

        if(!response) {
            throw new Error("TRENDING_API response ",response);
        }

        data = response?.data;   

    } catch (error) {
        console.log(error," TRENDING_API error ");

    }
    return data;
}

export const Coinperformence = async () => {
    let result = [];
    try{

        const response = await apiConnector("GET",PERFORMENCE_API);
        
        console.log(response);

        if(!response.data) {
            throw new Error("PERFORMENCE_API response",response)
        }
        
        result = response?.data;
    
    }catch (error) {
        console.log(error,"Coin performence api error");
    }
   
    return result;
    
}