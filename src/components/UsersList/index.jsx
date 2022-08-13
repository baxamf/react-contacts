import { useNavigate, useOutletContext } from "react-router-dom";
import { Grid, Button, Stack } from "@mui/material";
import AddBoxIcon from "@mui/icons-material/AddBox";
import User from "../User";

export default function UsersList() {
  const { contacts, deleteContact } = useOutletContext();
  const navigate = useNavigate();

  return (
    <>
      <Button
        variant="contained"
        size="large"
        startIcon={<AddBoxIcon />}
        sx={{
          padding: "0.75rem 2rem",
        }}
        onClick={() => navigate("create")}
      >
        Create new contact
      </Button>

      <Stack spacing={2} alignItems="center">
        {contacts.map((contact) => (
          <User key={contact.id} contact={contact} onRemove={deleteContact} />
        ))}
      </Stack>
    </>
  );
}
