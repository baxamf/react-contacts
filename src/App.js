import "./App.css";
import { Container, Button } from "@mui/material";
import { Link } from "react-router-dom";

function App() {
  return (
    <Container fixed>
      <Button variant="contained">
        <Link to="/users">Users</Link>
      </Button>
    </Container>
  );
}

export default App;
