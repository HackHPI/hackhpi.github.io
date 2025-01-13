import axios from "axios";

export class ParticipantRest {
  //baseUrl = "https://pems-api.hackhpi.org/v1";

  baseUrl = "http://localhost:8080/v1/participant";

  verifyToken(participantId, token) {
    return axios.post(`${this.baseUrl}/id/${participantId}/verify/token/${token}`);
  }
}
