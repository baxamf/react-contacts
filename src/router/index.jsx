import { Routes, Route } from "react-router-dom";
import App from "../App";
import UsersList from "../components/UsersList";
import CreateUser from "../pages/Create";
import EditUser from "../pages/Edit";
import Users from "../pages/Users";

export default function ContactsRouter() {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="users" element={<Users />}>
        <Route index element={<UsersList />} />
        <Route path=":id" element={<EditUser />} />
        <Route path="create" element={<CreateUser />} />
      </Route>
      <Route path="*" element={<App />} />
    </Routes>
  );
}
