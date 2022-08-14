import { Outlet } from "react-router-dom";
import { Grid } from "@mui/material";
import useContacts from "../../hooks/useContacts";

export default function Users() {
  const { contacts, deleteContact, addContact } = useContacts();

  return (
    <Grid
      container
      spacing={2}
      direction="column"
      justifyContent="center"
      alignItems="center"
      sx={{
        padding: 5,
        gap: 5,
      }}
    >
      <Outlet context={{ contacts, deleteContact, addContact }} />
    </Grid>
  );
}
