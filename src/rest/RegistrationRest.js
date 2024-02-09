import axios from "axios";

export class RegistrationRest{
    baseUrl = "https://api.hackhpi.org/v1";

    addRegistration(){
        return axios.post(this.baseUrl+"/registration")
    }
    verifyToken(token){
        return axios.post(this.baseUrl+"/registration/verify/"+token);
    }

}