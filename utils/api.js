import axios from "axios";

export const getArticles = () => {
  return axios.get(`https://nc-news-z45s.onrender.com/api/articles`);
};

export const getArticleById = (article_id) => {
  return axios.get(`https://nc-news-z45s.onrender.com/api/articles/${article_id}`);
};

export const updateArticleVote = (article_id, inc_votes) => {
  return axios.patch(`https://nc-news-z45s.onrender.com/api/articles/${article_id}`, { inc_votes });
};

export const getCommentsByArticle = (article_id) => {
    return axios.get(`https://nc-news-z45s.onrender.com/api/articles/${article_id}/comments`)
}

export const postNewComment = (username, body, article_id) => {
  return axios.post(`https://nc-news-z45s.onrender.com/api/articles/${article_id}/comments`, {body, username})
}


export const deleteComment = (comment_id) => {
  return axios.delete(`https://nc-news-z45s.onrender.com/api/comments/${comment_id}`);
};
