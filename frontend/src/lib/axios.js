import axios from "axios";

export const axiosInstances = axios.create({
  baseURL: "http://localhost:5001/api",
  withCredentials: true,
});
