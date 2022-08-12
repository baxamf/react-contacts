import api from "../api";

export default class DBQueries {
  static getContacts() {
    return api.get().then((resp) => resp.data);
  }
  static deleteContact(id) {
    return api.delete("/" + id).then((resp) => resp.data);
  }
}
