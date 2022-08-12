import { Link } from "react-router-dom";

export default function User({ name, surname, phone, id }) {
  return (
    <li>
      <h2>{name}</h2>
      <h2>{surname}</h2>
      <h3>{phone}</h3>
      <Link to={id}>link</Link>
    </li>
  );
}
