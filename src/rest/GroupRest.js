import axios from "axios";
import { AbstractRest } from "./AbstractRest";

export class GroupRest extends AbstractRest {
  createGroup(signUpFormId) {
    return axios.post(this.baseUrl + "/group", { event: { id: signUpFormId } });
  }

  getGroup(eventId, groupName) {
    return axios.post(
      this.baseUrl + "/group/event/" + eventId + "/phrase/" + groupName,
    );
  }
}
