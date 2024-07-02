import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://taskmanagebackend-l0jp.onrender.com/api",
  withCredentials: true,
});

export default apiClient;
