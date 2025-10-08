// api.ts
import axios from "axios";

const api = axios.create({
  baseURL: "https://enovarlab-server.onrender.com/api/v1",
});

export default api;
