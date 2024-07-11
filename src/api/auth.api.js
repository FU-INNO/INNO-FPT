import axios from "axios";

export const login = async ({ id, token }) => {
  return await axios.post("http://localhost:8080/v1/api/auth/login", { id, tokenLogin: token });
};
