import axios from "axios"

export const getArticles = () => {
    return axios.get(`https://nc-news-z45s.onrender.com/api/articles`)
}

export const getArticleById = (article_id) => {
    return axios.get(`https://nc-news-z45s.onrender.com/api/articles/${article_id}`)
}

export const getCommentsByArticle = (article_id) => {
    return axios.get(`https://nc-news-z45s.onrender.com/api/articles/${article_id}/comments`)
}