import axios from "axios";

export const DOMAIN = "localhost";
export const API_BASE_URL = `http://${DOMAIN}:8080/api/v1`;

const Api = axios.create({
  baseURL: `${API_BASE_URL}`,
  timeout: 10000,
  params: {},
});

export default Api;
