import axios from "axios";

const URL = "https://62d926c290883139359c0527.mockapi.io/users";

export default axios.create({
  baseURL: URL,
  headers: {
    "Content-Type": "application/json",
  },
});
