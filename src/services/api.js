import axios from "./axios.customize";

const URL_BACKEND = "http://localhost:8080";

export const callLogin = (username, password) => {
  return axios.post("http://localhost:8080/api/v1/auth/login", {
    username,
    password,
  });
};
