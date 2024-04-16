import axios from "axios";

const getAuthToken = () => {
    return localStorage.getItem('access_token');
};

export const api_db = axios.create({
    baseURL: "https://svextractor.diamaju.com.br/api",
});

export const api_auth = axios.create({
    baseURL: "https://svextractor.diamaju.com.br/auth",
});

api_db.interceptors.request.use(config => {
    const authToken = getAuthToken();
    if (authToken) {
        config.headers['Authorization'] = authToken;
    }
    return config;
});


