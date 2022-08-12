import { useCallback, useEffect } from "react";
import { useState } from "react";
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

  return { contacts, setContacts, deleteContact };
}
