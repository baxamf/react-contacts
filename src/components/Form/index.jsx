import { TextField, Box, Typography, Button } from "@mui/material/";
import AddBoxIcon from "@mui/icons-material/AddBox";
import SaveIcon from "@mui/icons-material/Save";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const interfaceUser = {
  name: "",
  surname: "",
  phone: "",
};

export default function Form({ addContact, title, contact }) {
  const [newUser, setNewUser] = useState(contact ? contact : interfaceUser);
  let navigate = useNavigate();

  const handleChange = (e) => {
    setNewUser({ ...newUser, [e.target.name]: e.target.value });
  };

  const goBack = () => {
    navigate("/users");
  };

  const lookChanges = (cont, newCont) => {
    for (let key in cont) {
      if (cont[key] !== newCont[key]) {
        return false;
      }
    }
    return true;
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (contact && lookChanges(contact, newUser)) {
      goBack();
      return;
    }
    addContact(newUser);
    goBack();
  };

  return (
    <>
      <Typography variant="h3" component="h3" sx={{ color: "primary.main" }}>
        {title}
      </Typography>
      <Box
        component="form"
        display="grid"
        gap={3}
        minWidth={400}
        onSubmit={onSubmitHandler}
      >
        <TextField
          id="outlined-name"
          label="Name"
          name="name"
          value={newUser.name}
          required
          onChange={handleChange}
        />
        <TextField
          id="outlined-name"
          label="Surname"
          name="surname"
          value={newUser.surname}
          required
          onChange={handleChange}
        />
        <TextField
          id="outlined-name"
          label="Phone"
          name="phone"
          value={newUser.phone}
          required
          onChange={handleChange}
        />
        <Button
          variant="contained"
          type="submit"
          size="large"
          startIcon={contact ? <SaveIcon /> : <AddBoxIcon />}
          sx={{
            marginTop: 2,
            padding: 1.5,
          }}
        >
          {contact ? "Save changes" : "Add new contact"}
        </Button>
        <Button
          onClick={goBack}
          variant="outlined"
          size="large"
          startIcon={<ArrowBackIcon />}
          sx={{
            padding: 1.5,
          }}
        >
          {contact ? "Cancel & Back to Users" : "Back to Users"}
        </Button>
      </Box>
    </>
  );
}
