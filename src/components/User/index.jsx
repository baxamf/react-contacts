import { Link } from "react-router-dom";
import {
  Card,
  CardContent,
  CardActions,
  Typography,
  Button,
} from "@mui/material";

export default function User({ contact, onRemove }) {
  const { name, surname, phone, id } = contact;

  return (
    <Card sx={{ minWidth: 345 }}>
      <CardContent>
        <Typography gutterBottom variant="h4">
          {name}
          <br />
          {surname}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {phone}
        </Typography>
      </CardContent>
      <CardActions>
        <Button>
          <Link to={id}>Edit</Link>
        </Button>
        <Button variant="contained" onClick={() => onRemove(id)}>
          Delete
        </Button>
      </CardActions>
    </Card>
  );
}
