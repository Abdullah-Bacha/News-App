import { createContext, useContext, useState } from "react";
import api from "../Config/axios";

const NewsContext = createContext();

const NewsContextProvider = ({ children }) => {

    const [news, setNews] = useState([]);
    
    const [loading, setLoading] = useState(false);
    
    const fetchNews = async (url = "/everything?q=bitcoin") => {
        setLoading(true);
        try {
            let requestUrl;
            if (import.meta.env.DEV) {
                // Dev: call NewsAPI directly with key
                requestUrl = `${url}&apiKey=${import.meta.env.VITE_API_KEY}`;
            } else {
                // Production: use Vercel serverless proxy
                requestUrl = `?url=${encodeURIComponent(url)}`;
            }
            const response = await api.get(requestUrl);
            setLoading(false);
            return response.data;
        } catch (error) {
            console.error(error);
            setLoading(false);
        }
    }
    return (
        <NewsContext.Provider value={{ news, setNews, fetchNews, loading }}>
            {children}
        </NewsContext.Provider>
    )
}
const useNewsContext = () => {
    return useContext(NewsContext);
}
export { NewsContextProvider, useNewsContext };