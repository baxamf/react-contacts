import { useState, useEffect } from "react";
import DBQueries from "../services";

export default function useContacts() {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    DBQueries.getContacts().then((data) => setContacts(data));
  }, []);

  const deleteContact = (id) => {
    DBQueries.deleteContact(id).then(() => {
      const update = contacts.filter((contact) => contact.id !== id);
      setContacts(update);
    });
  };

  const addContact = (newContact) => {
    if (newContact.id) {
      DBQueries.editContact(newContact).then((data) => {
        setContacts(
          contacts.map((contact) => (contact.id === data.id ? data : contact))
        );
      });
    } else {
      DBQueries.addContact(newContact).then((data) =>
        setContacts([...contacts, data])
      );
    }
  };

  return { contacts, deleteContact, addContact };
}
