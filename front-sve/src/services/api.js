import axios from "axios";

export const api_db = new axios.create({
    baseURL: "https://svextractor.diamaju.com.br",
})

export const api_auth = new axios.create({
    baseURL: "https://svextractor.diamaju.com.br"
})


