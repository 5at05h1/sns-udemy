import axios from "axios";

const apiClient = axios.create({
  baseURL: "http://localhost:5000/api",
  headers: {
    "Content-Type": "application/json",
    // "Autorization": `Beare {token}`
  },
});

export default apiClient;
