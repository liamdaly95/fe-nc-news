import axios from "axios"

export const getArticles = (setArticles) => {
    return axios.get(`https://nc-news-z45s.onrender.com/api/articles`).then(({data}) => {
        setArticles(data.articles)
    })
}