import { useNavigate, useOutletContext } from "react-router-dom";
import { Grid, Button } from "@mui/material";
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

      <Grid
        container
        sx={{
          maxWidth: "900px",
          display: "grid",
          justifyContent: "center",
          gridTemplateColumns: "repeat(auto-fill, 430px)",
          gap: "2rem",
        }}
      >
        {contacts.map((contact) => (
          <User key={contact.id} contact={contact} onRemove={deleteContact} />
        ))}
      </Grid>
    </>
  );
}
