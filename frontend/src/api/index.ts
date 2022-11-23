import axios from "axios";
//configuração base do axios
export const Api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});
