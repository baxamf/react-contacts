import { Link, useOutletContext } from "react-router-dom";
import User from "../User";

export default function UsersList() {
  const contacts = useOutletContext();
  return (
    <div>
      <Link to="create">Create</Link>
      <ul>
        {contacts.map((contact) => (
          <User key={contact.id} {...contact} />
        ))}
      </ul>
    </div>
  );
}
