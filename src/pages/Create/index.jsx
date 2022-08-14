import { useOutletContext } from "react-router-dom";
import Form from "../../components/Form";

export default function CreateUser() {
  const { addContact } = useOutletContext();

  return <Form addContact={addContact} title="Create new contact" />;
}
