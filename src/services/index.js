import api from "../api";
import { CONTACTS_URI } from "../constants";

export default class DBQueries {
  static getContacts() {
    return api.get(CONTACTS_URI).then((resp) => resp.data);
  }
  static deleteContact(id) {
    return api.delete(CONTACTS_URI + "/" + id).then((resp) => resp.data);
  }
  static addContact(newContact) {
    return api.post(CONTACTS_URI, newContact).then((resp) => resp.data);
  }
  static editContact(newContact) {
    return api
      .put(CONTACTS_URI + "/" + newContact.id, newContact)
      .then((resp) => resp.data);
  }
}
