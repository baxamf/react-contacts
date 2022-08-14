import "./App.css";
import { Container, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";

function App() {
  const navigate = useNavigate();
  return (
    <Container
      sx={{
        minHeight: "100vh",
        display: "grid",
        padding: "2rem",
        placeContent: "center",
        justifyItems: "center",
        textAlign: "center",
      }}
    >
      <Typography variant="h3" component="h3" sx={{ color: "primary.main" }}>
        Click button bellow
        <br />
        to see list of contacts
      </Typography>
      <KeyboardDoubleArrowDownIcon
        sx={{ fontSize: 50, margin: 5, color: "primary.main" }}
      />
      <Button
        sx={{ padding: ".75rem 2rem" }}
        variant="contained"
        size="large"
        onClick={() => navigate("/users")}
      >
        Users
      </Button>
    </Container>
  );
}

export default App;
