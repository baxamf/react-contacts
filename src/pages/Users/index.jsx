import { useEffect } from "react";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import api from "../../api";

export default function Users() {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    api.get().then((resp) => setContacts(resp.data));
  }, []);

  return (
    <div>
      <Outlet context={contacts} />
    </div>
  );
}
