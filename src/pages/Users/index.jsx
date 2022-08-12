import { Outlet } from "react-router-dom";
import { Container } from "@mui/material";
import useContacts from "../../hooks/useContacts";

export default function Users() {
  const { contacts, setContacts, deleteContact } = useContacts();

  return (
    <Container fixed>
      <Outlet context={{ contacts, deleteContact }} />
    </Container>
  );
}
