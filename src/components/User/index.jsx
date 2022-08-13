import { useNavigate } from "react-router-dom";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import {
  Card,
  CardContent,
  CardActions,
  Typography,
  Button,
} from "@mui/material";

export default function User({ contact, onRemove }) {
  const { name, surname, phone, id } = contact;
  const navigate = useNavigate();

  return (
    <Card
      sx={{
        minWidth: 400,
        padding: 4,
        backgroundColor: "#f2f2f2",
        boxShadow: "0 0 30px rgba(0,0,0,.2)",
      }}
    >
      <CardContent>
        <Typography variant="h5" fontWeight="bold" mb={1}>
          {name}
          <br />
          {surname}
        </Typography>
        <Typography variant="h6" color="text.secondary">
          {phone}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          variant="contained"
          startIcon={<EditIcon />}
          size="large"
          onClick={() => navigate(id)}
        >
          Edit
        </Button>
        <Button
          variant="outlined"
          startIcon={<DeleteIcon />}
          size="large"
          onClick={() => onRemove(id)}
        >
          Delete
        </Button>
      </CardActions>
    </Card>
  );
}
