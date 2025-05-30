import axios from "axios";

export class RegistrationRest{
    baseUrl = "https://pems-api.hackhpi.org/v1";
    //baseUrl = "http://localhost:8080/v1";

    addRegistration(data){
        return axios.post(this.baseUrl+"/registration", data)
    }

    acceptWithToken(registrationId, token) {
        return axios.post(`${this.baseUrl}/registration/id/${registrationId}/accept/token/${token}`);
    }

}
