import axios from "axios"

export const getArticles = () => {
    return axios.get(`https://nc-news-z45s.onrender.com/api/articles`)
}