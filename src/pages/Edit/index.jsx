import { useParams } from "react-router-dom";

export default function EditUser() {
  let { id } = useParams();
  return <div>Edit User {id}</div>;
}
