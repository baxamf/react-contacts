import { useEffect, useState } from "react";
import DBQueries from "../services";

export default function useContact(id) {
  const [contact, setContact] = useState(null);

  useEffect(() => {
    DBQueries.getContact(id).then((data) => setContact(data));
  }, []);

  return contact;
}
