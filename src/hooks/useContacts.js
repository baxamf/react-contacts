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
      setContacts((prev) => {
        prev.filter((contact) => contact.id !== id);
      });
    });
  };

  return { contacts, setContacts, deleteContact };
}
