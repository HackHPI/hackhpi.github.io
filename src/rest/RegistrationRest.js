import axios from "axios";

export class RegistrationRest{
    baseUrl = "https://api.hackhpi.org/v1";
    //baseUrl = "http://localhost:8080/v1";

    addRegistration(data){
        return axios.post(this.baseUrl+"/registration", data)
    }
    verifyToken(token){
        return axios.post(this.baseUrl+"/registration/verify/"+token);
    }

}