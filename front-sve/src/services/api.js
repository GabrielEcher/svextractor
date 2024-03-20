import axios from "axios";

export const api_db = new axios.create({
    baseURL: "http://127.0.0.1:8000/api/",
})

export const api_auth = new axios.create({
    baseURL: "https://svextractor.diamaju.com.br/auth/"
})


