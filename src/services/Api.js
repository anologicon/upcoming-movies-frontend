import axios from 'axios';

const BEARER = process.env.REACT_APP_BEARER;

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

const api = axios.create({
  baseURL: `${API_BASE_URL}`,
  headers: {
    Authorization: `Bearer ${BEARER}`,
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*"
  }
});

export default api;