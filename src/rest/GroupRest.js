import axios from "axios";
import { AbstractRest } from "./AbstractRest";

export class GroupRest extends AbstractRest {
  createGroup(signUpFormId, name) {
    return axios.post(this.baseUrl + "/group", { event: { id: signUpFormId }, name });
  }

  getGroup(eventId, groupName) {
    return axios.get(
      this.baseUrl + "/group/event/" + eventId + "/phrase/" + groupName,
    );
  }
}
