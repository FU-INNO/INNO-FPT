import axios from "axios";

export const login = async ({ id, token }) => {
  return await axios.post("/v1/api/auth/login", { id, tokenLogin: token });
};
