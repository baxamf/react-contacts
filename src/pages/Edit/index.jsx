import { useParams, useOutletContext } from "react-router-dom";
import Form from "../../components/Form";

export default function EditUser() {
  const { contacts, addContact } = useOutletContext();
  const { id } = useParams();
  const contact = contacts.find((contact) => contact.id === id);

  return (
    contact && (
      <Form
        addContact={addContact}
        contact={contact}
        title={`Edit ${contact.name}'s contact`}
      />
    )
  );
}
