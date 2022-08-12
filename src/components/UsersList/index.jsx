import { Link, useOutletContext } from "react-router-dom";
import { Container, Button, Stack } from "@mui/material";
import User from "../User";

export default function UsersList() {
  const { contacts, deleteContact } = useOutletContext();

  return (
    <Container>
      <Button variant="text">
        <Link to="create">Create</Link>
      </Button>

      <Stack spacing={2} alignItems="center">
        {contacts.map((contact) => (
          <User key={contact.id} contact={contact} onRemove={deleteContact} />
        ))}
      </Stack>
    </Container>
  );
}
