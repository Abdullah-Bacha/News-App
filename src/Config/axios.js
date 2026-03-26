import axios from "axios";

const isDev = import.meta.env.DEV;

const api = axios.create({
    baseURL: isDev ? "https://newsapi.org/v2" : "/api/news",
    timeout: 15000,
});

export default api;